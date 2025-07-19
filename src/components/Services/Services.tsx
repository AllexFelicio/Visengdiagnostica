// src/components/Services/Services.tsx
import styles from './Services.module.scss';

const services = [
  {
    title: 'Projetos Executivos e Compatibilização Técnica',
    text: 'Elaboração e compatibilização de projetos arquitetônicos, estruturais e complementares integrados ao sistema construtivo em aço galvanizado leve.',
  },
  {
    title: 'Execução de Obras com Sistema Light Steel Frame',
    text: 'Construção de edificações com precisão industrial, utilizando materiais normatizados e mão de obra técnica qualificada.',
  },
  {
    title: 'Planejamento e Gerenciamento de Obras',
    text: 'Coordenação de todas as disciplinas envolvidas na obra, com aplicação de técnicas de gestão de projetos (como cronogramas, EAPs e curvas de avanço físico‑financeiro).',
  },
  {
    title: 'Consultoria Técnica e Estudos de Viabilidade',
    text: 'Apoio técnico na definição da viabilidade técnica e econômica de empreendimentos baseados em construção a seco.',
  },
];

export function Services() {
  return (
    <section id="serviços" className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>Serviços</h2>
      <p className={styles.servicesSubtitle}>
        A Steel Side Engenharia oferece um portfólio completo de serviços voltados à construção industrializada em Light Steel Frame:
      </p>
      <div className={styles.servicesGrid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
