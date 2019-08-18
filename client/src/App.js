import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Landing from './components/landing';
// import Content from './components/content';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import Project from './components/project';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContentContextProvider from './contexts/contentContext';
// import { ContentContext } from './contexts/contentContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from './projects.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      landing: false,
      subtitle: 'web developer'
    }
    this.toggleLanding = this.toggleLanding.bind(this);
  }

  componentDidMount() {
    if (window.location.pathname === '/') {
      this.setState({
        subtitle: 'web developer'
      })
    } else {
      this.setState({
        subtitle: window.location.pathname.slice(1)
      })
    }
  }

  toggleLanding() {
    this.setState({
      landing: !this.state.landing
    })
  }

  handleContent() {
    if (this.state.landing) {
      return <div className="content">
        <Switch>
          <Route path="/" exact component={Work} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          {projects.map((project) =>(
            <Route key={project.data.name} path={'/work/' + project.data.name.replace(/\s/g, '').toLowerCase()} render={(props) => <Project project={project}/>} />
          ))}
          <Route component={Work} />
        </Switch>
      </div>
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div className="App">
      <Router>
        <ContentContextProvider>
          <Landing toggleLanding={this.toggleLanding}/>
          {this.handleContent()}
        </ContentContextProvider>
        </Router>
      </div>
    );
  }
}

export default App;
