import React from 'react'
import '../src/App.css'
import NavHeader from './components/NavHeader'
import SecHead from './components/SecHead'
import Banner from './components/Banner'
import ColoumItems from './components/ColoumItems'
import SlidingCard from './components/SlidingCard'
import Footer from './components/Footer'


const App = () => {
  return (
   <div className='TopDiv'>

  <NavHeader/>
  <SecHead/>
  <Banner/>
  <ColoumItems/>
  <SlidingCard/>
  <Footer/>

  
   </div>
  )
}

export default App
