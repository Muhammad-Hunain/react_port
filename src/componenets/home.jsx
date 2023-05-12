import React, { useEffect } from 'react'
import manOnTable from '../assets/images/manOnTable.52be3144.svg'

export default function Home() {

  
    return (

    <div class="container" id="home">
        <div class="row mt-5">
            <div class="col-md-6 col-sm-12 orders-1 wow bounceInUp ">
                <p class="h1 greeting-text fw-bold">Hi all, I'm Muhammad Hunain
                    <img class="wave-emoji img-fluid" alt="👋" draggable="false"
                        src={manOnTable}
                        style={{height: "1em",width: "1em", margin:"0px 0.05em 0px 0.1em",verticalAlign:"-0.1em"}}>
                     </img>
                </p>
                <p style={{fontSize: "25px",color: "gray", clear:" both"}}>
                    A passionate Frontend Developer having a Experience Of building Web and Mobile Development with Html/css/Bootstrap/javaScript Database and some other cool libaries and
                    framework.Team-leading knowledge.For me, the problem comes first and technology second.
                </p>
                <div class="icons">
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
                <div class="buttons mt-5 ">
                    <a href="#connect" class="button-1">CONTACT ME <i class="uil uil-expand-from-corner fs-4 ms-2"></i></a>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 orders-2 wow fadeInUp " data-wow-delay="0.3s">
                <img src={manOnTable} class="img-fluid" style={{width:"600px", height: "500px"}}
                    alt="Hunain sitting on table">
                </img>       
            </div>
        </div>
</div>
  )
}
