import React from 'react';
import Nav from './nav';
import { ContentContext } from '../contexts/contentContext';
import projects from '../projects.js';
import { Link } from "react-router-dom";
require('../style_sheets/landing.css');

let projectLabels = [];
projectLabels = projects.map((project) =>(
  project.data.name
))

class Landing extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {

    }
  }

  handleLanding() {
    if (!this.context.landing) {
      this.context.toggleLanding();
      this.setState({
        landingH1: {
          fontSize: '8vw'
        },
        landingH3: {
          fontSize: '5vw'
        },
      });
      setTimeout(() => {
        // this.context.toggleLandingH3();
        this.setState({
          nav: {
            height: '1.3em',
            display: 'flex',
            flexDirection: 'row',
          },
          landingRight: {
            display: 'block'
          },
          landingHeight: {
            height: 'auto'
          }
        })
      }, 400);
    } else {
      this.context.toggleLanding();
      this.context.toggleLandingH3();
      this.setState({
        landingRight: {
          display: 'none'
        },
        landingHeight: {
          height: 'auto'
        },
        landingH1: {
          fontSize: '23vw'
        },
        landingH3: {
          fontSize: '10vw'
        }
      });
    }
  }

  handleArrow() {
    let next;
    for (let i = 0; i < projectLabels.length; i++) {
      if (this.context.label === projectLabels[i]) {
        if (projectLabels[i] === 'Simon') {
          next = projectLabels[0];
          console.log('if ' + next);
        } else {
          next = projectLabels[i + 1];
          console.log('else ' + next);
        }
      }
    }
    if (this.context.label !== 'web developer' && this.context.label !== "work" && this.context.label !== "about" && this.context.label !== "contact") {
      console.log(next);
      return <div className="landing-bottom-right" style={this.state.arrow}>
        <h2 id="#EDFD5D" label={next}><Link to={'/work/' + next.replace(/\s/g, '').toLowerCase()} >></Link></h2>
      </div>
    } else {
      return <div className="landing-bottom-right"></div>
    }
  }

  render() {
    return(
      <div className="landing" style={this.state.landingHeight}>
        <div className="landing-top">
          <div className="landing-left" label="web developer" onClick={() => { this.handleLanding(); this.props.toggleLanding(); }}>
            <h1 style={this.state.landingH1}>jason</h1>
            <h1 style={this.state.landingH1}>rowland/</h1>
          </div>
          <div className="landing-right" style={this.state.landingRight}>
            <div>
              <Nav nav={this.state.nav} />
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-left">
            <div style={this.context.landingH3}>
              <h3 style={this.state.landingH3}>{this.context.label}</h3>
            </div>
          </div>
          {this.handleArrow()}
        </div>
      </div>
    )
  }
}

export default Landing;
