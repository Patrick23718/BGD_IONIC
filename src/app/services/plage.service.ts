/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlageService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private SERVER_URL: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  getPlage() {
    const API_URL = this.SERVER_URL + '/plage';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
