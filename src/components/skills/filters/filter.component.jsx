import React, { useState } from 'react';
import { Grid, ButtonGroup, Button, Menu, MenuItem } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import data from '../../../data/cv.json';

import Skill from '../skill.component';

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

    const handleClick = e => {
        e.preventDefault();
        setFilteredSkills(filterSkills(e.target.textContent));
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleFilterClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleFilterClose = () => {
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
                    <ButtonGroup size="medium" aria-label="medium button group">
                        <Button
                            variant="outlined"
                            onClick={() => setFilteredSkills(null)}
                        >
                            all
                        </Button>

                        {[...keywordsUnique].map((keyword, i) => (
                            <Button
                                key={i}
                                variant="outlined"
                                onClick={e => handleClick(e)}
                            >
                                {keyword}
                            </Button>
                        ))}
                    </ButtonGroup>
                ) : (
                    <>
                        <Button
                            id="positioned-button"
                            aria-controls="positioned-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleFilterClick}
                        >
                            Filter skills by
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
                                onClick={() => setFilteredSkills(null)}
                                sx={{ textTransform: 'uppercase' }}
                            >
                                all
                            </MenuItem>
                            {[...keywordsUnique].map((keyword, i) => (
                                <MenuItem
                                    key={i}
                                    variant="outlined"
                                    onClick={e => handleClick(e)}
                                    sx={{ textTransform: 'uppercase' }}
                                >
                                    {keyword}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
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
