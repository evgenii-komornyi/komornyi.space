import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './projects.styles';

import Filter from './filters/filter.component';

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }} spacing={2} justifyItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h1" gutterBottom className={classes.title}>
                    Projects
                </Typography>
            </Grid>
            <Filter />
        </Grid>
    );
};

export default memo(Projects);
