import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MovilidadesComponent } from './movilidades/movilidades.component';





@NgModule({
  declarations: [
    DashboardComponent,
    PedidosComponent,
    PagesComponent,
    MovilidadesComponent,
    
  ],
  exports:[
    DashboardComponent,
    PedidosComponent,
    MovilidadesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
