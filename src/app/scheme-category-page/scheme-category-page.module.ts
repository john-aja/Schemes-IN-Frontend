import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeCategoryPageRoutingModule } from './scheme-category-page-routing.module';
import { EducationSchemeComponent } from './education-scheme/education-scheme.component';
import { SchemesViewComponent } from '../schemes-view/schemes-view.component';
import { SchemesListViewComponent } from '../schemes-list-view/schemes-list-view.component';

@NgModule({
  declarations: [
    EducationSchemeComponent,
    SchemesViewComponent,
    SchemesListViewComponent,
  ],
  imports: [CommonModule, SchemeCategoryPageRoutingModule],
})
export class SchemeCategoryPageModule {}
