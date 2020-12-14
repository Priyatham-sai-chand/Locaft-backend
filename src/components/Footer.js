import React from 'react';
import styled from 'styled-components';

const WhiteSection = styled.footer`
    background: #ffffff;
`;
const Container = styled.div`
    

`;


const Footer = () => {
    return (
        <WhiteSection>
            <div className="container-fluid">
                <i className="social-icon fab fa-facebook-f"></i>
                <i className="social-icon fab fa-twitter"></i>
                <i className="social-icon fab fa-instagram"></i>
                <i className="social-icon fas fa-envelope"></i>
                <p>© Copyright 2020 Locaft</p>
                <p><a href="/tc">Terms and Conditions</a></p>
                <p><a href="/pp">Privacy Policy</a></p>
            </div>
        </WhiteSection>
    )

}
export default Footer;