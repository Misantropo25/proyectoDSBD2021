import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador-pago.service';

@Component({
  selector: 'app-pagos-mantenimiento',
  templateUrl: './pagos-mantenimiento.component.html',
  styleUrls: ['./pagos-mantenimiento.component.scss']
})
export class PagosMantenimientoComponent implements OnInit {

  constructor(private pagoService: AdministradorService) { 
    this.pagoService.listarPagos();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.pagoService.lista;
  }

  eliminarPago(idPago:number) {
    this.pagoService.eliminarPago(idPago);
  }
  

}
