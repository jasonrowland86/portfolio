import React from 'react';
import Work from '../components/work';
import About from '../components/about';
import Contact from '../components/contact';
import Project from '../components/project';
import { ContentContext } from '../contexts/contentContext';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projects from '../projects.js';

class Content extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {

    }
  }

  handleContent() {
    console.log(this.context);
    if (this.context.landing) {
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
    return(
      <div className="content">{this.handleContent()}</div>
    )
  }
}

export default Content;
