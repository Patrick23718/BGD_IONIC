import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../interfaces/utilisateur';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  signedIn: any;
  private serverUrl: string = environment.serverUrl;
  constructor(private httpClient: HttpClient, public auth: AngularFireAuth) {
    this.signedIn = new Observable((subscriber) => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }

  getAllUser() {
    const API_URL = this.serverUrl + '/api/Users/all';
    return this.httpClient.get(API_URL);
  }

  registerUser(user: Utilisateur): any {
    const API_URL = this.serverUrl + '/api/Users';
    if (user.telephone.length === 10) {
      user.telephone = user.telephone.substring(1);
    }
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    });
    return this.httpClient.post(
      API_URL,
      {
        nom: user.prenom + '#$' + user.nom,
        email: user.email,
        password: user.password,
        telephone: '+33' + user.telephone,
        role: user.role,
        ville: user.ville,
        biographie: user.biographie,
      },
      // eslint-disable-next-line object-shorthand
      { headers: headers }
    );
  }
}
