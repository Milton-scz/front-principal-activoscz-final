export class Cliente{
  clienteId!: number;
  nombre: string;
  cedula: string;
  celular: string;
  fechaNacimiento: string;
  direccion: string;



  constructor(nombre: string, cedula: string, celular:string ,fechaNacimiento:string, direccion:string) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.celular = celular;
    this.fechaNacimiento = fechaNacimiento;
    this.direccion = direccion;
}
}
