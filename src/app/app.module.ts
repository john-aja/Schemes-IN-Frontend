import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { SchemesMainPageComponent } from './schemes-main-page/schemes-main-page.component';
import { SchemeCategoryPageComponent } from './scheme-category-page/scheme-category-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SchemesMainPageComponent, SchemeCategoryPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
