import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import About from '../components/about/about.component';
import CV from '../components/cv/cv.component';
import Hobby from '../components/hobby/hobby.component';

const AboutMePage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <About />
            <CV />
            <Hobby />
        </Container>
    );
};

export default AboutMePage;
