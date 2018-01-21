import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  events: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public restProvider: RestProvider,
     public storage: Storage,
     public modalCtrl: ModalController,
) {
    this.getUpcoming();
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


  getUpcoming() {
    this.restProvider.getUpcoming()
    .then(data => {
      this.events = data;
      console.log(this.events);
    });
  }

  showHomePage(){
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  viewEvent(evt){
    console.log(evt);
    this.navCtrl.push(EventPage, {
      evt: evt,
      expired: true
    });
  }

}
