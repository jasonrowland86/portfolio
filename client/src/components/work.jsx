import React from 'react';
import projects from '../projects.js';
import { ContentContext } from '../contexts/contentContext';
import { Link } from "react-router-dom";
require('../style_sheets/work.css');

class Work extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {
      workSection: {
        opacity: 0,
        transition: "all .3s ease-in"
      },
      label: 'work',
      color: '#EDFD5D',
      prvwImg: {
        opacity: 0
      }
    }
  }

  componentDidMount() {
    this.context.handleLandingTitle(this.state.label, this.state.color);
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        workSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
          display: 'flex',
          flexWrap: 'wrap'
        }
      })
    }, 150);
  }

  handleImageLoaded() {
    this.setState({ prvwImg: {opacity: 1} });
  }

  render() {
    return(
      <div className="work-section">
        <div style={this.state.workSection}>
          {projects.map((project) =>(
            <div key={project.data.name} className="project-preview" id="#EDFD5D" label={project.data.name} >
            <Link to={'/work/' + project.data.name.replace(/\s/g, '').toLowerCase()} >
              <div className='overlay' id="#EDFD5D" label={project.data.name} >
                <div className="project-preview-title" id="#EDFD5D" label={project.data.name} >
                  <h1 id="#EDFD5D" label={project.data.name} >{project.data.name}</h1>
                  <h2 id="#EDFD5D" label={project.data.name} onClick={this.context.handleLabel} className="overlay-h2">{project.data.technologies}</h2>
                </div>

                <div style={this.state.prvwImg} className="project-preview-image" id="#EDFD5D" label={project.data.name} >
                  <img id="#EDFD5D" label={project.data.name}  className="overlay-img" src={project.data.images[0]} alt="" onLoad={this.handleImageLoaded.bind(this)}></img>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Work;
