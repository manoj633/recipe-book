import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe("A test recipe","This is simply a test","https://bit.ly/3zEzXX6"),
    new Recipe("A test recipe","This is simply a test","https://bit.ly/3zEzXX6")
  ];

  getRecipes() {
    return this.recipes.slice();
  } 
}