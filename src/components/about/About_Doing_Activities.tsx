import './About_Doing_Activities_Styles.css';
import * as Unicons from '@iconscout/react-unicons';


interface ActivitiesProps {
  Title: string;
  Text: string; 
  NameIcon: string;
  onClick?: () => void;
}


const Activities: React.FC<ActivitiesProps> = ({Title, Text, NameIcon, onClick}) => {

  const Icon = Unicons[NameIcon];

  return (
    <div className="Activities-container" onClick={onClick ? onClick : undefined}>
        <div className="Activities-icon"><Icon size="60%"/></div>
        <div className="Activities-content">
          <h4 className="Activities-title">{Title}</h4>
          <p className="Activities-text">{Text}</p>
        </div>
    </div>
  );
}

export default Activities;
