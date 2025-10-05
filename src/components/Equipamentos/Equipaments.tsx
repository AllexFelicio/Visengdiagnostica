import { useState, useEffect } from 'react';
import styles from './Equipaments.module.scss';

// imagens
import trena from '../../assets/trena.jpeg';
import drone from '../../assets/drone.jpeg';
import paquimetro from '../../assets/paquimetro.jpeg';
import nivel from '../../assets/nivel.jpeg';
import termica from '../../assets/termica.jpeg';
import rastreador from '../../assets/rastreadorQ.jpeg'
import fissurometro from '../../assets/fissurometro.jpeg'

const equipments = [
  { title: 'Trena digital', img: trena, desc: 'Equipamento que mede distâncias com rapidez e exatidão utilizando tecnologia a laser de última geração. Ideal para obras, reformas e projetos de design, garantindo praticidade, segurança e precisão milimétrica em segundos. Possui função inteligente para cálculo de área, volume e alturas.' },
  { title: 'Drone', img: drone, desc: 'Permite inspeções aéreas rápidas, seguras e de alta precisão. Com ele, é possível alcançar locais de difícil acesso sem a necessidade de andaimes ou interrupções operacionais, reduzindo riscos e otimizando tempo. Também é utilizado para monitoramento de obras e ativos com imagens de alta definição.' },
  { title: 'Paquímetro', img: paquimetro, desc: 'Instrumento de medição de alta exatidão utilizado para determinar dimensões lineares, internas, externas e profundidades de peças e componentes. Na engenharia diagnóstica, é essencial para análises técnicas que exigem controle rigoroso de medidas, garantindo confiabilidade em avaliações, inspeções e laudos.' },
  { title: 'Nível a laser', img: nivel, desc: 'Tecnologia que garante nivelamento rápido e milimétrico em pisos, paredes e estruturas, trazendo mais eficiência e confiabilidade às inspeções de engenharia.' },
  { title: 'Câmera térmica', img: termica, desc: 'Equipamento que detecta radiação infravermelha e converte em imagens térmicas, revelando variações de temperatura e problemas ocultos como infiltrações, falhas elétricas, sobreaquecimento, perda de isolamento e umidade.' },
  { title: 'Rastreador químico', img: rastreador, desc: 'Utilizado para identificar infiltrações e vazamentos presentes em sistemas hidrossanitários e de impermeabilização.' },
  { title: 'Fissurômetro', img: fissurometro, desc: 'Equipamento utilizado para medir e acompanhar a evolução de fissuras, trincas e rachaduras em estruturas. Ele permite registrar variações na abertura ao longo do tempo, auxiliando no diagnóstico da gravidade do problema e na avaliação da necessidade de intervenção.' },
];

export function Equipments() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? equipments.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === equipments.length - 1 ? 0 : prev + 1));
  };

  const visible = isMobile
    ? [equipments[current]]
    : [
        equipments[current],
        equipments[(current + 1) % equipments.length],
        equipments[(current + 2) % equipments.length],
      ];

  return (
    <section id="equipamentos" className={styles.equipmentsSection}>
      <h2 className={styles.title}>Equipamentos que utilizamos</h2>
      <p className={styles.subtitle}>
        A tecnologia trabalha ao nosso lado para transformar o diagnóstico em resultados precisos e eficientes.
      </p>

      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={prevSlide}>‹</button>

        <div className={styles.cards}>
          {visible.map((eq, i) => (
            <div key={i} className={styles.card}>
              <img src={eq.img} alt={eq.title} />
              <div className={styles.info}>
                <h3>{eq.title}</h3>
              </div>
              <div className={styles.overlay}>
                <p>{eq.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}

export default Equipments;
