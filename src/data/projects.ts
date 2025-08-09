// src/data/projects.ts
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img13 from '../assets/img13.jpg'
import img14 from '../assets/img14.png'
import img15 from '../assets/img15.jpg'
import img16 from '../assets/img16.jpg'
import img17 from '../assets/img17.jpg'
import img18 from '../assets/img18.jpg'
import img19 from '../assets/img19.jpg'
import img20 from '../assets/img20.jpg'
import img21 from '../assets/img21.jpg'
import img22 from '../assets/img22.jpg'
import img23 from '../assets/img23.jpg'
import img24 from '../assets/img24.jpg'
import img25 from '../assets/img25.jpg'
import img26 from '../assets/img26.jpg'
import img27 from '../assets/img27.png'
import img28 from '../assets/img28.jpg'
import img29 from '../assets/img29.png'
import img30 from '../assets/img30.jpg'
import img31 from '../assets/img31.jpg'
import img32 from '../assets/img32.png'
import img33 from '../assets/img33.jpg'
import img34 from '../assets/img34.jpg'

export interface Project {
  id: string
  src: string
  title: string
}

export const allProjects: Project[] = [
  { id: 'vizeu-leiloeiro', src: img1,  title: 'VIZEU LEILOEIRO CONSTRUÇÃO DE NOVA UNIDADE' },
  { id: 'sudameris',       src: img2,  title: 'SUDAMERIS ACESSIBILIDADE ROLL OUT INTEGRAÇÃO BANCO REAL' },
  { id: 'tim-telecom',     src: img3,  title: 'TIM TELEFONIA CELULAR LOJAS' },
  { id: 'ricardo-eletro',  src: img4,  title: 'LOJAS RICARDO ELETRO - 90 LOJAS MG, DF, GO e ES' },
  { id: 'estacaomexico',   src: img34, title: 'ESTAÇÕES BP MÉXICO – México' },
  { id: 'air-bp',          src: img6,  title: 'AIR BP BRASIL CUIABÁ - MT E RIO DE JANEIRO - RJ' },
  { id: 'shopping-praca-moca', src: img7, title: 'SHOPPING PRAÇA DA MOÇA - DIADEMA, SÃO PAULO' },
  { id: 'sao-jose-campos', src: img8,  title: 'PREFEITURA DE SÃO JOSÉ DOS CAMPOS - CANALIZAÇÃO DE CÓRREGO' },
  { id: 'citibank',        src: img9,  title: 'CITIBANK - MUDANÇA DA IMAGEM CORPORATIVA TODO O TERRITÓRIO NACIONAL' },
  { id: 'drogasilraia',    src: img10, title: 'RAIA DROGASIL – Reformas de lojas nos estados de SP, RJ e MS' },
  { id: 'bancohsbc',       src: img11, title: 'BANCO HSBC – Adequações de acessibilidade 2009' },
  { id: '3mdobrasil',      src: img12, title: '3M DO BRASIL – SANTANDER TROCA DE COMUNICAÇÃO VISUAL' },
  { id: 'arenamultiuso',   src: img13, title: 'ARENA MULTIUSO, ESTÁDIO E PARQUE URBANO OSASCO, SÃO PAULO' },
  { id: 'bancoazteca',     src: img14, title: 'BANCO AZTECA – EDIFÍCIO SEDE' },
  { id: 'aztecabanco',     src: img15, title: 'BANCO AZTECA – RECIFE' },
  { id: 'santandertroca',  src: img16, title: 'SANTANDER – TROCA DA MARCA 2008' },
  { id: 'vizeu1',          src: img17, title: 'VIZEU LEILOEIRO – UNIDADE DIADEMA' },
  { id: 'citibank1',       src: img18, title: 'CITIBANK EXPANSÃO' },
  { id: 'santanderrio',    src: img19, title: 'SANTANDER – RIO DE JANEIRO' },
  { id: 'santander2',      src: img20, title: 'SANTANDER – PROJETO ACESSIBILIDADE 2007' },
  { id: 'santander3',      src: img21, title: 'SANTANDER – TROCA DA MARCA BANESPA 2007' },
  { id: 'santander4',      src: img22, title: 'SANTANDER CIDADE LIMPA' },
  { id: 'embratel',        src: img23, title: 'NORTEL TELECOM / EMBRATEL – ESTADO DE SÃO PAULO' },
  { id: 'tam',             src: img24, title: 'TAM – TROCA DE COMUNICAÇÃO VISUAL EUROPA, AMÉRICA DO NORTE E AMÉRICA DO SUL' },
  { id: 'timcentrais',     src: img25, title: 'TIM – CENTRAIS OPERACIONAIS TERRITÓRIO NACIONAL' },
  { id: 'cummis',          src: img26, title: 'CUMMINS DO BRASIL PLANTA GUARULHOS – SP' },
  { id: 'bimbo',           src: img27, title: 'GRUPO BIMBO – Panificação e fábricas no Brasil' },
  { id: 'daerp',           src: img28, title: 'DAERP – Ribeirão Preto Saneamento Básico' },
  { id: 'sanasa',          src: img29, title: 'SANASA – Campinas SP Drenagem de Águas Pluviais' },
  { id: 'viracopos',       src: img30, title: 'AEROPORTOS BRASIL VIRACOPOS – Rede de Esgoto' },
  { id: 'terrarica',       src: img31, title: 'LOTEAMENTO JARDIM TERRA RICA – Redes de ESGOTO e ÁGUA' },
  { id: 'saaeportofeliz',  src: img32, title: 'SAAE PORTO FELIZ – Esgoto Sanitário' },
  { id: 'prefeitura',      src: img33, title: 'PREFEITURA SJC – Recuperação de galeria e pavimentação' },
  { id: 'banco-real',      src: img5,  title: 'BANCO REAL – “Guarda-Chuva” Gerenciamento de Intervenções' },
]
export default allProjects
