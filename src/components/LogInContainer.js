import React, { Component } from 'react';
import { HashRouter as BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './SignUp';
import SignInForm from './SignIn';

import '../login_reg.css';

class LogInContainer extends Component {
  render() {
    return (
      <BrowserRouter basename="/user/">
        <div className="Apper">
          <div className="Apper__Aside"></div>
          <div className="Apper__Form">
              <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

            <Switch>
              <Route path="/sign-up" component={SignUpForm} />
              <Route path="/sign-in" component={SignInForm} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default LogInContainer;

