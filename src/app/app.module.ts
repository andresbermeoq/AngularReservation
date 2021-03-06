import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesService } from './services/clientes.service';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestaurantesService } from './services/restaurantes.service';
import { InicioComponent } from './inicio/inicio.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { ListaReservasClientesComponent } from './lista-reservas-clientes/lista-reservas-clientes.component';
import { ListaReservasRestaurantesComponent } from './lista-reservas-restaurantes/lista-reservas-restaurantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    RestaurantesComponent,
    InicioComponent,
    ReservacionesComponent,
    ListaReservasClientesComponent,
    ListaReservasRestaurantesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientesService, RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
