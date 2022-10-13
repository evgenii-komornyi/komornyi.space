import React from 'react';
import {
    Grid,
    Typography,
    CardActionArea,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './contacts.styles';

import contacts from '../../data/contacts.json';

const Contacts = () => {
    const classes = useStyles();

    return (
        <Grid container sx={{ mt: 5 }} spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="h1" className={classes.title}>
                    Contacts
                </Typography>
            </Grid>
            {contacts.map((contact, index) => (
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
                    <CardActionArea>
                        <Card
                            className={classes.contacts}
                            sx={{ textAlign: 'center' }}
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h6">
                                    {contact.title}
                                </Typography>
                                <FontAwesomeIcon
                                    icon={contact.icon}
                                    size="3x"
                                />
                                <Typography sx={{ mt: 2 }} variant="body2">
                                    {contact.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    sx={{ ml: 'auto', mr: 'auto' }}
                                    variant="outlined"
                                    target="_blank"
                                    href={contact.link}
                                >
                                    {contact.button}
                                </Button>
                            </CardActions>
                        </Card>
                    </CardActionArea>
                </Grid>
            ))}{' '}
        </Grid>
    );
};

export default Contacts;
