import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from "firebase";
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor() {
    
  }

  login({ email, password }) {
    return firebase.auth()
      .signInWithEmailAndPassword(email, password);
  }

}
