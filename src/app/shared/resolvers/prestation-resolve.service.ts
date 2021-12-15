import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { PrestationService } from 'src/app/services/prestation.service';

@Injectable({
  providedIn: 'root',
})
export class PrestationResolveService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private prestaService: PrestationService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    return await this.prestaService.getPrestation();
  }
}
