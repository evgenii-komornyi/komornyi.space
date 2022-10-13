import React, { useState, useEffect } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Pagination,
    Stack,
    Chip,
    CardActions,
} from '@mui/material';

import { ExpandMore, LibraryMusicTwoTone } from '@mui/icons-material';

import { getLibrary, getArtist } from '../../../api/lastFM';

import { Loader } from '../../loader/loader.component';

const Library = () => {
    const [library, setLibrary] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getLibrary();
            setLibrary(data);
        };
        fetchData();
    }, []);

    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [artistByName, setArtist] = useState(null);

    const getDataByName = async artistName => {
        const { data } = await getArtist(artistName);
        setArtist(data);
    };

    const getDataByPage = async page => {
        const artistsData = await getLibrary(page);
        setLibrary(artistsData.data);
    };

    const setPage = (_, page) => {
        getDataByPage(page);
    };

    return library !== null ? (
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Card variant="outlined">
                <CardContent>
                    {library.artists.artist.map((artist, index) => (
                        <Accordion
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            key={index}
                            onClick={() => getDataByName(artist.name)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="content"
                                id="header"
                            >
                                <Typography>{artist.name}</Typography>
                                <LibraryMusicTwoTone sx={{ ml: 2 }} />
                                <Chip
                                    label={artist.playcount}
                                    variant="outlined"
                                    sx={{ ml: 2 }}
                                    title={`scrobbled: ${artist.playcount} times`}
                                />
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack
                                    direction={{ xs: 'column', lg: 'row' }}
                                    spacing={1}
                                >
                                    {artistByName && !artistByName.error ? (
                                        artistByName.artist.tags.tag.map(
                                            (tag, index) => (
                                                <Chip
                                                    key={index}
                                                    label={tag.name}
                                                    variant="outlined"
                                                />
                                            )
                                        )
                                    ) : (
                                        <Typography variant="body2">
                                            Such Artist not exist
                                        </Typography>
                                    )}
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardActions>
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.ceil(
                                library.artists['@attr'].total /
                                    library.artists['@attr'].perPage
                            )}
                            showFirstButton
                            showLastButton
                            variant="outlined"
                            onChange={setPage}
                        />
                    </Stack>
                </CardActions>
            </Card>
        </Grid>
    ) : (
        <Loader />
    );
};

export default Library;
