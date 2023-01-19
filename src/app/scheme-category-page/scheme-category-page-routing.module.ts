import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeCategoryPageComponent } from './scheme-category-page.component';

const routes: Routes = [{ path: '', component: SchemeCategoryPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemeCategoryPageRoutingModule {}
