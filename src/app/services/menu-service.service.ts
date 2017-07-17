import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HeaderMenu} from '../classes/HeaderMenu';
import {CategoryHeaderMenu} from '../classes/CategoryHeaderMenu';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuServiceService {
constructor(private http:Http) { }

 getHeaderMenu():Observable<HeaderMenu[]>{
   let headers      = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
   headers.append('Access-Control-Allow-Origin','*')
   let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get("http://localhost:2551/gettopheader")
     .map((res:Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }
  getCategoryHeaderMenu():Observable<CategoryHeaderMenu[]>{
    let headers      = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
   headers.append('Access-Control-Allow-Origin','*')
   let options       = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.get("http://localhost:2551/getshopbycategorymenu")
     .map((res:Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
 }
}

