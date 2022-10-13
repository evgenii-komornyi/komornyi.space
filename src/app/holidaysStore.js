import create from 'zustand';

import { getHolidays } from '../api/holidays';

import { devtools, persist } from 'zustand/middleware';

const holidaysStore = set => ({
    holidays: [],
    isLoaded: false,

    fetchHolidays: async (year, countryCode) => {
        const { data } = await getHolidays(year, countryCode);

        set({ holidays: data, isLoaded: true });
    },
});

const useHolidaysStore = create(
    devtools(
        persist(holidaysStore, {
            name: 'holidays',
        })
    )
);

export default useHolidaysStore;
