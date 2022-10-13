import React, { useState, useEffect } from 'react';
import {
    Grid,
    CardActionArea,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Divider,
    Chip,
    Avatar,
} from '@mui/material';

import { Album } from '@mui/icons-material';

import { getUser, getLibrary } from '../../../api/lastFM';

import { Loader } from '../../loader/loader.component';

const Profile = () => {
    const [profile, setUser] = useState({ user: null, totalArtists: null });

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUser();
            const artistsData = await getLibrary();

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

    return profile.user !== null ? (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CardActionArea>
                <Card variant="outlined">
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="sinovdeath"
                                src={profile.user.image[1]['#text']}
                                alt={profile.user.name}
                            />
                        }
                        action={<Album />}
                        title={`${profile.user.realname} • ${profile.user.name}`}
                        subheader={`scrobbling since ${time}`}
                    />
                    <CardContent>
                        <List>
                            <ListItem sx={{ textAlign: 'center' }}>
                                <ListItemText>
                                    SCROBBLES{' '}
                                    <Chip
                                        variant="outlined"
                                        label={new Intl.NumberFormat().format(
                                            profile.user.playcount
                                        )}
                                    />
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem sx={{ textAlign: 'center' }}>
                                <ListItemText>
                                    ARTISTS{' '}
                                    <Chip
                                        variant="outlined"
                                        label={new Intl.NumberFormat().format(
                                            profile.totalArtists
                                        )}
                                    />
                                </ListItemText>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    ) : (
        <Loader />
    );
};

export default Profile;
