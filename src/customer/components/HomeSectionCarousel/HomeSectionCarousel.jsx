


// import React, { useState } from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { mens_kurta } from '../../../Data/mens_kurta';
// const HomeSectionCarousel = () => {
//     const [activeIndex, setActiveIndex]=useState(0);
//     const responsive = {
//         0: { items: 1 },
//         720: { items: 3 },
//         1024: { items: 5.5 },
//     };

//     const slidePrev=()=>setActiveIndex(activeIndex-1)
//     const slideNext=()=>setActiveIndex(activeIndex+1)

//     const syncActiveIndex=({item})=>setActiveIndex(item)

//     const items = mens_kurta.map((item) => <HomeSectionCard product={item}/>);
//     return (
//         <div className=' relative border'>
//              <div className='relative p-5'>
//                 <AliceCarousel
//                     items={items}
//                     disableButtonsControls
//                     responsive={responsive}
//                     disableDotsControls
//                     onSlideChanged={syncActiveIndex}
//                     activeIndex={activeIndex}
//                 />
//             </div>

//              {activeIndex!== 0 && <Button
//                     variant="contained"
//                     className="p-10 z-50"
//                     onClick={slidePrev}

//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '0',
//                         backgroundColor: 'white',
//                         '&:hover': {
//                             backgroundColor: 'lightgray',
//                         },
//                         transform:'translateY(-50%) rotate(90deg)',
//                     }}
//                     aria-label="previous"
//                 >
//                     <KeyboardArrowLeftIcon sx={{ transform:"rotate(-90deg)" ,color: "black" }} />
//                 </Button>
//                 }   
           
//            {activeIndex!== items.length-5 && <Button
//                 variant="contained"
//                 className="z-50 bg-white"
//                 onClick={slideNext}
//                 sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     right: '0',
//                     backgroundColor: 'white',
//                     '&:hover': {
//                         backgroundColor: 'lightgray',
//                     },
//                     transform: 'translateX(-50%) rotate(-90deg)',
//                 }}
//                 aria-label="next"
//             >
//                 <KeyboardArrowRightIcon sx={{transform:"rotate(90deg)", color: "black" }} />
//             </Button>}
//         </div>
//     );
// };

// export default HomeSectionCarousel;


// import React, { useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import { Button } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { mens_kurta } from '../../../Data/mens_kurta';

// const HomeSectionCarousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const responsive = {
//         0: { items: 1 },
//         720: { items: 3 },
//         1024: { items: 5.5 },
//     };

//     const slidePrev = () => {
//         // setActiveIndex(activeIndex - 1);
//         setActiveIndex( activeIndex === 0 ? length - 1 : activeIndex - 1 );

//         console.log('Previous Slide:', activeIndex);
//     };

//     const slideNext = () => {
//         // setActiveIndex(activeIndex + 1);

//         setActiveIndex( activeIndex === length - 1 ? 0 : activeIndex + 1 );

//         console.log('Next Slide:', activeIndex);
//     };


//     // const [current, setCurrent] = useState(0);
//     const length = mens_kurta.length;

   

//     const syncActiveIndex = ({ item }) => {
//         console.log('Sync Active Index:', item);
//         setActiveIndex(item);
//     };

//     const items = mens_kurta.map((item, index) => (
//         <div key={index} >
            
//             <HomeSectionCard product={item} />
            
//         </div>
//     ));

//     return (
//         <div className="relative border">
//             <div className="relative p-5">
//                 <AliceCarousel
//                     items={items}
//                     disableButtonsControls
//                     responsive={responsive}
//                     disableDotsControls
//                     onSlideChanged={syncActiveIndex}
//                     activeIndex={activeIndex}
//                     // animationType="fadeout"
//                     // animationDuration={800}
//                 />
//             </div>

//             {activeIndex !== 0 && (
//                 <Button
//                     variant="contained"
//                     className="p-10 z-50"
//                     onClick={slidePrev}
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '0',
//                         backgroundColor: 'white',
//                         '&:hover': {
//                             backgroundColor: 'lightgray',
//                         },
//                         transform: 'translateY(-50%) rotate(-90deg)',
//                     }}
//                     aria-label="previous"
//                 >
//                     <KeyboardArrowLeftIcon sx={{ transform:"rotate(90deg)", color: "black" }} />
//                 </Button>
//             )}

//             {activeIndex !== items.length - 1 && (
//                 <Button
//                     variant="contained"
//                     className="z-50 bg-white"
//                     onClick={slideNext}
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         right: '0',
//                         backgroundColor: 'white',
//                         '&:hover': {
//                             backgroundColor: 'lightgray',
//                         },
//                         transform: 'translateY(-50%) rotate(-90deg)',
//                     }}
//                     aria-label="next"
//                 >
//                     <KeyboardArrowRightIcon sx={{ transform:"rotate(90deg)", color: "black" }} />
//                 </Button>
//             )}
//         </div>
//     );
// };

// export default HomeSectionCarousel;


import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = React.useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
        
    };

    const items = data.map((item, index) => (
        <div key={index} className="border p-2">
            <HomeSectionCard product={item} />
        </div>
    ));

    return (
        <div className="relative border">
            <h2 className='text-2xl font-extrabold'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    animationType="fadeout"
                    animationDuration={800}
                    ref={carouselRef}
                />
            </div>

            <Button
                variant="contained"
                className="p-10 z-50"
                onClick={slidePrev}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    },
                    transform: 'translateY(-50%) rotate(-90deg)',
                }}
                aria-label="previous"
            >
                <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
            </Button>

            <Button
                variant="contained"
                className="z-50 bg-white"
                onClick={slideNext}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '0',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: 'lightgray',
                    },
                    transform: 'translateY(-50%) rotate(-90deg)',
                }}
                aria-label="next"
            >
                <KeyboardArrowRightIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
            </Button>
        </div>
    );
};

export default HomeSectionCarousel;
