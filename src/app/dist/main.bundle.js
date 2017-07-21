webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 157;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(177);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authguard_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datepicker_datepicker_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sharedata_service__ = __webpack_require__(61);
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
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'oldtasks', component: __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__["a" /* OldtasksComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */]] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__oldtasks_oldtasks_component__["a" /* OldtasksComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_9__authguard_service__["b" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_9__authguard_service__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_14__sharedata_service__["a" /* SharedataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */]) === "function" && _d || Object])
], LoginGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sharedata_service__ = __webpack_require__(61);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-datepicker',
        template: __webpack_require__(238),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sharedata_service__["a" /* SharedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sharedata_service__["a" /* SharedataService */]) === "function" && _a || Object])
], DatepickerComponent);

var _a;
//# sourceMappingURL=datepicker.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(20);
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
        if (this.globals.getEmail())
            this.getTasks();
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.getTasks = function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(239),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], IndexComponent);

var _a, _b, _c;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(20);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(240),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sharedata_service__ = __webpack_require__(61);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-oldtasks',
        template: __webpack_require__(241),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__sharedata_service__["a" /* SharedataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__sharedata_service__["a" /* SharedataService */]) === "function" && _d || Object])
], OldtasksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=oldtasks.component.js.map

/***/ }),

/***/ 175:
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__countries__ = __webpack_require__(175);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(242),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 177:
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Globals);

