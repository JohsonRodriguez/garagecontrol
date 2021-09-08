import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    DashboardComponent,
    PedidosComponent,
    PagesComponent,
    
  ],
  exports:[
    DashboardComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class PagesModule { }
