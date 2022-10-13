import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
    Typography,
} from '@mui/material';

import { useStyles } from './carousel.styles';

const Slide = ({
    currentIndex,
    slides,
    onClick,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
}) => {
    const classes = useStyles();

    const { hobbies } = slides;
    const arrLength = hobbies.length;

    return (
        <>
            {hobbies.map((slide, index) => {
                const classMapper = {
                    [(currentIndex - 2 + arrLength) % arrLength]:
                        classes.carouselSlidePrevious,
                    [(currentIndex - 1 + arrLength) % arrLength]:
                        classes.carouselSlideLeft,
                    [currentIndex]: classes.carouselSlideActive,
                    [(currentIndex + 1) % arrLength]:
                        classes.carouselSlideRight,
                    [(currentIndex + 2) % arrLength]: classes.carouselSlideNext,
                };

                return (
                    <div
                        key={slide.id}
                        className={`${classes.carouselSlide} ${
                            typeof classMapper[index] !== 'undefined'
                                ? classMapper[index]
                                : 'hidden'
                        }`}
                        onClick={() => onClick(index)}
                    >
                        <Card>
                            <CardMedia
                                component="img"
                                image={
                                    process.env.REACT_APP_HOBBY_IMAGES +
                                    slide.imageUrl
                                }
                                alt="Image"
                                onTouchStart={e => onTouchStart(e)}
                                onTouchMove={e => onTouchMove(e)}
                                onTouchEnd={() => onTouchEnd()}
                            />
                            {slide.content &&
                                slide.content.map((ctnt, index) => (
                                    <CardContent
                                        className="content"
                                        key={index}
                                    >
                                        <Typography
                                            variant="h5"
                                            className="title"
                                        >
                                            {ctnt.title}
                                        </Typography>
                                        {ctnt.description && (
                                            <Typography
                                                variant="body1"
                                                className="description"
                                            >
                                                {ctnt.description}
                                            </Typography>
                                        )}
                                        {ctnt.linkUrl && (
                                            <CardActions>
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        mr: 'auto',
                                                        ml: 'auto',
                                                    }}
                                                    href={ctnt.linkUrl}
                                                >
                                                    {ctnt.linkText}
                                                </Button>
                                            </CardActions>
                                        )}
                                    </CardContent>
                                ))}
                        </Card>
                    </div>
                );
            })}
        </>
    );
};

export default Slide;
