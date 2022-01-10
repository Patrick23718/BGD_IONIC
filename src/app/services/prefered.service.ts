/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable object-shorthand */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class PreferedService {
  private SERVER_URL: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  addPrefered(coiffeuse: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/like`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(
      API_URL,
      { coiffeuse: coiffeuse },
      { headers: headers }
    );
  }

  getPrefered(coiffeuse: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/like/${coiffeuse}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  removePrefered(coiffeuse: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/like/${coiffeuse}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.delete(API_URL, { headers: headers });
  }

  getAllPrefered() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/like`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
