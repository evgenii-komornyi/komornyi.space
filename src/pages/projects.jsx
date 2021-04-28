import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import Projects from '../components/projects/projects.component';

const ProjectsPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container>
            <Projects />
        </Container>
    );
};

export default ProjectsPage;
