import React from 'react';
import styles from './Services.module.scss';

const services = [
  {
    title: 'Alta velocidade de execução',
    text: 'Reduzimos o tempo de obra com processos industrializados e padronizados.',
  },
  {
    title: 'Precisão geométrica',
    text: 'Perfis conformados a frio garantem tolerâncias milimétricas no fechamento.',
  },
  {
    title: 'Menor carga nas fundações',
    text: 'Estruturas leves diminuem custo e complexidade de fundações.',
  },
  {
    title: 'Desempenho termoacústico',
    text: 'Revestimentos e isolamentos adequados mantêm conforto térmico e sonoro.',
  },
  {
    title: 'Controle total de cronograma',
    text: 'Acompanhamos cada etapa com relatórios e KPIs em tempo real.',
  },
  {
    title: 'Conformidade normativas',
    text: 'Projetos e execuções seguindo rigorosamente as normas brasileiras.',
  },
];

export function Services() {
  return (
    <section id="serviços" className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>Serviços</h2>
      <p className={styles.servicesSubtitle}>
        Por que escolher o Light Steel Frame?
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
