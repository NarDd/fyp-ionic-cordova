import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';
import { PastPage } from '../past/past';
import { ProfilePage } from '../profile/profile';
import { MyeventPage } from '../myevent/myevent';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 public data: any;
 public user: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public restProvider: RestProvider,
    public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  presentProfileModal() {
    this.storage.get('user_id').then((val) => {
      this.restProvider.getUser(val)
      .then(data => {
        let userData = data["user"];
        console.log(userData);
        let profileModal = this.modalCtrl.create(ProfilePage, {userData: userData});
        profileModal.present();
      });
    });
  }

  myEvent(){
    this.navCtrl.push(MyeventPage);
  }

  toUpcoming(){
    this.navCtrl.push(UpcomingPage);
  }

  toPast(){
    this.navCtrl.push(PastPage);
  }



}
