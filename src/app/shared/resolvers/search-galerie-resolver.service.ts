import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchGalerieResolverService implements Resolve<any> {
  constructor(private router: ActivatedRoute) {}
  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // return await this.plageService.getPlage();
  }
}
