import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-expenses-detail',
  templateUrl: './shared-expenses-detail.page.html',
  styleUrls: ['./shared-expenses-detail.page.scss'],
})
export class SharedExpensesDetailPage implements OnInit {

  rateio = {
    nome: 'Rateio da viagem',
    inicio: '13/09/2020',
    situacao: 'Concluído',
    foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
  }

  constructor() { }

  ngOnInit() {}

}
