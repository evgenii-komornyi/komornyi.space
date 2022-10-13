import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import Project from '../project.component';

import useProjectsStore from '../../../app/projectsStore';

const Filter = () => {
    const matches = useMediaQuery('(min-width: 1366px)');

    const projects = useProjectsStore(state => state.projects);

    const filterUnique = new Set();
    projects.map(project =>
        project.technologies.map(technology => filterUnique.add(technology))
    );

    const [filteredProjects, setFilteredProjects] = useState(null);

    const filterProjects = technology => {
        return projects.filter(project =>
            project.technologies.includes(technology)
        );
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleFilterClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
        setAnchorEl(null);
    };

    const handleClick = e => {
        e.preventDefault();
        setFilteredProjects(filterProjects(e.target.textContent));
        setAnchorEl(null);
    };

    return (
        <>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ textAlign: 'center', mb: 2 }}
            >
                {matches ? (
                    <>
                        <Button
                            variant="outlined"
                            onClick={() => setFilteredProjects(null)}
                        >
                            all
                        </Button>

                        {[...filterUnique].sort().map((technology, i) => (
                            <Button
                                key={i}
                                variant="outlined"
                                onClick={e => handleClick(e)}
                            >
                                {technology}
                            </Button>
                        ))}
                    </>
                ) : (
                    <>
                        <Button
                            id="positioned-button"
                            aria-controls="positioned-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleFilterClick}
                        >
                            Filter projects by
                        </Button>
                        <Menu
                            id="positioned-menu"
                            aria-labelledby="positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleFilterClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem
                                sx={{ textTransform: 'uppercase' }}
                                onClick={() => setFilteredProjects(null)}
                            >
                                all
                            </MenuItem>
                            {[...filterUnique].map((technology, i) => (
                                <MenuItem
                                    key={i}
                                    variant="outlined"
                                    sx={{
                                        textTransform: 'uppercase',
                                    }}
                                    onClick={e => handleClick(e)}
                                >
                                    {technology}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                )}
            </Grid>

            {filteredProjects !== null ? (
                <Project projects={filteredProjects} />
            ) : (
                <Project projects={projects} />
            )}
        </>
    );
};

export default Filter;
