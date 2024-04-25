import React from 'react';
import './Project_Card_Styles.css';

interface ProjectCardProps {
  // isOpen: boolean;
  // onClose: () => void;
  title: string;
  type: string;
  ImgSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ ImgSrc, title, type}) => {
  // if (!isOpen) {
  //   return null;
  // }

  return (
    <div className="Project-Card-Container">
      <img className="Project-Card-Img" src={ImgSrc} alt={title} />
      <div className="Project-Card-Container-Text">
        <h3 className="Project-Card-Title">{title}</h3>
        <p className="Project-Card-Tipe">{type}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
