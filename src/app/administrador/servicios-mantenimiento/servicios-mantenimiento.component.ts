import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/service/administrador-servicio.service';

@Component({
  selector: 'app-servicios-mantenimiento',
  templateUrl: './servicios-mantenimiento.component.html',
  styleUrls: ['./servicios-mantenimiento.component.scss']
})
export class ServiciosMantenimientoComponent implements OnInit {

  constructor(private servicioService: AdministradorService) { 
    this.servicioService.listarServicios();
  }

  ngOnInit(): void {
  }

  get lista() {
    return this.servicioService.lista;
  }

  eliminarServicio(idServicio:number) {
    this.servicioService.eliminarServicio(idServicio);
  }
}
