import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";
import { RecipeService } from "./recipes/recipes.service";
import { DataStorageService } from "./shared/data-storage.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        RecipesResolverService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule { }