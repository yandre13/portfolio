export function calculateTranslate(
  element: HTMLElement | null,
  size: {
    maxWidth: number
    maxHeight: number
  }
) {
  if (!element) throw new Error('Element is null')
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const elementWidth = size.maxWidth
  const elementHeight = size.maxHeight
  const offsetLeft = element?.getBoundingClientRect().left
  const offsetTop = element?.getBoundingClientRect().top
  const translateX = windowWidth / 2 - elementWidth / 2 - offsetLeft
  const translateY = windowHeight / 2 - elementHeight / 2 - offsetTop

  return {
    x: Math.round(translateX),
    y: Math.round(translateY),
  }
}

export function getSequenceOpen(
  id: string,
  { x, y }: { x: number; y: number },
  maxWidth: number,
  initialMax: number
) {
  const sequence = [
    [
      `#${id}`,
      {
        position: 'fixed',
        maxWidth: `${initialMax}px`,
        zIndex: 100,
        background: '#fff',
      },
      { duration: 0 },
    ],
    [
      `#${id}`,
      { x, y, maxWidth: `${maxWidth}px` },
      { duration: 0.5, delay: 0.2 },
    ],
    [`.Overlay`, { scale: 8, zIndex: 60 }, { duration: 0, at: 0.5 }],
    [`.Overlay`, { opacity: 1 }, { duration: 0.3, at: 0.4 }],
    [`body`, { overflowY: 'hidden' }, { duration: 0.2, at: 1 }],
  ]
  return sequence
}

export function getSequenceClose(id: string, maxWidth: number) {
  const sequence = [
    [`.Overlay`, { opacity: 0, zIndex: -100 }, { duration: 0.4 }],
    [`.Overlay`, { scale: 0 }, { duration: 0.001, at: 0.3 }],
    [
      `#${id}`,
      {
        x: 0,
        y: 0,
        maxWidth: `${maxWidth}px`,
      },
      { duration: 0.4, at: 0.3 },
    ],

    [`body`, { overflowY: 'initial' }, { duration: 0.2, at: 0.3 }],
  ]
  return sequence
}
