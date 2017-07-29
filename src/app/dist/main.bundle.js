webpackJsonp([1,4],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Globals = (function () {
    function Globals(http) {
        this.http = http;
    }
    Globals.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    Globals.prototype.getPassword = function () {
        return localStorage.getItem('password');
    };
    Globals.prototype.getId = function () {
        return localStorage.getItem('id');
    };
    Globals.prototype.clearLocalStorage = function () {
        return localStorage.clear();
    };
    return Globals;
}());
Globals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Globals);

var _a;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 276;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(300);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnalyticsComponent = (function () {
    function AnalyticsComponent(globals, router, http) {
        this.globals = globals;
        this.router = router;
        this.http = http;
        this.tasks = [];
        this.numberOfTasksDone = 0;
        this.numberOfTasksNotDone = 0;
        this.pieChartDoneNotDoneLabels = ['Totals Tasks Done', 'Total Tasks Not done'];
        this.pieChartDoneNotDoneData = [];
        this.pieChartType = 'doughnut';
        this.error = '';
        this.showLoading = false;
        this.todaysDate = new Date();
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        //Monthly
        /* monthlyTasksDone = [0,0,0,0,0,0,0,0,0,0,0,0];
        monthlyTasksNotDone = [0,0,0,0,0,0,0,0,0,0,0,0]; */
        this.monthlyTasksDone = new Array(12).fill(0);
        this.monthlyTasksNotDone = new Array(12).fill(0);
        this.presentYear = new Date().getFullYear();
        this.yearToGetAnalyticsFor = this.presentYear;
        this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.barChartData = [
            { data: this.monthlyTasksDone, label: 'Tasks done' },
            { data: this.monthlyTasksNotDone, label: 'Tasks not done' }
        ];
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        this.barChartLegend = true;
        this.barChartType = 'bar';
        if (this.globals.getEmail())
            this.getAllTasks();
    }
    AnalyticsComponent.prototype.ngOnInit = function () { };
    AnalyticsComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.showLoading = true;
        this.http.get('/api/get/' + this.globals.getId()).subscribe(function (res) {
            setTimeout(function () {
                _this.showLoading = false;
                try {
                    _this.tasks = res.json();
                    _this.calcTasksDoneNotDone();
                    _this.calcMonthlyTasksDoneNotDone(_this.tasks, _this.monthlyTasksDone, _this.monthlyTasksNotDone, _this.yearToGetAnalyticsFor);
                }
                catch (e) {
                    console.log('errrr', e);
                    _this.error = ' Session Expired! Please Login Again! ';
                    window.location.reload();
                }
            }, 200);
        });
    };
    AnalyticsComponent.prototype.calcTasksDoneNotDone = function () {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].done == true)
                this.numberOfTasksDone++;
            else
                this.numberOfTasksNotDone++;
        }
        this.pieChartDoneNotDoneData[0] = this.numberOfTasksDone;
        this.pieChartDoneNotDoneData[1] = this.numberOfTasksNotDone;
    };
    // events
    AnalyticsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AnalyticsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AnalyticsComponent.prototype.calcMonthlyTasksDoneNotDone = function (tasks, monthlyTasksDone, monthlyTasksNotDone, yearToGetAnalyticsFor) {
        tasks.filter(function (task, index) {
            var date = new Date(task.created_at);
            if (date.getFullYear() == yearToGetAnalyticsFor) {
                var month = date.getMonth();
                if (task.done == true) {
                    monthlyTasksDone[month]++;
                }
                else
                    monthlyTasksNotDone[month]++;
            }
        });
    };
    AnalyticsComponent.prototype.getBarChartForThisParticularYear = function (data) {
        console.log("Year", data.year);
        this.yearToGetAnalyticsFor = data.year;
        this.monthlyTasksDone.fill(0);
        this.monthlyTasksNotDone.fill(0);
        this.tasks = [];
        this.getAllTasks();
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analytics',
        template: __webpack_require__(414),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AnalyticsComponent);

var _a, _b, _c;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router, http, globals) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.globals = globals;
        this.title = 'app works!';
        console.log("Hello World");
        this.http.get('/authenticated').subscribe(function (res) {
            try {
                var user = res.json();
                console.log('App comp get request /authenticated response', user);
                if (user['local']['email']) {
                    console.log("User is Authenticated App comp constructor");
                }
            }
            catch (e) {
                console.log("Constructor data is not a json,Clearing LocalStorage");
                _this.globals.clearLocalStorage();
            }
        });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.globals.clearLocalStorage();
        this.http.get('/logout').subscribe(function () {
            _this.router.navigateByUrl('/');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(415),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authguard_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datepicker_datepicker_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sharedata_service__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forgotpassword_forgotpassword_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__changepassword_changepassword_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["a" /* LoginGuard */]] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_15__forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'oldtasks', component: __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__["a" /* OldtasksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */]] },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__["a" /* AnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */]] },
    { path: 'changePassword', component: __WEBPACK_IMPORTED_MODULE_16__changepassword_changepassword_component__["a" /* ChangepasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__["a" /* OldtasksComponent */],
            __WEBPACK_IMPORTED_MODULE_15__forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_16__changepassword_changepassword_component__["a" /* ChangepasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_17__analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__authguard_service__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_14__sharedata_service__["a" /* SharedataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, globals) {
        this.router = router;
        this.globals = globals;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.globals.getEmail()) {
            console.log('AuthGuard Service : User is authenticated. Opening route');
            return true;
        }
        else {
            console.log('AuthGuard Service : User is not authenticated. So route cannot be loaded');
            this.router.navigateByUrl('/');
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */]) === "function" && _b || Object])
], AuthGuard);

