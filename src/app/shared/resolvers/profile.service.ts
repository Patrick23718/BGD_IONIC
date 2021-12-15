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
export class ProfileService implements Resolve<any> {
  constructor(
    private router: ActivatedRoute,
    private userService: UtilisateurService
  ) {}
  async resolve(router: ActivatedRouteSnapshot) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return await this.userService.getUser();
  }
}
