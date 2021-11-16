import { Location } from '@angular/common';
import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {
  planning = {
    plage1: true,
    plage2: true,
    plage3: true,
  };

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
  uid: string;
  constructor(
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
  }

  onViewTitleChanged(event) {
    this.viewTitle = event;
  }

  onChange(event) {
    console.log(new Date(event.selectedTime).getDate);
    console.log(this.calendar.currentDate);
    this.segment = 'disponibilites';
  }
  plage1(event) {
    console.log(event.detail.checked);
  }

  create(todo: any) {
    return this.ngFirestore.collection('tasks').add(todo);
  }

  getPlan() {
    return this.ngFirestore.collection('tasks').snapshotChanges();
  }

  // getTask(id) {
  //   return this.ngFirestore.collection('tasks').doc(id).valueChanges();
  // }

  update(id, todo: any) {
    this.ngFirestore
      .collection('tasks')
      .doc(id)
      .update(todo)
      .then(() => {
        // this.router.navigate(['/todo-list']);
      })
      .catch((error) => console.log(error));
  }

  delete(id: string) {
    this.ngFirestore.doc('tasks/' + id).delete();
  }
}
