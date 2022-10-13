import React, { useState } from 'react';

import FilterByYear from './filterByYear.component';
import FilterByProgress from './filterByProgress.component';
import Book from '../book.component';

const Filter = ({ data }) => {
    const [filteredBooks, setFilteredBooks] = useState(null);
    const [progress, setProgress] = useState(null);
    const [year, setYear] = useState(null);

    const filterBooks = (progress, year = null) => {
        return year < 2016 && year !== null
            ? data.filter(
                  book => book.progress === progress && book.year < 2016
              )
            : data.filter(book =>
                  year === null
                      ? book.progress === progress
                      : book.progress === progress && book.year === year
              );
    };

    return (
        <>
            <FilterByYear
                data={data}
                setBooks={setFilteredBooks}
                filterBooks={filterBooks}
                filter={year}
                setFilter={setYear}
                setProgress={setProgress}
            />
            <FilterByProgress
                data={data}
                setBooks={setFilteredBooks}
                filterBooks={filterBooks}
                filter={progress}
                setFilter={setProgress}
                setYear={setYear}
            />
            {filteredBooks === null
                ? data.map(book => <Book book={book} key={book._id} />)
                : filteredBooks.map(filteredBook => (
                      <Book book={filteredBook} key={filteredBook._id} />
                  ))}
        </>
    );
};

export default Filter;
