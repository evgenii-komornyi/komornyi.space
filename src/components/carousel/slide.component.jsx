import React from 'react';
import { Button } from 'reactstrap';
import './carousel.style.sass';

const Slide = ({ currentIndex, slides, onClick }) => {
    const { hobbies } = slides;
    const arrLength = hobbies.length;
    console.log(arrLength);

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
                        className={`Carousel-slide ${
                            typeof classMapper[index] !== 'undefined'
                                ? classMapper[index]
                                : 'hidden'
                        }`}
                        onClick={() => onClick(index)}
                    >
                        <img src={slide.imageUrl} alt="" />
                        {slide.content &&
                            slide.content.map((ctnt, index) => (
                                <div className="content" key={index}>
                                    <h2 className="title">{ctnt.title}</h2>
                                    {ctnt.description && (
                                        <p className="description">
                                            {ctnt.description}
                                        </p>
                                    )}
                                    {ctnt.linkUrl && (
                                        <div className="link">
                                            <Button
                                                color="secondary"
                                                outline
                                                href={ctnt.linkUrl}
                                            >
                                                {ctnt.linkText}
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                );
            })}
        </>
    );
};

export default Slide;
