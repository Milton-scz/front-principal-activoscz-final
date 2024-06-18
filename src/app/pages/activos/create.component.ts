import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createActivo } from 'src/app/graphql/activos/graphql.mutation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listaCategorias } from 'src/app/graphql/categorias/graphql.queries';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-activos',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateActivoComponent implements OnInit {
  activoForm!: FormGroup; // Utilizamos el operador de afirmación no nulo
  successMessage: string | null = null;
  errorMessage: string | null = null;
  categorias: Categoria[] = [];
  constructor(private apollo: Apollo, private fb: FormBuilder) {
    this.activoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoriaId: ['', Validators.required],
      fechaAdquisicion: ['', Validators.required],
      precio: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  this.loadCategorias();
  }

  onSubmit(): void {
    if (this.activoForm.valid) {
      const { nombre, descripcion,categoriaId,fechaAdquisicion,precio,estado } = this.activoForm.value;
      this.createActivo(nombre, descripcion,categoriaId,fechaAdquisicion,precio,estado);
    }
  }
  loadCategorias(): void {
    this.apollo
      .watchQuery({
        query: listaCategorias,
      })
      .valueChanges.subscribe((result: any) => {
        this.categorias = result?.data?.getAllCategorias;
        console.log(this.categorias)
      });
  }
  createActivo(nombre: string, descripcion: string, categoriaId:number, fechaAdquisicion:string, precio: string, estado:string): void {
    this.apollo.mutate({
      mutation: createActivo,
      variables: {
        nombre,
        descripcion,
        categoriaId,
        fechaAdquisicion,
        precio,
        estado
      }
    }).subscribe({
      next: (response) => {
        this.successMessage = 'Activo creado con éxito!';
        this.errorMessage = null;
        this.activoForm.reset();
      },
      error: (error) => {
        this.errorMessage = 'Error al crear el activo. Por favor, intente nuevamente.';
        this.successMessage = null;
        console.error('Error:', error);
      }
    });
  }


}
