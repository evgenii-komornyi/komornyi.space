import React from 'react';
import { Grid, Typography } from '@mui/material';

import { Loader } from '../loader/loader.component';

import { useStyles } from './projects.styles';

import Filter from './filters/filter.component';
import useProjectsStore from '../../app/projectsStore';

const Projects = () => {
    const classes = useStyles();

    const isLoaded = useProjectsStore(state => state.isLoaded);

    return (
        <>
            {isLoaded ? (
                <Grid
                    container
                    sx={{ mt: 5 }}
                    spacing={2}
                    justifyItems="center"
                >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography
                            variant="h1"
                            gutterBottom
                            className={classes.title}
                        >
                            Projects
                        </Typography>
                    </Grid>
                    <Filter />
                </Grid>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Projects;
