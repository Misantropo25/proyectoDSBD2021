import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador-ticket.service';

@Component({
  selector: 'app-tickets-mantenimiento',
  templateUrl: './tickets-mantenimiento.component.html',
  styleUrls: ['./tickets-mantenimiento.component.scss']
})
export class TicketsMantenimientoComponent implements OnInit {

  constructor(private ticketService: AdministradorService) { 
    this.ticketService.listarTickets();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.ticketService.lista;
  }

  eliminarTicket(idTicket:number) {
    this.ticketService.eliminarTicket(idTicket);
  }

}
