/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../interfaces/utilisateur';
import { LocalStorageService } from './local-storage.service';

// import { Observable } from 'rxjs';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import {
//   AngularFirestore,
//   AngularFirestoreDocument,
// } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';
// import { snapshotChanges } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  userData: any;
  private SERVER_URL: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private localStorage: LocalStorageService
  ) {}

  userRegister(user: Utilisateur, password: string) {
    const API_URL = this.SERVER_URL + '/auth/signup';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(
      API_URL,
      {
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        role: user.role,
        ville: user.ville,
        numero: user.numero,
        password: password,
        status: user.status,
        biographie: user.biographie,
      }
      // { headers: headers }
    );
  }

  userLogin(email: string, pwd: string): any {
    const API_URL = this.SERVER_URL + '/auth/signin';
    return this.httpClient.post(API_URL, {
      email: email,
      password: pwd,
    });
  }

  changePassword(oldPass: string, password: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/updatepass';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });

    return this.httpClient.put(
      API_URL,
      {
        newpassword: password,
        password: oldPass,
      },
      { headers: headers }
    );
  }

  updateUser(data: any) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/update';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    console.log(data);

    return this.httpClient.put(API_URL, data, { headers: headers });
  }

  imageSet(imageURL: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/updateimage';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.put(
      API_URL,
      { imageURL: imageURL },
      {
        headers: headers,
        // reportProgress: true,
        // observe: 'events',
      }
    );
  }

  // updateUser(
  //   nom: string,
  //   prenom: string,
  //   adresse: string,
  //   code: number,
  //   ville: string,
  //   tel: string
  // ) {
  //   const token = this.localStorage.get('x-access-token');
  //   const API_URL = this.SERVER_URL + '/auth/update';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': `${token}`,
  //   });
  //   const dataUser = {
  //     nom: nom,
  //     prenom: prenom,
  //     adresse: adresse,
  //     ville: ville,
  //     postal: code,
  //     numero: tel,
  //   };
  //   return this.httpClient.put(API_URL, dataUser, { headers: headers });
  // }

  getUser() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/profile';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getUsers() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/users';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getCoiffeuse(uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + `/auth/coiffeuse?uid=${uid}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getUnvaldUser() {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/unvalid';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }
  validate(id: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/user/' + id;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    const body = {
      status: true,
    };
    return this.httpClient.put(API_URL, body, { headers: headers });
  }

  getTypeUsers(type: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/users/' + type;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  getUserById(uid: string) {
    const token = this.localStorage.get('x-access-token');
    const API_URL = this.SERVER_URL + '/auth/user/' + uid;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': `${token}`,
    });
    return this.httpClient.get(API_URL, { headers: headers });
  }

  // getOneUser(uid: string) {
  //   const token = this.localStorage.get('x-access-token');
  //   const API_URL = this.SERVER_URL + '/user/' + uid;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'x-access-token': `${token}`,
  //   });
  //   return this.httpClient.get(API_URL, { headers: headers });
  // }

  signIn(email, password) {}

  signOut() {}

  registerUser(email: string, password: string) {}
  getAllUser() {}
  //! FIREBASE
  // getAllUser() {
  //   // return this.afStore
  //   //   .collection('utilisateur')
  //   //   .snapshotChanges()
  //   //   .pipe(
  //   //     map((snaps) =>
  //   //       snaps.map((snap) => {
  //   //         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //   //         ...snap.payload.doc.data(),
  //   //       })
  //   //     )
  //   //   );

  //   return this.afStore.firestore.collection(`utilisateur`);
  //   // return this.afStore
  //   //   .collection('utilisateur')
  //   //   .snapshotChanges()
  //   //   .pipe(
  //   //     map((snaps) =>
  //   //       snaps.map((snap) => {
  //   //           id: snap.payload.doc.id,
  //   //           snap.payload.doc.data(),
  //   //         })
  //   //     ),
  //   //     first()
  //   //   );
  // }

  // // Login in with email/password
  // signIn(email, password) {
  //   return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  // }

  // // Register user with email/password
  // registerUser(email: string, password: string) {
  //   return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  // }

  // // Email verification when new user register
  // // SendVerificationMail() {
  // //   return this.ngFireAuth.currentUser.sendEmailVerification().then(() => {
  // //     this.router.navigate(['verify-email']);
  // //   });
  // // }

  // // Recover password
  // passwordRecover(passwordResetEmail) {
  //   return this.ngFireAuth
  //     .sendPasswordResetEmail(passwordResetEmail)
  //     .then(() => {
  //       window.alert(
  //         'Password reset email has been sent, please check your inbox.'
  //       );
  //     })
  //     .catch((error) => {
  //       window.alert(error);
  //       console.log(JSON.stringify(error));
  //     });
  // }

  // // Returns true when user is looged in
  // get isLoggedIn(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user !== null && user.emailVerified !== false ? true : false;
  // }

  // // Returns true when user's email is verified
  // get isEmailVerified(): boolean {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   return user.emailVerified !== false ? true : false;
  // }

  // // Sign in with Gmail
  // // googleAuth() {
  // //   return this.authLogin(new auth.GoogleAuthProvider());
  // // }

  // // Auth providers
  // authLogin(provider) {
  //   return this.ngFireAuth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       });
  //       this.setUserData(result.user);
  //     })
  //     .catch((error) => {
  //       window.alert(error);
  //     });
  // }

  // // Store user in localStorage
  // setUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
  //     `utilisateurs/${user.uid}`
  //   );
  //   const userData: Utilisateur = {
  //     uid: user.uid,
  //     email: user.email,
  //     nom: user.nom,
  //     prenom: user.prenom,
  //     photoURL: user.photoURL,
  //     telephone: user.telephone,
  //     role: user.role,
  //     ville: user.ville,
  //     biographie: user.biographie,
  //     // emailVerified: user.emailVerified,
  //   };
  //   return userRef.set(userData, {
  //     merge: true,
  //   });
  // }

  // // Sign-out
  // signOut() {
  //   return this.ngFireAuth.signOut();
  // }

  // updateUser(id: string, record: any) {
  //   return this.afStore.collection('utilisateur').doc(id).update(record);
  // }

  //! END FIREBASE
}
