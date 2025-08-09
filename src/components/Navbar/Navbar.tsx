import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import logo from '../../assets/logo2.png'

type NavItem =
  | { label: string; to: string; type: 'hash' }
  | { label: string; to: string; type: 'route' }

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll suave com offset do navbar
  const scrollToHash = (hash: string) => {
    const id = decodeURIComponent(hash.replace('#', ''))
    const el = document.getElementById(id)
    if (!el) return
    const yOffset = 90
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  // Clique em Home: sempre volta pro topo
  const handleHomeClick = (e?: React.MouseEvent) => {
    e?.preventDefault?.()
    setOpen(false)

    if (location.pathname === '/') {
      // já está na Home → apenas sobe
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (window.location.hash) window.history.pushState(null, '', '/')
    } else {
      // vem de outra rota → navega e sobe
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '/')
      }, 50)
    }
  }

  // Clique em links com hash (Benefícios, Serviços, Contato)
  const handleHashClick = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)

    const hashIndex = to.indexOf('#')
    const hash = hashIndex >= 0 ? to.slice(hashIndex) : ''
    if (!hash) {
      handleHomeClick()
      return
    }

    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      setTimeout(() => scrollToHash(hash), 60)
    } else {
      scrollToHash(hash)
      if (window.location.hash !== hash) {
        window.history.pushState(null, '', `/${hash}`)
      }
    }
  }

  const links: NavItem[] = [
    { label: 'Home',        to: '/',             type: 'route' },
    { label: 'Benefícios',  to: '/#benefícios',  type: 'hash'  },
    { label: 'Serviços',    to: '/#serviços',    type: 'hash'  },
    { label: 'Portfólio',   to: '/portfolio',    type: 'route' },
    { label: 'Contato',     to: '/#contato',     type: 'hash'  },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.bar}>
          {/* Logo → também volta pro topo */}
          <a href="/" className={styles.brand} aria-label="Home" onClick={handleHomeClick}>
            <img src={logo} alt="Steelside" className={styles.logo} />
          </a>

          {/* Links desktop */}
          <nav className={styles.navLinks}>
            {links.map(link => {
              if (link.label === 'Home') {
                return (
                  <a key="Home" href="/" className={styles.link} onClick={handleHomeClick}>
                    Home
                  </a>
                )
              }
              return link.type === 'route' ? (
                <Link key={link.label} to={link.to} className={styles.link} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.to} className={styles.link} onClick={handleHashClick(link.to)}>
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Ações */}
          <div className={styles.actions}>
            <a href="/#contato" className={styles.cta} onClick={handleHashClick('/#contato')}>
              Entrar em Contato
            </a>
            <button
              className={styles.toggle}
              onClick={() => setOpen(o => !o)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav className={styles.mobileMenu}>
            {/* Home no mobile */}
            <a href="/" onClick={handleHomeClick}>Home</a>

            {/* Demais links */}
            {links.filter(l => l.label !== 'Home').map(link =>
              link.type === 'route' ? (
                <Link key={link.label} to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.to} onClick={handleHashClick(link.to)}>
                  {link.label}
                </a>
              )
            )}
            <a href="/#contato" className={styles.mobileCta} onClick={handleHashClick('/#contato')}>
              Entrar em Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
