webpackJsonp([0,3],{

/***/ 1000:
/***/ function(module, exports) {

module.exports = "<app-employee-form (add)=\"add($event)\" [updateEnabled]=\"addEnabled\" [isNew]=\"true\" (addable)=\"this.addEnabled=$event\"></app-employee-form>\n<app-message-fade-out [bgClass]=\"'info'\" [(message)]=\"message\"></app-message-fade-out>\n<app-message-fade-out [bgClass]=\"'warning'\" [(message)]=\"errMessage\"></app-message-fade-out>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let item of items\">\n    <app-employee-form [value]=\"item\" [updateEnabled]=\"updateEnabled[item.eid]\" [deleteEnabled]=\"deleteEnabled[item.eid]\" [isNew]=\"false\" [updateCount]=\"updateCount[item.eid]\" [isExpired]=\"item.isExpired()\"\n                       (update)=\"update($event)\" (delete)=\"remove($event)\" (updatable)=\"onUpdatable(item.eid,$event)\"></app-employee-form>\n  </li>\n</ul>"

/***/ },

/***/ 1001:
/***/ function(module, exports) {

module.exports = "\n<footer class=\"container-fluid text-center\">\n  &copy; Copyright 2016 Burgista UK | All Rights Reserved\n</footer>"

/***/ },

/***/ 1002:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1003:
/***/ function(module, exports) {

module.exports = "<h1 style=\"text-transform: capitalize\">{{tableName}}</h1>\n<app-message-fade-out [bgClass]=\"'info'\" [(message)]=\"message\"></app-message-fade-out>\n<app-message-fade-out [bgClass]=\"'warning'\" [(message)]=\"errMessage\"></app-message-fade-out>\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let item of items\" [class.inactive]=\"!active[item[idColumn]]\">\n    <span *ngIf=\"fullname[item[idColumn]]\">{{fullname[item[idColumn]]}}:</span><input [ngClass]=\"[beingEdited[item[idColumn]]?'':'hidden']\" [(ngModel)]=\"item[valueColumn]\" (blur)=\"update(item[idColumn],13)\" (keydown)=\"update(item[idColumn],$event.keyCode)\"> <span [ngClass]=\"[beingEdited[item[idColumn]]?'hidden':'']\" (click)=\"letUpdate(item[idColumn])\">{{item[valueColumn]}}</span><span *ngIf=\"!active[item[idColumn]]\" (click)=\"resetPwd(item[idColumn])\" class=\"inactive\">{{pending[item[idColumn]]?'pending':'inactive'}}</span><span *ngIf=\"resetLink[item[idColumn]]\"><a [href]=\"resetLink[item[idColumn]]\" target=\"_blank\">reset password</a></span><span (click)=\"remove(item[idColumn])\"><i class=\" fa fa-times fa-fw\" style='color: red' aria-hidden=\"true\"></i></span>\n  </li>\n</ul>\n<div *ngIf=\"idColumn==='bid'\" class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newItem\" autofocus [placeholder]=\"placeholder\">\n  <span class=\"input-group-btn\">\n    <button type=\"button\" (click)=\"add()\" [ngClass]=\"['btn','btn-secondary',btnClass]\" [disabled]=\"!btnEnabled\">{{btnLabel}}</button>\n  </span>\n</div>"

/***/ },

/***/ 1004:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-2 sidenav\">\n\n</div>\n"

/***/ },

/***/ 1005:
/***/ function(module, exports) {

module.exports = "<div class=\"login-form-wrapper\">\n<div class=\"logo\">Login</div>\n  <!-- Main Form -->\n <div>\n  <div class=\"login-form-1\">\n    <form id=\"login-form\" class=\"text-left\" (ngSubmit)=\"onSubmit()\" #login_form=\"ngForm\">\n      <div class=\"main-login-form\">\n        <div class=\"login-group\">\n          <div class=\"form-group\">\n            <span><i class=\" fa fa-user fa-fw\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" id=\"lg_username\" name=\"lg_username\" placeholder=\"username\" [(ngModel)]=\"user.username\" required>\n          </div>\n          <div class=\"form-group\">\n            <span><i class=\" fa fa-key fa-fw\" aria-hidden=\"true\"></i></span>\n            <input type=\"password\" class=\"form-control\" id=\"lg_password\" name=\"lg_password\" placeholder=\"password\" [(ngModel)]=\"user.password\" (keydown)=\"makeForgetFalse()\" (input)=\"0\">\n          </div>\n          <div class=\"etc-login-form\">\n            <input type=\"checkbox\" id=\"lg_forget\" name=\"lg_forget\" [(ngModel)]=\"user.forget\" [disabled]=\"user.password.length>0\" (input)=\"0\">\n            <label for=\"lg_forget\">I forgot my password</label>\n          </div>\n          <div [ngClass]=\"['login-form-main-message','error', errMessage.length ? 'show' : '']\"><span><i class=\" fa fa-exclamation-triangle fa-fw\" aria-hidden=\"true\"></i></span>{{errMessage}}</div>\n          <div [ngClass]=\"['login-form-main-message', message.length ? 'show' : '']\"><span><i class=\" fa fa-check-square fa-fw\" aria-hidden=\"true\"></i></span>{{message}}</div>\n        </div>\n        <button type=\"submit\" class=\"login-button\" [disabled]=\"!login_form.valid || (!user.forget && user.password.length===0)\"><i [ngClass]=\"['fa', login_form.valid && (user.forget || user.password.length>0)?'fa-chevron-right':'fa-lock']\"></i></button>\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ },

/***/ 1006:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-8 text-left\">\n  <div class=\"logo-bg\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ },

/***/ 1007:
/***/ function(module, exports) {

module.exports = "<p [ngClass]=\"['bg-' + _bgClass, _bgClass,'success', 'fade']\" [ngStyle]=\"{'opacity':opacity, 'transition': transition, 'height': height, 'border-color': borderColor}\">\n  {{_message}}\n</p>\n"

/***/ },

/***/ 1008:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" [routerLink]=\"['']\">Burgista Timesheet</a>\n  </div>\n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul *ngIf=\"user==='admin'\" class=\"nav navbar-nav\">\n      <li><a [routerLink]=\"['branches']\">Branches</a></li>\n      <li><a [routerLink]=\"['users']\">Users</a></li>\n      <li><a [routerLink]=\"['employees']\">Employees</a></li>\n      <li><a [routerLink]=\"['report']\">Report</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!this.isLoggedIn\"><a [routerLink]=\"['login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      <li *ngIf=\"this.isLoggedIn\"></li>\n      <li *ngIf=\"this.isLoggedIn\"><a (click)=\"logout()\" ><span class=\"glyphicon glyphicon-user\"></span> {{user}} - <span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n    </ul>\n  </div>\n</div>"

/***/ },

/***/ 1009:
/***/ function(module, exports) {

module.exports = "<app-message-fade-out [bgClass]=\"'info'\" [(message)]=\"message\"></app-message-fade-out>\n<app-message-fade-out [bgClass]=\"'warning'\" [(message)]=\"errMessage\"></app-message-fade-out>\nFrom\n<div class=\"rtpDatePicker\">\n  <material-datepicker class=\"date-input\" [date]=\"startDate\" (onSelect)=\"onStartSelect($event)\"></material-datepicker>\n</div>\nTo\n<div class=\"rtpDatePicker\">\n  <material-datepicker class=\"date-input\" [date]=\"endDate\" (onSelect)=\"onEndSelect($event)\"></material-datepicker>\n</div>\n<md-tab-group (selectChange)=\"changeBranch($event)\">\n  <md-tab *ngFor=\"let branch of branches\">\n    <template md-tab-label>{{branch.name}}</template>\n    <template md-tab-content>\n      <div *ngIf=\"!disabled\">\n        <md-card class=\"md-card\">\n          <md-card-title>{{title}}</md-card-title>\n          <md-card-content>\n            <div class=\"panel panel-default\">\n              <!-- Default panel contents -->\n              <button type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"downloadCSV()\">\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Download\n              </button>\n              <button *ngIf=\"isFiltered && filteredHasEmail && curBranch==='ALL'\" type=\"button\" class=\"btn btn-default btn-lg\" (click)=\"emailReport(filteredEid,filteredName)\" [disabled]=\"!emailEnabled[filteredEid]||emailSent[filteredEid]\">\n                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Email report\n              </button>\n              <!-- Table -->\n              <table *ngIf=\"!isFiltered\" class=\"table\">\n                <tr class=\"darkbg\">\n                  <th>&nbsp;</th><th>Firstname</th><th>Surname</th><th>Rate</th><th>Worked</th><th>Breaks</th><th>Paying Time</th><th>Holiday Entitlement</th><th>Wage</th><th>Paid</th><th>Remainder</th><th>&nbsp;</th>\n                </tr>\n                <tr *ngFor=\"let row of table;let i = index;\" [class.darkbg]=\"i%2\">\n                  <td><button (click)=\"filter(row.eid,row.firstname + ' ' + row.surname)\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button></td>\n                  <td>{{row.firstname}}</td>\n                  <td>{{row.surname}}</td>\n                  <td>£{{row.rate.substr(1)}}</td>\n                  <td>{{row.hours}}:{{row.mins}}</td>\n                  <td>{{row.breaks_hours}}:{{row.breaks_mins}}</td>\n                  <td>{{row.paying_time_hours}}:{{row.paying_time_mins}}</td>\n                  <td>{{row.holiday_hours}}:{{row.holiday_mins}}</td>\n                  <td>£{{calc[row.eid].toFixed(2)}}</td>\n                  <td>£<input style=\"width:65px\" [(ngModel)]=\"paid[row.eid]\" (keyup)=\"recalcPaid()\"/></td>\n                  <td>£{{(calc[row.eid]-(paid[row.eid]?paid[row.eid]:0)).toFixed(2)}}</td>\n                  <td><button *ngIf=\"row.email && curBranch==='ALL'\" (click)=\"emailReport(row.eid, row.firstname + ' ' + row.surname)\" [disabled]=\"!this.emailEnabled[row.eid]||this.emailSent[row.eid]\" [class.sentEmail]=\"this.emailSent[row.eid]\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></button></td>\n                </tr>\n                <tr class=\"sumrow\">\n                  <td colspan=\"4\" style=\"text-align:right\">Sum</td>\n                  <td>{{hoursSum}}:{{minsSum}}</td>\n                  <td>{{breaksSumHours}}:{{breaksSumMinutes}}</td>\n                  <td>{{payingTimeSumHours}}:{{payingTimeSumMinutes}}</td>\n                  <td>{{holdiaySumHours}}:{{holidaySumMinutes}}</td>\n                  <td>£{{sumSum}}</td>\n                  <td>£{{paidSum}}</td>\n                  <td>£{{remainderSum}}</td>\n                  <td>&nbsp;</td>\n                </tr>\n              </table>\n              <div *ngIf=\"isFiltered\" style=\"font-size:125%\"><button (click)=\"unfilter()\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button> {{filteredName}}</div>\n              <table *ngIf=\"isFiltered\" class=\"table\">\n                <tr class=\"darkbg\">\n                  <th>Date</th><th *ngIf=\"branch.name==='All'\">Branch</th><th>Start</th><th>End</th><th>Rate</th><th>Worked</th><th>Break</th><th>Paying Time</th><th>Wage</th>\n                </tr>\n                <tr *ngFor=\"let row of fTable;let i = index;\" [class.darkbg]=\"i%2\">\n                  <td>{{row.sdate}}</td>\n                  <td *ngIf=\"branch.name==='All'\">{{row.branch}}</td>\n                  <td>{{row.start_time}}</td>\n                  <td>{{row.end_time}}</td>\n                  <td>£{{row.rate}}</td>\n                  <td>{{row.hours}}:{{row.mins}}</td>\n                  <td>{{row.breaktime}}</td>\n                  <td>{{row.paying_time_hours}}:{{row.paying_time_mins}}</td>\n                  <td>£{{row.wage.toFixed(2)}}</td>\n                </tr>\n                <tr  class=\"sumrow\">\n                  <td *ngIf=\"branch.name==='All'\" colspan=\"5\" style=\"text-align:right\">Sum</td>\n                  <td *ngIf=\"branch.name!=='All'\" colspan=\"4\" style=\"text-align:right\">Sum</td>\n                  <td>{{fHoursSum}}:{{fMinsSum}}</td>\n                  <td>{{fBreaktimeSumHours}}:{{fBreaktimeSumMinutes}}</td>\n                  <td>{{fPayingTimeSumHours}}:{{fPayingTimeSumMinutes}}</td>\n                  <td>£{{wageSum}}</td>\n                </tr>\n              </table>\n            </div>\n          </md-card-content>\n          <md-card-actions>\n\n          </md-card-actions>\n        </md-card>\n      </div>\n      <div *ngIf=\"disabled\">Please wait ...</div>\n\n    </template>\n  </md-tab>"

/***/ },

/***/ 1010:
/***/ function(module, exports) {

module.exports = "<div class=\"col-sm-2 sidenav\">\n\n</div>"

/***/ },

/***/ 1011:
/***/ function(module, exports) {

module.exports = "<md-card class=\"md-card\">\n  <md-card-title-group>\n    <md-card-title class=\"app-input-section\">{{name}} Branch</md-card-title>\n  <md-card-subtitle>\n    {{getSubtitle()}}\n  </md-card-subtitle>\n  </md-card-title-group>\n<md-card-content>\n<table class=\"table\">\n  <tr><th>Name</th><th>Times</th></tr>\n  <tr *ngIf=\"vacantEmps.length>0\">\n    <td><input auto-complete [ngClass]=\"['name-picker']\" [(ngModel)]=\"addedEmp\" [source]=\"vacantEmps\" #newEmp></td>\n    <td><app-interval-input [date]=\"_date\" [beingEdited]=\"true\" (vChange)=\"addNew($event)\"></app-interval-input></td>\n  </tr>\n  <tr><td colspan=\"3\"><app-message-fade-out [bgClass]=\"'warning'\" [message]=\"list.message\"></app-message-fade-out></td></tr>\n  <tr *ngFor=\"let k of engagedEmps\">\n    <td>{{list.items[k].name}}</td>\n    <td>\n      <span *ngFor=\"let wtid of workTimeIDs(k)\">\n      <app-interval-input [date]=\"_date\" [initValue]=\"list.items[k].worktimes[wtid]\" (vChange)=\"list.update(k,wtid,$event)\" [beingEdited]=\"list.beingEdited[k][wtid]\" (deleted)=\"list.delete(k,wtid)\" [btnName]=\"'update'\"></app-interval-input>\n      </span>\n      <div style=\"width:100%;border-top:1px solid beige\"><app-interval-input [beingEdited]=\"true\" [date]=\"_date\" (vChange)=\"list.add(k,$event)\"></app-interval-input></div>\n    </td>\n  </tr>\n</table>\n</md-card-content>\n</md-card>"

/***/ },

/***/ 1012:
/***/ function(module, exports) {

module.exports = "<span class=\"input-group\" [ngStyle]=\"{'background-color': _i.nextDay ? 'rgb(14,52,114)' : null, 'color': _i.nextDay ? 'white' : null }\" [ngClass]=\"[!beingEdited?'time':'',btnName==='update'?'updating':'']\">\n    <i *ngIf=\"_i.nextDay\" class=\" fa fa-moon-o fa-fw\" aria-hidden=\"true\"></i>\n    <span *ngIf=\"beingEdited\" (dblclick)=\"editCancel()\">\n        <input #hi1 type=\"text\" class=\"time form-control\"  placeholder=\"hh\" (keyup)=\"go($event,1)\" [value]=\"_i.start.toString()\">:<input #mi1  (keyup)=\"go($event,2)\" placeholder=\"mm\" type=\"text\" class=\"time form-control\" [value]=\"_i.start.toString('minutes')\"> to <input #hi2  (keyup)=\"go($event,3)\" placeholder=\"hh\" type=\"text\" class=\"time form-control\" [value]=\"_i.end.toString()\">:<input #mi2  (keyup)=\"go($event,4)\" placeholder=\"mm\" type=\"text\" class=\"time form-control\" [value]=\"_i.end.toString('minutes')\"><span [ngClass]=\"['nobreak',(!_i.nobreak)?'hasbreak':'']\" (click)=\"changeBreakType()\">{{_i.nobreak?'no break':'with break'}}</span><button #btn (keyup)=\"go($event,5)\" style=\"color:black\" (click)=\"add()\">{{btnName}}</button><span> {{_i.duration()}} </span></span>\n    <span *ngIf=\"!beingEdited\" (click)=\"editStart()\">{{_i}} | <span>{{_i.duration()}} <span *ngIf=\"_i.nobreak\" class=\"nobreak\">no break</span> by: {{_i.by}}</span><span color=\"red\" (click)=\"delete()\"><i class=\" fa fa-times fa-fw\" style='color: red' aria-hidden=\"true\"></i></span></span>\n</span>"

/***/ },

/***/ 1013:
/***/ function(module, exports) {

module.exports = "<div style=\"padding-bottom:10px;margin-bottom:5px;\">\n    <a (click)=\"dateBack()\">&lt;&lt;</a> <material-datepicker class=\"date-input\" [date]=\"tDate\" (onSelect)=\"onDateSelect($event)\"></material-datepicker> <a (click)=\"dateForward()\">&gt;&gt;</a>\n</div>\n<md-tab-group>\n    <md-tab *ngFor=\"let branch of branches\">\n        <template md-tab-label>{{branch.name}}</template>\n        <template md-tab-content>\n\n                <app-branch-timesheet [bid]=\"branch.bid\" [name]=\"branch.name\" [date]=\"tDate\"></app-branch-timesheet>\n\n        </template>\n    </md-tab>\n</md-tab-group>"

/***/ },

/***/ 1014:
/***/ function(module, exports) {

module.exports = "<app-items [api]=\"'user'\" [table]=\"'users'\" [column]=\"'id'\" [id]=\"'uid'\" [placeholder]=\"'Invite user by his/her email address'\"></app-items>"

/***/ },

/***/ 1273:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(634);


/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.auth_key = 'username';
        this._origin = '/';
        this.isLoggedInSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.isLoggedIn$ = this.isLoggedInSource.asObservable();
        this.isLoggedInSource.next(!!localStorage.getItem(this.auth_key));
        this.refresh().subscribe(function (res) { return console.log('refreshed login service: ', res); });
    }
    Object.defineProperty(LoginService.prototype, "originBeforeLogin", {
        get: function () {
            return this._origin;
        },
        set: function (val) {
            this._origin = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    LoginService.prototype.sendData = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //TODO: change server address
        return this.http
            .post('/login', JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.status; })
            .map(function (res) {
            if (res === 200) {
                localStorage.setItem(_this.auth_key, user.username);
                _this.isLoggedInSource.next(true);
                _this.refresher = setInterval(function () { return _this.refresh().subscribe(function (res) { return console.log('login refresh result ', res); }); }, 60000);
            }
            return res;
        });
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return this.http.get('/logout')
            .map(function (data) { return data.status; })
            .map(function (res) {
            if (res == 200) {
                localStorage.removeItem(_this.auth_key);
                _this.isLoggedInSource.next(false);
                clearInterval(_this.refresher);
            }
            return res;
        });
    };
    LoginService.prototype.refresh = function () {
        var _this = this;
        return this.http.get('/session')
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (!res.user) {
                localStorage.removeItem(_this.auth_key);
                _this.isLoggedInSource.next(false);
            }
            else {
                localStorage.setItem(_this.auth_key, res.user);
                _this.isLoggedInSource.next(true);
            }
            return res;
        });
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/login.service.js.map

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(loginService, router) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        //public isLoggedIn=false;
        this._isLoggedIn = false;
        loginService.isLoggedIn$.subscribe(function (val) { _this.isLoggedIn = val; console.log('guard is-logged-in:', val); }, function (err) { return console.log(err); });
    }
    Object.defineProperty(LoggedInGuard.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        set: function (val) {
            this._isLoggedIn = val;
        },
        enumerable: true,
        configurable: true
    });
    LoggedInGuard.prototype.canActivate = function (route, state) {
        var self = this;
        if (!this.isLoggedIn) {
            self.loginService.originBeforeLogin = state.url;
            this.router.navigate(['login']);
        }
        return this.isLoggedIn;
    };
    LoggedInGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoggedInGuard);
    return LoggedInGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/logged-in.guard.js.map

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimePair; });

var TimePair = (function () {
    function TimePair() {
        this.infinity = true;
        this.nextDay = false;
    }
    TimePair.prototype.toFormattedDate = function (date) {
        if (this.infinity)
            return ('infinity');
        return __WEBPACK_IMPORTED_MODULE_0_moment__(date).hours(this.hours).minutes(this.minutes).add(this.nextDay ? 1 : 0, 'd').format('YYYY-MM-DDTHH:mm:00');
    };
    TimePair.prototype.fromDate = function (date) {
        if (!__WEBPACK_IMPORTED_MODULE_0_moment__(date).isValid())
            this.infinity = true;
        else {
            this.hours = __WEBPACK_IMPORTED_MODULE_0_moment__(date).hours();
            this.minutes = __WEBPACK_IMPORTED_MODULE_0_moment__(date).minutes();
            this.infinity = false;
        }
    };
    TimePair.prototype.toString = function (el) {
        if (el === void 0) { el = 'hours'; }
        if (!this.infinity)
            return ('' + this[el]).length < 2 ? '0' + this[el] : '' + this[el];
        return '';
    };
    TimePair.prototype.now = function () {
        this.infinity = false;
        this.minutes = __WEBPACK_IMPORTED_MODULE_0_moment__().minutes();
        this.hours = __WEBPACK_IMPORTED_MODULE_0_moment__().hours();
    };
    return TimePair;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/time.model.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_logged_in_guard__ = __webpack_require__(259);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(mdIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(997),
            styles: [__webpack_require__(979)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__login_logged_in_guard__["a" /* LoggedInGuard */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdIconRegistry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdIconRegistry */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/app.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BranchesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BranchesComponent = (function () {
    function BranchesComponent() {
    }
    BranchesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branches',
            template: __webpack_require__(998),
            styles: [__webpack_require__(980)]
        }), 
        __metadata('design:paramtypes', [])
    ], BranchesComponent);
    return BranchesComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/branches.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return INF_DATE; });

var INF_DATE = __WEBPACK_IMPORTED_MODULE_0_moment__('1970-01-01').toDate();
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/constants.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Employee; });


