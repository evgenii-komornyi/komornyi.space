import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './experience.styles';

import data from '../../data/cv.json';
import {
    formatDateToString,
    fullExperiencedDate,
} from '../../helpers/dateHelper';

const Experience = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    Experience
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                {data.experience.map(exp => (
                    <div className={classes.job} key={exp.id}>
                        <Typography variant="h3" className={classes.jobTitle}>
                            {exp.job}
                        </Typography>
                        <span className={classes.specification}>
                            {exp.specification}
                        </span>
                        <div className={classes.period}>
                            Period:{' '}
                            <span>
                                {`${formatDateToString(
                                    exp.periodFrom
                                )} - ${formatDateToString(
                                    exp.periodTo
                                )}. (${fullExperiencedDate(
                                    exp.periodFrom,
                                    exp.periodTo
                                )})`}
                            </span>
                        </div>
                        <div className={classes.jobDescription}>
                            <Typography variant="body1">
                                {exp.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </Grid>
        </Grid>
    );
};

export default Experience;
