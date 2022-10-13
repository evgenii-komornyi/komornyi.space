import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './covid.styles';
import WorldStatistic from './worldStatistic.component';
import ByCountryStatistic from './byCountryStatistic.component';

const Covid = () => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={12} sm={12} md={12}>
                <Typography
                    variant="h1"
                    className={classes.title}
                    sx={{ mt: 5 }}
                >
                    Covid statistics
                </Typography>
            </Grid>
            <WorldStatistic />
            <ByCountryStatistic />
        </>
    );
};

export default Covid;
