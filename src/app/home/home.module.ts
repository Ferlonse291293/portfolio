import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HomeRoutingModule} from './home-routing.module';
import { HeaderComponent } from './components/global-block/header/header.component';
import { FooterComponent } from './components/global-block/footer/footer.component';
import { SignInComponent } from './components/main-block/sign-in/sign-in.component';
import { ImageComponent } from './components/main-block/image/image.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    ImageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: []
})

export class HomeModule {

}
