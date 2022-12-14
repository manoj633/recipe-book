import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Observable<{ ingredients: Ingredient[] }>
  // ingredients!: Ingredient[];
  // ingredientChangedSubscription!: Subscription;

  constructor(private slService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredient();
    // this.ingredientChangedSubscription =
    //   this.slService.ingredientsChanged.subscribe((ing: Ingredient[]) => {
    //     this.ingredients = ing;
    //   });
  }

  ngOnDestroy(): void {
    // this.ingredientChangedSubscription.unsubscribe();
  }

  onEditItem(i: number) {
    this.slService.startedEditing.next(i);
  }
}
