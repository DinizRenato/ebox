import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'metadados', loadChildren: () => import('./pages/metadados/metadados.module').then(m => m.MetadadosModule) },
  { path: '', loadChildren: () => import('./pages/projetos/projetos.module').then(m => m.ProjetosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
