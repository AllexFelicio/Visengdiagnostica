import styles from './About.module.scss'

export function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      {/* fundo com glow */}
      <div className={styles.bgFx} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.panel}>
          <header className={styles.head}>
            <span className={styles.kicker}>QUEM SOMOS</span>
            <div className={styles.rule} />
          </header>

          <div className={styles.copy}>
            <p>
              A Steel Side é uma empresa de engenharia fundada em 2005 para atuar na área
              de projeto e gerenciamento de obras no território nacional e toda América do Sul.
            </p>
            <p>
              Ao longo dos anos, prestando serviços na área corporativa, foi se destacando
              pela eficiência em seus processos de gestão de custos, prazos e qualidade na
              execução de obras.
            </p>
            <p>
              Em meados de 2007, além de sua atuação em obras de empresas como Banco Santander,
              HSBC, Latam, TIM, Droga Raia, 3M do Brasil entre outros, a empresa incorporou em seu
              portfólio a construção de residências de alto padrão nas regiões de São Paulo, Campinas,
              Ribeirão Preto e Sorocaba.
            </p>
            <p>
              Hoje a empresa tem know how comprovado e estrutura organizacional para atuar tanto nas
              áreas residenciais, como industriais e corporativas, inclusive com a utilização dos Sistema LIGHT STEEL FRAME, que vem se tornando o método construtivo mais eficiente e vantajoso do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
