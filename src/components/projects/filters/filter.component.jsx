import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import Project from '../project.component';
import { FiltersMenu } from '../../filters-menu/filters-menu.component';

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

    const handleApplyFilter = e => {
        setFilteredProjects(filterProjects(e.target.textContent));
    };

    const resetFilter = () => {
        setFilteredProjects(null);
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
                        <Button variant="outlined" onClick={resetFilter}>
                            all
                        </Button>

                        {[...filterUnique].sort().map((technology, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                onClick={handleApplyFilter}
                            >
                                {technology}
                            </Button>
                        ))}
                    </>
                ) : (
                    <FiltersMenu
                        buttonText="filter projects by"
                        arrayMenus={[...filterUnique]}
                        resetFilters={resetFilter}
                        applyFilter={handleApplyFilter}
                    />
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
