/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  ModalController,
  ActionSheetController,
  NavController,
  LoadingController,
} from '@ionic/angular';
import { NotificationsPage } from '../modals/notifications/notifications.page';
import { Notification } from '../../interfaces/notification';
import { ReservationPage } from 'src/app/components/reservation/reservation.page';
import { PorteMonnaiePage } from '../profil/porte-monnaie/porte-monnaie.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { PaiementService } from 'src/app/services/paiement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any = {
    _id: '',
    prenom: '',
    imageURL: '',
  };
  reservations = [];
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
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    private localstorage: LocalStorageService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private camera: Camera,
    private afSG: AngularFireStorage,
    private utilisateurService: UtilisateurService,
    private reservationService: PaiementService
  ) {}
  async ionViewWillEnter() {
    this.getAwaitReservation();
    this.user = JSON.parse(this.localstorage.get('user'));
    console.log(this.user);
  }

  goTo(id: string) {
    this.navCtrl.navigateForward('coiffeuse/profil/porte-monnaie');
  }

  async openReservationModal(item: any) {
    const modal = await this.modalController.create({
      component: ReservationPage,
      componentProps: {
        notification: item,
      },
      cssClass: 'modal-component',
      backdropDismiss: true,
      mode: 'ios',
    });
    await modal.present();
    modal.onDidDismiss().then((data) => {
      this.getAwaitReservation();
    });
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
    this.upload
      .then(async () => {
        this.utilisateurService.imageSet(this.imagePath).subscribe(
          (res: any) => {
            console.log(res);
            const data = {
              email: this.user.email,
              id: this.user._id,
              prenom: this.user.prenom,
              imageURL: this.imagePath,
              role: this.user.role,
            };
            this.user.imageURL = data.imageURL;
            this.localstorage.set('user', JSON.stringify(data));
            loading.dismiss();
          },
          (err: any) => {
            loading.dismiss();
          }
        );
      })
      .catch((err: any) => {
        loading.dismiss();
      });
  }

  getAwaitReservation() {
    this.reservationService
      .reservationByStatus('AWAIT')
      .subscribe((res: any) => {
        this.reservations = res;
        console.log(res);
      });
  }
}
