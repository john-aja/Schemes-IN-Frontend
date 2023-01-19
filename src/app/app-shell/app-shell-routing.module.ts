import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemesMainPageComponent } from '../schemes-main-page/schemes-main-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home-page/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: 'schemes',
        loadChildren: () =>
          import('../schemes-main-page/schemes-main-page.module').then(
            (m) => m.SchemesMainPageModule
          ),
      },
      {
        path: 'scheme-category',
        loadChildren: () =>
          import('../scheme-category-page/scheme-category-page.module').then(
            (m) => m.SchemeCategoryPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
