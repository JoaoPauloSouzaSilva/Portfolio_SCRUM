import "./Resume_Styles.css";
import Title from "../Title_Screens/Title";
import * as Unicons from '@iconscout/react-unicons';

export default function Resume() {
  return (
    <div className="Resume-container">
      <Title Title={"Resumo"}/>
      <div className="Resume-Section-container">
        
        <div className="Resume-Section-Header">
          <div className="Resume-icon"><Unicons.UilGraduationCap  size="100%"/></div>
          <h3 className="Resume-Title">Formação</h3>
        </div>

        <ul className="Resume-ul">
          <li className="Resume-li">
            <h4 className="Resume-li-Title">Graduação em Bacharelado em Sistema de Informação</h4>
            <span className="Resume-li-Date">2021 — 2025</span>
            <p className="Resume-li-Text">Realizado no Instituto Federal do Norte de Minas Gerais - Campus salinas. Com coeficiente de rendimento superior a 85%.</p>
          </li>

          <li className="Resume-li">
            <h4 className="Resume-li-Title">Técnico em Informática Integrado ao Ensino Médio</h4>
            <span className="Resume-li-Date">2018 — 2021</span>
            <p className="Resume-li-Text">Realizado no Instituto Federal do Norte de Minas Gerais - Campus salinas. Com coeficiente de rendimento superior a 80%.</p>
          </li>

        </ul>
      </div>

      <div className="Resume-Section-container">
        
        <div className="Resume-Section-Header">
          <div className="Resume-icon"><Unicons.UilFlask   size="100%"/></div>
          <h3 className="Resume-Title">Experiência</h3>
        </div>

        <ul className="Resume-ul">
          <li className="Resume-li">
            <h4 className="Resume-li-Title">SIFSoft Jr</h4>
            <span className="Resume-li-Date">2023 — Atual</span>
            <p className="Resume-li-Text">AAtuei como criador de mídias digitais, diretor substituto do setor de marketing e atualmente sou desenvolvedor front-end.</p>
          </li>

        </ul>
      </div>

      {/* <div className="Resume-Section-container">
  
        <div className="Resume-Section-Header">
          <div className="Resume-icon"><Unicons.UilPlay    size="100%"/></div>
          <h3 className="Resume-Title">Cursos Complementares</h3>
        </div>

        <ul className="Resume-ul">
          <li className="Resume-li">
            <h4 className="Resume-li-Title">SIFSoft Jr</h4>
            <span className="Resume-li-Date">2023 — Atual</span>
            <p className="Resume-li-Text">AAtuei como criador de mídias digitais, diretor substituto do setor de marketing e atualmente sou desenvolvedor front-end.</p>
          </li>

        </ul>
      </div> */}

    </div>
  );
}
