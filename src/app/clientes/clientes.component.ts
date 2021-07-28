import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientModel } from '../models/client.model';
import { ClientesService } from '../services/clientes.service';

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

    this.clientsService.saveClient(this.client)
    .subscribe( resp => {
        console.log(resp);
      });

  }

}
