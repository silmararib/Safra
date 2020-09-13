import { Component } from '@angular/core';

@Component({
  selector: 'app-finances',
  templateUrl: 'finances.page.html',
  styleUrls: ['finances.page.scss']
})
export class FinancesPage {
  saldo = false;
  transf = false;

  metas = [
    {
      id: 'Objetivo',
      texto: 'Progresso no Objetivo',
      foto: './assets/jouney_user.png'
    }];
  constructor() {}

}
