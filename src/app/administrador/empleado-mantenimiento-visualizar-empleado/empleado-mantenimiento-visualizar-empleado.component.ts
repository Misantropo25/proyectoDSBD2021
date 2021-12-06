import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { AdministradorService } from 'src/app/service/administrador-empleado.service';

@Component({
  selector: 'app-empleado-mantenimiento-visualizar-empleado',
  templateUrl: './empleado-mantenimiento-visualizar-empleado.component.html',
  styleUrls: ['./empleado-mantenimiento-visualizar-empleado.component.scss']
})
export class EmpleadoMantenimientoVisualizarEmpleadoComponent implements OnInit {
  empleado: Empleado = {
    id: 0,
    dni: '',
    apePaterno: '',
    apeMaterno: '',
    area: '',
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

  constructor(private empleadoService: AdministradorService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if(id!=null){
      this.empleadoService.listarEmpleadoPorId(parseInt(id)).subscribe((data: Empleado) => {
        this.empleado = data
      });
    }
  }

}
