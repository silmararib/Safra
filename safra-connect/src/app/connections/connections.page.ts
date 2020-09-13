import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: 'connections.page.html',
  styleUrls: ['connections.page.scss']
})
export class ConnectionsPage {

  conexoes = [
    {
      nome: 'Ana Maria',
      texto: 'Diretora Financeira',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'João Pedro',
      texto: 'Empreendedor',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Sophia Bruna',
      texto: 'Estudante',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Heitor João',
      texto: 'Motorista',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Gustavo César',
      texto: 'Padeiro',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Ana Júlia',
      texto: 'Engenheira',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Pedro Henrique',
      texto: 'Analista de Sistemas',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Paulo Henrique',
      texto: 'Gerente de Projetos',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Sabrina Alice',
      texto: 'Diretora de Marketing',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Bruna Lara',
      texto: 'Desenvolvedora',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    }
  ];

  constructor() {}

}
