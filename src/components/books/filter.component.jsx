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

const Filter = ({ data, filter }) => {
    const filteredBooks = data.books.filter(book => book.id <= filter);

    const [books, setBooks] = useState(
        filter === -1 ? data.books : filteredBooks
    );

    // Progress filter

    const [isProgOpen, setProgOpen] = useState(false);
    const toggleProgress = () => setProgOpen(!isProgOpen);

    const completeBooks = data.books.filter(
        book => book.progress === 'complete'
    );

    const inProgressBooks = data.books.filter(
        book => book.progress === 'in-progress'
    );

    const pendingBooks = data.books.filter(book => book.progress === 'pending');

    // Years filter

    const [isYearsOpen, setYearsOpen] = useState(false);
    const toggleYears = () => setYearsOpen(!isYearsOpen);

    const twentyFirstYear = data.books.filter(
        book => book.progress === 'complete' && book.year === 2021
    );

    const twentiethYear = data.books.filter(
        book => book.progress === 'complete' && book.year === 2020
    );

    const nineteenthYear = data.books.filter(
        book => book.progress === 'complete' && book.year === 2019
    );

    const eighteenthYear = data.books.filter(
        book => book.progress === 'complete' && book.year === 2018
    );

    const otherYear = data.books.filter(
        book =>
            book.progress === 'complete' &&
            book.year >= 2006 &&
            book.year <= 2017
    );

    return (
        <>
            <Row>
                {filter !== 4 && (
                    <>
                        <Col className="text-left">Categories</Col>
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
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(data.books)
                                                }
                                            >
                                                All
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(completeBooks)
                                                }
                                            >
                                                Complete
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(inProgressBooks)
                                                }
                                            >
                                                In progress
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(pendingBooks)
                                                }
                                            >
                                                Pending
                                            </Button>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
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
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(twentyFirstYear)
                                                }
                                            >
                                                2021
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(twentiethYear)
                                                }
                                            >
                                                2020
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(nineteenthYear)
                                                }
                                            >
                                                2019
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(eighteenthYear)
                                                }
                                            >
                                                2018
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(otherYear)
                                                }
                                            >
                                                Other years
                                            </Button>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Button
                                                color="link"
                                                onClick={() =>
                                                    setBooks(data.books)
                                                }
                                            >
                                                All
                                            </Button>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </div>
                        </Col>
                    </>
                )}
            </Row>
            <Row>
                {books.map(book => (
                    <Col xl="3" key={book.id}>
                        <div className="library">
                            <Progress book={book} />
                            <img
                                className="bookImage"
                                src={book.image}
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
