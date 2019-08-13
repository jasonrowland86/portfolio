import React from 'react';
import Nav from './nav';
import { ContentContext } from '../contexts/contentContext';

class Landing extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {

    }
  }

  handleLanding() {
    if (this.context.landing) {
      this.setState({
        landing: false,
        landingH1: {
          fontSize: '8vw'
        },
        landingH3: {
          fontSize: '8vh'
        },
      });
      setTimeout(() => {
        this.setState({
          label: "work",
          nav: {
            height: '1.3em',
            display: 'flex',
            flexDirection: 'row',
            opacity: '1'
          },
          landingRight: {
            display: 'block'
          },
          landingHeight: {
            height: 'auto'
          },
          landingH1: {
            fontSize: '8vw'
          },
          landingH3: {
            color: "#EDFD5D",
            fontSize: '8vh'
          },
          content: {
            backgroundColor: "#EDFD5D",
            height: "auto"
          }
        })
      }, 1100);
    } else {
      this.setState({
        landing: true,
        label: "web developer",
        landingRight: {
          display: 'none'
        },
        landingHeight: {
          height: 'auto'
        },
        landingH1: {
          fontSize: '35vh'
        },
        landingH3: {
          color: "white",
          fontSize: '15vh'
        },
        content: {
          height: "auto"
        },
        arrow: {
          display: 'none'
        }
      });
    }
  }

  render() {
    return(
      <div className="landing" style={this.props.globalState.landingHeight}>
        <div className="landing-top">
          <div className="landing-left" onClick={(event) => { this.props.handleLanding();}}>
            <h1 style={this.props.globalState.landingH1}>jason</h1>
            <h1 style={this.props.globalState.landingH1}>rowland/</h1>
          </div>
          <div className="landing-right" style={this.props.globalState.landingRight}>
            <div>
              <Nav nav={this.props.globalState.nav}  handleNavClick={this.props.handleNavClick} />
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-left">
            <h3 style={this.props.globalState.landingH3}>{this.props.globalState.label}</h3>
          </div>
          <div className="landing-bottom-right" style={this.props.globalState.arrow}>
            <h2 onClick={this.props.handleNextClick}>></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
