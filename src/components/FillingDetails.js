import React,{useState} from 'react';

import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';
const Selector = styled.select`

width: 25%;

`;
const Container = styled.div`

    padding: 50px;

`;
const Heading = styled.h1`
    
    
    color: #66bfbf !important;
    
`;

    
const FillingDetails = () => {

    const [foodState, setFoodState] = useState(null);

  return (
      <Container>
          <NavBar></NavBar>
          <br></br>
          <br></br>
          <Heading>Details</Heading>
          <br></br>
          <h1></h1>
          <h1></h1>
    <div>
        Source:&nbsp;&nbsp;    
      <Selector
        className="custom-select"
        value={foodState}
        onChange={(e) => {
          const selectedFood = e.target.value;
          setFoodState(selectedFood);
        }}
      >
        <option value="source1" >source12</option>
        <option value="source2">source2</option>
        <option value="source3">source3</option>
      </Selector>
      <br></br>
      {foodState}
      <br></br>
      <br></br>
      <br></br>
      Destination: &nbsp;&nbsp;
      <Selector
        className="custom-select"
        value={foodState}
        onChange={(e) => {
          const selectedFood = e.target.value;
          setFoodState(selectedFood);
        }}
      >
        <option value="dest1" >dest1</option>
        <option value="dest2">dest2</option>
        <option value="dest3">dest3</option>
      </Selector>
      <br></br>
      {foodState}
    </div>
        <Footer />
      </Container>
  );
}

export default FillingDetails;