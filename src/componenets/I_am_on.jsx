import React from 'react'
import Skill from '../assets/images/skill.34409398.svg'

export default function I_am_on() {
  return (
    <div class="container">
        <div class="row hide-bg-color mt-5" id="connect">
    <h1 class="follow text-center fw-bold fs-4 mt-5">i am on </h1>
    <h6 class="text-center fs-5 secondary">follow me on</h6>
    <div class="col-md-6 col-sm-12">
        <img src={Skill} class="img-fluid" alt="..."></img>
    </div>
    <div class="col-md-6 col-sm-12 mt-5 mb-5 follow_on">
        <a href="https://www.facebook.com/hunain29" target="_blank">
            <i class="uil uil-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/hunain29.mem/?hl=en" target="_blank">
            <i class="uil uil-instagram ms-2"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCcTDnneLrUemt743E10bUkQ" target="_blank">
            <i class="uil uil-youtube ms-3"></i>
        </a>
    </div>
</div>
</div>
  )
}
