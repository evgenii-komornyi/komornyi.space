import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Progress = ({ book }) => (
    <div className={`progress ${book.progress}`}>
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

export default Progress;
