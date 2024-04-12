import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './About_Carousel_Testimonials_Styles.css';

interface Card {
  title: string;
  sub_title: string;
  text: string;
}

const cards: Card[] = [
  { title: 'Jamerson Jardel Neris', text: 'joão Paulo foi um foda aluno, com notas superiores oa 80% ...', sub_title: "Professor do IFNMG-Salinas" },
  { title: 'Jamerson Jardel Silva', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas" },
  { title: 'Jamerson Jardel Souza', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas"},
  { title: 'Jamerson Jardel Abreu', text: 'Lorem ipsum', sub_title: "Professor do IFNMG-Salinas"},
];

const Carousel: React.FC = () => {
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
          slidesToShow: 2,
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

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div className="card-figure">
                <img className='card-figure-img' src="src/assets/images/avatar-emoji.png" alt="Avatar Emoji" />
              </div>
              <div className="card-title-container">
                <h3 className='card-title'>{card.title}</h3>
                <h3 className='card-subTitle'>{card.sub_title}</h3>
              </div>
            </div>
            <p className='card-text'>{card.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
