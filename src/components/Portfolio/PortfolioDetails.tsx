// src/pages/PortfolioDetail.tsx
import { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import styles from './PortfolioDetail.module.scss'

// ====== Imports de imagens ======
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.jpg'
import img10 from '../../assets/img10.jpg'
import img11 from '../../assets/img11.jpg'
import img12 from '../../assets/img12.jpg'
import img13 from '../../assets/img13.jpg'
import img14 from '../../assets/img14.png'
import img15 from '../../assets/img15.jpg'
import img16 from '../../assets/img16.jpg'
import img17 from '../../assets/img17.jpg'
import img18 from '../../assets/img18.jpg'
import img19 from '../../assets/img19.jpg'
import img20 from '../../assets/img20.jpg'
import img21 from '../../assets/img21.jpg'
import img22 from '../../assets/img22.jpg'
import img23 from '../../assets/img23.jpg'
import img24 from '../../assets/img24.jpg'
import img25 from '../../assets/img25.jpg'
import img26 from '../../assets/img26.jpg'
import img27 from '../../assets/img27.png'
import img28 from '../../assets/img28.jpg'
import img29 from '../../assets/img29.png'
import img30 from '../../assets/img30.jpg'
import img31 from '../../assets/img31.jpg'
import img32 from '../../assets/img32.png'
import img33 from '../../assets/img33.jpg'
import img34 from '../../assets/img34.jpg'
import img35 from '../../assets/img35.jpg'
import img36 from '../../assets/img36.jpg'
import img37 from '../../assets/img37.jpg'
import img38 from '../../assets/img38.jpg'
import img39 from '../../assets/img39.jpg'
import img40 from '../../assets/img40.jpg'
import img41 from '../../assets/img40.jpg'
import img42 from '../../assets/img41.jpg'
import img43 from '../../assets/img42.png'

interface Work {
  id: string
  title: string
  details: { label: string; value: string }[]
  description: string[]
  images: string[]                // <- múltiplas imagens por obra
}

const works: Work[] = [
  {
    id: 'vizeu-leiloeiro',
    title: 'VIZEU LEILOEIRO – Construção de Nova Unidade',
    images: [img1],
    details: [
      { label: 'Projeto', value: 'Construção de galpão com escritório' },
      { label: 'Cliente', value: 'VIZEU LEILOEIRO' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: 'Início março de 2007 a dezembro de 2009' },
      { label: 'Área', value: '960 m²' },
      { label: 'Escopo', value: 'Construção de galpão industrial em Ribeirão Preto – SP.' },
    ],
    description: [
      'A obra foi realizada em Ribeirão Preto, interior de São Paulo, e teve o objetivo de trazer mais uma base para a empresa que realiza leilões de veículos, móveis e equipamentos.',
      'Na fase de projetos tivemos o desafio de adequar a edificação às premissas de zoneamento e de instalações de combate à incêndio e acessibilidade.',
      'Na fase de obra tivemos o desafio de alterar a fundação para uma solução mais econômica após realizarmos novos estudos de solo que permitiam tal economia.',
      'A edificação foi dotada de sistema de aproveitamento de águas pluviais, já que o consumo de água com a lavagem de veículos era significativa.',
      'A obra foi concluída no final de 2008 e culminou com a necessidade de realização do primeiro leilão da empresa na região.',
    ],
  },
  {
    id: 'sudameris',
    title: 'SUDAMERIS – Acessibilidade Roll Out Integração Banco Real',
    images: [img2],
    details: [
      { label: 'Projeto', value: 'Roll out Acessibilidade Sudameris' },
      { label: 'Cliente', value: 'Banco Real' },
      { label: 'Valor gerenciado', value: 'R$ 1.920.000,00' },
      { label: 'Duração', value: '4 meses' },
      { label: 'Área', value: '96 pontos de vendas' },
      { label: 'Escopo', value: 'Levantamento, projeto, contratação e gerenciamento de obra' },
    ],
    description: [
      'Roll out constituiu em levantamento técnico das agências, elaboração de projetos de acessibilidade, contratação de empresas homologadas pelo banco e gerenciamento das obras.',
      'A atuação abrangeu agências nos estados do Rio de Janeiro, Paraná, Santa Catarina e Rio Grande do Sul. Para isso, a DHARO utilizou suas equipes baseadas nas cidades do Rio de Janeiro, Curitiba e Porto Alegre.',
      'Nesse processo houve interação da equipe de gerenciamento com empresas construção civil, comunicação visual e carenagens, além de empresa de telecomunicação para a instalação de equipamentos de autoatendimento acessíveis',
    ],
  },
  {
    id: 'tim-telecom',
    title: 'TIM – Telefonia Celular em Lojas',
    images: [img3],
    details: [
      { label: 'Projeto', value: 'Expansão da rede de lojas próprias' },
      { label: 'Cliente', value: 'Confidencial' },
      { label: 'Valor gerenciado', value: '96 pontos de vendas' },
      { label: 'Duração', value: '18 meses' },
      { label: 'Área', value: '6.000 m² em 33 lojas' },
      { label: 'Escopo', value: 'Levantamento técnico, projetos e obras de abertura de lojas próprias.'},
    ],
    description: [
      'Abertura de cerca de 33 lojas em regiões Sudeste, Sul, Centro-Oeste, Norte e Nordeste.',
      'Da viabilidade e projetos (elétrica, dados, incêndio, AVAC e estrutura) ao gerenciamento full-time da execução.',
      'Profissional residente em cada loja para garantir prazo, custo e qualidade.',
    ],
  },
  {
    id: 'ricardo-eletro',
    title: 'RICARDO ELETRO – 90 Lojas (MG, DF, GO e ES)',
    images: [img4],
    details: [
      { label: 'Projeto', value: 'Remodelação de 90 lojas' },
      { label: 'Cliente', value: 'Ricardo Eletro' },
      { label: 'Valor gerenciado', value: 'R$ 63.000.000,00' },
      { label: 'Duração', value: '5 meses' },
      { label: 'Área', value: '54.000 m²' },
      { label: 'Escopo', value: 'Gerenciamento, estudos de viabilidade técnica, projetos executivos e licitações.'},
    ],
    description: [
      'Gerenciamento completo para reformar, rebrandear e unificar sistemas de 90 lojas MIG/Ricardo Eletro em tempo recorde.',
      'Coordenação de >10 construtoras, fornecedores de comunicação visual, mobiliário e sistemas.',
      'Masterplan para controle de prazos, custos e qualidade, com payback acelerado das unidades.',
    ],
  },
  {
    id: 'estacaomexico',
    title: 'ESTAÇÕES BP MÉXICO – México',
    images: [img34],
    details: [
      { label: 'Projeto', value: 'BP México – Instalação da operação México' },
      { label: 'Cliente', value: 'GLOBAL ALLIANCE – BP MÉXICO' },
      { label: 'Valor gerenciado', value: 'Orçamento de $ 50.000.000,00/ano' },
      { label: 'Duração', value: '2 anos' },
      { label: 'Área', value: '8 novas estações, 45 rebranding, 50 lojas de conveniência' },
      { label: 'Escopo', value: 'Gerenciamento do projeto, HSE e controle de implantação (estações, car-wash e lojas).'},
    ],
    description: [
      'Gerenciamento da implementação da BP no México em conjunto com a Global Alliance–Bovis Lend Lease.',
      '8 novas estações, rebranding de 45 postos e +50 lojas de conveniência em várias cidades (CDMX, Tijuana, Guadalajara, Monterrey).',
      'Gestão completa de HSE conforme normas locais e padrões BP/DHARO.',
    ],
  },
  {
    id: 'air-bp',
    title: 'AIR BP BRASIL – Cuiabá (MT) e Rio de Janeiro (RJ)',
    images: [img6],
    details: [
      { label: 'Projeto', value: 'Abertura de Postos de Abastecimento de Aeronaves (PAAs)' },
      { label: 'Cliente', value: 'Air BP Brasil Ltda' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '4 meses' },
      { label: 'Área', value: '5.000 m²' },
      { label: 'Escopo', value: 'Gerenciamento do projeto e fiscalização das obras.'},
    ],
    description: [
      'Gerenciamento e fiscalização dos projetos e obras do programa de PAAs, com padrão global BP.',
      'Foco em segurança, qualidade, saúde e respeito ao meio ambiente.',
      'Atendimento padronizado e integração com fornecedores homologados.',
    ],
  },
  {
    id: 'shopping-praca-moca',
    title: 'SHOPPING PRAÇA DA MOÇA – Diadema, São Paulo',
    images: [img7],
    details: [
      { label: 'Projeto', value: 'Shopping Praça da Moça' },
      { label: 'Cliente', value: 'EMPREENDI' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: 'Fase de projeto em andamento' },
      { label: 'Área', value: '90.000 m²' },
      { label: 'Escopo', value: 'Consultoria, projeto e fiscalização de obras de acessibilidade.'},
    ],
    description: [
      'Implementação integral da NBR 9050/04 como diferencial do empreendimento, desde a concepção.',
      'Adequações em 8 pavimentos para garantir circulação plena e segura.',
      'Compatibilização com o projeto arquitetônico e operação do shopping.',
    ],
  },
  {
    id: 'sao-jose-campos',
    title: 'PREFEITURA DE SJC – Canalização de Córrego',
    images: [img8],
    details: [
      { label: 'Projeto', value: 'Obras de canalização de córrego' },
      { label: 'Cliente', value: 'Prefeitura de São José dos Campos' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '8 meses' },
      { label: 'Área', value: 'Aprox. 2 km' },
      { label: 'Escopo', value: 'Canalização e revitalização do canteiro central da Av. Sen. Teotônio Vilela.'},
    ],
    description: [
      'Execução com forte interferência climática (chuvas diárias), exigindo planejamento dinâmico.',
      'Abertura do canal, base e laje de fundo, assentamento de pré-moldados em “L” e acabamento.',
      'Paisagismo, calçamento, guarda-corpos e passarelas integrados ao escopo.',
    ],
  },
  {
    id: 'citibank',
    title: 'CITIBANK – Mudança da Imagem Corporativa (Brasil)',
    images: [img9],
    details: [
      { label: 'Projeto', value: 'Programa de rebranding – Citibank' },
      { label: 'Cliente', value: 'Banco Citibank S.A.' },
      { label: 'Valor gerenciado', value: 'R$ 1.000.000,00' },
      { label: 'Duração', value: '3 meses de planejamento / 45 dias de execução' },
      { label: 'Área', value: '106 agências' },
      { label: 'Escopo', value: 'Gerenciamento do programa de mudança de marca (externa e interna).'},
    ],
    description: [
      'Levantamento LATAM, definição de escopo e projeto executivo para retrofit de estruturas.',
      'Controle de qualidade desde a fábrica até a instalação “ponto a ponto”.',
      'Operação simultânea em diversos estados com logística reprogramável.',
    ],
  },
  {
    id: 'drogasilraia',
    title: 'RAIA DROGASIL – Reformas de lojas nos estados de SP, RJ e MS',
    images: [img10],
    details: [
      { label: 'Projeto', value: 'Reforma Geral de Pontos de Venda' },
      { label: 'Cliente', value: 'RAIA DROGASIL' },
      { label: 'Valor gerenciado', value: 'R$ 3.850.000,00' },
      { label: 'Duração', value: 'Início em março de 2017 e conclusão em março 2018.' },
      { label: 'Área', value: '15 lojas com aprox. 250m2 cada – Total de 3.750 m².' },
      { label: 'Escopo', value: 'Alteração de layout com troca de mobiliário e comunicação visual, adequações de instalações elétricas, hidro sanitárias, troca de pisos, troca de forro, pintura e acabamento geral das lojas.' },
    ],
    description: [
      'A Dharo executou a reforma de 15 lojas da rede, sendo 5 no estado de São Paulo, 7 no estado do Rio de Janeiro e 3 no estado do Mato Grosso do Sul.',
      'Os prazos de obra variaram entre 15 e 35 dias corridos, dependendo do porte. Foi estabelecido um planejamento de ataque em 4 lojas mensais, sendo que todas elas se mantiveram em funcionamento, sem prejuízo no volume de vendas.',
    ],
  },
  {
    id: 'bancohsbc',
    title: 'BANCO HSBC – Adequações de Acessibilidade 2009',
    images: [img11],
    details: [
      { label: 'Projeto', value: 'HSBC – Adequações de Acessibilidade' },
      { label: 'Cliente', value: 'HSBC' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '14 meses' },
      { label: 'Área', value: 'Cerca de 1.300 pontos de vendas' },
      { label: 'Escopo', value: 'Levantamento técnico, projetos e Gerenciamento de obras de adequação de acessibilidade.' },
    ],
    description: [
      'Levantamento técnico de cerca de 1300 agências, elaboração de estudos de viabilidade e gerenciamento das obras de adequação de acessibilidade.',
      'As agência estão distribuídas em todo o território nacional, uma vez que o programa abrange todo o parque de agências do HSBC.',
      'Sendo assim, o principal desafia foi a quantidade pontos a serem adequados em um curto espaça de tempo.',
      'A definição de roteiros e alocação de equipes adequadas foram fundamentais para o sucesso da implantação.',
    ],
  },
  {
    id: '3mdobrasil',
    title: '3M DO BRASIL – Santander Troca de Comunicação Visual',
    images: [img12],
    details: [
      { label: 'Projeto', value: 'Troca da Marca Banco Real x Santander' },
      { label: 'Cliente', value: '3M do Brasil' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '8 meses' },
      { label: 'Área', value: 'Cerca de 1.170 pontos de vendas' },
      { label: 'Escopo', value: 'Levantamento técnico, projetos e Gerenciamento de obras de troca de Comunicação visual interna e externa.' },
    ],
    description: [
      'O grande desafio desse projeto é o volume de pontos de venda e o curto prazo estabelecido pelo cliente, além da necessidade de mobilização quase que imediata.',
      'A fase de levantamento das 1170 agências foi concluída em 40 dias corridos, o que resultou em uma média de mais de 40 levantamentos por dia útil. Isso só foi possível com a distribuição de nossas equipes técnicas trabalhando em paralelo em 45 frentes distintas ao longo do território nacional.',
      'A fase de estudos de viabilidade técnica, legal e financeira não poderia ser diferente. A produtividade média de 35 estudos por dia foi alcançada com muito esforço de todas as equipes internas e parceiros de projeto treinados para programas desse tipo. O mesmo ocorre para a elaboração dos projetos executivos.',
      'O gerenciamento de campo para um projeto como esse é muito intenso, uma vez que os fiscais devem estar atentos às instalações de comunicação visual, além das intervenções civis, mais especificamente de pintura das agências e pequenas adequações de instalações elétricas.',
      'A necessidade de relatórios logo após as instalações nos obriga a distribuir nossos recursos de maneira estratégica, levando em conta não só a logística para o deslocamento, mas também a concentração das agências e peculiaridades de cada região do país.',
    ],
  },
  {
    id: 'arenamultiuso',
    title: 'ARENA MULTIUSO, ESTÁDIO E PARQUE URBANO – Osasco, SP',
    images: [img13],
    details: [
      { label: 'Projeto', value: 'Arena Multiuso, estádio e parque urbano – Osasco' },
      { label: 'Cliente', value: 'Prefeitura Municipal de Osasco' },
      { label: 'Valor gerenciado', value: 'R$ 150 milhões' },
      { label: 'Duração', value: '6 meses' },
      { label: 'Área', value: 'Terreno: 79.560 m² Construída: 57.305 m²' },
      { label: 'Escopo', value: 'Elaboração de programa, estudo conceitual, masterplan e projeto básico.' },
    ],
    description: [
      'Com o desafio de repaginar urbanisticamente uma área da Prefeitura Municipal de Osasco, atualmente ocupada por um campo de futebol e um centro comunitário degradado, a DHARO, através de seu segmento esportivo ARENA, foi contratada para elaborar um estudo de regeneração e requalificação de uso do terreno.',
      'Através da experiência de observação de referências urbanísticas no exterior, a DHARO- ARENA propôs a ocupação do terrenos por uma arena multiuso para 7.000 espectadores e um estádio de futebol para 20.000 espectadores, integrados por uma praça e rodeados pela vegetação existente no terreno.',
      'A proposta destaca o aspecto de integração urbana do entorno e de sustentabilidade ecológica. Para isso, itens como o reuso de água de chuva pela captação da drenagem do gramado, coberturas e pisos permeáveis, reuso de materiais de demolição, captação por painéis solares e fotovoltaicos foram algumas das medidas contidas na proposta.',
      'Com o objetivo de ser o primeiro estádio brasileiro certificado pelo LEED (Leadership in Energy and Environmental Design), uma consultoria especializada na certificação trabalhou em equipe para poder traduzir as premissas de sustentabilidade ao desenho do projeto.',
      'O sucesso na apresentação da requalificação do espaço foi baseada no conceito de parque urbano e de estádio aberto e integrado, com a continuidade das áreas verdes permeando o entorno do estádio.',
      'A aceitação da proposta pelo cliente foi total, inclusive na viabilidade de captação de investidores privados em uma solução mista envolvendo um uso social, público, cultural e de atividades privadas em eventos específicos.',
      'O estádio prevê a ampliação para 35.000 lugares, podendo sediar eventos de maior porte e servindo de área multiuso em conjunto com a arena, em conjunto ou separadamente',
    ],
  },
  {
    id: 'bancoazteca',
    title: 'BANCO AZTECA – Edifício Sede',
    images: [img14],
    details: [
      { label: 'Projeto', value: 'Edifício Sede' },
      { label: 'Cliente', value: 'Banco Azteca' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '3 meses' },
      { label: 'Área', value: '4.000,00 m²' },
      { label: 'Escopo', value: 'Gerenciamento, Estudos de viabilidade técnica e Execução dos projetos executivos na reforma do edifício sede. Reforma completa dos pavimentos, mobiliários e equipamentos. Construção de Centro de distribuição de dados.' },
    ],
    description: [
      'A DHARO em mais uma importante etapa para implementação do grupo Azteca no Brasil, reforma e moderniza edifício sede em Recife.',
      'Edifício contendo 3 pavimentos, com salas de escritórios para os executivos do grupo Azteca, incorpora também uma sala de tecnologia que faz comunicação das lojas e financeiras no Brasil comunicando com o sistema do grupo em todo mundo. Uma agencia matriz também foi incorporada no pavimento térreo do edifício.',
      'Toda infra estrutura e cabeamentos lógicos foram previstos nesta obras para o ótimo funcionamento dos equipamentos usados.',
      'Executamos desde o levantamento, orçamento, execução de layout, projetos executivos até o gerenciamento da obra e “handover” termino de obra.',
      'A reforma durou 3 meses e foi previsto uma moderna fachada em alucobond.',
    ],
  },
  {
    id: 'aztecabanco',
    title: 'BANCO AZTECA – Recife',
    images: [img15],
    details: [
      { label: 'Projeto', value: 'Gerenciamento e projetos completos para o Banco Azteca e lojas Elektra' },
      { label: 'Cliente', value: 'Grupo Elektra' },
      { label: 'Valor gerenciado', value: 'R$ 7.800.000,00' },
      { label: 'Duração', value: '4 meses' },
      { label: 'Área', value: '4 Financeiras nomeadas PAZ (Pontos Aztecas), 1 Agência, 2 lojas, 1 centro de distribuição' },
      { label: 'Escopo', value: 'Gerenciamento desde o levantamento, elaboração de EVT (Estudos de Viabilidade Técnica), execução dos projetos executivos até entrega da obra realizada. Tropicalização de projetos vindos do México e definições de acabamentos nacionais.' },
    ],
    description: [
      'A DHARO participou de mais um projeto emblemático em Recife com a implementação das primeiras agências e financeiras do Banco Azteca no Brasil.',
      'Projeto iniciado no México, teve como ponto de partida o reconhecimento dos padrões utilizados neste país, analisando possibilidades e criando opções para nosso cliente.',
      'O grande desafio deste projeto foi o prazo na implementação das agencias para garantir a licença de operação do Banco Azteca no Brasil liberada pelo banco central.',
      'Além das agências, a DHARO gerenciou projeto e obra de 2 lojas de aproximadamente 1.500 m² e reforma e adaptação de infra estrutura de um centro de distribuição para o grupo Elektra.',
    ],
  },
  {
    id: 'santandertroca',
    title: 'SANTANDER – Troca da Marca 2008',
    images: [img16],
    details: [
      { label: 'Projeto', value: 'Troca da Marca Banco Santander-2008' },
      { label: 'Cliente', value: 'BANCO SANTANDER S/A.' },
      { label: 'Valor gerenciado', value: 'R$ 8.500.000,00' },
      { label: 'Duração', value: 'Maio/2008 a Março/2008' },
      { label: 'Área', value: '170 Agências localizadas nos estado de São Paulo, Rio de Janeiro, Santa Catarina, Minas Gerais e Goiás.' },
      { label: 'Escopo', value: 'Estudo de Viabilidade Técnica legal eFinanceira, Fotomontagem, Projetos Executivos, Gerenciamento da Implantação, Aprovação Legal. O projeto aprovado propiciou a realização do primeiro leilão oficial em Nov/2007, o atendeu inteiramente a necessidade e expectativa do cliente.' },
    ],
    description: [
      'A terceira e última fase da atualização da logomarca Santander, finaliza-se com este projeto  que  engloba  todos  os  PV´s dotados da marca “BANCO SANTANDER”',
      'A   atualização   da   logomarca,   envolve ações de comunicação visual externa, interna e remodelação civil, para adequação dos acabamentos padrão da rede Santander, iniciada nas cidades de São Paulo (projeto Cidade Limpa) e Rio de Janeiro, e continuada no Projeto Troca da Marca Banespa.',
      'Dos 431 Pontos localizadas em território nacional, a DHARO foi responsável por 170, mais especificamente por PV´s localizados nos  estados  de  São Paulo,  Santa Catarina, Rio de Janeiro, Minas Gerais e Goiás.',
      'O escopo consistiu em visita a cada localidade para levantamento métrico, fotográfico e cadastral das instalações. O estudo de viabilidade e restrição legal destas  localidades  foi  conduzido  por equipe específica e com “expertize” no assunto.',
      'A compilação entre o material de levantamento, as restrições e legislações municipais específicas, resultou em um estudo da nova imagem proposta, que juntamente com os custos análise legal foi submetida à aprovação das áreas envolvidas pelo cliente. Condicionalmente à aprovação do estudo, iniciou-se a fase de projetos executivos detalhados, liberados  para  concorrência  e implantação, monitorada através do gerenciamento  de  campo  aos fornecedores envolvidos no processo.',
    ],
  },
  {
    id: 'vizeu1',
    title: 'VIZEU LEILOEIRO – Unidade Diadema',
    images: [img17],
    details: [
      { label: 'Projeto', value: 'Reforma e Ampliação de Galpão Industrial' },
      { label: 'Cliente', value: 'VIZEU LEILOEIRO.' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: 'Janeiro/2007 a Outubro/2007' },
      { label: 'Área', value: 'Terreno 15000m² / Galpão 2.590m²' },
      { label: 'Escopo', value: 'Estudo, Projetos, Gerenciamento de Obras, Provação de Projeto de Corpo de Bombeiros de Diadema' },
    ],
    description: [
      'O estudo técnico, projeto, concorrência e gerenciamento do processo de ampliação e reforma da Unidade do Grupo Vizeu Leiloeiros em Diadema foi inteiramente conduzido pela DHARO.',
      'O Galpão de 2600m², localizado em uma área total de 15.000m², foi totalmente ampliado e adequação as necessidades operacionais do cliente.',
      'Além da área de armazenagem e visitação de produtos, foi criada uma área em mezanino com necessidades específicas voltadas para a realização de leilões.',
      'A criação desta área viabilizada na fase de projeto, após estudo, prospecção e prova de carga nas fundações do galpão, foi um desafio vencido, o que propiciou o atendimento as necessidades do cliente.',
      'Adequar toda a área de um galpão que foi inicialmente concebido para fins industriais, as novas necessidades operacionais, motivou um estudo detalhado de adequação e criação de instalações de emergência, para atendimento ao novo uso.',
    ],
  },
  {
    id: 'citibank1',
    title: 'CITIBANK – Expansão',
    images: [img18],
    details: [
      { label: 'Projeto', value: 'Programa de implantação de novas agências' },
      { label: 'Cliente', value: 'Banco Citibank S.A.' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '6 meses' },
      { label: 'Área', value: '15 agências Aprox. 6.500 m²' },
      { label: 'Escopo', value: 'Expansão das agências e financeiras no território nacional. Gerenciamento do projeto, construção e reformas gerais.' },
    ],
    description: [
      'A DHARO foi contratada pelo Citibank para execução do processo de implantação de 15 novas agências no Brasil, com o prazo de execução de 30 dias por ponto, sendo o processo atual divido em Fases I, II e III com duração total destas três fases de 6 meses.',
      'O escopo de contrato foi o de gerenciar e controlar a qualidade destas implantações. Nosso papel decisivo foi o acompanhamento em “site” de todas as instalações, “ponto a ponto”, garantindo o bom funcionamento deste processo com eficiência e velocidade necessárias para garantir que o trabalho de implantações cumprisse os prazos estabelecidos.',
      'Dentro do programa foi necessário a velocidade na programação logística de instalação e fornecedores, para atender aos prazos pequenos de cada implantação (máximo 30 dias por ponto).',
    ],
  },
  {
    id: 'santanderrio',
    title: 'SANTANDER – Rio de Janeiro',
    images: [img19],
    details: [
      { label: 'Projeto', value: 'Rio de Janeiro / Reforma Geral' },
      { label: 'Cliente', value: 'BANCO SANTANDER S/A.' },
      { label: 'Valor gerenciado', value: 'R$ 5.000.000,00' },
      { label: 'Duração', value: 'Junho/2007 a Dezembro/2007' },
      { label: 'Área', value: '25 Agências localizadas na cidade do Rio de Janeiro São Paulo' },
      { label: 'Escopo', value: 'Estudo de Viabilidade Técnica legal e Financeira, Fotomontagem, Projetos Executivos, Gerenciamento da Implantação.' },
    ],
    description: [
      'O Projeto Rio de Janeiro objetivou a implantação e reforma geral de 25 Agências no Rio de Janeiro. A ação que buscou a padronização das agências ocorreu com data de conclusão definida, já que a premissa principal do projeto foi a se ter todo parque disponível para atendimento as contas da prefeitura Municipal do Rio de Janeiro.',
      'O escopo consistiu em visita a cada localidade para levantamento métrico, fotográfico e cadastral das instalações. O processo de gerenciamento e projetos executivos ocorreu concomitantemente as intervenções, visando o atendimento ao cronograma.',
      'Alguns PV´s foram construídos, sendo a maioria reformada com aumento de área, o que criou um desafio em termos de atendimento a legislação municipal e trabalhista, já que os imóveis em sua maioria não possuíam área livre.',
      'Em função da reforma geral, a engenharia do cliente definiu realizar conjuntamente com a obra um programa de atualização, ampliação e troca de equipamentos de autoatendimento e No-Breaks, o que gerou a necessidade de grande sincronismo entre as diversas áreas envolvidas, além de necessidade específica de projeto e infraestrutura lógica elétrica e de sistema de ar- condicionado.',
      'O processo teve duração de aproximadamente 6 meses e foi concluído em Dez/2007, atendendo plenamente as necessidades e expectativas do cliente.',
    ],
  },
  {
    id: 'santander2',
    title: 'SANTANDER – Projeto Acessibilidade 2007',
    images: [img20],
    details: [
      { label: 'Projeto', value: 'Santander Acessibilidade – 2007' },
      { label: 'Cliente', value: 'BANCO SANTANDER S/A.' },
      { label: 'Valor gerenciado', value: 'R$ 2.650.000,00' },
      { label: 'Duração', value: 'Agosto/2007 a Abril/2008' },
      { label: 'Área', value: 'Estado de São Paulo e Rio de Janeiro' },
      { label: 'Escopo', value: 'Estudo, Projetos, Gerenciamento de Obras, Aprovação Legal' },
    ],
    description: [
      'O Departamento de Projetos Especiais do Banco Santander, está atuando na adequação de Agências Bancarias, visando atendimento a NBR 9050, Acessibilidade a Edificações e ao TAC- Termo de Ajustamento de Conduta.',
      'Em uma primeira fase foram definidas agências prioritárias, mais especificamente as que possuíam notificação para adequação ou as localizadas em cidades que possuem legislação específica de acessibilidade.',
      'De um total de 190 agências distribuídas no território nacional, a DHARO Engenharia foi responsável por 40, localizadas nos estados de São Paulo e Rio de Janeiro.',
      'O escopo consistiu em visita a cada localidade para levantamento métrico, fotográfico e cadastral das instalações. Em atividade paralela, o levantamento das legislações municipais destas localidades foi conduzido por equipe específica.',
      'A compilação entre o material de levantamento, as restrições municipais e de Norma, combinadas com os padrões do banco definiram o estudo de layout para cada agência, incluindo estimativa de custos para fornecedor civil, mobiliário, equipamentos, plataformas / elevadores, material este submetido à aprovação da área técnica e engenharia do Banco Santander.',
      'O início do projeto executivo detalhado ocorre com a aprovação do estudo e é finalizado e liberado para concorrência após a validação conjunta com o cliente.',
      'O gerenciamento que inclui a concorrência, definição e equalização de planilhas e aprovação do valor final são responsáveis pela fiscalização junto aos fornecedores mantendo o cronograma e fluxo financeiro coerentes ao previsto inicialmente.',
      'O processo de aprovação legal é continuo finalizando somente com o parecer formal do órgão municipal responsável.',
    ],
  },
  {
    id: 'santander3',
    title: 'SANTANDER – Troca da Marca Banespa 2007',
    images: [img21],
    details: [
      { label: 'Projeto', value: 'Troca da Marca Banespa-2007' },
      { label: 'Cliente', value: 'BANCO SANTANDER S/A.' },
      { label: 'Valor gerenciado', value: 'R$ 5.300.000,00' },
      { label: 'Duração', value: 'Agosto/2007 a Fevereiro/2008' },
      { label: 'Área', value: '180 Agências localizadas no estado de São Paulo (exceto capital)' },
      { label: 'Escopo', value: 'Estudo de Viabilidade Técnica legal e Financeira, Fotomontagem, Projetos Executivos, Gerenciamento da Implantação, Aprovação Legal' },
    ],
    description: [
      'Em função da compra de rede Bancária do Banespa pelo Grupo Espanhol Banco Santander, o departamento de Projetos Especiais do banco responsável pela atualização da logomarca em toda rede.',
      'A   atualização   da   logomarca,   envolve ações de comunicação visual externa, interna e remodelação civil, para atualização dos acabamentos padrão da rede Santander, iniciada nas cidades de São Paulo e Rio de Janeiro, entra na fase de  adequação  de  PV´s  (Pontos  de Vendas) padrão Banespa.',
      'De aproximadamente 600 Agências localizadas em território nacional, a DHARO foi responsável por 180, mais especificamente  pelos  PV´s  localizados em todo o estado de São Paulo, exceto a capital, cujos pontos foram atendidos também pela DHARO em outro projeto específico.',
      'O escopo consistiu em visita a cada localidade para levantamento métrico, fotográfico e cadastral das instalações. O estudo de viabilidade e restrição legal destas  localidades  foi  conduzido  por equipe específica e com “expertise” no assunto.',
      'A compilação entre o material de levantamento, as restrições e legislações municipais especificas, resultou em um estudo da nova imagem proposta, que juntamente com os custos análise legal foi submetida à aprovação das áreas envolvidas pelo cliente.',
      'O início do projeto executivo detalhado ocorre com a aprovação do estudo e é finalizado e liberado para concorrência após a validação conjunta com o cliente.',
      'O gerenciamento, iniciado com a concorrência, definição, equalização de planilhas, aprovação do valor final, é continuado durante a fiscalização das instalações, de modo a manter-se o alinhamento do cronograma e fluxo financeiro  ao  previsto  inicialmente. Finaliza-se   o   mesmo,   na   entrega   do escopo dentro dos padrões e normas do cliente, bem como do balanço financeiro e histórico documental de todo o processo, incluindo a aprovação legal com o parecer dos órgãos responsáveis',
    ],
  },
  {
    id: 'embratel',
    title: 'NORTEL TELECOM / EMBRATEL – Estado de São Paulo',
    images: [img23],
    details: [
      { label: 'Projeto', value: 'Nortel Telecom / Embratel' },
      { label: 'Cliente', value: 'Nortel Networks – Brasil' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '8 meses' },
      { label: 'Área', value: '205 sites' },
      { label: 'Escopo', value: 'Gerenciamento do compartilhamento de 205 sites' },
    ],
    description: [
      'A DHARO / Bovis Lend Lease foi contratada para prestar serviços à Nortel Networks Brasil, que assumiu um contrato com a Embratel de migração de sistema e upgrade em 205 sites em todo o Estado de São Paulo.',
      'A maioria dos sites é de compartilhamento, tipo roof tops, antenas e torrer. As atividades são muito dinâmicas e acontecem nos 7 dias da semana, durante os 8 meses de duração das atividades.',
      'Uma coordenação estreita com a equipe do cliente final (Embratel), com a Nortel e com os supervisores de campo e construtora foi fundamental para o sucesso no cumprimento de datas e escopos de serviço.',
      'Toda a coordenação foi feita através de check lists iniciais e finais elaborados nos moldes da DHARO / Bovis Lend Lease.',
      'Os processos de construção requerem uma coordenação no material, mão de obra, liberação de acesso e equipamentos, de acordo com o Cronograma do cliente final (Embratel).',
      'O pessoal da DHARO / Bovis Lend Lease supervisionou todas as etapas em casa site em 3 ou 4 visitas com check lists completos que eram compilados em uma Master Plan detalhada que pôde subsidiar o cliente nas atualizações de Cronograma.',
    ],
  },
  {
    id: 'tam',
    title: 'TAM – Troca de Comunicação Visual (Europa, América do Norte e América do Sul)',
    images: [img24],
    details: [
      { label: 'Projeto', value: 'Troca de comunicação visual' },
      { label: 'Cliente', value: 'TAM' },
      { label: 'Valor gerenciado', value: 'R$ 3.200.000,00' },
      { label: 'Duração', value: 'Início em maio de 2008, em andamento' },
      { label: 'Área', value: '106 pontos de venda' },
      { label: 'Escopo', value: 'Troca de comunicação visual de lojas aeroporto, lojas comerciais, check in / check out, Tam Cargo e terminal de cargas. Em complemento ao escopo de projeto. A DHARO também executa as obras civis, elétricas e hidráulicas demandadas pela atualização da marca.' },
    ],
    description: [
      'Programa consiste em troca de comunicação visual de bases nacionais em diversas regiões do território nacional, além de bases internacionais localizadas na Europa, EUA e América Latina. O escopo dos trabalhos consiste em levantamento  técnico,  elaboração de  estudos  compostos  por desenhos e fotomontagens, elaboração de projetos executivos e execução de trabalhos de construção civil.',
      'Nesse relacionamento comercial com o cliente, tivemos a honra de sermos escolhidos  para  a  execução das obras de lojas piloto, onde a nova identidade visual e arquitetônica pode ser implantada de forma pioneira, como é o caso da loja da TAM Viagens em um shopping Center de São Paulo.',
    ],
  },
  {
    id: 'timcentrais',
    title: 'TIM – Centrais Operacionais (Território Nacional)',
    images: [img25],
    details: [
      { label: 'Projeto', value: 'Reformas e Adequações de Edifício das Centrais Operacionais' },
      { label: 'Cliente', value: 'TIM' },
      { label: 'Valor gerenciado', value: 'R$ 4.000.000,00' },
      { label: 'Duração', value: 'Anos de 2014 e 2015' },
      { label: 'Área', value: '35 Edifícios Operacionais – Área total aprox. de 25.000m²' },
      { label: 'Escopo', value: 'Levantamentos técnicos, projetos de arquitetura e de engenharia, execução de obras de reformas e adequações.' },
    ],
    description: [
      'Programa de melhorias nos sistemas de instalações elétricas AC e DC, Grupos Geradores e Sistema de Climatização dos Data Centers. Devido ao crescimento do volume de equipamentos a serem instalados em uma mesma área de edificação, foram necessárias adequações para as novas demandas de consumo de energia elétrica e de climatização.',
      'Por consequência de tais adequações, foram necessárias modificações de layouts e reconstrução de vários ambientes dos prédios operacionais da operadora.',
      'Além dessas adequações, foram previstos sistemas de automação e monitoramento de energia e climatização.',
    ],
  },
  {
    id: 'cummis',
    title: 'CUMMINS DO BRASIL – Planta Guarulhos, SP',
    images: [img26],
    details: [
      { label: 'Projeto', value: 'Obras de adequações' },
      { label: 'Cliente', value: 'CUMMINS DO BRASIL FÁBRICA DE MOTORES' },
      { label: 'Valor gerenciado', value: 'R$ 2.200.000,00' },
      { label: 'Duração', value: '2015 e 2016' },
      { label: 'Área', value: '19.000m²' },
      { label: 'Escopo', value: 'Levantamentos técnicos, projetos de arquitetura e de engenharia, execução de obras de reformas e adequações.' },
    ],
    description: [
      'Trabalhos técnicos dentro da fábrica de Guarulhos, cujo objetivo foram obras de adequações de portaria principal, portaria de caminhões, sistemas de drenagem e esgoto sanitário, regularização de sistemas de proteção e combate à incêndio.',
      'Os serviços tiveram como diferencial de complexidade a necessidade de atendimento a todas as regras e normas técnicas e de segurança para trabalhos em altura, instalações elétricas, entre outros, sempre atendendo as exigências nacionais e internacionais de ambientes fabris.',
    ],
  },
  {
    id: 'bimbo',
    title: 'GRUPO BIMBO – Panificação e Fábricas no Brasil',
    images: [img27],
    details: [
      { label: 'Projeto', value: 'Obras de Adequações' },
      { label: 'Cliente', value: 'GRUPO BIMBO – PLANTA SÃO PAULO' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: 'Início em janeiro de 2018, em andamento' },
      { label: 'Área', value: '43.000 m2' },
      { label: 'Escopo', value: 'Levantamentos técnicos, projetos de arquitetura, projetos de engenharia, obras de adequações e melhorias para o processo de produção e para atendimento às legislações Brasileiras e Internacionais' },
    ],
    description: [
      'A Bimbo é mais um cliente na área industrial, onde os trabalhos trazem o desafio de executar com qualidade, velocidade e dentro dos mais exigentes parâmetros de segurança e precisão, especialmente por se tratar de ambiente de produção da indústria alimentícia.',
      'Adequações passam por criação de novos refeitórios, vestiários, salas de reuniões, até modernização do sistema de distribuição de energia elétrica internamente à fábrica.',
    ],
  },
  {
    id: 'daerp',
    title: 'DAERP – Ribeirão Preto – Saneamento Básico',
    images: [img28],
    details: [
      { label: 'Projeto', value: 'Obras de Saneamento básico em Ribeirão Preto' },
      { label: 'Cliente', value: 'Departamento de Água e Esgoto de Ribeirão Preto – SP' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '14 meses' },
      { label: 'Área', value: '20.000 m2' },
      { label: 'Escopo', value: 'Construção de Redes Coletores, Estações Elevatórias e obras afins para Saneamento Básico' },
    ],
    description: [
      'Obras realizadas na Vila Guiomar, em Ribeirão Preto, SP.',
      'Foi realizado o projeto completo envolvendo a execução das estações elevatórias e redes coletoras do bairro.',
      'Como os prazos foram apertados, foi necessário atacar a obra em várias frentes, o que gerou o desafio de atenção e cuidado minucioso do corpo técnico afim de garantir todos os níveis e comprimentos dos trechos das redes, atendendo na íntegra as diretrizes do dimensionamento de perdas de carga, vazões e pressões executado anteriormente.',
    ],
  },
  {
    id: 'sanasa',
    title: 'SANASA – Campinas, SP – Drenagem de Águas Pluviais',
    images: [img29],
    details: [
      { label: 'Projeto', value: 'Implantação do Sistema de Captação De Águas Pluviais' },
      { label: 'Cliente', value: 'SANASA Campinas – SP' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '8 meses' },
      { label: 'Área', value: '8.000 m de rede' },
      { label: 'Escopo', value: 'Execução de obras de drenagem de águas pluviais no bairro Jardim Satélite Iris, em Campinas SP' },
    ],
    description: [
      'Obra em parceria com Construtora Estrutural.',
      'As obras foram realizadas no projeto de reurbanização do bairro Jd. Satélite Iris em Campinas e teve o objetivo de implantação toda a rede de captação de Águas Pluviais.',
      'Obra com prazo desafiador, mas atendido dentro das expectativas de tempo e qualidade.',
    ],
  },
  {
    id: 'viracopos',
    title: 'AEROPORTOS BRASIL VIRACOPOS – Rede de Esgoto',
    images: [img30],
    details: [
      { label: 'Projeto', value: 'Rede de Esgoto do Novo Centro de Operações' },
      { label: 'Cliente', value: 'Aeroportos Brasil Viracopos' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '11 meses' },
      { label: 'Área', value: '20.000 m2' },
      { label: 'Escopo', value: 'Implantação da rede de esgoto do novo centro de operações no aeroporto de Viracopos, Campinas, SP' },
    ],
    description: [
      'Obra teve como principal desafio as exigências inerentes às atividades dentro do um aeroporto de grande porte, tanto do ponto de vista de procedimentos e treinamentos de segurança, como do ponto de vista de horários de trabalho e liberações de áreas restritas.',
      'Nessa obra o planejamento detalhado de cada etapa foi ponto chave para o sucesso do empreendimento.',
    ],
  },
  {
    id: 'terrarica',
    title: 'LOTEAMENTO JARDIM TERRA RICA – Redes de Esgoto e Água',
    images: [img31],
    details: [
      { label: 'Projeto', value: 'Construção de rede coletora de esgoto e de distribuição de água' },
      { label: 'Cliente', value: 'Loteamento Jardim Terra Rica' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '5 meses' },
      { label: 'Área', value: '80.000 m2' },
      { label: 'Escopo', value: 'Construção da rede de esgoto e de distribuição de água do loteamento.' },
    ],
    description: [
      'Obra de topografia e terraplanagem, escavação e implantação das redes de esgoto e distribuição de água em todo o loteamento.',
      'Obra encontrou desafios de interferências de tubulações antigas  e desativadas, mas mesmo assim o cronograma foi recuperado e os trabalhos finalizados no prazo acordado.',
    ],
  },
  {
    id: 'saaeportofeliz',
    title: 'SAAE PORTO FELIZ – Esgoto Sanitário',
    images: [img32],
    details: [
      { label: 'Projeto', value: 'Ampliação do Sistema de Esgoto Sanitário' },
      { label: 'Cliente', value: 'SAAE do Município de Porto Feliz – SP' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '6 meses' },
      { label: 'Área', value: '10 coletores tronco e 3 linhas de recalque' },
      { label: 'Escopo', value: 'Melhoria do Sistema de Esgoto Sanitário do município com a criação de coletores tronco e linhas de recalque.' },
    ],
    description: [
      'Obras realizada em parceria com Goetze e Lobato Engenharia.',
      'Obras envolveu serviços de topografia, terraplanagem, construção das linhas de tubulações de esgoto sanitário, reaterro compactado, recomposição de paisagismo e demais elementos  acessórios.',
    ],
  },
  {
    id: 'prefeitura',
    title: 'PREFEITURA SJC – Recuperação de Galeria e Pavimentação',
    images: [img33],
    details: [
      { label: 'Projeto', value: 'Obras de Recuperação de Galeria de AP e Pavimentação na Rod. Pres. Dutra' },
      { label: 'Cliente', value: 'Prefeitura Municipal de São José dos Campos' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: '4 meses' },
      { label: 'Área', value: '4.000 m2' },
      { label: 'Escopo', value: 'Após rompimento de Galeria de Águas Pluviais, a obra consistiu em recuperar o sistema de drenagem, reaterro e pavimentação desse importante trecho de tráfego da Rod. Pres. Dutra, na altura do Km 152.' },
    ],
    description: [
      'Devido a um rompimento da antiga galeria de águas pluviais, composta por tubo ármico de diâmetro de 2,8m, instalada a uma profundidade de 11 metros em relação ao nível da pista de rolagem, houve um colapso no solo causando o desmoronamento de todo o aterro e base da rodovia, surgindo então a necessidade de recomposição urgente desse sistema.',
      'Nosso trabalho então foi de retirar tudo o que restou dessa galeria, construir nova galaria em aduelas de concreto pré-moldado, executar o aterro com todo controle de umidade e compactação vencendo a altura de 11 metros, o que foi necessária a importação de um volume considerável de terra (40 mil m3) que veio de uma região localizada a cerca de 10km do local da obra. Vencido o desafio da construção da nova galeria e do reaterro, foi feita a construção do novo sub leito e leito para em seguida partirmos para a pavimentação do trecho. A obra foi realizada em tempo recorde, porém sempre respeitando os procedimentos técnicos de cada etapa, prezando a segurança dos trabalhadores e a qualidade do produto final.',
    ],
  },
  {
    id: 'banco-real',
    title: 'BANCO REAL – “Guarda-Chuva” Gerenciamento de Intervenções',
    images: [img5],
    details: [
      { label: 'Projeto', value: 'ABN – Contrato “Guarda-chuva”' },
      { label: 'Cliente', value: 'Banco Real' },
      { label: 'Valor gerenciado', value: 'R$ 12.000.000,00' },
      { label: 'Duração', value: '1 ano' },
      { label: 'Área', value: 'Cerca de 40 intervenções anuais' },
      { label: 'Escopo', value: 'Levantamento e gerenciamento de reformas, ampliações ou aberturas de agências.' },
    ],
    description: [
      'Contrato que abrange trabalhos de levantamento técnico nas agências para coleta de informações relativas à arquitetura, instalações elétricas e hidráulicas, estruturas, sistemas de ar condicionado, entre outros. Tal levantamento serve de base para a elaboração de projetos e orçamentos que precedem a execução da obra.',
      'Posteriormente a DHARO trabalha na fase de licitação das obras, fazendo a equalização de propostas recebidas das construtoras, servindo de suporte técnico para o departamento de compras do banco.',
      'Na fase de obra a DHARO faz o papel dos olhos da engenharia do banco, coordenando todos os trabalhos e documentações no início de obra, durante as obras e nas entregas provisórias e definitivas.',
      'Além do gerenciamento das construtoras, a DHARO gerencia todos os demais fornecedores relacionados com mobiliário, comunicação visual, carenagens, equipamentos etc.',
      'As agências do banco estão espalhadas por todo o território nacional, entretanto, por questões comerciais, a DHARO atende os estados de São Paulo, Rio de Janeiro, Paraná, Santa Catarina, Rio Grande do Sul, Mato Grosso e Mato Grosso do Sul.',
      'Nossas equipes estão preparadas para atender qualquer intervenção em agências, a qualquer tempo, seja para adequações, reformas ou abertura de pontos de venda.',
    ],
  },

  // ====== DUAS ÚLTIMAS OBRAS (com suporte a múltiplas imagens) ======
  {
    id: 'morada-dos-passaros',
    title: 'Residência Alto Padrão Sistema Convencional Residencial Morada dos Pássaros – Barueri - SP',
    images: [
      img35,
      img37,
      img38,
      img39,
      img40,
    ],
    details: [
      { label: 'Projeto', value: 'Residência Alto Padrão Sistema Convencional' },
      { label: 'Cliente', value: 'Pessoa Fisica' },
      { label: 'Valor gerenciado', value: 'Confidencial' },
      { label: 'Duração', value: 'Obra em andamento – previsão de término 2025' },
      { label: 'Área', value: 'Área Terreno: 1100 m2 / Área Construída: 750 m2' },
      { label: 'Escopo', value: '' },
    ],
    description: [''],
  },
  {
    id: 'residencial-rivieira',
    title: 'Residência Alto Padrão no Sistema Light Steel Frame Riviera de Santa Cristina XIII – Paranapanema - SP',
    images: [
      img36,
      img41,
      img42,
      img43,

    ],
    details: [
      { label: 'Projeto', value: 'Residência Alto Padrão no Sistema Light Steel Frame' },
      { label: 'Cliente', value: 'Pessoa Fisica' },
      { label: 'Valor gerenciado', value: 'R$ 800.000' },
      { label: 'Duração', value: 'Obra em andamento – previsão de término 2025' },
      { label: 'Área', value: 'Área Terreno: 450 m2 / Área Construída: 250 m2' },
      { label: 'Escopo', value: '' },
    ],
    description: [''],
  },
]

// ===============================================

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // encontra a obra inicial a partir do id da URL
  const initialIndex = useMemo(
    () => Math.max(0, works.findIndex(w => w.id === id)),
    [id]
  )

  const [current, setCurrent] = useState<number>(initialIndex >= 0 ? initialIndex : 0)
  const [imgIndex, setImgIndex] = useState(0) // índice da imagem dentro da obra

  // se mudar o id na URL, atualiza índice da obra
  useEffect(() => {
    if (initialIndex >= 0) setCurrent(initialIndex)
  }, [initialIndex])

  // ao trocar de obra, volta para a primeira imagem
  useEffect(() => {
    setImgIndex(0)
  }, [current])

  const work = works[current]
  if (!work) return <p className={styles.notFound}>Obra não encontrada.</p>

  // navegação entre obras (mantém seu comportamento)
  const prevWork = () => setCurrent(c => (c - 1 + works.length) % works.length)
  const nextWork = () => setCurrent(c => (c + 1) % works.length)

  // atalhos de teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevWork()
      if (e.key === 'ArrowRight') nextWork()
      if (e.key === 'Escape') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  // título da aba
  useEffect(() => {
    const old = document.title
    document.title = `${work.title} • Portfólio`
    return () => { document.title = old }
  }, [work.title])

  return (
    <>
      <Navbar />
      <div className={styles.bgFx} aria-hidden="true" />
      <main className={styles.container}>
        <button
          className={styles.back}
          onClick={() => navigate(-1)}
          aria-label="Voltar"
        >
          ← Voltar
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>{work.title}</h1>
          <span className={styles.counter}>
            {current + 1} / {works.length}
          </span>
        </header>

        <section className={styles.topSection}>
          {/* Galeria da obra atual */}
          <div className={styles.imageCard}>
            {/* setas mudam de OBRA */}
            <button
              data-nav="prev"
              className={styles.navBtn}
              onClick={prevWork}
              aria-label="Obra anterior"
              title="Obra anterior"
            >
              ‹
            </button>

            <img
              src={work.images[imgIndex]}
              alt={`${work.title} — imagem ${imgIndex + 1}`}
              className={styles.image}
            />

            <button
              data-nav="next"
              className={styles.navBtn}
              onClick={nextWork}
              aria-label="Próxima obra"
              title="Próxima obra"
            >
              ›
            </button>

            {/* Miniaturas para trocar a imagem DENTRO da obra */}
            {work.images.length > 1 && (
              <div className={styles.thumbStrip} role="tablist" aria-label="Mais imagens desta obra">
                {work.images.map((src, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === imgIndex ? styles.active : ''}`}
                    onClick={() => setImgIndex(i)}
                    aria-selected={i === imgIndex}
                    role="tab"
                    title={`Ver imagem ${i + 1}`}
                  >
                    <img src={src} alt={`Miniatura ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes */}
          <aside className={styles.detailsCard}>
            <div className={styles.detailsScroll}>
              <ul className={styles.detailsList}>
                {work.details.map(d => (
                  <li key={d.label} className={styles.detailItem}>
                    <span className={styles.detailLabel}>{d.label}</span>
                    <span className={styles.detailValue}>{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Descrição */}
        <section className={styles.descriptionCard}>
          {work.description.map((p, i) => (
            <p key={i} className={styles.paragraph}>{p}</p>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
