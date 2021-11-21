import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-mot-passe',
  templateUrl: './gestion-mot-passe.page.html',
  styleUrls: ['./gestion-mot-passe.page.scss'],
})
export class GestionMotPassePage implements OnInit {

  constructor(public location : Location) { }
  focused : boolean
  ngOnInit() {
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  myBackButton(){
    this.location.back()
  }

}
