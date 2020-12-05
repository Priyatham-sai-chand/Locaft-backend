import React from 'react';
import './tracking.css';

export default function Tracking() {
    document.addEventListener('DOMContentLoaded', () => {
        const previousBtn = document.getElementById('previousBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        const content = document.getElementById('content');
        const nodes = [...document.querySelectorAll('.node')];
        const dividers = [...document.querySelectorAll('.divider')];

        const MAX_STEPS = 4;
        let currentStep = 1;
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nodes[currentStep - 1].classList.add('completed');
                currentStep += 1;
                previousBtn.disabled = false;
                if (currentStep === MAX_STEPS) {
                    nextBtn.disabled = true;
                    finishBtn.disabled = false;
                }
                content.innerText = `Step Number ${currentStep}`;
                dividers[currentStep -1 ].classList.add('completed');


            });
        }


        if (previousBtn) {
            previousBtn.addEventListener('click', () => {
                nodes[currentStep - 2].classList.remove('completed');
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
        <div class="wrapper">
            <ul class="StepProgressBar">
                <li class="step">
                    <p class="step-text">

                    </p>
                    <div class="node">
                        1
                    </div>
                </li>
                <li><div class="divider"></div></li>
                <li class="step">
                    <p class="step-text">

                    </p>
                    <div class="node">
                        2
                    </div>
                </li>
                <li><div class="divider"></div></li>
                <li class="step">
                    <p class="step-text">

                    </p>
                    <div class="node">
                        3
                    </div>
                </li>
                <li><div class="divider"></div></li>
                <li class="step">
                    <p class="step-text">

                    </p>
                    <div class="node">
                        4
                    </div>
                </li>
                <li><div class="divider"></div></li>
            </ul>
            <div class="main">
                <p id="content" class="text-center">Step Number 1</p>
                <button id="previousBtn" >Previous</button>
                <button id="nextBtn">Next</button>
                <button id="finishBtn" >Finish</button>
            </div>
        </div>

    )
}