import { Categoria } from './../model';
import { MessageService, ConfirmationService } from 'primeng/api';
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
    private msg:MessageService,
    private conf: ConfirmationService
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


  confirmarExclusao(categoria:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+categoria.nome+'?',
      accept: () => {
       this.excluir(categoria);
      }
   });
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(() =>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    })
  }

}
