import React from 'react';
import '../homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,

} from "react-bootstrap";
import styled from 'styled-components';
import { Apple, GooglePlay } from '@styled-icons/fa-brands';
import {CheckCircle,Heart,AddressCard,ChartLine } from '@styled-icons/fa-solid';
import { Bullseye } from "@styled-icons/fa-solid";
const IconApple = styled(Apple)`

  width: 30px;
  height: 30px;
`;
const IconGooglePlay = styled(GooglePlay)`
  width: 26px;
  height: 26px;
`
const IconCheckCircle = styled(CheckCircle)`
  width: 50px;
  height: 50px;
  color: #66bfbf;
`;
const IconBullseye = styled(Bullseye)`
  width: 50px;
  height: 50px;
  color: #66bfbf;

`;
const IconHeart = styled(Heart)`
  width: 50px;
  height: 50px;
  color: #66bfbf;

`;
const IconAddressCard = styled(AddressCard)`
  width: 50px;
  height: 50px;
  color: #66bfbf;


`;
const IconChartLine = styled(ChartLine)`
  width: 50px;
  height: 50px;
  color: #66bfbf;

`;

const ITag = styled.i`
  

`;
const FeatureBox = styled.div`
  padding: 4.5%;

`;
const ContainerPadded = styled(Container)`
  padding: 7% 15%;
`;
const BigHeading = styled.h1`
  font-family: "Montserrat-Black";
  font-size: 3.5rem;
  line-height: 1.5;
`;
const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color:#8f8f8f;
          
`;

export default function HomePage() {
  const history = useHistory();

  return (

    <div className="HomePage">
      < NavBar />

      <section className="colored-section" id="title">

        <ContainerPadded fluid>

          <Row>

            <Col lg="6">
              <BigHeading>Adapt to a new place easy peasy.</BigHeading>
              <button type="button" onClick={() => {
                history.push("/user/login")
              }} className="btn btn-info login mr-1">Log In</button>

              <button type="button" className="btn btn-info loginb" onClick={() => history.push("/user/register")} >Sign Up</button>

            </Col>

            <Col lg="6">
              <img className="title-image" src="/locaft.jpg" alt="locaft-mockup" />
            </Col>

          </Row>
        </ContainerPadded>
      </section>
      <section className="white-section" id="features">

        <Container fluid>

          <Row>
            <div className="feature-box col-lg-4">
              <IconCheckCircle />
              <FeatureTitle>Easy to use.</FeatureTitle>
              <p>Get relocated.We'll take care of everything.</p>
            </div>

            <div className="feature-box col-lg-4">
              <IconBullseye />
              <FeatureTitle>Efficient</FeatureTitle>
              <p>Get highest number of services for lowest cost possible.</p>
            </div>

            <div className="feature-box col-lg-4">
              <IconHeart />
              <FeatureTitle>Relax</FeatureTitle>
              <p>Sit back , we'll do the dirty work.</p>
            </div>
          </Row>


        </Container>
      </section>
      <section className="colored-section" id="testimonials">

        <div id="testimonial-carousel" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">I had to shift from Bangalore to Hyderabad. Thanks to Locaft , it was easy to know about this place.</h2>
              <em>Mani , Hyderabad</em>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">Relocation took me 3 months previously , but thanks to Locaft , everything was done within 3 days.</h2>
              <em>Nishanth , Bangalore</em>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>

      </section>
      <section className="colored-section" id="press">
        <h3 className="big-heading">Our Partners</h3>
        <img className="press-logo" src="/indigo.jpg" alt="indigo-logo" />
        <img className="press-logo" src="/avasa.jpg" alt="avasa-logo" />
        <img className="press-logo" src="/vrl.jpg" alt="vrl-logo" />

      </section>
      <section className="white-section" id="about-us">

        <div className="container-fluid">

          <div className="row">
            <div className="feature-box col-lg-4">
              <IconAddressCard />
              <FeatureTitle>About Us</FeatureTitle>
              <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </div>

            <div className="feature-box col-lg-4">
              <IconBullseye />
              <FeatureTitle>Vision</FeatureTitle>
              <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </div>

            <div className="feature-box col-lg-4">
              <IconChartLine />
              <FeatureTitle>Mission</FeatureTitle>
              <p>Getting adapted and familiar to the new place made easy.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="colored-section" id="cta">

        <div className="container-fluid">

          <h3 className="big-heading">Recommend us to your friends !</h3>
          <button className="download-button btn btn-lg btn-dark" type="button"><IconApple /> Download</button>
          &nbsp;
          <button className="download-button btn btn-lg btn-dark" type="button"><IconGooglePlay /> Download</button>
        </div>

      </section>

      <Footer />



    </div>








  );
}

