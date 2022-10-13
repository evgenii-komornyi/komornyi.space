import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Divider,
} from '@mui/material';

import { useStyles } from './education.styles';

const Organization = ({
    institution,
    grade,
    faculty,
    specification,
    high,
    yearStart,
    yearEnd,
}) => {
    const classes = useStyles();

    return (
        <CardActionArea>
            <Card className={classes.education}>
                <CardContent className={classes.information}>
                    <Typography
                        variant="h6"
                        className={classes.institution}
                        gutterBottom
                    >
                        {institution}
                    </Typography>
                    {high && (
                        <>
                            <Typography
                                variant="body1"
                                className="faculty"
                                gutterBottom
                            >
                                {faculty}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="specification"
                                gutterBottom
                            >
                                {specification}
                            </Typography>
                        </>
                    )}
                    <Divider sx={{ mt: 4, mb: 3 }} />
                    <Typography
                        variant="body1"
                        className={classes.period}
                        gutterBottom
                    >
                        {`${yearStart} - ${yearEnd}`}
                    </Typography>
                    <Typography variant="body1" className="grade" gutterBottom>
                        {grade}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};

export default Organization;
