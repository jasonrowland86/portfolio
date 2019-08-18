import React from 'react';
import projects from '../projects.js';
import { ContentContext } from '../contexts/contentContext';

class Project extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {
      projectSection: {
        opacity: 0,
        transition: 'all .3s ease-in'
      },
      label: 'work',
      color: '#EDFD5D'
    }
  }

  componentDidMount() {
    // this.context.handleLandingTitle(this.state.label, this.state.color);
    this.context.handleLandingTitle(this.props.project.data.name, this.state.color);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        projectSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
          display: 'flex',
          flex: 1,
        }
      })
    }, 250);
  }

  render() {
    let project = projects.filter(project => project.data.name === this.props.project.data.name);
    console.log(project[0]);
    let key = 0;
    let projectImages = project[0].data.images.map((image) => (
      <img key={key++} className="project-img" src={image} alt=""></img>
    ));
    return(
      <div className="project-section">
        <div style={this.state.projectSection}>
          <div className="project">

            <div className="project-info">
              <div className="project-description"><p>{project[0].data.description}</p></div>
              <div className="project-skills"><h2>{project[0].data.technologies}</h2></div>
              <div className="project-links">
                <a href={project[0].data.appLink} target="blank"><div>View App</div></a>
                <a href={project[0].data.githubLink} target="blank"><div>View on GitHub</div></a>
              </div>
            </div>

            <div className="project-images">
              {projectImages}
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Project;