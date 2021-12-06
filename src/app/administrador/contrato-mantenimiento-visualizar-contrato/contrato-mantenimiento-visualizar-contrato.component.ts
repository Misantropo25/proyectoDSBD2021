import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/contrato.interface';
import { ContratoService } from '../../contratos/services/contratos.service';
import { AdministradorService } from 'src/app/service/administrador-contrato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrato-mantenimiento-visualizar-contrato',
  templateUrl: './contrato-mantenimiento-visualizar-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-visualizar-contrato.component.scss']
})
export class ContratoMantenimientoVisualizarContratoComponent implements OnInit {

  contrato: Contrato={
    id: 0,
    descripcion: '',
    direccion: '',
    distritoDireccion: '',
    estadoContrato: true,
    fecCreacion: new Date(),
    fecFinalizacion: new Date(),
    modDePago: '',
    refDireccion: '',
    restricciones: '',
    tasaDeMora: 0,
    correspondeCliente: 0,
    tieneServicio: 0
  }

  constructor(private contratoService: AdministradorService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.contratoService.listarContratoPorId(parseInt(id)).subscribe((data: Contrato) => {
        this.contrato = data
      });
    }
  }

}
