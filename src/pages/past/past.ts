import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
import { EventPage } from '../event/event';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the PastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-past',
  templateUrl: 'past.html',
})
export class PastPage {
  public events: any;
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public restProvider: RestProvider,
      public storage: Storage,
      public modalCtrl: ModalController,
    ) {
    this.getPastEvent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastPage');
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

  getPastEvent() {
    this.restProvider.getPastEvent()
    .then(data => {
      this.events = data;
      console.log(this.events);
    });
  }

  viewEvent(evt){
    console.log(evt);
    this.navCtrl.push(EventPage, {
      evt: evt,
      expired: false
    });
  }

  toProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
