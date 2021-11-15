import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-cliente',
  templateUrl: './inscription-cliente.page.html',
  styleUrls: ['./inscription-cliente.page.scss'],
})
export class InscriptionClientePage implements OnInit {

  focused: boolean;
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
