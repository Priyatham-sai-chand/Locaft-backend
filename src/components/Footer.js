import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram } from "@styled-icons/fa-brands";
import { Envelope } from "@styled-icons/fa-solid";
import { StyledIconBase } from '@styled-icons/styled-icon'

import {
    Container
} from 'react-bootstrap';

const ContainerPadded = styled(Container)`
  padding: 7% 15%;
  

`;

const WhiteSection = styled.footer`
    background: ${props => props.background || "white"};
    
`;
const ContainerCentered = styled.div`
    text-align: center;
`;
const IconStyler = styled.div`
  ${StyledIconBase} {
    width: ${props => props.width ? props.width : 26}px;
    height: ${props => props.height ? props.height : 26};
    color: ${props => props.color ? props.color : "white"};

    
  }
  margin: 20px 10px;


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
                <ContainerCentered>
                    <IconStyler color="#66bfbf" width={16} height={16}<Facebook /></IconStyler>
                    <IconStyler color="#66bfbf" width={16} height={16}<Twitter /></IconStyler>
                    <IconStyler color="#66bfbf" width={16} height={16}<Instagram /></IconStyler>
                    <IconStyler color="#66bfbf" width={16} height={16}<Envelope /></IconStyler >
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <EnvelopeIcon />

                    <p>© Copyright 2020 Locaft</p>
                    <p><a href="/tc">Terms and Conditions</a></p>
                    <p><a href="/pp">Privacy Policy</a></p>
                </ContainerCentered >
            </ContainerPadded >
        </WhiteSection >
    )

}
export default Footer;