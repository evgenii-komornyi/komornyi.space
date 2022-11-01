const yearsDiff = (dateFrom, dateTo) => {
    let yearsDiff = dateTo.getFullYear() - dateFrom.getFullYear();

    return yearsDiff;
};

const monthsDiff = (dateFrom, dateTo) => {
    let years = yearsDiff(dateFrom, dateTo);
    let months = years * 12 + (dateTo.getMonth() - dateFrom.getMonth());

    return months;
};

export const fullExperiencedDate = (dateFrom, dateTo) => {
    const dateFromMs = Date.parse(dateFrom);
    const dateToMs = Date.parse(dateTo);

    let dateFromFormatted = new Date(dateFromMs);
    let dateToFormatted = new Date(dateToMs);

    const monthsDifference = monthsDiff(dateFromFormatted, dateToFormatted);

    const years = Math.floor(monthsDifference / 12);
    const months = monthsDifference % 12;

    const yearsFormat = `${years} ${years === 1 ? 'year' : 'years'}`;
    const monthsFormat = `${months} ${months === 1 ? 'month' : 'months'}`;

    if (years === 0) {
        return monthsFormat;
    } else if (months === 0) {
        return yearsFormat;
    } else {
        return `${yearsFormat} ${monthsFormat}`;
    }
};

export const formatDateToString = stringDate => {
    const date = new Date(stringDate);
    const option = { month: 'long', year: 'numeric' };

    return new Intl.DateTimeFormat(navigator.language, option).format(date);
};
