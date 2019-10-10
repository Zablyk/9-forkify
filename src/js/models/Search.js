
import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;//data.recipes comes back from our API request 
        } catch(error){
            alert('oppapa :(');
            alert(error);
        } 
    } 
}

//https://www.food2fork.com/api/search
//301f8869c9aab7ed62e04c75a59c2727