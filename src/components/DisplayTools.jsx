import tools from '../data/tools';
import { Link } from 'react-router-dom';

const DisplayTools = () => {

  return (
    <section className="tools-container">
      <div className="tools-list">
        {tools.map((tool, index) => {
          return( 
            <Link key={index} to={tool.link} className="tool-item">
              <div className="tool-item-icon" style={{backgroundColor: tool.color}} dangerouslySetInnerHTML={{__html: tool.icon}}>
              </div>
              <div className="tool-item-content">
                <p>{tool.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  )
}

export default DisplayTools