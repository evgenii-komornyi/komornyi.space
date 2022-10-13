import React from 'react';

import { Grid, Typography } from '@mui/material';

import { Joke } from './joke.component';

import { useStyles } from './jokes.styles';

const Jokes = () => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mt: 5 }}>
                <Typography variant="h1" className={classes.title}>
                    Jokes
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Joke />
            </Grid>
        </>
    );
};

export default Jokes;
