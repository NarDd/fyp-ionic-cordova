import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController, Slides } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  @ViewChild(Slides) slides: Slides;
  event : any;
  userid : any;
  expired : any;

  buttonText: string = "Volunteer";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public restProvider: RestProvider,
    public storage: Storage
  ) {
    this.event = this.navParams.get("evt");
    this.expired = this.navParams.get("expired");

    this.storage.get('user_id').then((val) => {
      this.userid = val;
      console.log(this.userid);
      var evtUsers = this.event.users;
      console.log(evtUsers);
      console.log(evtUsers.map(u => u.id));
      if (evtUsers.map(u => u.id).includes(this.userid))
        this.buttonText = "Withdraw";
    });
  }

  AfterViewInit() {
    this.slides.autoHeight = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
    this.slides.resize();
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

  onActionButtonClick(){
    if (this.buttonText === "Volunteer") {
        this.restProvider.postVolunteer(this.userid,this.event).then((result) => {
          console.log(result);
          this.buttonText = "Withdraw";
        }, (err) => {
          console.log(err);
        });
    }
    else {
      this.restProvider.postWithdraw(this.userid,this.event).then((result) => {
        console.log(result);
        this.buttonText = "Volunteer";
      }, (err) => {
        console.log(err);
      });
    }
  }

}
