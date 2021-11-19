import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {
  div1 = false;
  div2 = false;
  div3 = false;
  div4 = false;
  constructor(private location: Location) {}

  ngOnInit() {}

  myBackButton() {
    this.location.back();
  }
}
