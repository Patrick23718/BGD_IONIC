import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DayViewComponent } from 'ionic2-calendar/dayview';

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
  };

  date = new Date(Date.UTC(2021, 10, 17));
  value = new Intl.DateTimeFormat('en-FR').format(this.date)
 
}
