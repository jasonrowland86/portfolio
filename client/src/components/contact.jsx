import React from 'react';
import { ContentContext } from '../contexts/contentContext';
// import {
//   GoogleReCaptchaProvider,
//   GoogleReCaptcha
// } from 'react-google-recaptcha-v3';

class Contact extends React.Component {
  static contextType = ContentContext;
  constructor() {
    super();
    this.state = {
      contactSection: {
        opacity: 0,
        transition: "all .3s ease-in"
      },
      label: 'contact',
      color: '#FF7DEE'
    }
  }

  componentDidMount() {
    this.context.handleLandingTitle(this.state.label, this.state.color);
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        contactSection: {
          opacity: 1,
          transition: "all .3s ease-in",
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }
      })
    }, 150);
  }

  handleSubmit(e) {
    console.log('handle submit');
    // e.preventDefault();
    // let data = this.refs.data.getDOMNode().value;
    // fetch("<url to where to post>", {
    //     method: "POST",
    //     body: 'data'
    // }).then(this.handleRedirect);
  }

  render() {
    return(
      <div className="contact-section">
        <div style={this.state.contactSection}>
          <form>
            <div className="form-section">
              <div className="form-section-inputs">
                <label>first name*</label>
                <input type="text" name="firstName"/>
                <label>last name</label>
                <input type="text" name="lastName"/>
                <label>email*</label>
                <input type="text" name="email"/>
                <label>message*</label>
                <textarea name="message" ows="8" cols="80"></textarea>
              </div>
              <div className="form-section-submit">
                <input onClick={this.handleSubmit} className="submit" type="submit" value="send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
