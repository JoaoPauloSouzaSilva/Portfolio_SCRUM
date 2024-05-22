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
  { title: 'Jamerson Jardel Neris', text: 'joão Paulo foi um foda aluno, com notas superiores oa 80% ...', sub_title: "Professor do IFNMG-Salinas", modalText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, placeat nemo. Tempora aliquam, eum animi velit vero asperiores, pariatur eius quam accusamus nostrum ducimus maiores illum vel placeat aspernatur? Ducimus?" },
  { title: 'Jamerson Jardel Silva', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas", modalText: "Texto do Modal" },
  { title: 'Jamerson Jardel Souza', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas", modalText: "Texto do Modal"},
  { title: 'Jamerson Jardel Abreu', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas", modalText: "Texto do Modal"},
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
