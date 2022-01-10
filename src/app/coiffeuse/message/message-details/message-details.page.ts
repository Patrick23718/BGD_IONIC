import { Location } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {
  ActionSheetController,
  AlertController,
  IonContent,
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Message } from 'src/app/interfaces/message';
import { ChatService } from 'src/app/services/chat.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.page.html',
  styleUrls: ['./message-details.page.scss'],
})
export class MessageDetailsPage implements OnInit {
  socket;
  uid: string;
  otherId: string;
  imageURL = '';
  imagePath: string;
  upload: any;
  user = {
    prenom: '',
    imageURL: '',
  };
  msg = '';
  messages = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatService: ChatService,
    private userService: UtilisateurService,
    private location: Location,
    private localstorage: LocalStorageService,

    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private camera: Camera,
    private afSG: AngularFireStorage // private utilisateurService: UtilisateurService, // private reservationService: PaiementService
  ) {
    this.route.params.subscribe((params) => {
      this.uid = params.uid;
      console.log(this.uid);
      this.userService.getUserById(this.uid).subscribe((res: any) => {
        this.user = res;
        console.log(this.user);
      });
    });
    // this.socket = io.io();
    // if (router.getCurrentNavigation().extras.state) {
    //   const ids = this.router.getCurrentNavigation().extras.state;
    //   this.uid = ids.uid;
    //   this.otherId = ids.oid;
    //   this.user = ids.user;
    // }
  }
  ngOnInit() {
    this.getMessage();
    // this.socket.on('test', () => {
    //   this.getMessage();
    // });
  }

  getMessage() {
    this.chatService.getAllMessages(this.uid).subscribe((res: any) => {
      this.messages = res;
      console.log(res);
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonContent, { static: false }) content: IonContent;
  // eslint-disable-next-line @typescript-eslint/member-ordering

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

  myBackButton() {
    this.location.back();
  }

  onClick() {
    const message = {
      toId: this.uid,
      message: this.msg,
      imageURL: '',
    };
    this.chatService.sendMessage(message).subscribe((res: any) => {
      console.log(res);

      this.getMessage();
    });
    this.msg = '';
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ScrollToBottom() {
    this.content.scrollToBottom(0);
  }
  // callFunction() {
  //   this.content.scrollToBottom(0);
  // }

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
    this.imagePath = 'messages/' + new Date().getTime() + '.jpg';
    const loading = await this.loadingController.create({ mode: 'ios' });
    await loading.present();
    this.upload = this.afSG
      .ref(this.imagePath)
      .putString(this.imageURL, 'data_url');
    this.upload
      .then(async () => {
        // this.utilisateurService.imageSet(this.imagePath).subscribe(
        //   (res: any) => {
        //     console.log(res);
        //     const data = {
        //       email: this.user.email,
        //       id: this.user._id,
        //       prenom: this.user.prenom,
        //       imageURL: this.imagePath,
        //       role: this.user.role,
        //     };
        //     this.user.imageURL = data.imageURL;
        //     this.localstorage.set('user', JSON.stringify(data));
        //     loading.dismiss();
        //   },
        //   (err: any) => {
        //     loading.dismiss();
        //   }
        // );
        const message = {
          toId: this.uid,
          message: '',
          imageURL: this.imagePath,
        };
        this.chatService.sendMessage(message).subscribe(
          (res: any) => {
            console.log(res);

            this.getMessage();

            loading.dismiss();
          },
          (err: any) => {
            loading.dismiss();
          }
        );
        this.msg = '';
      })
      .catch((err: any) => {
        loading.dismiss();
      });
  }
}
