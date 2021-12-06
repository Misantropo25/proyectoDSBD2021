import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContratoMantenimientoComponent } from './contrato-mantenimiento/contrato-mantenimiento.component';
import { ContratoVisualizacionComponent } from './contrato-visualizacion/contrato-visualizacion.component';
import { UsuariosModule } from '../usuarios/usuarios.module';


@NgModule({
  declarations: [
    ContratoMantenimientoComponent,
    ContratoVisualizacionComponent
  ],
  exports:[
    ContratoMantenimientoComponent,
    ContratoVisualizacionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    UsuariosModule
  ]
})
export class ContratosModule { }
