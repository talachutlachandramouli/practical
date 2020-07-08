import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(private _http: HttpClient) { }
  private showNavbar = new Subject <boolean>();//true

  serverUrl = "http://localhost:3000/";

  url: string;

  shownavbar(status : boolean){
    this.showNavbar.next(status);
  }

  get_products():Observable<any>{
    this.url = this.serverUrl+'products';
    return this._http.get(this.url);
  }

  add_to_cart(data):Observable<any>{
    this.url = this.serverUrl+'add_products_cart';
    return this._http.post(this.url,data);
  }

  get_from_cart():Observable<any>{
    this.url = this.serverUrl+'add_products_cart';
    return this._http.get(this.url);
  }
  delete_from_cart(data):Observable<any>{
    this.url = this.serverUrl+'add_products_cart/'+data.id;
    return this._http.delete(this.url,data);
  }
  add_user(data):Observable<any>{
    this.url = this.serverUrl+'users';
    return this._http.post(this.url,data);
  }
  get_user():Observable<any>{
    this.url = this.serverUrl+'users';
    return this._http.get(this.url);
  }

}
