/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message';
import { LocalStorageService } from './local-storage.service';

// export interface Utilisateur {
//   email: string;
//   password: string;
//   telephone: string;
// }
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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private SERVER_URL: string = environment.serverUrl;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getAllMessages(uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/chat/${uid}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.get(API_URL, { headers: headers });
  }

  sendMessage(message: any) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/chat`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.post(API_URL, message, { headers: headers });
  }

  getUserMessage(uid: string, oid: string) {}
}
