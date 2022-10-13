import React from 'react';

import { CardActionArea, Card, CardContent, CardActions } from '@mui/material';

import { JokesCount } from './jokesCount.component';
import { RandomJoke } from './randomJoke.component';

import { RandomJokeButton } from './randomJokeButton.component';

export const Joke = () => {
    return (
        <Card variant="outlined">
            <CardActionArea sx={{ cursor: 'default' }}>
                <CardContent sx={{ mt: 2, mb: 2 }}>
                    <JokesCount />
                    <RandomJoke />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <RandomJokeButton />
            </CardActions>
        </Card>
    );
};
