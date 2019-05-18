import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosPesquisaComponent } from './estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { EstadosService } from './estados.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [EstadosPesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
    EstadosCadastroComponent,
    EstadosPesquisaComponent
  ],
  providers:[
    EstadosService,
    MessageService

  ]
})
export class EstadosModule { }
