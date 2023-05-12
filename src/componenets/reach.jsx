import React from 'react'
import profile from '../assets/images/pic.jpeg'
export default function reach() {
  return (
    <div class="container">

<div class="row reach_out mt-5">
            <div class="col-md-8 col-sm-12 wow bounceInLeft" data-wow-delay="0.3s">
                <h1 class="reach fw-bold fs-1 mt-5">Reach me Out to me</h1>
                <h6 class="mt-3"> DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h6>
                <a href="https://goo.gl/maps/68P2Rukc4dPJyXUGA" target="_blank" class="mt-3"><i
                        class="uil uil-location-pin-alt me-2"></i>
                    Hyderabad,Pakistan
                </a>
                <h6 class="mt-3">Open for opportunities: Yes</h6>
                <div class="icons mt-3 ">
                    <a href=" #" class="icon-button github" target="_blank"><i
                            class="fab fa-github"></i><span></span></a>

                    <a href="#" class="icon-button linkedin" target="_blank"><i
                            class="fab fa-linkedin-in"></i><span></span></a>
                    <a href="#" class="icon-button google" target="_blank"><i
                            class="fab fa-google"></i><span></span></a>
                    <a href="#" class="icon-button gitlab" target="_blank"><i
                            class="fab fa-gitlab"></i><span></span></a>
                    <a href="#" class="icon-button facebook" target="_blank"><i
                            class="fab fa-facebook-f"></i><span></span></a>
                    <a href="#" class="icon-button medium" target="_blank"><i
                            class="fab fa-medium"></i><span></span></a>
                    <a href="#" class="icon-button stack-overflow" target="_blank"><i
                            class="fab fa-stack-overflow"></i><span></span></a>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 mt-5 mb-5 portfolio_pic wow bounceInRight text-sm-center" data-wow-delay="0.3s">
                <img src={profile}  class="img-thumbnail"></img>
            </div>
        </div>

    </div>
  )
}
