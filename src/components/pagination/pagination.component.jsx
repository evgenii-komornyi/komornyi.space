import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import './pagination.styles.scss';

const Pagination = ({ currentPage, totalArtists, perPage, handlePage }) => {
    const [current, setCurrent] = useState(currentPage || 1);
    const [totalPage] = useState(Math.ceil(totalArtists / perPage));

    const generateArray = totalPage => {
        return (n => {
            for (var a = []; n--; a[n] = n + 1);
            return a;
        })(totalPage);
    };

    const generatePages = (pages, current) => {
        const first = page => page === 1;
        const middle = (page, between) =>
            page > between.bet && page <= between.ween;

        const last = page => page === totalPage;

        const between = {
            bet: 0,
            ween: 0,
        };

        if (current <= 5) {
            between.bet = 1;
            between.ween = 8;
        } else if (current > totalPage - 5) {
            between.bet = totalPage - 8;
            between.ween = totalPage - 1;
        } else {
            between.bet = current - 4;
            between.ween = current + 3;
        }
        const allPages = pages.filter(
            page => first(page) || middle(page, between) || last(page)
        );
        return addEtc(allPages);
    };

    const addEtc = pages => {
        if (pages.length <= 1) {
            return pages;
        }
        var lastPage = pages[pages.length - 1];
        var secondLast = pages[pages.length - 2];
        pages[0] + 1 !== pages[1] && pages.splice(1, 0, '...');
        lastPage !== secondLast + 1 && pages.splice(pages.length - 1, 0, '...');
        return pages;
    };

    const [pages] = useState([...generateArray(totalPage)]);
    const [pageNav, setPageNav] = useState([...generatePages(pages, current)]);

    const onClick = (curr, type) => {
        if (isNaN(curr)) return;

        if (type === 'previous' && current > 1) {
            setCurrent(curr - 1);
            setPageNav([...generatePages(pages, curr - 1)]);
        } else if (type === 'next' && curr < totalPage) {
            setCurrent(curr + 1);
            setPageNav([...generatePages(pages, curr + 1)]);
        } else {
            setCurrent(curr);
            setPageNav([...generatePages(pages, curr)]);
        }
    };

    const multiHandler = page => {
        onClick(+page);
        handlePage(+page);
    };

    return (
        <ButtonToolbar>
            <ButtonGroup>
                {pageNav.map((page, index) => (
                    <Button
                        key={index}
                        onClick={() => multiHandler(+page)}
                        className={`link_page ${
                            page === current ? 'item current' : 'item'
                        }`}
                    >
                        {page}
                    </Button>
                ))}
            </ButtonGroup>
        </ButtonToolbar>
    );
};

export default Pagination;
