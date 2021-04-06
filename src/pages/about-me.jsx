import React from 'react';
import { Container } from 'reactstrap';

import About from '../components/about/about.component';
import Books from '../components/books/books.component';
import Hobby from '../components/hobby/hobby.component';

const AboutMePage = () => (
    <Container>
        <About />
        <Hobby />
    </Container>
);

export default AboutMePage;
