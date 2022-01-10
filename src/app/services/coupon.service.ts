/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable object-shorthand */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  private SERVER_URL: string = environment.serverUrl;
  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  getCoupon(code: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/coupon/${code}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.get(API_URL, { headers: headers });
  }
}
