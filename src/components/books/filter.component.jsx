import React, { useState } from 'react';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import Progress from './progress.component';

const baseImgUrl = 'https://komornyi.space/static/img/books/';

const Filter = ({ data, filter }) => {
    const progressUnique = new Set();
    data.books.map(book => progressUnique.add(book.progress));

    const yearsUnique = new Set();
    data.books.map(
        book =>
            book.year &&
            yearsUnique.add(book.year > 2016 ? book.year : 'earlier')
    );

    const handleProgress = e => {
        e.preventDefault();
        setBooks(filterBooks(e.target.dataset.progress));
    };

    const handleYear = e => {
        e.preventDefault();
        const { progress, year } = e.target.dataset;
        setBooks(filterBooks(progress, +year));
    };

    const filterBooks = (progress, year = null) => {
        return year < 2016 && year !== null
            ? data.books.filter(
                  book => book.progress === progress && book.year < 2016
              )
            : data.books.filter(book =>
                  year === null
                      ? book.progress === progress
                      : book.progress === progress && book.year === year
              );
    };

    const filteredBooks = data.books.filter(
        (book, index) => index + 1 <= filter
    );

    const [books, setBooks] = useState(
        filter === -1 ? data.books : filteredBooks
    );

    const [isProgOpen, setProgOpen] = useState(false);
    const toggleProgress = () => setProgOpen(!isProgOpen);

    const [isYearsOpen, setYearsOpen] = useState(false);
    const toggleYears = () => setYearsOpen(!isYearsOpen);

    return (
        <>
            <Row>
                {filter === -1 && (
                    <>
                        <Col className="text-right">
                            <div className="filter">
                                <ButtonDropdown
                                    direction="down"
                                    isOpen={isProgOpen}
                                    toggle={toggleProgress}
                                >
                                    <DropdownToggle
                                        caret
                                        outline
                                        color="primary"
                                    >
                                        By progress
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag="a">
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(data.books)
                                                }
                                            >
                                                All
                                            </Button>
                                        </DropdownItem>
                                        {[...progressUnique].map(
                                            (progress, index) => (
                                                <DropdownItem
                                                    key={index}
                                                    tag="a"
                                                >
                                                    <Button
                                                        color="link"
                                                        data-progress={progress}
                                                        onClick={e =>
                                                            handleProgress(e)
                                                        }
                                                    >
                                                        {progress}
                                                    </Button>
                                                </DropdownItem>
                                            )
                                        )}{' '}
                                    </DropdownMenu>
                                </ButtonDropdown>{' '}
                                <ButtonDropdown
                                    direction="down"
                                    isOpen={isYearsOpen}
                                    toggle={toggleYears}
                                >
                                    <DropdownToggle
                                        caret
                                        outline
                                        color="primary"
                                    >
                                        By Years
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag="a">
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(data.books)
                                                }
                                            >
                                                All
                                            </Button>
                                        </DropdownItem>
                                        {[...yearsUnique]
                                            .sort((a, b) => b - a)
                                            .map((year, index) => (
                                                <DropdownItem
                                                    key={index}
                                                    tag="a"
                                                >
                                                    <Button
                                                        color="link"
                                                        data-progress="complete"
                                                        data-year={
                                                            year === 'earlier'
                                                                ? 2015
                                                                : year
                                                        }
                                                        onClick={e =>
                                                            handleYear(e)
                                                        }
                                                    >
                                                        {year}
                                                    </Button>
                                                </DropdownItem>
                                            ))}
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </Col>
                    </>
                )}
            </Row>
            <Row>
                {books
                    .sort((a, b) => b - a)
                    .map(book => (
                        <Col xl={3} sm={6} md={3} key={book.id}>
                            <div className="library">
                                <Progress book={book} />
                                <img
                                    className="bookImage"
                                    src={baseImgUrl + book.image}
                                    alt={book.title}
                                />
                                <div className="bookTitle">{book.title}</div>
                                <div className="bookAuthor">
                                    <span>by {book.author}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
            </Row>
            <Row>
                <Col className="text-center">
                    <Button
                        color="secondary"
                        href={`${filter === -1 ? '/about' : '/library'}`}
                    >
                        {filter === -1 ? 'Go back' : 'My library'}
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default Filter;
