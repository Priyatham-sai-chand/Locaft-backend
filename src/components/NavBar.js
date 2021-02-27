import React, {useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../navbar.css';
import UserContext from "../context/UserContext";
import styled,{ css } from 'styled-components';

const Header = styled.header`
  background: #66bfbf;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 10px 15px;
  z-index: 100000;
  font-family: Ubuntu;

  ${ props => props.sticky ? css`
  ${Header};
  padding: 3px 45px;
  min-height: 6vh;
  opacity: 0.85;
  display: fixed;
  `:css``};

  
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


export default function NavBar() {
  const { userData, setUserData } = useContext(UserContext);
  
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  
  
    const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })


  
  return (
    <div className="navbar">
      <Header sticky = {scrolled} >
        <input type="checkbox" id="check" />
       
        <a href="/" className="logo">locaft</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about-us">About</a></li>
          <li><a href="/#features">Services</a></li>
          <li><a href="/#footer">Contact us</a></li>
          {userData.user ? (
            <React.Fragment>
            <li><Link onClick={logout}>{userData.user.username}</Link></li>
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

