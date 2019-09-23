import axios from 'axios';

async function getResults(query){
    //const proxy = 'https://crossorigin.me/https://google.com'; works without any proxy;
    const key = '301f8869c9aab7ed62e04c75a59c2727';
    try{
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch(error){
        alert(error);
    } 
}; 
getResults('tomato pasta');


//https://www.food2fork.com/api/search
//301f8869c9aab7ed62e04c75a59c2727