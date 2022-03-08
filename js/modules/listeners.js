import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderData from './renderData.js';
import filterData from './filterData.js';
import search from './search.js';
import modal from './modal.js';

const listeners = () => {
    const request = document.querySelector('.search__input');
    const table = document.querySelector('.table');
    const sortBtns = document.querySelector('.sort__btns');
    const filterBtns = document.querySelectorAll('.sort__btn');
    const clearBtn = document.querySelector('.clear-btn');

    request.addEventListener('input', () => {
        if (request.value) {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';

            filterBtns.forEach(btn => {
                if (btn.classList.contains('sort__btn--active')) {
                    clearBtn.style.display = 'block';
                }
            });
        }

        renderData(getLocalStorage(), request.value);
    });

    sortBtns.onclick = event => {
        const target = event.target;
        const sortBtn = target.closest('.sort__btn');

        if (sortBtn) {

            if (!sortBtn.closest('.sort__btn--active')) {
                filterBtns.forEach(btn => btn.className = 'sort__btn');
                sortBtn.classList.add('sort__btn--active');
                sortBtn.classList.toggle('max');
                setLocalStorage(filterData(sortBtn.id, sortBtn.classList));
                renderData(search(request.value), request.value);            
            } else {
                sortBtn.classList.toggle('max');
                setLocalStorage(filterData(sortBtn.id, sortBtn.classList));
                renderData(search(request.value), request.value);    
            }

            clearBtn.style.display = 'block';
        }
    };

    clearBtn.onclick = () => {
        filterBtns.forEach(btn => {
            if (btn.classList.contains('sort__btn--active')) {
                btn.classList.remove('sort__btn--active');
            }
        });

        clearBtn.style.display = 'none';
        request.value = '';

        renderData(getLocalStorage().sort((a, b) => +a.id - +b.id), request.value);
    };
    
    table.onclick = event => {
        const deleteBtn = event.target.closest('.content__item-delete');

        if (deleteBtn) {
            modal(deleteBtn.dataset.id, request.value);
        }

    };
};

export default listeners;