import styles from './Portfolio.module.scss';

// importe suas imagens
import img1 from '../../assets/portfolio1.jpg';
import img2 from '../../assets/portfolio2.jpg';
import img3 from '../../assets/portfolio3.jpg';
import img4 from '../../assets/portfolio4.jpg';
import img5 from '../../assets/portfolio5.jpg';
import img6 from '../../assets/portfolio6.jpg';

const projects = [
  {
    src: img1,
    title: 'Projeto 1 — Descrição breve',
  },
  { src: img2, title: 'Projeto 2 — Descrição breve' },
  { src: img3, title: 'Projeto 3 — Descrição breve' },
  { src: img4, title: 'Projeto 4 — Descrição breve' },
  { src: img5, title: 'Projeto 5 — Descrição breve' },
  { src: img6, title: 'Projeto 6 — Descrição breve' },
];

export function Portfolio() {
  return (
    <section id="portfólio" className={styles.portfolioSection}>
      <h2 className={styles.title}>Portfólio</h2>
      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <div key={i} className={styles.item}>
            <img src={proj.src} alt={proj.title} />
            <div className={styles.overlay}>{proj.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
