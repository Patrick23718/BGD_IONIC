/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-underscore-dangle */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {
  ActionSheetController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-mes-informations',
  templateUrl: './mes-informations.page.html',
  styleUrls: ['./mes-informations.page.scss'],
})
export class MesInformationsPage implements OnInit {
  profile = {
    _id: '',
    imageURL: '',
    email: '',
    nom: '',
    numero: '',
    prenom: '',
    ville: '',
    role: '',
  };
  imageURL = '';
  imagePath: string;
  upload: any;
  focused = true;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private location: Location,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private userService: UtilisateurService,
    private router: ActivatedRoute,
    private afSG: AngularFireStorage,
    private localStorage: LocalStorageService
  ) {}

  myBackButton() {
    this.location.back();
  }

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  ngOnInit() {
    const profileOBX = this.router.snapshot.data['profil'];
    profileOBX.subscribe((res: any) => {
      this.profile.nom = res.nom;
      this.profile.prenom = res.prenom;
      this.profile.numero = res.numero;
      this.profile.ville = res.ville;
      this.profile.imageURL = res.imageURL;
      this.profile._id = res._id;
      console.log(this.profile);
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

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 3000,
      position: 'top',
      mode: 'ios',
    });
    toast.present();
  }

  async onUpdate() {
    const loading = await this.presentLoading();
    await loading.present();
    this.userService.updateUser(this.profile).subscribe((res: any) => {
      console.log(res);
      this.userService.getUser().subscribe((ress: any) => {
        console.log(ress);
        const data = {
          email: ress.email,
          id: ress._id,
          nom: ress.nom,
          prenom: ress.prenom,
          role: ress.role,
        };
        this.localStorage.set('user', JSON.stringify(data));
        loading.dismiss();
      });
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
        this.userService.imageSet(this.imagePath).subscribe(
          (res: any) => {
            console.log(res);
            const data = {
              email: this.profile.email,
              id: this.profile._id,
              prenom: this.profile.prenom,
              imageURL: this.imagePath,
              role: this.profile.role,
            };
            this.profile.imageURL = data.imageURL;
            this.localStorage.set('user', JSON.stringify(data));
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
