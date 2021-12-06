import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { TicketMantenimientoComponent } from './ticket-mantenimiento/ticket-mantenimiento.component';
import { TicketVisualizacionComponent } from './ticket-visualizacion/ticket-visualizacion.component';
import { UsuariosModule } from '../usuarios/usuarios.module';




@NgModule({
  declarations: [
    TicketMantenimientoComponent,
    TicketVisualizacionComponent
  ],
  exports:[
    TicketMantenimientoComponent,
    TicketVisualizacionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    UsuariosModule
  ]
})
export class TicketsModule { }
