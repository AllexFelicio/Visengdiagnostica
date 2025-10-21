import styles from './Problemas.module.scss'
import Slider, { type CustomArrowProps } from 'react-slick' 
import img1 from '../../assets/carrosel1 (1).jpeg'
import img2 from '../../assets/carrosel2.jpeg'
import img3 from '../../assets/carrosel3.jpeg'
import img4 from '../../assets/carrosel4.jpeg'
import img5 from '../../assets/carrosel5.jpeg'
import img6 from '../../assets/carrosel6.jpeg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// 👇 agora as funções recebem o tipo certo
function NextArrow(props: CustomArrowProps) {
  const { onClick } = props
  return <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>›</div>
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props
  return <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>‹</div>
}

export function Problemas() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  }

  return (
    <section className={styles.problemas}>

      <div className={styles.carousel}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <img src={img1} alt="Deslocamento de revestimento" />
            <p>Umidade ascendente</p>
          </div>
          <div className={styles.slide}>
            <img src={img2} alt="Umidade ascendente" />
            <p>Corrosão das armaduras</p>
          </div>
          <div className={styles.slide}>
            <img src={img3} alt="Trinca em fachada" />
            <p>Trinca na parede</p>
          </div>
          <div className={styles.slide}>
            <img src={img4} alt="Mancha de bolor" />
            <p>Mancha de umidade e bolor</p>
          </div>
          <div className={styles.slide}>
            <img src={img5} alt="Infiltração em laje" />
            <p>Desplacamento de revestimento</p>
          </div>
          <div className={styles.slide}>
            <img src={img6} alt="Fissura estrutural" />
            <p>Desplacamento cerâmico</p>
          </div>
        </Slider>
      </div>
      
        <h2>
        Você identifica algum desses <span>problemas na sua edificação?</span>
      </h2>
      {/* linha divisória */}
      <div className={styles.divider}></div>
    </section>
  )
}

export default Problemas
