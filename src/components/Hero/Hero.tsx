import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Construções Inteligentes
        </h1>
        <a href="/#sobre" className={styles.button}>
          Saiba mais
        </a>
      </div>
    </section>
  )
}
