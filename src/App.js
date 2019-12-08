import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Route} from 'react-router-dom'
import Person from "./Person/Person";
import Login from "./Login/Login";
import Header from './Header';
import Footer from './Footer';
import Users from './User/User';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
         <Route path="/" component={Login}/>
         <Route path="/person" component={Person}/>
         <Route path="/users" component={Users}/>
         <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
