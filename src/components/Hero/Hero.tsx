import styles from './Hero.module.scss'
import logo from '../../assets/logo3.png' // ajuste o caminho para sua logo
import { FaWhatsapp } from 'react-icons/fa'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* Logo no topo */}
        <img src={logo} alt="Viseng Diagnóstica" className={styles.logo} />

        {/* Frase principal */}
        <h1 className={styles.title}>
          Transformar edificações com soluções inteligentes em 
          patologia das construções e obras, promovendo segurança, durabilidade e valorização 
          dos patrimônios, com excelência técnica e compromisso com o futuro das construções.
        </h1>



        {/* Botão que abre WhatsApp */}
        <a
          href="https://wa.me/5515981394994"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <FaWhatsapp />  Solicite já seu orçamento
        </a>
        
      </div>
    </section>
  )
}

export default Hero
