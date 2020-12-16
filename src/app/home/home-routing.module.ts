import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from './components/home-layout/home-layout.component';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomePageComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {

}
