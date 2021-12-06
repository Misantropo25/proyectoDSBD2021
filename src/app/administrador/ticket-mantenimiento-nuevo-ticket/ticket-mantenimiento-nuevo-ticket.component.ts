import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { AdministradorService } from 'src/app/service/administrador-ticket.service';

@Component({
  selector: 'app-ticket-mantenimiento-nuevo-ticket',
  templateUrl: './ticket-mantenimiento-nuevo-ticket.component.html',
  styleUrls: ['./ticket-mantenimiento-nuevo-ticket.component.scss']
})
export class TicketMantenimientoNuevoTicketComponent implements OnInit {

  constructor(private ticketService: AdministradorService) { }

  ngOnInit(): void {
  }

  crearTicket(descripcionTicket: string, tipoDeSolicitud: string){
    const nuevoTicket: Ticket = {
      id: 0,
      descripcionTicket: descripcionTicket,
      estadoTicket: true,
      fecCreacion: new Date,
      fecFinalizacion: new Date,
      tipoDeSolicitud: tipoDeSolicitud,
      clienteSolicito: 0
    };
    this.ticketService.agregarTicket(nuevoTicket);
  }  

}
