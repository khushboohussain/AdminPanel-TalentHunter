import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public afs: AngularFirestore) { }

  /* Creating New Package  */
  createPackage(id: any, data: any) {
    return this.afs.doc('package/' + id).set(data);
  }

  getPackage(id: any) {
    return this.afs.doc('package/' + id).valueChanges();
  }

  updatePackage(id: any, data: any) {
    return this.afs.doc('package/' + id).update(data);
  }

  deletePackage(id: any) {
    return this.afs.doc('package/' + id).delete();
  }

  getUser(id: any) {
    return this.afs.doc('user/' + id).valueChanges();
  }

  /* Employees/condidates List */
  getAllEmployees() {
    return this.afs.collection('candidate').snapshotChanges();
  }
  /* Employer List */
  getAllCompany() {
    return this.afs.collection('company').snapshotChanges();
  }
  /* Job List */
  getAllJobs() {
    return this.afs.collection('job').snapshotChanges();
  }
  /* Business List */
  getAllbusiness() {
    return this.afs.collection('business').snapshotChanges();
  }
  getAllcomplains() {
    return this.afs.collection('complains').snapshotChanges();
  }
  // getAllbusiness() {
  //   return this.afs.collection('business').snapshotChanges();
  // }
}
