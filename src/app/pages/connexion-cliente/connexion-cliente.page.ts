import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion-cliente',
  templateUrl: './connexion-cliente.page.html',
  styleUrls: ['./connexion-cliente.page.scss'],
})
export class ConnexionClientePage implements OnInit {
  focused: boolean;
  constructor() {}

  ngOnInit() {}
  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }
}
