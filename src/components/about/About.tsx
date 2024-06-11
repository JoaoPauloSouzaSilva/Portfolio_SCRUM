import { useState } from 'react';
import './About_Styles.css';
import ModalActivities from './Modal_Activities';
import Carousel from './About_Carousel_Testimonials';
import Title from '../Title_Screens/Title';
import Activities from './About_Doing_Activities';


function About(){ 
  const [isOpen_Activite01, setIsOpen_Activite01] = useState(false);
  const [isOpen_Activite02, setIsOpen_Activite02] = useState(false);
  const [isOpen_Activite03, setIsOpen_Activite03] = useState(false);
  const [isOpen_Activite04, setIsOpen_Activite04] = useState(false);

  return (
  
      <div className='About-container'>

        <div className="About-header">
          <Title Title={'Sobre Mim'}/>

          <div className="About-container-text">
            <p className="About-text" style={{ marginBottom: '2%' }}>
            Sou desenvolvedor de software em formação, com 1 ano de experiência no mercado de trabalho, atuando nas áreas de Desenvolvimento Front-End, Desenvolvimento Mobile, Design de Interface do Usuário e Design de Experiência do Usuário. Além disso, possuo experiência em gestão de equipe, definição de tarefas e monitoramento de progresso.
            </p>

            <p className="About-text" style={{ marginBottom: '4%' }}>
            Comprometido com a inovação, busco constantemente transformar ideias criativas em soluções tecnológicas que gerem resultados significativos. Tenho uma paixão por superar desafios e entregar projetos que não apenas atendem, mas excedem as expectativas. Estou sempre em busca de novas oportunidades para crescer, aprender e contribuir com minha experiência.
            </p>
          </div>
        </div>

        <div className="About-doing">
          <h3 className="About-doing-header">O Que Eu Estou Fazendo</h3>
          <div className="About-doing-container-activities">

            <Activities 
              onClick={() => setIsOpen_Activite02(true)}
              Title={'Desenvolvimento Web'} 
              Text={'Aprimorando meus conhecimentos sobre web.'} 
              NameIcon={'UilBrowser'}
            />
            
              <ModalActivities  
                isOpen={isOpen_Activite02}   
                onClose={() => setIsOpen_Activite02(false)} 
                title="Desenvolvimento Web"   
                text="Estou empenhado em aprimorar meus conhecimentos no campo do desenvolvimento web. Visto que este é um campo em constante evolução, com novas tecnologias e frameworks surgindo regularmente. Compreender essas mudanças e adaptar-se a elas é uma parte crucial do processo de aprendizado."   
                icon="UilBrowser"
              />

            <Activities 
              onClick={() => setIsOpen_Activite04(true)}
              Title={'Aplicativos Móveis'} 
              Text={'Adquirindo conhecimento sobre a criação de apps.'} 
              NameIcon={'UilMobileAndroid'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite04}   
                onClose={() => setIsOpen_Activite04(false)} 
                title="Aplicativos Móveis"   
                text="Estou em busca de aprimorar minhas habilidades e adquirir mais conhecimento sobre o desenvolvimento mobile. Tenho um forte interesse em explorar novas tecnologias, ferramentas e práticas recomendadas que possam melhorar a eficiência e a qualidade dos aplicativos móveis. Meu objetivo é dominar tanto as plataformas Android quanto iOS, desenvolver interfaces de usuário intuitivas e otimizar a experiência do usuário. "   
                icon="UilMobileAndroid"
              />

            <Activities 
              onClick={() => setIsOpen_Activite01(true)}
              Title={'Compreendendo Back-End'} 
              Text={'Buscando adquirir mais conhecimento sobre o Back-End.'} 
              NameIcon={'UilDatabase'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite01}   
                onClose={() => setIsOpen_Activite01(false)} 
                title="Compreendendo Back-End"   
                text="Estou buscando adquirir mais conhecimento sobre o back-end, devido à minha vontade de me tornar um desenvolvedor mais completo. Compreendo que o back-end é a espinha dorsal de qualquer aplicação web ou móvel e é fundamental para garantir que tudo funcione sem problemas."
                icon="UilDatabase"
              />


            <Activities 
              onClick={() => setIsOpen_Activite03(true)}
              Title={'Criação de Projetos'} 
              Text={'Criando projetos para testar meus conhecimentos.'} 
              NameIcon={'UilWrench'}
            />

              <ModalActivities  
                isOpen={isOpen_Activite03}   
                onClose={() => setIsOpen_Activite03(false)} 
                title="Criação de Projetos"   
                text="Estou desenvolvendo projetos pessoais para, além de compor meu portfólio, colocar em prática meus conhecimentos adquiridos, permitindo-me aprender e crescer como desenvolvedor."   
                icon="UilWrench"
              />
          </div>
        </div>

        <div className="About-testimonials">
          <h3 className="About-testimonials-header">Testemunho</h3>
          <div className="About-testimonials-container">
          <Carousel />
          </div>

        </div>


      </div>
  )
}

export default About