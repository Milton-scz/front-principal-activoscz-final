import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getAlquilers } from 'src/app/graphql/alquileres/graphql.queries';
import { deleteAlquiler } from 'src/app/graphql/alquileres/graphql.mutation';
import { PageEvent } from '@angular/material/paginator';
import { Alquiler } from 'src/app/model/alquiler';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit {
  alquileresGenerados: any[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  alquileres: Alquiler[] = [];
  pageInfo: any = {};
  pageSize: number = 2;
  paginaActual: number = 0;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.apollo.watchQuery({
      query: getAlquilers,
      variables: {
        page: this.paginaActual,
        size: this.pageSize
      }
    })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.alquileres = result?.data?.getAllAlquileres?.alquileres || [];
        console.log(this.alquileres);
      this.pageInfo = result?.data?.getAllAlquileres?.pageInfo || {};
    });
  }
    deleteAlquiler(alquilerId: number): void {
      this.apollo.mutate({
        mutation: deleteAlquiler,
        variables: {
          alquilerId:alquilerId,
        }
      }).subscribe({
        next: (response: any) => {
          if (response.data.deleteAlquiler==true) {
            console.log(response);
            this.successMessage = 'Cliente eliminado con éxito!';
            this.errorMessage = null;
            this.alquileres = this.alquileres.filter(alquiler => alquiler.alquilerId !==alquilerId);
          } else {
            console.log(response);
            this.errorMessage = 'Error al eliminar el usuario. Por favor, intente nuevamente.';
            this.successMessage = null;
          }
        },
        error: (error) => {
          this.errorMessage = 'Error al eliminar el usuario. Por favor, intente nuevamente.';
          this.successMessage = null;
          console.error('Error:', error);
        }
      });
    }

    onPageChange(event: PageEvent): void {
      this.pageSize = event.pageSize;
      this.paginaActual = event.pageIndex;
      this.loadData();
    }
}


