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
            <h4 className="Resume-li-Title">University School Of The Arts</h4>
            <span className="Resume-li-Date">2007 — 2008</span>
            <p className="Resume-li-Text">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
          </li>

          <li className="Resume-li">
            <h4 className="Resume-li-Title">New York Academy Of Art</h4>
            <span className="Resume-li-Date">2006 — 2007</span>
            <p className="Resume-li-Text">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
          </li>

          <li className="Resume-li">
            <h4 className="Resume-li-Title">High School Of Art And Design</h4>
            <span className="Resume-li-Date">2002 — 2004</span>
            <p className="Resume-li-Text">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.</p>
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
            <h4 className="Resume-li-Title">University School Of The Arts</h4>
            <span className="Resume-li-Date">2007 — 2008</span>
            <p className="Resume-li-Text">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
          </li>

          <li className="Resume-li">
            <h4 className="Resume-li-Title">New York Academy Of Art</h4>
            <span className="Resume-li-Date">2006 — 2007</span>
            <p className="Resume-li-Text">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>
          </li>

          <li className="Resume-li">
            <h4 className="Resume-li-Title">High School Of Art And Design</h4>
            <span className="Resume-li-Date">2002 — 2004</span>
            <p className="Resume-li-Text">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.</p>
          </li>


        </ul>
      </div>

    </div>
  );
}
