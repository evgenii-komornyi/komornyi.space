import React from 'react';
import { Grid, Typography } from '@mui/material';

import { useStyles } from './about.styles';

import aboutPhoto from '../../img/about_photo_1.jpg';

const About = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    About me
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <img
                    src={aboutPhoto}
                    className={classes.image}
                    alt="It is me"
                />
            </Grid>
            <Grid item xs={12} sm={8} md={8} sx={{ mt: 2 }}>
                <Typography variant="body1" gutterBottom paragraph>
                    Hello, world!
                </Typography>

                <Typography variant="body1" gutterBottom paragraph>
                    My name is Evgenii. Currently I am in search of a Junior
                    ReactJS/Frontend developer job. I learn ReactJS and C#
                    myself, but I still need some guidance from more experienced
                    people.
                </Typography>

                <Typography variant="body1" gutterBottom paragraph>
                    I was born in Bishkek, Kyrgyzstan, but in 2019 I have moved
                    to Riga.
                </Typography>

                <Typography variant="body1" gutterBottom paragraph>
                    In my free time I play the drums, read sci-fi, horror and
                    popular science books. I like to play the chess, ride a
                    bicycle and to swim in the waves.
                </Typography>

                <Typography variant="body1" gutterBottom paragraph>
                    I am communicative and non-conflict person. I love to learn
                    and I am not afraid to invest time in that. I do not let
                    failures get me down. If I do not know something, I google,
                    or ask somebody who knows.
                </Typography>

                <Typography variant="body1" gutterBottom paragraph>
                    I have speech impediment, people that do not know me well
                    have difficulties understanding me, but it becomes easier
                    over time. I also type quickly, so I can communicate with
                    anybody online.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;
