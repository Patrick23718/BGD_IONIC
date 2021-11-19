/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { Location } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  planning = {
    plage1: false,
    plage2: false,
    plage3: false,
    id1: '',
    id2: '',
    id3: '',
  };
  items = [];

  segment = 'reservations';
  eventSource: [];
  viewTitle = '';
  calendar = {
    mode: 'month',
    locale: 'fr-FR',
    currentDate: new Date(),
  };
  selectedDate: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(CalendarComponent, {
    static: false,
  })
  myCal: CalendarComponent;
  uid: string;
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
  segmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(this.segment);
    if (this.segment === 'disponibilites') {
      console.log('ok');
    } else {
      this.planning.plage1 = false;
      this.planning.plage2 = false;
      this.planning.plage3 = false;
      this.planning.id1 = '';
      this.planning.id2 = '';
      this.planning.id3 = '';
      this.selectedDate = '';
    }
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
      ref.where('date', '==', this.selectedDate || this.calendar.currentDate)
    );
    const snapshot = await citiesRef.get();
    this.items = [];

    snapshot.forEach((doc) => {
      // console.log(doc);
      doc.docs.forEach((d) => {
        console.log(d.data());
        this.items.push({
          id: d.id,
          data: d.data(),
        });
      });
      this.items.forEach((elt) => {
        if (elt.data.uid === this.uid) {
          if (elt.data.plage == '08h-12h') {
            console.log(elt.data.plage);
            this.planning.plage1 = true;
            this.planning.id1 = elt.id;
          } else if (elt.data.plage === '12h-18h') {
            this.planning.plage2 = true;
            this.planning.id2 = elt.id;
          } else if (elt.data.plage === '18h-22h') {
            this.planning.plage3 = true;
            this.planning.id3 = elt.id;
          }
        }
      });
      this.segment = 'disponibilites';
      loading.dismiss();
    });

    console.log(this.items);
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

  async plage1(event) {
    console.log(this.planning.plage1);
    if (this.selectedDate !== '') {
      const loading = await this.presentLoading();
      await loading.present();
      if (this.planning.plage1) {
        this.ngFirestore
          .collection('planning')
          .doc(this.planning.id1)
          .delete()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            loading.dismiss();
          });
        console.log('good');
      } else {
        this.ngFirestore
          .collection('planning')
          .add({
            date: this.selectedDate,
            uid: this.uid,
            plage: '08h-12h',
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
        console.log('bad');
      }
    }
  }
  async plage2(event) {
    if (this.selectedDate !== '') {
      const loading = await this.presentLoading();
      await loading.present();
      if (this.planning.plage2) {
        this.ngFirestore
          .collection('planning')
          .doc(this.planning.id2)
          .delete()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            loading.dismiss();
          });
        console.log(this.planning.plage2);
      } else {
        this.ngFirestore
          .collection('planning')
          .add({
            date: this.selectedDate,
            uid: this.uid,
            plage: '12h-18h',
          })
          .then((res) => {
            console.log(res);
            this.loadingController.dismiss();
          })
          .catch((err) => {
            console.log(err);
            this.loadingController.dismiss();
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      }
    }
  }
  async plage3(event) {
    if (this.selectedDate !== '') {
      const loading = await this.presentLoading();
      await loading.present();
      if (this.planning.plage3) {
        this.ngFirestore
          .collection('planning')
          .doc(this.planning.id3)
          .delete()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            loading.dismiss();
          });
        console.log(this.planning.plage3);
      } else {
        this.ngFirestore
          .collection('planning')
          .add({
            date: this.selectedDate,
            uid: this.uid,
            plage: '18h-22h',
          })
          .then((res) => {
            console.log(res);
            this.loadingController.dismiss();
          })
          .catch((err) => {
            console.log(err);
            this.loadingController.dismiss();
          })
          .finally(() => {
            this.loadingController.dismiss();
          });
      }
    }
  }
}
