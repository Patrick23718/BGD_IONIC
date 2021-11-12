import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.page.html',
  styleUrls: ['./galerie.page.scss'],
})
export class GaleriePage implements OnInit {
  imageElement: any;
  test = 'test';
  items = [
    {
      src: 'assets/galerie_1.png',
    },
    {
      src: 'assets/galerie_2.png',
    },
    {
      src: 'assets/galerie_3.png',
    },
    {
      src: 'assets/galerie_4.png',
    },
  ];
  constructor(
    private location: Location,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  ngOnInit() {}
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
    this.test = 'ok' + imageUrl;
    this.items.push({ src: imageUrl });
  };

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: `<div class="flex flex-col text-md text-center">
        <div>Souhaitez-vous supprimer cette image de votre galerie ?</div>
        <div class="grid grid-cols-2 pt-4 gap-4">
          <div class="py-2 text-center text-primary bg-white border-2 border-primary rounded-lg">SUPPRIMER</div>
          <button class="py-2 text-center text-white bg-primary rounded-lg" (click)="console.log('ok')">ANNULER</button>
        </div>
      </div>`,
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
