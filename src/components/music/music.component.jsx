import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import './music.style.sass';

const Music = () => {
    const [user, setUser] = useState({ user: {} });
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch(
                'http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=anal-cunt&api_key=3ff7206303cfd81d5bc1f51fe8494568&format=json'
            );
            let response = await res.json();
            setUser(response.user); // parse json
        };
        fetchData();
    }, []);

    console.log(user);

    return (
        <Row>
            <Col>
                <h1>My music</h1>
            </Col>
        </Row>
    );
};

export default Music;
