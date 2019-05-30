import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cidade } from './model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidadesURL = 'http://localhost:8090/cidades';


  constructor(private http: HttpClient) { }

  listarUf(): Promise<any> {
    return this.http.get<any>('http://localhost:8090/estados').toPromise();
  }

  adicionar(cidade: Cidade): Promise<any>{
    return this.http.post(this.cidadesURL, cidade)
    .toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.cidadesURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(): Promise<any> {
    return this.http.get<any>(this.cidadesURL).toPromise();
  }

  alterar(cidade: Cidade): Promise<any>{
    return this.http.put(this.cidadesURL+'/'+cidade.id, cidade)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get<Cidade>(this.cidadesURL+'/'+codigo).toPromise();
  }

}
