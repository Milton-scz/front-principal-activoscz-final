import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { listaClientes } from 'src/app/graphql/clientes/graphql.queries';
import { deleteCliente } from 'src/app/graphql/clientes/graphql.mutation';
import { Cliente } from 'src/app/model/cliente';
import { PageEvent } from '@angular/material/paginator';
import { createCliente } from 'src/app/graphql/clientes/graphql.mutation';
import clientes from 'src/assets/generar_clientes';




@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientesGenerados: any[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  clientes: Cliente[] = [];
  pageInfo: any = {};
  pageSize: number = 20;
  paginaActual: number = 0;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.clientesGenerados = clientes;
    this.loadData();
  }
  loadData(): void {
    this.apollo.watchQuery({
      query: listaClientes,
      variables: {
        page: this.paginaActual,
        size: this.pageSize
      }
    })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      this.clientes = result?.data?.getAllClientes?.clientes || [];
      this.pageInfo = result?.data?.getAllClientes?.pageInfo || {};
    });
  }


  async onSubmitMasivo(): Promise<void> {
    try {
      for (const cliente of this.clientesGenerados) {
        const { nombre, cedula, celular, fechaNacimiento, direccion } = cliente;
        await this.createCliente(nombre, cedula, celular, fechaNacimiento, direccion);
      }
      this.successMessage = 'Creación masiva de clientes completada con éxito!';
      this.errorMessage = null;
    } catch (error) {
      this.errorMessage = 'Error al crear clientes. Por favor, inténtelo nuevamente.';
      this.successMessage = null;
      console.error('Error:', error);
    }
  }

  async createCliente(nombre: string, cedula: string, celular: string, fechaNacimiento: string, direccion: string): Promise<void> {
    try {
      const response = await this.apollo.mutate({
        mutation: createCliente,
        variables: {
          nombre,
          cedula,
          celular,
          fechaNacimiento,
          direccion
        }
      }).toPromise();
      console.log('Cliente creado:', response);
    } catch (error) {
      console.error('Error al crear cliente:', error);
      throw error;
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.paginaActual = event.pageIndex;
    this.loadData();
  }
  deleteCliente(clienteId: number): void {
    this.apollo.mutate({
      mutation: deleteCliente,
      variables: {
        clienteId:clienteId,
      }
    }).subscribe({
      next: (response: any) => {
        if (response.data.deleteCliente==true) {
          console.log(response);
          this.successMessage = 'Cliente eliminado con éxito!';
          this.errorMessage = null;
          this.clientes = this.clientes.filter(cliente => cliente.clienteId !== clienteId);
        } else {
          console.log(response);
          this.errorMessage = 'Error al eliminar el cliente. Por favor, intente nuevamente.';
          this.successMessage = null;
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al eliminar el cliente. Por favor, intente nuevamente.';
        this.successMessage = null;
        console.error('Error:', error);
      }
    });
  }
}


