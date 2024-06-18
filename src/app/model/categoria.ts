export class Categoria{
  _id!: number;
  nombre: string;
  descripcion: string;


  constructor(_id: number, nombre: string, descripcion: string) {
    this._id = _id;
    this.nombre = nombre;
    this.descripcion = descripcion;
}
}
