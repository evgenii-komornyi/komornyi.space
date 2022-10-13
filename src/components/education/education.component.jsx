import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './education.styles';

import data from '../../data/cv.json';

import Organization from './organization.component';

const Education = () => {
    const classes = useStyles();

    return (
        <Grid sx={{ mt: 5 }} container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    Education
                </Typography>
            </Grid>
            {data.education.map(ed => (
                <Grid key={ed.id} item xs={12} sm={12} md={4} lg={4}>
                    <Organization
                        institution={ed.institution}
                        grade={ed.grade}
                        faculty={ed.faculty}
                        specification={ed.specification}
                        high={ed.high}
                        yearStart={ed.yearStart}
                        yearEnd={ed.yearEnd}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Education;
