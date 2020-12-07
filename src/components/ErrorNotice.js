import React from "react";
import styled from 'styled-components';


export default function ErrorNotice(props) {
  const ErrorNotice = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #e07c7c;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8d6d6;
`;
  const ErrorMessage = styled.div`
color: #000000;
`;

  const ErrorButton = styled.button
    `
  width: 17px;
  height: 28px;
  display:flex;
  background-color: #df4343;
  color: #ffffff;
`;
  return (
    <ErrorNotice>
      <ErrorMessage>{props.message}</ErrorMessage>
      <ErrorButton onClick={props.clearError}>x</ErrorButton>
    </ErrorNotice>
  );
}