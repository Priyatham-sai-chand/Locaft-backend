import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
const SignInForm = () => {
    
        let [data,setData] = useState({
            email: '',
            password: ''
        });

        
    const handleChange = e => {
      
      setData({...data,[e.target.name]: e.target.value});
        
    }
    const submitData = () => {
      console.log(data);
    }

    

    let {email,password} = data;
        return (
          
        <div className="FormCenter">
          <Provider store={store}></Provider>
            <form  className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" value={ email } placeholder="Enter your email" name="email" onChange={(e) => handleChange(e)} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" value={ password } placeholder="Enter your password" name="password" onChange={(e) => handleChange(e)} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={() => submitData()}>Sign In</button> <Link exact to="/sign-up" className="FormField__Link">Not a member?</Link>
              </div>
            </form>
          </div>
        );
    }

export default SignInForm;