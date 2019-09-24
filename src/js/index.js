import Search from './models/Search';

/**Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes  
 */
const = state{};

const controlSearch = () => {
    //Get a query from a view
    const query = 'pizza';//TODO

    if(query) {
        //New search object and add to state
    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();    