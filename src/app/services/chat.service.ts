import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

export interface Utilisateur {
  email: string;
  password: string;
  telephone: string;
}
// export interface User {
//   uid: string;
//   email: string;
// }

// export interface Message {
//   createdAt: firebase.;
//   id: string;
//   from: string;
//   msg: string;
//   fromName: string;
//   myMsg: boolean;
// }

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messageCollection: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private Messages: Observable<Message[]>;
  constructor(private afS: AngularFirestore) {
    this.messageCollection = this.afS.collection('Chats', (ref) =>
      ref.orderBy('createdAt')
    );
    this.Messages = this.messageCollection.valueChanges();
  }

  getAllMessages() {
    // console.log(this.Messages);
    return this.Messages;
  }

  sendMessage(message: Message) {
    this.messageCollection.add(message);
  }

  getUserMessage(uid: string, oid: string) {}
}
