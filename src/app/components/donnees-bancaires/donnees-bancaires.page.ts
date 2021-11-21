import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donnees-bancaires',
  templateUrl: './donnees-bancaires.page.html',
  styleUrls: ['./donnees-bancaires.page.scss'],
})
export class DonneesBancairesPage implements OnInit {


  focused : boolean;
  constructor() { }

  ngOnInit() {
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }


}
