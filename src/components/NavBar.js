import React, {Component} from 'react';
import '../navbar.css';

class  NavBar extends Component {

    render(){
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
            <li><a href="#">Log In</a></li>
          </ul>
          
        </header>
      </div>
      
    )
    }
}
export default NavBar;