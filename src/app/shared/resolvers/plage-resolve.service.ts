import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { PlageService } from 'src/app/services/plage.service';

@Injectable({
  providedIn: 'root',
})
export class PlageResolveService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private plageService: PlageService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return await this.plageService.getPlage();
  }
}
