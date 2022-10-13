import React, { useState } from 'react';
import { Button } from '@mui/material';

import Slide from './slide.component';

import { useStyles } from './carousel.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import slides from '../../data/hobbies.json';

const Carousel = () => {
    const classes = useStyles();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
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

    const touchStartHandler = e => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const touchMoveHandler = e => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const touchEndHandler = () => {
        if (touchStart - touchEnd < -75) prevSlide();
        if (touchStart - touchEnd > 75) nextSlide();
    };

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.carousel}>
                    <Slide
                        currentIndex={currentIndex}
                        slides={slides}
                        onClick={goToSlide}
                        onTouchStart={e => touchStartHandler(e)}
                        onTouchMove={e => touchMoveHandler(e)}
                        onTouchEnd={touchEndHandler}
                    />
                </div>

                <Button
                    className="prev"
                    sx={{ width: 70, height: 70 }}
                    onClick={() => prevSlide()}
                >
                    <FontAwesomeIcon icon={['fas', 'arrow-left']} size="2x" />
                </Button>
                <Button
                    className="next"
                    sx={{ width: 70, height: 70 }}
                    onClick={() => nextSlide()}
                >
                    <FontAwesomeIcon icon={['fas', 'arrow-right']} size="2x" />
                </Button>
            </div>
        </>
    );
};

export default Carousel;
