import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
  userData = { email: '', password: ''};
  userDetails : any;
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public navParams: NavParams,
    public storage: Storage
  ) {
    // TODO chek if userDetails present in storage
    this.storage.get("user_id").then(user => {
      if (user !== null) { // logged in.
        // this.navCtrl.setRoot(HomePage);
      } else { // not logged in.
        // TODO else continue
      }
    });

  }

  signIn(){
    this.restProvider.signIn(this.userData).then((result) => {
      console.log(result);
      this.saveData(result);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      console.log(err);
    });

  }

  saveData(result){
    console.log(result.user.isadmin);
    this.storage.set('api_token',result.user.api_token);
    this.storage.set('isadmin', result.user.isadmin).then((value) => {
      this.storage.get('isadmin').then((val) => {
        console.log('Your isadmin is', val);
      });
    });

    this.storage.set('user_id', result.user.id);
  }

  registerPage(){
    this.navCtrl.push(RegisterPage);
  }

  backWelcome(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
