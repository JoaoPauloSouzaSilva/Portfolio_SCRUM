import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About_Carousel_Testimonials_Styles.css';
import ModalTestimonials from './About_Testimonials_Modal';

interface Card {
  title: string;
  sub_title: string;
  text: string;
  modalText: string; 
}

const cards: Card[] = [
  { title: 'Leonardo Humberto G. S.', text: 'Aluno excepcional, que em sala de aula e em diversos projetos ...', sub_title: "Professor do IFNMG-Salinas", modalText: "Aluno excepcional, que em sala de aula e em diversos projetos, demonstrou um potencial notável. Com um futuro promissor à sua frente, ele possui todas as qualidades necessárias para se destacar como um desenvolvedor de grande renome." },
  { title: 'Emilha de Souza', text: 'João é um colaborador excepcional que vem se destacando ...', sub_title: "Presidente da SIFSoft Jr", modalText: "João é um colaborador excepcional que vem se destacando por sua dedicação e profissionalismo, auxiliando nossa empresa júnior a alcançar novos patamares de crescimento a cada dia." },
  { title: 'Arthur Faria Porto', text: 'Ele é um excelente aluno, dedicado e, acima de tudo, proativo ...', sub_title: "Coordenador do BSI", modalText: "Ele é um excelente aluno, dedicado e, acima de tudo, proativo. Apesar das dificuldades, ele sempre busca dar o melhor de si para superá-las."},
 
];

const Carousel: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const handleOpenModal = (card: Card) => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card"  onClick={() => handleOpenModal(card)}>
            <div className="card-title-container">
              <h3 className='card-title'>{card.title}</h3>
              <h3 className='card-subTitle'>{card.sub_title}</h3>
            </div>
            <p className='card-text'>{card.text}</p>
          </div>
        ))}
      </Slider>
      <ModalTestimonials 
        isOpen={isOpen} 
        onClose={handleCloseModal} 
        title={selectedCard?.title || ''} 
        text={selectedCard?.modalText || ''}
        sub_title={selectedCard?.sub_title || ''}
        />
    </div>
  );
}

export default Carousel;
