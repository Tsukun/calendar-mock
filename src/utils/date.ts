const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
};

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}/${addZero(month + 1)}/${addZero(day)}`;
};
