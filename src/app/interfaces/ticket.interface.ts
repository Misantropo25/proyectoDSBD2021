export interface Ticket{
    id: number;
    descripcionTicket: string;
    estadoTicket: Boolean;
    fecCreacion: Date;
    fecFinalizacion: Date;
    tipoDeSolicitud: string;
    clienteSolicito: number;   
}