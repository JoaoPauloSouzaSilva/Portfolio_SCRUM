import './Portfolio_Styles.css';
import Title from '../Title_Screens/Title';

function Portfolio(){
  return ( 
    <div className='Portfolio-container'>
      <Title Title={'Portfólio'}/>

      <div className="Portfolio-container-card">

        <div className="Project-Card-Container">
          <img className="Project-Card-Img" src="src/assets/images/projects/project-1.png" alt="Imagem Projeto" />
          <div className="Project-Card-Container-Text">
            <h3 className="Project-Card-Title">Orizon</h3>
            <p className="Project-Card-Tipe">Web Development</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Portfolio