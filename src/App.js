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
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/user" component={LogInContainer} />
            <Route path="/pricing" component={PricingPlan} />
          </Switch>
        </BrowserRouter>

        
      </div>

    );
  }
}

export default App;
