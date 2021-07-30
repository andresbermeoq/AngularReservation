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

  validateIdCard(cedula: String) {
    let cedulaCorrecta = false;
    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
        }
        suma = Math.round(suma);
        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    return cedulaCorrecta;
  }

  saveClient( form: NgForm ) {

    if( form.invalid ) {
      Swal.fire({
        title: 'Registro de Usuario',
        text: 'Formulario Invalido',
        icon: 'error'
      })
      return;
    }

    Swal.fire({
      title: 'Error',
      text: 'Usuario con la Cedula ya existe',
      icon: 'error',
      timer: 10000,
      showConfirmButton: true
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
      }, (err : any) => {
        Swal.fire({
          title: 'Error',
          text: 'Usuario con la Cedula ya existe',
          icon: 'error'
        })
        form.reset();
      });
  }

}
