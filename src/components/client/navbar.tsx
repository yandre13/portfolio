'use client'
import { useActiveSection } from '@/hooks/use-active-section'
import useMediaQuery from '@/hooks/use-media-query'
import { cn } from '@/lib/cn'
import { Briefcase, Code2, FolderGit2, Home, User } from 'lucide-react'
import { useEffect, useState } from 'react'

function NavItem({
  active,
  icon,
  text,
  onClick,
}: {
  active: boolean
  icon: React.ReactNode
  text: string
  onClick: () => void
}) {
  return (
    <button
      className={cn(
        'p-2 text-textBody',
        'transition-all duration-500 lg:p-3 lg:font-medium lg:hover:text-primary',
        active && 'text-primary'
      )}
      onClick={onClick}
    >
      <span className="hidden lg:block">{text}</span>
      <span className="lg:hidden">{icon}</span>
    </button>
  )
}
export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [clicked, setClicked] = useState(false)

  const activeSection = useActiveSection()
  const isLg = useMediaQuery('(min-width: 992px)')

  const goToSection = (id: string) => {
    setClicked(true)
    const ref = document.getElementById(id)
    if (!ref) throw new Error(`No existe el elemento con id ${id}`)
    ref.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  useEffect(() => {
    let prevScrollPos = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const maxScrollPos =
        document.documentElement.scrollHeight - window.innerHeight

      if (clicked) {
        // Se hizo clic en un elemento del menú, mantener el menú visible
        setVisible(true)
        return
      }

      if (currentScrollPos > prevScrollPos) {
        // Desplazándose hacia abajo
        setVisible(false)
      } else {
        // Desplazándose hacia arriba
        if (currentScrollPos < maxScrollPos - 100) {
          // No está cerca del final de la página
          setVisible(true)
        }
      }

      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [clicked])

  return (
    <header
      className={cn(
        'fixed bottom-0 left-0 z-50 w-full bg-white bg-opacity-30 shadow-2xl backdrop-blur-md transition-all duration-300',
        'lg:bottom-auto lg:top-0 lg:bg-opacity-10 lg:shadow',
        !isLg
          ? visible
            ? 'translate-y-0'
            : 'translate-y-full'
          : 'translate-y-0'
      )}
    >
      <div className="lg:container lg:flex lg:items-center lg:justify-between lg:py-1">
        <div className="hidden lg:block">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-primary">
            Yaser
            <Code2 className="h-5 w-5" />
          </h2>
        </div>

        <nav className="px-4 py-1 lg:px-0 lg:py-0">
          <ul
            className={cn(
              'flex justify-between [&>li>a]:transition-colors [&>li>a]:duration-300 [&>li]:flex'
            )}
          >
            <li>
              <NavItem
                active={activeSection === 'Home'}
                icon={<Home className="h-5 w-5" />}
                text="Home"
                onClick={() => goToSection('Home')}
              />
            </li>
            <li>
              <NavItem
                active={activeSection === 'About'}
                icon={<User className="h-5 w-5" />}
                text="About"
                onClick={() => goToSection('About')}
              />
            </li>
            <li>
              <NavItem
                active={activeSection === 'Skills'}
                icon={<Code2 className="h-5 w-5" />}
                text="Skills"
                onClick={() => goToSection('Skills')}
              />
            </li>
            <li>
              <NavItem
                active={activeSection === 'Exp'}
                icon={<Briefcase className="h-5 w-5" />}
                text="Expereince"
                onClick={() => goToSection('Exp')}
              />
            </li>
            <li>
              <NavItem
                active={activeSection === 'Portfolio'}
                icon={<FolderGit2 className="h-5 w-5" />}
                text="Portfolio"
                onClick={() => goToSection('Portfolio')}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
