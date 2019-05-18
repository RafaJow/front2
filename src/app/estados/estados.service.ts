

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL = 'http://localhost:8090/estados';
  urlFiltro;

  constructor(private http: HttpClient) { }
}
