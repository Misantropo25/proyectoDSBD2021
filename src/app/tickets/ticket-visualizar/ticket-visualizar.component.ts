import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { AdministradorTicketService } from 'src/app/service/administradorTicket.service';

@Component({
  selector: 'app-ticket-visualizar',
  templateUrl: './ticket-visualizar.component.html',
  styleUrls: ['./ticket-visualizar.component.css']
})
export class TicketVisualizarComponent implements OnInit {
  id: string = "";

  cliente: Cliente = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: '',
    clienteSolicito: [],
    correspondeCliente: []
  }
  ticket: Ticket ={
    id: 0,
    descripcionTicket: '',
    estadoTicket: true,
    fecCreacion: new Date,
    fecFinalizacion: new Date,
    tipoDeSolicitud: '',
    clienteSolicito: this.cliente
  }
  constructor(private ticketService: AdministradorTicketService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id != null){
      this.id = id;
    }
  
    if(id!=null){
      this.ticketService.listarTicketPorId(parseInt(id)).subscribe((data: Ticket) => {
        this.ticket = data
      });
    }
  }

}
