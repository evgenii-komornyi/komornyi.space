import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button,
    Badge,
} from 'reactstrap';

import './jokes.styles.sass';

import jokes from '../../data/jokes.json';

const Jokes = () => {
    const [joke, setJoke] = useState(null);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * jokes.length - 1);
    };

    useEffect(() => {
        setJoke(jokes[generateRandomNumber()]);
    }, []);

    const getNextRandomJoke = () => {
        setJoke(jokes[generateRandomNumber()]);
    };

    return (
        <>
            <Row>
                <Col>
                    <h1>Jokes</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h6">
                                <Badge pill color="primary">
                                    {jokes.length} jokes
                                </Badge>{' '}
                            </CardTitle>
                            <CardText>{joke && joke}</CardText>
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="secondary"
                                outline
                                onClick={() => getNextRandomJoke()}
                            >
                                Next Joke
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Jokes;
