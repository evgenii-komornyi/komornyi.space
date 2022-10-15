import React, { useState } from 'react';
import { Grid, ButtonGroup, Button } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import data from '../../../data/cv.json';

import Skill from '../skill.component';
import { FiltersMenu } from '../../filters-menu/filters-menu.component';

const Filter = () => {
    const matches = useMediaQuery('(min-width: 1366px)');

    const [skills] = useState(data.skills);

    const keywordsUnique = new Set();
    data.skills.map(skill =>
        skill.keywords.map(keyword => keywordsUnique.add(keyword))
    );

    const filterSkills = keyword =>
        skills.filter(sk => sk.keywords.includes(keyword));

    const [fSkills, setFilteredSkills] = useState(null);

    const handleApplyFilter = e => {
        setFilteredSkills(filterSkills(e.target.textContent));
    };

    const resetFilter = () => {
        setFilteredSkills(null);
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
                    <ButtonGroup size="medium" aria-label="medium button group">
                        <Button variant="outlined" onClick={resetFilter}>
                            all
                        </Button>

                        {[...keywordsUnique].map((keyword, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                onClick={handleApplyFilter}
                            >
                                {keyword}
                            </Button>
                        ))}
                    </ButtonGroup>
                ) : (
                    <FiltersMenu
                        buttonText="filter skills by"
                        arrayMenus={[...keywordsUnique]}
                        resetFilters={resetFilter}
                        applyFilters={handleApplyFilter}
                    />
                )}
            </Grid>

            {fSkills !== null ? (
                <Skill skills={fSkills} />
            ) : (
                <Skill skills={skills} />
            )}
        </>
    );
};

export default Filter;
