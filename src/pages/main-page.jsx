import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Covid from '../components/covid/covid.component';
import Jokes from '../components/jokes/jokes.component';
import Books from '../components/books/books.component';

const MainPage = () => (
    <Container>
        <Covid />
        <Jokes />
        <Row>
            <Col>
                <Books filter={4} />
            </Col>
        </Row>
    </Container>
);

export default MainPage;
