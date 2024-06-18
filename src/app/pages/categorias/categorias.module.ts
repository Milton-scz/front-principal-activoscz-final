import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrearCategoriaComponent } from 'src/app/pages/categorias/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CrearCategoriaComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [CrearCategoriaComponent],
})
export class CategoriasModule { }
