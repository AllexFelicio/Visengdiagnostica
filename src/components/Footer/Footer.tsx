import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Viseng. Todos os direitos reservados.</p>
      <p>
        Desenvolvido por{' '}
        <a href="https://steelside.com.br" target="_blank" rel="noopener noreferrer">
          AF Tecnologia
        </a>
      </p>
    </footer>
  );
}
