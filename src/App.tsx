import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from './components/naviagtionBar/NavigationBar';


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
      <div className='sidebar-info'>
      </div>
      <div className='main-content'>
        <div className="about"></div>
        <div className="resume"></div>
        <div className="portfolio"></div>
        <div className="skills"></div>
        <div className="qualities"></div>
      </div> */}
      <NavigationBar Navigation={routes}/>
    </div>
  )
}


export default App
