import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AttendancePage } from '../attendance/attendance';
import { ProfilePage } from '../profile/profile';
import { EventdatesPage } from '../eventdates/eventdates';

/**
 * Generated class for the MyeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myevent',
  templateUrl: 'myevent.html',
})
export class MyeventPage {
  events: any;
  isadmin: any;

  sliderOpts = {
    pager: true,
    autoHeight: true
  };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public restProvider: RestProvider,
      public storage: Storage,
      public modalCtrl: ModalController,
    ) {
    this.getMyEvent();
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

  getMyEvent(){
    this.storage.get('user_id').then((val) => {
      this.restProvider.getMyEvent(val)
      .then(data => {
        console.log(data);
        this.events = data;
        console.log(this.events);
      });
    });

    this.storage.get('isadmin').then((val) => {
      console.log("val is " + val);
      if(val == 1){
        this.isadmin = true;
      }
      else{
        this.isadmin = false;
      }

    });

  }

  toAttendance(evt){
    console.log(evt);
    this.navCtrl.push(AttendancePage, {evt: evt});
  }

  toMyEvent(evt){
    console.log(evt);
    this.navCtrl.push(EventdatesPage, {evt: evt});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventPage');
  }




}
