import React from 'react'
import '../components/style.css'



const ColoumItems = () => {
    const cardData = [
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image1.6522b61d.png', text: 'Sumikko Gurashi Movie Sticker' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image2.e6cac692.png', text: 'Sports day, picnic, at the beach or pool! Rilakkuma Sumikko Gurashi Holiday & Summer Goods 2023' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image3.c90b242e.png', text: 'We have started new patterns this year too ☆ Rilakkuma Sumikko Gurashi Original T-shirt 2023' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image4.99cf4faf.png', text: 'I hope this time never ends Rilakkuma Rilakkuma slumbers with you' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image5.08bf4213.png', text: 'A story about a museum that appears on a moonless night. Sentimental Circus Reminiscence Rabbit and Shingetsu Museum' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image6.312dbcb2.png', text: 'Just looking at it will get you in high spirits♪ Chiquip Dancers Chiquip Dancers Chiquip Restaurant' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image7.815f1116.png', text: 'Released in late July 2023★ Sumikko Gurashi Mysterious Friends' },
      { imageUrl: 'https://sanx-xcrino.vercel.app/_next/static/media/image8.66a3f98d.png', text: 'Cancellation sale ends as soon as it is gone' },
      
    ];
  
    return (
        <>
        <div className='coloumItems'>
        <div className='card-row'>
          {cardData.slice(0, 4).map((card, index) => (
            <div className='coloumCard' key={index}>
              <img src={card.imageUrl} alt={`Card ${index + 1}`} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div className='card-row'>
          {cardData.slice(4).map((card, index) => (
            <div className='coloumCard' key={index}>
              <img src={card.imageUrl} alt={`Card ${index + 5}`} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
        
        
<div className='boxTwo'>

<div className='TwoBoxh'>
  <h4>Featured page/campaign list ▶ </h4>
</div>

</div>

<div className='nextHeadTwo'>
  <h4>Deliver Your "Special"

</h4>

<img src="https://sanx-xcrino.vercel.app/_next/static/media/rilakkumaIcon.1453e012.png" alt="" />
</div>


<div className='bannerTwo'>
<img src="https://sanx-xcrino.vercel.app/_next/static/media/ordermade.31f05289.png" alt="" />
<h4>Name engraving, messages, and limited edition designs</h4>
<p>After receiving your order, we will deliver the original. For yourself or as a gift.</p>
</div>


<div className='singleImg'>
<img src="https://sanx-xcrino.vercel.app/_next/static/media/ranking.bc33a1ad.png" alt="" />
</div>

<div className='nextHeadThree'>
  <h4>Recommendation

</h4>

<img src="https://sanx-xcrino.vercel.app/_next/static/media/icon.f379b79a.png" alt="" />
</div>
        
        </>
      
    );
  };
  

export default ColoumItems
