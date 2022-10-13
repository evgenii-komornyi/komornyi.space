import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Select,
    CardActionArea,
    Card,
    CardContent,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
} from '@mui/material';

import { getCountries, getByCountry } from '../../api/covid-19';

import { useStyles } from './covid.styles';

const ByCountryStatistic = () => {
    const classes = useStyles();
    const [byCountry, setByCountry] = useState({
        confirmed: 0,
        deaths: 0,
    });

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getCountries();
            setCountries(data);
        };
        fetchData();
    }, []);

    const [value, setValue] = useState('');

    const changeHandler = async e => {
        setValue(e.target.value);
        const byCountryData = await getByCountry(e.target.value);
        setByCountry(byCountryData.data);
    };

    const formatNumber = number => {
        const locale = navigator.languages[0];
        return new Intl.NumberFormat(locale).format(number);
    };

    return (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <CardActionArea>
                <Card className={classes.covid}>
                    <CardContent>
                        <Typography variant="h6">
                            Statistic for{' '}
                            {`${value !== '' ? value : 'country'}`}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <FormControl fullWidth>
                            <InputLabel id="select-label">Country</InputLabel>
                            <Select
                                labelId="select-label"
                                id="simple-select"
                                value={value}
                                label="Country"
                                onChange={changeHandler}
                            >
                                <MenuItem disabled>Select country</MenuItem>
                                {countries &&
                                    countries.countries.map(
                                        (country, index) => (
                                            <MenuItem
                                                key={index}
                                                value={country.name}
                                            >
                                                {country.name}
                                            </MenuItem>
                                        )
                                    )}
                            </Select>
                        </FormControl>
                    </CardContent>
                    {byCountry.confirmed !== 0 && byCountry.deaths !== 0 && (
                        <>
                            <CardContent>
                                <Chip label="confirmed" variant="outlined" />{' '}
                                {formatNumber(byCountry.confirmed.value)}
                            </CardContent>
                            <CardContent>
                                <Chip label="deaths" variant="outlined" />{' '}
                                {formatNumber(byCountry.deaths.value)}
                            </CardContent>
                        </>
                    )}
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default ByCountryStatistic;
