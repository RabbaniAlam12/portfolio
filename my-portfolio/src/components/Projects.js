import React from 'react'
import imdbPicture from '../pictures/imdb.png'
// import flightPicture from '../pictures/flight.png'
import moreProjectPicture from '../pictures/comingSoon.png'
import thisPortfolio from '../pictures/thisPortfolio.png'

export const Projects = () => {
  return (
    <div className='project-container'>
        <div className='projectHeading'>
            <h2>Projects</h2>
        </div>
            <div className='project-caption'>
                <p>If you're interested in checking out more of my projects, feel free to visit my GitHub page where I have several more projects available for viewing. Please note that the projects displayed on this page are only a few examples of what I've worked on, so be sure to check out my <a href='https://github.com/RabbaniAlam12?tab=repositories' target='_blank'>GitHub</a> to see even more! You can also click on the projects below to see their code in GitHub.</p>
            </div>
            <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>


                    {/* The next button needs to be included if you want to add another carousel. */}
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */} 
                    </div>
                <div class="carousel-inner">
                    <a href="https://github.com/RabbaniAlam12/portfolio" target='_blank'>
                        <div class="carousel-item active">
                            <img src={thisPortfolio} class="d-block w-100 carouselPicture" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>This Porfolio</h5>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/RabbaniAlam12/TheImdbProject" target='_blank'>
                        <div class="carousel-item ">
                            <img src={imdbPicture} class="d-block w-100 carouselPicture" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>The Imdb Project</h5>
                            </div>
                        </div>
                    </a>
                <div class="carousel-item">
                    <img src={moreProjectPicture} class="d-block w-100 carouselPicture" alt="..."/>
                </div>
                    {/* <div class="carousel-item">
                        <img src={flightPicture} class="d-block w-100 carouselPicture" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}
