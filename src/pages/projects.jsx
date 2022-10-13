import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import Projects from '../components/projects/projects.component';

const ProjectsPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <Projects />
        </Container>
    );
};

export default ProjectsPage;
