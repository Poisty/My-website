import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

 <Header/>
<Nav/>
<Main/>
<Footer/>
  

 

    </>
  )
}

export default App
