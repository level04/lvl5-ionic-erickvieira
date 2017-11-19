import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserProvider } from '../../providers/user/user';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { OneSignal } from '@ionic-native/onesignal';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public form: FormGroup = new FormGroup({ // notação de objeto em JS: usa-se colchetes
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6))
  })

  public db: firebase.firestore.Firestore = firebase.firestore();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
    public loadingCtrl: LoadingController,
    private oneSignal: OneSignal,) {
    
    this.oneSignal.startInit('d7fd2c28-feaa-482a-afbb-444d6292b534');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submit(form: FormGroup) {
    const value = form.value;
    const loading = this.loadingCtrl.create({
      content: 'Pera aí...',
    });

    loading.present();
    this.userProvider.login(value).then(() => {
      loading.dismiss();
      const oneSignalId = 1123;
      const email = form.value.email;
      this.db.collection('userInfo').doc(form.value.email).set({
        oneSignalId,
        email
      })
    }).catch((err) => {
      console.log(err);
      loading.dismiss();
    });
  }

}
