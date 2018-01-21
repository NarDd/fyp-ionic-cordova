import { Component } from '@angular/core';
import { NavController, NavParams,ViewController  } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userData :any

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public storage: Storage, public viewCtrl: ViewController) {
    console.log('UserId');
    this.userData = this.navParams.get("userData");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){
    this.storage.remove(this.userData);
    this.navCtrl.setRoot(LoginPage)
  }

 dismiss(){
    this.viewCtrl.dismiss();
 }

}
