import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './create.component';
import { PagesComponent } from '../pages.component'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: 'clientes/create-cliente', component: CrearClienteComponent, data: { titulo: 'Crear Cliente' } },
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
export class ClientesRoutingModule { }
