import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './skills.styles';

import Filter from './filters/filter.component';

const Skills = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" gutterBottom className={classes.title}>
                    Skills
                </Typography>
            </Grid>
            <Filter />
        </Grid>
    );
};

export default Skills;
