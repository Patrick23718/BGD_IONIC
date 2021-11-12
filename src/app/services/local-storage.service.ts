import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  //stepper
  constructor() {}
  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
