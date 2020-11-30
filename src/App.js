import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import HomePage from "./components/HomePage";
import PricingPlan from "./components/PricingPlan";
import LogInContainer from "./components/LogInContainer";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from "./context/UserContext";

export default function App() {
  const [userData, setUserData ] = useState({
    token: undefined,
    user: undefined
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token","");
        token ="";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null, 
        {headers: {"x-auth-token": token }}
        
        );
        if (tokenRes.data) {
          const userRes = await Axios.get("http://localhost:5000/users/",
          {headers:{"x-auth-token":token},
          });
          setUserData({
            token,
            user: userRes.data,
          });
        }

    };
    

    checkLoggedIn();

  },[])
    return (
      <div className="App">
        <BrowserRouter>
        <UserContext.Provider value= {{userData, setUserData}}>
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/user" component={LogInContainer} />
            <Route path="/pricing" component={PricingPlan} />
          </Switch>
          </UserContext.Provider>
        </BrowserRouter>

        
      </div>

    );
  }


