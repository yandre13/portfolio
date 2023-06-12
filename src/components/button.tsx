export default function Button({
  text,
  icon,
  onClick,
}: {
  text: string
  icon: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white"
      onClick={onClick}
    >
      <span>{text}</span>
      {icon}
    </button>
  )
}
