import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservacionesService } from '../services/reservaciones.service';
import { RestaurantesService } from '../services/restaurantes.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista-reservas-restaurantes',
  templateUrl: './lista-reservas-restaurantes.component.html',
  styleUrls: ['./lista-reservas-restaurantes.component.css']
})
export class ListaReservasRestaurantesComponent implements OnInit {

  formRestaurants!: FormGroup;

  restaurants = new Array();
  reservations = new Array();

  constructor(private reservationService: ReservacionesService, private fb: FormBuilder, private restaurantService: RestaurantesService) {
    this.createFormListRestaurants();
    this.listRestaurants();
  }

  ngOnInit(): void {
  }

  createFormListRestaurants() {
    this.formRestaurants = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required]
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

  searchRestaurants() {

    this.reservationService.getRestaurantsReservations(this.formRestaurants.controls['name'].value, this.formRestaurants.controls['date'].value)
        .subscribe(
          (data: any) => {
            console.log(data)
            if(data.length > 0){
              for(var i=0; i < data.length; i++) {
                if (data[i].restaurant.name === this.formRestaurants.controls['name'].value) {
                  var reservationL = {
                    restaurant: data[i].restaurant.name,
                    date: data[i].year,
                    hour: data[i].hour,
                    client: data[i].client.name + " " + data[i].client.lastName
                  }
                  this.reservations.push(reservationL);
                }
              }
            }else {
              Swal.fire({
                title: 'No Existe Reservaciones',
                text: 'Vacio',
                icon: 'warning'
              })
              this.formRestaurants.reset();
            }
          }
        );
  }

}
