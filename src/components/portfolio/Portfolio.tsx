import { useState } from 'react';
import './Portfolio_Styles.css';
import Title from '../Title_Screens/Title';
import ProjectCard from './Project_Card';
import ProjectData from './ProjectData';

function Portfolio(){
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleFilter = (option: number) => {
    setSelectedOption(option);
  };

  const filteredProject = ProjectData.filter(project => {
    if (selectedOption === 0) return true;
    if (selectedOption === 1) return project.Type === 'Desenvolvimento Web';
    if (selectedOption === 2) return project.Type === 'Design Web';
    if (selectedOption === 3) return project.Type === 'Aplicativo';
    return true;
  });

  return ( 
    <div className='Portfolio-container'>
      <Title Title={'Portfólio'}/>

      <div className="Portfolio-navigation"> 
          <div className={`Portfolio-navigation-options ${selectedOption === 0 ? 'selected' : ''}`} onClick={() =>  handleFilter(0)}>Todos</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 1 ? 'selected' : ''}`} onClick={() =>  handleFilter(1)}>Desenvolvimento Web</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 2 ? 'selected' : ''}`} onClick={() =>  handleFilter(2)}>Design Web</div>
          <div className={`Portfolio-navigation-options ${selectedOption === 3 ? 'selected' : ''}`} onClick={() =>  handleFilter(3)}>Aplicativo</div>
        </div>

      <div className="Portfolio-container-card">
        {filteredProject.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.Title} 
              type={project.Type} 
              ImgSrc={project.ImgSrc}
              url={project.Url}
            />
          ))}
      </div>

    </div>
  )
}

export default Portfolio