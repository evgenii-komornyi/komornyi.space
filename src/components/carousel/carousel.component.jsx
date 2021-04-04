import React, { useState } from 'react';

import './carousel.style.sass';

import Slide from './slide.component';

import slides from '../../data/hobbies.json';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { hobbies } = slides;
    const hobbiesLength = hobbies.length;

    const goToSlide = index => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + hobbiesLength) % hobbiesLength);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % hobbiesLength);
    };

    return (
        <>
            <div className="Wrapper">
                <div className="Carousel">
                    <Slide
                        currentIndex={currentIndex}
                        slides={slides}
                        onClick={goToSlide}
                    />
                </div>

                <div className="Buttons">
                    <button onClick={() => prevSlide()}>Previous</button>
                    <button onClick={() => nextSlide()}>Next</button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
