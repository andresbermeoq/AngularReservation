import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registrarse', component: ClientesComponent },
  { path: 'registrarseRestaurante', component: RestaurantesComponent },
  { path: 'registrarseReserva', component: ReservacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
