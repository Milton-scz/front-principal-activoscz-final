import { Categoria } from "./categoria";

export class Activo{
  _id!: string;
  nombre: string;
  descripcion: string;
  categoria: Categoria;
  fechaAdquisicion: string;
  precio: string;
  estado: string;
  urlPhoto: string;

  constructor(_id:string,nombre: string, descripcion: string, categoria: Categoria, fechaAdquisicion: string, precio: string,estado: string,urlPhoto:string) {

    this._id = _id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.fechaAdquisicion = fechaAdquisicion;
    this.precio = precio;
    this.estado = estado;
    this.urlPhoto = urlPhoto;

}


}
