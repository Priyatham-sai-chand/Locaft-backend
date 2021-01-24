import React from 'react';
import '../homepage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useHistory } from "react-router-dom";
import Lottie from 'react-lottie';
import animationData from '../lottie/plane_gif';
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,

} from "react-bootstrap";
import styled from 'styled-components';
import { Apple, GooglePlay } from '@styled-icons/fa-brands';
import { CheckCircle, Heart, AddressCard, ChartLine } from '@styled-icons/fa-solid';
import { Bullseye } from "@styled-icons/fa-solid";
import { StyledIconBase } from '@styled-icons/styled-icon'

const IconStyler = styled.div`
  ${StyledIconBase} {
    width: ${props => props.width ? props.width : 26}px;
    height: ${props => props.height ? props.height : 26};
    color: ${ props => props.color ? props.color: "white"};

    
  }


`;
const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }; 

const ColoredSection = styled.section`  

  background-color:#66bfbf;
  color: #fff;


`;
const WhiteSection = styled.section`
  background:#fff;
`;
const PressSection = styled(ColoredSection)`
  padding-bottom: 3%;
  align-items:center;

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
  font-size: 5rem;
  line-height: 1.5;
  font-family: "Ubuntu";
  color: white;
  font-weight: bold;
  
`;
const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color:#8f8f8f;
  align-self: center;
          
`;
const TestimonalTitle = styled.h2`
  font-size: 3rem;
  color:#fff;
  line-height: 1.5;
  `;
const SkyScraper = styled.img`
  width: 100vw;
  height: 200px;
`;

export default function HomePage() {
  const history = useHistory();

  return (

    <div className="HomePage">
      <NavBar />

      <ColoredSection>

        <ContainerPadded fluid>

          <Row>

            <FeatureCol lg="6">
              <BigHeading>Adapt to a new place easy peasy.</BigHeading>
              <button type="button" onClick={() => {
                history.push("/user/login")
              }} className="btn btn-info login mr-1">Log In</button>

              <button type="button" className="btn btn-info loginb" onClick={() => history.push("/user/register")} >Sign Up</button>

            </FeatureCol>

            <FeatureCol lg="6">
              
              <Lottie height={500} width={500} options= { defaultOptions } />
            </FeatureCol>

          </Row>
        </ContainerPadded>
      </ColoredSection>
      <WhiteSection>

        <ContainerPadded fluid>

          <Row>
            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><CheckCircle /></IconStyler>
              <br/>
              <FeatureTitle>Easy to use.</FeatureTitle>
              <p>Get relocated.We'll take care of everything.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Bullseye /></IconStyler>
              <br />
           <FeatureTitle>Efficient</FeatureTitle>
              <p>Get highest number of services for lowest cost possible.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Heart /></IconStyler>
              <br />
              <FeatureTitle>Relax</FeatureTitle>
              <p>Sit back , we'll do the dirty work.</p>
            </FeatureCol>
          </Row>


        </ContainerPadded>
      </WhiteSection>
      <ColoredSection>

        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
            </Carousel.Caption>
              <TestimonalTitle>I had to shift from Bangalore to Hyderabad. Thanks to Locaft , it was easy to know about this place.</TestimonalTitle>
              <p>Nishant, Pune</p>
          </Carousel.Item>
          <Carousel.Item >
            <Carousel.Caption>
            </Carousel.Caption>
              <h3>Relocation took me 3 months previously , but thanks to Locaft , everything was done within 3 days.</h3>
              <p>Mani, Hyderabad</p>
          </Carousel.Item>

        </Carousel>

      </ColoredSection>
      <PressSection>
        <ContainerPadded fluid>

          <BigHeading>Our Partners</BigHeading>
          <PressLogo src="/indigo_optimized.jpg" alt="indigo-brand" />
          <PressLogo src="/avasa_optmized.jpg" alt="avassa-brand" />
          <PressLogo src="/vrl_optmized.jpg" alt="vrl-brand" />

        </ContainerPadded>
      </PressSection>
      <WhiteSection>

        <ContainerPadded fluid>

          <Row>
            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><AddressCard /></IconStyler>
              <br />
              <FeatureTitle>About Us</FeatureTitle>
              <p>Adapting to a new place is always hard in any phase of life. We aim to make it easy. </p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><Bullseye /></IconStyler>
              <br />
              <FeatureTitle>Vision</FeatureTitle>
              <p>Bringing all the basic amenities to the new place before your arrival.</p>
            </FeatureCol>

            <FeatureCol lg="4">
              <IconStyler color="#66bfbf" width={50} height={50}><ChartLine /></IconStyler>
              < br/>
              <FeatureTitle>Mission</FeatureTitle>
              <p>Getting adapted and familiar to the new place made easy.</p>
            </FeatureCol>
          </Row>
        </ContainerPadded>
      </WhiteSection>



      <ColoredSection>

        <ContainerPadded fluid>

          <BigHeading>Recommend us to your friends !</BigHeading>
          <button className="download-button btn btn-lg btn-dark" type="button"><IconStyler width={30} height={30}><Apple />Download</IconStyler></button>
          &nbsp;
          <button className="download-button btn btn-lg btn-dark" type="button"><IconStyler><GooglePlay /> Download</IconStyler></button>
        </ContainerPadded>

      </ColoredSection>

      <Footer />



    </div>








  );
}

