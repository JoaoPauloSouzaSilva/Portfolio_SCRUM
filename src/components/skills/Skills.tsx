import { useState } from 'react';
import './Skills_Styles.css';
import SkillCard from './Skill_Card';

function Skills(){
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [basic_visibility, setbasic_visibility] = useState(true);
  const [intermediary_visibility, setintermediary_visibility] = useState(true);
  const [advanced_visibility, setadvanced_visibility] = useState(true);

  const handleAll = () => {
    setbasic_visibility(true);
    setintermediary_visibility(true);
    setadvanced_visibility(true);
  };

  const handleBasic = () => {
    setbasic_visibility(true);
    setintermediary_visibility(false);
    setadvanced_visibility(false);
  };

  const handleIntermediary = () => {
    setbasic_visibility(false);
    setintermediary_visibility(true);
    setadvanced_visibility(false);
  };

  const handleAdvanced = () => {
    setbasic_visibility(false);
    setintermediary_visibility(false);
    setadvanced_visibility(true);
  };

  return (
      <div className='Skills-container'>

        <div className="Skills-header">
          <h2 className="Skills-title">Habilidades</h2>
          <div className="Skills-line">
          </div>
        </div>

        <div className="Skills-navigation"> 
          <div className={`Skills-navigation-options ${selectedOption === 0 ? 'selected' : ''}`} onClick={() => {handleAll(); setSelectedOption(0);}}>Todos</div>
          <div className={`Skills-navigation-options ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => {handleAdvanced(); setSelectedOption(1);}}>Avançado</div>
          <div className={`Skills-navigation-options ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => {handleIntermediary(); setSelectedOption(2);}}>Intermediário</div>
          <div className={`Skills-navigation-options ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => {handleBasic(); setSelectedOption(3);}}>Básico</div>
        </div>


        <div className="Skills-container-card">
          {advanced_visibility &&
            <SkillCard 
              Tecnologia={'HTML'} 
              ImgSrc={'src/assets/images/html.png'} 
              Level={'Avançado'}
            />
          }

        {advanced_visibility &&
          <SkillCard 
            Tecnologia={'CSS'} 
            ImgSrc={'src/assets/images/css.png'} 
            Level={'Avançado'}
          />
        }
          
          {intermediary_visibility &&
            <SkillCard 
              Tecnologia={'Java'} 
              ImgSrc={'src/assets/images/java.png'} 
              Level={'Intermediário'}
            />
            
          }
          {intermediary_visibility &&
            <SkillCard 
              Tecnologia={'React'} 
              ImgSrc={'src/assets/images/react.png'} 
              Level={'Intermediário'}
            />
          }

          {basic_visibility &&          
            <SkillCard 
              Tecnologia={'JavaScript'} 
              ImgSrc={'src/assets/images/js.png'} 
              Level={'Básico'}
            />
          }

          {basic_visibility &&
            <SkillCard 
              Tecnologia={'MySQL'} 
              ImgSrc={'src/assets/images/mysql.png'} 
              Level={'Básico'}
            />
          }


        </div>

      </div>
  )
}

export default Skills