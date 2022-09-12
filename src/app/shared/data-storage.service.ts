import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://ng-recipe-book-abcdb-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe();
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-book-abcdb-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes => {
            return recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
            })
        })).subscribe(recipes => {
            this.recipesService.setRecipes(recipes);
        });
    }
}