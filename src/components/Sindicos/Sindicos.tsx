import styles from './Sindicos.module.scss';
import sindicoImg from '../../assets/sindico.jpg';
import guiaPdf from '../../assets/pdfs/Guia do Síndico Responsável - Viseng Diagnóstica.pdf';
import cronogramaPdf from '../../assets/pdfs/Modelo de cronograma de manutenção- Viseng Diagnóstica.pdf';
import apresentacaoPdf from '../../assets/pdfs/Apresentação Comercial - Viseng Diagnóstica.pdf';
import { FiDollarSign, FiFileText, FiDownload, FiTool } from 'react-icons/fi';

export function Sindicos() {
  return (
    <section id="sindicos" className={styles.sindicoSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>
            Síndico, assegure a integridade do seu condomínio com nossos <span>serviços:</span>
          </h2>

          <h3>Laudo de Inspeção Predial</h3>
          <p>
            Nosso serviço de Inspeção Predial faz um check-up completo da edificação,
            localiza e identifica problemas de conservação e manutenção. Após isso,
            oferecemos um relatório com o plano de ação necessário, ordenado por prioridade,
            para que você saiba exatamente o que precisa ser feito e por onde iniciar.
          </p>

          <h3>Assessoria Condominial</h3>
          <p>
            Nossa assessoria condominial é o acompanhamento recorrente com orientações
            especializadas para a tomada de decisões relacionadas à estrutura e manutenção
            do condomínio, garantindo segurança e valorização patrimonial.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <img src={sindicoImg} alt="Engenheiro analisando documentos" />
        </div>
      </div>

      {/* ======= BLOCO DE SERVIÇOS ======= */}
      <div className={styles.servicesBlock}>
        <h2>
          Soluções técnicas e preventivas para <span>condomínios residenciais e comerciais</span>
        </h2>

        <div className={styles.serviceIntro}>
          <p>
            A <strong>Viseng Diagnóstica</strong> é especializada em inspeções, laudos e planos de manutenção que garantem
            a segurança, durabilidade e conformidade técnica das edificações. Dedicada a síndicos e administradores,
            nossa missão é oferecer uma gestão condominial mais segura, econômica e alinhada às normas da engenharia.
          </p>
          <p>
            <strong>Nosso compromisso:</strong> reduzir riscos, prevenir problemas e proteger o patrimônio do condomínio.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <FiDollarSign className={styles.icon} />
            <h3>Inspeção Predial</h3>
            <p>
              Diagnóstico técnico completo do edifício conforme a NBR 16747, identificando anomalias, riscos e
              priorizando ações corretivas.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FiTool className={styles.icon} />
            <h3>Plano de Manutenção Predial (PMP)</h3>
            <p>
              Elaboração do plano de manutenção conforme a NBR 5674, garantindo a durabilidade das instalações
              e reduzindo custos imprevistos.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FiFileText className={styles.icon} />
            <h3>Laudos Técnicos e ARTs</h3>
            <p>
              Elaboração de laudos e emissão de Anotação de Responsabilidade Técnica (ART) para obras, reformas e
              sistemas prediais.
            </p>
          </div>
        </div>
      </div>

      {/* ======= BLOCO DE MATERIAIS ======= */}
      <div className={styles.materials}>
        <h2>📘 Materiais exclusivos para <span>Síndicos</span></h2>
        <p className={styles.subtitle}>
          Acesso gratuito a conteúdos desenvolvidos especialmente para auxiliar na gestão técnica do condomínio:
        </p>

        <ul className={styles.materialList}>
          <li>
            <a href={guiaPdf} download>
              <strong>📗 Guia do Síndico Responsável</strong> — saiba quais laudos e inspeções são obrigatórios.
            </a>
          </li>
          <li>
            <a href={cronogramaPdf} download>
              <strong>📅 Modelo de Cronograma de Manutenção</strong> — organize o planejamento do seu condomínio.
            </a>
          </li>
          <li>
            <a href={apresentacaoPdf} download>
              <strong>📄 Apresentação Institucional Viseng</strong> — conheça nossas soluções em detalhes.
            </a>
          </li>
        </ul>

        <p className={styles.cta}>
          <FiDownload /> Baixe agora e receba gratuitamente os materiais que vão profissionalizar sua gestão.
        </p>
      </div>
    </section>
  );
}

export default Sindicos;
