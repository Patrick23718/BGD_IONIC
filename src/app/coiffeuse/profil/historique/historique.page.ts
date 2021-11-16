import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {

  items = [{}, {}, {}, {}, {}];
  constructor(
    private location: Location,
  ) { }

  ngOnInit() {}

  myBackButton() {
    this.location.back();
  }

}
