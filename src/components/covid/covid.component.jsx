import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Badge,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Input,
} from 'reactstrap';

import './covid.styles.sass';

import CovidApi from '../../api-service/covid-19';

const Covid = () => {
    const [world, setWorld] = useState({
        confirmed: 0,
        recovered: 0,
        deaths: 0,
    });

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const worldData = await CovidApi.getWorld();
            setWorld(worldData.data);

            const countriesData = await CovidApi.getCountries();
            setCountries(countriesData.data);
        };
        fetchData();
    }, []);

    const [byCountry, setByCountry] = useState({
        confirmed: 0,
        recovered: 0,
        deaths: 0,
    });

    const [value, setValue] = useState('');

    const changeHandler = async e => {
        setValue(e.target.value);
        const byCountryData = await CovidApi.getByCountry(e.target.value);
        setByCountry(byCountryData.data);
    };

    const formatNumber = number => {
        const locale = navigator.languages[0];
        return new Intl.NumberFormat(locale).format(number);
    };

    return (
        <>
            <Row>
                <Col>
                    <h1>Covid statistics</h1>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="covid">
                        <CardBody>
                            <CardTitle tag="h5">World statistic</CardTitle>
                            <img
                                src="http://127.0.0.1:8887/world-map.png"
                                style={{ width: 50 + 'px', height: 50 + 'px' }}
                                alt=""
                            />
                            <CardText>
                                <Badge color="warning">confirmed: </Badge>{' '}
                                {formatNumber(world.confirmed.value)}
                            </CardText>
                            <CardText>
                                <Badge color="success">recovered: </Badge>{' '}
                                {formatNumber(world.recovered.value)}
                            </CardText>
                            <CardText>
                                <Badge color="dark">deaths: </Badge>{' '}
                                {formatNumber(world.deaths.value)}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="covid">
                        <CardBody>
                            <CardTitle tag="h5">Statistic by country</CardTitle>
                            {countries && (
                                <Input
                                    className="countries"
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                    value={value}
                                    onChange={e => changeHandler(e)}
                                >
                                    <option>Select country...</option>
                                    {countries.countries.map(
                                        (country, index) => (
                                            <option key={index}>
                                                {country.name}
                                            </option>
                                        )
                                    )}
                                </Input>
                            )}
                            {byCountry.confirmed !== 0 && (
                                <CardText>
                                    <Badge color="warning">confirmed: </Badge>{' '}
                                    {formatNumber(byCountry.confirmed.value)}
                                </CardText>
                            )}
                            {byCountry.recovered !== 0 && (
                                <CardText>
                                    <Badge color="success">recovered: </Badge>{' '}
                                    {formatNumber(byCountry.recovered.value)}
                                </CardText>
                            )}
                            {byCountry.deaths !== 0 && (
                                <CardText>
                                    <Badge color="dark">deaths: </Badge>{' '}
                                    {formatNumber(byCountry.deaths.value)}
                                </CardText>
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Covid;
