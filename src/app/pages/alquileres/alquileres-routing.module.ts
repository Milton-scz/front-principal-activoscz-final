import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlquilerComponent } from './create.component';
import { PagesComponent } from '../pages.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: 'alquileres/create-alquiler', component: CreateAlquilerComponent, data: { titulo: 'Crear Contrato de Alquiler' } },
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
export class AlquileresRoutingModule { }
