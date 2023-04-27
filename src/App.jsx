import React from 'react'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import Howtobuild from './components/Howtobuild'
import Price from './components/Price'
import PriceCom from './components/PriceCom'
import ComHonder from './components/ComHonder'
import Faq from './components/Faq'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
        <Nav/>
        <HomePage/>
        <AboutUs/>
        <Howtobuild/>
        <Price/>
        <ComHonder/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default App