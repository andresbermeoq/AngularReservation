import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationModel } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  private url = 'http://localhost:8080/App-Reservations/api/reservar';

  constructor(private http:HttpClient) { }

  saveReservacion(body: URLSearchParams) {
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }
    return this.http.post(`${this.url}/crear`, body, httpOptions);
  }
}
