import React from 'react';

import { Button } from '@mui/material';
import useJokeStore from '../../app/jokeStore';
import { generateRandomNumber } from '../../helpers/numbers.helper';

export const RandomJokeButton = () => {
    const { jokes, setJoke } = useJokeStore();

    const getNextRandomJoke = () => {
        setJoke(generateRandomNumber(jokes));
    };

    return (
        <Button variant="outlined" onClick={getNextRandomJoke}>
            Next Joke
        </Button>
    );
};
