import React from 'react';
// import screenshot_forecast from '../../assets/images/Screenshot-ForecastFilms.jpg';
// import screenshot_gameporium from '../../assets/images/Screenshot-Gameporium.jpg';
// import mountain_image from '../../assets/images/mountain-image.jpg';

export default function Portfolio() {
  return (
<section id="portfolio" class="portfolio-content">
        <h1>Stephanie Anderson</h1>
        <h2>Portfolio</h2>
        <div class="mainContainer">
            <div className = "smallContainer forcastFilms">
              <div>
                <a href="https://git6548.github.io/ForecastFilms/">
                {/* <img src={screenshot_forecast} alt="Forecast Films" /> */}
                Forecast Films Delpoyed Site
                </a>
                <a href="https://github.com/git6548/ForecastFilms">Forecast Films Repo</a>
                </div>
            </div>
            <div class="smallContainer gameporium">
            <div>
                    <a href="https://morning-lowlands-91275.herokuapp.com/">
                    {/* <img src="../assets/images/Screenshot-Gameporium.jpg" alt="Gameporium" /> */}
                   GamePorium Deployed Site
                    </a>
                    <a href=" https://github.com/git6548/Gameporium">Gameporium Repo</a>
                </div>
                </div>
                <div class = "smallContainer project3">
                  <div>
                    <a href="#">
                      Project 3 Deployed Site
                      </a>
                    {/* <img src="./assets/images/mountain-image.jpg" alt="Project 3" /> */}
                    {/* <p>Project 3</p> */}
                    <a href= "#"> Project 3 Repo
                    </a>
                    </div>
                </div>
            </div>

    </section>
  );
}
