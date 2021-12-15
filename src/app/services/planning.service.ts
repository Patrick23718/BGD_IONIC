/* eslint-disable object-shorthand */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private SERVER_URL: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  search(ville: string, prest: string, plage: string, date: string) {
    const API_URL =
      this.SERVER_URL +
      `/search?date=${date}&plage=${plage}&ville=${ville}&prest=${prest}`;
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
}
