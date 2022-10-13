import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './experience.styles';

import data from '../../data/cv.json';

const Experience = () => {
    const classes = useStyles();

    const yearsDiff = (dateFrom, dateTo) => {
        let dateFromFormatted = new Date(dateFrom);
        let dateToFormatted = new Date(dateTo);
        let yearsDiff =
            dateToFormatted.getFullYear() - dateFromFormatted.getFullYear();

        return yearsDiff;
    };

    const monthsDiff = (dateFrom, dateTo) => {
        let dateFromFormatted = new Date(dateFrom);
        let dateToFormatted = new Date(dateTo);
        let years = yearsDiff(dateFrom, dateTo);
        let months =
            years * 12 +
            (dateToFormatted.getMonth() - dateFromFormatted.getMonth());

        return months;
    };

    const fullExperiencedDate = (dateFrom, dateTo) => {
        const monthsDifference = monthsDiff(dateFrom, dateTo);

        const years = Math.floor(monthsDifference / 12);
        const months = monthsDifference % 12;

        const yearsFormat = `${years} ${years === 1 ? 'year' : 'years'}`;
        const monthsFormat = `${months} ${months === 1 ? 'month' : 'months'}`;

        if (years === 0) {
            return monthsFormat;
        } else if (months === 0) {
            return yearsFormat;
        } else {
            return `${yearsFormat} ${monthsFormat}`;
        }
    };

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
                                {`${exp.periodFrom} - ${
                                    exp.periodTo
                                }. (${fullExperiencedDate(
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
