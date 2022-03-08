import renderPagination from './renderPagination.js';
import renderUser from './renderUser.js';

const pagination = (GoodsCount, GoodsPerPage, activePage, data) => {

    const content = document.querySelector('.content__list');
    const paginationNav = document.querySelector('.pagination-nav');

    const render = (GoodsCount, GoodsPerPage, currentPage, data) => {
        const pages = Math.ceil(GoodsCount / GoodsPerPage);
    
        content.textContent = '';

        if (pages > 1) {
 
            if (currentPage != pages) {
                for (let i = GoodsPerPage * (currentPage - 1) + 1; i <= GoodsPerPage * currentPage; i++) {
                    renderUser(data[i-1]);
                }
            } else {
                if (GoodsCount > GoodsPerPage * (pages - 1) + 1) {
                    for (let i = GoodsPerPage * (currentPage - 1) + 1; i <= GoodsCount; i++) {
                        renderUser(data[i-1]);
                    }
                } else {
                    renderUser(data[GoodsCount-1]);
                }
            }
    
        } else {

            if (GoodsCount > 1) {
                for (let i = 0; i < GoodsCount; i++) {
                    renderUser(data[i]);                    
                }
            } else {
                renderUser(data[0]);
            }

        }
    };

    const totalPages = Math.ceil(GoodsCount / GoodsPerPage);

    renderPagination(totalPages, activePage);
    render(GoodsCount, GoodsPerPage, activePage, data);

    paginationNav.onclick = event => {
        const target = event.target;
        const active = paginationNav.querySelector('.page-active');

        if (target.closest('.prev-btn')) {
            renderPagination(totalPages, --activePage);
            render(GoodsCount, GoodsPerPage, activePage, data);
            active.classList.remove('page-active');
            active.previousElementSibling.classList.add('page-active');
        }

        if (target.closest('.next-btn')) {
            renderPagination(totalPages, ++activePage);
            render(GoodsCount, GoodsPerPage, activePage, data);
            active.classList.remove('page-active');
            active.nextElementSibling.classList.add('page-active');
        }

        if (target.closest('.page-link')) {
            event.preventDefault();
            activePage = +target.textContent;
            renderPagination(totalPages, activePage);
            render(GoodsCount, GoodsPerPage, activePage, data);
        }
    };
};

export default pagination;