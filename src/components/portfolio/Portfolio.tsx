import { useState } from 'react';
import './Portfolio_Styles.css';
import Title from '../Title_Screens/Title';
import ProjectCard from './Project_Card';


function Portfolio(){

  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [aplication_visibility, setaplication_visibility] = useState(true);
  const [webDesign_visibility, setwebDesign_visibility] = useState(true);
  const [webDevelop_visibility, setwebDevelop_visibility] = useState(true);

  const handleAll = () => {
    setaplication_visibility(true);
    setwebDesign_visibility(true);
    setwebDevelop_visibility(true);
  };

  const handleAplication = () => {
    setaplication_visibility(true);
    setwebDesign_visibility(false);
    setwebDevelop_visibility(false);
  };

  const handleWebDesign = () => {
    setaplication_visibility(false);
    setwebDesign_visibility(true);
    setwebDevelop_visibility(false);
  };

  const handleWebDevelop = () => {
    setaplication_visibility(false);
    setwebDesign_visibility(false);
    setwebDevelop_visibility(true);
  };

  return ( 
    <div className='Portfolio-container'>
      <Title Title={'Portfólio'}/>

      <div className="Portfolio-navigation"> 
          <div className={`Portfolio-navigation-options ${selectedOption === 0 ? 'selected' : ''}`} onClick={() => {handleAll(); setSelectedOption(0);}}>Todos</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => {handleWebDevelop(); setSelectedOption(1);}}>Desenvolvimento Web</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => {handleWebDesign(); setSelectedOption(2);}}>Design Web</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => {handleAplication(); setSelectedOption(3);}}>Aplicativo</div>
        </div>

      <div className="Portfolio-container-card">
        {webDevelop_visibility &&
          <ProjectCard
            title={'Orizon'} 
            type={'Desenvolvimento Web'} 
            ImgSrc={'src/assets/images/projects/project-1.png'} 
          />
        }

        {aplication_visibility &&
          <ProjectCard 
            title={'Brawlhalla'} 
            type={'Aplicativo'} 
            ImgSrc={'src/assets/images/projects/project-2.png'} 
          />
        }

        {webDesign_visibility &&       
          <ProjectCard 
            title={'MetaSpark'} 
            type={'Design Web'} 
            ImgSrc={'src/assets/images/projects/project-3.png'} 
          />
        }

      </div>
    </div>
  )
}

export default Portfolio