import React, { useState, useEffect } from 'react';
import {
    Col,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    ListGroup,
    ListGroupItem,
    Badge,
} from 'reactstrap';

import LastFM from '../../api-service/lastFM';

const Profile = () => {
    const [profile, setUser] = useState({ user: null, totalArtists: null });

    useEffect(() => {
        const fetchData = async () => {
            const userData = await LastFM.getUser();
            const artistsData = await LastFM.getLibrary();

            setUser({
                user: userData.data.user,
                totalArtists: artistsData.data.artists['@attr'].total,
            });
        };
        fetchData();
    }, []);

    const unixTime = new Date(
        profile.user && profile.user.registered['unixtime'] * 1000
    );
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const year = unixTime.getFullYear();
    const month = months[unixTime.getMonth()];
    const date = unixTime.getDate();
    const time = date + ' ' + month + ' ' + year;

    return (
        <>
            {profile.user === null ? (
                <Col>Loading data...</Col>
            ) : (
                <Col xl={4} className="text-center">
                    <Card>
                        <CardImg
                            top
                            className="profile-img"
                            src={profile.user.image[1]['#text']}
                            alt={profile.user.name}
                            style={{ borderRadius: 50 + '%' }}
                        />
                        <CardBody>
                            <CardTitle tag="h3">{profile.user.name}</CardTitle>
                            <CardSubtitle tag="p" className="mb-2 text-muted">
                                {profile.user.realname} • scrobbling since{' '}
                                {time}
                            </CardSubtitle>
                            <ListGroup>
                                <ListGroupItem className="justify-content-between">
                                    SCROBBLES{' '}
                                    <Badge
                                        pill
                                        style={{
                                            backgroundColor: '#000000',
                                        }}
                                    >
                                        {new Intl.NumberFormat().format(
                                            profile.user.playcount
                                        )}
                                    </Badge>
                                </ListGroupItem>
                                <ListGroupItem className="justify-content-between">
                                    ARTISTS{' '}
                                    <Badge
                                        pill
                                        style={{
                                            backgroundColor: '#000000',
                                        }}
                                    >
                                        {new Intl.NumberFormat().format(
                                            profile.totalArtists
                                        )}
                                    </Badge>
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </>
    );
};

export default Profile;
