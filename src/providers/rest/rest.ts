import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http, public toastCtrl: ToastController) {
    console.log('Hello RestProvider Provider');
  }
  // apiUrl = 'http://bernard.southeastasia.cloudapp.azure.com/api/';
  apiUrl = 'http://nard.site/api/';
  error : any;

//Before Login
  postSignIn(user: any) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'signin',
      {
        email : user.email,
        password : user.password
      }).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.error = JSON.parse(err._body);
        this.toastCtrl.create({
          message: this.error.errors,
          duration: 3000
        }).present();
      });
    });
  }

  getCompanies() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'companies').map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

//Get Event Pages
  getUpcoming(user_id : any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'upcoming' + "/" + user_id).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  getPastEvents(user_id : any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'pastevents' + "/" + user_id).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  postUndoMarked(present: any, eventid : any) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'undomarked',
      {
        users : present,
        eventid : eventid,
      }).subscribe(data => {
        this.toastCtrl.create({
          message: "Successfully unmarked attendances",
          duration: 3000
        }).present();
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  postMarked(absent: any, eventid : any) {
    console.log(absent);
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'marked',
      {
        users : absent,
        eventid : eventid,
      }).subscribe(data => {
        this.toastCtrl.create({
          message: "Successfully marked attendances",
          duration: 3000
        }).present();
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }



  getSecret(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'secret/'+id).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  getCurrentEvent(id, user) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'getEventAttendance/'+id + "/" + user).map(res => res.json()).subscribe(data => {
        console.log(data);
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }



  register(userData: any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'register',
      {
        email : userData.email,
        password : userData.password,
        name : userData.name,
        corporate: userData.corporate,
        company: userData.company,
      }).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.error = JSON.parse(err._body);
        this.toastCtrl.create({
          message: this.error.errors,
          duration: 3000
        }).present();
      });
    });
  }

  postVolunteer(userid: any, event: any) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'setVolunteer',
      {
        userid : userid,
        event : event
      }).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.error = JSON.parse(err._body);
        this.toastCtrl.create({
          message: this.error.errors,
          duration: 3000
        }).present();
      });
    });
  }

  postWithdraw(userid: any, event: any) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'setWithdraw',
      {
        userid : userid,
        event : event
      }).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.error = JSON.parse(err._body);
        this.toastCtrl.create({
          message: this.error.errors,
          duration: 3000
        }).present();
      });
    });
  }

  getMyEvent(val) {
    console.log(val);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'myevent/'+val
    ).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  getStatus() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'getstatus').map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  getPresent(eventid) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'present/'+eventid).map(res => res.json()).subscribe(data => {
        var result = data.map(u => u.users);
        resolve(result);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  getAbsent(eventid) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'absent/'+eventid).map(res => res.json()).subscribe(data => {
        var result = data.map(u => u.users);
        resolve(result);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }



  getUser(val){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'getuser/'+ val).map(res => res.json()).subscribe(data => {
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }

  setAttendance(data:any){
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'attendance',
      {
        event_id : data.eventdate,
        user_id : data.user
      }).map(res => res.json()).subscribe(data => {
        this.toastCtrl.create({
          message: "Attendance Marked",
          duration: 3000
        }).present();
        resolve(data);
      }, err => {
        this.toastCtrl.create({
          message: "An Error Has Occured",
          duration: 3000
        }).present();
      });
    });
  }


}
