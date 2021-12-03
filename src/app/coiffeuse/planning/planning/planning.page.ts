/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { Location } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  plageId = '';
  create = false;
  test: any = null;
  eventSource: [];
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
  constructor(
    private loadingController: LoadingController,
    private location: Location,
    private ngFirestore: AngularFirestore,
    private fbAuth: AngularFireAuth
  ) {
    this.fbAuth.authState.subscribe(async (authState) => {
      this.uid = authState.uid;
      console.log(this.uid);
    });
  }
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

  onViewTitleChanged(event) {
    this.viewTitle = event;
  }

  async onChange(event) {
    console.log(new Date(event.selectedTime));
    console.log(this.calendar.currentDate);
    this.selectedDate = new Date(event.selectedTime);
    await this.getPlan();
  }

  async getPlan() {
    const loading = await this.presentLoading();
    await loading.present();
    const citiesRef = this.ngFirestore.collection('planning', (ref) =>
      ref
        .where('date', '==', this.selectedDate || this.calendar.currentDate)
        .where('uid', '==', this.uid)
    );
    const snapshot = await citiesRef.get();
    let i = 0;
    snapshot.subscribe((res: any) => {
      res.docs.forEach((element) => {
        this.create = false;
        i += 1;
        this.test = element.data();
        this.plageId = element.id;
        console.log(element.data());
        console.log(element.id);
      });
      if (i == 0) {
        this.create = true;
        this.test = {
          uid: this.uid,
          date: this.selectedDate || this.calendar.currentDate,
          plage: [
            {
              plage: 1,
              checked: false,
            },
            {
              plage: 2,
              checked: false,
            },
            {
              plage: 3,
              checked: false,
            },
            {
              plage: 4,
              checked: false,
            },
          ],
        };
      }
      // console.log(res);
    });

    loading.dismiss();
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  reg() {
    console.log(this.test);
  }

  async addPlanning() {
    const loading = await this.presentLoading();
    await loading.present();
    if (this.create) {
      this.ngFirestore
        .collection('planning')
        .add({
          date: this.test.date,
          uid: this.test.uid,
          plage: this.test.plage,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          loading.dismiss();
        });
    } else {
      this.ngFirestore
        .collection('planning')
        .doc(this.plageId)
        .update({
          date: this.test.date,
          uid: this.test.uid,
          plage: this.test.plage,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          loading.dismiss();
        });
    }
  }

  cancel() {
    this.test = null;
    this.selectedDate = null;
  }

  // async plage1(event) {
  //   console.log(this.planning.plage1);
  //   if (this.selectedDate !== '') {
  //     const loading = await this.presentLoading();
  //     await loading.present();
  //     if (this.planning.plage1) {
  //       this.ngFirestore
  //         .collection('planning')
  //         .doc(this.planning.id1)
  //         .delete()
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //         .finally(() => {
  //           loading.dismiss();
  //         });
  //       console.log('good');
  //     } else {
  //       this.ngFirestore
  //         .collection('planning')
  //         .add({
  //           date: this.selectedDate,
  //           uid: this.uid,
  //           plage: '08h-12h',
  //         })
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //         .finally(() => {
  //           loading.dismiss();
  //         });
  //       console.log('bad');
  //     }
  //   }
  // }
}
