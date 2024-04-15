import './Skills_Styles.css';
import SkillCard from './Skill_Card';

function Skills(){
  return (
      <div className='Skills-container'>

        <div className="Skills-header">
          <h2 className="Skills-title">Habilidades</h2>
          <div className="Skills-line">
          </div>
        </div>

        <div className="Skills-container-card">

        <SkillCard 
          Tecnologia={'Java'} 
          ImgSrc={'src/assets/images/java.png'} 
          Level={'Intermediário'}
        />

        <SkillCard 
          Tecnologia={'HTML'} 
          ImgSrc={'src/assets/images/html.png'} 
          Level={'Avançado'}
        />

        <SkillCard 
          Tecnologia={'CSS'} 
          ImgSrc={'src/assets/images/css.png'} 
          Level={'Avançado'}
        />

        <SkillCard 
          Tecnologia={'React'} 
          ImgSrc={'src/assets/images/react.png'} 
          Level={'Intermediário'}
        />

        <SkillCard 
          Tecnologia={'JavaScript'} 
          ImgSrc={'src/assets/images/js.png'} 
          Level={'Básico'}
        />

        <SkillCard 
          Tecnologia={'MySQL'} 
          ImgSrc={'src/assets/images/mysql.png'} 
          Level={'Básico'}
        />

        </div>

      </div>
  )
}

export default Skills