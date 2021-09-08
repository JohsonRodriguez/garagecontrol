import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movilidades } from '../models/movilidades';

@Injectable({
  providedIn: 'root'
})
export class MovilidadService {
  movilidadURL = "http://localhost:8080/movilidad/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Movilidades[]> {
    return this.httpClient.get<Movilidades[]>(this.movilidadURL + "lista");
  }

}
