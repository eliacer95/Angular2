export interface IProduct{
    idProducto: number;
    productName: string;
    codigoProducto: string;
    fechaPublicacion: string;
    precio: number;
    descripcion: string;
    rating: number;
    imagenURL: string;
}

/*export class Product implements IProduct{
    constructor(
        public idProducto: number,
        public productName: string,
        public codigoProducto: string,
        public fechaPublicacion: string,
        public precio: number,
        public descripcion: string,
        public rating: number,
        public imagenURL: string
    ){

    }
    calcularDescuento(porcentaje: number): number{
        return this.precio - (this.precio * porcentaje) / 100;
    }
}*/