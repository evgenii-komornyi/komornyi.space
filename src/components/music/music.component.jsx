import React from 'react';
import { Row, Col } from 'reactstrap';

import './music.style.sass';

import Profile from './profile.component';
import Library from './library.component';

const Music = () => (
    <>
        <Row>
            <Col>
                <h1>My music</h1>
            </Col>
        </Row>
        <Row>
            <Profile />
            <Library />
        </Row>
    </>
);

export default Music;
