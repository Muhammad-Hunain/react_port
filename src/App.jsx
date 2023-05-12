import React from 'react'
import Nav from './componenets/nav.jsx'
import Home from './componenets/home.jsx'
import About from './componenets/About.jsx'
import Skill from './componenets/Skills.jsx'
import Education from './componenets/Education.jsx'
import Porfolio from './componenets/Porfolio.jsx'
import I_am_on from './componenets/I_am_on.jsx'
import Contact from './componenets/Contact.jsx'
import Reach from './componenets/reach.jsx'
import Button_top from './componenets/button_top.jsx'
import Dark_mode from './componenets/dark_mode.jsx'
import '../src/css/Portfolio.css'


export default function App() {
  return (
    <div>
    <Nav/>
    <Home/>
    <About/>
    <Skill/>
    <Education/>
    <Porfolio/>
    <I_am_on/>
    <Contact/>
    <Reach/>
    <Button_top/>
    <Dark_mode/>
    
     </div>
  )
}