var LoginGuard = (function () {
    function LoginGuard(router, globals) {
        this.router = router;
        this.globals = globals;
    }
    LoginGuard.prototype.canActivate = function () {
        if (!this.globals.getEmail()) {
            console.log('LoginGuard Service : User is not authenticated. Opening Login page');
            return true;
        }
        else {
            console.log('LoginGuard Service : User is authenticated. So login page cannot be loaded');
            this.router.navigateByUrl('/');
        }
    };
    LoginGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */]) === "function" && _d || Object])
], LoginGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangepasswordComponent = (function () {
    function ChangepasswordComponent(_http) {
        this._http = _http;
        this.newPassword = '';
        this.confirmNewPassword = '';
        this.currentPassword = '';
        this.statusSuccess = '';
        this.statusFailure = '';
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.statusFailure = '';
        this.statusSuccess = '';
        console.log('change Password data to be submitted', data);
        this._http.post('/changePassword', data).subscribe(function (res) {
            console.log(res.text());
            data = res.json();
            if (data.success == 200)
                _this.statusSuccess = data.message;
            else
                _this.statusFailure = data.message;
        });
    };
    return ChangepasswordComponent;
}());
ChangepasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-changepassword',
        template: __webpack_require__(416),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChangepasswordComponent);

var _a;
//# sourceMappingURL=changepassword.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedata_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var now = new Date();
var DatepickerComponent = (function () {
    function DatepickerComponent(_sharedataservice) {
        this._sharedataservice = _sharedataservice;
    }
    DatepickerComponent.prototype.dateChanged = function (model) {
        this.selectedDate = new Date(model.year, model.month - 1, model.day);
        this._sharedataservice.selectedDate = this.selectedDate.toString();
        console.log('DatepickerComponent', this._sharedataservice.selectedDate, typeof (this._sharedataservice.selectedDate));
    };
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    return DatepickerComponent;
}());
DatepickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-datepicker',
        template: __webpack_require__(417),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sharedata_service__["a" /* SharedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sharedata_service__["a" /* SharedataService */]) === "function" && _a || Object])
], DatepickerComponent);

var _a;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent(http) {
        this.http = http;
        this.status = '';
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log('making post request => ', data);
        this.http.post('/forgotPassword', data).subscribe(function (res) {
            _this.status = res.text();
        });
    };
    return ForgotpasswordComponent;
}());
ForgotpasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(418),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ForgotpasswordComponent);

var _a;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = (function () {
    function IndexComponent(globals, router, http) {
        this.globals = globals;
        this.router = router;
        this.http = http;
        this.tasks = [];
        this.error = '';
        this.showLoading = false;
        this.todaysDate = new Date();
        if (this.globals.getEmail())
            this.getTasks();
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.getTasks = function () {
        var _this = this;
        this.showLoading = true;
        this.http.get('/api/get/' + this.globals.getId() + '/' + this.todaysDate).subscribe(function (res) {
            setTimeout(function () {
                _this.showLoading = false;
                try {
                    _this.tasks = res.json();
                }
                catch (e) {
                    console.log('errrr', e);
                    _this.error = ' Session Expired! Please Login Again! ';
                    window.location.reload();
                }
            }, 200);
        });
    };
    IndexComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.http.get('/api/delete/' + this.globals.getId() + '/' + id).subscribe(function (res) { _this.getTasks(); }, function (err) { return console.log(err); });
    };
    IndexComponent.prototype.addTask = function (task) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        task['done'] = false;
        task['email'] = this.globals.getEmail();
        task['id'] = this.globals.getId();
        task['created_at'] = new Date();
        headers.append('Content-Type', 'application/json;charset=utf-8');
        console.log('yahoooooo', task);
        this.http.post('/api/add', task, headers).subscribe(function (res) {
            _this.getTasks();
        }, function (err) { return console.log(err); });
    };
    IndexComponent.prototype.taskDone = function (status) {
        if (status == true) {
            return 'line-through';
        }
        else
            return '';
    };
    IndexComponent.prototype.toggleTask = function (id, done) {
        var _this = this;
        var user = {};
        user['id'] = this.globals.getId();
        user['_id'] = id;
        user['done'] = done;
        this.http.post('/api/toggle/', user).subscribe(function (res) {
            _this.getTasks();
            console.log('toggleTask response index component', res);
        }, function (err) { return console.log(err); });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(419),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], IndexComponent);

