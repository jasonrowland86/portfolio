import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Landing from './components/landing';
import Content from './components/content';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContentContextProvider from './contexts/contentContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: false,
      subtitle: 'web developer'
    }
    this.toggleLanding = this.toggleLanding.bind(this);
  }

  toggleLanding() {
    this.setState({
      landing: !this.state.landing
    })
  }

  render() {
    return (
      <div className="App">
      <Router>
        <ContentContextProvider>
          <Landing toggleLanding={this.toggleLanding}/>
          <Content />
        </ContentContextProvider>
        </Router>
      </div>
    );
  }
}

export default App;
