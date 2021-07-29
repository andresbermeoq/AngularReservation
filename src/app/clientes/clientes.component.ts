import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../models/client.model';
import { ClientesService } from '../services/clientes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  client: ClientModel = new ClientModel();

  constructor( private clientsService: ClientesService) { }

  ngOnInit(): void {
  }

  saveClient( form: NgForm ) {

    if( form.invalid ) {
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

    petition = this.clientsService.saveClient(this.client);

    petition.subscribe
    ( (resp: any) => {
        Swal.fire({
          title: 'Registro de Usuario',
          text: 'Usuario Registrado Correctamente',
          icon: 'success'
        })
      });
  }

}
