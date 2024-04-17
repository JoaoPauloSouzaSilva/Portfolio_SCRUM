import React, { useState } from 'react';
import './NavigationBar_Styles.css';

interface NavigationBarProps{
  Navigation: (value: React.SetStateAction<number>) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ Navigation }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  return (
  
      <div className='NavBar-container'>
          <div className="options-navigation">
            <ul className='listOptionsNavBar'>
              <li className={`optionsNavBar ${selectedOption === 0 ? 'selected' : ''}`} onClick={() => { Navigation(0); setSelectedOption(0); }}>Sobre</li>
              <li className={`optionsNavBar ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => { Navigation(1); setSelectedOption(1); }}>Resumo</li>
              <li className={`optionsNavBar ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => { Navigation(2); setSelectedOption(2); }}>Portfólio</li>
              <li className={`optionsNavBar ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => { Navigation(3); setSelectedOption(3); }}>Habilidades</li>
              <li className={`optionsNavBar ${selectedOption === 4 ? 'selected' : ''}`} onClick={() => { Navigation(4); setSelectedOption(4); }}>Currículo</li>
            </ul>
          </div>
      </div>
  )
}

export default NavigationBar