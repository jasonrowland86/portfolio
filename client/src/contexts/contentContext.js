import React, { createContext } from 'react';

export const ContentContext = createContext();

class ContentContextProvider extends React.Component {
  state = {
    landing: true,
    content: {
      backgroundColor: "#EDFD5D",
    },
    label: 'web developer'
  }

  toggleLanding = () => {
    this.setState({
      landing: !this.state.landing,
    });
  }

  handleLabel = (e) => {
    e.preventDefault();
    this.setState({
      content: {
        backgroundColor: e.target.id,
        height: "auto"
      },
      label: e.target.attributes.label.value,
      landingH3: {
        color: e.target.id,
      }
    })
  }

  toggleLandingH3 = () => {
    if (this.state.label === "web developer") {
      this.setState({
        label: "work",
        landingH3: {
          color: '#EDFD5D',
        },
      });
    } else {
      this.setState({
        label: "web developer",
        landingH3: {
          color: 'white',
        },
      });
    }
  }

  handleLandingTitle = (label, color) => {
    console.log('handle from context');
    this.setState({
      label: label,
      landingH3: {
        color: color,
      },
    });
  }

  render() {
    return(
      <ContentContext.Provider value={{...this.state, toggleLanding: this.toggleLanding, handleLabel: this.handleLabel, toggleLandingH3: this.toggleLandingH3, handleLandingTitle: this.handleLandingTitle}}>
        {this.props.children}
      </ContentContext.Provider>
    );
  }
}

export default ContentContextProvider;
