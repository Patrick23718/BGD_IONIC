import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PrestationService } from 'src/app/services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.page.html',
  styleUrls: ['./prestation.page.scss'],
})
export class PrestationPage implements OnInit {
  items = [];

  prestations = [];
  user: any;
  constructor(
    private location: Location,
    private modalController: ModalController,
    private ngFire: AngularFirestore,
    private loadingController: LoadingController,
    // private toastController: ToastController,
    private localstorage: LocalStorageService,
    private prestaservice: PrestationService
  ) {
    // if (this.localstorage.get('utilisateur') !== null) {
    //   this.user = JSON.parse(this.localstorage.get('utilisateur'));
    // }
    // this.loadPrestation().then((res: any) => {});
  }

  ngOnInit() {
    // this.reload();
  }

  async ionViewWillEnter() {
    console.log('coll');
    await this.loadPrestation();
  }

  myBackButton() {
    this.location.back();
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }
  async loadPrestation() {
    const loading = await this.presentLoading();
    await loading.present();
    this.prestaservice.getCoiffeusePrestation().subscribe((res: any) => {
      console.log(res);
      this.items = res;
      loading.dismiss();
    });
  }

  reload() {
    window.location.reload();
  }

  async deletePrestation(id: string) {
    const loading = await this.presentLoading();
    await loading.present();

    this.prestaservice.removePrestation(id).subscribe((res: any) => {
      console.log(res);
      loading.dismiss();
      this.loadPrestation();
    });
  }
}
