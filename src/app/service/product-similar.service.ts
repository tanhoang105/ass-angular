import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const apiUrl = 'http://localhost:3000/product-similar'

@Injectable({
  providedIn: 'root'
})
export class ProductSimilarService {

  constructor ( private http : HttpClient) { }
  getProducts() : Observable <any>{

    return this.http.get(apiUrl)
  }
  
  getProduct(id : number|string) : Observable<any>{

    return this.http.get(`${apiUrl}/${id}`)

  }

  createProduct(data:any):Observable<any>{
    return this.http.post(apiUrl,data);
  }

  upDateProduct(id:number|string,data:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}` , data);

  }

  deleteProduct(id:number|string){
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
