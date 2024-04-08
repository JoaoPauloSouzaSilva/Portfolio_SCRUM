import React from 'react';
import './NavigationBar_Styles.css';

interface NavigationBarProps{
  Navigation: (value: React.SetStateAction<number>) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ Navigation }) => {
  return (
  
      <div className='NavBar-container'>
        {/* <div className="container-options-navigation"> */}

          <div className="options-navigation">
            <ul className='listOptionsNavBar'>
              <li className='optionsNavBar' onClick={() => Navigation(0)}>Sobre</li>
              <li className='optionsNavBar' onClick={() => Navigation(1)}>Resumo</li>
              <li className='optionsNavBar' onClick={() => Navigation(2)}>Portfólio</li>
              <li className='optionsNavBar' onClick={() => Navigation(3)}>Habilidades</li>
              <li className='optionsNavBar' onClick={() => Navigation(4)}>Qualidades</li>
            </ul>
          </div>
          
        {/* </div> */}
      </div>
  )
}

export default NavigationBar