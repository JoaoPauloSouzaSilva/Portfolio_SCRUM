import { useState } from 'react';
import './About_Styles.css';
import ModalActivities from './Modal_Activities';
import Carousel from './About_Carousel_Testimonials';
import Title from '../Title_Screens/Title';
import Activities from './About_Doing_Activities';


function About(){ 
  const [isOpen_Activite01, setIsOpen_Activite01] = useState(false);
  const [isOpen_Activite02, setIsOpen_Activite02] = useState(false);
  const [isOpen_Activite03, setIsOpen_Activite03] = useState(false);
  const [isOpen_Activite04, setIsOpen_Activite04] = useState(false);

  return (
  
      <div className='About-container'>

        <div className="About-header">
          <Title Title={'Sobre Mim'}/>

          <div className="About-container-text">
            <p className="About-text" style={{ marginBottom: '2%' }}>
            Sou Diretor de Criação e UI/UX Designer de Sydney, Austrália, trabalhando com desenvolvimento web e mídia impressa. Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos.
            </p>

            <p className="About-text" style={{ marginBottom: '3%' }}>
            Meu trabalho é construir o seu site de forma que seja funcional e fácil de usar, mas ao mesmo tempo atraente. Além disso, adiciono um toque pessoal ao seu produto e garanto que ele seja atraente e fácil de usar. Meu objetivo é transmitir sua mensagem e identidade da maneira mais criativa. Criei web design para muitas empresas de marcas famosas.
            </p>
          </div>
        </div>

        <div className="About-doing">
          <h3 className="About-doing-header">O Que Eu Estou Fazendo</h3>
          <div className="About-doing-container-activities">

            <Activities 
              onClick={() => setIsOpen_Activite01(true)}
              Title={'Designer De Web'} 
              Text={'O design mais moderno e de alta qualidade feito a nível profissional.'} 
              NameIcon={'UilPen'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite01}   
                onClose={() => setIsOpen_Activite01(false)} 
                title="Designer De Web"   
                text="O design mais moderno e de alta qualidade feito a nível profissional."   
                icon="UilPen"
              />

            <Activities 
              onClick={() => setIsOpen_Activite02(true)}
              Title={'Desenvolvimento Web'} 
              Text={'O design mais moderno e de alta qualidade feito a nível profissional.'} 
              NameIcon={'UilBrowser'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite02}   
                onClose={() => setIsOpen_Activite02(false)} 
                title="Desenvolvimento Web"   
                text="O design mais moderno e de alta qualidade feito a nível profissional."   
                icon="UilBrowser"
              />

            <Activities 
              onClick={() => setIsOpen_Activite03(true)}
              Title={'Fotografia'} 
              Text={'Faço fotos de alta qualidade de qualquer categoria a nível profissional.'} 
              NameIcon={'UilCamera'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite03}   
                onClose={() => setIsOpen_Activite03(false)} 
                title="Fotografia"   
                text=">Faço fotos de alta qualidade de qualquer categoria a nível profissional."   
                icon="UilCamera"
              />

            <Activities 
              onClick={() => setIsOpen_Activite04(true)}
              Title={'Aplicativos Móveis'} 
              Text={'Desenvolvimento profissional de aplicativos para iOS e Android.'} 
              NameIcon={'UilMobileAndroid'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite04}   
                onClose={() => setIsOpen_Activite04(false)} 
                title="Aplicativos Móveis"   
                text="Desenvolvimento profissional de aplicativos para iOS e Android."   
                icon="UilMobileAndroid"
              />

          </div>
        </div>

        <div className="About-testimonials">
          <h3 className="About-testimonials-header">Testemunho</h3>
          <div className="About-testimonials-container">
          <Carousel />
          </div>

        </div>


      </div>
  )
}

export default About