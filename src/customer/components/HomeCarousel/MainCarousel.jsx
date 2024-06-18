import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
// className="object-cover object-top w-full h-full"

const MainCarousel = () => {
    const items=mainCarouselData.map((item)=><img  className='cursor-pointer block mx-auto object-cover'
        role='presentation' src={item.image} alt=""/>) ;
    
    return (
        <AliceCarousel
         items={items}
         disableButtonsControls
         autoPlay
         autoPlayInterval={2000}
         infinite
         />
    )
};


export default MainCarousel;