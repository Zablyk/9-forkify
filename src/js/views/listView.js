import { elements } from './base';

export const renderItem = (item => {
    const markup = `
            <li class="shopping__item">
                <div class="shopping__count">
                    <input type="number" value="500" step="100">
                    <p>g</p>
                </div>
                <p class="shopping__description">Pasta</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
            </button>
            </li>   
    `;
});

export const deleteItem = (id => {

});
