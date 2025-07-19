import { useState, useEffect } from 'react'
import styles from './Navbar.module.scss'
import logo from '../../assets/logo1.png'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['home', 'benefícios', 'serviços', 'portfólio', 'contato']

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <img src={logo} alt="Steelside" className={styles.logo} />

        <nav className={styles.navLinks}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={e => handleClick(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <button className={styles.toggle} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <nav className={`${styles.navLinks} block p-4 bg-white shadow-md`}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="block mb-2"
              onClick={e => handleClick(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
