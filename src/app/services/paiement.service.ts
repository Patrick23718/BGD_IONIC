/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PaiementService {
  private SERVER_URL: string = environment.serverUrl;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  makePayment(tokenID, data) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/stripe/charge';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(
      API_URL,
      // {
      //   amount: 100,
      //   currency: 'usd',
      //   token: token.id,
      // },
      {
        token: tokenID.id,
        data: data,
      },
      { headers: headers }
    );
  }

  getReservation() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/reservation';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getCoiffeuseReservation() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/reservation/coiffeuse';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  updateReservationStatus(id: string, status: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/reservation/${id}/${status}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(API_URL, {}, { headers: headers });
  }
  reservationByStatus(status: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/reservation/status/${status}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
