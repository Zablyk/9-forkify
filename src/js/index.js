import axios from 'axios';

async function getResults(query){
    //const proxy = 'https://crossorigin.me/https://google.com';
    const key = '301f8869c9aab7ed62e04c75a59c2727';
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`)
    console.log(res);
}; 
getResults();


//https://www.food2fork.com/api/search
//301f8869c9aab7ed62e04c75a59c2727