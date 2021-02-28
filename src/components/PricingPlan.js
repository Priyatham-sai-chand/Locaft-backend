import React, { Component } from 'react';
import '../pricing-plan.css';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from 'styled-components';

const WhiteContainer = styled.div`
    background: white;

`;
const PricingPlanContainer = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const PricingPlan = styled.section`

    background: white;
    width:300px;
    border-radius: 25px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    overflow: hidden;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #555555;
    margin: 15px;

    &:hover &:active {
        box-shadow: 0 0 15px rgba(0,0,0,0.4);
        transform: scale(1.05);


    }
`;
const Text = styled.p`
    font-size: 0.9em;
    text-align: center;
    margin: 0 0 10px 0;
`;
const Currency = styled.p`

    margin: 0;
    text-align: center;
    font-size: 2em;
    color:#000000;


`;
const Title = styled.h1`
    font-size:1.5em;
    font-weight: 400;
`;


const Header = styled.div`

    padding:25px;
    background: #009578;
    color: #ffffff;

`;
const Summary = styled.h2`

    font-size: 1em;
    font-weight: 300;
    `;

const  SpecialText = styled.div`

    padding: 10px;
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    background: #007c64;
    box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
    
    &, ${Title}{
    margin: 0;
    text-align: center;
    font-family: sans-serif;

    }

`;
const Desc = styled.div`

    padding: 25px;

`; 
const List = styled.ul `
    padding: 0; 
    margin: 0;
    text-align: left;
`;

class PricingPlan extends Component {

    render(){
        return(
            <div className="body">
                <NavBar />
                <br />
                <br />
                <br />
                    <h1 style={{'color':'#66bfbf','margin-left':'20px'}}>Pricing Plan</h1>
                <div class='pricing-plan-container'>

                <section class='pricing-plan '>
                    <div class='pricing-plan__header'>
                        <h1 class='pricing-plan__title'>Basic Package</h1>
                        <h2 class='pricing-plan__summary'>For those getting started</h2>

                    </div>
                    <div class='pricing-plan__desc'>
                        <ul class='pricing-plan__list'>
                            <li class='pricing-plan__feature'>Feature #1</li>
                            <li class='pricing-plan__feature'>Feature #2</li>
                            <li class='pricing-plan__feature'>Feature #3</li>
                            <li class='pricing-plan__feature'>Feature #4</li>
                        </ul>
                    </div>
                    < div class='pricing-plan__actions'>
                        <p class='pricing-plan__cost'>$10</p>
                        <p class='pricing-plan__text'>per month</p>
                        <p class='pricing-plan__text'>Minimum spend over 12 months</p>

                    </div>
                </section>
                <section class='pricing-plan pricing-plan--highlighted'>
                    <div class='pricing-plan__special-text'>Recommended</div>
                    <div class='pricing-plan__header'>
                        <h1 class='pricing-plan__title'>Intermediate Package</h1>
                        <h2 class='pricing-plan__summary'>For those getting started</h2>

                    </div>
                    <div class='pricing-plan__desc'>
                        <ul class='pricing-plan__list'>
                            <li class='pricing-plan__feature'>Feature #1</li>
                            <li class='pricing-plan__feature'>Feature #2</li>
                            <li class='pricing-plan__feature'>Feature #3</li>
                            <li class='pricing-plan__feature'>Feature #4</li>
                        </ul>
                    </div>
                    < div class='pricing-plan__actions'>
                        <p class='pricing-plan__cost'>$50</p>
                        <p class='pricing-plan__text'>per month</p>
                        <p class='pricing-plan__text'>Minimum spend over 12 months</p>

                    </div>
                </section>
                <section class='pricing-plan '>
                    <div class='pricing-plan__header'>
                        <h1 class='pricing-plan__title'>Luxury Package</h1>
                        <h2 class='pricing-plan__summary'>For those getting started</h2>

                    </div>
                    <div class='pricing-plan__desc'>
                        <ul class='pricing-plan__list'>
                            <li class='pricing-plan__feature'>Feature #1</li>
                            <li class='pricing-plan__feature'>Feature #2</li>
                            <li class='pricing-plan__feature'>Serv</li>
                            <li class='pricing-plan__feature'>Feng shu consultancy free</li>
                        </ul>
                    </div>
                    < div class='pricing-plan__actions'>
                        <p class='pricing-plan__cost'>$100</p>
                        <p class='pricing-plan__text'>per month</p>
                        <p class='pricing-plan__text'>Minimum spend over 12 months</p>

                    </div>
                </section>


                </div>
                        <a href='./' class='pricing-plan__button'>Purchase</a>
                    <Footer />

                

            </div>

        )
    }

}
export default PricingPlan;