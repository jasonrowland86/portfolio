import React from 'react';
import { ContentContext } from '../contexts/contentContext';
require('../style_sheets/about.css');

class About extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {
      aboutSection: {
        opacity: 0,
        transition: "all .3s ease-in"
      },
      label: 'about',
      color: '#70DBFB',
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
        aboutSection: {
          opacity: 1,
          paddingBottom: '3em',
          transition: "all .3s ease-in",
          backgroundColor: '#70DBFB',
        }
      })
    }, 150);
  }

  handleImageLoaded() {
    this.setState({ prvwImg: {opacity: 1} });
  }

  render() {
    return(
      <div className="about-section">
        <div className="about-section-div" style={this.state.aboutSection}>

          <div className="about-text">
            <p>
              Born and raised in Houston Texas. I moved to New York City in 2009
              where I was a bike messenger and kettlebell trainer before I found
              web development. I have a proclivity for efficiency and a love for
              design that create a natural passion for front-end development and
              user experience.
            </p>
            <div className="project-skills">
              <h2>skill, skill, skill, skill, skill,</h2>
            </div>
            <div className="project-links">
              <a href="https://www.linkedin.com/in/jason-rowland86/" target="blank"><div>LinkedIn</div></a>
              <a href="https://github.com/jasonrowland86" target="blank"><div>GitHub</div></a>
            </div>
          </div>

          <div style={this.state.prvwImg} className="about-image">
            <img onLoad={this.handleImageLoaded.bind(this)} className="profile-img" src="profile-pic.jpg" alt="Profile"/>
          </div>

        </div>
      </div>
    )
  }
}

export default About;
