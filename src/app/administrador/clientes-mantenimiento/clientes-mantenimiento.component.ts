import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { AdministradorService } from 'src/app/service/administrador-cliente.service';

@Component({
  selector: 'app-clientes-mantenimiento',
  templateUrl: './clientes-mantenimiento.component.html',
  styleUrls: ['./clientes-mantenimiento.component.scss']
})

export class ClientesMantenimientoComponent implements OnInit {
  constructor(private clienteService: AdministradorService){
    this.clienteService.listarCliente();
  }
  
  ngOnInit():void {
  }

  get lista() {
    return this.clienteService.lista;
  }

  eliminarCliente(idCliente:number) {
    this.clienteService.eliminarCliente(idCliente);
  }
  
}

  







