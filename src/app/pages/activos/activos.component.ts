import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { PageEvent } from '@angular/material/paginator';
import { Activo } from 'src/app/model/activo';
import { ActivoService } from 'src/app/services/activo.service';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.css']
})
export class ActivosComponent implements OnInit {
  activos: any[] = [];
  totalActivos: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private activoService: ActivoService) { }

  ngOnInit(): void {

    this.loadActivos(this.currentPage, this.pageSize);
  }


  loadActivos(page: number, pageSize: number): void {
    this.activoService.getActivos(page, pageSize).subscribe(
      response => {
        this.activos = response.data;
        this.totalActivos = response.pagination.totalActivos ;
        this.totalPages = response.pagination.totalPages;
        this.currentPage = response.pagination.currentPage;
      },
      error => {
        console.error('Error al obtener activos', error);
      }
    );
  }
  deleteActivo(id: string): void {
    this.activoService.deleteActivo(id).subscribe({
      next: (response) => {
        if (response.status === true) {
          console.log('Activo eliminado con éxito!');
          this.successMessage = 'Activo eliminado con éxito!';
          this.errorMessage = null;
          // Recargar la lista de activos después de eliminar uno
          this.actualizarActivos();
        } else {
          console.error('Error al eliminar el activo. Por favor, intente nuevamente.');
          this.errorMessage = 'Error al eliminar el activo. Por favor, intente nuevamente.';
          this.successMessage = null;
        }
      },
      error: (error) => {
        console.error('Error al eliminar el activo:', error);
        this.errorMessage = 'Error al eliminar el activo. Por favor, intente nuevamente.';
        this.successMessage = null;
      }
    });
  }

  actualizarActivos(): void {
    this.activoService.getActivos().subscribe({
      next: (data) => {
        console.log(data);
        this.activos = data;
      },
      error: (error) => {
        console.error('Error al obtener activos', error);
      }
    });
  }




  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadActivos(this.currentPage,this.pageSize);
  }

  onPageSizeChange(event: Event): void {
    const newSize = parseInt((event.target as HTMLSelectElement).value, 10);
    this.pageSize = newSize;
    this.loadActivos(this.currentPage, newSize);
  }

}


