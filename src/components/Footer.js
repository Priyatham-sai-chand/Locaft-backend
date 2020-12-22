import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram  } from "@fortawesome/free-brands-svg-icons";
import  { faEnvelope }  from "@fortawesome/free-solid-svg-icons";
import { 
    Container
} from 'react-bootstrap';

const ContainerPadded = styled(Container)`
  padding: 7% 15%;

`;

const WhiteSection = styled.footer`
    background: ${ props => props.background || "white"};
`;

const FontIcon = styled(FontAwesomeIcon)`
  margin: 20px 10px;

`;

const Footer = (props) => {
    return (
        <WhiteSection>
            <ContainerPadded fluid>
                <FontIcon icon={faFacebook} />
                <FontIcon icon={faTwitter} />
                <FontIcon icon={faInstagram} />
                <FontIcon icon={faEnvelope} />
                
                <p>© Copyright 2020 Locaft</p>
                <p><a href="/tc">Terms and Conditions</a></p>
                <p><a href="/pp">Privacy Policy</a></p>
            </ContainerPadded>
        </WhiteSection>
    )

}
export default Footer;