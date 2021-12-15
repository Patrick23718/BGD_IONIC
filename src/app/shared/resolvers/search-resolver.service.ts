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
export class SearchResolverService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private prestService: PrestationService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    const uid = router.paramMap.get('uid');
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return await this.prestService.searchPrestProfile(uid);
  }
}
