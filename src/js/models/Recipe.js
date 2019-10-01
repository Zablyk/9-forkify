
import axios from 'axios';
import { key, proxy } from '../config';


export default class Recipe {
    constructor(id){
        this.id = id;
    }

    async getRecipe() {
        try { 
            const res = await axios (`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url; 
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

        calcTime() {
            //We have a 3 ingredients and we need a 15 minutes per each ing
            const numIng = this.ingredients.length;
            const periods = Math.ceil(numIng / 3);
            this.time = periods * 15; 
        }

        calcServings() {
            this.servings = 4;
        }

        parseIngredients() {
            const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
            const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];  

            const newIngredients = this.ingredients.map(el => {
               // 1) Uniform units
                let ingredient = el.toLowerCase();

                unitsLong.forEach((unit, i) => {
                    ingredient = ingredient.replace(unit, unitsShort[i]);
                });
               // 2) Remove parentheses
               console.log(ingredient);
                ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
               // 3) Parse ingradients into count, unit and ingredient
               const arrIng = ingredient.split(' ');
               const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2)); 
               
                let objIng;
                if(unitIndex > -1) {
                    //There is a unit
                    //EX. 4 1/2 cups, arrCount = [4, 1/2] --> eval("4+1/2") --> 4.5 
                    //EX. 4 cups, arrCount = [4]
                    const arrCount = arrIng.slice(0, unitIndex);

                    let count;
                    if(arrCount.length === 1) {
                        count =  eval(arrIng[0].replace('-', '+'));
                    } else {
                        count = eval(arrIng.slice(0, unitIndex).join('+'));
                    }

                    objIng = {
                        count,
                        unit: arrIng[unitIndex],
                        ingredient:  arrIng.slice(unitIndex + 1).join(' ')
                    };


                } else if (parseInt(arrIng[0], 10) ) {
                    //There is NOT UNIT but first element is number
                    objIng = {
                        count: parseInt(arrIng[0], 10),
                        unit: '',
                        ingredient: arrIng.slice(1).join(' ')
                    }
                } else if (unitIndex === -1) {
                    //Theri is NO UNIT and no number in first possition
                    objIng = {
                        count: 1,
                        unit: '',
                        ingredient //it's = to ingredient : ingredien 
                    }
                }

                
            return objIng;

            });
            this.ingredients = newIngredients;
        }
    }
    
