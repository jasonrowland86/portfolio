import React from 'react';
import projects from '../projects.js';

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      workSection: {
        opacity: 0,
        transition: "all .3s ease-in"
      }
    }
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        workSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
        }
      })
    }, 150);
  }

  render() {
    return(
      <div style={this.state.workSection} className="work-section">
        {projects.map((project) =>(
          <div key={project.data.name} className="project-preview" id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView}>

            <div className='overlay' id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView}>
              <div className="project-preview-title" id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView}>
                <h1 id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView}>{project.data.name}</h1>
                <h2 id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView} className="overlay-h2">{project.data.technologies}</h2>
              </div>

              <div className="project-preview-image" id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView}>
                <img id="#EDFD5D" label={project.data.name} onClick={this.props.handleProjectView} className="overlay-img" src={project.data.images[0]} alt=""></img>
              </div>
            </div>

            <div className='under'>
              <div className="project-preview-title">
                <h1>{project.data.name}</h1>
                <h2>{project.data.technologies}</h2>
              </div>

              <div className="project-preview-image">
                <img src={project.data.images[0]} alt=""></img>
              </div>
            </div>

          </div>
        ))}
      </div>
    )
  }
}

export default Work;
