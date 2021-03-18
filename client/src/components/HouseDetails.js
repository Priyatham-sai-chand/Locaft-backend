import React from 'react';

const HouseDetails = (props) => {
    
   const contin = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  const {values, handleChange} = props;
  
}