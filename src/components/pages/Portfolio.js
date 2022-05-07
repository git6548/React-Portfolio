import React from 'react';

export default function Portfolio() {
  return (
<section id="portfolio" class="portfolio-content">
        <h1>Stephanie Anderson</h1>
        <h2>Portfolio</h2>
        <div class="mainContainer">
            <div class = "smallContainer">
                <a href="https://git6548.github.io/run-buddy">
                <img src="./assets/images/run-buddy.jpg" alt="Run Buddy" />
                <p>Run Buddy Project</p>
                </a>
            </div>
            <div class="smallContainer">
                    <a href="https://git6548.github.io/homework1/">
                    <img src="./assets/images/Horiseon.jpg" alt="Horiseon" />
                    <p>Horiseon</p>
                </a>
                </div>
                <div class = "smallContainer">
                    <a href="#">
                    <img src="./assets/images/mountain-image.jpg" alt="Project 3" />
                    <p>Project 3</p>
                    </a>
                </div>
                <div class = "smallContainer">
                    <a href="#">
                    <img src="./assets/images/mountain-image.jpg" alt="Project 3" />
                    <p>Project 4</p>
                    </a>
                </div>
            </div>

    </section>
  );
}
