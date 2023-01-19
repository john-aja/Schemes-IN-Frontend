import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeCategoryPageComponent } from '../scheme-category-page/scheme-category-page.component';
import { SchemesMainPageComponent } from './schemes-main-page.component';

const routes: Routes = [{ path: '', component: SchemesMainPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemesMainPageRoutingModule {}
