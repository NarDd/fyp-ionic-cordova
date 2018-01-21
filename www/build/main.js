webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpcomingPage = (function () {
    function UpcomingPage(navCtrl, navParams, restProvider, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.getUpcoming();
    }
    UpcomingPage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    UpcomingPage.prototype.getUpcoming = function () {
        var _this = this;
        this.restProvider.getUpcoming()
            .then(function (data) {
            _this.events = data;
            console.log(_this.events);
        });
    };
    UpcomingPage.prototype.showHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    UpcomingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingPage');
    };
    UpcomingPage.prototype.viewEvent = function (evt) {
        console.log(evt);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], {
            evt: evt,
            expired: true
        });
    };
    UpcomingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upcoming',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\upcoming\upcoming.html"*/'<!--\n  Generated template for the UpcomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Upcoming Events</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-horizontal padding-top>\n  <ion-card *ngFor="let evt of events">\n  <ion-slides pager>\n    <ion-slide *ngFor="let photo of evt.photos">\n      <img src="http://bernard.southeastasia.cloudapp.azure.com/eventimg/{{photo.url}}"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card-content>\n    <ion-card-title>\n      {{evt.event_name}}\n    </ion-card-title>\n\n    <ion-row>\n      <ion-col>\n        <span>Location: {{evt.location}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngFor="let evt of evt.eventdates">\n        <span>Date: {{evt.date}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngFor="let evt of evt.eventdates">\n        <span>Time: {{evt.from_time}} to {{evt.to_time}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button block ion-button (click)="viewEvent(evt)" [id]="evt.id" >View Event</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\upcoming\upcoming.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], UpcomingPage);
    return UpcomingPage;
}());

//# sourceMappingURL=upcoming.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(navCtrl, navParams, modalCtrl, restProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.buttonText = "Volunteer";
        this.event = this.navParams.get("evt");
        this.expired = this.navParams.get("expired");
        this.storage.get('user_id').then(function (val) {
            _this.userid = val;
            console.log(_this.userid);
            var evtUsers = _this.event.users;
            console.log(evtUsers);
            console.log(evtUsers.map(function (u) { return u.id; }));
            if (evtUsers.map(function (u) { return u.id; }).includes(_this.userid))
                _this.buttonText = "Withdraw";
        });
    }
    EventPage.prototype.AfterViewInit = function () {
        this.slides.autoHeight = true;
    };
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
        this.slides.resize();
    };
    EventPage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    EventPage.prototype.onActionButtonClick = function () {
        var _this = this;
        if (this.buttonText === "Volunteer") {
            this.restProvider.postVolunteer(this.userid, this.event).then(function (result) {
                console.log(result);
                _this.buttonText = "Withdraw";
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.restProvider.postWithdraw(this.userid, this.event).then(function (result) {
                console.log(result);
                _this.buttonText = "Volunteer";
            }, function (err) {
                console.log(err);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], EventPage.prototype, "slides", void 0);
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\event\event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Event</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-horizontal padding-top>\n  <div id="wrapper">\n    <ion-slides pager autoHeight *ngFor="let photo of event.photos">\n      <ion-slide>\n        <img src="http://bernard.southeastasia.cloudapp.azure.com/eventimg/{{photo.url}}"/>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n<ion-card>\n  <ion-card-content>\n      <ion-card-title>\n        {{event.event_name}}\n      </ion-card-title>\n      <ion-row>\n        Event Description :\n      </ion-row>\n      <ion-row>\n        {{event.desc}}\n      </ion-row>\n      <br>\n      <ion-row>\n        Event Location :\n      </ion-row>\n      <ion-row>\n        {{event.location}}\n      </ion-row>\n      <br>\n      <ion-row>\n        Event Dates :\n      </ion-row>\n      <ion-row *ngFor="let evt of event.eventdates">\n        {{evt.date}}\n      </ion-row>\n      <br>\n      <ion-row>\n        Event Time\n      </ion-row>\n      <ion-row *ngFor="let evt of event.eventdates">\n        {{evt.from_time}} to {{evt.to_time}}\n      </ion-row>\n      <ion-row>\n        <ion-col>\n        <button float-right ion-button *ngIf="expired" (click)="onActionButtonClick()">{{ buttonText }}</button>\n        </ion-col>\n      </ion-row>\n\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\event\event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PastPage = (function () {
    function PastPage(navCtrl, navParams, restProvider, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.getPastEvent();
    }
    PastPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PastPage');
    };
    PastPage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    PastPage.prototype.getPastEvent = function () {
        var _this = this;
        this.restProvider.getPastEvent()
            .then(function (data) {
            _this.events = data;
            console.log(_this.events);
        });
    };
    PastPage.prototype.viewEvent = function (evt) {
        console.log(evt);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], {
            evt: evt,
            expired: false
        });
    };
    PastPage.prototype.toProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    PastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-past',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\past\past.html"*/'<!--\n  Generated template for the UpcomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Past Events</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-horizontal padding-top>\n  <ion-card *ngFor="let evt of events">\n    <ion-slides pager *ngFor="let photo of evt.photos">\n      <ion-slide>\n        <img src="http://bernard.southeastasia.cloudapp.azure.com/eventimg/{{photo.url}}"/>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{evt.event_name}}\n      </ion-card-title>\n\n      <ion-row>\n        <ion-col>\n          <span>Location: {{evt.location}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col *ngFor="let evt of evt.eventdates">\n          <span>Date: {{evt.date}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col *ngFor="let evt of evt.eventdates">\n          <span>Time: {{evt.from_time}} to {{evt.to_time}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button block ion-button (click)="viewEvent(evt)" [id]="evt.id" >View Event</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\past\past.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], PastPage);
    return PastPage;
}());

//# sourceMappingURL=past.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyeventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attendance_attendance__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eventdates_eventdates__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MyeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyeventPage = (function () {
    function MyeventPage(navCtrl, navParams, restProvider, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.sliderOpts = {
            pager: true,
            autoHeight: true
        };
        this.getMyEvent();
    }
    MyeventPage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    MyeventPage.prototype.getMyEvent = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getMyEvent(val)
                .then(function (data) {
                console.log(data);
                _this.events = data;
                console.log(_this.events);
            });
        });
        this.storage.get('isadmin').then(function (val) {
            console.log("val is " + val);
            if (val == 1) {
                _this.isadmin = true;
            }
            else {
                _this.isadmin = false;
            }
        });
    };
    MyeventPage.prototype.toAttendance = function (evt) {
        console.log(evt);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attendance_attendance__["a" /* AttendancePage */], { evt: evt });
    };
    MyeventPage.prototype.toMyEvent = function (evt) {
        console.log(evt);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__eventdates_eventdates__["a" /* EventdatesPage */], { evt: evt });
    };
    MyeventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyeventPage');
    };
    MyeventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myevent',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\myevent\myevent.html"*/'<!--\n  Generated template for the UpcomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Events</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-horizontal padding-top>\n  <ion-card *ngFor="let evt of events">\n  <ion-slides pager>\n    <ion-slide *ngFor="let photo of evt.photos">\n      <img src="http://bernard.southeastasia.cloudapp.azure.com/eventimg/{{photo.url}}"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-card-content>\n    <ion-card-title>\n      {{evt.event_name}}\n    </ion-card-title>\n\n    <ion-row>\n      <ion-col>\n        <span>Location: {{evt.location}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngFor="let evt of evt.eventdates">\n        <span>Date: {{evt.date}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngFor="let evt of evt.eventdates">\n        <span>Time: {{evt.from_time}} to {{evt.to_time}}</span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button block ion-button (click)="toAttendance(evt)" [id]="evt.id" >Mark Attendance</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\myevent\myevent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], MyeventPage);
    return MyeventPage;
}());

//# sourceMappingURL=myevent.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        // apiUrl = 'http://bernard.southeastasia.cloudapp.azure.com/api/';
        this.apiUrl = 'http://nard.site/api/';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.postUndoMarked = function (present, eventid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'undomarked', {
                users: present,
                eventid: eventid,
            }).subscribe(function (data) {
                _this.toastCtrl.create({
                    message: "Successfully unmarked attendances",
                    duration: 3000
                }).present();
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.postMarked = function (absent, eventid) {
        var _this = this;
        console.log(absent);
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'marked', {
                users: absent,
                eventid: eventid,
            }).subscribe(function (data) {
                _this.toastCtrl.create({
                    message: "Successfully marked attendances",
                    duration: 3000
                }).present();
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getUpcoming = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'upcoming').map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getSecret = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'secret/' + id).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getCurrentEvent = function (id, user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'getEventAttendance/' + id + "/" + user).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getPastEvent = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'pastevents').map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.register = function (userData) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'register', {
                email: userData.email,
                password: userData.password,
                name: userData.name
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.error = JSON.parse(err._body);
                _this.toastCtrl.create({
                    message: _this.error.errors,
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.postVolunteer = function (userid, event) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'setVolunteer', {
                userid: userid,
                event: event
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.error = JSON.parse(err._body);
                _this.toastCtrl.create({
                    message: _this.error.errors,
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.postWithdraw = function (userid, event) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'setWithdraw', {
                userid: userid,
                event: event
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.error = JSON.parse(err._body);
                _this.toastCtrl.create({
                    message: _this.error.errors,
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getMyEvent = function (val) {
        var _this = this;
        console.log(val);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'myevent/' + val).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getStatus = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'getstatus').map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getPresent = function (eventid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'present/' + eventid).map(function (res) { return res.json(); }).subscribe(function (data) {
                var result = data.map(function (u) { return u.users; });
                resolve(result);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getAbsent = function (eventid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'absent/' + eventid).map(function (res) { return res.json(); }).subscribe(function (data) {
                var result = data.map(function (u) { return u.users; });
                resolve(result);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.signIn = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'signin', {
                email: user.email,
                password: user.password
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.error = JSON.parse(err._body);
                _this.toastCtrl.create({
                    message: _this.error.errors,
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.getUser = function (val) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + 'getuser/' + val).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider.prototype.setAttendance = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'attendance', {
                event_id: data.eventdate,
                user_id: data.user
            }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.toastCtrl.create({
                    message: "Attendance Marked",
                    duration: 3000
                }).present();
                resolve(data);
            }, function (err) {
                _this.toastCtrl.create({
                    message: "An Error Has Occured",
                    duration: 3000
                }).present();
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object])
    ], RestProvider);
    return RestProvider;
    var _a, _b;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HelloIonicPage } from '../hello-ionic/hello-ionic';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

var RegisterPage = (function () {
    // constructor(public navCtrl: NavController, public AuthServiceProvider: AuthServiceProvider) {
    function RegisterPage(navCtrl, restProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        // error;
        // responseData : any;
        this.userData = { "username": "", "password": "", "email": "", "name": "", "cfmpassword": "" };
    }
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        if (this.userData.cfmpassword == this.userData.password) {
            // console.log(this.userData);
            this.restProvider.register(this.userData).then(function (result) {
                console.log(result);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastCtrl.create({
                message: "Password Mismatched",
                duration: 3000
            }).present();
        }
    };
    RegisterPage.prototype.backWelcome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top class="background" [attr.noScroll]="shouldScroll">\n<!-- <ion-img src="../../assets/icon/MatchIt_Logo.png"></ion-img> -->\n  <!-- <button class="btn" ion-button color="primary" block>\n  <ion-icon name="logo-facebook"></ion-icon>\n  <div padding-left>Signup with Facebook</div>\n  </button> -->\n\n  <!-- <p class="ptxt">or</p> -->\n\n  <div class="divclass">\n\n  <ion-item>\n    <ion-label><ion-icon floating name="mail"></ion-icon></ion-label>\n    <ion-input type="text" placeholder="Email Address" [(ngModel)]="userData.email" block outline></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label><ion-icon floating name="lock"></ion-icon></ion-label>\n    <ion-input class="text" type="Password" placeholder="Password" [(ngModel)]="userData.password" block outline></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label><ion-icon floating name="lock"></ion-icon></ion-label>\n    <ion-input class="text" type="Password" placeholder="Password"  [(ngModel)]="userData.cfmpassword" block outline></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label><ion-icon floating name="happy"></ion-icon></ion-label>\n    <ion-input type="text" placeholder="Full Name" [(ngModel)]="userData.name" block outline></ion-input>\n  </ion-item>\n\n  </div>\n  <br>\n  <ion-label color="danger" class="errormsg">{{error}}</ion-label>\n  <br>\n  <button ion-button class="btn" (click)="registerUser()" color="light" block>Register</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
* Generated class for the attendancePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
/*
Notes :  console.log({prop: String.fromCharCode.apply(null,new Uint8Array(advertisingData[prop]))});
*/
var AttendancePage = (function () {
    // isDisabled: Array<boolean> = [true];
    function AttendancePage(navCtrl, modalCtrl, navParams, ble, restProvider, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.ble = ble;
        this.restProvider = restProvider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.buttonText = ["I Have Arrived"];
        this.isDisabled = [false];
        // constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public storage: Storage) {
        this.setData();
        this.getSecret();
    }
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad attendancePage');
    };
    AttendancePage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    AttendancePage.prototype.setData = function () {
        var _this = this;
        this.eventstore = this.navParams.get("evt");
        this.storage.get("user_id").then(function (val) {
            _this.user = val;
            _this.restProvider.getCurrentEvent(_this.eventstore.id, val)
                .then(function (data) {
                console.log(data);
                _this.events = data;
            });
        });
    };
    AttendancePage.prototype.getSecret = function () {
        var _this = this;
        this.restProvider.getSecret(this.eventstore.contact_id)
            .then(function (data) {
            _this.code = data[0].secret;
            console.log(_this.code);
        });
    };
    AttendancePage.prototype.setAttendance = function (id) {
        var _this = this;
        console.log("user");
        console.log(this.user);
        this.restProvider.setAttendance({ eventdate: id, user: this.user })
            .then(function (data) {
            _this.marked = true;
            _this.buttonText[0] = 'Attendance Marked';
            //i think remove button and display attendance marked better when it is like marked
            _this.toastCtrl.create({
                message: "Attendance Marked",
                duration: 3000
            }).present();
        });
    };
    AttendancePage.prototype.onActionButtonClick = function (id) {
        var _this = this;
        // if (this.buttonText === "Scan") {
        //   // console.log("the id is " + id);
        //   //
        this.ble.scan([], 5).subscribe(function (data) {
            //ALTBeacon uses 0xff to advertise
            var SERVICE_DATA_KEY = '0xff';
            var advertisingData = _this.parseAdvertisingData(data.advertising);
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
                var uuidBytes = new Uint8Array(serviceData.slice(4, 20));
                var uuid = "";
                var major = "";
                var minor = "";
                var secret = "";
                uuidBytes.forEach(function (val) {
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
                if (uuid === "2f234454-cf6d-4fff-adf2-f4911ba9ffa6") {
                    var majorBytes = new Uint8Array(serviceData.slice(20, 22));
                    console.log({ mj: majorBytes });
                    var minorBytes = new Uint8Array(serviceData.slice(22, 24));
                    console.log({ mi: minorBytes });
                    //Secret is stored in a long array therefore it is required to parse twice from int8array
                    var secretBytes = new Uint8Array(serviceData.slice(25));
                    var secretBytesArray = new Uint8Array(secretBytes);
                    secretBytesArray.forEach(function (val) {
                        secret += val.toString(16);
                    });
                    console.log({ secret: secret });
                    majorBytes.forEach(function (val) {
                        major += val.toString(16);
                    });
                    //format major
                    if (major.length == 2)
                        major = major.replace(/^[0]/g, "");
                    minorBytes.forEach(function (val) {
                        minor += val.toString(16);
                    });
                    if (minor.length == 2)
                        minor = minor.replace(/^[0]/g, "");
                    console.log(_this.code);
                    // if(secret == this.code){
                    //   console.log("marked");
                    // }
                    //to change because now hardcoded
                    if (_this.code == "79") {
                        _this.setAttendance(id);
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
    };
    AttendancePage.prototype.asHexString = function (i) {
        var hex;
        hex = i.toString(16);
        // zero padding
        if (hex.length === 1) {
            hex = "0" + hex;
        }
        return "0x" + hex;
    };
    AttendancePage.prototype.parseAdvertisingData = function (buffer) {
        var length, type, data, i = 0, advertisementData = {};
        var bytes = new Uint8Array(buffer);
        while (length !== 0) {
            length = bytes[i] & 0xFF;
            i++;
            // decode type constants from https://www.bluetooth.org/en-us/specification/assigned-numbers/generic-access-profile
            type = bytes[i] & 0xFF;
            i++;
            data = bytes.slice(i, i + length - 1).buffer; // length includes type byte, but not length byte
            i += length - 2; // move to end of data
            i++;
            advertisementData[this.asHexString(type)] = data;
        }
        return advertisementData;
    };
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\attendance\attendance.html"*/'<!--\n  Generated template for the attendancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Attendance</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-title>{{eventstore.event_name}} Dates</ion-title>\n    </ion-col>\n  </ion-row>\n\n  <ion-card *ngFor="let evt of events; let i = index">\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n        <span>Date: {{evt.date}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span>Time: {{evt.from_time}} to {{evt.to_time}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <button ion-button (click)="onActionButtonClick(evt.id)" [disabled]="isDisabled[i]" block>{{ buttonText[i] }}</button>\n        </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\attendance\attendance.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _g || Object])
    ], AttendancePage);
    return AttendancePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__attendancelist_attendancelist__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventdatesPage = (function () {
    function EventdatesPage(navCtrl, navParams, storage, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.event = this.navParams.get("evt");
        this.isToggled = false;
        console.log(this.event);
    }
    EventdatesPage.prototype.notify = function () {
        console.log("Toggled: " + this.isToggled);
        if (this.isToggled == true) {
            this.activateAttendance();
        }
        else {
            this.stopAttendance();
        }
    };
    EventdatesPage.prototype.activateAttendance = function () {
        var _this = this;
        ble.start(79, function (succ) {
            _this.toastCtrl.create({
                message: "Attendance marking started successfully",
                duration: 3000
            }).present();
        }, function (err) {
            if (err == "BLUETOOTH_DISABLED") {
                _this.toastCtrl.create({
                    message: "Please turn on Bluetooth",
                    duration: 3000
                }).present();
            }
            else if (err == "BLE_NOT_SUPPORTED" || err == "NO_BLUETOOTH") {
                _this.toastCtrl.create({
                    message: "BLE not supported, use manual marking",
                    duration: 3000
                }).present();
            }
            else {
                _this.toastCtrl.create({
                    message: err,
                    duration: 3000
                }).present();
            }
            _this.isToggled = false;
        });
    };
    EventdatesPage.prototype.stopAttendance = function () {
        ble.stop();
    };
    EventdatesPage.prototype.onActionButtonClick = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__attendancelist_attendancelist__["a" /* AttendancelistPage */], { id: id });
    };
    EventdatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventdatesPage');
    };
    EventdatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventdates',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\eventdates\eventdates.html"*/'<!--\n  Generated template for the EventdatesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{event.event_name}} Attendance</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>Settings</ion-title>\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-label>Turn on Attendance Marking</ion-label>\n          <ion-toggle [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-title>Dates</ion-title>\n    <ion-card *ngFor="let date of event.eventdates; let i = index">\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <span>Date: {{date["date"]}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <span>Time: {{date["from_time"]}} to {{date["to_time"]}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <button ion-button (click)="onActionButtonClick(date.id)" block>View Attendance List</button>\n          </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\eventdates\eventdates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EventdatesPage);
    return EventdatesPage;
}());

//# sourceMappingURL=eventdates.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancelistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AttendancelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttendancelistPage = (function () {
    function AttendancelistPage(navCtrl, modalCtrl, navParams, storage, restProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.restProvider = restProvider;
        this.setData();
        this.getAttendance();
        this.User = "Present";
        this.present = [];
        this.absent = [];
    }
    AttendancelistPage.prototype.setData = function () {
        this.eventid = this.navParams.get("id");
        console.log("eventid");
        console.log(this.eventid);
    };
    AttendancelistPage.prototype.undoMarking = function () {
        var _this = this;
        this.restProvider.postUndoMarked(this.present, this.eventid)
            .then(function (data) {
            _this.getAttendance();
        });
    };
    AttendancelistPage.prototype.mark = function () {
        var _this = this;
        this.restProvider.postMarked(this.absent, this.eventid)
            .then(function (data) {
            _this.getAttendance();
        });
    };
    AttendancelistPage.prototype.updateUndoMarked = function (userid, isChecked, i) {
        if (isChecked == true) {
            this.present.push(userid);
            console.log("pushed");
            console.log(this.present);
        }
        else {
            var ind = this.present.indexOf(userid);
            if (ind != -1) {
                this.present.splice(ind, 1);
            }
        }
    };
    AttendancelistPage.prototype.updateMarked = function (userid, isChecked, i) {
        if (isChecked == true) {
            this.absent.push(userid);
            console.log("pushed");
            console.log(this.absent);
        }
        else {
            var ind = this.absent.indexOf(userid);
            if (ind != -1) {
                this.absent.splice(ind, 1);
            }
        }
    };
    AttendancelistPage.prototype.getAttendance = function () {
        var _this = this;
        this.restProvider.getPresent(this.eventid)
            .then(function (data) {
            _this.presentevent = data;
            console.log(_this.presentevent);
        });
        this.restProvider.getAbsent(this.eventid)
            .then(function (data) {
            _this.absentevent = data;
            console.log(_this.absentevent);
        });
    };
    AttendancelistPage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    AttendancelistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancelistPage');
    };
    AttendancelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendancelist',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\attendancelist\attendancelist.html"*/'<!--\n  Generated template for the AttendancelistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Attendance List</ion-title>\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <ion-segment [(ngModel)]="User">\n      <ion-segment-button value="Present">\n        Present\n      </ion-segment-button>\n      <ion-segment-button value="Absent">\n        Absent\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="User">\n    <ion-list *ngSwitchCase="\'Present\'">\n      <ion-item *ngFor="let present of presentevent; let i = index">\n        <ion-label>{{present.name}}</ion-label>\n        <ion-checkbox [(ngModel)]="present[i]" (ionChange)="updateUndoMarked(present.id,present[i],i)" ></ion-checkbox>\n      </ion-item>\n      <button block (click)="undoMarking()" ion-button>Undo Marking</button>\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'Absent\'">\n      <ion-item *ngFor="let absent of absentevent ; let x = index">\n        <ion-label>{{absent.name}}</ion-label>\n        <ion-checkbox [(ngModel)]="absent[x]" (ionChange)="updateMarked(absent.id,absent[x],x)" ></ion-checkbox>\n      </ion-item>\n      <button block ion-button (click)="mark()">Mark Present</button>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\attendancelist\attendancelist.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _e || Object])
    ], AttendancelistPage);
    return AttendancelistPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=attendancelist.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upcoming_upcoming__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_past_past__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_event__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_myevent_myevent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_attendancelist_attendancelist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_eventdates_eventdates__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_ble__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_past_past__["a" /* PastPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_myevent_myevent__["a" /* MyeventPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_eventdates_eventdates__["a" /* EventdatesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attendancelist_attendancelist__["a" /* AttendancelistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_upcoming_upcoming__["a" /* UpcomingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_past_past__["a" /* PastPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_myevent_myevent__["a" /* MyeventPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_eventdates_eventdates__["a" /* EventdatesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_attendancelist_attendancelist__["a" /* AttendancelistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_ble__["a" /* BLE */],
                __WEBPACK_IMPORTED_MODULE_21__providers_rest_rest__["a" /* RestProvider */],
                Storage
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_upcoming_upcoming__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_past_past__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_myevent_myevent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.showButton = false; //will not show the log out button by default
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */] },
            { title: 'My Events', component: __WEBPACK_IMPORTED_MODULE_6__pages_myevent_myevent__["a" /* MyeventPage */] },
            { title: 'Upcoming Event', component: __WEBPACK_IMPORTED_MODULE_4__pages_upcoming_upcoming__["a" /* UpcomingPage */] },
            { title: 'Past Events', component: __WEBPACK_IMPORTED_MODULE_5__pages_past_past__["a" /* PastPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\app\app.html"*/'<ion-menu [content]="content">\n<button end ion-button *ngIf="showButton">Log Out</button>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, restProvider, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        console.log('UserId');
        this.userData = this.navParams.get("userData");
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        this.storage.remove(this.userData);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n     <ion-title>\n       Profile\n     </ion-title>\n     <ion-buttons start>\n       <button ion-button (click)="dismiss()">\n         <span ion-text color="primary" showWhen="ios">Cancel</span>\n         <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n       </button>\n     </ion-buttons>\n   </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding-top padding-horizontal>\n\n<ion-row>\n  Name: {{userData.name}}\n</ion-row>\n\n<ion-row>\n  Email: {{userData.email}}\n</ion-row>\n\n<ion-row>\n  Skills:\n  <ion-col>\n    <ion-row *ngFor="let skill of userData.skills">\n        {{skill.skill_name}}\n    </ion-row>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n      <button ion-button class="btn" (click)="logout()" color="light" block>Logout</button>\n  </ion-col>\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upcoming_upcoming__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__past_past__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myevent_myevent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalCtrl, restProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.presentProfileModal = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.restProvider.getUser(val)
                .then(function (data) {
                var userData = data["user"];
                console.log(userData);
                var profileModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], { userData: userData });
                profileModal.present();
            });
        });
    };
    HomePage.prototype.myEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myevent_myevent__["a" /* MyeventPage */]);
    };
    HomePage.prototype.toUpcoming = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__upcoming_upcoming__["a" /* UpcomingPage */]);
    };
    HomePage.prototype.toPast = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__past_past__["a" /* PastPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Home</ion-title>\n\n    <ion-buttons end>\n    <button id="btn" (click)="presentProfileModal()">\n      <ion-icon name="contact" id="toProfile"></ion-icon>\n    </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-horizontal padding-top>\n  <ion-card (click)="myEvent()">\n    <img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1513301717000/photosp/3dfffbc8-6fc3-4d39-9123-b4f7c291674d/stock-photo-people-support-adult-love-child-honduras-girl-woman-kid-3dfffbc8-6fc3-4d39-9123-b4f7c291674d.jpg"/>\n    <div class="card-title">My Events</div>\n    <div class="card-subtitle">View here</div>\n  </ion-card>\n\n  <ion-card (click)="toUpcoming()">\n    <img src="https://thumb9.shutterstock.com/display_pic_with_logo/64260/467760488/stock-photo-volunteering-charity-people-and-ecology-concept-group-of-happy-volunteers-planting-treel-in-park-467760488.jpg"/>\n    <div class="card-title">Upcoming Events</div>\n    <div class="card-subtitle">View here</div>\n  </ion-card>\n\n  <ion-card (click)="toPast()" >\n    <img src="https://thumb1.shutterstock.com/display_pic_with_logo/2117717/689717260/stock-photo-group-of-diversity-people-volunteer-charity-project-689717260.jpg"/>\n    <div class="card-title">Past Events</div>\n    <div class="card-subtitle">View here</div>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, restProvider, navParams, storage) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.navParams = navParams;
        this.storage = storage;
        this.userData = { email: '', password: '' };
        // TODO chek if userDetails present in storage
        this.storage.get("user_id").then(function (user) {
            if (user !== null) {
                // this.navCtrl.setRoot(HomePage);
            }
            else {
                // TODO else continue
            }
        });
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.restProvider.signIn(this.userData).then(function (result) {
            console.log(result);
            _this.saveData(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.saveData = function (result) {
        var _this = this;
        console.log(result.user.isadmin);
        this.storage.set('api_token', result.user.api_token);
        this.storage.set('isadmin', result.user.isadmin).then(function (value) {
            _this.storage.get('isadmin').then(function (val) {
                console.log('Your isadmin is', val);
            });
        });
        this.storage.set('user_id', result.user.id);
    };
    LoginPage.prototype.registerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.backWelcome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-horizontal padding-top class="background" scroll="false">\n<!-- <ion-img src="../../assets/icon/MatchIt_Logo.png"></ion-img> -->\n  <button class="btn" ion-button color="primary" block>\n  <ion-icon name="logo-facebook"></ion-icon>\n  <div padding-left>Login with Facebook</div>\n  </button>\n\n  <p class="ptxt">or</p>\n\n  <!-- <div class="divclass"> -->\n  <ion-item>\n  <ion-label><ion-icon floating name="contact"></ion-icon></ion-label>\n  <!-- <ion-input class="btn" type="text" placeholder="Username" value="" [(ngModel)]="userData.username" block outline></ion-input> -->\n  <ion-input class="btn" type="text" [(ngModel)]="userData.email" placeholder="Email" value="" block outline></ion-input>\n  </ion-item>\n\n  <ion-item>\n  <ion-label><ion-icon floating name="lock"></ion-icon></ion-label>\n  <!-- <ion-input class="btn" type="Password" placeholder="Password" value="" [(ngModel)]="userData.password" block outline></ion-input> -->\n    <ion-input class="btn" type="Password" [(ngModel)]="userData.password" placeholder="Password" value="" block outline></ion-input>\n  </ion-item>\n  <!-- </div> -->\n  <br>\n  <ion-label color="danger" class="errormsg">{{error}}</ion-label>\n  <br>\n  <button ion-button class="btn" (click)="signIn()" color="light" block>Login</button>\n  <br>\n  <button ion-button class="btn" (click)="registerPage()" color="dark" block>Register</button>\n  <p>Forgot your password?</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Bernard\Desktop\fyp-ionic\fyp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map