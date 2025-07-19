import styles from './Benefits.module.scss'

const items = [
  { title: 'Excelência técnica e precisão', text: 'Descrição do benefício aqui.' },
  { title: 'Comprometimento com normas e desempenho', text: '…' },
  { title: 'Sustentabilidade e inovação contínua', text: '…' },
  { title: 'Integridade e responsabilidade profissional', text: '…' },
  { title: 'Foco em resultado e geração de valor para o cliente', text: '…' },
]

export function Benefits() {
  return (
    <section id="beneficios" className={styles.benefitsSection}>
      <h2 className={styles.title}>Benefícios</h2>
      <p className={styles.subtitle}>Conheça os pontos fortes que oferecemos:</p>
      <div className={styles.benefits}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
