import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    private localstorage: LocalStorageService
  ) {
    if (this.localstorage.get('utilisateur') !== null) {
      this.user = JSON.parse(this.localstorage.get('utilisateur'));
    }
  }

  ngOnInit() {
    this.loadPrestation().then((res: any) => {});
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
    // this.ngFire.collection('planning').where('uid', '==', this.user.uid).get().
    const citiesRef = this.ngFire.collection('planning', (ref) =>
      ref.where('uid', '==', this.user.uid)
    );
    const snapshot = await citiesRef.get();
    // snapshot.subscribe((res: any) => {
    //   this.prestations = [];
    //   res.forEach((element) => {
    //     this.prestations.push(element);
    //   });
    //   console.log(this.prestations);
    // });
    // console.log(snapshot);
    this.items = [];

    snapshot.forEach((doc) => {
      doc.docs.forEach((d) => {
        this.items.push({
          id: d.id,
          data: d.data(),
        });
      });
    });
    console.log(this.items);
    loading.dismiss();
  }

  async deletePrestation(id: string) {
    const loading = await this.presentLoading();
    await loading.present();

    this.ngFire
      .collection('planning')
      .doc(id)
      .delete()
      .then((res: any) => {
        console.log(res);
        this.loadPrestation();
        loading.dismiss();
      });
  }
}
