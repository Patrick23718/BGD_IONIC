import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.page.html',
  styleUrls: ['./resa.page.scss'],
})
export class ResaPage implements OnInit {
  resa;

  constructor() {}

  ngOnInit() {
    console.log(this.resa);
  }
}
