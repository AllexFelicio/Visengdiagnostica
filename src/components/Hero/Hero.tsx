import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Projeto e Gerenciamento de Obras
        </h1>
        <a href="#serviços" className={styles.button}>
          Saiba mais
        </a>
      </div>
    </section>
  )
}
