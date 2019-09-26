
import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    cunstructor(id){
        this.id = id;
    }

    async getRecipe() {
        try { 
            const res = await axios (`https://www.food2fork.com/api/get?key=${key}&rID=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.img_url; 
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    
}