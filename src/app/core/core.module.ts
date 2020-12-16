import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';



import {
    AlertService,
    ApiService,
    JwtService,
    NamesService,
    UserService,
    SharedFunctionService,
    LoaderService,



} from './services';



@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
        ApiService,
        JwtService,
        AlertService,
        NamesService,
        UserService,


        SharedFunctionService,
        LoaderService,



        // resolves



        // map



        // navigator



        // menu-map


        // firebase


        // guards


    ],
    declarations: []
})
export class CoreModule {
}
