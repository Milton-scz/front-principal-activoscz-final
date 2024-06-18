import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ActivosComponent } from './activos/activos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AlquileresComponent } from './alquileres/alquileres.component';


const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: '',  data: { titulo: 'Gestionar Usuarios' },
        children: [
          { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' } },
          { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },

        ]
      },
      { path: '',  data: { titulo: 'Gestionar Activos' },
        children: [
          { path: 'activos', component: ActivosComponent, data: { titulo: 'Activos' } },
          { path: 'categorias', component: CategoriasComponent, data: { titulo: 'Categorías' } },

        ]
      },
      { path: 'alquileres', component: AlquileresComponent, data: { titulo: 'Contratos' } },
      { path: 'mantenimiento', component: ActivosComponent, data: { titulo: 'Mantenimiento' } }

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
export class PagesRoutingModule { }
