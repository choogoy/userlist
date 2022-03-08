import pagination from './pagination.js';
import clearList from './clearList.js';
import search from './search.js';

const renderData = (data, request) => {
    if (request && search(request).length) {
        pagination(search(request).length, 5, 1, search(request));
    } else if (request === '' && data.length) {
        pagination(data.length, 5, 1, data);
    } else {
        clearList();
    }
};

export default renderData;