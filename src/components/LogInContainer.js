import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

import '../login_reg.css';

class LogInContainer extends Component {
  render() {
    return (
        <BrowserRouter basename="user">
        <div className="Apper">
          <div className="Apper__Aside">
            <div className="Apper__Aside__text">
              <p>locaft</p>
              
            </div>
          </div>
          <div className="Apper__Form">
              <div className="PageSwitcher">
                <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink to="/register" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
              <div className="FormTitle">
                  <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>

          </div>

        </div>
        </BrowserRouter>
    );
  }
}

export default LogInContainer;

