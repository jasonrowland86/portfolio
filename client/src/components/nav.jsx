import React from 'react';
import { ContentContext } from '../contexts/contentContext';
import { Link } from "react-router-dom";
require('../style_sheets/nav.css');


class Nav extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="nav" style={this.props.nav}>
        <div className="work-tab" id="#EDFD5D" label="work" ><Link to="/work"><div className="nav-link"></div></Link></div>
        <div className="about-tab" id="#70DBFB" label="about" ><Link to="/about"><div className="nav-link"></div></Link></div>
        <div className="contact-tab" id="#FF7DEE" label="contact" ><Link to="/contact"><div className="nav-link"></div></Link></div>
      </div>
    )
  }
}

export default Nav;
