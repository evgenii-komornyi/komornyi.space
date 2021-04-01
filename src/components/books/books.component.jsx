import React from 'react';
import { Row, Col } from 'reactstrap';

import './books.style.sass';

import Filter from './filter.component';

import data from '../../data/books.json';

const Books = ({ filter }) => {
    return (
        <>
            <Row>
                <Col>
                    <h1>{filter >= 4 ? 'Last read books' : 'Library'}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Filter data={data} filter={filter} />
                </Col>
            </Row>
        </>
    );
};

export default Books;
