import React from 'react';
import { Container } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import About from '../components/about/about.component';
import CV from '../components/cv/cv.component';
import Hobby from '../components/hobby/hobby.component';

const AboutMePage = () => {
    return (
        <Container maxWidth="lg">
            <HelmetSeo
                title="About me"
                description="This page represents information about me: skills, courses, hobbies, education, etc..."
                url="https://komornyi.space/about"
            />
            <About />
            <CV />
            <Hobby />
        </Container>
    );
};

export default AboutMePage;
