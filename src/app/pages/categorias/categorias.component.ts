import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria';
import { Apollo } from 'apollo-angular';
import { ActivoService } from 'src/app/services/activo.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private apollo: Apollo, private activoService: ActivoService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.activoService.getCategorias().subscribe({
      next: (data) => {
        console.log(data);
        this.categorias = data;
      },
      error: (error) => {
        console.error('Error al obtener activos', error);
      }
    });
  }

  deleteCategoria(id: string): void {
    this.activoService.deleteCategoria(id).subscribe({
      next: (response) => {
        if (response.status === true) {
          console.log('Categoria eliminado con éxito!');
          this.successMessage = 'Categoria eliminado con éxito!';
          this.errorMessage = null;
          // Recargar la lista de activos después de eliminar uno
          this.actualizarCategorias();
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
  actualizarCategorias(): void {
    this.activoService.getCategorias().subscribe({
      next: (data) => {
        console.log(data);
        this.categorias = data;
      },
      error: (error) => {
        console.error('Error al obtener activos', error);
      }
    });
  }
}


