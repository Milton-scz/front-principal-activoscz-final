import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard', icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Gestion de Usuarios', icono: 'fa fa-cubes',
        submenu: [
          { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-cube' },
          { titulo: 'Clientes', url: 'clientes', icono: 'fa fa-tags' },
        ] },
        {
          titulo: 'Gestion de Activos', icono: 'fa fa-cubes',
          submenu: [
            { titulo: 'Activos', url: 'activos', icono: 'fa fa-cube' },
            { titulo: 'Categorías', url: 'categorias', icono: 'fa fa-tags' },
          ]
        },
        { titulo: 'Gestionar Contratos', url: 'alquileres', icono: 'fa fa-file-contract' },
        { titulo: 'Gestionar Mantenimiento', url: 'mantenimiento', icono: 'fa fa-tools' },
      ]
    }
  ];



}
