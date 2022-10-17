import create from 'zustand';

import { getBooks } from '../api/books';

import { devtools, persist } from 'zustand/middleware';

const booksStore = set => ({
    books: [],
    isLoaded: false,

    fetchBooks: async (cancelationToken, isCancel) => {
        try {
            const { data } = await getBooks(cancelationToken);

            set({ books: data, isLoaded: true });
        } catch (e) {
            if (isCancel(e)) return;
        }
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
