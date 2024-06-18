import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateActivoComponent } from 'src/app/pages/activos/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateActivoComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [CreateActivoComponent],
})
export class ActivosModule { }
