import './Curriculum_Styles.css';
import Title from '../Title_Screens/Title';
import curriculum from '../../assets/teste.pdf';
import * as Unicons from '@iconscout/react-unicons';

function Curriculum(){
  const openResume = (): void => {
    window.open(curriculum, '_blank'); 
  }


  return (
  
      <div className='Curriculum-container'>

        <Title Title={'Currículo'}/>

        <div className="Curriculum-container-text">
        <p className="Curriculum-text">
          Sou um profissional apaixonado por tecnologia e desenvolvimento web. Com uma sólida formação em Tecnologia da Informação, tenho me dedicado nos últimos anos a aprimorar minhas habilidades em diversas tecnologias, como Node.js, Express, React e MongoDB. Ao longo da minha carreira, participei de projetos desafiadores que me permitiram aprofundar meus conhecimentos e desenvolver soluções inovadoras.
        </p>

        <p className="Curriculum-text">
         Minha abordagem no desenvolvimento de software é focada em criar experiências de usuário intuitivas e eficientes, sempre buscando entender as necessidades dos usuários finais. Além disso, tenho experiência em trabalhar em equipe, onde minha colaboração e comprometimento foram fundamentais para alcançar os objetivos do projeto.
        </p>

        <p className="Curriculum-text">
          Estou sempre em busca de novos desafios e oportunidades para expandir meu conhecimento e contribuir para projetos que tragam impacto positivo. Estou empolgado para fazer parte de equipes inovadoras e colaborativas, onde possa continuar aprendendo e crescendo profissionalmente.
        </p>
        </div>

        <div className="separator"></div>
        
        <div className="Curriculum-container-download">

          <a className='Curriculum-action' href={curriculum} download>
            <div className="Curriculum-icon"><Unicons.UilFileDownload size="40%"/></div>
            <p className='Curriculum-text-button'>
              Baixar Currículo
            </p> 
          </a>

          <div className='Curriculum-action' onClick={openResume}>
            <div className="Curriculum-icon"><Unicons.UilBookOpen   size="40%"/></div>
              <p className='Curriculum-text-button'>
                Abrir Currículo           
              </p> 
            </div>
          </div>


      </div>
  )
}

export default Curriculum
