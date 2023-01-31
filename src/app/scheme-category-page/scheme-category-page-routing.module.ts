import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationSchemeComponent } from './education-scheme/education-scheme.component';
import { SchemeCategoryPageComponent } from './scheme-category-page.component';

const routes: Routes = [
  {
    path: '',
    component: SchemeCategoryPageComponent,
    children: [],
  },
  {
    path: ':category',
    component: EducationSchemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemeCategoryPageRoutingModule {}
