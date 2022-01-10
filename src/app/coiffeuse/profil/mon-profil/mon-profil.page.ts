/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AlertController,
  ModalController,
  ActionSheetController,
  NavController,
  LoadingController,
} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ReservationModalComponent } from 'src/app/coiffeuse/modals/reservation-modal/reservation-modal.component';
import { ReservationPage } from 'src/app/components/reservation/reservation.page';
import { Notification } from 'src/app/interfaces/notification';
import { NotificationsPage } from '../../modals/notifications/notifications.page';
import { Location } from '@angular/common';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {
  items: any = [{ title: 'ds', icon: 'sdf', to: 'sdf' }];
  img = 'assets/default.jpeg';
  imageURL = '';
  imagePath: string;
  upload: any;
  focused = true;
  user: Utilisateur = {
    email: '',
    nom: '',
    prenom: '',
    role: '',
    telephone: '',
    biographie: '',
    ville: '',
    imageURL: '',
    uid: '',
  };

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
  prenom = '';

  constructor(
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    private camera: Camera,
    private location: Location,
    private utilisateurService: UtilisateurService,
    private loadingController: LoadingController,
    private afSG: AngularFireStorage,
    private localstorage: LocalStorageService,
    private alertController: AlertController
  ) {
    this.utilisateurService.getUser().subscribe((res: Utilisateur) => {
      this.user = res;
      console.log(this.user);
    });
  }

  ionViewWillEnter() {
    this.utilisateurService.getUser().subscribe((res: Utilisateur) => {
      this.user = res;
      console.log(this.user);
    });
  }

  goTo(id: string) {
    this.navCtrl.navigateForward('coiffeuse/profil/porte-monnaie');
  }
  myBackButton() {
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  async updateuser() {
    const loading = await this.presentLoading();
    await loading.present();
    this.utilisateurService.updateUser(this.user).subscribe((res: any) => {
      const data = {
        email: this.user.email,
        id: this.user._id,
        prenom: this.user.prenom,
        role: this.user.role,
        imageURL: this.user.imageURL,
      };
      this.localstorage.set('user', JSON.stringify(data));
      console.log(res);
      loading.dismiss();
    });
  }

  async presentLoading(): Promise<any> {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '',
      backdropDismiss: false,
      mode: 'ios',
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
}
