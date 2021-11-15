import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinitialisation1',
  templateUrl: './reinitialisation1.page.html',
  styleUrls: ['./reinitialisation1.page.scss'],
})
export class Reinitialisation1Page implements OnInit {

  focused:boolean;
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
