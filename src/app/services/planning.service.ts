import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  collectionName = 'planning';

  constructor(private firestore: AngularFirestore) {}

  addPlan(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  readPlan() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateStudent(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  // delete_student(record_id) {
  //   this.firestore.doc(this.collectionName + '/' + record_id).delete();
  // }
}
