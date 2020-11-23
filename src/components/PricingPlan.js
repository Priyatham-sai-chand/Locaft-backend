import React, { Component } from 'react';
import './pricing-plan.css';
import NavBar from './NavBar';

class PricingPlan extends Component {

    render(){
        return(
            <div className="body">
                <NavBar />
                <br />
                <br />
                <br />
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
                        <a href='./' class='pricing-plan__button'>Purchase</a>
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
                        <a href='./' class='pricing-plan__button'>Purchase</a>
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
                            <li class='pricing-plan__feature'>Feature #3</li>
                            <li class='pricing-plan__feature'>Feature #4</li>
                        </ul>
                    </div>
                    < div class='pricing-plan__actions'>
                        <p class='pricing-plan__cost'>$100</p>
                        <p class='pricing-plan__text'>per month</p>
                        <a href='./' class='pricing-plan__button'>Purchase</a>
                        <p class='pricing-plan__text'>Minimum spend over 12 months</p>

                    </div>
                </section>


                </div>

                

            </div>

        )
    }

}
export default PricingPlan;