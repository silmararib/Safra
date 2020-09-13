import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-expenses',
  templateUrl: 'shared-expenses.page.html',
  styleUrls: ['shared-expenses.page.scss']
})
export class SharedExpensesPage {

  rateios = [
    {
      nome: 'Rateio da viagem',
      inicio: '13/09/2020',
      situacao: 'Concluído',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Rateio do churrasco',
      inicio: '13/09/2020',
      situacao: 'Fechado',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Divisão do aluguel',
      inicio: '13/09/2020',
      situacao: 'Em andamento',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Grupo do aniversário',
      inicio: '13/09/2020',
      situacao: 'Concluído',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Rateio da festinha',
      inicio: '13/09/2020',
      situacao: 'Concluído',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      nome: 'Rateio da Netflix',
      inicio: '13/09/2020',
      situacao: 'Concluído',
      foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    }
  ];

  constructor() {}

}
