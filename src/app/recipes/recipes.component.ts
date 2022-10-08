import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor(private dataFetcher: DataStorageService, private recipesService: RecipeService) { }

  ngOnInit(): void {
    this.dataFetcher.fetchRecipes().subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });;
  }
}
