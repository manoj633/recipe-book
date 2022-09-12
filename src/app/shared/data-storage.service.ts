import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
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
        this.http.get<Recipe[]>('firebase_url/recipes.json').subscribe(recipes => {
            this.recipesService.setRecipes(recipes);
        });
    }
}