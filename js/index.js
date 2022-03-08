'use strict';

import setLocalStorage from './modules/setLocalStorage.js';
import getLocalStorage from './modules/getLocalStorage.js';
import getData from './modules/getData.js';
import renderData from './modules/renderData.js';
import listeners from './modules/listeners.js';

const url = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';

getData(url).then(response => {
    setLocalStorage(response);
    renderData(getLocalStorage(), '');
    listeners();
});