var _a, _b, _c;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(http, router, globals) {
        this.http = http;
        this.router = router;
        this.globals = globals;
        this.loginstatus = '';
    }
    LoginComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log('making post request => ', data);
        this.http.post('/login', data).subscribe(function (res) {
            try {
                var user = res.json();
                console.log("ress", res);
                console.log("respoooooooo", user['local']);
                localStorage.setItem('email', user['local']['email']);
                localStorage.setItem('password', user['local']['password']);
                localStorage.setItem('id', user['_id']);
                _this.loginstatus = '';
                _this.router.navigateByUrl('/');
            }
            catch (e) {
                _this.loginstatus = 'Wrong Username Password Combination.Try Again';
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(420),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedata_service__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OldtasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OldtasksComponent = (function () {
    function OldtasksComponent(globals, router, http, _sharedataservice) {
        this.globals = globals;
        this.router = router;
        this.http = http;
        this._sharedataservice = _sharedataservice;
        this.tasks = [];
        this.error = '';
        this.showLoading = false;
        if (this.globals.getEmail())
            this.getTasks();
    }
    OldtasksComponent.prototype.getDateFromService = function () {
        this.selectedDate = this._sharedataservice.selectedDate;
        console.log('OldtasksComponent', this._sharedataservice.selectedDate, typeof (this._sharedataservice.selectedDate));
        this.dateToBePrinted = this.toStringPrintDate(this.selectedDate);
        this.getTasks();
    };
    OldtasksComponent.prototype.ngOnInit = function () { };
    OldtasksComponent.prototype.getTasks = function () {
        var _this = this;
        if (this.selectedDate != undefined) {
            this.showLoading = true;
            this.http.get('/api/get/' + this.globals.getId() + '/' + this.selectedDate.toString()).subscribe(function (res) {
                setTimeout(function () {
                    _this.showLoading = false;
                    try {
                        _this.tasks = res.json();
                    }
                    catch (e) {
                        console.log('errrr', e);
                        _this.error = ' Session Expired! Please Login Again! ';
                        //this.router.navigateByUrl('/');
                        _this.router.navigateByUrl('/');
                    }
                }, 200);
            });
        }
    };
    /*  deleteTask(id){
        this.http.get('/api/delete/'+this.globals.getId()+'/'+id).subscribe(
          (res)=>{this.getTasks();},
          err=> console.log(err)
        );
      }*/
    /*addTask(task){
      var headers = new Headers();
      task['done'] = false;
      task['email'] = this.globals.getEmail();
      task['id'] = this.globals.getId();
      task['created_at'] = new Date()
      headers.append('Content-Type','application/json;charset=utf-8');
      console.log('yahoooooo',task);
      this.http.post('/api/add',task,headers).subscribe(
        (res)=>{
          this.getTasks();
        },
        err=> console.log(err)
      );
    }
    */
    OldtasksComponent.prototype.taskDone = function (status) {
        if (status == true) {
            return 'line-through';
        }
        else
            return '';
    };
    OldtasksComponent.prototype.toggleTask = function (id, done) {
        var _this = this;
        var user = {};
        user['id'] = this.globals.getId();
        user['_id'] = id;
        user['done'] = done;
        this.http.post('/api/toggle/', user).subscribe(function (res) {
            _this.getTasks();
            console.log('toggleTask response index component', res);
        }, function (err) { return console.log(err); });
    };
    OldtasksComponent.prototype.toStringPrintDate = function (date) {
        var stringArray = date.toString().split(' ');
        var newDate = stringArray[2] + '-' + stringArray[1] + '-' + stringArray[3];
        return newDate;
    };
    return OldtasksComponent;
}());
OldtasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-oldtasks',
        template: __webpack_require__(421),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__sharedata_service__["a" /* SharedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__sharedata_service__["a" /* SharedataService */]) === "function" && _d || Object])
], OldtasksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=oldtasks.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(globals, router, http) {
        this.globals = globals;
        this.router = router;
        this.http = http;
        this.tasks = [];
        this.error = '';
        this.showLoading = false;
        this.searchedList = [];
        if (this.globals.getEmail())
            this.getAllTasks();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.showLoading = true;
        this.http.get('/api/get/' + this.globals.getId()).subscribe(function (res) {
            setTimeout(function () {
                _this.showLoading = false;
                try {
                    _this.tasks = res.json();
                }
                catch (e) {
                    console.log('errrr', e);
                    _this.error = ' Session Expired! Please Login Again! ';
                    window.location.reload();
                }
            }, 200);
        });
    };
    SearchComponent.prototype.searchTask = function (taskToBeSearched) {
        console.log("Searching:", taskToBeSearched);
        if (taskToBeSearched != '') {
            this.searchedList = [];
            this.searchedList = this.tasks.filter(function (jsonTask, index) {
                return jsonTask.task.toLowerCase().indexOf(taskToBeSearched.toLowerCase()) > -1;
                /* if(jsonTask.task.toLowerCase().indexOf(taskToBeSearched.toLowerCase()) > -1){
                  this.searchedList.push(jsonTask);
                } */
            });
        }
        else
            this.searchedList = [];
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(422),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return countries; });
var countries = [
    { id: null, name: "Please Choose Your Country" },
    { id: '+91', name: "(+91) India" },
    { id: '+1', name: "(+1) USA" }
];
//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__countries__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(globals, router, http) {
        this.globals = globals;
        this.router = router;
        this.http = http;
        this.countries = __WEBPACK_IMPORTED_MODULE_5__countries__["a" /* countries */];
        this.countryCode = this.countries[0]['id'];
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
        console.log('User', user);
        this.http.post('/signup', user).subscribe(function (res) {
            console.log('Sign up response:', res);
            var user = res.json();
            localStorage.setItem('email', user['local']['email']);
            localStorage.setItem('password', user['local']['password']);
            localStorage.setItem('id', user['_id']);
            _this.router.navigateByUrl('/');
        }, function (err) { return console.log(err); });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(423),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "body,html{\r\n    margin: 0 auto;\r\n}\r\n.nav{\r\n    width:100%;background-color:crimson;color:white;\r\n    margin: 0 auto;\r\n\r\n}\r\n.nav-head{\r\n    padding: 10px 0px 10px 40px;\r\n    display: inline;\r\n}\r\n.nav-inner{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}\r\na:hover {\r\n cursor:pointer;\r\n}\r\n.row{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}\r\na:hover {\r\n cursor:pointer;\r\n}\r\n.row{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 149,
	"./af.js": 149,
	"./ar": 156,
	"./ar-dz": 150,
	"./ar-dz.js": 150,
	"./ar-kw": 151,
	"./ar-kw.js": 151,
	"./ar-ly": 152,
	"./ar-ly.js": 152,
	"./ar-ma": 153,
	"./ar-ma.js": 153,
	"./ar-sa": 154,
	"./ar-sa.js": 154,
	"./ar-tn": 155,
	"./ar-tn.js": 155,
	"./ar.js": 156,
	"./az": 157,
	"./az.js": 157,
	"./be": 158,
	"./be.js": 158,
	"./bg": 159,
	"./bg.js": 159,
	"./bn": 160,
	"./bn.js": 160,
	"./bo": 161,
	"./bo.js": 161,
	"./br": 162,
	"./br.js": 162,
	"./bs": 163,
	"./bs.js": 163,
	"./ca": 164,
	"./ca.js": 164,
	"./cs": 165,
	"./cs.js": 165,
	"./cv": 166,
	"./cv.js": 166,
	"./cy": 167,
	"./cy.js": 167,
	"./da": 168,
	"./da.js": 168,
	"./de": 171,
	"./de-at": 169,
	"./de-at.js": 169,
	"./de-ch": 170,
	"./de-ch.js": 170,
	"./de.js": 171,
	"./dv": 172,
	"./dv.js": 172,
	"./el": 173,
	"./el.js": 173,
	"./en-au": 174,
	"./en-au.js": 174,
	"./en-ca": 175,
	"./en-ca.js": 175,
	"./en-gb": 176,
	"./en-gb.js": 176,
	"./en-ie": 177,
	"./en-ie.js": 177,
	"./en-nz": 178,
	"./en-nz.js": 178,
	"./eo": 179,
	"./eo.js": 179,
	"./es": 181,
	"./es-do": 180,
	"./es-do.js": 180,
	"./es.js": 181,
	"./et": 182,
	"./et.js": 182,
	"./eu": 183,
	"./eu.js": 183,
	"./fa": 184,
	"./fa.js": 184,
	"./fi": 185,
	"./fi.js": 185,
	"./fo": 186,
	"./fo.js": 186,
	"./fr": 189,
	"./fr-ca": 187,
	"./fr-ca.js": 187,
	"./fr-ch": 188,
	"./fr-ch.js": 188,
	"./fr.js": 189,
	"./fy": 190,
	"./fy.js": 190,
	"./gd": 191,
	"./gd.js": 191,
	"./gl": 192,
	"./gl.js": 192,
	"./gom-latn": 193,
	"./gom-latn.js": 193,
	"./he": 194,
	"./he.js": 194,
	"./hi": 195,
	"./hi.js": 195,
	"./hr": 196,
	"./hr.js": 196,
	"./hu": 197,
	"./hu.js": 197,
	"./hy-am": 198,
	"./hy-am.js": 198,
	"./id": 199,
	"./id.js": 199,
	"./is": 200,
	"./is.js": 200,
	"./it": 201,
	"./it.js": 201,
	"./ja": 202,
	"./ja.js": 202,
	"./jv": 203,
	"./jv.js": 203,
	"./ka": 204,
	"./ka.js": 204,
	"./kk": 205,
	"./kk.js": 205,
	"./km": 206,
	"./km.js": 206,
	"./kn": 207,
	"./kn.js": 207,
	"./ko": 208,
	"./ko.js": 208,
	"./ky": 209,
	"./ky.js": 209,
	"./lb": 210,
	"./lb.js": 210,
	"./lo": 211,
	"./lo.js": 211,
	"./lt": 212,
	"./lt.js": 212,
	"./lv": 213,
	"./lv.js": 213,
	"./me": 214,
	"./me.js": 214,
	"./mi": 215,
	"./mi.js": 215,
	"./mk": 216,
	"./mk.js": 216,
	"./ml": 217,
	"./ml.js": 217,
	"./mr": 218,
	"./mr.js": 218,
	"./ms": 220,
	"./ms-my": 219,
	"./ms-my.js": 219,
	"./ms.js": 220,
	"./my": 221,
	"./my.js": 221,
	"./nb": 222,
	"./nb.js": 222,
	"./ne": 223,
	"./ne.js": 223,
	"./nl": 225,
	"./nl-be": 224,
	"./nl-be.js": 224,
	"./nl.js": 225,
	"./nn": 226,
	"./nn.js": 226,
	"./pa-in": 227,
	"./pa-in.js": 227,
	"./pl": 228,
	"./pl.js": 228,
	"./pt": 230,
	"./pt-br": 229,
	"./pt-br.js": 229,
	"./pt.js": 230,
	"./ro": 231,
	"./ro.js": 231,
	"./ru": 232,
	"./ru.js": 232,
	"./sd": 233,
	"./sd.js": 233,
	"./se": 234,
	"./se.js": 234,
	"./si": 235,
	"./si.js": 235,
	"./sk": 236,
	"./sk.js": 236,
	"./sl": 237,
	"./sl.js": 237,
	"./sq": 238,
	"./sq.js": 238,
	"./sr": 240,
	"./sr-cyrl": 239,
	"./sr-cyrl.js": 239,
	"./sr.js": 240,
	"./ss": 241,
	"./ss.js": 241,
	"./sv": 242,
	"./sv.js": 242,
	"./sw": 243,
	"./sw.js": 243,
	"./ta": 244,
	"./ta.js": 244,
	"./te": 245,
	"./te.js": 245,
	"./tet": 246,
	"./tet.js": 246,
	"./th": 247,
	"./th.js": 247,
	"./tl-ph": 248,
	"./tl-ph.js": 248,
	"./tlh": 249,
	"./tlh.js": 249,
	"./tr": 250,
	"./tr.js": 250,
	"./tzl": 251,
	"./tzl.js": 251,
	"./tzm": 253,
	"./tzm-latn": 252,
	"./tzm-latn.js": 252,
	"./tzm.js": 253,
	"./uk": 254,
	"./uk.js": 254,
	"./ur": 255,
	"./ur.js": 255,
	"./uz": 257,
	"./uz-latn": 256,
	"./uz-latn.js": 256,
	"./uz.js": 257,
	"./vi": 258,
	"./vi.js": 258,
	"./x-pseudo": 259,
	"./x-pseudo.js": 259,
	"./yo": 260,
	"./yo.js": 260,
	"./zh-cn": 261,
	"./zh-cn.js": 261,
	"./zh-hk": 262,
	"./zh-hk.js": 262,
	"./zh-tw": 263,
	"./zh-tw.js": 263
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
webpackContext.id = 410;


