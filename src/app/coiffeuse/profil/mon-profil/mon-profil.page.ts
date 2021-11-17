import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AlertController,
  ModalController,
  ActionSheetController,
  NavController,
} from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ReservationModalComponent } from 'src/app/coiffeuse/modals/reservation-modal/reservation-modal.component';
import { ReservationPage } from 'src/app/components/reservation/reservation.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Notification } from 'src/app/interfaces/notification';
import { NotificationsPage } from '../../modals/notifications/notifications.page';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.page.html',
  styleUrls: ['./mon-profil.page.scss'],
})
export class MonProfilPage implements OnInit {
  items: any = [{ title: 'ds', icon: 'sdf', to: 'sdf' }];
  img = 'assets/profil.png';

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
    private afDB: AngularFireDatabase
  ) {
    this.fbAuth.authState.subscribe(async (authState) => {
      this.prenom = authState.displayName.split('#$')[0];
      console.log(authState);
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
            await this.takePicture();
          },
        },
        {
          text: 'Galerie',
          icon: 'image-outline',
          handler: () => {
            console.log('Share clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.webPath;

    // Can be set to the src of an image now
    console.log(imageUrl);
    this.img = imageUrl;
  };

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
}
