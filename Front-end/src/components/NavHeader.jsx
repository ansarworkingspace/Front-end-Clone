import React from 'react'
import '../components/style.css'
import { Image } from 'react-bootstrap';


const NavHeader = () => {
    return (
        <>
        
        <div className='navTop'>
        <div className='truck'>
        <Image
          className='truImg'
          src='/src/assets/NavTruck.png'
          alt='Truck Icon'
          fluid
        />
        </div>
        <h3 className='navText'>Track Order</h3>
        <div className='centerText'>
        <Image className='cenNavImg' src='/src/assets/navCenTex.png' alt='Center Icon' fluid />
  <Image className='cenNavImg' src='/src/assets/navCenTex.png' alt='Center Icon' fluid />
        </div>
        <h3 className='navText2'>Click here for details</h3>
      </div>
        
      <div className='afterNav'>
        <div className='leftImg'>
        <Image
        
          src='https://sanx-xcrino.vercel.app/_next/static/media/nav_logo.ede89419.png'
          alt='Center Icon'
          fluid
        />

        </div>
        <div className='searchItems'>
            <div><input type="text" placeholder='Keyword Search' style={{border:"none",fontSize:"14px",fontWeight:"600",backgroundColor:"#fdf6f8cc"}}/></div>
            <div className='detailSer'><h4>Detailed Search</h4></div>
            <div>
            <Image
          style={{width:"32px",marginTop:"5px"}}
        src='https://sanx-xcrino.vercel.app/_next/static/media/search.46f15889.png'
        alt='Center Icon'
        fluid
      />
            </div>
        </div>




<div className='optionItems'>
  <div className='login'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/login.c4ffeac2.png" alt="" />
    <h4>Login/Register</h4>
  </div>
  <div className='fav'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/favorite.155a9773.png" alt="" />
    <h4>Favorate</h4>
  </div>
  <div className='cart'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/cart.ad089a78.png" alt="" />
    <h4>Cart</h4>
  </div>
  <img src="https://sanx-xcrino.vercel.app/_next/static/media/hamburger.5ac08a54.png" alt="" />
</div>



      </div>



        </>
     
    );
  }
  
  export default NavHeader;
