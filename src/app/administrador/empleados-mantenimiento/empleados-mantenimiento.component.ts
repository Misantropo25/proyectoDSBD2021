import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../service/administrador-empleado.service';

@Component({
  selector: 'app-empleados-mantenimiento',
  templateUrl: './empleados-mantenimiento.component.html',
  styleUrls: ['./empleados-mantenimiento.component.scss']
})
export class EmpleadosMantenimientoComponent implements OnInit {

  constructor(private empleadoService: AdministradorService) {
    this.empleadoService.listarEmpleado();
   }

  ngOnInit(): void {
  }

  get lista() {
    return this.empleadoService.lista;
  }

  eliminarEmpleado(idEmpleado:number) {
    this.empleadoService.eliminarEmpleado(idEmpleado);
  }
}
