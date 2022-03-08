import getLocalStorage from './getLocalStorage.js';

const search = request => {
    return getLocalStorage().filter(item => {
        if (item.username.toLowerCase().includes(request.toLowerCase()) || item.email.toLowerCase().includes(request.toLowerCase())) {
            return item;
        }
    });
};

export default search;