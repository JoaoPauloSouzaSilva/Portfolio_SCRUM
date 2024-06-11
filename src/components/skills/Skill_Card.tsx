import React from 'react';
import './Skill_Card_Styles.css';

interface SkillCardProps{
  Tecnologia: string;
  ImgSrc: string;
  Level: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Tecnologia, ImgSrc, Level}) => {

  return (
      <div className='Skill-Card-container'>
        <div className="Skills-card">
          <h3 className="Skills-card-title">{Tecnologia}</h3>
          <img className="Skills-card-icon" src={ImgSrc} alt={Tecnologia} />
          <h4 className="Skills-card-level">{Level}</h4>
        </div>
      </div>
  )
}

export default SkillCard