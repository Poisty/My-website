import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/MainContent'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Programmering from './components/Programmering'
import THREESpace from './components/animation/three'



function App() {

  return (
<Router>
  <Header/>
<Nav/>
  <Routes>
    <Route path="/" element ={
        <>
        <Main />
      </>
    } />
    <Route path="/about" element ={<AboutMe/>} />
    <Route path="/programming" element ={<Programmering/>} />
  </Routes>
  {/* <THREESpace/> */}
  <Footer/>
</Router>
  )
}

export default App
