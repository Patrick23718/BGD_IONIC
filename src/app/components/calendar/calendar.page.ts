import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  eventSource = [];
  plage: any;
  items = [
    {
      text: '9h - 12h',
      plage: 1,
      checked: false,
    },
    {
      text: '12h - 15h',
      plage: 2,
      checked: false,
    },
    {
      text: '15h - 18h',
      plage: 3,
      checked: false,
    },
    {
      text: '18h - 21h',
      plage: 4,
      checked: false,
    },
  ];
  viewTitle = '';
  calendar = {
    mode: 'week' as CalendarMode, //'month',
    step: 30 as Step,
    locale: 'fr-FR',
    currentDate: new Date(),
  };
  selectedDate: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(CalendarComponent, {
    static: false,
  })
  myCal: CalendarComponent;
  uid = '1';
  i = 0;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.i = 0;
    this.plage = null;
    this.selectedDate = null;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    if (this.selectedDate === null || this.plage === null) {
    } else {
      this.modalController.dismiss({
        date: this.selectedDate,
        plage: this.plage,
      });
    }
  }

  next() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.myCal.slideNext();
  }

  checked() {
    this.items.forEach((elt) => {
      elt.checked = false;
    });
  }

  back() {
    this.myCal.slidePrev();
  }

  getPlage(item: any) {
    this.checked();
    item.checked = true;
    this.plage = item;
    this.dismiss();
  }

  onViewTitleChanged(event) {
    this.viewTitle = event;
  }

  async onChange(event) {
    console.log(new Date(event.selectedTime));
    console.log(this.calendar.currentDate);
    this.selectedDate = new Date(event.selectedTime);
    if (this.i !== 0) {
      this.dismiss();
    }
    this.i += 1;
  }
}
