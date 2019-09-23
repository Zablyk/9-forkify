
import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults(query){
        //const proxy = 'https://crossorigin.me/https://google.com'; works without any proxy;
        const key = '301f8869c9aab7ed62e04c75a59c2727';
        try{
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
            const recipes = res.data.recipes;
            console.log(recipes);
        } catch(error){
            alert(error);
        } 
    } 
}

//https://www.food2fork.com/api/search
//301f8869c9aab7ed62e04c75a59c2727