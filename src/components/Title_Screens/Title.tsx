import './Title_Styles.css';

interface TitleProps{
  Title: string;

}

const Title: React.FC<TitleProps> = ({Title}) => {
  return (
       <div className="Title-header">
          <h2 className="title">{Title}</h2>
          <div className="line">
          </div>
        </div>
  )
}

export default Title