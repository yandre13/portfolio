'use client'
import Image from 'next/image'
import Button from '../button'
import { ArrowRight } from 'lucide-react'
import { useCallback, useId, useRef, useState } from 'react'
import { useAnimateCard } from '@/hooks/use-animate-card'
import { cn } from '@/lib/cn'
import { X } from 'lucide-react'
import useMediaQuery from '@/hooks/use-media-query'
import type { Project } from '@/types'

export default function Card({
  title,
  description,
  image,
  callToAction,
  skills,
}: Project) {
  const id = useId()

  const [open, setOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const isLg = useMediaQuery('(min-width: 992px)')

  const openOnLg = isLg && !open

  const { handleCardClose, handleCardOpen } = useAnimateCard({
    elementRef: ref.current,
    open,
    onOpen: async () => {
      setOpen(true)
      await new Promise((resolve) => setTimeout(resolve, 200))
      setShowContent(true)
    },
    onClose: () => setOpen(false),
    onInitClose: () => setShowContent(false),
    sizes: {
      open: {
        maxWidth: 640,
        maxHeight: 640,
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
          src={image.url}
          width={640}
          height={640}
          alt="Portfolio"
          className="aspect-video w-full rounded-md object-cover"
        />
      </div>
      <div className="px-4 pb-5">
        <h3
          className="mb-2 mt-5 line-clamp-1 text-lg font-semibold
      text-textTitle xl:text-xl"
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
        <div
          className={cn(
            'max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in',

            showContent && 'max-h-96 opacity-100'
          )}
        >
          <h4 className="my-5 font-semibold">{skills.title}</h4>

          <ul className="mb-2 flex gap-3">
            {skills.skill_items.map((skill) => (
              <li key={skill.id}>
                <div
                  className="flex h-10 w-10 items-center justify-center overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: skill.svg }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Button
            to={openOnLg ? '#' : callToAction.url}
            text={openOnLg ? callToAction.text : 'See live'}
            icon={<ArrowRight className="h-5 w-5" />}
            external={openOnLg ? false : !!callToAction.external}
            onClick={handleCardOpen}
          />
        </div>
      </div>
    </div>
  )
}

//TODO: add jotai
