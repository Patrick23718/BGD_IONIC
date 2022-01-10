/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class GalerieService {
  private SERVER_URL: string = environment.serverUrl;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  addImage(imageURL: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coiffeuse/galerie`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.post(
      API_URL,
      { imageURL: imageURL },
      { headers: headers }
    );
  }

  getCoiffeuseImage() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coiffeuse/galerie`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.get(API_URL, { headers: headers });
  }

  getCoiffeuseImageById(id: string) {
    const API_URL = this.SERVER_URL + `/coiffeuse/galerie/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(API_URL, { headers: headers });
  }

  deleteCoiffeuseImage(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coiffeuse/galerie/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.delete(API_URL, { headers: headers });
  }
}
