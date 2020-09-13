import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario = {
    nome: 'Sofia',
    descricao: 'Brasileira conectada e amante da praia.'
  };

  constructor() { }

  ngOnInit() {
  }

}
