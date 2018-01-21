import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { ProfilePage } from '../profile/profile';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/**
* Generated class for the attendancePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

/*
Notes :  console.log({prop: String.fromCharCode.apply(null,new Uint8Array(advertisingData[prop]))});
*/

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  events : any;
  eventstore : any;
  attendance: any;
  secret : any;
  user : any;
  buttonText: Array<string> = ["I Have Arrived"];
  isDisabled: Array<boolean> = [false];
  code: String;
  yo: any;
  marked: any;
  // isDisabled: Array<boolean> = [true];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public ble: BLE,
    public restProvider: RestProvider,
    public storage: Storage,
    public toastCtrl: ToastController) {
      // constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public storage: Storage) {
      this.setData();
      this.getSecret();
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad attendancePage');
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

    setData(){
      this.eventstore = this.navParams.get("evt");

      this.storage.get("user_id").then((val) =>
      {
        this.user = val;
        this.restProvider.getCurrentEvent(this.eventstore.id,val)
        .then(data => {
          console.log(data);
          this.events = data;
        });
      });
    }

    getSecret(){
      this.restProvider.getSecret(this.eventstore.contact_id)
      .then(data => {
        this.code = data[0].secret;
        console.log(this.code);
      });
    }

    setAttendance(id){
      console.log("user");
      console.log(this.user);
      this.restProvider.setAttendance({eventdate: id, user: this.user})
      .then(data => {
        this.marked = true;
        this.buttonText[0] = 'Attendance Marked';
        //i think remove button and display attendance marked better when it is like marked
        this.toastCtrl.create({
        message: "Attendance Marked",
        duration: 3000
      }).present();
    });
  }

  onActionButtonClick(id){
    // if (this.buttonText === "Scan") {
    //   // console.log("the id is " + id);
    //   //
    this.ble.scan([], 5).subscribe(data => {
    //ALTBeacon uses 0xff to advertise
    var SERVICE_DATA_KEY = '0xff';
    var advertisingData = this.parseAdvertisingData(data.advertising);
    var serviceData = advertisingData[SERVICE_DATA_KEY];
    if (typeof serviceData !== null && serviceData !== undefined) {
      /* beacon layout
      m:2-3=beac,i:4-19,i:20-21,i:22-23,p:24-24,d:25-25
      UUID: 2f234454-cf6d-4fff-adf2-f4911ba9ffa6
      MAJOR: 1
      MINOR: 2
      DATA: NEW LONG[]{1}
      */
      //slice for UUID
      var uuidBytes = new Uint8Array(serviceData.slice(4,20));
      var uuid = "";
      var major = "";
      var minor = "";
      var secret = "";
      uuidBytes.forEach(val => {
        uuid += val.toString(16);
        //UUID Formatting
        if (uuid.length == 8 || uuid.length == 13 || uuid.length == 18 || uuid.length == 23)
        uuid += "-";
      });
      //can output here the person is near
      console.log("the uuid is " + uuid);
      //API to get the UUID , hardcoded for now
      //Currently due to 1 byte beacon layout our major and minor can only be 1 digit long there is 100 possibilities
      // if(uuid === "2f234454-cf6d-4fff-adf2-f4911ba9ffa6"){
      if(uuid === "2f234454-cf6d-4fff-adf2-f4911ba9ffa6"){
      var majorBytes = new Uint8Array(serviceData.slice(20,22));
      console.log({mj : majorBytes});
      var minorBytes = new Uint8Array(serviceData.slice(22,24));
      console.log({mi : minorBytes});

      //Secret is stored in a long array therefore it is required to parse twice from int8array
      var secretBytes = new Uint8Array(serviceData.slice(25));
      var secretBytesArray = new Uint8Array(secretBytes);
      secretBytesArray.forEach(val => {
        secret += val.toString(16);
      });
      console.log({secret : secret});

      majorBytes.forEach(val => {
        major += val.toString(16);
      });

      //format major
      if(major.length == 2)
      major = major.replace(/^[0]/g,"");

      minorBytes.forEach(val => {
        minor += val.toString(16);
      });

      if(minor.length == 2)
      minor = minor.replace(/^[0]/g,"");

      console.log(this.code);
      // if(secret == this.code){
      //   console.log("marked");
      // }
      //to change because now hardcoded
      if(this.code == "79"){
      this.setAttendance(id);
    }
    //check Minor if it is correct
    console.log("Minor is " + minor);
    //check Major if it is correct
    console.log("Major is " + major);
    //check secreit if it is correct
    console.log("Secret is " + secret);
  }
}

});
// this.buttonText = "Stop Scan";
// }
// else {
//   this.buttonText = "Scan";
// }
}

asHexString(i) {
  var hex;
  hex = i.toString(16);
  // zero padding
  if (hex.length === 1) {
  hex = "0" + hex;
}
return "0x" + hex;
}

parseAdvertisingData(buffer) {
  var length, type, data, i = 0, advertisementData = {};
  var bytes = new Uint8Array(buffer);

  while (length !== 0) {
    length = bytes[i] & 0xFF;
    i++;
    // decode type constants from https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile
    type = bytes[i] & 0xFF;
    i++;
    data = bytes.slice(i, i + length - 1).buffer; // length includes type byte, but not length byte
    i += length - 2;  // move to end of data
    i++;
    advertisementData[this.asHexString(type)] = data;
  }

  return advertisementData;
}

}
