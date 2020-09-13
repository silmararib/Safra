import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})
export class NewsPage {
  publ = false;
    noticias = [
      {
        nome: 'Ana Maria',
        texto: 'Essa é a primeira notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'João Pedro',
        texto: 'Essa é a segunda notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Sophia Bruna',
        texto: 'Essa é a terceira notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Heitor João',
        texto: 'Essa é a quarta notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Gustavo César',
        texto: 'Essa é a quinta notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Ana Júlia',
        texto: 'Essa é a sexta notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Pedro Henrique',
        texto: 'Essa é a sétima notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Paulo Henrique',
        texto: 'Essa é a oitava notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Sabrina Alice',
        texto: 'Essa é a nona notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        nome: 'Bruna Lara',
        texto: 'Essa é a décima notícia do aplicativo Safra Connect!',
        foto: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      }
    ];

   
  constructor() {}

  ionViewWillEnter() {}

}
