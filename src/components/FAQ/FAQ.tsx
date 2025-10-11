import { useState } from 'react';
import styles from './FAQ.module.scss';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'Qual a diferença entre vistoria e inspeção predial?',
    answer:
      'A vistoria pode ser mais superficial e generalista, ou uma análise pontual e específica. A inspeção predial é uma avaliação completa da edificação e seus sistemas visando garantir segurança e durabilidade.',
  },
  {
    question: 'Em quanto tempo recebo o laudo técnico?',
    answer:
      'Após a vistoria in loco, o prazo médio de entrega é de 3 a 10 dias úteis, dependendo da complexidade.',
  },
  {
    question: 'Qual a diferença entre um laudo e um parecer técnico?',
    answer:
      'O laudo geralmente é mais formal, completo e detalhado, abrangendo todos os aspectos do objeto ou situação analisada. O parecer técnico é mais simplificado e direto, com foco em um aspecto específico, fornecendo uma opinião ou esclarecimento a respeito do assunto.',
  },
  {
    question: 'Os laudos podem ser usados em processos judiciais?',
    answer:
      'Sim! Todos os nossos laudos são assinados por engenheiros registrados e possuem validade legal para uso judicial e extrajudicial.',
  },
  {
    question: 'Qual região vocês atendem?',
    answer:
      'Atendemos todo o estado de São Paulo. Para outras localidades, entre em contato para avaliarmos o deslocamento.',
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer:
      'Você pode solicitar um orçamento entrando em contato pelo WhatsApp, e-mail ou formulário do site. Nossa equipe retornará com uma proposta personalizada.',
  },
  {
    question: 'Como funciona o processo?',
    answer:
      'Após o contato, realizamos uma análise preliminar, agendamos a vistoria técnica e, em seguida, elaboramos o laudo com diagnóstico, registros fotográficos e recomendações.',
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.separator}></div>
      <h2 className={styles.title}>Perguntas Frequentes</h2>

      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {activeIndex === index ? (
                <FiMinus className={styles.icon} />
              ) : (
                <FiPlus className={styles.icon} />
              )}
              <span>{item.question}</span>
            </button>
            {activeIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
