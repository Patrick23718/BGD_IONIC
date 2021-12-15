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
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Notification } from 'src/app/interfaces/notification';
import { NotificationsPage } from '../../modals/notifications/notifications.page';
import { Location } from '@angular/common';
import { Utilisateur } from 'src/app/interfaces/utilisateur';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    photoURL: '',
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
    private fbAuth: AngularFireAuth,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    private camera: Camera,
    private afDB: AngularFireDatabase,
    private location: Location,
    private firestore: AngularFirestore,
    private utilisateurService: UtilisateurService,
    private loadingController: LoadingController,
    private afSG: AngularFireStorage,
    private localstorage: LocalStorageService,
    private alertController: AlertController
  ) {
    this.fbAuth.authState.subscribe(async (authState) => {
      this.user.uid = authState.uid;
      this.user.prenom = authState.displayName;
      this.user.email = authState.email;
      this.user.photoURL = authState.photoURL;
      console.log(this.user);
      let test: any;
      const utilisateurCollection = await this.firestore
        .collection('utilisateur')
        .doc(authState.uid);
      const utilisateur = await utilisateurCollection.snapshotChanges();
      utilisateur.subscribe((res: any) => {
        console.log(res);
        // console.log(res.payload.data());
        test = res.payload.data();
        console.log(test);
        this.user.biographie = test.biographie;
        this.user.nom = test.nom;
        this.user.telephone = test.telephone;
        this.user.ville = test.ville;
      });
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

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  add() {
    this.afDB.list('User/').push({
      pseudo: 'drissas',
    });
    console.log('Ok');
  }

  async updateuser() {
    // const loading = await this.presentLoading();
    // await loading.present();
    // this.fbAuth.authState.subscribe(async (authState) => {
    //   authState
    //     .updateProfile({ displayName: this.user.prenom })
    //     .then((res: any) => {
    //       this.utilisateurService
    //         .updateUser(this.user.uid, {
    //           biographie: this.user.biographie,
    //           email: this.user.email,
    //           nom: this.user.nom,
    //           prenom: this.user.prenom,
    //           telephone: this.user.telephone,
    //           ville: this.user.ville,
    //         })
    //         .then(async (resss: any) => {
    //           console.log(resss);
    //           loading.dismiss();
    //           const user = {
    //             uid: authState.uid,
    //             prenom: this.user.prenom,
    //             email: authState.email,
    //             photoURL: authState.photoURL,
    //           };
    //           // this.localstorage.remove('utilisateur');
    //           this.localstorage.set('utilisateur', JSON.stringify(user));
    //           const alert = await this.alertController.create({
    //             header: 'Félicitation',
    //             // eslint-disable-next-line @typescript-eslint/quotes
    //             message: 'Mise à jour est terminée!',
    //             buttons: ['OK'],
    //           });
    //           await alert.present();
    //         });
    //     });
    // });
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
            this.user.photoURL = this.imagePath;
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

  // imageUpdate(){
  //   this.selectedFile = <File>event.target.files[0];

  //   this.userService
  //     .imageSet(<File>this.selectedFile, this.selectedFile.name)
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  //   this.getUser();
  // }
}
