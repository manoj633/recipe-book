import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  userSub!: Subscription;

  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe(
      user => {
        this.isAuthenticated = !!user;

      }
    );
  }
  onSaveRecipe() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe(recipes => {
      this.recipesService.setRecipes(recipes);
    });
  }

  ngOnDestroy(): void {

  }
}
