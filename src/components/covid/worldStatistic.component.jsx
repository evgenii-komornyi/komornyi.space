import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    CardActionArea,
    Card,
    CardContent,
    Chip,
} from '@mui/material';

import { PublicTwoTone } from '@mui/icons-material';

import { getWorld } from '../../api/covid-19';

import { useStyles } from './covid.styles';

const WorldStatistic = () => {
    const classes = useStyles();
    const [world, setWorld] = useState({
        confirmed: 0,
        recovered: 0,
        deaths: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getWorld();
            setWorld(data);
        };
        fetchData();
    }, []);

    const formatNumber = number => {
        const locale = navigator.languages[0];
        return new Intl.NumberFormat(locale).format(number);
    };

    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CardActionArea>
                <Card className={classes.covid}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            World statistic
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <PublicTwoTone fontSize="large" />
                    </CardContent>
                    <CardContent>
                        <Chip label="confirmed" variant="outlined" />{' '}
                        {formatNumber(world.confirmed.value)}
                    </CardContent>
                    <CardContent>
                        <Chip label="deaths" variant="outlined" />{' '}
                        {formatNumber(world.deaths.value)}
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default WorldStatistic;
