import { useCallback, useEffect } from 'react'

import {
  calculateTranslate,
  getSequenceClose,
  getSequenceOpen,
} from '@/utils/carousel'
import { animate } from 'framer-motion'
import useMediaQuery from './use-media-query'

export const MAX_PER_VIEW = 4

export function useAnimateCard({
  open,
  elementRef,
  onOpen,
  onClose,
  sizes,
}: {
  open: boolean
  elementRef: HTMLDivElement | null
  onClose?: () => void
  onOpen?: () => void
  sizes: {
    open: {
      maxWidth: number
      maxHeight: number
    }
  }
}) {
  const isMd = useMediaQuery('(min-width: 768px)')
  const newId = elementRef?.id.replace(/:/g, '\\:')!

  const handleCardOpen = useCallback(() => {
    if (!open && isMd) {
      onOpen?.()
      const exes = calculateTranslate(elementRef, sizes.open)
      const parentLi = elementRef?.parentElement!
      const maxWidth = parentLi.clientWidth - MAX_PER_VIEW
      const sequence = getSequenceOpen(
        newId,
        exes,
        sizes.open.maxWidth,
        maxWidth
      )
      // @ts-ignore
      animate(sequence)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, isMd, newId, open])
  const handleCardClose = useCallback(() => {
    if (elementRef) {
      elementRef?.firstElementChild?.scrollTo?.({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (open && isMd) {
      const parentLi = elementRef?.parentElement!
      const maxWidth = parentLi.clientWidth - MAX_PER_VIEW
      const sequence = getSequenceClose(newId, maxWidth)
      // @ts-ignore
      animate(sequence).then(() => {
        const sequence2 = [
          [
            `#${newId}`,
            {
              position: 'static',
              zIndex: 'auto',
              background: 'rgba(0,0,0,0)',
            },
            { duration: 0.001, at: 0.7, delay: 0.5 },
          ],
        ]
        // @ts-ignore
        animate(sequence2)
        // setOpen(false)
        // setOpenModal(false)
        onClose?.()
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, isMd, newId, onClose, open])

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        handleCardClose()
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleCardClose, open])

  useEffect(() => {
    const overlay = document.querySelector('.Overlay') as HTMLElement
    if (overlay && open) {
      overlay.addEventListener('click', handleCardClose)
    }
    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleCardClose)
      }
    }
  }, [handleCardClose, open])
  useEffect(() => {
    if (open) {
      const sequence = [
        [`.TextInfo`, { opacity: 1 }, { duration: 0.6, at: 0.2 }],
      ]
      // @ts-ignore
      animate(sequence)
    }
  }, [open])

  return {
    handleCardOpen,
    handleCardClose,
  }
}
