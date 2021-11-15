import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinitialisation2',
  templateUrl: './reinitialisation2.page.html',
  styleUrls: ['./reinitialisation2.page.scss'],
})
export class Reinitialisation2Page implements OnInit {


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
