import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemesViewComponent } from './schemes-view/schemes-view.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-shell/app-shell.module').then((m) => m.AppShellModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
