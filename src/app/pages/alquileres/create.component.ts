import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { createAlquiler } from 'src/app/graphql/alquileres/graphql.mutation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listaClientes } from 'src/app/graphql/clientes/graphql.queries';
import { createCliente } from 'src/app/graphql/clientes/graphql.mutation';
import { findByClienteId } from 'src/app/graphql/clientes/graphql.queries';
import { existsClienteId} from 'src/app/graphql/clientes/graphql.queries';
import { Activo } from 'src/app/model/activo';
import { Cliente } from 'src/app/model/cliente';
import { ActivoService } from 'src/app/services/activo.service';
@Component({
  selector: 'app-alquileres',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateAlquilerComponent implements OnInit {
  alquilerForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  activos: Activo[] = [];
  clientes: Cliente[] = [];
  filteredClientes: Cliente[] = [];
  filteredActivos: Activo[] = [];
  searchText: string = '';
  searchTextActivo: string = '';
  clienteFound = false;
  clienteId = 0;
  activo!: Activo;;



  constructor(private apollo: Apollo, private fb: FormBuilder, private activoService: ActivoService) {
    this.alquilerForm = this.fb.group({
      clienteId: ['', Validators.required],
      nombreCliente: ['', Validators.required],
      cedulaCliente: ['', Validators.required],
      celularCliente: ['', Validators.required],
      direccionCliente: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      activoId: ['', Validators.required],
      nombreActivo: ['', Validators.required],
      estado: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      monto: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadActivos();
    this.loadClientes();
  }

  onSubmit(): void {
    if (this.alquilerForm.valid) {
      const { clienteId, nombreCliente, cedulaCliente, celularCliente, fechaNacimiento, direccionCliente, activoId, fechaInicio, fechaFin, monto, descripcion } = this.alquilerForm.value;

      this.existsClienteId(clienteId).then(clienteExists => {
        if (!clienteExists) {
          console.log("entro");
          this.createCliente(nombreCliente, cedulaCliente, celularCliente, fechaNacimiento, direccionCliente).then(newClienteId => {
            this.createAlquiler(newClienteId, activoId, fechaInicio, fechaFin, monto, descripcion);
          });
        } else {
          console.log("entro33");
          this.createAlquiler(clienteId, activoId, fechaInicio, fechaFin, monto, descripcion );
        }
      });
    }
  }

  loadActivos(): void {
    this.activoService.getActivos().subscribe({
      next: (data) => {
        console.log(data);
        this.activos = data;
        this.filteredActivos = this.activos;
      },
      error: (error) => {
        console.error('Error al obtener activos', error);
      }
    });
  }

  getActivo(id: string): void {
    this.activoService.getActivo(id).subscribe({
      next: (data) => {
        console.log(data);
        this.activo = data;

        console.log(this.activo.estado);
      },
      error: (error) => {
        console.error('Error al obtener activo', error);
      }
    });
  }

  loadClientes(): void {
    this.apollo.watchQuery({
      query: listaClientes,
    })
      .valueChanges.subscribe((result: any) => {
        this.clientes = result?.data?.getAllClientes;
        this.filteredClientes = this.clientes;
        console.log(this.clientes);
      });
  }

  seleccionarCliente(event: any): void {
    const cliente = this.clientes.find(c => c.clienteId === event.target.value);
    if (cliente) {
      this.alquilerForm.patchValue({
        clienteId: cliente.clienteId,
        nombreCliente: cliente.nombre,
        cedulaCliente: cliente.cedula,
        celularCliente: cliente.celular,
        fechaNacimiento: cliente.fechaNacimiento,
        direccionCliente: cliente.direccion
      });
    }
  }

  seleccionarActivo(event: any): void {
    const activo = this.activos.find(a => a._id === event.target.value);
    if (activo) {
      this.alquilerForm.patchValue({
        activoId: activo._id,
        nombreActivo: activo.nombre,
        estado: activo.estado
      });
    }
  }

  existsClienteId(clienteId: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.apollo.watchQuery({
        query: existsClienteId,
        variables: {
          clienteId: clienteId,
        }
      }).valueChanges.subscribe({
        next: (result: any) => {
          console.log(result);
          const cliente = result?.data?.existsClienteId;
          if (cliente) {
            console.log(cliente);
            resolve(true); // Cliente encontrado
          } else {
            resolve(false); // Cliente no encontrado
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al encontrar el cliente. Por favor, intente nuevamente.';
          this.successMessage = null;
          console.error('Error:', error);
          resolve(false); // Error al buscar el cliente
        }
      });
    });
  }


  createCliente(nombre: string, cedula: string, celular: string, fechaNacimiento: string, direccion: string): Promise<number> {
    return new Promise((resolve, reject) => {
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
        next: (response: any) => {
          this.successMessage = 'Cliente creado con éxito!';
          this.errorMessage = null;
          this.clienteId = response.data.createCliente.clienteId;
          resolve(this.clienteId);
        },
        error: (error) => {
          this.errorMessage = 'Error al crear el cliente. Por favor, intente nuevamente.';
          this.successMessage = null;
          console.error('Error:', error);
          reject(error);
        }
      });
    });
  }

  createAlquiler(clienteId: number, activoId: string, fechaInicio: string, fechaFin: string, monto: string, descripcion: string): void {
    this.activoService.getActivo(activoId).subscribe({
      next: (activo: Activo) => {

        if (activo && activo.categoria) {
          console.log(activo.categoria.nombre);

          const categoriaInput = {
            _id: activo.categoria._id,
            nombre: activo.categoria.nombre,
            descripcion: activo.categoria.descripcion,
          };

          const activoInput = {
            _id: activo._id,
            nombre: activo.nombre,
            descripcion: activo.descripcion,
            fechaAdquisicion: activo.fechaAdquisicion,
            precio: activo.precio,
            estado: activo.estado,
            categoria: categoriaInput
          };

          this.apollo.mutate({
            mutation: createAlquiler,
            variables: {
              clienteId,
              activoInput,
              fechaInicio,
              fechaFin,
              monto,
              descripcion
            }
          }).subscribe({
            next: () => {
              this.successMessage = 'Contrato de alquiler creado con éxito!';
              this.errorMessage = null;
              this.alquilerForm.reset();
            },
            error: (error) => {
              this.errorMessage = 'Error al crear el contrato de alquiler. Por favor, intente nuevamente.';
              this.successMessage = null;
              console.error('Error:', error);
            }
          });
        } else {
          this.errorMessage = 'Error al obtener el activo o la categoría. Por favor, intente nuevamente.';
          this.successMessage = null;
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al obtener el activo. Por favor, intente nuevamente.';
        this.successMessage = null;
        console.error('Error:', error);
      }
    });
  }




  searchClientes(): void {
    this.filteredClientes = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  searchActivos(): void {
    this.filteredActivos = this.activos.filter(activo =>
      activo.nombre.toLowerCase().includes(this.searchTextActivo.toLowerCase())
    );
  }
}
