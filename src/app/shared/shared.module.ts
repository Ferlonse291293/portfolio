import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPlacePipe } from './pipes/filter-place.pipe';
import {AlertComponent} from './components/alert/alert.component';





@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [
        FilterPlacePipe,
        AlertComponent,
    ],
    exports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FilterPlacePipe,
        AlertComponent,

    ],

})

export class SharedModule {

}
