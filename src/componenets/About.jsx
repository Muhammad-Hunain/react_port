import React from 'react'

import developerActivity from  '../assets/images/developerActivity.59389695.svg' 
// import paragraphPic from ''
export default function About() {
  return (
    <div class="container">
        <div class="row mt-5" id="About">
            <div class="col-md-6 col-sm-12 mt-5  wow bounceInUp" data-wow-delay="0.3s">
                <img src={developerActivity} style={{width:"600px", height: "500px"}} class="img-fluid"
                    alt="Hunain Working">
                   </img>     
            </div>
            <div class="col-md-6 col-sm-12 mt-5 wow bounceInUp ">
                <h1 class="h1 greeting-text text-sm-center fw-bold">What I do</h1>
                <p class="what_paragraph text-center"> CRAZY FORETEND DEVELOPER WHO WANT TO EXPLORE EVERY TECH </p>
                <ul class="text-center what_icon icon_color">
                    <li class="software-skill-inline font-sm-1 text-center"> <i class="fab fa-html5"></i>
                        <p> html-5</p>
                    </li>
                    <li class="software-skill-inline text-center" name="css3"><i class="fab fa-css3-alt"></i>
                        <p>css3</p>
                    </li>
                    <li class="software-skill-inline text-center" name="JavaScript"><i class="fab fa-js"></i>
                        <p>JavaScript</p>
                    </li>
                    <li class="software-skill-inline text-center" name="Bootstrap"><i class="fab fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </li>
                    <li class="software-skill-inline text-center" name="Sass"><i class="fab fa-sass"></i>
                        <p>Sass</p>
                    </li>
                    <li class="software-skill-inline text-center" name="Database"><i class="fas fa-database"></i>
                        <p>MySql-Database</p>
                    </li>
                    <li class="software-skill-inline text-center" name="PHP"><i class="fab fa-php"></i>
                        <p>PHP</p>
                    </li>
                    <li class="software-skill-inline text-center" name="PHP"><i class="fab fa-react"></i>
                        <p>ReactJS</p>
                    </li>
                    <li class="software-skill-inline text-center" name="PHP"><i class="fas fa-database"></i>
                        <p>Firebase-Database</p>
                    </li>
                </ul>

                <p class="what_paragraph">
                    <img alt="⚡" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" class="img-fluid"
                        style={{height: "1em",width: "1em", margin:"0px 0.05em 0px 0.1em",verticalAlign:"-0.1em"}}>
                    </img>
                    Develop highly interactive Front end / User Interfaces for your web Design and Development
                </p>
                <p class="what_paragraph">
                    <img alt="⚡" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" class="imge-fluid"
                         style={{height: "1em",width: "1em", margin:"0px 0.05em 0px 0.1em",verticalAlign:"-0.1em"}}>
                            </img>
                    I am Good in JAVA SCRIPT/PHP/SQL/ReactJS...etc
                </p>
                <p class="what_paragraph">
                    <img alt="⚡" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" class="img-fluid"
                        style={{height: "1em",width: "1em", margin:"0px 0.05em 0px 0.1em",verticalAlign:"-0.1em"}}>
                            </img>
                    Progressive Web Applications ( PWA ) in normal and SPA Stacks
                </p>
                <p class="what_paragraph">
                    <img alt="⚡" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/26a1.png" class="img-fluid"
                         style={{height: "1em",width: "1em", margin:"0px 0.05em 0px 0.1em",verticalAlign:"-0.1em"}}>
                            </img>
                    PSD-HTML
                </p>
                <div class="buttons mt-5 ">
                    <a href="#" class="  button-1">DOWNLOAD RESUME <i class="uil uil-cloud-download  ms-2 fs-4"></i></a>
                    <a href="https://drive.google.com/file/d/1fpp33KfF2vQ5G1TDhhpiOLQMoP_fGKRp/view?usp=sharing"
                        class="  button-1 "> <i class="uil uil-google-drive-alt fs-4 "></i></a>

                </div>
            </div>
        </div>
    </div>
  )
}
