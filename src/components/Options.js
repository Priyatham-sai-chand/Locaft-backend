import React from 'react';
import '../options.css';

export default function Options() {

    document.addEventListener('DOMContentLoaded', () => {
        const previousBtn = document.getElementById('previousBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        const content = document.getElementById('content');
        const bullets = [...document.querySelectorAll('.bullet')];

        const MAX_STEPS = 4;
        let currentStep = 1;
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                bullets[currentStep - 1].classList.add('completed');
                currentStep += 1;
                previousBtn.disabled = false;
                if (currentStep === MAX_STEPS) {
                    nextBtn.disabled = true;
                    finishBtn.disabled = false;
                }
                content.innerText = `Step Number ${currentStep}`;

            });
        }


        if (previousBtn) {
            previousBtn.addEventListener('click', () => {
                bullets[currentStep - 2].classList.remove('completed');
                currentStep -= 1;
                nextBtn.disabled = false;
                finishBtn.disabled = true;
                if (currentStep === 1) {
                    previousBtn.disabled = true;
                }
                content.innerText = `Step Number ${currentStep}`;
            });
        }

        if (finishBtn) {
            finishBtn.addEventListener('click', () => {
                window.location.reload();
            });
        }

    })

    return (

        <div class="container">
            <div id="stepProgressBar">
                <div class="step">
                    <p class="step-text">About</p>
                    <div class="bullet">1</div>
                </div>
                <div class="step">
                    <p class="step-text">Contact</p>
                    <div class="bullet">2</div>
                </div>
                <div class="step">
                    <p class="step-text">Step 3</p>
                    <div class="bullet">3</div>
                </div>
                <div class="step">
                    <p class="step-text">Step 4</p>
                    <div class="bullet ">4</div>
                </div>
            </div>
            <div id="main">
                <p id="content" class="text-center">Step Number 1</p>
                <button id="previousBtn" >Previous</button>
                <button id="nextBtn">Next</button>
                <button id="finishBtn" >Finish</button>
            </div>
        </div>
    )


}