var Employee = (function () {
    function Employee(input) {
        var today = new Date();
        var check = function (x) { return x !== undefined ? x : ''; };
        this.eid = input.eid !== undefined ? input.eid : NaN;
        this.firstname = check(input.firstname);
        this.surname = check(input.surname);
        this.email = check(input.email);
        this.rate = input.rate !== undefined ? input.rate.substr(1) : '';
        this.isManager = input.role !== undefined ? (input.role === 'Manager' ? true : false) : false;
        this.contractDate = input.contract_date !== undefined ? __WEBPACK_IMPORTED_MODULE_0_moment__(input.contract_date).toDate() : today;
        this.contractEnd = (input.contract_end && input.contract_end !== 'infinity') ? __WEBPACK_IMPORTED_MODULE_0_moment__(input.contract_end).toDate() : __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* INF_DATE */];
        this.username = (input.username) ? input.username : '';
    }
    Employee.prototype.isEqual = function (other) {
        return this.sameName(other) &&
            Math.round(parseFloat(this.rate) * 100) === Math.round(parseFloat(other.rate) * 100) &&
            this.contractDate === other.contractDate &&
            this.contractEnd === other.contractEnd &&
            this.password === other.password &&
            this.username === other.username &&
            this.email === other.email;
    };
    Employee.prototype.sameName = function (other) {
        return this.firstname.toLowerCase() === other.firstname.toLowerCase() &&
            this.surname.toLowerCase() === other.surname.toLowerCase();
    };
    Employee.prototype.toString = function () {
        return this.firstname + ' ' + this.surname;
    };
    Employee.prototype.toObject = function () {
        var obj;
        obj = {
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,
            rate: this.rate,
            role: this.isManager ? 'Manager' : 'Employee',
            contract_date: __WEBPACK_IMPORTED_MODULE_0_moment__["utc"](this.contractDate).format('YYYY-MM-DD'),
            contract_end: this.contractEnd !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* INF_DATE */] ? __WEBPACK_IMPORTED_MODULE_0_moment__(this.contractEnd).format('YYYY-MM-DD') : 'infinity',
        };
        if (this.isManager) {
            obj.username = this.username;
            obj.password = this.password;
        }
        return obj;
    };
    Employee.prototype.isExpired = function () {
        var d = new Date();
        return this.contractEnd !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* INF_DATE */] && this.contractEnd < d;
    };
    return Employee;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/employee.model.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__(435);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmployeesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = (function () {
    function EmployeesComponent(restService) {
        this.restService = restService;
        this.items = new Array();
        this.updateEnabled = {};
        this.deleteEnabled = {};
        this.updateCount = {};
        this.addEnabled = false;
        this.message = "";
        this.errMessage = "";
        this.tableName = 'employees';
        this.apiName = 'employee';
    }
    EmployeesComponent.prototype.remove = function (id) {
        var _this = this;
        console.log('remove', id);
        var updateState = this.updateEnabled[id];
        this.updateEnabled[id] = undefined;
        this.deleteEnabled[id] = undefined;
        this.restService.delete(this.apiName, id)
            .subscribe(function (res) {
            var r = res.json();
            var ind = _this.items.findIndex(function (el) { return el.eid === id; });
            if (r > 0) {
                _this.showMessage('deleted successfully ' + r + ' row');
                if (ind !== -1) {
                    _this.items.splice(ind, 1);
                    delete _this.updateEnabled[id];
                    delete _this.deleteEnabled[id];
                }
            }
            else {
                _this.showMessage('As employee record has worktimes it cannot be deleted. End of contract is set to today.');
                if (ind !== -1) {
                    _this.items[ind].contractEnd = new Date();
                }
            }
        }, function (err) {
            _this.showError(err.text());
            _this.updateEnabled[id] = updateState;
            _this.deleteEnabled[id] = true;
        });
    };
    EmployeesComponent.prototype.add = function (newItem) {
        var _this = this;
        this.addEnabled = false;
        this.restService.insert(newItem.isManager ? 'manager' : this.apiName, newItem.toObject())
            .subscribe(function (res) {
            _this.addEnabled = true;
            _this.showMessage('Row "' + newItem + '" added.');
            var eid = res.json();
            var newItemC = newItem.toObject();
            newItemC.rate = '$' + newItem.rate; //to be similar with postgress output
            newItem = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]({});
            var newItemO = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */](newItemC);
            newItemO.eid = eid;
            _this.updateEnabled[eid] = false;
            _this.deleteEnabled[eid] = true;
            var ind = _this.items.findIndex(function (el) { return el.toString() > newItemO.toString() || el.isExpired(); });
            _this.items.splice(ind, 0, newItemO);
        }, function (err) {
            _this.showError(err.text());
            _this.addEnabled = true;
        });
    };
    EmployeesComponent.prototype.update = function (updatedItem) {
        var _this = this;
        var eid = updatedItem.eid;
        var values = updatedItem.toObject();
        this.updateEnabled[eid] = undefined;
        this.deleteEnabled[eid] = false;
        this.restService.update(this.apiName, eid, updatedItem.toObject())
            .subscribe(function (res) {
            _this.showMessage('"' + updatedItem + '" updated.');
            _this.updateEnabled[eid] = false;
            _this.deleteEnabled[eid] = true;
            _this.updateCount[eid]++;
        }, function (err) {
            _this.updateEnabled[eid] = true;
            _this.deleteEnabled[eid] = true;
            _this.showError(err.text());
        });
    };
    EmployeesComponent.prototype.onUpdatable = function (id, value) {
        if (this.updateEnabled[id] !== undefined)
            this.updateEnabled[id] = value;
    };
    EmployeesComponent.prototype.showError = function (err) {
        //To create a change in message to invoke fade out effect
        if (this.errMessage === err)
            this.errMessage += ' ';
        else
            this.errMessage = err;
    };
    EmployeesComponent.prototype.showMessage = function (msg) {
        //To create a change in message to invoke fade out effect
        if (this.message === msg)
            this.message += ' ';
        else
            this.message = msg;
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var stream = this.restService.get(this.tableName);
        stream
            .subscribe(function (res) {
            for (var i in res) {
                var employee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */](res[i]);
                _this.items.push(employee);
                var eid = res[i].eid;
                _this.updateCount[eid] = 0;
                _this.updateEnabled[eid] = false;
                _this.deleteEnabled[eid] = true;
            }
        }, function (err) { return console.log('Failed to get items', err); });
    };
    EmployeesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(1000),
            styles: [__webpack_require__(982)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]) === 'function' && _a) || Object])
    ], EmployeesComponent);
    return EmployeesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/employees.component.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.navigate(['timesheet']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(1002),
            styles: [__webpack_require__(984)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/home.component.js.map

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.message = '';
        this.errMessage = '';
        this.user = {
            username: '',
            password: '',
            forget: false
        };
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendData(this.user).subscribe(function (data) {
            if (data === 200) {
                var url = _this.loginService.originBeforeLogin;
                console.log('routing to:', url);
                _this.router.navigate([url !== null ? url : '']);
            }
            else
                _this.message = 'A link to reset your password is sent to your email.';
        }, function (err) { return _this.errMessage = err.statusText; });
    };
    LoginComponent.prototype.makeForgetFalse = function () {
        this.user.forget = false;
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'burgista-ts-login',
            template: __webpack_require__(1005),
            styles: [__webpack_require__(987)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/login.component.js.map

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportComponent = (function () {
    function ReportComponent(restService) {
        this.restService = restService;
        this.startDate = __WEBPACK_IMPORTED_MODULE_2_moment__().subtract(1, 'months').toDate();
        this.endDate = __WEBPACK_IMPORTED_MODULE_2_moment__().toDate();
        this.title = '';
        this.paid = {};
        this.calc = {};
        this.disabled = false;
        this.allBranch = { bid: 'ALL', name: 'All' };
        this.filteredName = '';
        this.isFiltered = false;
        this.curBranch = this.allBranch.bid;
        this.branches = [this.allBranch];
        this.filteredEid = NaN;
        this.paidSum = 0;
        this.remainderSum = 0;
        this.message = '';
        this.errMessage = '';
        this.emailEnabled = {};
        this.emailSent = {};
    }
    ReportComponent.prototype.showError = function (err) {
        //To create a change in message to invoke fade out effect
        if (this.errMessage === err)
            this.errMessage += ' ';
        else
            this.errMessage = err;
    };
    ReportComponent.prototype.showMessage = function (msg) {
        //To create a change in message to invoke fade out effect
        if (this.message === msg)
            this.message += ' ';
        else
            this.message = msg;
    };
    ReportComponent.prototype.onEndSelect = function (d) {
        this.endDate = d;
        this.check();
    };
    ReportComponent.prototype.onStartSelect = function (d) {
        this.startDate = d;
        this.check();
    };
    ReportComponent.prototype.check = function () {
        var _this = this;
        if (this.startDate && this.endDate && this.startDate <= this.endDate) {
            this.title = this.branches.find(function (el) { return el.bid === _this.curBranch; }).name + ' - From ' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.startDate).format('DD MMM YY') + ' To ' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.endDate).format('DD MMM YY');
            this.restService.getWithParams('report/' + this.curBranch + '/ALL', { start: __WEBPACK_IMPORTED_MODULE_2_moment__(this.startDate).format('YYYY-MM-DD'), end: __WEBPACK_IMPORTED_MODULE_2_moment__(this.endDate).format('YYYY-MM-DD') })
                .subscribe(function (data) {
                _this.table = data;
                _this.hoursSum = 0;
                _this.minsSum = 0;
                _this.breaksSumHours = 0;
                _this.breaksSumMinutes = 0;
                _this.payingTimeSumHours = 0;
                _this.payingTimeSumMinutes = 0;
                _this.holdiaySumHours = 0;
                _this.holidaySumMinutes = 0;
                _this.sumSum = 0;
                var breaksSum = 0;
                for (var i in _this.table) {
                    _this.emailEnabled[_this.table[i].eid] = true;
                    if (_this.curBranch === 'ALL' && _this.emailSent[_this.table[i].eid] === undefined)
                        _this.emailSent[_this.table[i].eid] = false;
                    _this.paid[_this.table[i].eid] = 0;
                    _this.table[i].breaks_hours = Math.floor(_this.table[i].breaks / 60);
                    _this.table[i].breaks_mins = Math.round(_this.table[i].breaks % 60);
                    if (_this.table[i].mins < _this.table[i].breaks_mins) {
                        _this.table[i].paying_time_mins = 60 + _this.table[i].mins - _this.table[i].breaks_mins;
                        _this.table[i].paying_time_hours = _this.table[i].hours - _this.table[i].breaks_hours - 1;
                    }
                    else {
                        _this.table[i].paying_time_hours = _this.table[i].hours - _this.table[i].breaks_hours;
                        _this.table[i].paying_time_mins = _this.table[i].mins - _this.table[i].breaks_mins;
                    }
                    var holiday = .12 * (_this.table[i].hours * 60 + _this.table[i].mins);
                    _this.table[i].holiday_hours = Math.floor(holiday / 60);
                    _this.table[i].holiday_mins = Math.round(holiday % 60);
                    _this.calc[_this.table[i].eid] = Math.round(100 * parseFloat(_this.table[i].rate.substr(1)) * (_this.table[i].hours + (_this.table[i].mins - parseInt(_this.table[i].breaks)) / 60)) / 100;
                    _this.minsSum += _this.table[i].mins;
                    if (_this.minsSum >= 60) {
                        _this.hoursSum++;
                        _this.minsSum -= 60;
                    }
                    _this.hoursSum += _this.table[i].hours;
                    breaksSum += parseInt(_this.table[i].breaks);
                    _this.holdiaySumHours += _this.table[i].holiday_hours;
                    _this.holidaySumMinutes += _this.table[i].holiday_mins;
                    _this.payingTimeSumHours += _this.table[i].paying_time_hours;
                    _this.payingTimeSumMinutes += _this.table[i].paying_time_mins;
                    _this.sumSum += _this.calc[_this.table[i].eid];
                    ['mins', 'breaks_mins', 'paying_time_mins', 'holiday_mins'].forEach(function (t) { if (_this.table[i][t] < 10)
                        _this.table[i][t] = '0' + _this.table[i][t]; });
                }
                _this.breaksSumHours = Math.floor(breaksSum / 60);
                _this.breaksSumMinutes = Math.round(breaksSum % 60);
                if (_this.holidaySumMinutes >= 60) {
                    _this.holdiaySumHours += Math.floor(_this.holidaySumMinutes / 60);
                    _this.holidaySumMinutes = Math.round(_this.holidaySumMinutes % 60);
                }
                if (_this.payingTimeSumMinutes >= 60) {
                    _this.payingTimeSumHours += Math.floor(_this.payingTimeSumMinutes / 60);
                    _this.payingTimeSumMinutes = Math.round(_this.payingTimeSumMinutes % 60);
                }
                _this.recalcPaid();
                ['minsSum', 'breaksSumMinutes', 'holidaySumMinutes', 'payingTimeSumMinutes'].forEach(function (t) { if (_this[t] < 10)
                    _this[t] = '0' + _this[t]; });
            }, function (err) { return console.log(err); });
            if (this.isFiltered) {
                this.fTable = [];
                this.getFilteredTable();
            }
        }
    };
    ReportComponent.prototype.filter = function (eid, filteredName) {
        this.isFiltered = true;
        console.log('here');
        this.prepareFilter(filteredName, eid);
        this.getFilteredTable();
    };
    ReportComponent.prototype.prepareFilter = function (filteredName, eid) {
        this.filteredName = filteredName;
        this.filteredEid = eid;
        this.filteredHasEmail = !!this.table.find(function (row) { return row.eid === eid; }).email;
    };
    ReportComponent.prototype.emailReport = function (eid, filteredName) {
        var _this = this;
        var callback = function () {
            var data = _this.getFilteredData();
            var fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.startDate).format('YYYY-MM-DD');
            var toDate = __WEBPACK_IMPORTED_MODULE_2_moment__(_this.endDate).format('YYYY-MM-DD');
            _this.restService.update("report/" + fromDate + "/" + toDate, eid, data)
                .subscribe(function () {
                _this.showMessage("Timesheet is emailed to " + filteredName);
                _this.emailEnabled[eid] = true;
                _this.emailSent[eid] = true;
            }, function (err) {
                _this.showError(err);
                _this.emailEnabled[eid] = true;
                _this.emailSent[eid] = false;
            });
        };
        if (!this.isFiltered) {
            this.prepareFilter(filteredName, eid);
            this.emailEnabled[eid] = false;
            this.getFilteredTable(callback);
        }
        else
            callback();
    };
    ReportComponent.prototype.getFilteredTable = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.disabled = true;
        this.restService.getWithParams('report/' + this.curBranch + '/' + this.filteredEid, {
            start: __WEBPACK_IMPORTED_MODULE_2_moment__(this.startDate).format('YYYY-MM-DD'),
            end: __WEBPACK_IMPORTED_MODULE_2_moment__(this.endDate).format('YYYY-MM-DD')
        })
            .subscribe(function (data) {
            _this.disabled = false;
            _this.fTable = data;
            _this.fMinsSum = 0;
            _this.fHoursSum = 0;
            _this.fBreaktimeSumHours = 0;
            _this.fBreaktimeSumMinutes = 0;
            _this.wageSum = 0;
            var breaktimeSum = 0;
            _this.fPayingTimeSumHours = 0;
            _this.fPayingTimeSumMinutes = 0;
            for (var i in _this.fTable) {
                _this.fTable[i].wage = Math.round(100 * parseFloat(_this.fTable[i].rate.substr(1)) * (_this.fTable[i].hours + (_this.fTable[i].mins - parseInt(_this.fTable[i].breaktime)) / 60)) / 100;
                _this.fTable[i].start_time = _this.fTable[i].start_time.substr(0, 5);
                _this.fTable[i].end_time = _this.fTable[i].end_time.substr(0, 5);
                _this.fTable[i].rate = _this.fTable[i].rate.substr(1);
                _this.fMinsSum += _this.fTable[i].mins;
                if (_this.fMinsSum >= 60) {
                    _this.fHoursSum++;
                    _this.fMinsSum -= 60;
                }
                _this.fHoursSum += _this.fTable[i].hours;
                breaktimeSum += _this.fTable[i].breaktime;
                _this.wageSum += _this.fTable[i].wage;
                _this.fTable[i].paying_time_hours = _this.fTable[i].hours;
                if (_this.fTable[i].mins < _this.fTable[i].breaktime) {
                    _this.fTable[i].paying_time_mins = 60 + _this.fTable[i].mins - _this.fTable[i].breaktime;
                    _this.fTable[i].paying_time_hours--;
                }
                else {
                    _this.fTable[i].paying_time_mins = _this.fTable[i].mins - _this.fTable[i].breaktime;
                }
                _this.fPayingTimeSumHours += _this.fTable[i].paying_time_hours;
                _this.fPayingTimeSumMinutes += _this.fTable[i].paying_time_mins;
                ['mins', 'paying_time_mins'].forEach(function (t) { if (_this.fTable[i][t] < 10)
                    _this.fTable[i][t] = '0' + _this.fTable[i][t]; });
            }
            _this.fBreaktimeSumHours = Math.floor(breaktimeSum / 60);
            _this.fBreaktimeSumMinutes = Math.round(breaktimeSum % 60);
            if (_this.fPayingTimeSumMinutes >= 60) {
                _this.fPayingTimeSumHours += Math.floor(_this.fPayingTimeSumMinutes / 60);
                _this.fPayingTimeSumMinutes = Math.round(_this.fPayingTimeSumMinutes % 60);
            }
            ['fMinsSum', 'fBreaktimeSumMinutes', 'fPayingTimeSumMinutes'].forEach(function (t) { if (_this[t] < 10)
                _this[t] = '0' + _this[t]; });
            _this.wageSum = _this.wageSum.toFixed(2);
            if (typeof callback === 'function') {
                callback();
            }
        }, function (err) {
            _this.disabled = false;
            console.log(err);
        });
    };
    ReportComponent.prototype.unfilter = function () {
        this.isFiltered = false;
    };
    ReportComponent.prototype.recalcPaid = function () {
        var _this = this;
        this.paidSum = this.table.map(function (r) { return parseFloat(_this.paid[r.eid] ? _this.paid[r.eid] : 0); }).reduce(function (r1, r2) { return r1 + r2; }, 0).toFixed(2);
        this.remainderSum = (this.sumSum - this.paidSum).toFixed(2);
        if (typeof this.sumSum === 'number')
            this.sumSum = this.sumSum.toFixed(2);
    };
    ReportComponent.prototype.convertToCSV = function () {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = [];
        var paid = this.paid;
        var calc = this.calc;
        data = (this.isFiltered) ? this.getFilteredData() : this.getData();
        columnDelimiter = ',';
        lineDelimiter = '\n';
        keys = Object.keys(data[0]);
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0)
                    result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    ReportComponent.prototype.getData = function () {
        var _this = this;
        var data = [];
        this.table.forEach(function (currentVal, index) {
            data.push({
                "#": index + 1,
                "ID": currentVal.eid,
                "First Name": currentVal.firstname,
                "Surname": currentVal.surname,
                "Hourly Rate": '£' + currentVal.rate.substr(1),
                "Worked": currentVal.hours + ":" + currentVal.mins,
                "Breaks": currentVal.breaks_hours + ':' + currentVal.breaks_mins,
                "Paying Time": currentVal.paying_time_hours + ':' + currentVal.paying_time_mins,
                "Holiday Entitlement": currentVal.holiday_hours + ':' + currentVal.holiday_mins,
                "Wage Sum": '£' + _this.calc[currentVal.eid].toFixed(2),
                "Wage Paid": '£' + parseFloat(_this.paid[currentVal.eid]).toFixed(2),
                "Wage Remainder": '£' + (_this.calc[currentVal.eid] - _this.paid[currentVal.eid]).toFixed(2)
            });
        });
        data.push({
            "#": 'Sum',
            "ID": '',
            "First Name": '',
            "Surname": '',
            "Hourly Rate": '',
            "Worked": this.hoursSum + ":" + this.minsSum,
            "Breaks": this.breaksSumHours + ':' + this.breaksSumMinutes,
            "Paying Time": this.payingTimeSumHours + ':' + this.payingTimeSumMinutes,
            "Holiday Entitlement": this.holdiaySumHours + ':' + this.holidaySumMinutes,
            "Wage Sum": '£' + this.sumSum,
            "Wage Paid": '£' + this.paidSum,
            "Wage Remainder": '£' + this.remainderSum,
        });
        return data;
    };
    ReportComponent.prototype.getFilteredData = function () {
        var _this = this;
        var data = [];
        this.fTable.forEach(function (currentVal, index) {
            data.push({
                "#": index + 1,
                "Date": currentVal.sdate,
                "Branch": _this.curBranch === 'ALL' ? currentVal.branch : '',
                "Start Time": currentVal.start_time,
                "End Time": currentVal.end_time,
                "Rate": '£' + currentVal.rate,
                "Worked": currentVal.hours + ':' + currentVal.mins,
                "Break": currentVal.breaktime,
                "Paying Time": currentVal.paying_time_hours + ':' + currentVal.paying_time_mins,
                "Wage": '£' + currentVal.wage.toFixed(2),
            });
        });
        data.push({
            '#': 'Sum',
            'Date': '',
            'Branch': '',
            'Start Time': '',
            'End Time': '',
            'Rate': '',
            'Worked': this.fHoursSum + ':' + this.fMinsSum,
            'Break': this.fBreaktimeSumHours + ':' + this.fBreaktimeSumMinutes,
            'Paying Time': this.fPayingTimeSumHours + ':' + this.fPayingTimeSumMinutes,
            'Wage': '£' + this.wageSum,
        });
        return data;
    };
    ReportComponent.prototype.downloadCSV = function (args) {
        var filename;
        var csv = this.convertToCSV();
        if (csv == null)
            return;
        var blob = new Blob([csv], { type: 'text/csv' });
        filename = this.title + '.csv';
        if (this.isFiltered)
            filename = this.filteredName + ' - ' + filename;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(blob, filename);
    };
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get('branches')
            .subscribe(function (res) { _this.branches = [_this.allBranch].concat(res); }, function (err) { return console.log('Failed to get branches', err); });
        this.check();
    };
    ReportComponent.prototype.changeBranch = function (i) {
        this.curBranch = this.branches[i.index].bid;
        this.check();
    };
    ReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(1009),
            styles: [__webpack_require__(991)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]) === 'function' && _a) || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/report.component.js.map

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time_model__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Interval; });


