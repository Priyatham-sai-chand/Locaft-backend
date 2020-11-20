import React from 'react';

const Navbar = () => {

    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1 class="brand-name">Locaft</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/services" activeStyle>services</NavLink>
                    <NavLink to="/contact-us" activeStyle>contact-us</NavLink>
                    <NavLink to="/Users/sign-up" activeStyle>Sign-in</NavLink>
                    
            


                </NavMenu>
            </Nav>
        </>
    )
}