import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorService } from 'src/app/service/administrador-cliente.service';

@Component({
  selector: 'app-clientes-mantenimiento-visualizar-cliente',
  templateUrl: './clientes-mantenimiento-visualizar-cliente.component.html',
  styleUrls: ['./clientes-mantenimiento-visualizar-cliente.component.scss']
})
export class ClientesMantenimientoVisualizarClienteComponent implements OnInit {

  cliente: Cliente = {
    id: 0,
    dni: "",
    apePaterno: "",
    apeMaterno: "",
    sexo: "",
    tipDocIdentificacion: "",
    email: "",
    numTelefono: "",
    nacionalidad: "",
    direccion: "",
    nomUsuario: "",
    nombre: "",
    contrasenia: ""
  };

  constructor(private clienteService: AdministradorService, private _route: ActivatedRoute) { 
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.clienteService.listarClientePorId(parseInt(id)).subscribe((data: Cliente) => {
        this.cliente = data
      });
    }
  }

  




}
