import { cn } from '@/lib/cn'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function ExpCard({
  date,
  title,
  at,
  content,
  variant,
  hideLine,
  spacer,
}: {
  date: string
  title: string
  at: string
  content: string
  variant?: 'ed'
  hideLine?: boolean
  spacer?: boolean
}) {
  return (
    <>
      {spacer && (
        <hr className="my-8 h-[1px] border-none bg-gradient-to-r from-primary to-primary/30 md:hidden" />
      )}
      <div
        className={cn(
          'relative flex gap-5',
          !hideLine &&
            'after:absolute after:left-5 after:top-0 after:-z-10 after:h-[calc(100%_+_32px)] after:w-[1px] after:bg-gradient-to-b after:from-primary after:to-primary/30'
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
          {variant === 'ed' ? (
            <GraduationCap className="h-5 w-5" />
          ) : (
            <Briefcase className="h-5 w-5" />
          )}
        </div>
        <div className="flex flex-1 flex-col items-baseline gap-2.5">
          <div className="inline-flex rounded-lg bg-primary px-2 py-0.5 opacity-70">
            <span
              className="text-xs font-medium uppercase text-white
            xl:text-sm"
            >
              {date}
            </span>
          </div>
          <h4
            className="text-lg font-semibold text-textTitle
          xl:text-xl"
          >
            {title} - <span className="text-primary">{at}</span>
          </h4>
          <p
            className="text-sm text-textBody
          xl:text-base"
          >
            {content}
          </p>
        </div>
      </div>
    </>
  )
}
