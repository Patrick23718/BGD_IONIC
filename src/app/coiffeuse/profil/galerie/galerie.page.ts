/* eslint-disable @typescript-eslint/quotes */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
// import { Camera, CameraResultType } from '@capacitor/camera';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TouchSequence } from 'selenium-webdriver';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
  imageElement: any;
  imageURL = '';
  imagePath: string;
  upload: any;
  test = 'test';
  items = [];
  user: any;
  constructor(
    private location: Location,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private camera: Camera,
    private afSG: AngularFireStorage,
    private afSt: AngularFirestore,
    private localstorage: LocalStorageService,
    private galerieService: GalerieService
  ) {
    if (this.localstorage.get('utilisateur') !== null) {
      this.user = JSON.parse(this.localstorage.get('utilisateur'));
    }
    console.log(this.user);
    // this.getGalerie();
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    console.log('test');
    await this.getGalerie();
  }
  myBackButton() {
    this.location.back();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choisissez votre opération',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Appareil photo',
          icon: 'camera-outline',
          handler: async () => {
            await this.addCameraPhoto();
          },
        },
        {
          text: 'Galerie',
          icon: 'image-outline',
          handler: async () => {
            await this.addLibraryPhoto();
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async addCameraPhoto() {
    const cameraPhoto = await this.openCamera();
    this.imageURL = 'data:image/jpg;base64,' + cameraPhoto;
    await this.uploadFirebase();
  }

  async addLibraryPhoto() {
    const libraryImage = await this.openLibrary();
    this.imageURL = 'data:image/jpg;base64,' + libraryImage;
    await this.uploadFirebase();
  }
  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };
    return await this.camera.getPicture(options);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA,
    };
    return await this.camera.getPicture(options);
  }

  async uploadFirebase() {
    this.imagePath = 'galerie/' + new Date().getTime() + '.jpg';
    const loading = await this.loadingController.create({ mode: 'ios' });
    await loading.present();
    this.upload = this.afSG
      .ref(this.imagePath)
      .putString(this.imageURL, 'data_url');
    this.upload.then(async () => {
      // this.imageURL = '';
      this.galerieService.addImage(this.imagePath).subscribe(
        async (res: any) => {
          await loading.dismiss();
          console.log(res);
          const alert = await this.alertController.create({
            header: 'Félicitation',
            message: "L'envoi de la photo est terminé!",
            buttons: ['OK'],
          });
          await alert.present();
        },
        async (err: any) => {
          console.log(err);
          await loading.dismiss();
        }
      );

      this.getGalerie();
    });
  }

  async getGalerie() {
    const loading = await this.presentLoading();
    await loading.present();
    this.galerieService.getCoiffeuseImage().subscribe(
      (res: any) => {
        this.items = res.data;
        console.log(res);
        loading.dismiss();
      },
      (err: any) => {
        console.log(err);
        loading.dismiss();
      }
    );
    // const citiesRef = this.afSt.collection('galerie', (ref) =>
    //   ref.where('uid', '==', this.user.uid)
    // );
    // const snapshot = await citiesRef.get();
    // this.items = [];
    // snapshot.forEach((doc) => {
    //   console.log(doc);
    //   doc.docs.forEach((d) => {
    //     console.log(d.data());
    //     this.items.push({
    //       id: d.id,
    //       data: d.data(),
    //     });
    //   });
    // });
    // console.log(this.items);
    // loading.dismiss();
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
    });
  }

  async deletePhoto(id: string) {
    const loading = await this.presentLoading();
    await loading.present();

    this.galerieService.deleteCoiffeuseImage(id).subscribe(
      (res: any) => {
        console.log(res);
        loading.dismiss();
        this.getGalerie();
      },
      (err: any) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
}
