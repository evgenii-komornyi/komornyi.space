import React from 'react';
import { Grid, Typography } from '@mui/material';

import data from '../../data/cv.json';

import Course from './course.component';

import { useStyles } from './courses.styles';

const Courses = () => {
    const classes = useStyles();
    return (
        <Grid sx={{ mt: 5 }} container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    Courses
                </Typography>
            </Grid>
            {data.courses.map(course => (
                <Grid key={course.id} item xs={12} sm={12} md={3} lg={3}>
                    <Course
                        id={course.id}
                        course={course.course}
                        institution={course.institution}
                        year={course.year}
                        certificate={course.certificate}
                        progress={course.progress}
                        progressValue={course.progressValue}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Courses;
