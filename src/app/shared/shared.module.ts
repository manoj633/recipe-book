import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent,
        DropdownDirective
    ],
    exports: [
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownDirective
    ]
})
export class SharedModule { }