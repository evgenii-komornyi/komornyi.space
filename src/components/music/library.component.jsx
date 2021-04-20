import React, { useState, useEffect } from 'react';
import { Col, ListGroup } from 'reactstrap';

import Accordion from '../accordion/accordion.component';
import Pagination from '../pagination/pagination.component';

import LastFM from '../../api-service/lastFM';

const Library = () => {
    const [library, setLibrary] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const artistsData = await LastFM.getLibrary();
            setLibrary(artistsData.data);
        };
        fetchData();
    }, []);
    const getDataByPage = async page => {
        const artistsData = await LastFM.getLibrary(page);
        setLibrary(artistsData.data);
    };

    const setPage = page => {
        getDataByPage(page);
    };

    return (
        <>
            {library === null ? (
                <Col>Loading data...</Col>
            ) : (
                <>
                    <Col xl={8}>
                        <ListGroup>
                            {library &&
                                library.artists.artist.map((artist, index) => (
                                    <Accordion
                                        key={index}
                                        artist={artist.name}
                                        scrobbled={artist.playcount}
                                    />
                                ))}
                        </ListGroup>
                    </Col>
                    <Col xl={{ size: 8, offset: 4 }} className="text-center">
                        <Pagination
                            perPage={library.artists['@attr'].perPage}
                            currentPage={library.artists['@attr'].page}
                            totalArtists={library.artists['@attr'].total}
                            handlePage={page => setPage(page)}
                        />
                    </Col>
                </>
            )}
        </>
    );
};

export default Library;
