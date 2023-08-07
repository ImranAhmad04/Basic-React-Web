import React from 'react'
import Navbar from './Navbar'
// import Body from './Body'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Client from './Client'
export default function Home() {
  return (
    <div id='Home'>
        <Navbar/>
        <About/>
        <Projects/>
        <Client/>
        <Footer/>
    </div>
  )
}