import React, {  useState,useContext, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import '../navbar.css';
import UserContext from "../context/UserContext";
import styled,{ css } from 'styled-components';

const Header = styled.header`
  background: #66bfbf;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.6s;
  padding: 10px 15px;
  z-index: 100000;
  font-family: Ubuntu;

  ${ props => props.sticky && css`
  padding: 3px 50px;
  background: red;
  opacity: 0.85;
  `}

  
   & .logo {
  font-family: "Ubuntu";
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  color: #fff;
  text-decoration: none;
  text-transform: lowercase;
  padding-left: 100px;
  transition: 0.6s;

   }
`;
const List = styled.ul`
  ${Header};
  & li {
  position: relative;
  list-style:none;

  }
  

`;

const RefCallback = () => {

  const HeaderRef = useRef(null);
  const setRef = useCallback(node => {
    if(HeaderRef.current){

    }
    if( node ){
      node.addEventListener()


    }
  })
}
export default function NavBar() {
  const { userData, setUserData } = useContext(UserContext);
  const [ isSticky, setSticky ] = useState(false);
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  
  
    window.addEventListener("scroll", () => {
      //header.classList.toggle("sticky", window.scrollY > 1);
      if(window.scrollY > 1){
        setSticky(isSticky => !isSticky);
        console.log(isSticky);
      }
    });
  
  return (
    <div className="navbar">
      <Header sticky = {isSticky} >
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

      </Header>
    </div>

  )
}

