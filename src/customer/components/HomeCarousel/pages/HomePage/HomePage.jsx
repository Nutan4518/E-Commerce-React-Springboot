import React from "react";
import MainCarousel from "../../MainCarousel";
import HomeSectionCarousel from "../../../HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>    
            <div>
               <HomeSectionCarousel/>
            </div>
        </div>
    )
}

export default HomePage;