import React, {useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../navbar.css';
import UserContext from "../context/UserContext";
import styled,{ css } from 'styled-components';

const Header = styled.header`

@import url('https://fonts.googleapis.com/css?family=Montserrat|Ubuntu');
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
const ListElement = styled.li`

`;
const Anchor = styled.a`


`;
const List = styled.ul`
  ${Header};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & ${ListElement} {
  position: relative;
  list-style:none;

  }
  & ${ListElement} ${Anchor} {
    position: relative;
    margin: 5px 15px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 500px;
    padding: 3px 0;
    transition: 0.6s;

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

