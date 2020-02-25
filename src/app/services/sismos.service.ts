import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Sismo } from '../models/sismo';
import { environment } from '../../../src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SismosService {

  private Url:string;
  constructor(private http: HttpClient) {
    this.Url = `${environment.url}/api/v1/sismos`;
   }

  public getSismos(): Observable<Sismo[]>{
      return this.http.get<Sismo[]>(this.Url);
  }

  public getSismo(id) : Observable<Sismo>{
    return this.http.get<Sismo>(`${this.Url}/${id}`);
   }

   public registrarSismo(registro: Sismo)
   {
     return this.http.post(this.Url,registro);
   }

   public editarSismo(registro:Sismo)
   {
       return this.http.put(this.Url,registro)
   }

}
