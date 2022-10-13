import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStyles } from './books.styles';

const Progress = ({ book }) => {
    const classes = useStyles();

    return (
        <div className={`${classes.progress} ${book.progress}`}>
            {book.progress === 'complete' && (
                <FontAwesomeIcon
                    icon={['far', 'check-circle']}
                    size="2x"
                    title={book.progress}
                />
            )}
            {book.progress === 'in-progress' && (
                <FontAwesomeIcon
                    icon={['far', 'bookmark']}
                    size="2x"
                    title={book.progress}
                />
            )}
            {book.progress === 'pending' && (
                <FontAwesomeIcon
                    icon={['fas', 'hourglass-start']}
                    size="2x"
                    title={book.progress}
                />
            )}
        </div>
    );
};

export default Progress;
