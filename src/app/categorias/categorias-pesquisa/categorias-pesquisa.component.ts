import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [];

  nomeBusca:string;

  constructor(
    private service:CategoriasService,
    private msg:MessageService
    ) { }

  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(() =>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    })
  }

}
