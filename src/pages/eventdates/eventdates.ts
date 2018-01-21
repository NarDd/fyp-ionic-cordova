import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AttendancelistPage } from '../attendancelist/attendancelist';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EventdatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 declare const ble;

@Component({
  selector: 'page-eventdates',
  templateUrl: 'eventdates.html',
})
export class EventdatesPage {

  event : any;
  isToggled: boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public storage: Storage,
      public modalCtrl: ModalController,
      public toastCtrl: ToastController,
    ) {
      this.event = this.navParams.get("evt");
      this.isToggled = false;
      console.log(this.event);
  }

  public notify() {
  console.log("Toggled: "+ this.isToggled);
    if(this.isToggled == true){
      this.activateAttendance();
    }
    else{
      this.stopAttendance();
    }
  }

  activateAttendance() {
    ble.start(79, succ => {
      this.toastCtrl.create({
        message: "Attendance marking started successfully",
        duration: 3000
      }).present();
    }, err => {
      if(err == "BLUETOOTH_DISABLED"){
        this.toastCtrl.create({
          message: "Please turn on Bluetooth",
          duration: 3000
        }).present();
      }
      else if(err == "BLE_NOT_SUPPORTED" || err == "NO_BLUETOOTH"){
        this.toastCtrl.create({
          message: "BLE not supported, use manual marking",
          duration: 3000
        }).present();
      }
      else{
        this.toastCtrl.create({
          message: err,
          duration: 3000
        }).present();
      }
      this.isToggled = false;
    });

  }

  stopAttendance(){
      ble.stop();
  }

  onActionButtonClick(id){
    this.navCtrl.push(AttendancelistPage, {id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventdatesPage');
  }

}
