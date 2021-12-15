import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Injectable({
  providedIn: 'root',
})
export class SearchProfilResolverService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private userService: UtilisateurService // private plageService: PlageService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    const uid = router.paramMap.get('uid');
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return await this.userService.getCoiffeuse(uid);
  }
}
