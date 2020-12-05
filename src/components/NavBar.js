import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import '../navbar.css';
import Axios from "axios";
import UserContext from "../context/UserContext";

export default function NavBar() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/user/register");
  const login = () => history.push("/home");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

  })
  return (
    <div class="navbar">
      <header>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars" id="btn"></i>
        </label>


        <a href="/home" class="logo">locaft</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#" onClick={logout}>Log Out</a></li>
          {userData.user ? (
            <li><a href="#" onClick={logout}>Log Out</a></li>
          ) : (
              <React.Fragment>
              <li><a href="#" onclick={register}>Register</a></li>
              <li><a  href="#" onclick={login}>login</a></li>
              </React.Fragment>
            )}
        </ul>

      </header>
    </div>

  )
}

