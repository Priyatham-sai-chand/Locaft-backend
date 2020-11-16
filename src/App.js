import React, { Component } from 'react';
import HomePage from "./components/HomePage";
import Login from "./components/SignIn";
import PricingPlan from "./components/PricingPlan";
import LogInContainer from "./components/LogInContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class  App extends Component {
  render(){
    return (
      <div className="App">
        <PricingPlan />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" Component={HomePage} />
            <Route path="/User" Component={LogInContainer} />
          </Switch>
        </BrowserRouter>

        
      </div>

    );
  }
}

export default App;
