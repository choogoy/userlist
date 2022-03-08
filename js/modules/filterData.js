import getLocalStorage from './getLocalStorage.js';

const filterData = (filter, classlist) => {

    if (filter === 'registration') {
        if (classlist.contains('max')) {
            return getLocalStorage().sort((a, b) => new Date(b.registration_date) - new Date(a.registration_date));
        } else {
            return getLocalStorage().sort((a, b) => new Date(a.registration_date) - new Date(b.registration_date));
        }
    }

    if (filter === 'rating') {
        if (classlist.contains('max')) {
            return getLocalStorage().sort((a, b) => b.rating - a.rating);
        } else {
            return getLocalStorage().sort((a, b) => a.rating - b.rating);
        }
    }
};

export default filterData;