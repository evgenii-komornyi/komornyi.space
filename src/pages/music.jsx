import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

import Music from '../components/music/music.component';

const MusicPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container>
            <Music />
        </Container>
    );
};

export default MusicPage;
