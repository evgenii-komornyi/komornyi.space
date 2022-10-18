import React from 'react';
import { Container } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import Projects from '../components/projects/projects.component';

const ProjectsPage = () => {
    return (
        <Container maxWidth="lg">
            <HelmetSeo
                title="Projects"
                description="This page represents my studying and working projects."
                url="https://komornyi.space/projects"
            />
            <Projects />
        </Container>
    );
};

export default ProjectsPage;
