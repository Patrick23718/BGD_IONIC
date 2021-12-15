import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PrestationService } from 'src/app/services/prestation.service';

@Component({
  selector: 'app-ajoutprestation',
  templateUrl: './ajoutprestation.page.html',
  styleUrls: ['./ajoutprestation.page.scss'],
})
export class AjoutprestationPage implements OnInit {
  uid: string;
  items = [];

  prestations = [];
  constructor(
    private location: Location,
    private modalController: ModalController,
    private loadingController: LoadingController,
    // private toastController: ToastController,
    private localstorage: LocalStorageService,
    private prestaservice: PrestationService
  ) {}

  ngOnInit() {
    // this.reload();
  }

  async ionViewWillEnter() {
    console.log('cool');
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
    this.prestaservice.getCoiffeusePrestation().subscribe((res: any) => {
      console.log(res);
      this.items = res;
    });
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
