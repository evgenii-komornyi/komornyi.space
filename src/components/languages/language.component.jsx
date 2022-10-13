import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
} from '@mui/material';

import { useStyles } from './languages.styles';

const baseImgUrl = 'https://komornyi.space/static/img/languages/';

const Language = ({ language }) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CardActionArea>
                <Card className={classes.language}>
                    <img
                        src={baseImgUrl + language.icon}
                        alt={language.language}
                        className={classes.languageIcon}
                    />
                    <CardContent>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ textAlign: 'center' }}
                        >
                            {language.language}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {language.level}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default Language;
