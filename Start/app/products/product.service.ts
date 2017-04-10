import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductService{
    private _productUrl = 'api/productos/productos.json';

    constructor(private _http: Http){

    }

    getProducts(): Observable<IProduct[]>{
       return this._http.get(this._productUrl)
                  .map((response: Response) => <IProduct[]>response.json())
                  .do(data => console.log('Todos: '+JSON.stringify(data)))
                  .catch(this.handError);  
    }

    private handError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}