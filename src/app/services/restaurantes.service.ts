import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantModel } from '../models/restaurant.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private url = 'http://localhost:8080/App-Reservations/api/restaurante';

  constructor(private http:HttpClient) { }

  saveRestaurant( restaurant: RestaurantModel ) {
    return this.http.post(`${this.url}/crear`, restaurant);
  }

  getRestaurants() {
    return this.http.get(`${this.url}/listar`);
  }


}
