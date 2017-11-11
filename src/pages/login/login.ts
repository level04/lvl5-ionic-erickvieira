import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserProvider } from '../../providers/user/user';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
    public loadingCtrl: LoadingController,) {
    
    
    
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
    }).catch((err) => {
      console.log(err);
      loading.dismiss();
    });
  }

}
