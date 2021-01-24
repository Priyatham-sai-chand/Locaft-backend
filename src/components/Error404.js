import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Body = styled.div`
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,300,500);
background-color: #fff; 
  
  font-size: 100%;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;




`;
const Heading = styled.h1`
  text-align: center;
  color: #000;

  `;
const Error404 = () => {
  return (
   <Body>
     <Heading>Error 404</Heading>

    
      
    </Body>




  );
}
export default Error404;