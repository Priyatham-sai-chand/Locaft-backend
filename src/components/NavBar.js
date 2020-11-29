import React, { useState, useEffect, Component} from 'react';
import '../navbar.css';
import Axios from "axios";

export default function NavBar() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

      window.addEventListener("scroll", () =>{
        var header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0);

      })
    return(
      <div class="navbar">
        <header>
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars" id="btn"></i>
            </label>


          <a href="/home" class="logo">locaft</a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Log In</a></li>
          </ul>
          
        </header>
      </div>
      
    )
    }

