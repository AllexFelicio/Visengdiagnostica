import { useState } from 'react';
import styles from './Benefits.module.scss';
import { FiChevronDown } from 'react-icons/fi';

const items = [
  {
    title: 'Alta velocidade de execução com menor variabilidade produtiva',
    content:
      'Reduzimos drasticamente o tempo de obra com processos industrializados e cronogramas precisos.',
  },
  {
    title: 'Elevada precisão geométrica e padronização construtiva',
    content:
      'Perfis conformados a frio garantem tolerâncias milimétricas e encaixes perfeitos em todos os pontos.',
  },
  {
    title: 'Redução de carga nas fundações e menor impacto no canteiro',
    content:
      'Estruturas leves diminuem o esforço sobre a fundação e agilizam o avanço no terreno.',
  },
  {
    title: 'Excelente desempenho termoacústico quando corretamente especificado',
    content:
      'Com os isolamentos e revestimentos adequados, sua edificação garante conforto térmico e sonoro.',
  },
  {
    title: 'Controle total de materiais, cronogramas e orçamento',
    content:
      'Monitoramos cada etapa com relatórios em tempo real, evitando desperdícios e atrasos.',
  },
  {
    title: 'Adequação às normas técnicas brasileiras (ABNT NBR 15253, 16818, entre outras)',
    content:
      'Nossa equipe segue rigorosamente todas as normas, assegurando qualidade e segurança.',
  },
];

export function Benefits() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="benefícios" className={styles.benefitsSection}>
      <h2 className={styles.title}>
        Por que escolher o Light Steel Frame?
      </h2>
      <p className={styles.intro}>
        O sistema Light Steel Frame é uma tecnologia construtiva
        industrializada baseada no uso de perfis estruturais leves em
        aço galvanizado conformados a frio, ideal para edificações de
        baixo e médio porte. Suas principais vantagens técnicas incluem:
      </p>

      <div className={styles.accordion}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className={styles.item}>
              <div
                className={styles.header}
                onClick={() => toggle(i)}
                role="button"
                aria-expanded={isOpen}
              >
                <h3>{item.title}</h3>
                <FiChevronDown
                  className={`${styles.icon} ${
                    isOpen ? styles.open : ''
                  }`}
                  size={20}
                  aria-hidden="true"
                />
              </div>

              <div
                className={`${styles.panel} ${
                  isOpen ? styles.open : ''
                }`}
                aria-hidden={!isOpen}
              >
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Benefits;
