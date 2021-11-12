import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacter-nous',
  templateUrl: './contacter-nous.page.html',
  styleUrls: ['./contacter-nous.page.scss'],
})
export class ContacterNousPage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
}
