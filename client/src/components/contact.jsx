import React from 'react';
import { ContentContext } from '../contexts/contentContext';
import axios from "axios";
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.context.handleLandingTitle(this.state.label, this.state.color);
    this.fadeIn();
    this.callBackEnd();
  }

  callBackEnd() {
    console.log('call backend');
    axios({
            method: "GET",
            url:"/test",
        }).then((response)=>{
            console.log(response);
        }).catch((response)=>{
            console.log(response);
        })
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
        },
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    }, 150);
  }

  handleChange(event) {
     this.setState({
       [event.target.name]: event.target.value,
     });
  }

  handleSubmit(e) {
    console.log('handle submit');
    axios({
            method: "POST",
            url:"/",
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                messsage: this.state.message
            }
        }).then((response)=>{
            console.log(response);
            if (response.data.msg === 'success'){
                alert("Message Sent.");
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        }).catch((response)=>{
            console.log(response);
        })
  }

  render() {
    return(
      <div className="contact-section">
        <div style={this.state.contactSection}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <div className="form-section-inputs">
                <label>first name*</label>
                <input type="text" onChange={this.handleChange} name="firstName"/>
                <label>last name</label>
                <input type="text" onChange={this.handleChange} name="lastName"/>
                <label>email*</label>
                <input type="text" onChange={this.handleChange} name="email"/>
                <label>message*</label>
                <textarea onChange={this.handleChange} name="message" ows="8" cols="80"></textarea>
              </div>
              <div className="form-section-submit">
                <input className="submit" type="submit" value="send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
