import React from 'react';
import {
    CardActionArea,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography,
    Chip,
} from '@mui/material';

import { Preview, GitHub } from '@mui/icons-material';

import { useStyles } from './projects.styles';

const ProjectCard = ({ project }) => {
    const classes = useStyles();

    return (
        <CardActionArea component="div" className={classes.cardAreaAction}>
            <Card variant="outlined" className={classes.card}>
                <div className={classes.contentContainer}>
                    {project.imageUrl !== '' && (
                        <CardMedia
                            component="img"
                            image={
                                process.env.REACT_APP_PROJECTS_IMAGES +
                                project.imageUrl
                            }
                            alt={project.name}
                        />
                    )}
                    <CardContent>
                        <Typography variant="h6">{project.name}</Typography>
                        {project.technologies.map((technology, i) => (
                            <Chip
                                key={i}
                                label={technology}
                                variant="outlined"
                                size="small"
                            ></Chip>
                        ))}
                        {project.additionalInfo && (
                            <Typography
                                variant="body2"
                                gutterBottom
                                sx={{ mt: 2, color: '#ddd' }}
                            >
                                {project.additionalInfo}
                            </Typography>
                        )}
                    </CardContent>
                </div>

                <CardActions>
                    {project.link && (
                        <Button
                            href={project.link}
                            target="_blank"
                            size="small"
                            variant="outlined"
                            color="info"
                            startIcon={<Preview />}
                        >
                            project
                        </Button>
                    )}
                    {project.github && (
                        <Button
                            href={project.github}
                            target="_blank"
                            size="small"
                            variant="outlined"
                            color="warning"
                            startIcon={<GitHub />}
                        >
                            github
                        </Button>
                    )}
                </CardActions>
            </Card>
        </CardActionArea>
    );
};

export default ProjectCard;
