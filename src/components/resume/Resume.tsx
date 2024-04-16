import "./Resume_Styles.css";
import Title from "../Title_Screens/Title";

export default function Resume() {
  return (
    <div className="Resume-container">
      <Title Title={"Resumo"}/>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            
          </div>
          <h3 className="h3"></h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timelime-item-title"></h4>
            <p className="timeline-text"></p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timelime-item-title"></h4>
            <p className="timeline-text"></p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timelime-item-title"></h4>
            <p className="timeline-text"></p>
          </li>
        </ol>
      </section>
      <section className="timeline"></section>
    </div>
  );
}
