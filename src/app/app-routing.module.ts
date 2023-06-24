import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };
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
