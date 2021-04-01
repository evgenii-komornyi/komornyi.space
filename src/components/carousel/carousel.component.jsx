import React, { useState } from 'react';

import './carousel.style.sass';

import Slide from './slide.component';

import slides from '../../data/hobbies.json';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = index => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (currentIndex - 1 + slides.hobbies.length) % slides.hobbies.length
        );
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.hobbies.length);
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
