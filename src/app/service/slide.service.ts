import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const ApiUrl = 'http://localhost:3000/slide';
@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private http: HttpClient) { }
  getSlides() : Observable <any>{

    return this.http.get(ApiUrl)
  }
  
  getSlide(id : number|string) : Observable<any>{

    return this.http.get(`${ApiUrl}/${id}`)

  }

  createSlide(data:any):Observable<any>{
    return this.http.post(ApiUrl,data);
  }

  upDateSlide(id:number|string,data:any):Observable<any>{
    return this.http.put(`${ApiUrl}/${id}` , data);

  }
  
  deleteSlice(id:number|string){
    return this.http.delete(`${ApiUrl}/${id}`);
  }
}
