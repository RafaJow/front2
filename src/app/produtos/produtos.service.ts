import { Injectable } from '@angular/core';
import { Produto } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtosURL = 'http://localhost:8090/produtos';

  constructor(private http: HttpClient) { }

  adicionar(produto: Produto): Promise<any>{
   return this.http.post(this.produtosURL, produto)
   .toPromise();
 }

}
