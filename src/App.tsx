import React, { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/naviagtionBar/NavigationBar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Qualities from "./components/qualities/Qualities";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilWhatsappAlt } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";

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
          <div className="figure">
            <img src="src/assets/images/avatar-emoji.png" alt="Avatar Emoji" />
          </div>
          <div className="info-content">
            <h1 className="name"> Ítalo César Silva Oliveira</h1>
            <p className="description"> Full Stack Developer </p>
          </div>
        </div>
        <div className="sidebar-info-more">
          <div className="separator"></div>
          <ul className="contact-list">
            <li className="contact-item">
              <div className="icon-box">
                <UilEnvelope />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:italo.cs.oliveira@gmail.com"
                  className="contact-link"
                >
                  italo.cs.oliveira@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <UilEnvelope/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+5531993447557" className="contact-link">
                  +55 (31) 99344-7557
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <UilEnvelope/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <p className="datetime">08 de Fevereiro, 2003</p>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <UilEnvelope />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <p className="address">Salinas, Minas Gerais, BR</p>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <UilWhatsappAlt />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <UilLinkedin />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <UilInstagram />
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

        {VisibilityScreenQualities && <Qualities />}
      </div>
    </div>
  );
}

export default App;
