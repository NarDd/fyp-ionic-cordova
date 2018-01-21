import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';
// import { HelloIonicPage } from '../hello-ionic/hello-ionic';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login'


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  // error;
  // responseData : any;
  userData = {"username":"","password":"","email":"","name":"", "cfmpassword":""}
  // constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {
  constructor(public navCtrl: NavController,public restProvider: RestProvider,public toastCtrl: ToastController) {
  }

registerUser(){
  if(this.userData.cfmpassword == this.userData.password){
    // console.log(this.userData);
    this.restProvider.register(this.userData).then((result) => {
      console.log(result);
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }
  else{
    this.toastCtrl.create({
      message: "Password Mismatched",
      duration: 3000
    }).present();
  }

}

backWelcome(){
    this.navCtrl.push(LoginPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
