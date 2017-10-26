import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  constructor(
    public navCtrl : NavController, 
    public toastCtrl : ToastController,
  ) {}

  ionViewDidLoad() {
    setTimeout(() => {
      this.presentToast();
    }, 2000);
  }

  presentToast() {
    let toast = this
      .toastCtrl
      .create({message: 'User was added successfully', duration: 3000});
    toast.present();
  }
}
