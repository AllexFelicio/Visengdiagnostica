import styles from './Contact.module.scss';
import logo from '../../assets/logo3.png';
import { FiMapPin, FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

export function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.container}>
        {/* ==== LADO ESQUERDO ==== */}
        <div className={styles.info}>
          <div className={styles.logoBox}>
            <img src={logo} alt="Viseng Diagnóstica" className={styles.logo} />
            <div className={styles.logoLine}></div>
          </div>

          <p className={styles.text}>
            Entre em contato para agendar uma visita técnica ou solicitar um orçamento personalizado.
          </p>

          <ul className={styles.details}>
            <li>
              <FiMapPin className={styles.icon} /> Sorocaba - SP
            </li>
            <li>
              <FiPhone className={styles.icon} /> (15) 98139-4994
            </li>
            <li>
              <a
                href="https://www.instagram.com/viseng_diagnostica"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <FiInstagram className={styles.icon} /> @visengdiagnostica
              </a>
            </li>
            <li>
              <a
                href="mailto:louise@visengdiagnostica.com.br"
                className={styles.link}
              >
                <FiMail className={styles.icon} /> louise@visengdiagnostica.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* ==== LADO DIREITO ==== */}
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Fale Conosco</h2>
          <form className={styles.form}>
            <input type="text" name="nome" placeholder="Nome" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <input type="text" name="whatsapp" placeholder="WhatsApp" required />
            <textarea name="mensagem" rows={5} placeholder="Mensagem" required />
            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
