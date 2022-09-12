import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put('firebase_url/recipes.json', recipes).subscribe();
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('firebase_url/recipes.json').pipe(map(recipes => {
            return recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
            })
        }), tap(recipes => {
            this.recipesService.setRecipes(recipes);
        }));
    }
}