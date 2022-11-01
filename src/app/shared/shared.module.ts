import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent
    ],
    exports: [
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule
    ]
})
export class SharedModule { }