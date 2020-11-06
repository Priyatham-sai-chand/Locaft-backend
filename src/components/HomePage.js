import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'C:\\Priyathamwork\\locaft\\locaft\\src\\style.css';

class  HomePage extends Component {
  render(){
    return (
      <div className="HomePage">
  <section class="colored-section" id="title">

    <div class="container-fluid">
        
      
      <nav class="navbar navbar-expand-lg navbar-dark">

        <a class="navbar-brand" href="">locaft</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#footer">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#cta">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#login">Sign up or in</a>
            </li>
          </ul>

        </div>
      </nav>



      <div className="row">

        <div className="col-lg-6">
          <h1 class="big-heading">Adapt to a new place easy peasy.</h1>
          <button type="button" class="btn btn-info login">Log In</button>
          <button type="button" class="btn btn-info loginb">Sign Up</button>

        </div>
        <div class="col-lg-6">
          <img class="title-image" src={"C:\\Priyathamwork\\locaft\\locaft\\public\\locaft.png"} alt="locaft-mockup" />
        </div>
        
      </div>
    </div>
  </section>
  <section class="white-section" id="features">

    <div class="container-fluid">

      <div class="row">
        <div class="feature-box col-lg-4">
          <i className="icon fas fa-check-circle fa-4x"></i>
          <h3 class="feature-title">Easy to use.</h3>
          <p>Get relocated.We'll take care of everything.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"></i>
          <h3 class="feature-title">Efficient</h3>
          <p>Get highest number of services for lowest cost possible.</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"></i>
          <h3 class="feature-title">Relax</h3>
          <p>Sit back , we'll do the dirty work.</p>
        </div>
      </div>


    </div>
  </section>
  <section class="colored-section" id="testimonials">

    <div id="testimonial-carousel" class="carousel slide" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active container-fluid">
          <h2 class="testimonial-text">I had to shift from Bangalore to Hyderabad. Thanks to Locaft , it was easy to know about this place.</h2>
          <img class="testimonial-image" src="Images/WhatsApp Image 2020-09-18 at 5.38.53 PM.jpeg" alt="mc-profile" />
          <em>Mani , Hyderabad</em>
        </div>
        <div class="carousel-item container-fluid">
          <h2 class="testimonial-text">Relocation took me 3 months previously , but thanks to Locaft , everything was done within 3 days.</h2>
          <img class="testimonial-image" src="Images/WhatsApp Image 2020-09-18 at 5.38.39 PM.jpeg" alt="nishi-profile" />
          <em>Nishanth , Bangalore</em>
        </div>
      </div>
      <a class="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
      </a>
    </div>

  </section>
  <section class="colored-section" id="press">
    <img class="press-logo" src="Images/download.png" alt="indigo-logo" />
    <img class="press-logo" src="Images/avasa.jpg" alt="avasa-logo" />
    <img class="press-logo" src="Images/download.jpg" alt="vrl-logo" />
    <img class="press-logo" src="Images/nobroker.png" alt="nobroker-logo" />

  </section>
  <section class="white-section" id="about-us">

    <div class="container-fluid">
    
        <div class="row">
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-address-card fa-4x"></i>
                <h2 class="feature-title">About Us</h2>
                <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </div>
    
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-bullseye fa-4x"></i>
                <h2 class="feature-title">Vision</h2>
                <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </div>
    
            <div class="feature-box col-lg-4">
                <i class="icon fas fa-chart-line fa-4x"></i>
                <h2 class="feature-title">Mission</h2>
                <p>Getting adapted and familiar to the new place made easy.</p>
            </div>
        </div>
    </div>
  </section>



  <section class="colored-section" id="cta">

    <div class="container-fluid">

      <h3 class="big-heading">Recommend us to your friends !</h3>
      <button class="download-button btn btn-lg btn-dark" type="button"><i class="fab fa-apple"></i> Download</button>
      <button class="download-button btn btn-lg brn-light" type="button"><i class="fab fa-google-play"></i> Download</button>
    </div>

    <div class="container-fluid">
      <h2>Any comments ?</h2>
      <p>Your comments are what help us improve.</p>
      
    </div>
  </section>


  <footer class="white-section" id="footer">
    <div class="container-fluid">
      <i class="social-icon fab fa-facebook-f"></i>
      <i class="social-icon fab fa-twitter"></i>
      <i class="social-icon fab fa-instagram"></i>
      <i class="social-icon fas fa-envelope"></i>
      <p>© Copyright 2020 Locaft</p>
      <p><a href="/tc">Terms and Conditions</a></p>
      <p><a href="/pp">Privacy Policy</a></p>
    </div>
    </ footer>



        </div>
         





     

    );
  }
}

export default HomePage;