import React from 'react';
import Work from './work';
import About from './about';
import Contact from './contact';
import Project from './project';
import { ContentContext } from '../contexts/contentContext';

class Content extends React.Component {
  static contextType = ContentContext;
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleContent() {
    console.log(this.context);
    if (this.context.label === "work") {
      console.log('work!');
      return <Work />
    } else if (this.context.label === "about") {
      return <About />
    } else if (this.context.label === "contact") {
      return <Contact />
    } else if (this.context.label !== "contact" && this.context.label !== "about" && this.context.label !== "work" && this.context.label !== "web developer") {
      console.log('project!');
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      return <Project project={this.context.label} />
    }
  }

  render() {
    if (this.context.landing) {
      return(
        <div></div>
      )
    } else {
      return(
        <div className="content" style={this.context.content}>
          {this.handleContent()}
        </div>
      )
    }
  }
}

export default Content;
