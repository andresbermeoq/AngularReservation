
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservacionesService } from '../services/reservaciones.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-reservas-clientes',
  templateUrl: './lista-reservas-clientes.component.html',
  styleUrls: ['./lista-reservas-clientes.component.css']
})
export class ListaReservasClientesComponent implements OnInit {

  formClients!: FormGroup;

  clients = new Array();

  constructor(private reservationService: ReservacionesService, private fb: FormBuilder) {
    this.createFormListClients();
  }

  ngOnInit(): void {
  }

  createFormListClients() {
    this.formClients = this.fb.group({
      idCard: ['', Validators.required]
    });
  }

  searchClients() {

    this.reservationService.getClientsReservations(this.formClients.controls['idCard'].value)
        .subscribe( (data:any) => {
          console.log(data);
          if(data.length > 0){
            for(var i=0; i < data.length; i++) {
              if (data[i].client.idCard === this.formClients.controls['idCard'].value) {
                var client = {
                  name: data[i].client.name + " " + data[i].client.lastName,
                  date: data[i].date,
                  hour: data[i].hour
                }
                this.clients.push(client)
              }
            }
          }else {
            Swal.fire({
              title: 'No Existe el Cliente',
              text: 'Vacio',
              icon: 'warning'
            })
            this.formClients.reset();
          }
        })
  }



}
