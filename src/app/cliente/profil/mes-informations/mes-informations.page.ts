import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-informations',
  templateUrl: './mes-informations.page.html',
  styleUrls: ['./mes-informations.page.scss'],
})
export class MesInformationsPage implements OnInit {

  focused : boolean;
  constructor(private location : Location) { }

  myBackButton(){
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  ngOnInit() {
  }

}
