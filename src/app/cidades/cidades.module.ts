import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CidadesService } from './cidades.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';

import {DropdownModule} from 'primeng/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CidadesCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    CidadesService
  ],
  exports:[
    CidadesCadastroComponent
  ]
})
export class CidadesModule { }
