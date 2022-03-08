import addZero from './addZero.js';

const showDate = date => {
    const newDate = new Date(date);
    return `${addZero(newDate.getDate())}.${addZero(newDate.getMonth()+1)}.${newDate.getFullYear()}`;
};

export default showDate;