/**
 * Created by Amin on 24/10/2016.
 */
var Interval = (function () {
    function Interval() {
        this._start = new __WEBPACK_IMPORTED_MODULE_0__time_model__["a" /* TimePair */]();
        this._end = new __WEBPACK_IMPORTED_MODULE_0__time_model__["a" /* TimePair */]();
        this.breakMinutes = 0;
        this._nobreak = false;
        this.by = '';
    }
    Object.defineProperty(Interval.prototype, "nextDay", {
        get: function () {
            return this._end.nextDay;
        },
        set: function (value) {
            this._end.nextDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interval.prototype, "nobreak", {
        get: function () {
            return this._nobreak;
        },
        set: function (nb) {
            this._nobreak = nb;
            this.setBreaktime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interval.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (s) {
            this._start = s;
            this._start.infinity = !(s.minutes && s.hours);
            if (!s.infinity && !this._end.infinity) {
                if (this._end.hours * 60 + this._end.minutes * 1 < s.hours * 60 + s.minutes * 1) {
                    this.nextDay = true;
                }
                else {
                    this.nextDay = false;
                }
            }
            this.setBreaktime();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interval.prototype, "end", {
        get: function () {
            return this._end;
        },
        set: function (e) {
            this._end = e;
            this._end.infinity = !(e.minutes && e.hours);
            if (!e.infinity && !this._start.infinity) {
                if (this._start.hours * 60 + this._start.minutes * 1 > e.hours * 60 + e.minutes * 1) {
                    this.nextDay = true;
                }
                else {
                    this.nextDay = false;
                }
            }
            this.setBreaktime();
        },
        enumerable: true,
        configurable: true
    });
    Interval.prototype.setBreaktime = function () {
        if (!this._start.infinity && !this._end.infinity && !this.nobreak) {
            var d = __WEBPACK_IMPORTED_MODULE_1_moment__(this.endDateTime).diff(__WEBPACK_IMPORTED_MODULE_1_moment__(this.startDateTime), 'hours', true);
            this.breakMinutes = (d > 7) ? 40 : (d > 3) ? 20 : 0;
        }
        else {
            this.breakMinutes = 0;
        }
    };
    Object.defineProperty(Interval.prototype, "startDateTime", {
        get: function () {
            return this._start.toFormattedDate(this.date);
        },
        set: function (d) {
            if (__WEBPACK_IMPORTED_MODULE_1_moment__(d).isValid()) {
                if (__WEBPACK_IMPORTED_MODULE_1_moment__(d).date() !== __WEBPACK_IMPORTED_MODULE_1_moment__(this.date).date())
                    throw ('Error beginning of interval: ' + d + ' does not match context date: ' + this.date);
            }
            this._start.fromDate(__WEBPACK_IMPORTED_MODULE_1_moment__(d).toDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Interval.prototype, "endDateTime", {
        get: function () {
            return this._end.toFormattedDate(this.date);
        },
        set: function (d) {
            if (__WEBPACK_IMPORTED_MODULE_1_moment__(d).isValid()) {
                var diff = __WEBPACK_IMPORTED_MODULE_1_moment__(__WEBPACK_IMPORTED_MODULE_1_moment__(d).format('YYYY-MM-DD')).diff(__WEBPACK_IMPORTED_MODULE_1_moment__(__WEBPACK_IMPORTED_MODULE_1_moment__(this.date).format('YYYY-MM-DD')), 'days');
                if (diff > 1 || diff < 0)
                    throw ('Error end of interval: ' + d + ' does not match context date: ' + this.date);
            }
            this._end.fromDate(__WEBPACK_IMPORTED_MODULE_1_moment__(d).toDate());
            if (diff === 1)
                this._end.nextDay = true;
        },
        enumerable: true,
        configurable: true
    });
    Interval.prototype.toString = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(this.startDateTime).format('HH:mm') + ' to ' + __WEBPACK_IMPORTED_MODULE_1_moment__(this.endDateTime).format('HH:mm');
    };
    Interval.prototype.duration = function () {
        if (this.endDateTime && this.startDateTime) {
            var d = __WEBPACK_IMPORTED_MODULE_1_moment__(this.endDateTime, 'YYYY-MM-DDTHH:mm:ss').diff(__WEBPACK_IMPORTED_MODULE_1_moment__(this.startDateTime, 'YYYY-MM-DDTHH:mm:ss'), 'hours', true) - this.breakMinutes / 60;
            if (!isNaN(d))
                return Math.floor(d) + 'hrs ' + Math.round((d - Math.floor(d)) * 60) + ' mins' + ((this.breakMinutes) ? ' (' + this.breakMinutes + 'mins break)' : '');
            return '';
        }
        else
            return '';
    };
    Interval.prototype.toObject = function () {
        var minuteDiff = __WEBPACK_IMPORTED_MODULE_1_moment__(this.endDateTime).diff(__WEBPACK_IMPORTED_MODULE_1_moment__(this.startDateTime), 'minutes');
        if (minuteDiff < 0)
            throw ('invalid interval: start is ' + (-minuteDiff) + ' minutes after end');
        var obj = {
            start: this.startDateTime,
            end: this.endDateTime,
            nobreak: this.nobreak,
        };
        return obj;
    };
    Interval.prototype.clone = function () {
        var c = new Interval();
        c.date = this.date;
        c._nobreak = this._nobreak;
        c.breakMinutes = this.breakMinutes;
        c.by = this.by;
        var self = this;
        ['_start', '_end'].forEach(function (el) {
            ['hours', 'minutes', 'nextDay', 'infinity'].forEach(function (prop) {
                c[el][prop] = self[el][prop];
            });
        });
        return c;
    };
    return Interval;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/interval.model.js.map

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TimesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimesComponent = (function () {
    function TimesComponent(restService) {
        this.restService = restService;
        this.curBranch = '';
        this.tDate = new Date();
        var today = new Date;
        this.tDate = today;
    }
    TimesComponent.prototype.onDateSelect = function (d) {
        this.tDate = d;
    };
    TimesComponent.prototype.dateBack = function () {
        this.tDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.tDate).subtract(1, 'days').toDate();
    };
    TimesComponent.prototype.dateForward = function () {
        this.tDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.tDate).add(1, 'days').toDate();
    };
    TimesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get('branches')
            .subscribe(function (res) { _this.branches = res; _this.curBranch = res[0]; }, function (err) { return console.log('Failed to get branches', err); });
    };
    TimesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-times',
            template: __webpack_require__(1013),
            styles: [__webpack_require__(995)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]) === 'function' && _a) || Object])
    ], TimesComponent);
    return TimesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/times.component.js.map

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(1014),
            styles: [__webpack_require__(996)]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersComponent);
    return UsersComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/users.component.js.map

/***/ },

/***/ 633:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 633;


/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(793);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/main.js.map

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Calendar; });
/*!
 * calendar: a port of the calendar module from Python
 * Copyright(c) 2011 Luciano Ramalho <luciano@ramalho.org>
 * MIT Licensed
 */
