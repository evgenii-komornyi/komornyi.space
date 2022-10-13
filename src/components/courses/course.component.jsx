import React, { useState } from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    LinearProgress,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './courses.styles';

const baseImgUrl = 'https://komornyi.space/static/img/certificates/';

const Course = ({ course, progress, progressValue, certificate }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CardActionArea>
                <Card
                    className={classes.course}
                    sx={{ textAlign: 'center' }}
                    onClick={handleClickOpen}
                >
                    <CardContent>
                        <div
                            className={
                                progress === 'complete'
                                    ? classes.complete
                                    : classes.inProgress
                            }
                            title={progress}
                        >
                            <FontAwesomeIcon
                                icon={
                                    progress === 'complete'
                                        ? ['far', 'check-circle']
                                        : ['fas', 'hourglass-start']
                                }
                            />
                        </div>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ fontSize: 15, mb: 4 }}
                        >
                            {course}
                        </Typography>
                        {progressValue && (
                            <div className={classes.progressValue}>
                                <LinearProgress
                                    value={progressValue}
                                    variant="determinate"
                                />
                            </div>
                        )}
                        {certificate && (
                            <div
                                className={classes.certificate}
                                style={{
                                    backgroundImage: `url(${
                                        baseImgUrl + certificate
                                    })`,
                                }}
                            />
                        )}
                    </CardContent>
                </Card>
            </CardActionArea>

            <Dialog
                fullWidth={true}
                maxWidth="sm"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{course}</DialogTitle>
                <DialogContent>
                    {certificate ? (
                        <img
                            className={classes.img}
                            src={baseImgUrl + certificate}
                            alt={course}
                        />
                    ) : (
                        <div className={classes.progressValue}>
                            <LinearProgress
                                value={progressValue}
                                variant="determinate"
                            />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Course;
