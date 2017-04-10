import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    tituloPagina: string = 'Lista de productos:';
    imagenAncho: number = 50;
    imagenMargen: number = 2;
    mostrarImagen: boolean = false;
    listaFiltro: string = '';
    products: IProduct[];
    mensajeError: string;

    constructor(private _productService: ProductService){

    }

    toogleImagen() :void{
        this.mostrarImagen = !this.mostrarImagen;
    }

    ngOnInit(){
        this._productService.getProducts().subscribe(products => this.products = products, error => this.mensajeError = <any> error);
    }

    OnRatingClicked(message: string) : void {
        this.tituloPagina = 'Lista de productos: '+ message;
    }
}