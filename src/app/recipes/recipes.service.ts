import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
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

  constructor(private slService: ShoppingListService){}
  getRecipes() {
    return this.recipes.slice();
  } 

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}