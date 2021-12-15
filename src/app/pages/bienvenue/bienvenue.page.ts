import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {
  user;
  constructor(private localstorage: LocalStorageService) {}

  async ngOnInit() {
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
  }
}
