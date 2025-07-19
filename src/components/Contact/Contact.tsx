import React from 'react';
import styles from './Contact.module.scss';

export function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Fale Conosco</h2>
        <p className={styles.subtitle}>
          Dúvidas, orçamentos ou feedback? Envie uma mensagem e logo retornaremos.
        </p>
        <form className={styles.form} action="#" method="POST">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e‑mail"
            required
          />
          <textarea
            name="mensagem"
            rows={5}
            placeholder="Sua mensagem"
            required
          />
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
