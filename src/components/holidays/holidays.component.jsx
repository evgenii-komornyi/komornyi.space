import React, { useEffect } from 'react';

import useHolidaysStore from '../../app/holidaysStore';

export const Holidays = () => {
    const { holidays, fetchHolidays } = useHolidaysStore();

    console.log(holidays);

    useEffect(() => {
        try {
            fetchHolidays('2022', 'LV');
        } catch (error) {
            console.log(error.message);
        }
    }, [fetchHolidays]);

    return <div>Holidays</div>;
};
