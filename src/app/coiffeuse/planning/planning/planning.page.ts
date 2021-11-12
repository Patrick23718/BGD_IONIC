import { Location } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  segment = 'reservations';
  eventSource: [];
  viewTitle = '';
  calendar = {
    mode: 'month',
    locale: 'fr-FR',
    currentDate: new Date(),
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(CalendarComponent, {
    static: false,
  })
  myCal: CalendarComponent;
  constructor(private location: Location) {}
  next() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  ngOnInit() {}
  myBackButton() {
    this.location.back();
  }
  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
  }

  onViewTitleChanged(event) {
    this.viewTitle = event;
  }
}
