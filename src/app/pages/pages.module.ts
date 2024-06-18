import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ActivosComponent } from './activos/activos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ActivosComponent,
    PagesComponent,
    CategoriasComponent,
    ClientesComponent,
    AlquileresComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports: [
    DashboardComponent,
    UsuariosComponent,
    ActivosComponent,
    CategoriasComponent,
    ClientesComponent,


  ]
})
export class PagesModule { }
