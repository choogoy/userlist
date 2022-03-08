const clearList = () => {
    const contentList = document.querySelector('.content__list');
    const paginationNav = document.querySelector('.pagination-nav');
    
    contentList.textContent = '';
    paginationNav.textContent = '';
    contentList.insertAdjacentHTML('afterbegin', `<p style="padding-top: 14px;">По вашему запросу ничего не найдено...</p>`);
};

export default clearList;