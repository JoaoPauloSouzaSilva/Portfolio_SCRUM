import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/naviagtionBar/NavigationBar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Qualities from './components/qualities/Qualities';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';


function App() {

  const [KeyScreen, setKeyScreen] = useState(0);
  const [VisibilityScreenSobre, setVisibilityScreenSobre] = useState(false);
  const [VisibilityScreenResumo, setVisibilityScreenResumo] = useState(false);
  const [VisibilityScreenPortfolio, setVisibilityScreenPortfolio] = useState(false);
  const [VisibilityScreenSkills, setVisibilityScreenSkills] = useState(false);
  const [VisibilityScreenQualities, setVisibilityScreenQualities] = useState(false);

  useEffect(() => {
    setVisibilityScreenSobre(KeyScreen === 0);
    setVisibilityScreenResumo(KeyScreen === 1);
    setVisibilityScreenPortfolio(KeyScreen === 2);
    setVisibilityScreenSkills(KeyScreen === 3);
    setVisibilityScreenQualities(KeyScreen === 4);

  }, [KeyScreen]);

  const routes = (key: React.SetStateAction<number>) => {
    setKeyScreen(key)
  }

  return (
    <div className='container'>
      
      
      
      <NavigationBar Navigation={routes}/>

      <div className='main-content'>

        {VisibilityScreenSobre &&
          <About/>
        }

        {VisibilityScreenResumo &&
          <Resume/>
        }

        {VisibilityScreenPortfolio &&
          <Portfolio/>
        }

        {VisibilityScreenSkills &&
          <Skills/>
        }

        {VisibilityScreenQualities &&
          <Qualities/>
        }

      </div>
    </div>
  )
}

export default App
