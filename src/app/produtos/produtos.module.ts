import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosPesquisaComponent } from './produtos-pesquisa/produtos-pesquisa.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutosService } from './produtos.service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import {PickListModule} from 'primeng/picklist';

@NgModule({
  declarations: [ProdutosPesquisaComponent, ProdutosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ButtonModule
  ],
  providers: [
    ProdutosService
  ],
  exports:[
    ProdutosCadastroComponent
  ]
})
export class ProdutosModule { }
