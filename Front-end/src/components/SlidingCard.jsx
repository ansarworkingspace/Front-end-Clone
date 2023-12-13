

import React, { useState } from 'react';
import '../components/style.css';

const SlidingCard = () => {
  const images = [
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product1.e9f55362.jpg',
      heading: 'Rilakkuma Tsugaru Vidro Vase (Rilakkuma 20th Anniversary)',
      description: '13,200 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product2.9475f94a.jpg',
      heading: 'Tenori stuffed toy set (Mysterious friend Lizard ',
      description: '2,750 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product3.1fa762bc.jpg',
      heading: 'Tori Pretend Hanging Stuffed Toy',
      description: '1,430 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product4.da234ba4.jpg',
      heading: 'Rilakkuma Tsugaru Vidro Vase (Rilakkuma 20th Anniversary)',
      description: '13,200 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product6.80aea938.jpg',
      heading: 'Tenori stuffed toy set (Mysterious friend Lizard ',
      description: '2,750 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product7.7ccf3816.jpg',
      heading: 'Tori Pretend Hanging Stuffed Toy',
      description: '1,430 yen (tax included)',
    },
    {
      src: 'https://sanx-xcrino.vercel.app/_next/static/media/product9.728d5c59.jpg',
      heading: 'Rilakkuma Tsugaru Vidro Vase (Rilakkuma 20th Anniversary)',
      description: '13,200 yen (tax included)',
    },
  ];

  const tags = ['#newProduct', '#discount', '#trending', '#limitedEdition', '#ProductLaunch', '#MustHave', '#ProductOfTheDay', '#ShopNow', '#NewArrivals', '#LimitedEdition', '#BestSeller', '#GiftIdeas', '#TopPicks', '#DealsAndSteals'];

  const [startIndex, setStartIndex] = useState(0);

  const showPreviousCards = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const showNextCards = () => {
    if (startIndex < images.length - 4) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className='cardShow'>
        <button className='showLeftArrow' onClick={showPreviousCards} style={{ display: startIndex > 0 ? 'block' : 'none' }}>
          &#9664;
        </button>
        <div className='showCard' >
          {images.slice(startIndex, startIndex + 4).map((image, index) => (
            <div className='imgDivv' key={index}>
              <img src={image.src} alt={`Image ${startIndex + index + 1}`} />
              <h4>{image.heading}</h4>
              <p>{image.description}</p>
            </div>
          ))}
        </div>
        <button className='showRightArrow' onClick={showNextCards} style={{ display: startIndex < images.length - 4 ? 'block' : 'none' }}>
          &#9654;
        </button>
      </div>

<div className='nextHeadFour'>
  <h4>Trend Words
</h4>

<img src="https://sanx-xcrino.vercel.app/_next/static/media/trendWords.e87c505b.png" alt="" />
</div>

<div className='hashTags'>
  {tags.map((tag, index) => (
    <div className='tags' key={index}>
      <h4>{tag}</h4>
    </div>
  ))}
</div>


<div className='qa'>
<div className='qaItems'>
    <h4>03/4/2023</h4>
    <h5>Notification of restocking</h5>
    <div className='qaBorder'></div>
</div>
<div className='qaItems'>
    <h4>03/5/2023</h4>
    <h5>Online shop only! Groovy butt dance T-shirt ☆</h5>
    <div className='qaBorder'></div>
</div>
<div className='qaItems'>
    <h4>03/5/2023</h4>
    <h5>Notification of restocking</h5>
    <div className='qaBorder'></div>
</div>

</div>

<div className='boxThree'>

<div className='ThreeBoxh'>
  <h4>For more details, please visit the blog ▶ </h4>
</div>

</div>

    </>
  );
};

export default SlidingCard;
