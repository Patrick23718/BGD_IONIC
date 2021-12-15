/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrestationService {
  private SERVER_URL: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getPrestation() {
    const API_URL = this.SERVER_URL + '/prestation';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getCoiffeusePrestation() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/coiffeuse/prestation';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  addPrestation(idPresta: string, tarif: number) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/coiffeuse/prestation';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(
      API_URL,
      {
        prestation: idPresta,
        tarif: tarif,
      },
      { headers: headers }
    );
  }

  searchPrest(prest: string, uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/search/prest?prest=${prest}&uid=${uid}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  searchPrestProfile(uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/search/coiffeuse/prestation?uid=${uid}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  removePrestation(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/coiffeuse/prestation/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }
}
