export interface Pago{
    id: number;
    estadoPago: Boolean;
    fechaLimitePago: Date;
    fechaPago: Date;
    monto: number;
    mora: number;
    correspondeContrato: number;
}