// const CalendarException = message => {
//    this.message = message;
//    this.toString = function() {
//        return this.message
//    };
// }
var Calendar = (function () {
    function Calendar(firstWeekDay) {
        if (firstWeekDay === void 0) { firstWeekDay = 0; }
        this.firstWeekDay = firstWeekDay; // 0 = Sunday
    }
    Calendar.prototype.weekStartDate = function (date) {
        var startDate = new Date(date.getTime());
        while (startDate.getDay() !== this.firstWeekDay) {
            startDate.setDate(startDate.getDate() - 1);
        }
        return startDate;
    };
    Calendar.prototype.monthDates = function (year, month, dayFormatter, weekFormatter) {
        if (dayFormatter === void 0) { dayFormatter = null; }
        if (weekFormatter === void 0) { weekFormatter = null; }
        if ((typeof year !== "number") || (year < 1970)) {
            throw ('year must be a number >= 1970');
        }
        ;
        if ((typeof month !== "number") || (month < 0) || (month > 11)) {
            throw ('month must be a number (Jan is 0)');
        }
        ;
        var weeks = [], week = [], i = 0, date = this.weekStartDate(new Date(year, month, 1));
        do {
            for (i = 0; i < 7; i++) {
                week.push(dayFormatter ? dayFormatter(date) : date);
                date = new Date(date.getTime());
                date.setDate(date.getDate() + 1);
            }
            weeks.push(weekFormatter ? weekFormatter(week) : week);
            week = [];
        } while ((date.getMonth() <= month) && (date.getFullYear() === year));
        return weeks;
    };
    Calendar.prototype.monthDays = function (year, month) {
        var getDayOrZero = function getDayOrZero(date) {
            return date.getMonth() === month ? date : 0;
        };
        return this.monthDates(year, month, getDayOrZero);
    };
    Calendar.prototype.monthText = function (year, month) {
        if (typeof year === "undefined") {
            var now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
        }
        ;
        var getDayOrBlank = function getDayOrBlank(date) {
            var s = date.getMonth() === month ? date.getDate().toString() : "  ";
            while (s.length < 2)
                s = " " + s;
            return s;
        };
        var weeks = this.monthDates(year, month, getDayOrBlank, function (week) { return week.join(" "); });
        return weeks.join("\n");
    };
    return Calendar;
}());
var months = "JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" ");
for (var i = 0; i < months.length; i++) {
    Calendar[months[i]] = i;
}
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/calendar.js.map

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(434);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatepickerComponent = (function () {
    function DatepickerComponent() {
        this.disabled = false;
        // events
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // view logic
        this.showCalendar = false;
        // colors
        this.colors = {
            'black': '#333333',
            'blue': '#1285bf',
            'lightGrey': '#f1f1f1',
            'white': '#ffffff'
        };
        this.accentColor = this.colors['blue'];
        this.altInputStyle = false;
        // time
        this.calendar = new __WEBPACK_IMPORTED_MODULE_1__calendar__["a" /* Calendar */]();
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', ' December'
        ];
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.setDate();
    };
    DatepickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes['date']) {
            this.setDate();
        }
    };
    // State Management
    // ------------------------------------------------------------------------------------
    DatepickerComponent.prototype.setDate = function () {
        if (this.date) {
            this.setInputText(this.date);
        }
        else {
            this.date = new Date();
        }
        this.currentMonthNumber = this.date.getMonth();
        this.currentMonth = this.months[this.currentMonthNumber];
        this.currentYear = this.date.getFullYear();
        var calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
        this.calendarDays = [].concat.apply([], calendarArray);
    };
    DatepickerComponent.prototype.setCurrentMonth = function (monthNumber) {
        this.currentMonth = this.months[monthNumber];
        var calendarArray = this.calendar.monthDays(this.currentYear, this.currentMonthNumber);
        this.calendarDays = [].concat.apply([], calendarArray);
    };
    DatepickerComponent.prototype.setHoveredDay = function (day) {
        this.hoveredDay = day;
    };
    DatepickerComponent.prototype.removeHoveredDay = function (day) {
        this.hoveredDay = null;
    };
    DatepickerComponent.prototype.setInputText = function (date) {
        if (date.getFullYear() === 1970)
            this.inputText = '';
        else {
            var month = (date.getMonth() + 1).toString();
            if (month.length < 2) {
                month = "0" + month;
            }
            var day = (date.getDate()).toString();
            if (day.length < 2) {
                day = "0" + day;
            }
            this.inputText = date.getFullYear() + "/" + month + "/" + day;
        }
    };
    // Click Handlers
    // ------------------------------------------------------------------------------------
    DatepickerComponent.prototype.onArrowLeftClick = function () {
        var currentMonth = this.currentMonthNumber;
        var newYear = this.currentYear;
        var newMonth;
        if (currentMonth === 0) {
            newYear = this.currentYear - 1;
            newMonth = 11;
        }
        else {
            newMonth = currentMonth - 1;
        }
        var newDate = new Date(newYear, newMonth);
        if (!this.rangeStart || newDate.getTime() >= this.rangeStart.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('left');
        }
    };
    DatepickerComponent.prototype.onArrowRightClick = function () {
        var currentMonth = this.currentMonthNumber;
        var newYear = this.currentYear;
        var newMonth;
        if (currentMonth === 11) {
            newYear = this.currentYear + 1;
            newMonth = 0;
        }
        else {
            newMonth = currentMonth + 1;
        }
        var newDate = new Date(newYear, newMonth);
        if (!this.rangeEnd || newDate.getTime() <= this.rangeEnd.getTime()) {
            this.currentYear = newYear;
            this.currentMonthNumber = newMonth;
            this.setCurrentMonth(newMonth);
            this.triggerAnimation('right');
        }
    };
    DatepickerComponent.prototype.onCancel = function () {
        this.showCalendar = false;
    };
    DatepickerComponent.prototype.onLeaveEmpty = function () {
        this.onSelect.emit(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* INF_DATE */]);
        this.showCalendar = false;
    };
    DatepickerComponent.prototype.onInputClick = function () {
        if (this.currentYear === 1970) {
            this.date = new Date();
            this.setDate();
        }
        if (!this.disabled)
            this.showCalendar = !this.showCalendar;
    };
    DatepickerComponent.prototype.onSelectDay = function (day) {
        this.date = day;
        this.setInputText(day);
        if (!this.disabled)
            this.showCalendar = !this.showCalendar;
        this.onSelect.emit(day);
    };
    // Helpers
    // ------------------------------------------------------------------------------------
    DatepickerComponent.prototype.getDayBackgroundColor = function (day) {
        var color = this.colors['white'];
        if (this.isChosenDay(day)) {
            color = this.accentColor;
        }
        else if (this.isCurrentDay(day)) {
            color = this.colors['lightGrey'];
        }
        return color;
    };
    DatepickerComponent.prototype.getDayFontColor = function (day) {
        var color = this.colors['black'];
        if (this.isChosenDay(day)) {
            color = this.colors['white'];
        }
        return color;
    };
    DatepickerComponent.prototype.isChosenDay = function (day) {
        if (day) {
            return this.date ? day.toDateString() == this.date.toDateString() : false;
        }
        else {
            return false;
        }
    };
    DatepickerComponent.prototype.isCurrentDay = function (day) {
        if (day) {
            return day.toDateString() == new Date().toDateString();
        }
        else {
            return false;
        }
    };
    DatepickerComponent.prototype.isHoveredDay = function (day) {
        return this.hoveredDay ? this.hoveredDay == day && !this.isChosenDay(day) : false;
    };
    DatepickerComponent.prototype.triggerAnimation = function (direction) {
        var _this = this;
        this.animate = direction;
        setTimeout(function () { return _this.animate = 'reset'; }, 185);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DatepickerComponent.prototype, "accentColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "disabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], DatepickerComponent.prototype, "altInputStyle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "date", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DatepickerComponent.prototype, "fontFamily", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "rangeStart", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "rangeEnd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DatepickerComponent.prototype, "inputText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], DatepickerComponent.prototype, "showCalendar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "onSelect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "calendarDays", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DatepickerComponent.prototype, "currentMonth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "dayNames", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "hoveredDay", void 0);
    DatepickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'material-datepicker',
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('calendarAnimation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => left', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(180, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(105%)', offset: 0.5 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-130%)', offset: 0.51 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => right', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(180, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-105%)', offset: 0.5 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(130%)', offset: 0.51 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1 })
                        ]))
                    ])
                ])
            ],
            styles: [
                ".datepicker {\n        position: relative;\n        display: inline-block;\n        color: #2b2b2b;\n        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', 'Calibri', 'Roboto';\n      }\n\n      .datepicker__calendar {\n        position: absolute;\n        overflow: hidden;\n        z-index: 1000;\n        top: 1.9em;\n        left: 0;\n        height: 24.25em;\n        width: 20.5em;\n        font-size: 14px;\n        background-color: #ffffff;\n        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n        cursor: default;\n        -webkit-touch-callout: none;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n      }\n\n      .datepicker__calendar__cancel {\n        position: absolute;\n        bottom: 1em;\n        left: 1.8em;\n        color: #d8d8d8;\n        cursor: pointer;\n        -webkit-transition: 0.37s;\n        transition: 0.37s;\n      }\n      \n        .datepicker__leave {\n        position: absolute;\n        bottom: 1em;\n        left: 7em;\n        color: #d8d8d8;\n        cursor: pointer;\n        -webkit-transition: 0.37s;\n        transition: 0.37s;\n      }\n       \n      .datepicker__calendar__cancel:hover {\n        color: #b1b1b1;\n      }\n        .datepicker__leave:hover {\n        color: #b1b1b1;\n      }\n      .datepicker__calendar__content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-flow: wrap;\n            flex-flow: wrap;\n        -webkit-box-pack: center;\n           -ms-flex-pack: center;\n         justify-content: center;\n        margin-top: 0.2em;\n      }\n\n      .datepicker__calendar__label {\n        display: inline-block;\n        width: 2.2em;\n        height: 2.2em;\n        margin: 0.2em;\n        line-height: 2.2em;\n        text-align: center;\n        color: #d8d8d8;\n      }\n\n      .datepicker__calendar__month {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-flow: wrap;\n            flex-flow: wrap;\n        -webkit-box-pack: center;\n           -ms-flex-pack: center;\n         justify-content: center;\n      }\n\n      .datepicker__calendar__month__day {\n        display: inline-block;\n        width: 2.2em;\n        height: 2.2em;\n        margin: 0.2em;\n        border-radius: 2.2em;\n        line-height: 2.2em;\n        text-align: center;\n        -webkit-transition: 0.37s;\n        transition: 0.37s;\n      }\n\n      .datepicker__calendar__nav {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n           -ms-flex-pack: center;\n         justify-content: center;\n        -webkit-box-align: center;\n           -ms-flex-align: center;\n              align-items: center;\n        height: 3em;\n        background-color: #fff;\n        border-bottom: 1px solid #e8e8e8;\n      }\n\n      .datepicker__calendar__nav__arrow {\n        width: 0.8em;\n        height: 0.8em;\n        cursor: pointer;\n        -webkit-transition: 0.37s;\n        transition: 0.37s;\n      }\n\n      .datepicker__calendar__nav__arrow:hover {\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05);\n      }\n\n      .datepicker__calendar__nav__chevron {\n        fill: #bbbbbb;\n        -webkit-transition: 0.37s;\n        transition: 0.37s;\n      }\n\n      .datepicker__calendar__nav__chevron:hover {\n        fill: #2b2b2b;\n      }\n\n      .datepicker__calendar__nav__header {\n        width: 11em;\n        margin: 0 1em;\n        text-align: center;\n      }\n\n      .datepicker__input {\n        outline: none;\n        border-radius: 0.1rem;\n        padding: .2em .6em;\n        font-size: 14px;\n        width: 90px;\n      }\n    "
            ],
            template: "\n    <div\n      class=\"datepicker\"\n    >\n      <input\n        class=\"datepicker__input\"\n        [ngStyle]=\"{'color': altInputStyle ? colors['white'] : colors['black'],\n                    'background-color': altInputStyle ? accentColor : colors['white'],\n                    'border': altInputStyle ? '' : '1px solid #dadada'}\"\n        (click)=\"onInputClick()\"\n        [(ngModel)]=\"inputText\"\n        readonly=\"true\"\n      >\n      <div\n        class=\"datepicker__calendar\"\n        *ngIf=\"showCalendar&&!disabled\"\n      >\n        <div class=\"datepicker__calendar__nav\">\n          <div\n            class=\"datepicker__calendar__nav__arrow\"\n            (click)=\"onArrowLeftClick()\"\n          >\n          <svg class=\"datepicker__calendar__nav__chevron\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\">\n            <g>\n                <path d=\"M39.7,7.1c0.5,0.5,0.5,1.2,0,1.7L29,19.6c-0.5,0.5-1.2,1.2-1.7,1.7L16.5,32.1c-0.5,0.5-1.2,0.5-1.7,0l-2.3-2.3\n                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-0.5-1.2,0-1.7l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7L31.7,0.8c0.5-0.5,1.2-0.5,1.7,0\n                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L39.7,7.1z\"/>\n            </g>\n            <g>\n                <path d=\"M33.4,49c-0.5,0.5-1.2,0.5-1.7,0L20.9,38.2c-0.5-0.5-1.2-1.2-1.7-1.7L8.4,25.7c-0.5-0.5-0.5-1.2,0-1.7l2.3-2.3\n                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,1.2-0.5,1.7,0l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,0.5,1.2,0,1.7\n                    L37.4,45c-0.5,0.5-1.2,1.2-1.7,1.7L33.4,49z\"/>\n            </g>\n          </svg>\n          </div>\n          <div class=\"datepicker__calendar__nav__header\">\n            {{ currentMonth }} {{ currentYear }}\n          </div>\n          <div\n            class=\"datepicker__calendar__nav__arrow\"\n            (click)=\"onArrowRightClick()\"\n          >\n            <svg class=\"datepicker__calendar__nav__chevron\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\">\n              <g>\n                <path d=\"M8.4,7.1c-0.5,0.5-0.5,1.2,0,1.7l10.8,10.8c0.5,0.5,1.2,1.2,1.7,1.7l10.8,10.8c0.5,0.5,1.2,0.5,1.7,0l2.3-2.3\n                    c0.5-0.5,1.2-1.2,1.7-1.7l2.3-2.3c0.5-0.5,0.5-1.2,0-1.7L29,13.2c-0.5-0.5-1.2-1.2-1.7-1.7L16.5,0.8c-0.5-0.5-1.2-0.5-1.7,0\n                    l-2.3,2.3c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,7.1z\"/>\n              </g>\n              <g>\n                <path d=\"M14.8,49c0.5,0.5,1.2,0.5,1.7,0l10.8-10.8c0.5-0.5,1.2-1.2,1.7-1.7l10.8-10.8c0.5-0.5,0.5-1.2,0-1.7l-2.3-2.3\n                    c-0.5-0.5-1.2-1.2-1.7-1.7l-2.3-2.3c-0.5-0.5-1.2-0.5-1.7,0L20.9,28.5c-0.5,0.5-1.2,1.2-1.7,1.7L8.4,40.9c-0.5,0.5-0.5,1.2,0,1.7\n                    l2.3,2.3c0.5,0.5,1.2,1.2,1.7,1.7L14.8,49z\"/>\n              </g>\n            </svg>\n          </div>\n        </div>\n        <div\n          class=\"datepicker__calendar__content\"\n        >\n          <div\n            class=\"datepicker__calendar__label\"\n            *ngFor=\"let day of dayNames\"\n          >\n            {{ day }}\n          </div>\n          <div\n            [@calendarAnimation]=\"animate\"\n            class=\"datepicker__calendar__month\"\n          >\n            <div\n              *ngFor=\"let day of calendarDays\"\n              class=\"datepicker__calendar__month__day\"\n              [ngStyle]=\"{'cursor': day == 0 ? 'initial' : 'pointer',\n                          'background-color': getDayBackgroundColor(day),\n                          'color': isHoveredDay(day) ? accentColor : getDayFontColor(day)\n                          }\"\n              (click)=\"onSelectDay(day)\"\n              (mouseenter)=\"hoveredDay = day\"\n              (mouseleave)=\"hoveredDay = null\"\n            >\n              <span *ngIf=\"day != 0\">\n                {{ day.getDate() }}\n              </span>\n            </div>\n          </div>\n          <div\n            class=\"datepicker__calendar__cancel\"\n            (click)=\"onCancel()\"\n          >\n            Cancel\n          </div>\n          <div class=\"datepicker__leave\"\n            (click)=\"onLeaveEmpty()\"\n          >\n            Leave Empty\n          </div>\n        </div>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/datepicker.component.js.map

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leftbar_leftbar_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rightbar_rightbar_component__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_main_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__branches_branches_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_logged_in_guard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rest_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_users_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__message_fade_out_message_fade_out_component__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__items_items_component__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__employees_employees_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__times_times_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__report_report_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__employees_employee_form_component__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__times_branch_timesheet_component__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__times_interval_input_component__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngui_auto_complete__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_modal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular2_modal_plugins_bootstrap__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular2_material_datepicker_datepicker_component__ = __webpack_require__(788);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_30__angular2_material_datepicker_datepicker_component__["a" /* DatepickerComponent */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_7__leftbar_leftbar_component__["a" /* LeftbarComponent */], __WEBPACK_IMPORTED_MODULE_8__rightbar_rightbar_component__["a" /* RightbarComponent */], __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_10__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__branches_branches_component__["a" /* BranchesComponent */], __WEBPACK_IMPORTED_MODULE_17__users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_18__message_fade_out_message_fade_out_component__["a" /* MessageFadeOutComponent */], __WEBPACK_IMPORTED_MODULE_19__items_items_component__["a" /* ItemsComponent */], __WEBPACK_IMPORTED_MODULE_20__employees_employees_component__["a" /* EmployeesComponent */], __WEBPACK_IMPORTED_MODULE_21__times_times_component__["a" /* TimesComponent */], __WEBPACK_IMPORTED_MODULE_22__report_report_component__["a" /* ReportComponent */], __WEBPACK_IMPORTED_MODULE_23__employees_employee_form_component__["a" /* EmployeeFormComponent */], __WEBPACK_IMPORTED_MODULE_23__employees_employee_form_component__["a" /* EmployeeFormComponent */], __WEBPACK_IMPORTED_MODULE_30__angular2_material_datepicker_datepicker_component__["a" /* DatepickerComponent */], __WEBPACK_IMPORTED_MODULE_25__times_branch_timesheet_component__["a" /* BranchTimesheetComponent */], __WEBPACK_IMPORTED_MODULE_26__times_interval_input_component__["a" /* IntervalInputComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* AppRoutes */],
                // Forms
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_27__ngui_auto_complete__["NguiAutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_28_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_16__rest_service__["a" /* RestService */], __WEBPACK_IMPORTED_MODULE_15__login_logged_in_guard__["a" /* LoggedInGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/app.module.js.map

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_branches_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_component__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__times_times_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report_component__ = __webpack_require__(439);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutes; });









