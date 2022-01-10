/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DisponibiliteService {
  private SERVER_URL: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  // getDisponibilite() {
  //   const API_URL = this.SERVER_URL + '/prestation';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // 'x-access-token': `${token}`,
  //   });
  //   return this.httpClient.get(API_URL, { headers: headers });
  // }

  getCoiffeuseDisponibilite(date: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/dispo?date=' + date;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  deleteCoiffeuseDisponibilite(date: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/dispo?date=' + date;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }

  addDisponibilite(date: string, plage: number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/planning';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(
      API_URL,
      {
        date: date,
        plage: plage,
      },
      { headers: headers }
    );
  }

  getDate(id: string) {
    const API_URL = this.SERVER_URL + `/planning/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getDatePlage(id: string, date: string) {
    const API_URL = this.SERVER_URL + `/planning/${id}/${date}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
