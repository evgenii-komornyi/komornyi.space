import React from 'react';

import './carousel.style.sass';

const Slide = ({ currentIndex, slides, onClick }) => {
    const { hobbies } = slides;
    const arrLength = hobbies.length;

    return (
        <>
            {hobbies.map((slide, index) => {
                const classMapper = {
                    [(currentIndex - 2 + arrLength) %
                    arrLength]: 'Carousel-slide--previous',
                    [(currentIndex - 1 + arrLength) %
                    arrLength]: 'Carousel-slide--left',
                    [currentIndex]: 'Carousel-slide--active',
                    [(currentIndex + 1) % arrLength]: 'Carousel-slide--right',
                    [(currentIndex + 2) % arrLength]: 'Carousel-slide--next',
                };

                return (
                    <div
                        key={slide.id}
                        className={`Carousel-slide ${classMapper[index]}`}
                        onClick={() => onClick(index)}
                    >
                        {slide.content && (
                            <div className="content">
                                <div className="title">
                                    {slide.content.title}
                                </div>
                                <div className="description"></div>
                                <div className="link"></div>
                            </div>
                        )}
                        <img src={slide.imageUrl} alt="" />
                    </div>
                );
            })}
        </>
    );
};

export default Slide;
