import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
 //creación de menus por nfor    
  menu: any[] = [{

    submenu: [
      { titulo: 'Dashboard', url: 'dashboard',icono:'nav-icon fas fa-tachometer-alt' },
      { titulo: 'Movilidades', url: 'movilidades',icono:'nav-icon fas fa-car'},
      { titulo: 'Repartos', url: 'pedidos',icono:'fas fa-shipping-fast nav-icon' },
      { titulo: 'Mi Tienda', url: '',icono:'fas fa-store nav-icon' },
      { titulo: 'Mis datos personales', url: '',icono:'fas fa-user-circle nav-icon' },
      { titulo: 'Preguntas Frecuentes', url: '',icono:'fas fa-question-circle nav-icon' }
    ]

  }];
  
    

  

  constructor() { }
}
