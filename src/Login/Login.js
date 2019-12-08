import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Login.css";
import Users from '../User/User';
export default class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: "",
      password: "",
      IsLogin:false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    if(this.state.email==="bob@gmail.com" && this.state.password==="secret"){
       this.setState({IsLogin:true})
     }
    event.preventDefault();
  }
  logoutHandleClick=event=>{
      console.log("Logout function is calling");
      this.setState({IsLogin:false});
//   event.preventDefault();
  }
  render() {
      if(!this.state.IsLogin){
        console.log("why if condition is calling");
        return (
            <div className="Login">
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email" >
                  <Form.Control
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="password" >
                  <Form.Control
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </Form.Group>
                <Button
                  block
                 
                  disabled={!this.validateForm()}
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </div>
          );
        } else {
            console.log("why else condition is calling");
            return <Users Logoutclick={this.logoutHandleClick}/>
        }
  }
}