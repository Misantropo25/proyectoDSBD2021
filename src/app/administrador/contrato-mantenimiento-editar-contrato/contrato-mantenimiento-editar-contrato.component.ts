import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from 'src/app/service/administrador-contrato.service';
import { Contrato } from '../../interfaces/contrato.interface';

@Component({
  selector: 'app-contrato-mantenimiento-editar-contrato',
  templateUrl: './contrato-mantenimiento-editar-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-editar-contrato.component.scss']
})
export class ContratoMantenimientoEditarContratoComponent implements OnInit {

  contrato: Contrato = {
    id: 0,
    descripcion: '',
    direccion: '',
    distritoDireccion: '',
    estadoContrato: true,
    fecCreacion: new Date,
    fecFinalizacion: new Date,
    modDePago: '',
    refDireccion: '',
    restricciones: '',
    tasaDeMora: 0,
    correspondeCliente: 0,
    tieneServicio: 0
  }

  constructor(private contratoService: AdministradorService, private _route: ActivatedRoute) { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.contratoService.listarContratoPorId(parseInt(id)).subscribe((data: Contrato) => {
        this.contrato = data
      });
    }
  }

  editarContrato(id:string,descripcion:string,direccion:string,distritoDireccion:string,estadoContrato:string,modDePago:string,refDireccion:string,restricciones:string,tasaDeMora:string){
    const contratoModificado: Contrato = {
      id: 0,
      descripcion: descripcion,
      direccion: direccion,
      distritoDireccion: distritoDireccion,
      estadoContrato: (/estadoContrato/i).test('true'),
      fecCreacion: new Date,
      fecFinalizacion: new Date,
      modDePago: modDePago,
      refDireccion: refDireccion,
      restricciones: restricciones,
      tasaDeMora: parseFloat(tasaDeMora),
      correspondeCliente: 1,
      tieneServicio: 1
    };
    this.contratoService.editarContrato(parseInt(id),contratoModificado);  
  }   

}
