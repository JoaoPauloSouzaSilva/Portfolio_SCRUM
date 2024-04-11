import React, { useState } from 'react';
import './About_Styles.css';
import * as Unicons from '@iconscout/react-unicons';
import ModalActivities from './Modal_Activities';

function About(){ 
  const [isOpen_Activite01, setIsOpen_Activite01] = useState(false);
  const [isOpen_Activite02, setIsOpen_Activite02] = useState(false)
  const [isOpen_Activite03, setIsOpen_Activite03] = useState(false)
  const [isOpen_Activite04, setIsOpen_Activite04] = useState(false)

  const handleOpen_Activite01Modal = () => {
    setIsOpen_Activite01(true);
  };

  const handleOpen_Activite02Modal = () => {
    setIsOpen_Activite02(true);
  };

  const handleOpen_Activite03Modal = () => {
    setIsOpen_Activite03(true);
  };

  const handleOpen_Activite04Modal = () => {
    setIsOpen_Activite04(true);
  };

  const handleCloseModal = () => {
    setIsOpen_Activite01(false);
    setIsOpen_Activite02(false);
    setIsOpen_Activite03(false);
    setIsOpen_Activite04(false);
  };
  return (
  
      <div className='About-container'>

        <div className="About-header">
          <h2 className="title">Sobre Mim</h2>
        
          <div className="About-line">
          </div>

          <div className="About-container-text">
            <p className="About-text">
            Sou Diretor de Criação e UI/UX Designer de Sydney, Austrália, trabalhando com desenvolvimento web e mídia impressa. Gosto de transformar problemas complexos em designs simples, bonitos e intuitivos.
            </p>

            <p className="About-text">
            Meu trabalho é construir o seu site de forma que seja funcional e fácil de usar, mas ao mesmo tempo atraente. Além disso, adiciono um toque pessoal ao seu produto e garanto que ele seja atraente e fácil de usar. Meu objetivo é transmitir sua mensagem e identidade da maneira mais criativa. Criei web design para muitas empresas de marcas famosas.
            </p>
          </div>
        </div>

        <div className="About-doing">
          <h3 className="About-doing-header">O Que Eu Estou Fazendo</h3>
          <div className="About-doing-container-activities">

            <div className="About-doing-activities" onClick={handleOpen_Activite01Modal}>
              <div className="activities-icon"><Unicons.UilPen size="40" /></div>
              <div className="activities-content">
                <h4 className="activities-title">Designer De Web</h4>
                <p className="activities-text">O design mais moderno e de alta qualidade feito a nível profissional.</p>
              </div>
            </div>

            <ModalActivities  
              isOpen={isOpen_Activite01}   
              onClose={handleCloseModal} 
              title="Título do Modal"   
              text="Texto do Modal"   
              icon="UilPen"
            />

            <div className="About-doing-activities" onClick={handleOpen_Activite02Modal}>
              <div className="activities-icon"><Unicons.UilBrowser size="40"/></div>
              <div className="activities-content">
                <h4 className="activities-title">Desenvolvimento Web</h4>
                <p className="activities-text">Desenvolvimento de sites de alta qualidade a nível profissional.</p>
              </div>
            </div>

            <ModalActivities  
              isOpen={isOpen_Activite02}   
              onClose={handleCloseModal} 
              title="Título do Modal"   
              text="Texto do Modal"   
              icon="UilBrowser"
            />

          </div>
          <div className="About-doing-container-activities">

            <div className="About-doing-activities" onClick={handleOpen_Activite03Modal}>
              <div className="activities-icon"><Unicons.UilMobileAndroid size="40" /></div>
              <div className="activities-content">
                <h4 className="activities-title">Aplicativos Móveis</h4>
                <p className="activities-text">Desenvolvimento profissional de aplicativos para iOS e Android.</p>
              </div>
            </div>

            <ModalActivities  
              isOpen={isOpen_Activite03}   
              onClose={handleCloseModal} 
              title="Título do Modal"   
              text="Texto do Modal"   
              icon="UilMobileAndroid"
            />

            <div className="About-doing-activities" onClick={handleOpen_Activite04Modal}>
              <div className="activities-icon"><Unicons.UilCamera size="40" /></div>
              <div className="activities-content">
                <h4 className="activities-title">Fotografia</h4>
                <p className="activities-text">Faço fotos de alta qualidade de qualquer categoria a nível profissional.</p>
              </div>
            </div>

            <ModalActivities  
              isOpen={isOpen_Activite04}   
              onClose={handleCloseModal} 
              title="Título do Modal"   
              text="Texto do Modal"   
              icon="UilCamera"
            />

            </div>
        </div>

        <div className="About-testimonials">
          <h3 className="About-testimonials-header">Testemunho</h3>
          <div className="About-testimonials-container">

          </div>

        </div>


      </div>
  )
}

export default About