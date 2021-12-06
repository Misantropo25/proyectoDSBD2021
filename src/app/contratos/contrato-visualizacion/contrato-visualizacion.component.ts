import { Component, OnInit } from '@angular/core';
import { Contrato } from '../interfaces/contrato.interface';
import { ContratoService } from '../services/contratos.service';

@Component({
  selector: 'app-contrato-visualizacion',
  templateUrl: './contrato-visualizacion.component.html',
  styleUrls: ['./contrato-visualizacion.component.css']
})
export class ContratoVisualizacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  private contratosService: ContratoService = new ContratoService;

  contratos: Contrato[] = this.contratosService.contratos

  



}
