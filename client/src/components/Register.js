import React, {  useState, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import { Link } from "react-router-dom";
import ErrorNotice from "./ErrorNotice";

 const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username,email,phonenumber,password};
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      return err.response.data.msg && setError(err.response.data.msg);
    }
  };


  return (
    <div className="FormCenter">
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="FormFields" onSubmit={submit}>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="name">UserName</label>
          <input 
          type="text" 
          id="name" 
          className="FormField__Input" 
          placeholder="Enter your full name" 
          onChange= { (e) => setUsername(e.target.value)}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          className="FormField__Input" 
          placeholder="Enter your password"
          onChange= { (e) => setPassword(e.target.value)}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input 
          type="email" 
          id="email" 
          className="FormField__Input" 
          placeholder="Enter your email"
          onChange= { (e) => setEmail(e.target.value)}
          
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="phone">Phone number</label>
          <input 
          type="number" 
          id="phonenumber" 
          className="FormField__Input" 
          placeholder="Enter your Phone no. (+91)"
          onChange= { (e) => setPhonenumber(parseInt( e.target.value,10))}
            />
        </div>

        <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" required="true" /> I agree all statements in <a href="/" className="FormField__TermsLink">terms of service</a>
          </label>
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20" type="submit">Sign Up</button> <Link to="/login" className="FormField__Link">already a member?</Link>
        </div>
      </form>
    </div>
  );
}

export default withRouter( Register );
