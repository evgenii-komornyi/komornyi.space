import create from 'zustand';

import { getBooks } from '../api/books';

import { devtools, persist } from 'zustand/middleware';

const booksStore = set => ({
    books: [],
    isLoaded: false,

    fetchBooks: async () => {
        const { data } = await getBooks();

        set({ books: data, isLoaded: true });
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
