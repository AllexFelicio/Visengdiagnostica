import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo1.png';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['home','benefícios','serviços','portfólio','contato'];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <img src={logo} alt="Steelside" className={styles.logo} />

        {/* Menu desktop */}
        <nav className={styles.navLinks}>
          {links.map(link => (
            <a key={link} href={`#${link}`}>
              {link.charAt(0).toUpperCase()+link.slice(1)}
            </a>
          ))}
        </nav>

        {/* Toggle mobile */}
        <button
          className={styles.toggle}
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className={styles.mobileMenu}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
            >
              {link.charAt(0).toUpperCase()+link.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
