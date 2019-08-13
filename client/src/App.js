import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Landing from './components/landing';
import Content from './components/content';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import projects from './projects.js';
import ContentContextProvider from './contexts/contentContext';

let projectLabels = [];
projectLabels = projects.map((project) =>(
  project.data.name
))

console.log(projectLabels);

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true,
      content: {
        backgroundColor: "#EDFD5D",
      },
      label: 'web developer',
      arrow: {
        display: 'none'
      }
    }
    this.handleLanding = this.handleLanding.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleProjectView = this.handleProjectView.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleLanding() {
    if (this.state.landing) {
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

  handleNavClick(e) {
   e.preventDefault();
   this.setState({
     content: {
       backgroundColor: e.target.id,
       height: "auto"
     },
     label: e.target.attributes.label.value,
     landingH3: {
       color: e.target.id,
       fontSize: '5vw'
     },
     arrow: {
       display: 'none'
     }
   })
  }

  handleProjectView(e) {
    e.preventDefault();
    this.setState({
      projectSection: {
        opacity: 0,
        transition: 'all .3s ease-in',
      }
    })
    let event = e.target
    console.log(e);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setTimeout(() => {
      console.log(event);
      this.setState({
        content: {
          backgroundColor: event.id,
          height: "auto"
        },
        label: event.attributes.label.value,
        landingH3: {
          color: event.id,
          fontSize: '5vw'
        },
        arrow: {
          display: 'flex'
        },
        projectSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
        }
      })
    }, 500)
  }

  handleNextClick(e) {
    console.log('arrow clicked');
    let next;
    for (let i = 0; i <= projectLabels.length; i++) {
      if (this.state.label === projectLabels[i]) {
        next = projectLabels[i + 1];
      }
    }
    for (let i = 0; i <= projectLabels.length; i++) {
      if (next === projectLabels[projectLabels.length - 1]) {
        next = projectLabels[0];
      }
    }
    e.preventDefault();
    this.setState({
      label: next,
      projectSection: {
        opacity: 0,
        transition: 'all .3s ease-in',
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ContentContextProvider>
          <Landing globalState={this.state} handleLanding={this.handleLanding} handleNavClick={this.handleNavClick} handleNextClick={this.handleNextClick}/>
          <Content globalState={this.state} landing={this.state.landing} contentBackground={this.state.contentBackground} handleProjectView={this.handleProjectView}/>
        </ContentContextProvider>
      </div>
    );
  }
}

export default App;
