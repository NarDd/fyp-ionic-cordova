import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the AttendancelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-attendancelist',
  templateUrl: 'attendancelist.html',
})
export class AttendancelistPage {
  eventid : any;
  presentevent: any;
  absentevent: any;
  User: any;
  absentlist : any;
  present: Array<any>;
  absent: Array<any>;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public storage: Storage,
    public restProvider: RestProvider) {
    this.setData();
    this.getAttendance();
    this.User = "Present";
    this.present = [];
    this.absent = [];
  }

  setData(){
    this.eventid = this.navParams.get("id");
    console.log("eventid");
    console.log(this.eventid);
  }

  undoMarking(){
    this.restProvider.postUndoMarked(this.present,this.eventid)
    .then(data => {
        this.getAttendance();
    });
  }

  mark(){
    this.restProvider.postMarked(this.absent,this.eventid)
    .then(data => {
        this.getAttendance();
    });
  }

  updateUndoMarked(userid,isChecked,i){
    if(isChecked == true){
      this.present.push(userid);
      console.log("pushed");
      console.log(this.present);
    }
    else{
      let ind = this.present.indexOf(userid);
      if(ind != -1){
        this.present.splice(ind, 1);
      }
    }
  }

  updateMarked(userid,isChecked,i){
    if(isChecked == true){
      this.absent.push(userid);
      console.log("pushed");
      console.log(this.absent);
    }
    else{
      let ind = this.absent.indexOf(userid);
      if(ind != -1){
        this.absent.splice(ind, 1);
      }
    }
  }

  getAttendance(){
    this.restProvider.getPresent(this.eventid)
    .then(data => {
      this.presentevent = data;
      console.log(this.presentevent);
    });

    this.restProvider.getAbsent(this.eventid)
    .then(data => {
      this.absentevent = data;
      console.log(this.absentevent);
    });

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancelistPage');
  }



}
