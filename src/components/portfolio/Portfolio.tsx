import './Portfolio_Styles.css';
import Title from '../Title_Screens/Title';
import ProjectCard from './Project_Card';

function Portfolio(){
  return ( 
    <div className='Portfolio-container'>
      <Title Title={'Portfólio'}/>

      <div className="Portfolio-container-card">


        <ProjectCard 
          title={'Orizon'} 
          type={'Web Desenvolvimento'} 
          ImgSrc={'src/assets/images/projects/project-1.png'} 
        />

        <ProjectCard 
          title={'Brawlhalla'} 
          type={'Aplicativo'} 
          ImgSrc={'src/assets/images/projects/project-2.png'} 
        />

        <ProjectCard 
          title={'MetaSpark'} 
          type={'Web Design'} 
          ImgSrc={'src/assets/images/projects/project-3.png'} 
        />

        


      </div>
    </div>
  )
}

export default Portfolio