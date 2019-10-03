import { elements } from './base';
import { format } from 'url';
//import { Fraction } from 'fractional';

export const clearRecipe = () => {
       elements.recipe.innerHTML = '';
 }

 
//next function doesn't work I cant import Fraction from fractional module;
 // const formatCount = count => {
    
//     if (count) {
//         //Ex. count = 2.5 --> 2 1/2
//         //Ex. count = 0.5 --> 1/2
//         const [int, dec] = count.toString().split('.').map(el => parseInt(el, 10));
        
  
//         if (int === 0) {
//             const fr = new Fraction(count);
//             return `${fr.numerator}/${denominator}`;
            
//         } else {
//             const fr = new Fraction(count);
//             return `${int} ${fr.numerator}/${denominator}`;
//         }

//     }
//     return '?';
// };



//next function not like in a cource
 var numberToFraction = function( amount ) {
	// This is a whole number and doesn't need modification.
	if ( parseFloat( amount ) === parseInt( amount ) ) {
		return amount;
	}
	// Next 12 lines are cribbed from https://stackoverflow.com/a/23575406.
	var gcd = function(a, b) {
		if (b < 0.0000001) {
			return a;
		}
		return gcd(b, Math.floor(a % b));
	};
	var len = amount.toString().length - 2;
	var denominator = Math.pow(10, len);
	var numerator = amount * denominator;
	var divisor = gcd(numerator, denominator);
	numerator /= divisor;
	denominator /= divisor;
	var base = 0;
	// In a scenario like 3/2, convert to 1 1/2
	// by pulling out the base number and reducing the numerator.
	if ( numerator > denominator ) {
		base = Math.floor( numerator / denominator );
		numerator -= base * denominator;
	}
	amount = Math.floor(numerator) + '/' + Math.floor(denominator);
	if ( base ) {
		amount = base + ' ' + amount;
	}
	return amount;
};



const createIngredient = ingredient => `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${numberToFraction(ingredient.count)}</div>
        <div class="recipe__ingredient">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.ingredient}
        </div>
    </li>
`;

export const renderRecipe = recipe => {
    const markup = `
        <figure class="recipe__fig">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
            <h1 class="recipe__title">
            <span>${recipe.title}</span>
            </h1>
        </figure>

        <div class="recipe__details">
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
            <span class="recipe__info-text"> minutes</span>
        </div>

        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text"> servings</span>

        <div class="recipe__info-buttons">
            <button class="btn-tiny btn-decrease">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
            </button>
            <button class="btn-tiny btn-increase">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
            </button>
        </div>

        </div>
            <button class="recipe__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#icon-heart-outlined"></use>
                </svg>
            </button>
        </div>



        <div class="recipe__ingredients">
            <ul class="recipe__ingredient-list">
            ${recipe.ingredients.map(el => createIngredient(el)).join('')}

                <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                <div class="recipe__count">1000</div>
                <div class="recipe__ingredient">
                    <span class="recipe__unit">g</span>
                    pasta
                </div>
            </li>

        </ul>

        <button class="btn-small recipe__btn">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__by">${recipe.author}</span>. Please check out directions at their website.
        </p>
        <a class="btn-small recipe__btn" href="${recipe.url}" target="_blank">
            <span>Directions</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>
    `;
    elements.recipe.insertAdjacentHTML('afterbegin', markup);
};

export const updateServingsInredients = recipe => {
    //Update servings
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;
    //update ingredients
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
    });
};