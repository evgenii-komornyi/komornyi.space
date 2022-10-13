import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

import ProjectCard from './projectCard.component';

import { useStyles } from './projects.styles';
import useProjectsStore from '../../app/projectsStore';

const LastProjects = () => {
    const classes = useStyles();
    const projects = useProjectsStore(state => state.projects);

    const filteredProjects = projects.filter((_, index) => index < 3);

    return (
        <>
            <Grid item xs={8} sm={8} md={10} lg={10} xl={10} sx={{ mt: 5 }}>
                <Typography variant="h1" className={classes.title}>
                    Last projects
                </Typography>
            </Grid>
            <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                xl={2}
                sx={{ mt: 5, textAlign: 'center' }}
            >
                <Button variant="outlined" href="/projects">
                    See all
                </Button>
            </Grid>

            {filteredProjects.map(project => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                    key={project._id}
                >
                    <ProjectCard project={project} />
                </Grid>
            ))}
        </>
    );
};

export default LastProjects;
