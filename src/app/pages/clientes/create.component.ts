import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createCliente } from 'src/app/graphql/clientes/graphql.mutation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm!: FormGroup; // Utilizamos el operador de afirmación no nulo
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private apollo: Apollo, private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      celular: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {


  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const { nombre, cedula,celular,fechaNacimiento, direccion } = this.clienteForm.value;
      this.createCliente(nombre, cedula,celular,fechaNacimiento,direccion);
    }
  }




  createCliente(nombre: string, cedula: string, celular: string, fechaNacimiento: string, direccion: string ): void {
    this.apollo.mutate({
      mutation: createCliente,
      variables: {
        nombre,
        cedula,
        celular,
        fechaNacimiento,
        direccion
      }
    }).subscribe({
      next: (response) => {
        this.successMessage = 'Cliente creado con éxito!';
        this.errorMessage = null;
        this.clienteForm.reset();
      },
      error: (error) => {
        this.errorMessage = 'Error al crear el cliente. Por favor, intente nuevamente.';
        this.successMessage = null;
        console.error('Error:', error);
      }
    });
  }


}
