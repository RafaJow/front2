import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasURL = 'http://localhost:8090/categorias';

  constructor(private http: HttpClient) { }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.categoriasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  pesquisar(filtro: any): Promise<any> {

    if(filtro.nome){
      this.categoriasURL = 'http://localhost:8090/categorias/filtro?nome='+filtro.nome;
    }else{
      this.categoriasURL = 'http://localhost:8090/categorias';
    }

    return this.http.get<any>(this.categoriasURL).toPromise();
  }
}
