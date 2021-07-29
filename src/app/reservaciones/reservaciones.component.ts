
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { RestaurantesService } from '../services/restaurantes.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  formClient!: FormGroup;

  error: boolean = false;
  messageError!: string;

  restaurants = new Array;

  constructor( private restaurantService: RestaurantesService, private clientService: ClientesService, private fb: FormBuilder) {
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
        this.messageError = `Usuario No Encontrado`;
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
      date: [''],
      hour: ['']
    });
  }

  checkBoolean(): boolean {
    return true;
  }

  saveReservation() {
    console.log(this.formClient);
  }

}
