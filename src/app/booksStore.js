import create from 'zustand';

import books from '../data/books.json';

import { devtools, persist } from 'zustand/middleware';

const booksStore = set => ({
    books: [],
    isLoaded: false,

    fetchBooks: () => {
        setTimeout(() => {
            set({ books, isLoaded: true });
        }, 2000);
    },
});

const useBooksStore = create(
    devtools(
        persist(booksStore, {
            name: 'books',
        })
    )
);

export default useBooksStore;
