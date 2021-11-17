import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-coiffeuse',
  templateUrl: './inscription-coiffeuse.page.html',
  styleUrls: ['./inscription-coiffeuse.page.scss'],
})
export class InscriptionCoiffeusePage implements OnInit {

  focused : boolean;
  constructor() { }

  ngOnInit() {}

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

}
