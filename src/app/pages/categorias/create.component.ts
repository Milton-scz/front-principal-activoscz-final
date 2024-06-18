import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createCategoria } from 'src/app/graphql/categorias/graphql.mutation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  categoryForm!: FormGroup; // Utilizamos el operador de afirmación no nulo
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private apollo: Apollo, private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      const { nombre, descripcion } = this.categoryForm.value;
      this.createCategoria(nombre, descripcion);
    }
  }

  createCategoria(nombre: string, descripcion: string): void {
    this.apollo.mutate({
      mutation: createCategoria,
      variables: {
        nombre,
        descripcion
      }
    }).subscribe({
      next: (response) => {
        this.successMessage = 'Categoría creada con éxito!';
        this.errorMessage = null;
        this.categoryForm.reset();
      },
      error: (error) => {
        this.errorMessage = 'Error al crear la categoría. Por favor, intente nuevamente.';
        this.successMessage = null;
        console.error('Error:', error);
      }
    });
  }


}
