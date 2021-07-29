import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantModel } from '../models/restaurant.model';
import { RestaurantesService } from '../services/restaurantes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurant: RestaurantModel = new RestaurantModel();

  constructor(private restaurantService: RestaurantesService) { }

  ngOnInit(): void {
  }

  saveRestaurant( form: NgForm) {
    if (form.invalid) {
      console.log('Formulario No Valido');
      return;
    }

    Swal.fire({
      title: 'Hola',
      text: 'Esperando Informacion',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let petition: Observable<any>;

    petition = this.restaurantService.saveRestaurant(this.restaurant);

    petition.subscribe
    ( (resp: any) => {
        Swal.fire({
          title: 'Registro de Restaurante',
          text: 'Restaurante Registrado Correctamente',
          icon: 'success'
        })
      });
  }
}
