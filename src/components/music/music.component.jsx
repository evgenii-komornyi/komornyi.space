import React from 'react';
import { Grid, Typography } from '@mui/material';

import Profile from './profile/profile.component';
import Library from './library/library.component';

import { useStyles } from './music.styles';

const Music = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    My music
                </Typography>
            </Grid>
            <Profile />
            <Library />
        </Grid>
    );
};

export default Music;
