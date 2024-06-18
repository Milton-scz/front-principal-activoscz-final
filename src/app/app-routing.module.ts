import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CategoriasRoutingModule } from './pages/categorias/categorias-routing.module';
import { ActivosRoutingModule } from './pages/activos/activos-routing.module';
import { ClientesRoutingModule } from './pages/clientes/clientes-routing.module';
import { AlquileresRoutingModule } from './pages/alquileres/alquileres-routing.module';
import { UsuariosRoutingModule } from './pages/usuarios/usuarios-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { FormsModule } from '@angular/forms';


const routes:Routes=[

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NopageFoundComponent}

]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    CategoriasRoutingModule,
    ActivosRoutingModule,
    UsuariosRoutingModule,
    ClientesRoutingModule,
    AlquileresRoutingModule ,
    FormsModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
