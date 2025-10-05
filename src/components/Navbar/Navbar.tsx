import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi'
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

  const scrollToHash = (hash: string) => {
    const id = decodeURIComponent(hash.replace('#', ''))
    const el = document.getElementById(id)
    if (!el) return
    const yOffset = 90
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleHomeClick = (e?: React.MouseEvent) => {
    e?.preventDefault?.()
    setOpen(false)

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (window.location.hash) window.history.pushState(null, '', '/')
    } else {
      navigate('/')
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.history.pushState(null, '', '/')
      }, 50)
    }
  }

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
    { label: 'Home', to: '/', type: 'route' },
    { label: 'Serviços', to: '/#serviços', type: 'hash' },
    { label: 'Sou síndico', to: '/#serviços', type: 'hash' },
    { label: 'Vantagens', to: '/#beneficios', type: 'hash' },
    { label: 'Sobre', to: '/#sobre', type: 'hash' },
    { label: 'Contato', to: '/#contato', type: 'hash' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.bar}>
          <a href="/" className={styles.brand} aria-label="Home" onClick={handleHomeClick}>
            <img src={logo} alt="Viseng" className={styles.logo} />
          </a>

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

          {/* ====== ÍCONES DE REDES SOCIAIS ====== */}
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/viseng_diagnostica" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="https://www.linkedin.com/company/visengdiagnostica" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>

          <div className={styles.actions}>
            <button
              className={`${styles.toggle} ${open ? styles.open : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <span className={styles.bars} aria-hidden="true" />
            </button>
          </div>
        </div>

        {open && (
          <nav className={styles.mobileMenu}>
            <a href="/" onClick={handleHomeClick}>Home</a>
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
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
