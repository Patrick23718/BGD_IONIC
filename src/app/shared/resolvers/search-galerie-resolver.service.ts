import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { GalerieService } from 'src/app/services/galerie.service';

@Injectable({
  providedIn: 'root',
})
export class SearchGalerieResolverService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private galerieService: GalerieService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const uid = router.paramMap.get('uid');

    return await this.galerieService.getCoiffeuseImageById(uid);
  }
}
