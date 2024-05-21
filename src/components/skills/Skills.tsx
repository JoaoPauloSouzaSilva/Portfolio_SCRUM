import { useState } from 'react';
import './Skills_Styles.css';
import SkillCard from './Skill_Card';
import Title from '../Title_Screens/Title';
import skillsData from './skillsData';

function Skills() {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleFilter = (option: number) => {
    setSelectedOption(option);
  };

  const filteredSkills = skillsData.filter(skill => {
    if (selectedOption === 0) return true;
    if (selectedOption === 1) return skill.type === 'advanced';
    if (selectedOption === 2) return skill.type === 'intermediary';
    if (selectedOption === 3) return skill.type === 'basic';
    return true;
  });

  return (
    <div className='Skills-container'>
      <Title Title={'Habilidades'} />

      <div className="Skills-navigation">
        <div className={`Skills-navigation-options ${selectedOption === 0 ? 'selected' : ''}`} onClick={() => handleFilter(0)}>Todos</div>
        <div className={`Skills-navigation-options ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleFilter(1)}>Avançado</div>
        <div className={`Skills-navigation-options ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => handleFilter(2)}>Intermediário</div>
        <div className={`Skills-navigation-options ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => handleFilter(3)}>Básico</div>
      </div>

      <div className="Skills-container-card">
        {filteredSkills.map((skill, index) => (
          <SkillCard
            key={index}
            Tecnologia={skill.Tecnologia}
            ImgSrc={skill.ImgSrc}
            Level={skill.Level}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
