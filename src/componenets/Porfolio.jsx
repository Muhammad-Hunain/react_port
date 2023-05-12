import React from 'react'
import Project1 from '../assets/images/project1..png'
import Project2 from '../assets/images/screencapture-clickfunel-netlify-app.png'
import Project3 from '../assets/images/project3.png'
import Project4 from '../assets/images/tedx.png'
import Project5 from '../assets/images/Ecommerce.png'
import Project6 from '../assets/images/r10.png'




export default function Porfolio() {
  return (
    <div className="container">
        
        <div class="row mt-5" id="Porfolio">
            <h1 class="protfolio text-center fw-bold fs-4 mt-5">Protfolio</h1>
            <h6 class="text-center ">my design</h6>
            <div class="col-md-4 col-sm-12  mt-5 wow bounceInLeft" data-wow-delay="0.3s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://tour-travels.netlify.app" target="_blank">
                            <img src={Project1} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5 wow bounceInUp" data-wow-delay="0.7s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://clickfunel.netlify.app/" target="_blank">
                            <img src={Project2} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5 wow bounceInRight" data-wow-delay="0.3s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://marketing-moving.netlify.app" target="_blank">
                            <img src={Project3} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-sm-12 mt-5 wow bounceInRight" data-wow-delay="0.3s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://tedx.muet.edu.pk/" target="_blank">
                            <img src={Project4} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>


            <div class="col-md-4 col-sm-12 mt-5 wow bounceInRight" data-wow-delay="0.3s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://www.theconsumeristhub.com" target="_blank">
                            <img src={Project5} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-md-4 col-sm-12 mt-5 wow bounceInRight" data-wow-delay="0.3s">
                <div class="portfolio-website-main">
                    <div class="porfolio-website hide-bg-color">
                        <a href="https://r10.ieee.org/karachi-ies/" target="_blank">
                            <img src={Project6} alt="..." class="img-thumbnail"></img>
                        </a>
                    </div>
                </div>
            </div>






        </div>


    </div>
  )
}
