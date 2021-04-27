import React, { useState, useRef, useEffect } from 'react';
import {
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Badge,
} from 'reactstrap';

import './accordion.styles.sass';

import Chevron from './chevron.component';

import LastFM from '../../api-service/lastFM';

const Accordion = ({ artist: artistName, scrobbled, currentPage }) => {
    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('accordion__icon');
    const [artistByName, setArtist] = useState(null);

    const content = useRef(null);

    useEffect(() => {
        setActive('');
        setHeight('0px');
        setRotate('accordion__icon');
    }, [currentPage]);

    const getDataByName = async () => {
        const artistData = await LastFM.getArtist(artistName);
        setArtist(artistData.data);
    };

    const toggleAccordion = () => {
        setActive(active === '' ? 'active' : '');
        setHeight(
            active === 'active' ? '0px' : `${content.current.scrollHeight}px`
        );
        setRotate(
            active === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
        );
        getDataByName();
    };

    return (
        <ListGroupItem className="accordion__section justify-content-between">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <ListGroupItemHeading tag="h5" className="accordion__title">
                    {artistName}{' '}
                    <Badge
                        style={{ backgroundColor: '#000000' }}
                        pill
                        title={`scrobbled: ${scrobbled} times`}
                    >
                        {scrobbled}
                    </Badge>
                </ListGroupItemHeading>
                <Chevron className={`${rotate}`} width={10} fill={'#000000'} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                <div className="accordion__text">
                    <ListGroupItemText tag="h5">
                        <div className="tags">
                            {artistByName &&
                                artistByName.artist.tags.tag.map(
                                    (tag, index) => (
                                        <Badge
                                            key={index}
                                            style={{
                                                backgroundColor: '#000000',
                                            }}
                                            pill
                                        >
                                            {tag.name}
                                        </Badge>
                                    )
                                )}
                        </div>
                    </ListGroupItemText>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default Accordion;
