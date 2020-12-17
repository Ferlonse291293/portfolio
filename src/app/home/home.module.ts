import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HomeRoutingModule} from './home-routing.module';
import { HeaderComponent } from './components/global-block/header/header.component';
import { FooterComponent } from './components/global-block/footer/footer.component';
import { SignInComponent } from './components/global-block/sign-in/sign-in.component';
import { ImageComponent } from './components/main-block/image/image.component';
import { RegisterComponent } from './components/main-block/register/register.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    ImageComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: []
})

export class HomeModule {

}
