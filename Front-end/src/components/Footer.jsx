import React from 'react'
import '../components/style.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerText'>
       <h3>Hey we'll bring you best products <br />
signup for that 
</h3>
       <h5>Get the best products from SanX at your doorstep</h5>
       <div className='searchBarFooter'>
        <input type="text" placeholder='Enter email' />
        <button>Subcribe</button>
       </div>

      </div>
      <div className='footerImg'>
        <img src="https://sanx-xcrino.vercel.app/_next/static/media/newsletter-removebg-preview.9f0b1d72.png" alt="" />
      </div>
    </div>
  )
}

export default Footer
