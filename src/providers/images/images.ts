/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
/* eslint-disable no-var */
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import { HttpClient } from '@angular/common/http';
// import {
//   FileTransfer,
//   FileUploadOptions,
//   FileTransferObject,
// } from '@ionic-native/file-transfer';

@Injectable()
export class ImagesProvider {
  // apiURL = 'http://localhost:3000/';
  // constructor(public http: HttpClient, private transfer: FileTransfer) {}
  // getImages() {
  //   return this.http.get(this.apiURL + 'images');
  // }
  // deleteImage(img: any) {
  //   return this.http.delete(`${this.apiURL}images/${img._id}`);
  // }
  // uploadImage(img, desc) {
  //   // Destination URL
  //   const url = this.apiURL + 'images';
  //   // File for Upload
  //   const targetPath = img;
  //   var options: FileUploadOptions = {
  //     fileKey: 'image',
  //     chunkedMode: false,
  //     mimeType: 'multipart/form-data',
  //     params: { desc: desc },
  //   };
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   // Use the FileTransfer to upload the image
  //   return fileTransfer.upload(targetPath, url, options);
  // }
}
