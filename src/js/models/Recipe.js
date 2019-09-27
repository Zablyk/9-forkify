
import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    cunstructor(id){
        this.id = id;
    }

    async getRecipe() {
        try { 
            const res = await axios (`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url; 
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }

        // // // calcTime() {
        // // //     //We have a 3 ingredients and we need a 15 minutes per each ing
        // // //     const numIng = this.ingredients.length;
        // // //     const periods = Math.ceil(numIng / 3);
        // // //     this.time = periods * 15; 
        // // // }

        // // // calcServings() {
        // // //     this.servings = 4;
        // // // }
    }
    
}