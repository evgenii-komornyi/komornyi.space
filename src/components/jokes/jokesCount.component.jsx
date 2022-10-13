import React from 'react';
import { Chip } from '@mui/material';
import useJokeStore from '../../app/jokeStore';

export const JokesCount = () => {
    const jokesCount = useJokeStore(state => state.jokes.length);

    return (
        <Chip label={`${jokesCount} jokes`} variant="outlined" sx={{ mb: 2 }} />
    );
};
