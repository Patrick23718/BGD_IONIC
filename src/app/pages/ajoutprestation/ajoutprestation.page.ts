import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    private ngFire: AngularFirestore,
    private loadingController: LoadingController,
    // private toastController: ToastController,
    private localstorage: LocalStorageService
  ) {
    this.uid = this.localstorage.get('uid');
    console.log(this.uid);
  }

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
    const loading = await this.presentLoading();
    await loading.present();
    // this.ngFire.collection('planning').where('uid', '==', this.user.uid).get().
    const citiesRef = this.ngFire.collection('prestation-coiffeuse', (ref) =>
      ref.where('uid', '==', this.uid)
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
      .collection('prestation-coiffeuse')
      .doc(id)
      .delete()
      .then((res: any) => {
        console.log(res);
        this.loadPrestation();
        loading.dismiss();
      });
  }
}