/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoading\" style=\"position:fixed;top:50%;left:50%;margin-left:-47px; margin-top:-47px;\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n</div>  \r\n<h2 class=\"text-center\" style=\"padding:20px 0px 20px 0px\">Analytics</h2>\r\n<div class=\"row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-3\">\r\n            <div class=\"row\">\r\n                  <div class=\"col-md-2\"></div>\r\n                  <div class=\"col-md-8\">\r\n                        <h3 class=\"text-center\">Overall</h3>\r\n                        <div *ngIf=\"tasks.length > 1\">\r\n                              <canvas baseChart\r\n                                    [data]=\"pieChartDoneNotDoneData\"\r\n                                    [labels]=\"pieChartDoneNotDoneLabels\"\r\n                                    [chartType]=\"pieChartType\"\r\n                                    (chartHover)=\"chartHovered($event)\"\r\n                                    (chartClick)=\"chartClicked($event)\">\r\n                              </canvas>\r\n                        </div>\r\n                  </div>\r\n                  <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <p style=\"margin-top:10%\" class=\"text-center\">Total Number of Tasks added : {{tasks.length}}</p>\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-5\">\r\n            <h3 class=\"text-center\">Yearly</h3>\r\n            <form (ngSubmit)=\"getBarChartForThisParticularYear(yearForm.value)\" #yearForm=\"ngForm\">\r\n                  <div class=\"row\">\r\n                        <div class=\"col-1\"></div>\r\n                        <div class=\"col-md-9 col-7\">\r\n                              <input required [(ngModel)]=\"presentYear\" type=\"number\" name=\"year\" class=\"form-control\" #vYear=\"ngModel\">\r\n                        </div>\r\n                        <div class=\"col-md-2 col-4\">\r\n                              <button type=\"submit\" [disabled]=\"!yearForm.form.valid || presentYear<2000 || presentYear>3000\" class=\"btn\" style=\"background-color:#86C7F3;color:white;\">Submit</button>\r\n                        </div>\r\n                        <div class=\"col-1\"></div>\r\n                        <div class=\"col-md-9 col-7\">\r\n                              <div *ngIf=\"vYear.errors && (vYear.dirty || vYear.touched)\" class=\"alert alert-danger\">\r\n                                    <div [hidden]=\"!vYear.errors.required\">\r\n                                    Year is required\r\n                                    </div>\r\n                              </div>\r\n                                    <div *ngIf=\"presentYear<2000\" class=\"alert alert-danger\">\r\n                                    Year must be greater than 2000\r\n                                    </div>\r\n                                    <div *ngIf=\"presentYear>3000\" class=\"alert alert-danger\">\r\n                                    Year must lesser than 3000\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-4\">\r\n                        </div>\r\n                  </div>\r\n            </form>\r\n            <div *ngIf=\"tasks.length>1\">\r\n                  <canvas baseChart\r\n                        [datasets]=\"barChartData\"\r\n                        [labels]=\"barChartLabels\"\r\n                        [options]=\"barChartOptions\"\r\n                        [legend]=\"barChartLegend\"\r\n                        [chartType]=\"barChartType\"\r\n                        (chartHover)=\"chartHovered($event)\"\r\n                        (chartClick)=\"chartClicked($event)\">\r\n                  </canvas>\r\n            </div>\r\n            <p>\r\n                  Analytics for the Year : {{yearToGetAnalyticsFor}} \r\n            </p>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n</div>"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n        <div class=\"nav-inner\" style=\"width:100%\">\r\n                <h2 class=\"nav-head\" style=\"display:inline\">\r\n                        <a routerLink=\"/\" routerLinkActive=\"active\" style=\"text-decoration:none; color:white;\">To-Do APP</a>\r\n                </h2>\r\n                \r\n                <div style=\"float:right;margin-right:20px;display:inline\">\r\n                        <!-- <span *ngIf=\"globals.getEmail()\">Welcome, {{globals.getEmail()}}</span> -->\r\n                        <span class=\"col\">\r\n                                <span ngbDropdown class=\"d-inline-block\">\r\n                                        <span *ngIf=\"globals.getEmail()\" ngbDropdownToggle style=\"cursor:pointer\">Welcome, {{globals.getEmail()}}</span>\r\n                                <!-- <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button> -->\r\n                                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\r\n                                                <button class=\"dropdown-item\">\r\n                                                        <a routerLink=\"/changePassword\" routerLinkActive=\"active\" style=\"text-decoration:none; color:inherit;\">Change Password</a>\r\n                                                </button>\r\n                                        </div>\r\n                                </span>\r\n                        </span>\r\n                        <button type=\"button\" class=\"btn btn-large btn-secondary\" (click)='logout()' *ngIf=\"globals.getEmail()\" style=\"cursor:pointer;\">\r\n                                Logout\r\n                        </button>\r\n                        \r\n                </div>\r\n        </div>\r\n        \r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6\">\r\n    <h2 style=\"margin-top:10px;\">Change Password</h2>\r\n    <form *ngIf=\"statusSuccess==''\" style=\"padding-top:5px;\" (ngSubmit)=\"onSubmit(changePasswordForm.value)\" #changePasswordForm=\"ngForm\">\r\n      <div style=\"margin-bottom:15px;\">\r\n        <label for=\"currentPassword\">Current Password</label>\r\n        <input type=\"text\" [(ngModel)]=\"currentPassword\" name=\"currentPassword\" class=\"form-control\">\r\n        <label for=\"newPassword\">New Password</label>\r\n        <input type=\"text\" [(ngModel)]=\"newPassword\" name=\"newPassword\" class=\"form-control\">\r\n        <label for=\"confirmNewPassword\">Confirm New Password</label>\r\n        <input type=\"text\" [(ngModel)]=\"confirmNewPassword\" name=\"confirmNewPassword\" class=\"form-control\" #confirmNewP=\"ngModel\">\r\n        <p *ngIf=\"newPassword != confirmNewPassword && confirmNewP.touched\" style=\"color:crimson\">Passwords Do Not Match</p>\r\n        <p *ngIf=\"newPassword == confirmNewPassword && confirmNewP.touched && currentPassword==newPassword\" style=\"color:crimson\">Current Password and New Password have to be different</p>\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"newPassword!=confirmNewPassword || currentPassword==newPassword || newPassword=='' || confirmNewPassword=='' || currentPassword==''\" style=\"cursor:pointer\">Submit</button>\r\n    </form>\r\n    <p *ngIf=\"statusSuccess!=''\" style=\"color:green;font-style:italic\">{{statusSuccess}}</p>\r\n    <p *ngIf=\"statusFailure!=''\" style=\"color:red;font-style:italic\">{{statusFailure}}</p>\r\n  </div>\r\n  <div class=\"col-md-3\"></div>\r\n</div>"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "\r\n<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next;\" (ngModelChange)=dateChanged(model)></ngb-datepicker>\r\n<!--<p>\r\n    Selected Date : {{ selectedDate }}\r\n</p>-->\r\n\r\n"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Forgot Password</h2>\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6\">\r\n        <form (ngSubmit)=\"onSubmit(forgotPassForm.value)\" #forgotPassForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                    <label><strong>Email</strong></label>\r\n                    <input type=\"text\" class=\"form-control\" required minlength=\"4\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" maxlength=\"24\" [(ngModel)]=\"modelEmail\" name=\"email\" id=\"email\" #email=\"ngModel\" placeholder=\"Enter Email Address\">\r\n                    <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                        <div [hidden]=\"!email.errors.required\">\r\n                        Email is required\r\n                        </div>\r\n                        <div [hidden]=\"!email.errors.minlength\">\r\n                        Email must be at least 4 characters long.\r\n                        </div>\r\n                        <div [hidden]=\"!email.errors.maxlength\">\r\n                        Email cannot be more than 24 characters long.\r\n                        </div>\r\n                        <div [hidden]=\"!email.errors.pattern\">\r\n                        Email not following right pattern\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                    <button type=\"submit\" [disabled]=\"!forgotPassForm.form.valid\" class=\"btn btn-warning\" style=\"cursor:pointer\">Submit</button>\r\n                </div>\r\n            </form>\r\n            <br>\r\n            <br>\r\n            <p *ngIf=\"status!=''\" style=\"color:green;font-style: italic;\" class=\"text-center\">{{status}}</p>\r\n\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n</div>"

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

