import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteGuard implements CanActivate {
  constructor(
    private localstorage: LocalStorageService,
    private navCtrl: NavController
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let test = false;
    const user = JSON.parse(this.localstorage.get('user'));
    if (user !== null && user.role === 'cliente') {
      test = true;
    } else {
      this.navCtrl.navigateForward('/connexion-cliente');
    }
    return test;
  }
}
