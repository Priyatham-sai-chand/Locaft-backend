import React, {  useContext } from 'react';
import { Link } from "react-router-dom";
import '../navbar.css';
import UserContext from "../context/UserContext";

export default function NavBar() {
  const { userData, setUserData } = useContext(UserContext);
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("navheader");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  });
  return (
    <div className="navbar">
      <header id="navheader">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars" id="btn"></i>
        </label>
        <a href="/" className="logo">locaft</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about-us">About</a></li>
          <li><a href="/#features">Services</a></li>
          <li><a href="/#footer">Contact us</a></li>
          {userData.user ? (
            <li><Link onClick={logout}>{userData.user.username}</Link></li>
          ) : (
              <React.Fragment>
              <li><Link to="/user/register">Register</Link></li>
              <li><Link  to="/user/login">login</Link></li>
              </React.Fragment>
            )}
        </ul>

      </header>
    </div>

  )
}

