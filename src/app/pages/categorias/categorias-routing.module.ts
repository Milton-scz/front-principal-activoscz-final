import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriaComponent } from './create.component';
import { PagesComponent } from '../pages.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: 'categorias/create-categoria', component: CrearCategoriaComponent, data: { titulo: 'Crear Categoria' } },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
