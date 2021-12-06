import { Injectable } from "@angular/core";
import { Contrato } from "../interfaces/contrato.interface";

@Injectable()
export class ContratoService
{
    _contratos: Contrato[] = [
        {
            IdContrato: "1",
            Descripcion: "Plan 80 Mb",
            Estado: "Vigente",
        },
        {
            IdContrato: "2",
            Descripcion: "Plan 80 Mb",
            Estado: "Cancelado",
        },
        {
            IdContrato: "3",
            Descripcion: "Plan 100 Mb",
            Estado: "Cancelado",
        },
        {
            IdContrato: "4",
            Descripcion: "Plan 40 Mb",
            Estado: "Cancelado",
        }
      ]

    get contratos(): Contrato[]{
      return this._contratos;
    }



    agregar(nuevoContrato: Contrato): void {
        this.contratos.push(nuevoContrato);
    }

}