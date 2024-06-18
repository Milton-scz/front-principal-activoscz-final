import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateActivoComponent } from './create.component';
import { PagesComponent } from '../pages.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: 'activos/create-activo', component: CreateActivoComponent, data: { titulo: 'Crear Activo' } },
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
export class ActivosRoutingModule { }
