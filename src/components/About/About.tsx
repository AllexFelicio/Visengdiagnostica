import styles from './About.module.scss'
import profileImg from '../../assets/louise.jfif'
import { FiCheckCircle } from 'react-icons/fi'

export function About() {
  const highlights = [
    'Atendimento personalizado',
    'Segurança técnica e tranquilidade jurídica',
    'Conformidade com as Normas ABNT',
    'Apoio e acompanhamento técnico especializado para Síndicos e Administradoras'
  ]

  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Quem somos nós</h2>

            <p className={styles.description}>
              A <strong>Viseng Diagnóstica</strong> tem o propósito de proteger e valorizar patrimônios
              através do <strong>gerenciamento de obras</strong> e da <strong>Engenharia Diagnóstica</strong>.
              Rumo à liderança nacional em <strong>patologia das construções</strong> e
              <strong> gerenciamento de obras</strong>, transformando o padrão técnico do setor com
              segurança, inovação e confiabilidade.
            </p>

            {/* Parágrafo separado e justificado */}
            <p className={styles.description}>
              Engenheira civil formada pela <strong>FACENS</strong>, com vasta experiência em obras
              de alto padrão em condomínios residenciais como <strong>Fazenda Boa Vista</strong>,
              <strong> Fazenda da Grama</strong> e <strong>Residencial Morada dos Pássaros</strong>.
            </p>

            <ul className={styles.list}>
              {highlights.map((item, i) => (
                <li key={i}>
                  <FiCheckCircle className={styles.icon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <img src={profileImg} alt="Louise de Paula" className={styles.photo} />
            <h3 className={styles.name}>Louise de Paula</h3>
            <p className={styles.role}>Engenheira Civil – CEO</p>
            <p className={styles.specialty}>
              Especialista em gerenciamento de obras e em patologia e manutenção das construções
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
