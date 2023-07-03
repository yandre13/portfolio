'use client'
import Image from 'next/image'
import Button from '../button'
import { ArrowRight } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { useAnimateCard } from '@/hooks/use-animate-card'
import { cn } from '@/lib/cn'
import { X } from 'lucide-react'
import { urlForImage } from '../../../sanity/lib/image'
import type { ImageProps } from '@/types/globals'

function generateLastSelector(
  max: number,
  baseSelector: string,
  selector: string
) {
  let result = baseSelector

  Array.from({ length: max - 1 }).forEach(() => {
    result += ` + ${selector}`
  })

  return result
}

export default function Card({
  title,
  description,
  coverImage,
}: {
  title: string
  description: string
  coverImage: ImageProps
}) {
  const id = useId()

  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const { handleCardClose, handleCardOpen } = useAnimateCard({
    elementRef: ref.current,
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    sizes: {
      open: {
        maxWidth: 600,
        maxHeight: 600,
      },
    },
  })

  return (
    <div className="w-full rounded-md shadow-md" id={id} ref={ref}>
      <div className="flex justify-end">
        <div
          className={cn(
            'absolute top-0 m-2 flex h-6 w-6 transition-opacity',
            open ? 'opacity-100' : 'opacity-0'
          )}
        >
          <button
            className="flex w-full items-center justify-center rounded-full bg-zinc-800 ring-1 ring-white"
            onClick={handleCardClose}
          >
            <X className="h-4 w-4 text-white" />
          </button>
        </div>
        <Image
          src={urlForImage(coverImage).url()}
          width={640}
          height={640}
          alt="Portfolio"
          className="aspect-video w-full rounded-md object-cover"
        />
      </div>
      <div className="px-4 pb-5">
        <h3
          className="mb-2 mt-5 text-lg font-semibold text-textTitle
      xl:text-xl"
          onClick={handleCardClose}
        >
          {title}
        </h3>
        <p
          className="line-clamp-3 text-sm
      text-textBody xl:text-base"
        >
          {description}
        </p>
        {/* <div>Technologies used:</div> */}
        <div className="mt-6">
          <Button
            text="View"
            icon={<ArrowRight className="h-5 w-5" />}
            onClick={handleCardOpen}
          />
        </div>
      </div>
    </div>
  )
}