var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'branches', component: __WEBPACK_IMPORTED_MODULE_3__branches_branches_component__["a" /* BranchesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_5__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_6__employees_employees_component__["a" /* EmployeesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'timesheet', component: __WEBPACK_IMPORTED_MODULE_7__times_times_component__["a" /* TimesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__["a" /* LoggedInGuard */]] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_8__report_report_component__["a" /* ReportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__login_logged_in_guard__["a" /* LoggedInGuard */]] },
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/app.routes.js.map

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_model__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmployeeFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeFormComponent = (function () {
    function EmployeeFormComponent() {
        this.value = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]({});
        this.today = new Date();
        this.subtitle = "";
        this.nameLength = 40;
        this.copy = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]({});
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.updatable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(EmployeeFormComponent.prototype, "updateCount", {
        get: function () { return this._updateCount; },
        set: function (count) {
            Object.assign(this.copy, this.value);
            this._updateCount = count;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeFormComponent.prototype.action = function () {
        if (this.isNew) {
            this.add.emit(this.value);
            this.value = new __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]({});
        }
        else
            this.update.emit(this.value);
    };
    EmployeeFormComponent.prototype.remove = function () {
        this.delete.emit(this.value.eid);
    };
    EmployeeFormComponent.prototype.ngOnInit = function () {
        this.buttonType = this.isNew ? 'fa-plus' : 'fa-check';
        this.subtitle = this.isExpired ? 'Expired Contract' : 'Started ' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.value.contractDate).fromNow();
        Object.assign(this.copy, this.value);
        this.calcSubtitle();
    };
    EmployeeFormComponent.prototype.onChange = function () {
        if (this.isNew)
            this.addable.emit(this.value.firstname.length > 0 && parseFloat(this.value.rate) > 0);
        else
            this.updatable.emit(!this.copy.isEqual(this.value));
        this.calcSubtitle();
    };
    EmployeeFormComponent.prototype.calcSubtitle = function () {
        this.subtitle = this.value.eid ? this.isExpired ? 'Expired Contract' : 'Started ' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.value.contractDate).fromNow() : '';
        this.subtitle += this.value.eid ? " - EID: " + this.value.eid : "Not in database yet";
    };
    EmployeeFormComponent.prototype.onStartDateSelect = function (date) {
        this.value.contractDate = date;
        this.onChange();
    };
    EmployeeFormComponent.prototype.onEndDateSelect = function (date) {
        this.value.contractEnd = date;
        this.onChange();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__employee_model__["a" /* Employee */]) === 'function' && _a) || Object)
    ], EmployeeFormComponent.prototype, "value", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], EmployeeFormComponent.prototype, "updateEnabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], EmployeeFormComponent.prototype, "deleteEnabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EmployeeFormComponent.prototype, "isNew", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EmployeeFormComponent.prototype, "isExpired", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], EmployeeFormComponent.prototype, "updateCount", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], EmployeeFormComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], EmployeeFormComponent.prototype, "update", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], EmployeeFormComponent.prototype, "delete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], EmployeeFormComponent.prototype, "updatable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], EmployeeFormComponent.prototype, "addable", void 0);
    EmployeeFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-form',
            template: __webpack_require__(999),
            styles: [__webpack_require__(981)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/employee-form.component.js.map

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(983)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/footer.component.js.map

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(789);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/index.js.map

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemsComponent = (function () {
    function ItemsComponent(restService) {
        this.restService = restService;
        this.newItem = "";
        this.items = [];
        this.message = "";
        this.errMessage = "";
        this.beingEdited = {};
        this.copy = {};
        this.active = {};
        this.pending = {};
        this.resetLink = {};
        this.fullname = {};
        this.enableButton();
    }
    ItemsComponent.prototype.enableButton = function () {
        this.btnClass = '';
        this.btnLabel = 'Add';
        this.btnEnabled = true;
    };
    ItemsComponent.prototype.disableButton = function () {
        this.btnClass = 'pressed';
        this.btnLabel = 'Adding...';
        this.btnEnabled = false;
    };
    ItemsComponent.prototype.resetPwd = function (id) {
        var _this = this;
        if (!this.active[id] && !this.pending[id]) {
            var item = this.items.find(function (el) { return el[_this.idColumn] === id; });
            var text = item[this.valueColumn];
            var email = text;
            var user = this.fullname[id];
            this.restService.insert('reset/' + id, { email: email, user: user })
                .subscribe(function (res) {
                if (parseInt(res.json())) {
                    _this.showMessage('Sent a new invitation to this user.');
                    _this.pending[id] = true;
                    _this.active[id] = false;
                }
                else {
                    _this.resetLink[id] = res.json();
                }
            }, function (err) {
                _this.showError('Could not sent a new invitation to this user: ' + err.text());
            });
        }
    };
    ItemsComponent.prototype.remove = function (id) {
        var _this = this;
        console.log('remove', id);
        this.restService.delete(this.apiName, id)
            .subscribe(function (res) {
            var ind = _this.items.findIndex(function (el) { return el[_this.idColumn] === id; });
            if (res.json() > 0) {
                _this.showMessage('deleted successfully ' + res.json() + ' row(s)');
                _this.items.splice(ind, 1);
                delete _this.beingEdited[id];
                delete _this.copy[id];
                delete _this.active[id];
                delete _this.pending[id];
            }
            else if (res.json() === -1) {
                _this.showMessage('There are references to this user in worktime records as modifier - so it cannot be deleted but the account is deactivated and the user will not be able to login anymore.');
                _this.active[id] = false;
                _this.pending[id] = false;
            }
        }, function (err) { return _this.showError(err.text()); });
    };
    ItemsComponent.prototype.add = function () {
        var _this = this;
        var ind = this.items.findIndex(function (el) {
            return _this.newItem.toLowerCase() === el[_this.valueColumn].toLowerCase();
        });
        if (ind !== -1) {
            this.showError('"' + this.newItem + '" already exists.');
        }
        else {
            this.disableButton();
            var newRow = {};
            newRow[this.valueColumn] = this.newItem;
            this.restService.insert(this.apiName, newRow)
                .subscribe(function (res) {
                _this.enableButton();
                var newRow = {};
                var id = res.json();
                switch (_this.apiName) {
                    case 'user':
                        _this.showMessage('An email has been sent to "' + _this.newItem + '" asking them to set a password.');
                        _this.active[id] = false;
                        _this.pending[id] = true;
                        break;
                    case 'branch':
                        _this.showMessage('Congratulations! "' + _this.newItem + '" is added to the branches.');
                        _this.active[id] = true;
                        break;
                    default:
                        _this.showMessage('Row "' + _this.newItem + '" added.');
                }
                ;
                newRow[_this.idColumn] = id;
                newRow[_this.valueColumn] = _this.newItem;
                _this.beingEdited[id] = false;
                _this.copy[id] = _this.newItem;
                _this.items.push(newRow);
            }, function (err) {
                _this.enableButton();
                _this.showError(err.text());
            });
        }
    };
    ItemsComponent.prototype.update = function (id, keyCode) {
        var _this = this;
        if (keyCode === 13) {
            var values = {};
            values = this.items.find(function (el) { return el[_this.idColumn] === id; });
            this.restService.update(this.apiName, id, values)
                .subscribe(function (res) {
                _this.beingEdited[id] = false;
                _this.copy[id] = values[_this.valueColumn];
                if (res && res.json() && !parseInt(res.json())) {
                    _this.resetLink[id] = res.json();
                }
                else if (res) {
                    _this.pending[id] = true;
                    _this.active[id] = false;
                }
            }, function (err) {
                _this.showError('Could not update: ' + err.text());
                _this.beingEdited[id] = false;
                _this.items.find(function (el) { return el[_this.idColumn] === id; })[_this.valueColumn] = _this.copy[id];
            });
        }
    };
    ItemsComponent.prototype.letUpdate = function (id) {
        this.beingEdited[id] = true;
    };
    ItemsComponent.prototype.showError = function (err) {
        //To create a change in message to invoke fade out effect
        if (this.errMessage === err)
            this.errMessage += ' ';
        else
            this.errMessage = err;
    };
    ItemsComponent.prototype.showMessage = function (msg) {
        //To create a change in message to invoke fade out effect
        if (this.message === msg)
            this.message += ' ';
        else
            this.message = msg;
    };
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get(this.tableName)
            .subscribe(function (res) {
            _this.items = res;
            res.forEach(function (item) {
                var id = item[_this.idColumn];
                if (item.firstname) {
                    _this.fullname[id] = item.firstname + (item.surname ? ' ' + item.surname : '');
                }
                _this.beingEdited[id] = false;
                _this.copy[id] = item[_this.valueColumn];
                _this.active[id] = item.active;
                _this.pending[id] = item.pending > 0;
            });
        }, function (err) { return console.log('Failed to get items', err); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('table'), 
        __metadata('design:type', Object)
    ], ItemsComponent.prototype, "tableName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('api'), 
        __metadata('design:type', Object)
    ], ItemsComponent.prototype, "apiName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('column'), 
        __metadata('design:type', String)
    ], ItemsComponent.prototype, "valueColumn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'), 
        __metadata('design:type', String)
    ], ItemsComponent.prototype, "idColumn", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('placeholder'), 
        __metadata('design:type', String)
    ], ItemsComponent.prototype, "placeholder", void 0);
    ItemsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(1003),
            styles: [__webpack_require__(985)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]) === 'function' && _a) || Object])
    ], ItemsComponent);
    return ItemsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/items.component.js.map

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeftbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftbarComponent = (function () {
    function LeftbarComponent() {
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    LeftbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-leftbar',
            template: __webpack_require__(1004),
            styles: [__webpack_require__(986)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftbarComponent);
    return LeftbarComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/leftbar.component.js.map

/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(1006),
            styles: [__webpack_require__(988)],
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/main.component.js.map

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessageFadeOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageFadeOutComponent = (function () {
    function MessageFadeOutComponent() {
        this.opacity = 0;
        this.transition = "";
        this.height = '0px';
        this.borderColor = null;
        this._message = "";
        this._bgClass = "";
    }
    Object.defineProperty(MessageFadeOutComponent.prototype, "bgClass", {
        get: function () {
            return this._bgClass;
        },
        set: function (c) {
            this._bgClass = c;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MessageFadeOutComponent.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            var _this = this;
            this._message = msg;
            this.opacity = 1;
            this.height = 'auto';
            this.transition = 'border-color ' + .3 + 's ease-out';
            var i = 1;
            var flashBorder = setInterval(function () {
                _this.borderColor = (i % 2) ? null : 'darkred';
                i++;
            }, 400);
            setTimeout(function () {
                clearInterval(flashBorder);
            }, 5000);
            if (this.timeout)
                clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this.transition = 'opacity ' + (msg.length * .05).toString() + 's ease-out';
                _this.opacity = 0;
            }, msg.length * 250);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MessageFadeOutComponent.prototype, "bgClass", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MessageFadeOutComponent.prototype, "message", null);
    MessageFadeOutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-fade-out',
            template: __webpack_require__(1007),
            styles: [__webpack_require__(989)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageFadeOutComponent);
    return MessageFadeOutComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/message-fade-out.component.js.map

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.isLoggedIn = false;
        var self = this;
        loginService.isLoggedIn$.subscribe(function (val) {
            self.isLoggedIn = val;
            if (val)
                self.user = localStorage.getItem(loginService.auth_key).toLowerCase();
        });
    }
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem(this.loginService.auth_key);
        this.router.navigate(['/login']);
        this.loginService.logout().subscribe(function (val) { console.log('logoout', val); }, function (err) { console.log('logout error', err); });
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(1008),
            styles: [__webpack_require__(990)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/navbar.component.js.map

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RightbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightbarComponent = (function () {
    function RightbarComponent() {
    }
    RightbarComponent.prototype.ngOnInit = function () {
    };
    RightbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rightbar',
            template: __webpack_require__(1010),
            styles: [__webpack_require__(992)]
        }), 
        __metadata('design:paramtypes', [])
    ], RightbarComponent);
    return RightbarComponent;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/rightbar.component.js.map

/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__worktime_list_model__ = __webpack_require__(802);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BranchTimesheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BranchTimesheetComponent = (function () {
    function BranchTimesheetComponent(restService) {
        this.restService = restService;
        this.addedEmp = "";
        this.list = new __WEBPACK_IMPORTED_MODULE_3__worktime_list_model__["a" /* WorktimeList */](this.date, this.bid, this.restService);
    }
    Object.defineProperty(BranchTimesheetComponent.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (d) {
            this._date = d;
            this.list = new __WEBPACK_IMPORTED_MODULE_3__worktime_list_model__["a" /* WorktimeList */](d, this.bid, this.restService);
            ;
            this.ngOnInit();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BranchTimesheetComponent.prototype, "vacantEmps", {
        get: function () {
            var _this = this;
            return Object.keys(this.list.items).filter(function (e) { return !Object.keys(_this.list.items[e].worktimes).length; }).map(function (k) { return { id: k, value: _this.list.items[k].name }; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BranchTimesheetComponent.prototype, "engagedEmps", {
        get: function () {
            var _this = this;
            return Object.keys(this.list.items).filter(function (e) { return Object.keys(_this.list.items[e].worktimes).length; });
        },
        enumerable: true,
        configurable: true
    });
    BranchTimesheetComponent.prototype.workTimeIDs = function (eid) {
        return Object.keys(this.list.items[eid].worktimes);
    };
    BranchTimesheetComponent.prototype.addNew = function (i) {
        if (this.addedEmp.id) {
            var newEmp = i.clone();
            this.list.add(this.addedEmp.id, newEmp);
            this.addedEmp = "";
            this.newEmpElement.nativeElement.focus();
        }
    };
    BranchTimesheetComponent.prototype.getSubtitle = function () {
        return 'On ' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.date).format("dddd, MMMM Do YYYY");
    };
    BranchTimesheetComponent.prototype.lock = function () {
        var _this = this;
        this.restService.get('lock/' + this.bid)
            .subscribe(function (data) {
            console.log(data);
            _this.isLocked = true;
            _this.lockedBy = 'You';
            _this.lockedAt = __WEBPACK_IMPORTED_MODULE_2_moment__().format('HH:mm');
        }, function (err) { return console.log(err); });
    };
    BranchTimesheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get('islocked/' + this.bid)
            .subscribe(function (data) {
            if (data && data.id) {
                _this.isLocked = true;
                _this.lockedBy = data.id;
                _this.lockedAt = __WEBPACK_IMPORTED_MODULE_2_moment__(data.ltime).format('HH:mm');
            }
            else {
                _this.isLocked = false;
            }
        });
        this.restService.get('t/' + this.bid + '/' + __WEBPACK_IMPORTED_MODULE_2_moment__(this.date).format('YYYY-MM-DD'))
            .subscribe(function (data) {
            for (var i in data)
                _this.list.load(data[i]);
        }, function (err) { console.log('error in loading worktimes:', err); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('newEmp'), 
        __metadata('design:type', Object)
    ], BranchTimesheetComponent.prototype, "newEmpElement", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BranchTimesheetComponent.prototype, "bid", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BranchTimesheetComponent.prototype, "name", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], BranchTimesheetComponent.prototype, "date", null);
    BranchTimesheetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch-timesheet',
            template: __webpack_require__(1011),
            styles: [__webpack_require__(993)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__rest_service__["a" /* RestService */]) === 'function' && _a) || Object])
    ], BranchTimesheetComponent);
    return BranchTimesheetComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/branch-timesheet.component.js.map

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_model__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval_model__ = __webpack_require__(440);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IntervalInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntervalInputComponent = (function () {
    function IntervalInputComponent() {
        this.btnName = "add";
        this.beingEdited = false;
        this.vChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.edited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._i = new __WEBPACK_IMPORTED_MODULE_2__interval_model__["a" /* Interval */]();
        this.copy = new __WEBPACK_IMPORTED_MODULE_2__interval_model__["a" /* Interval */]();
    }
    Object.defineProperty(IntervalInputComponent.prototype, "initVal", {
        get: function () {
            return this._i;
        },
        set: function (i) {
            this._i = i.clone();
            this._i.date = this.date;
            this.copy = i.clone();
            this.copy.date = this.date;
        },
        enumerable: true,
        configurable: true
    });
    IntervalInputComponent.prototype.go = function (event, n) {
        var ref = [this.hi1, this.mi1, this.hi2, this.mi2, this.btn];
        if (event.keyCode === 9 && !event.shiftKey)
            return;
        if (!(event.shiftKey && event.keyCode === 9) && event.keyCode !== 37) {
            if (ref[n - 1].nativeElement.value.length === 2) {
                var val = parseInt(ref[n - 1].nativeElement.value);
                if (isNaN(val) || val < 0 || (!(n % 2) && val > 59) || (n % 2 && val > 23)) {
                    ref[n - 1].nativeElement.value = '00';
                    ref[n - 1].nativeElement.style.borderColor = 'red';
                    setTimeout(function () { return ref[n - 1].nativeElement.style.borderColor = null; }, 1000);
                    ref[n - 1].nativeElement.focus();
                    ref[n - 1].nativeElement.select();
                }
                else {
                    var newTP = new __WEBPACK_IMPORTED_MODULE_1__time_model__["a" /* TimePair */]();
                    newTP.hours = (n < 3 ? this.hi1 : this.hi2).nativeElement.value;
                    newTP.minutes = (n < 3 ? this.mi1 : this.mi2).nativeElement.value;
                    this._i[n < 3 ? 'start' : 'end'] = newTP;
                    if (ref[n]) {
                        ref[n].nativeElement.focus();
                        if (n < 4)
                            ref[n].nativeElement.select();
                    }
                }
            }
        }
        else {
            if (n > 1) {
                ref[n - 2].nativeElement.focus();
                ref[n - 2].nativeElement.select();
            }
            else {
                ref[0].nativeElement.focus();
                ref[0].nativeElement.select();
            }
        }
    };
    IntervalInputComponent.prototype.add = function () {
        this._i.date = this.date;
        this.copy.date = this.date;
        this.vChange.emit(this._i.clone());
        if (this.btnName === 'update')
            this.beingEdited = false;
        else
            this._i = new __WEBPACK_IMPORTED_MODULE_2__interval_model__["a" /* Interval */]();
    };
    IntervalInputComponent.prototype.editStart = function () {
        this.beingEdited = true;
        this.edited.emit(true);
    };
    IntervalInputComponent.prototype.editCancel = function () {
        if (!this.copy.start.infinity)
            this.beingEdited = false;
        this._i = this.copy.clone();
    };
    IntervalInputComponent.prototype.delete = function () {
        this.deleted.emit(true);
    };
    IntervalInputComponent.prototype.changeBreakType = function () {
        this._i.nobreak = !this._i.nobreak;
    };
    IntervalInputComponent.prototype.ngOnInit = function () {
        this._i.date = this.date;
        this.copy.date = this.date;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "btnName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "beingEdited", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('initValue'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "initVal", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], IntervalInputComponent.prototype, "vChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], IntervalInputComponent.prototype, "edited", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], IntervalInputComponent.prototype, "deleted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "date", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hi1'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "hi1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mi1'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "mi1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('hi2'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "hi2", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mi2'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "mi2", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn'), 
        __metadata('design:type', Object)
    ], IntervalInputComponent.prototype, "btn", void 0);
    IntervalInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-interval-input',
            template: __webpack_require__(1012),
            styles: [__webpack_require__(994)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntervalInputComponent);
    return IntervalInputComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/interval-input.component.js.map

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval_model__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_model__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorktimeList; });
/**
 * Created by Amin on 24/10/2016.
 */


