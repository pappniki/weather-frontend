import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListCityComponent} from './list-city/list-city.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'list', component: ListCityComponent},
  {path: 'list/:id', component: ListCityComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nav', component: NavBarComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ListCityComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
