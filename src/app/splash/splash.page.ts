import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(
    private router: Router,
    private localstorage: LocalStorageService
  ) {
    const init = this.localstorage.get('init');
    const user = JSON.parse(this.localstorage.get('user'));
    setTimeout(() => {
      if (init === null) {
        this.router.navigateByUrl('onboard');
      } else {
        if (user === null || user.role === 'cliente') {
          this.router.navigateByUrl('cliente/acceuil');
        } else if (user.role === 'coiffeuse') {
          this.router.navigateByUrl('coiffeuse/home');
        }
      }
    }, 3000);
  }
  ngOnInit() {}

  getUserRole(user: any, init: any) {
    // const user = JSON.parse(this.localstorage.get('user'));
    // const init = this.localstorage.get('init');
    if (init === null) {
      this.router.navigateByUrl('onboard');
    } else {
      if (user === null || user.role === 'cliente') {
        this.router.navigateByUrl('cliente/acceui');
      } else if (user.role === 'coiffeuse') {
        this.router.navigateByUrl('coiffeuse/home');
      }
    }
  }
}
