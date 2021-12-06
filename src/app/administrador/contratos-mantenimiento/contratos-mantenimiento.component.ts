import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador-contrato.service';

@Component({
  selector: 'app-contratos-mantenimiento',
  templateUrl: './contratos-mantenimiento.component.html',
  styleUrls: ['./contratos-mantenimiento.component.scss']
})
export class ContratosMantenimientoComponent implements OnInit {

  constructor(private contratoService: AdministradorService) { 
    this.contratoService.listarContrato();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.contratoService.lista;
  }

  eliminarContrato(idContrato:number) {
    this.contratoService.eliminarContrato(idContrato);
  }

}
