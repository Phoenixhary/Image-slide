import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const App = () => {
            const slides = [
                {  url: 'https://source.unsplash.com/random' },
                {  url: 'https://source.unsplash.com/random' },
                {  url: 'https://source.unsplash.com/random' }
            ];

            const [currentIndex, setCurrentIndex] = useState(0);

            const prevSlide = () => {
                const isFirstSlide = currentIndex === 0;
                const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
                setCurrentIndex(newIndex); 
            };

            const nextSlide = () => {
                const islastSlide = currentIndex === slides.length -1;
                const newIndex = islastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            };
    
    return ( 
        <div className="max-w-4xl m-auto h-[580px] py-20 px-6 relative">  
            
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="group w-full h-full rounded-2xl bg-cover bg-center duration-500">

                        {/* Left Navigation arrow */}
                <div className="group-hover:opacity-70 group-hover:bg-transparent group-hover:bg-neutral-500 group-hover:rounded-full absolute top-2/4 left-5 text-white mx-2 opacity-0 cursor-pointer"> 
                <BsChevronCompactLeft  onClick={prevSlide} size={50} /> </div>

                        {/* Right Navigation arrow */}
                <div className="group-hover:opacity-70 group-hover:bg-transparent group-hover:bg-neutral-500 group-hover:rounded-full absolute top-2/4 right-5 text-white mx-2 opacity-0 cursor-pointer"> 
                <BsChevronCompactRight  onClick={nextSlide} size={50} /> </div>
            </div>

        </div>
     );
}
 
export default App;