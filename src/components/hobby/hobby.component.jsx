import React from 'react';
import { Row, Col } from 'reactstrap';

import './hobby.style.sass';

import Carousel from '../carousel/carousel.component';

const Hobby = () => {
    return (
        <>
            <Row>
                <Col>
                    <h1>Hobbies</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel />
                </Col>
            </Row>
        </>
    );
};

export default Hobby;
