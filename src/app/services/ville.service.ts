/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class VilleService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private SERVER_URL: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    private localstorage: LocalStorageService
  ) {}

  getVille() {
    const API_URL = this.SERVER_URL + '/ville';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getVilleById(id: string) {
    const API_URL = this.SERVER_URL + '/ville/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  suggestVille(data: any) {
    const API_URL = this.SERVER_URL + '/villes/suggestion';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(API_URL, data, { headers: headers });
  }

  contact(data: any) {
    const token = this.localstorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/contact';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.post(API_URL, data, { headers: headers });
  }
}
