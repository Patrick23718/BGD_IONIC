import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../interfaces/utilisateur';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { snapshotChanges } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  userData: any;
  private serverUrl: string = environment.serverUrl;

  constructor(
    private httpClient: HttpClient,
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  getAllUser() {
    // return this.afStore
    //   .collection('utilisateur')
    //   .snapshotChanges()
    //   .pipe(
    //     map((snaps) =>
    //       snaps.map((snap) => {
    //         // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //         ...snap.payload.doc.data(),
    //       })
    //     )
    //   );

    return this.afStore.firestore.collection(`utilisateur`);
    // return this.afStore
    //   .collection('utilisateur')
    //   .snapshotChanges()
    //   .pipe(
    //     map((snaps) =>
    //       snaps.map((snap) => {
    //           id: snap.payload.doc.id,
    //           snap.payload.doc.data(),
    //         })
    //     ),
    //     first()
    //   );
  }

  // Login in with email/password
  signIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // Register user with email/password
  registerUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  // Email verification when new user register
  // SendVerificationMail() {
  //   return this.ngFireAuth.currentUser.sendEmailVerification().then(() => {
  //     this.router.navigate(['verify-email']);
  //   });
  // }

  // Recover password
  passwordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert(error);
        console.log(JSON.stringify(error));
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.emailVerified !== false ? true : false;
  }

  // Sign in with Gmail
  // googleAuth() {
  //   return this.authLogin(new auth.GoogleAuthProvider());
  // }

  // Auth providers
  authLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store user in localStorage
  setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `utilisateurs/${user.uid}`
    );
    const userData: Utilisateur = {
      uid: user.uid,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom,
      photoURL: user.photoURL,
      telephone: user.telephone,
      role: user.role,
      ville: user.ville,
      biographie: user.biographie,
      // emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign-out
  signOut() {
    return this.ngFireAuth.signOut();
  }

  updateUser(id: string, record: any) {
    return this.afStore.collection('utilisateur').doc(id).update(record);
  }
}
