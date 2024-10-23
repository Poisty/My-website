import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import FrontPage from './pages/FrontPage'
import Programmering from './pages/Programmering'
import NetworkAndSecurity from './pages/NetworkAndSecurity'
import Algoritmer from './pages/Algoritmer'



function App() {

  return (
<Router>
  <Header/>
<Nav/>
  <Routes>
    <Route path="/" element ={
        <>
        <FrontPage />
      </>
    } />
    <Route path="/about" element ={<AboutMe/>} />
    <Route path="/programming" element ={<Programmering/>} />
    <Route path="/network&security" element ={<NetworkAndSecurity/>} />
    <Route path="/algoritmer" element ={<Algoritmer/>} />
  </Routes>
  {/* <THREESpace/> */}
  <Footer/>
</Router>
  )
}

export default App
