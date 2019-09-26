
import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    cunstructor(id){
        this.id = id;
    }

    async getRecipe() {
        try { 
            const res = await axios (`https://www.food2fork.com/api/get?key=${key}&rID=${this.id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    
}