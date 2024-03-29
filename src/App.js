import React from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
