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
      header.classList.toggle("sticky", window.scrollY > 1);
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
            <React.Fragment>
            <li><Link onClick={logout}>{userData.user.username}</Link></li>
            <li class="nr_li dd_main">
					<img src="https://i.imgur.com/2QKIaJ5.png" alt="profile_img" />
					
					<div class="dd_menu">
						<div class="dd_left">
							<ul>
								
								<li><i class="fas fa-cog"></i></li>
								<li><i class="fas fa-sign-out-alt"></i></li>
							</ul>
						</div>
						<div class="dd_right">
							<ul>
								
								<li>Settings</li>
								<li>Logout</li>
							</ul>
						</div>
					</div>
				</li>
				<li class="nr_li">
					<i class="fas fa-envelope-open-text"></i>
				</li>
            </React.Fragment>

           
            
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

