import React from 'react';

import { Typography } from '@mui/material';
import useJokeStore from '../../app/jokeStore';

export const RandomJoke = () => {
    const { joke } = useJokeStore();

    return <Typography variant="body2">{joke}</Typography>;
};
