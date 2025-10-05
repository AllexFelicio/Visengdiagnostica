import { useState, useEffect } from 'react';
import styles from './Services.module.scss';
import {
  FiHome,
  FiClipboard,
  FiTool,
  FiCheckSquare,
  FiSettings,
  FiFileText,
  FiUsers,
  FiLayers,
  FiBookOpen,
  FiAlertTriangle,
  FiSearch,
  FiCamera,
} from 'react-icons/fi';

const whatsappNumber = '5515981394994';

const services = [
  {
    title: 'Gerenciamento e Fiscalização de Obras',
    icon: <FiTool />,
    details: [
      'Fundamentais para garantir que um projeto de construção ou reforma seja executado conforme o planejado, dentro do prazo, do orçamento e com a qualidade exigida.',
      'Gerenciamento = organização, planejamento e administração do todo.',
      'Fiscalização = acompanhamento e garantia da execução correta no dia a dia.',
      'Importância da fiscalização:',
      '1 - Garantia da Qualidade e Conformidade Técnica;',
      '2 - Proteção dos interesses do cliente;',
      '3 - Detecção de irregularidades e correção preventiva;',
      '4 - Controle de custos e evitar desvios;',
      '5 - Cumprimento de prazos;',
      '6 - Respaldo técnico e jurídico;',
      '7 - Segurança dos trabalhadores e usuários da edificação;',
      '8 - Reputação e confiança;',
      '9 - Garantia de Satisfação.'
    ]
  },
  {
    title: 'Vistoria de Imóvel',
    icon: <FiHome />,
    details: [
      'Problemas detectados antes que se tornem prejuízos.',
      'Com análise técnica especializada, a vistoria de imóvel assegura transparência em negociações, protege compradores, vendedores e locatários, além de agregar valor ao patrimônio ao garantir segurança e credibilidade em cada transação.'
    ]
  },
  {
    title: 'Recebimento de Obra',
    icon: <FiClipboard />,
    details: [
      'O recebimento de obra é a etapa em que a construção finalizada passa por uma análise técnica criteriosa, verificando se tudo foi executado conforme projeto, normas e padrões de qualidade.',
      'Esse processo assegura que eventuais falhas ou pendências sejam identificadas antes da entrega definitiva, garantindo segurança, durabilidade e tranquilidade para o cliente.'
    ]
  },
  {
    title: 'Vistoria Locativa',
    icon: <FiCheckSquare />,
    details: [
      'A vistoria locativa é a inspeção técnica realizada antes da entrada e após a saída do inquilino, registrando detalhadamente o estado de conservação do imóvel.',
      'Esse processo garante segurança jurídica para ambas as partes, evita conflitos, preserva o patrimônio e assegura a transparência durante todo o contrato de locação.'
    ]
  },
  {
    title: 'Acompanhamento de Obra e Reforma',
    icon: <FiSettings />,
    details: [
      'O acompanhamento de obra e reforma consiste no monitoramento técnico contínuo da execução dos serviços, garantindo que todas as etapas sejam realizadas conforme projeto, normas e padrões de qualidade.',
      'Esse serviço assegura o uso correto de materiais, o cumprimento de prazos e a redução de falhas ou retrabalhos, proporcionando maior tranquilidade ao cliente e valorização do investimento.'
    ]
  },
  {
    title: 'Laudos técnicos',
    icon: <FiFileText />,
    details: [
      'O laudo técnico é um documento que apresenta de forma clara e fundamentada a análise de um imóvel, estrutura ou situação específica.',
      'Ele descreve condições, identifica problemas, aponta causas e propõe soluções, servindo como base para tomadas de decisão, negociações, ações judiciais ou comprovação de conformidade com normas.'
    ]
  },
  {
    title: 'Assessoria Predial e Condominial',
    icon: <FiUsers />,
    details: [
      'A assessoria predial e condominial oferece suporte especializado na manutenção, conservação e gestão de edificações e áreas comuns, garantindo segurança, eficiência e conformidade com as normas técnicas.',
      'Esse serviço auxilia síndicos e administradores na tomada de decisões, na contratação de serviços, no planejamento de obras e na prevenção de problemas que possam gerar custos elevados ou riscos aos moradores e usuários.'
    ]
  },
  {
    title: 'Plano e Laudo de Reforma',
    icon: <FiLayers />,
    details: [
      'O plano e laudo de reforma são documentos técnicos obrigatórios que asseguram que qualquer intervenção em imóveis siga as normas de segurança, qualidade e legislação vigente, como a NBR 16.280.',
      'O plano detalha as modificações previstas, enquanto o laudo avalia os impactos da obra, garantindo que não haja riscos à estrutura, à vizinhança ou aos usuários.',
      'Benefícios:',
      '- Tranquilidade jurídica',
      '- Segurança técnica',
      '- Previsibilidade'
    ]
  },
  {
    title: 'Plano de Manutenção Predial',
    icon: <FiBookOpen />,
    details: [
      'O plano de manutenção predial é um documento técnico que organiza e orienta todas as atividades necessárias para a conservação, segurança e durabilidade de uma edificação.',
      'Estruturado conforme normas como a NBR 5674, ele define rotinas preventivas e corretivas, prazos e responsabilidades, permitindo identificar falhas com antecedência, evitar custos excessivos e prolongar a vida útil dos sistemas e estruturas.',
      'Com o plano de manutenção, o cliente garante previsibilidade, economia e valorização do patrimônio, além de atender às exigências legais e normativas.'
    ]
  },
  {
    title: 'Vistoria Cautelar',
    icon: <FiAlertTriangle />,
    details: [
      'A vistoria cautelar é a inspeção técnica realizada em imóveis vizinhos a uma obra ou intervenção, registrando detalhadamente o estado de conservação das edificações antes do início dos serviços.',
      'Esse processo previne conflitos, protege juridicamente construtores e proprietários, além de garantir transparência e segurança para todas as partes envolvidas.',
      'Benefícios:',
      '- Tranquilidade jurídica',
      '- Segurança técnica'
    ]
  },
  {
    title: 'Inspeção Predial',
    icon: <FiSearch />,
    details: [
      'A inspeção predial é um processo técnico que analisa de forma criteriosa as condições de conservação, desempenho e segurança de uma edificação.',
      'Identifica anomalias, riscos e necessidades de manutenção, além de verificar a conformidade com normas técnicas e legislações vigentes.',
      'Esse serviço é essencial para preservar a vida útil da construção, reduzir custos futuros, garantir segurança aos usuários e valorizar o patrimônio imobiliário.'
    ]
  },
  {
    title: 'Recuperação de Fachada',
    icon: <FiCamera />,
    details: [
      'A recuperação de fachada é o conjunto de serviços técnicos voltados à manutenção, correção e revitalização das superfícies externas de uma edificação.',
      'O processo inclui a identificação e o tratamento de problemas como infiltrações, fissuras, desprendimento de revestimentos e desgaste natural dos materiais.',
      'Além de garantir a segurança e a durabilidade da estrutura, a recuperação de fachada promove a valorização do imóvel, melhora sua estética e assegura conformidade com normas técnicas e exigências legais.'
    ]
  }
];

export function Services() {
  const [selected, setSelected] = useState<null | typeof services[0]>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visible = isMobile ? [services[current]] : services;
  const prev = () => setCurrent((p) => (p === 0 ? services.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === services.length - 1 ? 0 : p + 1));

  const handleWhatsApp = (title: string) => {
    const msg = `Olá! Gostaria de um orçamento sobre ${title}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="serviços" className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>
        Nossos <span>principais</span> serviços
      </h2>
      <div className={styles.underline}></div>

      {isMobile ? (
        <div className={styles.carousel}>
          <button onClick={prev} className={styles.arrow}>‹</button>
          {visible.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <button className={styles.btn} onClick={() => setSelected(s)}>Saiba Mais</button>
            </div>
          ))}
          <button onClick={next} className={styles.arrow}>›</button>
        </div>
      ) : (
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card} onClick={() => setSelected(s)}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <span className={styles.more}>Saiba Mais →</span>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={() => setSelected(null)}>×</button>
            <h2>{selected.title}</h2>
            <div className={styles.modalUnderline}></div>
            {selected.details.map((p, idx) => <p key={idx}>{p}</p>)}
            <button
              className={styles.btn}
              onClick={() => handleWhatsApp(selected.title)}
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
