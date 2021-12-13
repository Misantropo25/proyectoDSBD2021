import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TicketMantenimientoComponent } from './ticket-mantenimiento/ticket-mantenimiento.component';
import { TicketVisualizacionComponent } from './ticket-visualizacion/ticket-visualizacion.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TicketSolicitudComponent } from './ticket-solicitud/ticket-solicitud.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TicketMantenimientoComponent,
    TicketVisualizacionComponent,
    TicketSolicitudComponent
  ],
  exports:[
    TicketMantenimientoComponent,
    TicketVisualizacionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    UsuariosModule,
    RouterModule
  ]
})
export class TicketsModule { }
