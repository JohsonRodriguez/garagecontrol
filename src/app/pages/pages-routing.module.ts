import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MovilidadesComponent } from './movilidades/movilidades.component';

const routes: Routes = [
  {
  path: 'dashboard', component: PagesComponent,
  children: [
   {path: 'dashboard',component:DashboardComponent},
   {path: 'movilidades',component:MovilidadesComponent},
  {path: 'pedidos',component:PedidosComponent}
  
  ]}
  
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
