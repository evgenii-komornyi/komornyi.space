import React from 'react';
import { Container } from '@mui/material';

import { HelmetSeo } from '../components/helmet-seo/helmet-seo.component';
import Music from '../components/music/music.component';

const MusicPage = () => {
    return (
        <Container maxWidth="lg">
            <HelmetSeo
                title="Music library"
                description="This page represents music library from LastFM."
                url="https://komornyi.space/music"
            />
            <Music />
        </Container>
    );
};

export default MusicPage;
