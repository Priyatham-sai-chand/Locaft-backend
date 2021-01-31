
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "./ErrorNotice";
import { Link, useHistory, withRouter } from "react-router-dom";

const Login = () => {
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

 const { userData,setUserData } = useContext(UserContext);
  
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }; 
        return (
          
        <div className="FormCenter">
          {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
            <form  className="FormFields" onSubmit={submit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" value={ email } placeholder="Enter your email" name="email" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" value={ password } placeholder="Enter your password" name="password" onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" >Sign In</button> <Link exact to="/register" className="FormField__Link">Not a member?</Link>
              </div>
            </form>
            
          </div>
        );
    }

export default withRouter(Login);