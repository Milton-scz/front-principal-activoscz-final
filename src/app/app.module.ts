import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { ActivosModule } from './pages/activos/activos.module';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { GraphQLModule } from './graphql.module';
import { ClientesModule } from './pages/clientes/clientes.module';
import { AlquileresModule } from './pages/alquileres/alquileres.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CategoriasModule,
    ActivosModule,
    ClientesModule,
    UsuariosModule,
    AlquileresModule,
    PagesModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
