import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import Music from '../components/music/music.component';

const MusicPage = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Container maxWidth="lg">
            <Music />
        </Container>
    );
};

export default MusicPage;