var WorktimeList = (function () {
    function WorktimeList(date, bid, restService) {
        this.date = date;
        this.bid = bid;
        this.restService = restService;
        this.items = {};
        this.beingEdited = {};
        this.copy = {};
        this._message = "";
    }
    Object.defineProperty(WorktimeList.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (m) {
            if (m === this._message)
                m += ' ';
            this._message = m;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(WorktimeList.prototype, "toArray", {
        get: function () {
            var _this = this;
            var ret = [];
            Object.keys(this.items).forEach(function (key) {
                var obj = _this.items[key];
                obj.eid = key;
                ret.push(obj);
            });
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    WorktimeList.prototype.load = function (employeeWorktime) {
        var i = new __WEBPACK_IMPORTED_MODULE_0__interval_model__["a" /* Interval */]();
        i.date = this.date;
        if (employeeWorktime.wtid) {
            i.startDateTime = employeeWorktime.start_time;
            i.endDateTime = employeeWorktime.end_time;
            i.breakMinutes = employeeWorktime.breaktime ? employeeWorktime.breaktime : 0;
            i.nobreak = Boolean(employeeWorktime.nobreak);
            i.by = employeeWorktime.updated_by;
        }
        if (this.items[employeeWorktime.eid]) {
            if (employeeWorktime.wtid) {
                this.copy[employeeWorktime.wtid] = i;
                this.items[employeeWorktime.eid].worktimes[employeeWorktime.wtid] = i;
                this.beingEdited[employeeWorktime.eid][employeeWorktime.wtid] = false;
            }
        }
        else {
            var obj = {};
            this.beingEdited[employeeWorktime.eid] = {};
            if (employeeWorktime.wtid) {
                obj[employeeWorktime.wtid] = i;
                this.beingEdited[employeeWorktime.eid][employeeWorktime.wtid] = false;
            }
            this.items[employeeWorktime.eid] = {
                worktimes: obj,
                name: employeeWorktime.firstname + ' ' + employeeWorktime.surname,
                nobreak: Boolean(employeeWorktime.nobreak),
            };
        }
    };
    WorktimeList.prototype.add = function (eid, wt) {
        var _this = this;
        var worktime = wt.clone();
        this.restService.insert('t/' + this.bid + '/' + eid, worktime.toObject())
            .subscribe(function (wtid) {
            worktime.by = 'You';
            _this.items[eid].worktimes[wtid.json()] = worktime;
            wt.start = new __WEBPACK_IMPORTED_MODULE_1__time_model__["a" /* TimePair */]();
            wt.end = new __WEBPACK_IMPORTED_MODULE_1__time_model__["a" /* TimePair */]();
        }, function (err) {
            _this.message = err.text();
            console.log('error while adding worktime:', err);
        });
    };
    WorktimeList.prototype.update = function (eid, wtid, i) {
        var _this = this;
        this.restService.update('t', wtid, i.toObject())
            .subscribe(function () {
            console.log('worktime ' + wtid + 'updated');
            i.by = 'You';
            _this.copy[wtid] = i;
            _this.items[eid].worktimes[wtid] = i;
        }, function (err) {
            _this.items[eid].worktimes[wtid] = _this.copy[wtid];
            _this.beingEdited[eid][wtid] = false;
            _this.message = err.text();
            console.log('error while updaing worktime:', err);
        });
    };
    WorktimeList.prototype.delete = function (eid, wtid) {
        var _this = this;
        this.restService.delete('t', wtid)
            .subscribe(function () {
            delete _this.items[eid].worktimes[wtid];
            delete _this.copy[wtid];
        }, function (err) {
            _this.message = err.text();
            console.log('error while deleting worktime:', err);
        });
    };
    return WorktimeList;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/worktime-list.model.js.map

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/environment.js.map

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/polyfills.js.map

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestService = (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.insert = function (table, values) {
        return this.http.put('/api/' + table, values);
    };
    RestService.prototype.get = function (table) {
        return this.http.get('/api/' + table).map(function (data) { return data.json(); });
    };
    ;
    RestService.prototype.getWithParams = function (table, values) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        for (var key in values)
            if (values.hasOwnProperty(key))
                params.set(key, values[key]);
        return this.http.get('/api/' + table, { search: params }).map(function (data) {
            return data.json();
        });
    };
    RestService.prototype.delete = function (table, id) {
        return this.http.delete('/api/' + table + '/' + id);
    };
    RestService.prototype.update = function (table, id, values) {
        return this.http.post('/api/' + table + '/' + id, values);
    };
    RestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], RestService);
    return RestService;
    var _a;
}());
//# sourceMappingURL=/Users/Amin/WebstormProjects/BurgistaTS2/src/rest.service.js.map

/***/ },

/***/ 977:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./af": 491,
	"./af.js": 491,
	"./ar": 496,
	"./ar-ly": 492,
	"./ar-ly.js": 492,
	"./ar-ma": 493,
	"./ar-ma.js": 493,
	"./ar-sa": 494,
	"./ar-sa.js": 494,
	"./ar-tn": 495,
	"./ar-tn.js": 495,
	"./ar.js": 496,
	"./az": 497,
	"./az.js": 497,
	"./be": 498,
	"./be.js": 498,
	"./bg": 499,
	"./bg.js": 499,
	"./bn": 500,
	"./bn.js": 500,
	"./bo": 501,
	"./bo.js": 501,
	"./br": 502,
	"./br.js": 502,
	"./bs": 503,
	"./bs.js": 503,
	"./ca": 504,
	"./ca.js": 504,
	"./cs": 505,
	"./cs.js": 505,
	"./cv": 506,
	"./cv.js": 506,
	"./cy": 507,
	"./cy.js": 507,
	"./da": 508,
	"./da.js": 508,
	"./de": 510,
	"./de-at": 509,
	"./de-at.js": 509,
	"./de.js": 510,
	"./dv": 511,
	"./dv.js": 511,
	"./el": 512,
	"./el.js": 512,
	"./en-au": 513,
	"./en-au.js": 513,
	"./en-ca": 514,
	"./en-ca.js": 514,
	"./en-gb": 515,
	"./en-gb.js": 515,
	"./en-ie": 516,
	"./en-ie.js": 516,
	"./en-nz": 517,
	"./en-nz.js": 517,
	"./eo": 518,
	"./eo.js": 518,
	"./es": 520,
	"./es-do": 519,
	"./es-do.js": 519,
	"./es.js": 520,
	"./et": 521,
	"./et.js": 521,
	"./eu": 522,
	"./eu.js": 522,
	"./fa": 523,
	"./fa.js": 523,
	"./fi": 524,
	"./fi.js": 524,
	"./fo": 525,
	"./fo.js": 525,
	"./fr": 528,
	"./fr-ca": 526,
	"./fr-ca.js": 526,
	"./fr-ch": 527,
	"./fr-ch.js": 527,
	"./fr.js": 528,
	"./fy": 529,
	"./fy.js": 529,
	"./gd": 530,
	"./gd.js": 530,
	"./gl": 531,
	"./gl.js": 531,
	"./he": 532,
	"./he.js": 532,
	"./hi": 533,
	"./hi.js": 533,
	"./hr": 534,
	"./hr.js": 534,
	"./hu": 535,
	"./hu.js": 535,
	"./hy-am": 536,
	"./hy-am.js": 536,
	"./id": 537,
	"./id.js": 537,
	"./is": 538,
	"./is.js": 538,
	"./it": 539,
	"./it.js": 539,
	"./ja": 540,
	"./ja.js": 540,
	"./jv": 541,
	"./jv.js": 541,
	"./ka": 542,
	"./ka.js": 542,
	"./kk": 543,
	"./kk.js": 543,
	"./km": 544,
	"./km.js": 544,
	"./ko": 545,
	"./ko.js": 545,
	"./ky": 546,
	"./ky.js": 546,
	"./lb": 547,
	"./lb.js": 547,
	"./lo": 548,
	"./lo.js": 548,
	"./lt": 549,
	"./lt.js": 549,
	"./lv": 550,
	"./lv.js": 550,
	"./me": 551,
	"./me.js": 551,
	"./mi": 552,
	"./mi.js": 552,
	"./mk": 553,
	"./mk.js": 553,
	"./ml": 554,
	"./ml.js": 554,
	"./mr": 555,
	"./mr.js": 555,
	"./ms": 557,
	"./ms-my": 556,
	"./ms-my.js": 556,
	"./ms.js": 557,
	"./my": 558,
	"./my.js": 558,
	"./nb": 559,
	"./nb.js": 559,
	"./ne": 560,
	"./ne.js": 560,
	"./nl": 561,
	"./nl.js": 561,
	"./nn": 562,
	"./nn.js": 562,
	"./pa-in": 563,
	"./pa-in.js": 563,
	"./pl": 564,
	"./pl.js": 564,
	"./pt": 566,
	"./pt-br": 565,
	"./pt-br.js": 565,
	"./pt.js": 566,
	"./ro": 567,
	"./ro.js": 567,
	"./ru": 568,
	"./ru.js": 568,
	"./se": 569,
	"./se.js": 569,
	"./si": 570,
	"./si.js": 570,
	"./sk": 571,
	"./sk.js": 571,
	"./sl": 572,
	"./sl.js": 572,
	"./sq": 573,
	"./sq.js": 573,
	"./sr": 575,
	"./sr-cyrl": 574,
	"./sr-cyrl.js": 574,
	"./sr.js": 575,
	"./ss": 576,
	"./ss.js": 576,
	"./sv": 577,
	"./sv.js": 577,
	"./sw": 578,
	"./sw.js": 578,
	"./ta": 579,
	"./ta.js": 579,
	"./te": 580,
	"./te.js": 580,
	"./th": 581,
	"./th.js": 581,
	"./tl-ph": 582,
	"./tl-ph.js": 582,
	"./tlh": 583,
	"./tlh.js": 583,
	"./tr": 584,
	"./tr.js": 584,
	"./tzl": 585,
	"./tzl.js": 585,
	"./tzm": 587,
	"./tzm-latn": 586,
	"./tzm-latn.js": 586,
	"./tzm.js": 587,
	"./uk": 588,
	"./uk.js": 588,
	"./uz": 589,
	"./uz.js": 589,
	"./vi": 590,
	"./vi.js": 590,
	"./x-pseudo": 591,
	"./x-pseudo.js": 591,
	"./zh-cn": 592,
	"./zh-cn.js": 592,
	"./zh-hk": 593,
	"./zh-hk.js": 593,
	"./zh-tw": 594,
	"./zh-tw.js": 594
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 977;


/***/ },

/***/ 979:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 980:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 981:
/***/ function(module, exports) {

module.exports = "div.date-group{\n    white-space: nowrap;\n    margin-left:10px;\n    padding-top:22px;\n    display:inline-block;\n    vertical-align: middle;\n}\nspan.date-label{\n    width:90px;\n}\n\n.date-input{\n    width:82px;\n}\nspan.manager{\n    font-size:75%;\n    font-family:Menlo, Monaco, Consolas, \"Courier New\", monospace;\n    background-color: darkred;\n    border: 1px #660000 solid;\n    border-radius: 4px;\n    margin: 0px 10px 0px 10px;\n    padding: 2px;\n    color: white;\n    display:inline-block;\n}"

/***/ },

/***/ 982:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 983:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 984:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 985:
/***/ function(module, exports) {

module.exports = ".pressed{\n    border: grey solid 1px;\n    color: darkgrey;\n}\n\n.hidden{\n    display:none;\n    width:0px;\n    visibility: hidden;\n}\n\nli.inactive{\n    background-color: rgba(250,250,230,.8);\n}\n\nspan.inactive{\n    font-size:75%;\n    font-family:Menlo, Monaco, Consolas, \"Courier New\", monospace;\n    text-transform: uppercase;\n    background-color: #607d8b;\n    border: 1px #374f5c solid;\n    border-radius: 4px;\n    margin: 0px 10px 0px 10px;\n    padding: 2px;\n    color: white;\n}"

/***/ },

/***/ 986:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 987:
/***/ function(module, exports) {

module.exports = ".login-form-wrapper div {\n  padding: 3px;\n  font-family: 'Varela Round';\n}\n/*=== 3. Text Outside the Box ===*/\n.etc-login-form {\n  color: #919191;\n  padding: 10px 20px;\n}\n.etc-login-form p {\n  margin-bottom: 5px;\n}\n/*=== 3. Text Outside the Box ===*/\n.etc-login-form {\n  color: #919191;\n  padding: 10px 20px;\n}\n.etc-login-form p {\n  margin-bottom: 5px;\n}\n/*=== 4. Main Form ===*/\n.login-form-1 {\n  max-width: 350px;\n  border-radius: 5px;\n  display: inline-block;\n  background: #efefef;\n}\n.main-login-form {\n  position: relative;\n}\n.login-form-1 a {\n  color: #aaaaaa;\n  transition: all ease-in-out 200ms;\n}\n.login-form-1 a:hover {\n  color: #333333;\n  text-decoration: none;\n}\n.login-form-1 .form-control {\n  border: 0;\n  box-shadow: 0 0 0;\n  border-radius: 0;\n  background: transparent;\n  color: #555555;\n  padding: 7px 0;\n  font-weight: bold;\n  height:auto;\n  width: 200px;\n  display:inline-block;\n}\n.login-form-1 .form-control::-webkit-input-placeholder {\n  color: #999999;\n}\n.login-form-1 .form-control:-moz-placeholder,\n.login-form-1 .form-control::-moz-placeholder,\n.login-form-1 .form-control:-ms-input-placeholder {\n  color: #999999;\n}\n.login-form-1 .form-group {\n  margin-bottom: 0;\n  border-bottom: 2px solid #efefef;\n  padding-right: 20px;\n  position: relative;\n}\n.login-form-1 .form-group:last-child {\n  border-bottom: 0;\n}\n.login-group {\n  background: #ffffff;\n  color: #999999;\n  border-radius: 8px;\n  padding: 10px 20px;\n}\n.login-group-checkbox {\n  padding: 5px 0;\n}\n/*=== 5. Login Button ===*/\n.login-form-1 .login-button {\n  position: absolute;\n  right: -25px;\n  top: 50%;\n  background: #ffffff;\n  color: #999999;\n  padding: 11px 0;\n  width: 50px;\n  height: 50px;\n  margin-top: -25px;\n  border: 5px solid #efefef;\n  border-radius: 50%;\n  transition: all ease-in-out 500ms;\n}\n.login-form-1 .login-button:hover {\n  color: #555555;\n  transform: rotate(450deg);\n}\n.login-form-1 .login-button.clicked {\n  color: #555555;\n}\n.login-form-1 .login-button.clicked:hover {\n  transform: none;\n}\n.login-form-1 .login-button.clicked.success {\n  color: #2ecc71;\n}\n.login-form-1 .login-button.clicked.error {\n  color: #e74c3c;\n}\n/*=== 6. Form Invalid ===*/\nlabel.form-invalid {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 5;\n  display: block;\n  margin-top: -25px;\n  padding: 7px 9px;\n  background: #777777;\n  color: #ffffff;\n  border-radius: 5px;\n  font-weight: bold;\n  font-size: 11px;\n}\nlabel.form-invalid:after {\n  top: 100%;\n  right: 10px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: transparent;\n  border-top-color: #777777;\n  border-width: 6px;\n}\n/*=== 7. Form - Main Message ===*/\n.login-form-main-message {\n  background: #ffffff;\n  border: 0px;\n  margin-bottom: 8px;\n  font-weight: bold;\n  height: 0;\n  padding:0px;\n  opacity: 0;\n  transition: all ease-in-out 200ms;\n  color: green;\n}\n.login-form-main-message.show {\n  height: auto;\n  opacity: 1;\n  padding: 10px 20px 10px 17px;\n}\n.login-form-main-message.success {\n  border-left-color: #2ecc71;\n}\n.login-form-main-message.error {\n  color: red;\n}\n/*=== 8. Custom Checkbox & Radio ===*/\n/* Base for label styling */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked,\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n}\n[type=\"checkbox\"]:not(:checked) + label,\n[type=\"checkbox\"]:checked + label,\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 25px;\n  padding-top: 1px;\n  cursor: pointer;\n}\n/* checkbox aspect */\n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before,\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 2px;\n  width: 17px;\n  height: 17px;\n  border: 0px solid #aaa;\n  background: #f0f0f0;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n/* checked mark aspect */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:after {\n  position: absolute;\n  color: #555555;\n  transition: all .2s;\n}\n/* checked mark aspect changes */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"radio\"]:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n[type=\"checkbox\"]:checked + label:after,\n[type=\"radio\"]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n/* disabled checkbox */\n[type=\"checkbox\"]:disabled:not(:checked) + label:before,\n[type=\"checkbox\"]:disabled:checked + label:before,\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  box-shadow: none;\n  border-color: #8c8c8c;\n  background-color: #878787;\n}\n[type=\"checkbox\"]:disabled:checked + label:after,\n[type=\"radio\"]:disabled:checked + label:after {\n  color: #555555;\n}\n[type=\"checkbox\"]:disabled + label,\n[type=\"radio\"]:disabled + label {\n  color: #8c8c8c;\n}\n/* accessibility */\n[type=\"checkbox\"]:checked:focus + label:before,\n[type=\"checkbox\"]:not(:checked):focus + label:before,\n[type=\"checkbox\"]:checked:focus + label:before,\n[type=\"checkbox\"]:not(:checked):focus + label:before {\n  border: 1px dotted #f6f6f6;\n}\n/* hover style just for information */\nlabel:hover:before {\n  border: 1px solid #f6f6f6 !important;\n}\n/*=== Customization ===*/\n/* radio aspect */\n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before {\n  border-radius: 3px;\n}\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:checked + label:before {\n  border-radius: 35px;\n}\n/* selected mark aspect */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after {\n  content: '✔';\n  top: 0;\n  left: 2px;\n  font-size: 14px;\n}\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:after {\n  content: '\\2022';\n  top: 0;\n  left: 3px;\n  font-size: 30px;\n  line-height: 25px;\n}\n/*=== 9. Misc ===*/\n.logo {\n  font-size: 25px;\n  color: #aaaaaa;\n  font-weight: bold;\n}\n"

/***/ },

/***/ 988:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 989:
/***/ function(module, exports) {

module.exports = "p.warning{\n    border:2px solid transparent;\n    position:fixed;\n    top:52px;\n    left:0px;\n    z-index: 100;\n    font-size: 18px;\n    padding:3px;\n    border-radius: 5px;\n}\np.info{\n    border:0px solid transparent;\n    position:fixed;\n    bottom:0px;\n    left:0px;\n    z-index: 100;\n    font-size: 18px;\n    padding:3px;\n    border-radius: 5px;\n}"

/***/ },

/***/ 990:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 991:
/***/ function(module, exports) {

module.exports = ".rtpDatePicker{\n    padding-bottom:10px;\n    margin-bottom:5px;\n    display:inline-block;\n}\n\n.darkbg{\n    background-color: rgba(55, 55, 55, 0.1);\n}\n.sumrow{\n    background: rgba(229, 229, 116, 0.5);\n    font-weight: bold;\n}\n.sentEmail{\n    border-color: rgba(0,100,255,.5) !important;\n    color: rgba(0, 58, 123, 0.5) !important\n}\nbutton{\n    border: outset 2px;\n    border-radius: 5px;\n}\ndiv.panel{\n    background-color: transparent;\n}"

/***/ },

/***/ 992:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 993:
/***/ function(module, exports) {

module.exports = "md-card.md-card{\n    min-height:600px;\n}\ninput.name-picker{\n    width:400px;\n}"

/***/ },

/***/ 994:
/***/ function(module, exports) {

module.exports = "input.time{\n    width:25px;\n    padding:0;\n    float: none;\n    height: 25px;\n    text-align: center;\n}\nspan.time{\n    background-color: #607d8b;\n    color:white;\n    border-radius:5px;\n    padding:2px;\n    margin:2px;\n    font-size:12px;\n    display: inline-block;\n}\nspan.updating{\n    border-radius:5px;\n    background-color: #607d8b;\n    padding:2px;\n    margin:2px;\n    display:inline-block;\n}\n\nspan.nobreak{\n    font-size:75%;\n    font-family:Menlo, Monaco, Consolas, \"Courier New\", monospace;\n    text-transform: uppercase;\n    background-color: darkred;\n    border: 1px #374f5c solid;\n    border-radius: 4px;\n    margin: 0px 10px 0px 10px;\n    padding: 2px;\n    color: white;\n}\n\nspan.hasbreak{\n    background-color: darkcyan !important;\n}"

/***/ },

/***/ 995:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 996:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 997:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n    <app-navbar></app-navbar>\n</nav>\n\n<div class=\"container-fluid text-center\">\n    <div class=\"row content\">\n        <app-leftbar></app-leftbar>\n        <app-main></app-main>\n        <app-rightbar></app-rightbar>\n    </div>\n</div>\n<app-footer></app-footer>\n"

/***/ },

