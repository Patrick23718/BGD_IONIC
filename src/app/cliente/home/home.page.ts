import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  focused : boolean;
  btn : boolean = true;
  part1 : boolean = true;
  part2: boolean = false;
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
