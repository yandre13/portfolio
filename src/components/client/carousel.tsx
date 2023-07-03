'use client'
import useMediaQuery from '@/hooks/use-media-query'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export default function Carousel({ children }: { children: React.ReactNode }) {
  const isLg = useMediaQuery('(min-width: 992px)')
  const isXl = useMediaQuery('(min-width: 1280px)')

  const gap = isXl ? 32 : isLg ? 20 : 16

  return (
    <Splide
      options={{
        pagination: false,
        arrows: false,
        perMove: isLg ? 2 : 1,
        perPage: isLg ? 4 : 1.2,
        gap,
        padding: isLg ? 0 : 16,
        focus: 'center',
        speed: 800,
        // height: isLg ? 120 : 'auto',
        destroy: isLg,
      }}
      className="w-full cursor-move lg:container [&>div]:pb-3"
    >
      {children}
      <div className="Overlay fixed left-0 top-0 -z-10 h-full w-full cursor-auto bg-black bg-opacity-50 opacity-0" />
    </Splide>
  )
}

export function CarouselSlide({ children }: { children: React.ReactNode }) {
  return <SplideSlide>{children}</SplideSlide>
}
