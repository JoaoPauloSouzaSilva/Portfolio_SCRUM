import React, { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/naviagtionBar/NavigationBar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Curriculum from "./components/curriculum/Curriculum";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilWhatsappAlt } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilPhone } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { UilLocationPinAlt } from '@iconscout/react-unicons';

function App() {
  const [KeyScreen, setKeyScreen] = useState(0);
  const [VisibilityScreenSobre, setVisibilityScreenSobre] = useState(false);
  const [VisibilityScreenResumo, setVisibilityScreenResumo] = useState(false);
  const [VisibilityScreenPortfolio, setVisibilityScreenPortfolio] =
    useState(false);
  const [VisibilityScreenSkills, setVisibilityScreenSkills] = useState(false);
  const [VisibilityScreenQualities, setVisibilityScreenQualities] =
    useState(false);

  useEffect(() => {
    setVisibilityScreenSobre(KeyScreen === 0);
    setVisibilityScreenResumo(KeyScreen === 1);
    setVisibilityScreenPortfolio(KeyScreen === 2);
    setVisibilityScreenSkills(KeyScreen === 3);
    setVisibilityScreenQualities(KeyScreen === 4);
  }, [KeyScreen]);

  const routes = (key: React.SetStateAction<number>) => {
    setKeyScreen(key);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-info">
          {/* <div className="figure">
            <img src="src/assets/images/avatar-emoji.png" alt="Avatar Emoji" />
          </div> */}
          <div className="figure">
            <img src="src/assets/images/testimg.jpg" alt="Avatar Emoji" />
          </div>
          <div className="info-content">
            <h1 className="name">João Paulo S. S.</h1>
            <p className="description"> Desenvolvedor Front-End</p>
          </div>
        </div>
        <div className="sidebar-info-more">
          <div className="separator"></div>
        
            <ul className="contact-list">
              <li className="contact-item">
                <div className="icon-box">
                  <UilEnvelope size="50%"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a
                    href="mailto:dev.jpaulo@gmail.com"
                    className="contact-link"
                  >
                    dev.jpaulo@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <UilPhone size="50%"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">Telefone</p>
                  <a href="tel:+5538999225774" className="contact-link">
                    +55 (38) 9 9922-5774
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <UilCalendarAlt size="50%"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">aniversário</p>
                  <p className="datetime">23 de Dezembro, 2002</p>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <UilLocationPinAlt size="50%"/>
                </div>
                <div className="contact-info">
                  <p className="contact-title">localização</p>
                  <p className="address">Salinas, Minas Gerais, BR</p>
                </div>
              </li>
            </ul>
        

        
            <div className="separator separator2" style={{marginBottom: '7%'}}></div>
            
            <ul className="social-list">
              <li className="social-item">
                <a href="#" className="social-link">
                <div className="social-icon">
                  <UilWhatsappAlt size="50%"/>
                </div>
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link">
                  <div className="social-icon">
                    <UilLinkedin size="50%"/>
                  </div>
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link">
                  <div className="social-icon">
                    <UilInstagram  size="50%"/> 
                  </div>
                </a>
              </li>
              
            </ul>
      

        </div>
      </div>

      <div className="main-content">
        <div className="navbar-container">
          <NavigationBar Navigation={routes} />
        </div>

        {VisibilityScreenSobre && <About />}

        {VisibilityScreenResumo && <Resume />}

        {VisibilityScreenPortfolio && <Portfolio />}

        {VisibilityScreenSkills && <Skills />}

        {VisibilityScreenQualities && <Curriculum />}
      </div>
    </div>
  );
}

export default App;