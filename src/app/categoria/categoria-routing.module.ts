import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

const routes: Routes = [
  { path: 'categotia-list', component: CategoriaListComponent }, // lista
  { path: 'categotia-form', component: CategoriaFormComponent}, // criar
  { path: 'categotia-form/:id', component: CategoriaFormComponent} // alterar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
