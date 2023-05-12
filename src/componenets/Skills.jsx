import React from 'react'

export default function Skills() {
  return (
    <div className="container">
    <div class="row mt-5" id="Skills">
    <h1 class="h1 greeting-text text-center">Skills</h1>
    <h6 class="text-center">my technology level</h6>
    <div class="col-md-6 col-sm-12 mt-5">
        <div class="web-design">
            <a class="btn btn-primary d-flex justify-content-center align-items-center "
                data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false"
                aria-controls="collapseExample" style={{fontSize: "25px"}}>
                    
                <i class="uil uil-brackets-curly me-2  dropDown-text"></i>
                <h6 class="text-center fw-bold m-3">FRONTEND DEVELOPMENT</h6>
                <i class="fas fa-chevron-down  icon-1 ms-3 dropDown-text"></i>
            </a>
        </div>
        <div class="collapse bar" id="collapseExample1">
            <div class="skill-proficiency">
                <p>HTML</p>
                <div class="progress ">
                    <div class="progress-bar " role="progressbar" style={{width: "90%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
                <p>CSS</p>

                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "70%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>

                <p>JavaScript</p>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
                <p>BOOTSRAP</p>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "80%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <p>SASS</p>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "60%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
                <p>PSD-HTML</p>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "80%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <p>J-query</p>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "30%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>

                <p>REACTJS</p>
                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "30%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
            </div>
        </div>
    </div>


    <div class="col-md-6 col-sm-12 mt-5">
        <div class="back-end">
            <a class="btn btn-primary d-flex justify-content-center align-items-center "
                data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
                aria-controls="collapseExample2" style={{fontSize: "25px"}}>
                <i class="uil uil-database dropDown-text"></i>
                <h6 class="text-center fw-bold m-3">BACKEND DEVELOPMENT</h6>
                <i class="fas fa-chevron-down  icon-2 ms-3 dropDown-text"></i>
            </a>
        </div>
        <div class="collapse  bar" id="collapseExample2">

            <div class="skill-proficiency">
                <p>PHP</p>
                <div class="progress ">
                    <div class="progress-bar " role="progressbar" style={{width: "30%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
                <p>MY SQL</p>

                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{width: "30%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
                
                <p>FIRE BASE</p>

                <div class="progress">
                    <div class="progress-bar " role="progressbar"style={{width: "50%"}} aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</div>
)
}
