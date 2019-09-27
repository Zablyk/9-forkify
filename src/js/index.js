import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView'; 
import { elements, renderLoader, clearLoader } from './views/base';

/**Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes  
 */
const state = {};

/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
    // 1) Get a query from a view
    const query = searchView.getInput();
  

    if(query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for a result
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4) Search for reciepes
        await state.search.getResults();    

        // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//event listener for a page buttons
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline'); //add a closest method
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    //Get id from URL
    const id = window.location.hash.replace('#', ''); //window.location = is entire URL
    console.log(id);
    
    if(id){
        //Prepare UI for changes

        //Create new object
        state.recipe = new Recipe(id);

        //Get recipe data
        await state.recipe.getRecipe();

        //Calculate servings and coocing time
        state.recipe.calcTime();
        state.recipe.calcServings();
        //Render recipe
        console.log(state.recipe);
    } 
};

window.addEventListener('hashchange', controlRecipe);