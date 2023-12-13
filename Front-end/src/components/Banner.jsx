// import React, { useState } from 'react';
// import '../components/style.css'; // Import your global styles if needed
// import { Image } from 'react-bootstrap';

// const Banner = () => {
//   const images = [
//     'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg7.05c234e3.png',
//     'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg2.c78991c2.png',
//     'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg8.b02c4795.png',
//     'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg3.328c8364.png',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
    
//     <div className='bannerDiv'>
//       <div className='slider'>
//         <button className='arrow left-arrow' onClick={prevSlide}>
//           &#9664;
//         </button>
//         <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
//         <button className='arrow right-arrow' onClick={nextSlide}>
//           &#9654;
//         </button>
//       </div>
//     </div>


//     <div className='afterBanner'>

//     </div>
    
//     </>

//   );
// };

// export default Banner;




import React, { useState, useEffect } from 'react';
import '../components/style.css'; // Import your global styles if needed
import { Image } from 'react-bootstrap';

const Banner = () => {
  const images = [
    'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg10.2c381484.png',
    'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg2.c78991c2.png',
    'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg8.b02c4795.png',
    'https://sanx-xcrino.vercel.app/_next/static/media/sliderImg3.328c8364.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Use setInterval to automatically change the slide every 3 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <>
      <div className='bannerDiv'>
        <div className='slider'>
          <button className='arrow left-arrow' onClick={prevSlide}>
            &#9664;
          </button>
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button className='arrow right-arrow' onClick={nextSlide}>
            &#9654;
          </button>
        </div>
      </div>

      <div className='afterBanner'>
  <div className='custom-card'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/best-price2.c23668fb.png" alt="Card Image 1" />
    <h4>Card Title 1</h4>
    <p>This is the content of Card 1.</p>
  </div>

  <div className='custom-card'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/best-delivery2.71da78ea.png" alt="Card Image 2" />
    <h4>Card Title 2</h4>
    <p>This is the content of Card 2.</p>
  </div>

  <div className='custom-card'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/great-deals2.b3a2d976.png" alt="Card Image 3" />
    <h4>Card Title 3</h4>
    <p>This is the content of Card 3.</p>
  </div>

  <div className='custom-card'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/assortments2.81e82459.png" alt="Card Image 4" />
    <h4>Card Title 4</h4>
    <p>This is the content of Card 4.</p>
  </div>

  <div className='custom-card'>
    <img src="https://sanx-xcrino.vercel.app/_next/static/media/easy-returns2.08a36928.png" alt="Card Image 5" />
    <h4>Card Title 5</h4>
    <p>This is the content of Card 5.</p>
  </div>
</div>


<div style={{height:"10rem"}}></div>

    </>
  );
};

export default Banner;
