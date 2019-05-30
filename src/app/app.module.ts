import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosModule } from './estados/estados.module';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';

import { CategoriasModule } from './categorias/categorias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConfirmationService } from 'primeng/api';

import { Routes, RouterModule } from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosModule } from './produtos/produtos.module';

const rotas: Routes = [
  {path: '', redirectTo:'categorias', pathMatch:'full'},
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent},
  {path: 'cidades/novo', component: CidadesCadastroComponent},
  {path: 'cidades/:id', component: CidadesCadastroComponent},
  {path: 'cidades', component: CidadesCadastroComponent},
  {path: 'produtos/:id', component: ProdutosCadastroComponent},
  {path: 'produtos/novo', component: ProdutosCadastroComponent},
  {path: 'produtos', component: ProdutosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    EstadosModule,
    SidebarModule,
    ButtonModule,
    CidadesModule,
    ProdutosModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
