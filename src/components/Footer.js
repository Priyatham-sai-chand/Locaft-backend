import React from 'react';
import styled from 'styled-components';
import { Facebook,Twitter, Instagram } from "@styled-icons/fa-brands";
import { Envelope } from "@styled-icons/fa-solid";

import { 
    Container
} from 'react-bootstrap';

const ContainerPadded = styled(Container)`
  padding: 7% 15%;

`;

const WhiteSection = styled.footer`
    background: ${ props => props.background || "white"};
`;

const FacebookIcon = styled(Facebook)`
    margin: 20px 10px;
    width: 16px;
    height: 16px;
`;
const TwitterIcon = styled(Twitter)`
    margin: 20px 10px;
    width: 16px;
    height: 16px;
`;
const InstagramIcon = styled(Instagram)`
    margin: 20px 10px;
    width: 16px;
    height: 16px;
`;
const EnvelopeIcon = styled(Envelope)`
    margin: 20px 10px;
    width: 16px;
    height: 16px;
`;



const Footer = (props) => {
    return (
        <WhiteSection>
            <ContainerPadded fluid>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <EnvelopeIcon />
                
                <p>© Copyright 2020 Locaft</p>
                <p><a href="/tc">Terms and Conditions</a></p>
                <p><a href="/pp">Privacy Policy</a></p>
            </ContainerPadded>
        </WhiteSection>
    )

}
export default Footer;