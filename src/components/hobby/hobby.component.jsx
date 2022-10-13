import React from 'react';
import { Grid, Typography } from '@mui/material';

import Carousel from '../carousel/carousel.component';

import { useStyles } from './hobby.styles';

const Hobby = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" gutterBottom className={classes.title}>
                    Hobbies
                </Typography>
            </Grid>
            <Carousel />
        </Grid>
    );
};

export default Hobby;
