
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationModel } from '../models/reservation.model';
import { ClientesService } from '../services/clientes.service';
import { ReservacionesService } from '../services/reservaciones.service';
import { RestaurantesService } from '../services/restaurantes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  formClient!: FormGroup;

  reservation: ReservationModel = new ReservationModel();

  error: boolean = false;
  messageError!: string;

  restaurants = new Array;

  constructor( private restaurantService: RestaurantesService, private clientService: ClientesService, private fb: FormBuilder, private reservationService: ReservacionesService) {
    this.createFormReservation();
    this.listRestaurants();
  }

  ngOnInit(): void {
  }

  searchClient(idCard: string) {
    this.clientService.getClientbyIdCard(idCard)
      .subscribe((data: any) => {
        this.error = false;
        this.formClient.enable();
      }, (err: any) => {
        this.error = true;
        this.messageError = `Usuario No Encontrado, Registrarse`;
      });
  }

  listRestaurants() {
    this.restaurantService.getRestaurants()
      .subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          var restaurantsL = {
            id: data[i].id,
            name: data[i].name
          };
          this.restaurants.push(restaurantsL);
        }
      });
  }

  get idCardInvalid() {
    return this.error;
  }

  createFormReservation() {
    this.formClient = this.fb.group({
      idCard: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      restaurant: ['', [Validators.required]],
      numberCapacity: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hour: ['', [Validators.required]]
    });
  }

  checkBoolean(): boolean {
    return true;
  }

  saveReservation() {
    if (this.formClient.invalid) {
      console.log('Formulario No Valido');
      return;
    }
    let body = new URLSearchParams();

    body.set("fecha", this.formClient.controls['date'].value);
    body.set("hora", this.formClient.controls['hour'].value);
    body.set("capacidad", this.formClient.controls['numberCapacity'].value)
    body.set("cedula", this.formClient.controls['idCard'].value)
    body.set("restaurante", this.formClient.controls['restaurant'].value);

    Swal.fire({
      title: 'Error',
      text: 'Ocupado',
      icon: 'error',
      timer: 10000,
      showConfirmButton: true
    });
    Swal.showLoading();

    let petition: Observable<any>;

    petition = this.reservationService.saveReservacion(body);

    petition.subscribe((resp: any) => {
      Swal.fire({
        title: 'Registro de Reservacion',
        text: 'Reservacion Registrada Correctamente',
        icon: 'success'
      })
    }, (err) => {
      Swal.fire({
        title: 'Error',
        text: 'Ocupado',
        icon: 'error'
      })
      this.formClient.reset();
    });
  }

}
