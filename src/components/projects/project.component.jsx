import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';

import ProjectCard from './projectCard.component';

const Project = ({ projects }) => {
    const studyProjects = projects.filter(project => project.type === 'study');
    const workProjects = projects.filter(project => project.type === 'work');

    return (
        <>
            {studyProjects.length !== 0 && (
                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">For Study</Typography>
                </Grid>
            )}
            {studyProjects.map(project => (
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
            {workProjects.length !== 0 && (
                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5">For Work</Typography>
                </Grid>
            )}
            {workProjects.map(project => (
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

export default memo(Project);
