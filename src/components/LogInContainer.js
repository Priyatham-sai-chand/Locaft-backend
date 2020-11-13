import React, { Component } from 'react';
import { HashRouter as BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUp';
import SignInForm from './SignIn';

import '../login_reg.css';

class LogInContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Apper">
          <div className="Apper__Aside"></div>
          <div className="Apper__Form">
              <Route path="/sign-up" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default LogInContainer;

