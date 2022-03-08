import getLocalStorage from './getLocalStorage.js';
import setLocalStorage from './setLocalStorage.js';
import renderData from './renderData.js';

const modal = (id, request) => {
    const modal = document.querySelector('.modal');

    modal.style.zIndex = 1;

    modal.innerHTML = ` 
        <div class="modal-inner">
            <div class="modal-dialog">
                <div class="modal-content">
                    <p class="modal-content__text">Вы уверены, что хотите удалить пользователя?</p>
                    <div class="modal-content__btns">
                        <button class="modal-content__btn modal-content__btn--delete">Да</button>
                        <button class="modal-content__btn">Нет</button>
                    </div>
                </div>
            </div>
        </div>`;

    modal.onclick = event => {
        const target = event.target;

        if (target.closest('.modal-content__btn')) {

            if (target.closest('.modal-content__btn--delete')) {
                const data = getLocalStorage().filter(item => item.id != id);

                setLocalStorage(data);
                renderData(data, request);
            }

            modal.style.zIndex = -1;
            modal.textContent = '';
        }
    };
};

export default modal;