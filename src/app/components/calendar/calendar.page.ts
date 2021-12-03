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
  items: [
    {
      text: '08h:00 - 10h:00';
      checked: false;
    },
    {
      text: '10h:00 - 12h:00';
      checked: false;
    },
    {
      text: '12h:00 - 14h:00';
      checked: false;
    },
    {
      text: '14h:00 - 16h:00';
      checked: false;
    }
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
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss('');
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

  onViewTitleChanged(event) {
    this.viewTitle = event;
  }

  async onChange(event) {
    console.log(new Date(event.selectedTime));
    console.log(this.calendar.currentDate);
    this.selectedDate = new Date(event.selectedTime);
    if (this.i !== 0) {
      this.modalController.dismiss(this.selectedDate);
    }
    this.i += 1;
  }
}