/***/ 998:
/***/ function(module, exports) {

module.exports = "<app-items [api]=\"'branch'\" [table]=\"'branches'\" [column]=\"'name'\" [id]=\"'bid'\" [placeholder]=\"'Add branch'\"></app-items>"

/***/ },

/***/ 999:
/***/ function(module, exports) {

module.exports = "<md-card [ngClass]=\"['md-card', isNew?(updateEnabled?'md-add':''):(updateEnabled?'md-update':(isExpired?'md-expired':''))]\">\n  <md-card-title class=\"app-input-section\">{{this.isNew ? 'New Employee' : this.value.toString() }}</md-card-title>\n  <md-card-subtitle>{{subtitle}}</md-card-subtitle>\n  <md-input placeholder=\"First name\" maxlength=\"{{nameLength}}\" [(ngModel)]=\"value.firstname\" #firstname (change)=\"onChange()\">\n    <md-hint align=\"end\">\n      {{firstname.characterCount}} / {{nameLength}}\n    </md-hint>\n  </md-input>\n  <md-input placeholder=\"Surname\" maxlength=\"{{nameLength}}\" #surname [(ngModel)]=\"value.surname\" (change)=\"onChange()\">\n    <md-hint align=\"end\">\n      {{surname.characterCount}} / {{nameLength}}\n    </md-hint>\n  </md-input>\n  <md-input placeholder=\"Email\" maxlength=\"100\" [(ngModel)]=\"value.email\" #email (change)=\"onChange()\">\n    <md-hint align=\"end\">\n      {{email.characterCount}} / 100\n    </md-hint>\n  </md-input>\n  <md-input placeholder=\"Rate\" align=\"end\" [(ngModel)]=\"value.rate\" style=\"width:55px\" (change)=\"onChange()\">\n    <span md-prefix>£</span>\n  </md-input>\n  <md-checkbox *ngIf=\"isNew\" [(ngModel)]=\"value.isManager\" (change)=\"onChange()\">Manager</md-checkbox>\n  <span *ngIf=\"!isNew&&value.isManager\" class=\"manager\">MANAGER: {{value.username}}</span>\n  <div *ngIf=\"value.isManager&&isNew\">†\n    <md-input placeholder=\"Username\" [(ngModel)]=\"value.username\" #username (change)=\"onChange()\"></md-input>\n    <md-input type=\"Password\"  placeholder=\"Password\" [(ngModel)]=\"value.password\" #password (change)=\"onChange()\"></md-input>\n  </div>\n<div class=\"date-group\">\n    <div class=\"input-group\">\n      <span class=\"input-group-addon date-label\" id=\"sizing-addon2\">Start Date</span>\n      <material-datepicker class=\"date-input\" [date]=\"value.contractDate\" (onSelect)=\"onStartDateSelect($event)\"></material-datepicker>\n    </div>\n    <div class=\"input-group\">\n      <span class=\"input-group-addon date-label\" id=\"sizing-addon2\">End Date</span>\n      <material-datepicker class=\"date-input\" [date]=\"value.contractEnd\" (onSelect)=\"onEndDateSelect($event)\"></material-datepicker>\n    </div>\n</div>\n  <md-card-actions>\n    <button md-mini-fab [disabled]=\"!updateEnabled\" (click)=\"action()\" color=\"primary\" title=\"{{(isNew?'Add ':'Update ')+ ' Employee Record'}}\">\n      <md-icon fontSet=\"fa\" [fontIcon]=\"buttonType\"></md-icon>\n    </button>\n    <button *ngIf=\"!isNew\" md-mini-fab [disabled]=\"!deleteEnabled\" (click)=\"remove()\" color=\"accent\" title=\"Delete Employee Record\">\n      <md-icon fontSet=\"fa\" fontIcon=\"fa-times\"></md-icon>\n    </button>\n  </md-card-actions>\n</md-card>"

/***/ }

},[1273]);
//# sourceMappingURL=main.bundle.map