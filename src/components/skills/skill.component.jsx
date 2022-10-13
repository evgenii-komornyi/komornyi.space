import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Typography,
} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './skills.styles';

const baseImgUrl = 'https://komornyi.space/static/img/skills/';

const Skill = ({ skills }) => {
    const classes = useStyles();

    return skills.map(skill => (
        <Grid
            item
            xs={12}
            xl={skill.main ? 4 : 2}
            sm={skill.main ? 6 : 4}
            md={skill.main ? 6 : 4}
            key={skill.id}
        >
            <CardActionArea>
                <Card
                    variant="outlined"
                    sx={{
                        textAlign: 'center',
                        height: skill.main ? 'auto' : 87,
                    }}
                >
                    {skill.favorite && (
                        <div className={classes.favorite}>
                            <FontAwesomeIcon
                                icon={['far', 'heart']}
                                size="2x"
                            />
                        </div>
                    )}
                    <CardContent>
                        {skill.icon && (
                            <img
                                src={baseImgUrl + skill.icon}
                                alt={skill.skill}
                                className={classes.skillIcon}
                            />
                        )}
                        <Typography
                            variant="h6"
                            sx={{ textAlign: 'center' }}
                            gutterBottom
                            className={
                                skill.skill.length < 13
                                    ? classes.moreThanLimitLength
                                    : ''
                            }
                        >
                            {skill.skill}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    ));
};

export default Skill;
