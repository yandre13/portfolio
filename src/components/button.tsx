import Link from 'next/link'

export default function Button({
  text,
  to,
  icon,
  download,
  external,
  onClick,
}: {
  text: string
  to: string
  icon: React.ReactNode
  download?: boolean
  external?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}) {
  return (
    <Link
      href={to}
      download={download}
      target={external || download ? '_blank' : '_self'}
      rel={external || download ? 'noopener noreferrer' : ''}
      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white"
      onClick={onClick}
    >
      <span>{text}</span>
      {icon}
    </Link>
  )
}
