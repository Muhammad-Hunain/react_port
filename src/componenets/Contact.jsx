import React from 'react'

export default function Contact() {
  return (
    <div className="container"> 
     <div class="row mt-5 mb-5" id="contact">
    <h1 class="contact_main text-center fw-bold fs-4 mt-5">Contact </h1>
    <h6 class="text-center fs-5 secondary">my address</h6>
    <div class="col-md-6 col-sm-12">
        <div class="contact_num contact mt-5">
            <h4>Contact</h4>
            <a href="tel:03183051200">
                <i title="03183051200" class="uil uil-mobile-android me-2"></i>
                03183051200
            </a>
        </div>
        <div class="email contact">
            <h4>Email</h4>
            <a href="mailto:hunain29.mem@gmail.com">
                <i class="uil uil-at me-2" title="hunain29.mem@gmail.com"></i>
                hunain29.mem@gmail.com
            </a>
        </div>
        <div class="location contact">
            <h4>Location</h4>
            <a href="https://goo.gl/maps/68P2Rukc4dPJyXUGA" target="blank">
                <i class="uil uil-location-pin-alt me-2"></i>
                Flat No 11 2nd Floor Quaid cottage near aisha Masijid
            </a>
        </div>
    </div>

    <div class="col-md-5 col-sm-12 mt-5 ">
        <form>

            <div class="mb-3">
                <input type="name" placeholder="name" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3">
                <input type="email" placeholder="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <textarea class="form-control" placeholder="Comment or Query" id="exampleFormControlTextarea1"
                    rows="3"></textarea>
            </div>
            <div class="submit_div mt-5 ">
                <a class="submit_button">Submit </a>
            </div>

        </form>
    </div>
</div></div>
  )
}
