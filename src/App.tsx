import React, { useState, useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/naviagtionBar/NavigationBar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Qualities from "./components/qualities/Qualities";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";

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
          <div className="info-more"></div>
          <div className="sidebar-info-more"></div>
        </div>
      </div>

      <div className="main-content">
        <NavigationBar Navigation={routes} />
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
