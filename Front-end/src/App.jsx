import React from 'react'
import '../src/App.css'
import NavHeader from './components/NavHeader'
import SecHead from './components/SecHead'
import Banner from './components/Banner'



const App = () => {
  return (
   <div className='TopDiv'>

  <NavHeader/>
    <SecHead/>
     <Banner/>

   </div>
  )
}

export default App
