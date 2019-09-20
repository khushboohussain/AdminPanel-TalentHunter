import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: any, password: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  setpersistance() {
    return this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
