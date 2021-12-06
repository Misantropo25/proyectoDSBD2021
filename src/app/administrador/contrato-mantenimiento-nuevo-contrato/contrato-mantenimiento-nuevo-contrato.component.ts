import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador-contrato.service';
import { ContratoService } from '../../contratos/services/contratos.service';
import { Contrato } from '../../interfaces/contrato.interface';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-contrato-mantenimiento-nuevo-contrato',
  templateUrl: './contrato-mantenimiento-nuevo-contrato.component.html',
  styleUrls: ['./contrato-mantenimiento-nuevo-contrato.component.scss']
})
export class ContratoMantenimientoNuevoContratoComponent implements OnInit {
  nuevoCliente: Cliente = {
    id: 1,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    contrasenia: '',
    direccion: '',
    email: '',
    nacionalidad: '',
    nomUsuario: '',
    nombre: '',
    numTelefono: '',
    sexo: '',
    tipDocIdentificacion: ''
  }


  constructor(private contratoService: AdministradorService) { }

  ngOnInit(): void {
  }

  crearContrato(descripcion:string,direccion:string,distritoDireccion:string,modDePago:string,refDireccion:string,restricciones:string,tasaDeMora:string){
    const nuevoContrato: Contrato = {
      id: 0,
      descripcion: descripcion,
      direccion: direccion,
      distritoDireccion: distritoDireccion,
      estadoContrato: true,
      fecCreacion: new Date,
      fecFinalizacion: new Date,
      modDePago: modDePago,
      refDireccion: refDireccion,
      restricciones: restricciones,
      tasaDeMora: parseFloat(tasaDeMora),
      correspondeCliente: this.nuevoCliente.id,
      tieneServicio: 1
    };
    this.contratoService.agregarContrato(nuevoContrato);
  }   

}
