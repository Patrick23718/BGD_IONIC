import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AlertController,
  ModalController,
  ActionSheetController,
  NavController,
  LoadingController,
} from '@ionic/angular';
import { NotificationsPage } from '../modals/notifications/notifications.page';
import { Notification } from '../../interfaces/notification';
import { ReservationModalComponent } from 'src/app/coiffeuse/modals/reservation-modal/reservation-modal.component';
import { ReservationPage } from 'src/app/components/reservation/reservation.page';
import { PorteMonnaiePage } from '../profil/porte-monnaie/porte-monnaie.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  items: any = [{ title: 'ds', icon: 'sdf', to: 'sdf' }];
  imageURL = '';
  imagePath: string;
  upload: any;
  notif: Notification = {
    imageURL: 'assets/profil.png',
    prenom: 'Gloria',
    prestation: 'Nattes collées',
    ville: 'Nantes',
    plageHoraire: '12h-18h',
    clientId: '343we45d65dsf65f76f',
    accepteMethode: () => {
      // eslint-disable-next-line @typescript-eslint/quotes
      console.log("J'accepte");
    },
    refuseMethode: () => {
      console.log('Je refuse');
    },
  };

  constructor(
    private fbAuth: AngularFireAuth,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    private afDB: AngularFireDatabase,
    private localstorage: LocalStorageService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private camera: Camera,
    private afSG: AngularFireStorage,
    private afSt: AngularFirestore
  ) {
    this.fbAuth.authState.subscribe(async (authState) => {
      const user = {
        uid: authState.uid,
        prenom: authState.displayName,
        email: authState.email,
        photoURL: authState.photoURL,
      };
      this.user = user;
      // this.localstorage.remove('utilisateur');
      this.localstorage.set('utilisateur', JSON.stringify(user));
      console.log(
        `${authState.displayName}, ${authState.email}, ${authState.uid}, ${authState.photoURL}, `
      );
    });
  }

  goTo(id: string) {
    this.navCtrl.navigateForward('coiffeuse/profil/porte-monnaie');
  }

  async openReservationModal() {
    const modal = await this.modalController.create({
      component: ReservationPage,
      componentProps: {
        notification: this.notif,
      },
      cssClass: 'modal-component',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();

    modal.onDidDismiss();
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

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
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
    this.imagePath = 'profile/' + new Date().getTime() + '.jpg';
    const loading = await this.loadingController.create({ mode: 'ios' });
    await loading.present();
    this.upload = this.afSG
      .ref(this.imagePath)
      .putString(this.imageURL, 'data_url');
    this.upload.then(async () => {
      // this.imageURL = '';

      this.fbAuth.authState.subscribe(async (authState) => {
        authState
          .updateProfile({
            photoURL: this.imagePath,
          })
          .then(async () => {
            const user = {
              uid: authState.uid,
              prenom: authState.displayName,
              email: authState.email,
              photoURL: this.imagePath,
            };
            this.user = user;
            // this.localstorage.remove('utilisateur');
            this.localstorage.set('utilisateur', JSON.stringify(user));
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Félicitation',
              // eslint-disable-next-line @typescript-eslint/quotes
              message: "L'envoi de la photo est terminé!",
              buttons: ['OK'],
            });
            await alert.present();
          });
      });
      // this.getGalerie();
    });
  }
}
