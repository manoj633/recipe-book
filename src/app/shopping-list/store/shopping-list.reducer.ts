import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListAction from "./shopping-list.actions";

const intialState = {
    ingredients: [
        new Ingredient('Apple', 3),
        new Ingredient('Mango', 4)
    ]
}

export function shoppingListReducer(state = this.initialState, action: ShoppingListAction.AddIngredientAction) {
    switch (action.type) {
        case ShoppingListAction.ADD_INGREDIENT: return {
            ...state,
            ingredients: [...state, action.payload]
        };
        default: return state;
    }
}