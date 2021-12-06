import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago.interface';
import { AdministradorService } from 'src/app/service/administrador-pago.service';

@Component({
  selector: 'app-pago-mantenimiento-nuevo-pago',
  templateUrl: './pago-mantenimiento-nuevo-pago.component.html',
  styleUrls: ['./pago-mantenimiento-nuevo-pago.component.scss']
})
export class PagoMantenimientoNuevoPagoComponent implements OnInit {

  constructor(private pagoService: AdministradorService) { }

  ngOnInit(): void {
  }

  crearPago(monto:string)
  {
    const nuevoPago: Pago = {
      id: 0,
      estadoPago: true,
      fechaLimitePago: new Date,
      fechaPago: new Date,
      monto: parseFloat(monto) ,
      mora: 0,
      correspondeContrato: 0
    };
    this.pagoService.agregarPago(nuevoPago);
  }  

}
