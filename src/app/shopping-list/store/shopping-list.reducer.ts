import { Ingredient } from "src/app/shared/ingredient.model";
import * as ShoppingListAction from "./shopping-list.actions";

const intialState = {
    ingredients: [
        new Ingredient('Apple', 3),
        new Ingredient('Mango', 4)
    ]
}

export function shoppingListReducer(state = this.initialState, action: ShoppingListAction.ShoppingListActionTypes) {
    switch (action.type) {
        case ShoppingListAction.ADD_INGREDIENT: return {
            ...state,
            ingredients: [...state, action.payload]
        };
        case ShoppingListAction.ADD_INGREDIENTS: return {
            ...state,
            ingredients: [...state.ingredients, ...action.payload
            ]
        };
        case ShoppingListAction.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updateIngredient = {
                ...ingredient,
                ...action.payload.newIngredient
            };
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updateIngredient;
            return {
                ...state,
                ingredients: updatedIngredients
            };
        case ShoppingListAction.DELETE_INGREDIENT: return {
            ...state,
            ingredients: state.ingredients.filter((ingredient, ingredientIndex) => {
                return ingredientIndex !== action.payload;
            })
        };
        default: return state;
    }
}