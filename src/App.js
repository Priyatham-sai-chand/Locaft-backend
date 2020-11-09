import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/SignIn";
import LogInContainer from "./components/LogInContainer";
class  App extends Component {
  render(){
    return (
      <div className="App">
        < LogInContainer />

        
      </div>

    );
  }
}

export default App;