module.exports = "<title>To Do</title>\r\n\r\n<div class=\"container\" *ngIf=\"!globals.getEmail();else app\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h1><span class=\"fa fa-check\"></span> To Do</h1>\r\n        <p>Login or Register with:</p>\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn btn-secondary\"><span class=\"fa fa-user\"></span> Login</a>\r\n        <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"btn btn-secondary\"><span class=\"fa fa-user\"></span> Signup</a>\r\n    </div>\r\n</div>\r\n    <div *ngIf=\"showLoading\" style=\"position:fixed;top:50%;left:50%;margin-left:-47px; margin-top:-47px;\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n    </div>\r\n<ng-template #app>\r\n    <div class=row>\r\n        <div class=\"col-md-3\">\r\n            <div style=\"margin-top:10%;margin-left:8%;\">\r\n                <a routerLink=\"/oldtasks\" routerLinkActive=\"active\" style=\"text-decoration:none;color:inherit;font-size:1.2em;font-weight:bold;\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>  Want to see old tasks?\r\n                </a>\r\n            </div>\r\n            <div style=\"margin-left:8%;padding-top:10px;\">\r\n                <a routerLink=\"/analytics\" routerLinkActive=\"active\" style=\"text-decoration:none;color:inherit;font-size:1.2em;font-weight:bold;\">\r\n                    <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>  How about Analytics?\r\n                </a>\r\n            </div>\r\n            <div style=\"margin-left:8%;padding-top:10px;\">\r\n                <a routerLink=\"/search\" routerLinkActive=\"active\" style=\"text-decoration:none;color:inherit;font-size:1.2em;font-weight:bold;\">\r\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>  Search a Task?\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <form class=\"input-group\" (ngSubmit)=\"addTask(taskForm.value)\" #taskForm=\"ngForm\" style=\"text-align:center;\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelTask\" required minlength=\"1\" maxlength=\"24\" pattern=\"[a-zA-Z0-9\\!\\s\\*\\.\\?]+\" name=\"task\" #task=ngModel>\r\n                <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-secondary\" [disabled]=\"!taskForm.form.valid\" type=\"submit\" style=\"cursor:pointer\">Add Task</button>\r\n                </span>\r\n            </form>\r\n                <div *ngIf=\"task.errors && (task.dirty || task.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!task.errors.required\">\r\n                    Task is required\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.minlength\">\r\n                    Task must be at least 1 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.maxlength\">\r\n                    Task cannot be more than 24 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.pattern\">\r\n                    Task can contain only !, *, ., ?\r\n                    </div>\r\n                </div>\r\n            \r\n            \r\n            <div *ngIf=\"tasks[0]!=null else elseHeader\">\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks</h3>\r\n                <p style=\"text-align:center;\">(Click on a Task if it is completed)</p>\r\n            </div>\r\n            <ng-template #elseHeader>\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks</h3>\r\n                <p style=\"color:green;font-style: italic;text-align:center;\">No Tasks for Today</p>\r\n            </ng-template>\r\n            <p *ngIf=\"error!=''\" style=\"color:red;font-style: italic;text-align:center;\">{{error}}</p>\r\n            <div>\r\n                <ul>\r\n                    <li *ngFor='let task of tasks' class=\"row\">\r\n                        <div class=\"col-md-4\"></div>\r\n                        <div class=\"col-md-4 col-8 text-center tab\" [style.text-decoration]=\"taskDone(task.done)\" (click)=\"toggleTask(task._id,task.done)\">\r\n                            <a class=\"tab-cell\" style=\"text-decoration: none;color: inherit;\">{{task.task}}</a>\r\n                        </div>\r\n                        <div class=\"col-md-4 col-4 text-right\">\r\n                            <button class=\"btn btn-secondary\" (click)=\"deleteTask(task._id)\" style=\"cursor:pointer\">Delete</button>\r\n                        </div>\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n    \r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports = "<!-- views/login.ejs -->\r\n<!doctype html>\r\n<html>\r\n<head>\r\n    <title>To Do</title>\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css\"> <!-- load bootstrap css -->\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\"> <!-- load fontawesome -->\r\n    <style>\r\n        body        { padding-top:80px; }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Login</h1>\r\n\r\n    <!-- show any messages that come back with authentication -->\r\n   <!-- <% if (message.length > 0) { %>\r\n        <div class=\"alert alert-danger\"><%= message %></div>\r\n    <% } %>-->\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" required minlength=\"4\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" maxlength=\"24\" [(ngModel)]=\"modelEmail\" name=\"email\" id=\"email\" #email=\"ngModel\">\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">\r\n                Email is required\r\n                </div>\r\n                <div [hidden]=\"!email.errors.minlength\">\r\n                Email must be at least 4 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.maxlength\">\r\n                Email cannot be more than 24 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.pattern\">\r\n                Email not following right pattern\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" required class=\"form-control\" [(ngModel)]=\"modelPassword\" name=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-warning\">Login</button>\r\n    </form>\r\n    <p style=\"color:red;font-style: italic;\">{{loginstatus}}</p>\r\n    <hr>\r\n    <a routerLink=\"/forgotPassword\" routerLinkActive=\"active\">Forgot Password ?</a>\r\n    <p>Need an account? <a href=\"/signup\">Signup</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