var _a;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "body,html{\r\n    margin: 0 auto;\r\n}\r\n.nav{\r\n    width:100%;background-color:crimson;color:white;\r\n    margin: 0 auto;\r\n\r\n}\r\n.nav-head{\r\n    padding: 10px 0px 10px 40px;\r\n    display: inline;\r\n}\r\n.nav-inner{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}\r\na:hover {\r\n cursor:pointer;\r\n}\r\n.row{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}\r\na:hover {\r\n cursor:pointer;\r\n}\r\n.row{\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n        <div class=\"nav-inner\" style=\"width:100%\">\r\n                <h2 class=\"nav-head\" style=\"display:inline\">\r\n                        <a routerLink=\"/\" routerLinkActive=\"active\" style=\"text-decoration:none; color:white;\">To-Do APP</a>\r\n                </h2>\r\n                <div style=\"float:right;margin-right:20px;display:inline\">\r\n                        <span *ngIf=\"globals.getEmail()\">Welcome, {{globals.getEmail()}}</span>\r\n                        \r\n                        <button type=\"button\" class=\"btn btn-large btn-secondary\" (click)='logout()' *ngIf=\"globals.getEmail()\" style=\"cursor:pointer;\">\r\n                                Logout\r\n                        </button>\r\n                        \r\n                </div>\r\n        </div>\r\n        \r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "\r\n<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next;\" (ngModelChange)=dateChanged(model)></ngb-datepicker>\r\n<!--<p>\r\n    Selected Date : {{ selectedDate }}\r\n</p>-->\r\n\r\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<title>To Do</title>\r\n\r\n<div class=\"container\" *ngIf=\"!globals.getEmail();else app\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h1><span class=\"fa fa-check\"></span> To Do</h1>\r\n        <p>Login or Register with:</p>\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn btn-secondary\"><span class=\"fa fa-user\"></span> Login</a>\r\n        <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"btn btn-secondary\"><span class=\"fa fa-user\"></span> Signup</a>\r\n    </div>\r\n</div>\r\n    <div *ngIf=\"showLoading\" style=\"position:fixed;top:43%;left:50%\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n    </div>\r\n<ng-template #app>\r\n    <div class=row>\r\n        <div class=\"col-md-3\">\r\n            <div style=\"margin-top:10%;\" class=\"text-center\">\r\n                <a routerLink=\"/oldtasks\" routerLinkActive=\"active\" style=\"text-decoration:none;color:inherit;font-size:1.2em;font-weight:bold;\">\r\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>  Want to see old tasks?\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <form class=\"input-group\" (ngSubmit)=\"addTask(taskForm.value)\" #taskForm=\"ngForm\" style=\"text-align:center;\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelTask\" required minlength=\"1\" maxlength=\"24\" pattern=\"[a-zA-Z0-9\\!\\s\\*\\.\\?]+\" name=\"task\" #task=ngModel>\r\n                <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-secondary\" [disabled]=\"!taskForm.form.valid\" type=\"submit\" style=\"cursor:pointer\">Add Task</button>\r\n                </span>\r\n            </form>\r\n                <div *ngIf=\"task.errors && (task.dirty || task.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!task.errors.required\">\r\n                    Task is required\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.minlength\">\r\n                    Task must be at least 1 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.maxlength\">\r\n                    Task cannot be more than 24 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.pattern\">\r\n                    Task can contain only !, *, ., ?\r\n                    </div>\r\n                </div>\r\n            \r\n            \r\n            <div *ngIf=\"tasks[0]!=null else elseHeader\">\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks</h3>\r\n                <p style=\"text-align:center;\">(Click on a Task if it is completed)</p>\r\n            </div>\r\n            <ng-template #elseHeader>\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks</h3>\r\n                <p style=\"color:green;font-style: italic;text-align:center;\">No Tasks for Today</p>\r\n            </ng-template>\r\n            <p *ngIf=\"error!=''\" style=\"color:red;font-style: italic;text-align:center;\">{{error}}</p>\r\n            <div>\r\n                <ul>\r\n                    <li *ngFor='let task of tasks' class=\"row\">\r\n                        <div class=\"col-md-4\"></div>\r\n                        <div class=\"col-md-4 text-center tab\" [style.text-decoration]=\"taskDone(task.done)\" (click)=\"toggleTask(task._id,task.done)\">\r\n                            <a class=\"tab-cell\" style=\"text-decoration: none;color: inherit;\">{{task.task}}</a>\r\n                        </div>\r\n                        <div class=\"col-md-4 text-right\">\r\n                            <button class=\"btn btn-secondary\" (click)=\"deleteTask(task._id)\" style=\"cursor:pointer\">Delete</button>\r\n                        </div>\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n    \r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<!-- views/login.ejs -->\r\n<!doctype html>\r\n<html>\r\n<head>\r\n    <title>To Do</title>\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css\"> <!-- load bootstrap css -->\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\"> <!-- load fontawesome -->\r\n    <style>\r\n        body        { padding-top:80px; }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Login</h1>\r\n\r\n    <!-- show any messages that come back with authentication -->\r\n   <!-- <% if (message.length > 0) { %>\r\n        <div class=\"alert alert-danger\"><%= message %></div>\r\n    <% } %>-->\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" required minlength=\"4\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" maxlength=\"24\" [(ngModel)]=\"modelEmail\" name=\"email\" id=\"email\" #email=\"ngModel\">\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">\r\n                Email is required\r\n                </div>\r\n                <div [hidden]=\"!email.errors.minlength\">\r\n                Email must be at least 4 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.maxlength\">\r\n                Email cannot be more than 24 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.pattern\">\r\n                Email not following right pattern\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" required class=\"form-control\" [(ngModel)]=\"modelPassword\" name=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-warning btn-lg\">Login</button>\r\n    </form>\r\n    <p style=\"color:red;font-style: italic;\">{{loginstatus}}</p>\r\n    <hr>\r\n\r\n    <p>Need an account? <a href=\"/signup\">Signup</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=row>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"text-center\" style=\"margin-top:10%\">\r\n            <app-datepicker (click)=\"getDateFromService()\"></app-datepicker>\r\n        </div>\r\n        <!--<p>\r\n            Selected Date : {{ selectedDate }}\r\n        </p>-->\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <!--<form class=\"input-group\" (ngSubmit)=\"addTask(taskForm.value)\" #taskForm=\"ngForm\" style=\"text-align:center;\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelTask\" required minlength=\"1\" maxlength=\"24\" pattern=\"[a-zA-Z0-9\\!\\s\\*\\.\\?]+\" name=\"task\" #task=ngModel>\r\n            <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-secondary\" [disabled]=\"!taskForm.form.valid\" type=\"submit\">Add Task</button>\r\n            </span>\r\n        </form>\r\n            <div *ngIf=\"task.errors && (task.dirty || task.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!task.errors.required\">\r\n                Task is required\r\n                </div>\r\n                <div [hidden]=\"!task.errors.minlength\">\r\n                Task must be at least 1 characters long.\r\n                </div>\r\n                <div [hidden]=\"!task.errors.maxlength\">\r\n                Task cannot be more than 24 characters long.\r\n                </div>\r\n                <div [hidden]=\"!task.errors.pattern\">\r\n                Task can contain only !, *, ., ?\r\n                </div>\r\n            </div>-->\r\n        <div *ngIf=\"dateToBePrinted==undefined else elseHeader\" style=\"margin-top:3%\">\r\n            <h3 class=\"taskHeader\" style=\"text-align:center;\" >Your Tasks</h3>\r\n            <p style=\"color:green;font-style: italic;text-align:center;\">Please Select a Date</p>\r\n        </div>\r\n        <ng-template #elseHeader>\r\n            <div style=\"margin-top:3%\">\r\n                <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks on {{ dateToBePrinted }}</h3>\r\n                <div *ngIf=\"tasks[0]!=null else elseP\">\r\n                    <p style=\"text-align:center;\">(Click on a Task if it is completed)</p>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n                <ng-template #elseP>\r\n                    <p style=\"color:green;font-style: italic;text-align:center;\">No Tasks for the day</p>\r\n                </ng-template>\r\n        <p *ngIf=\"error!=''\" style=\"color:red;font-style: italic;text-align:center;\">{{error}}</p>\r\n        <div>\r\n            <ul>\r\n                <li *ngFor='let task of tasks' class=\"row\">\r\n                    <div class=\"col-md-4\"></div>\r\n                    <div class=\"col-md-4 text-center tab\" [style.text-decoration]=\"taskDone(task.done)\" (click)=\"toggleTask(task._id,task.done)\">\r\n                        <a class=\"tab-cell\" style=\"text-decoration: none;color: inherit;\">{{task.task}}</a>\r\n                    </div>\r\n                    <!--<div class=\"col-md-4 text-right\">\r\n                        <button class=\"btn btn-secondary\" (click)=\"deleteTask(task._id)\" >Delete</button>\r\n                    </div>-->\r\n\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!--<div class=\"col-md-6\">\r\n        haha\r\n    </div>-->\r\n    <div class=\"col-md-2\"></div>\r\n</div>\r\n<div *ngIf=\"showLoading\" style=\"position:fixed;top:43%;left:50%\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n</div>  \r\n\r\n\r\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Signup</h1>\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(signupForm.value)\" #signupForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Contact</label>\r\n            <select [(ngModel)]=\"countryCode\" class=\"form-control\" #countryCodeV=\"ngModel\" name=\"countryCode\" id=\"countryCode\" style=\"margin-bottom:1em;\">\r\n                <option *ngFor=\"let c of countries\" [ngValue]=\"c.id\">{{c.name}}</option>\r\n            </select>\r\n            <div *ngIf=\"countryCodeV.touched\">\r\n                <div [hidden]=\"countryCode!=null\" class=\"alert alert-danger\">\r\n                Country Code is required\r\n                </div>\r\n            </div>\r\n            \r\n            <input pattern=\"[0-9]*\" required minlength=\"10\" maxlength=\"10\" class=\"form-control\" [(ngModel)]=\"contactNumber\" name=\"contactNumber\" id=\"contactNumber\" #contactNumberV=\"ngModel\" placeholder=\"Enter Mobile Number\">\r\n            <div *ngIf=\"contactNumberV.errors && (contactNumberV.dirty || contactNumberV.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!contactNumberV.errors.required\">\r\n                Contact Number is required\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.minlength\">\r\n                Contact Number must be 10 digits long.\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.maxlength\">\r\n                Contact Number must be 10 digits long.\r\n                </div>\r\n                <div [hidden]=\"!contactNumberV.errors.pattern\">\r\n                Contact Number must contain only digits\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <button type=\"submit\" class=\"btn btn-warning btn-lg\" [disabled]=\"!signupForm.form.valid || countryCode==null\"  style=\"cursor:pointer;\">Signup</button>\r\n    </form>\r\n\r\n    <hr>\r\n\r\n    <p>Already have an account? <a href=\"/login\">Login</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedataService);

//# sourceMappingURL=sharedata.service.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.bundle.js.map