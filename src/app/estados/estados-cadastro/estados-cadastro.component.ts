import { Component, OnInit } from '@angular/core';
import { Estado } from '../model';
import { ActivatedRoute } from '@angular/router';
import { EstadosService } from '../estados.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(
    private service: EstadosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
