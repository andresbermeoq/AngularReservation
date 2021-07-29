import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client.model';

@Injectable()
export class ClientesService {

  private url = 'http://localhost:8080/App-Reservations/api/cliente';

  constructor(private http:HttpClient) { }

  saveClient( client: ClientModel) {
    return this.http.post(`${this.url}/crear`, client);
  }

  getClientbyIdCard(idCard: String) {
    return this.http.get(`${this.url}/buscarCedula?idCard=${idCard}`)
  }
}
