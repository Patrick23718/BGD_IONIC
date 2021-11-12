import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porte-monnaie',
  templateUrl: './porte-monnaie.page.html',
  styleUrls: ['./porte-monnaie.page.scss'],
})
export class PorteMonnaiePage implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
}
