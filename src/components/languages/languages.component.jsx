import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './languages.styles';

import data from '../../data/cv.json';

import Language from './language.component';

const Languages = () => {
    const classes = useStyles();
    return (
        <Grid container sx={{ mt: 5 }} spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" gutterBottom className={classes.title}>
                    Languages
                </Typography>
            </Grid>

            {data.languages.map(language => (
                <Language language={language} key={language.id} />
            ))}
        </Grid>
    );
};

export default Languages;