module.exports = "<div class=row>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"text-center\" style=\"margin-top:10%\">\r\n            <app-datepicker (click)=\"getDateFromService()\"></app-datepicker>\r\n        </div>\r\n        <!--<p>\r\n            Selected Date : {{ selectedDate }}\r\n        </p>-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!--<form class=\"input-group\" (ngSubmit)=\"addTask(taskForm.value)\" #taskForm=\"ngForm\" style=\"text-align:center;\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelTask\" required minlength=\"1\" maxlength=\"24\" pattern=\"[a-zA-Z0-9\\!\\s\\*\\.\\?]+\" name=\"task\" #task=ngModel>\r\n            <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-secondary\" [disabled]=\"!taskForm.form.valid\" type=\"submit\">Add Task</button>\r\n            </span>\r\n        </form>\r\n            <div *ngIf=\"task.errors && (task.dirty || task.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!task.errors.required\">\r\n                Task is required\r\n                </div>\r\n                <div [hidden]=\"!task.errors.minlength\">\r\n                Task must be at least 1 characters long.\r\n                </div>\r\n                <div [hidden]=\"!task.errors.maxlength\">\r\n                Task cannot be more than 24 characters long.\r\n                </div>\r\n                <div [hidden]=\"!task.errors.pattern\">\r\n                Task can contain only !, *, ., ?\r\n                </div>\r\n            </div>-->\r\n        <div *ngIf=\"dateToBePrinted==undefined else elseHeader\" style=\"margin-top:3%\">\r\n            <h3 class=\"taskHeader\" style=\"text-align:center;\" >Your Tasks</h3>\r\n            <p style=\"color:green;font-style: italic;text-align:center;\">Please Select a Date</p>\r\n        </div>\r\n        <ng-template #elseHeader>\r\n            <div style=\"margin-top:3%\">\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks on {{ dateToBePrinted }}</h3>\r\n                <div *ngIf=\"tasks[0]!=null else elseP\">\r\n                    <p style=\"text-align:center;\">(Click on a Task if it is completed)</p>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n                <ng-template #elseP>\r\n                    <p style=\"color:green;font-style: italic;text-align:center;\">No Tasks for the day</p>\r\n                </ng-template>\r\n        <p *ngIf=\"error!=''\" style=\"color:red;font-style: italic;text-align:center;\">{{error}}</p>\r\n        <div>\r\n            <ul>\r\n                <li *ngFor='let task of tasks' class=\"row\">\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4 text-center tab\" [style.text-decoration]=\"taskDone(task.done)\" (click)=\"toggleTask(task._id,task.done)\">\r\n                        <a class=\"tab-cell\" style=\"text-decoration: none;color: inherit;\">{{task.task}}</a>\r\n                    </div>\r\n                    <!--<div class=\"col-md-4 text-right\">\r\n                        <button class=\"btn btn-secondary\" (click)=\"deleteTask(task._id)\" >Delete</button>\r\n                    </div>-->\r\n\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"col-md-6\">\r\n        haha\r\n    </div>-->\r\n    <div class=\"col-md-2\"></div>\r\n</div>\r\n<div *ngIf=\"showLoading\" style=\"z-index: 1px;position:fixed;top:50%;left:50%;margin-left:-47px; margin-top:-47px;\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n</div>  \r\n\r\n\r\n"

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports = "<div class=row>\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6\">\r\n    <h2 class=\"text-center\" style=\"padding:20px 0px 20px 0px\">Search Task</h2>\r\n    <input type=\"text\" name=\"search\" [(ngModel)]=\"search\" (input)=\"searchTask(search)\"  class=\"form-control\" placeholder=\"Search a task\">\r\n    <div style=\"padding-top:10px;\">\r\n      <p>Found {{searchedList.length}} entries</p>\r\n      <ul>\r\n        <li *ngFor=\"let task of searchedList\">\r\n          <div><b>Task</b> : {{task.task}}</div>\r\n          <div><b>Created on</b> : {{task.created_at | date}}</div>\r\n          <div *ngIf=\"task.done\">This Task was <b>Done</b></div>\r\n          <div *ngIf=\"!task.done\">This Task was <b>Not done</b></div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\"> </div>\r\n</div>\r\n<div *ngIf=\"showLoading\" style=\"z-index: 1px;position:fixed;top:50%;left:50%;margin-left:-47px; margin-top:-47px;\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n</div>"

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Signup</h1>\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(signupForm.value)\" #signupForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Contact</label>\r\n            <select [(ngModel)]=\"countryCode\" class=\"form-control\" #countryCodeV=\"ngModel\" name=\"countryCode\" id=\"countryCode\" style=\"margin-bottom:1em;\">\r\n                <option *ngFor=\"let c of countries\" [ngValue]=\"c.id\">{{c.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"countryCodeV.touched\">\r\n                <div [hidden]=\"countryCode!=null\" class=\"alert alert-danger\">\r\n                Country Code is required\r\n                </div>\r\n            </div>\r\n            \r\n            <input pattern=\"[0-9]*\" required minlength=\"10\" maxlength=\"10\" class=\"form-control\" [(ngModel)]=\"contactNumber\" name=\"contactNumber\" id=\"contactNumber\" #contactNumberV=\"ngModel\" placeholder=\"Enter Mobile Number\">\r\n            <div *ngIf=\"contactNumberV.errors && (contactNumberV.dirty || contactNumberV.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!contactNumberV.errors.required\">\r\n                Contact Number is required\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.minlength\">\r\n                Contact Number must be 10 digits long.\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.maxlength\">\r\n                Contact Number must be 10 digits long.\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.pattern\">\r\n                Contact Number must contain only digits\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"!signupForm.form.valid || countryCode==null\"  style=\"cursor:pointer;\">Signup</button>\r\n    </form>\r\n\r\n    <hr>\r\n\r\n    <p>Already have an account? <a href=\"/login\">Login</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedataService = (function () {
    function SharedataService() {
    }
    return SharedataService;
}());
SharedataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedataService);

//# sourceMappingURL=sharedata.service.js.map

/***/ })

},[457]);
//# sourceMappingURL=main.bundle.js.map