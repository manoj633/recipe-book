import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) { }
  onSaveRecipe() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });
  }
}
