import './Skill_Card_Styles.css';
import * as Unicons from '@iconscout/react-unicons';

function SkillCard(){
  return (
      <div className='SkillCard-container'>
        <div className="Skills-card">
          <h3 className="Skills-card-title">JavaScript</h3>
          <div className="Skills-card-icon"><Unicons.UilJavaScript size="100"/></div>
          <h4 className="Skills-card-level">Básico</h4>
        </div>
      </div>
  )
}

export default SkillCard