import showDate from './showDate.js';

const renderUser = data => {
    const { id, username, email, rating, registration_date: registrationDate } = data;
    
    const contentList = document.querySelector('.content__list');

    contentList.insertAdjacentHTML('beforeend', `
        <li class="content__item" data-id="${id}">
            <div class="table__username content__item-username">${username}</div>
            <div class="table__email content__item-email">${email}</div>
            <div class="table__date content__item-date">${showDate(registrationDate)}</div>
            <div class="table__rating content__item-rating">${rating}</div>
            <button class="content__item-delete" data-id="${id}"><img src="./images/icons/cancel.svg" alt="cancel"></button>
        </li>`);
};

export default renderUser;