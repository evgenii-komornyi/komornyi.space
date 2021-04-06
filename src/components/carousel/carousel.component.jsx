import React, { useState } from 'react';

import './carousel.style.sass';

import Slide from './slide.component';

import { Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

                <Button
                    className="prev"
                    outline
                    color="secondary"
                    onClick={() => prevSlide()}
                >
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} size="2x" />
                </Button>
                <Button
                    className="next"
                    outline
                    color="secondary"
                    onClick={() => nextSlide()}
                >
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} size="2x" />
                </Button>
            </div>
        </>
    );
};

export default Carousel;
