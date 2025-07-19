import styles from './WhatsAppButton.module.scss'
import { FaWhatsapp } from 'react-icons/fa'

export function WhatsAppButton() {
  return (
    <a
      className={styles.whatsapp}
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppButton
