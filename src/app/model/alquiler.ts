import { Activo } from "./activo";

import { Cliente } from "./cliente";

export class Alquiler{
  alquilerId!: number;
  activo: Activo;
  cliente: Cliente;
  fechaInicio: string;
  fechaFin: string;
  monto: string;
  descripcion: string;

  constructor(alquilerId: number,activo: Activo, cliente: Cliente, fechaInicio: string, fechaFin: string, monto: string,descripcion: string) {
    this.alquilerId = alquilerId;
    this.activo = activo;
    this.cliente = cliente;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.monto = monto;
    this.descripcion = descripcion;


}


}
