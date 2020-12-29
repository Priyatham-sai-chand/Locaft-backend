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

const ColoredSection = styled.section`  

  background-color:#66bfbf;
  color: #fff;


`;
const WhiteSection = styled.section`
  background:#fff;
`;
const PressSection = styled(ColoredSection)`
  padding-bottom: 3%;

`;
const PressLogo = styled.img`
  width: 18%;
  height: 18%;
  margin: 20px 20px 50px;
`;


const FeatureCol = styled(Col)`
  padding: 4.5%;

`;
const ContainerPadded = styled(Container)`
  padding: 7% 15%;
  font-family: "Montserrat";
  text-align: center;

`;
const BigHeading = styled.h1`
  font-size: 3.5rem;
  line-height: 1.5;
  font-family: "Montserrat-Bold";
  color: white;
`;
const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color:#8f8f8f;
  align-self: center;
          
`;

export default function HomePage() {
  const history = useHistory();

  return (

    <div className="HomePage">
      < NavBar />

      <ColoredSection>

        <ContainerPadded fluid>

          <Row>

            <FeatureCol lg="4">
              <BigHeading>Adapt to a new place easy peasy.</BigHeading>
              <button type="button" onClick={() => {
                history.push("/user/login")
              }} className="btn btn-info login mr-1">Log In</button>

              <button type="button" className="btn btn-info loginb" onClick={() => history.push("/user/register")} >Sign Up</button>

            </FeatureCol>

            <FeatureCol lg="6">
              <img className="title-image" src="/locaft.jpg" alt="locaft-mockup" />
            </FeatureCol>

          </Row>
        </ContainerPadded>
      </ColoredSection>
      <WhiteSection>

        <Container fluid>

          <Row>
            <FeatureCol lg="4">
              <IconCheckCircle />
              <FeatureTitle>Easy to use.</FeatureTitle>
              <p>Get relocated.We'll take care of everything.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconBullseye />
              <FeatureTitle>Efficient</FeatureTitle>
              <p>Get highest number of services for lowest cost possible.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconHeart />
              <FeatureTitle>Relax</FeatureTitle>
              <p>Sit back , we'll do the dirty work.</p>
            </FeatureCol>
          </Row>


        </Container>
      </WhiteSection>
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
      <PressSection>
        <BigHeading>Our Partners</BigHeading>
        <PressLogo src="/indigo.jpg" />
        <PressLogo src="/avasa.jpg" />
        <PressLogo src="/vrl.jpg" />

      </PressSection>
      <WhiteSection>

        <ContainerPadded fluid>

          <Row>
            <FeatureCol lg="4">
              <IconAddressCard />
              <FeatureTitle>About Us</FeatureTitle>
              <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconBullseye />
              <FeatureTitle>Vision</FeatureTitle>
              <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconChartLine />
              <FeatureTitle>Mission</FeatureTitle>
              <p>Getting adapted and familiar to the new place made easy.</p>
            </FeatureCol>
          </Row>
        </ContainerPadded>
      </WhiteSection>



      <ColoredSection>

        <ContainerPadded fluid>

          <BigHeading>Recommend us to your friends !</BigHeading>
          <button className="download-button btn btn-lg btn-dark" type="button"><IconApple /> Download</button>
          &nbsp;
          <button className="download-button btn btn-lg btn-dark" type="button"><IconGooglePlay /> Download</button>
        </ContainerPadded>

      </ColoredSection>

      <Footer />



    </div>








  );
}

