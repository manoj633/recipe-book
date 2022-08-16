import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe("A test recipe",
    "This is simply a test",
    "https://bit.ly/3zEzXX6",
    [
      new Ingredient('Meat', 1),
      new Ingredient('Jalapeno',2)
    ]),
    new Recipe("Big fat burger",
    "This is simply a test",
    "https://bit.ly/3zEzXX6",
    [
      new Ingredient('Pepper', 1),
      new Ingredient('Bread',2)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  } 
}