import React from 'react';
import { Grid, Typography } from '@mui/material';

import Filters from './filters/filters.component';

import { Loader } from '../loader/loader.component';

import { useStyles } from './books.styles';
import useBooksStore from '../../app/booksStore';

const Books = () => {
    const classes = useStyles();

    const { books, isLoaded } = useBooksStore();

    return isLoaded ? (
        <Grid container sx={{ mt: 5 }} spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    My Library
                </Typography>
            </Grid>
            <Filters data={books} />
        </Grid>
    ) : (
        <Loader />
    );
};

export default Books;
