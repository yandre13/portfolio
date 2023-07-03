import { cn } from '@/lib/cn'

export default function SkillCard({
  title,
  svg,
  color,
}: {
  title: string
  svg: string
  color: 'sky' | 'orange' | 'black' | 'blue' | 'green' | 'yellow' | 'darkblue'
}) {
  return (
    <div className="group relative grayscale transition-all duration-500 hover:filter-none">
      {/* <div
        className={cn(
          'absolute inset-2 bg-gray-950 transition-all duration-200 group-hover:animate-pulse group-hover:blur'
          // {
          //   'bg-sky-500': color === 'sky',
          //   'bg-orange-500': color === 'orange',
          //   'bg-gray-950': color === 'black',
          //   'bg-blue-500': color === 'blue',
          //   'bg-green-400': color === 'green',
          //   'bg-yellow-400': color === 'yellow',
          //   'bg-blue-700': color === 'darkblue',
          // }
        )}
      ></div> */}
      <div
        className={cn(
          'relative flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-4 transition-all duration-500',
          {
            'hover:border-sky-500': color === 'sky',
            'hover:border-orange-500': color === 'orange',
            'hover:border-gray-950': color === 'black',
            'hover:border-blue-500': color === 'blue',
            'hover:border-green-400': color === 'green',
            'hover:border-yellow-400': color === 'yellow',
            'hover:border-blue-700': color === 'darkblue',
          }
        )}
      >
        <div
          className="flex h-14 w-14 items-center justify-center overflow-hidden"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <h5 className="text-sm font-medium text-secondary transition-colors duration-700 group-hover:text-textBody">
          {title}
        </h5>
      </div>
    </div>
  )
}
