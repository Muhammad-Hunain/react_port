import React from 'react'
export default function Nav() {
  return ( 
    <div class="container-fluid">
        <header>
            <div class="innerwidth">
                <h1><a href="#" class="logo">
                  Muhammad Hunain
                      </a></h1>
                <i class="menu-toggle-btn fas fa-bars menu-btn"></i>
                <nav class="navigation-menu">
                    <a href="#home"><i class="fas fa-home icon">Home</i></a>
                    <a href="#About"><i class="fas fa-align-left icon">About</i></a>
                    <a href="#Skills"><i class="fab fa-buffer icon">Skills</i></a>
                    <a href="#Porfolio"><i class="fas fa-poll-h icon">Portfolio</i></a>
                    <a href="#connect"><i class="fas fa-link icon">Connect</i></a>
                    <a href="#contact"><i class="fas fa-headset icon">Contact</i></a>

                </nav>
            </div>
        </header>
    </div>
  )



}
