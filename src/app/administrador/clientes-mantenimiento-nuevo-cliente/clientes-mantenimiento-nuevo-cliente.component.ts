import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorService } from 'src/app/service/administrador-cliente.service';

@Component({
  selector: 'app-clientes-mantenimiento-nuevo-cliente',
  templateUrl: './clientes-mantenimiento-nuevo-cliente.component.html',
  styleUrls: ['./clientes-mantenimiento-nuevo-cliente.component.scss']
})
export class ClientesMantenimientoNuevoClienteComponent implements OnInit {

  constructor(private clienteService: AdministradorService) { }

  ngOnInit(): void {
  }

  crearCliente(dni:string, apePaterno:string, apeMaterno:string, sexo:string, tipDocIdentificacion:string, email:string,numTelefono:string,nacionalidad:string,direccion:string,nomUsuario:string,nombre:string,contrasenia:string){
    const nuevoCliente: Cliente = {
      id: 0,
      dni: dni,
      apePaterno: apePaterno,
      apeMaterno: apeMaterno,
      sexo: sexo,
      tipDocIdentificacion: tipDocIdentificacion,
      email: email,
      numTelefono: numTelefono,
      nacionalidad: nacionalidad,
      direccion: direccion,
      nomUsuario: nomUsuario,
      nombre: nombre,
      contrasenia: contrasenia
    };
    this.clienteService.agregarCliente(nuevoCliente);
  }   
}
