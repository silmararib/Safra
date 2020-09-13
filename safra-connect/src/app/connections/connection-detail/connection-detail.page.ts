import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection-detail',
  templateUrl: './connection-detail.page.html',
  styleUrls: ['./connection-detail.page.scss'],
})
export class ConnectionDetailPage implements OnInit {

  conexao = {
    nome: 'João Pedro',
    descricao: 'Empreendedor, gerencio minha própria doceria, adoro ter meu negócio próprio!'
  };

  constructor() { }

  ngOnInit() {
  }

}
