import styles from './Benefits.module.scss';
import { FiCheckCircle } from 'react-icons/fi';
import Lottie from 'lottie-react';
import animationData from '../../assets/animations/gears.json';

const items = [
  'Atuamos com precisão, atualização constante e compromisso com os mais altos padrões.',
  'Relações construídas com transparência, respeito e responsabilidade inegociável.',
  'Segurança como prioridade. Cada decisão é guiada pela proteção de pessoas, patrimônios e estruturas.',
  'Reconhecemos colaboradores, clientes e parceiros como protagonistas do nosso sucesso.',
  'Qualidade que gera confiança. Entregamos resultados sólidos, duradouros e alinhados às expectativas de cada projeto.',
];

export function Benefits() {
  return (
    <section id="beneficios" className={styles.benefitsSection}>
      <h2 className={styles.title}>
        Vantagens em contratar a <span>Viseng Diagnóstica</span>
      </h2>
      <div className={styles.underline}></div>

      <div className={styles.grid}>
        {items.map((text, i) => (
          <div key={i} className={styles.card}>
            <FiCheckCircle className={styles.icon} />
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* 🔧 Animação no canto inferior direito */}
      <div className={styles.animationWrapper}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </section>
  );
}

export default Benefits;
