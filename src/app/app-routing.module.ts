import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaReservasClientesComponent } from './lista-reservas-clientes/lista-reservas-clientes.component';
import { ListaReservasRestaurantesComponent } from './lista-reservas-restaurantes/lista-reservas-restaurantes.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registrarse', component: ClientesComponent },
  { path: 'registrarseRestaurante', component: RestaurantesComponent },
  { path: 'registrarseReserva', component: ReservacionesComponent },
  { path: 'listaClientes', component: ListaReservasClientesComponent },
  { path: 'listaRestaurantes', component: ListaReservasRestaurantesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
