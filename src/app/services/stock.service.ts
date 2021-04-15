import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private _http: HttpClient) { }

  getStock() {
    const href = `${environment.host}`+`${environment.stock}`;
    console.log(href);

    return this._http.get(href)
  }
}
