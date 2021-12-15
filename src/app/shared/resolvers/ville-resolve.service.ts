import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { VilleService } from 'src/app/services/ville.service';

@Injectable({
  providedIn: 'root',
})
export class VilleResolveService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private villeService: VilleService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return await this.villeService.getVille();
  }
}
