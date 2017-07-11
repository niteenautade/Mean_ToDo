webpackJsonp([1,4],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "body,html{\r\n    margin: 0 auto;\r\n}\r\n.nav{\r\n    width:100%;background-color:crimson;color:white;\r\n    margin: 0 auto;\r\n\r\n}\r\n.nav-head{\r\n    padding: 10px 0px 10px 40px;\r\n    display: inline;\r\n}\r\n.nav-inner{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".tab{\r\n    display: table;\r\n    height: 35px;\r\n    overflow: hidden;\r\n}\r\n.tab-cell{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.app-container{\r\n    width: 60%;\r\n    margin:0 auto;     \r\n}\r\n.input-group{\r\n    padding: 40px 0px 40px 0px;\r\n}\r\nli:nth-child(odd){\r\n    background-color : #F2F2F2;\r\n    \r\n}\r\nli:nth-child(even){\r\n    background-color : #FCFCFC;\r\n    \r\n}\r\nul{\r\n    list-style: none;    \r\n}\r\n.taskHeader{\r\n    margin: 0 auto;\r\n    text-align:center;\r\n}\r\nul{\r\n    padding-left: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n        <div class=\"nav-inner\">\r\n                <h2 class=\"nav-head\">\r\n                        <a routerLink=\"/\" routerLinkActive=\"active\" style=\"text-decoration:none; color:white;\">To-Do APP</a>\r\n                </h2>\r\n                <div class=\"pull-right\" style=\"margin-right:20px;\">\r\n                        <span *ngIf=\"globals.getEmail()\">Welcome, {{globals.getEmail()}}</span>\r\n                        <button type=\"button\" class=\"btn btn-large btn-default\" (click)='logout()' *ngIf=\"globals.getEmail()\">\r\n                                Logout\r\n                        </button>\r\n                </div>\r\n        </div>\r\n        \r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<title>To Do</title>\r\n\r\n<div class=\"container\" *ngIf=\"!globals.getEmail();else app\">\r\n    <div class=\"jumbotron text-center\">\r\n        <h1><span class=\"fa fa-check\"></span> To Do</h1>\r\n        <p>Login or Register with:</p>\r\n        <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> Login</a>\r\n        <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"btn btn-default\"><span class=\"fa fa-user\"></span> Signup</a>\r\n    </div>\r\n</div>\r\n    <div *ngIf=\"showLoading\" style=\"position:fixed;top:43%;left:50%\">\r\n      <img src=\"loading.gif\" alt=\"loading\">\r\n    </div>\r\n<ng-template #app>\r\n    <div>\r\n        <div class=\"app-container\">\r\n            <form class=\"input-group\" (ngSubmit)=\"addTask(taskForm.value)\" #taskForm=\"ngForm\" style=\"text-align:center;\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelTask\" required minlength=\"1\" maxlength=\"24\" pattern=\"[a-zA-Z0-9\\!\\s\\*\\.\\?]+\" name=\"task\" #task=ngModel>\r\n                <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" [disabled]=\"!taskForm.form.valid\" type=\"submit\">Add Task</button>\r\n                </span>\r\n            </form>\r\n                <div *ngIf=\"task.errors && (task.dirty || task.touched)\" class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!task.errors.required\">\r\n                    Task is required\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.minlength\">\r\n                    Task must be at least 1 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.maxlength\">\r\n                    Task cannot be more than 24 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!task.errors.pattern\">\r\n                    Task can contain only !, *, ., ?\r\n                    </div>\r\n                </div>\r\n            \r\n            <h3 class=\"taskHeader\" style=\"text-align:center;\">Your Tasks</h3>\r\n            <p style=\"text-align:center;\">(Click on a Task if it is completed)</p>\r\n            <p *ngIf=\"error!=''\" style=\"color:red;font-style: italic;text-align:center;\">{{error}}</p>\r\n            <div>\r\n                <ul>\r\n                    <li *ngFor='let task of tasks' class=\"row\">\r\n                        <div class=\"col-md-4\"></div>\r\n                        <div class=\"col-md-4 text-center tab\" [style.text-decoration]=\"taskDone(task.done)\" (click)=\"toggleTask(task._id,task.done)\">\r\n                            <a href=\"#\" class=\"tab-cell\" style=\"text-decoration: none;color: inherit;\">{{task.task}}</a>\r\n                        </div>\r\n                        <div class=\"col-md-4 text-right\">\r\n                            <button class=\"btn btn-default\" (click)=\"deleteTask(task._id)\" >Delete</button>\r\n                        </div>\r\n\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</ng-template>\r\n\r\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<!-- views/login.ejs -->\r\n<!doctype html>\r\n<html>\r\n<head>\r\n    <title>To Do</title>\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css\"> <!-- load bootstrap css -->\r\n    <link rel=\"stylesheet\" href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\"> <!-- load fontawesome -->\r\n    <style>\r\n        body        { padding-top:80px; }\r\n    </style>\r\n</head>\r\n<body>\r\n<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Login</h1>\r\n\r\n    <!-- show any messages that come back with authentication -->\r\n   <!-- <% if (message.length > 0) { %>\r\n        <div class=\"alert alert-danger\"><%= message %></div>\r\n    <% } %>-->\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" required minlength=\"4\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" maxlength=\"24\" [(ngModel)]=\"modelEmail\" name=\"email\" id=\"email\" #email=\"ngModel\">\r\n            <div *ngIf=\"email.errors && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n                <div [hidden]=\"!email.errors.required\">\r\n                Email is required\r\n                </div>\r\n                <div [hidden]=\"!email.errors.minlength\">\r\n                Email must be at least 4 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.maxlength\">\r\n                Email cannot be more than 24 characters long.\r\n                </div>\r\n                <div [hidden]=\"!email.errors.pattern\">\r\n                Email not following right pattern\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" required class=\"form-control\" [(ngModel)]=\"modelPassword\" name=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-warning btn-lg\">Login</button>\r\n    </form>\r\n    <p style=\"color:red;font-style: italic;\">{{loginstatus}}</p>\r\n    <hr>\r\n\r\n    <p>Need an account? <a href=\"/signup\">Signup</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n  Your user: {{globals.getEmail()}} .\r\n</p>\r\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<div class=\"col-sm-6 col-sm-offset-3\">\r\n\r\n    <h1><span class=\"fa fa-sign-in\"></span> Signup</h1>\r\n\r\n    <!-- LOGIN FORM -->\r\n    <form (ngSubmit)=\"onSubmit(signupForm.value)\" #signupForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button>\r\n    </form>\r\n\r\n    <hr>\r\n\r\n    <p>Already have an account? <a href=\"/login\">Login</a></p>\r\n    <p>Or go <a href=\"/\">home</a>.</p>\r\n\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(86);


/***/ }),

/***/ 85:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 85;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(99);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__(12);
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
        template: __webpack_require__(158),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__global__["a" /* Globals */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_index_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authguard_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__index_index_component__["a" /* IndexComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__authguard_service__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__global__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_10__authguard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
        if (!this.globals.getEmail()) {
            console.log('User is not authenticated. Opening Login page');
            return true;
        }
        else {
            console.log('User is authenticated. So login page cannot be loaded');
            this.router.navigateByUrl('/');
        }
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Globals */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(12);
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
        template: __webpack_require__(159),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], IndexComponent);

var _a, _b, _c;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(12);
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
        template: __webpack_require__(160),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(globals) {
        this.globals = globals;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(161),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__global__["a" /* Globals */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global__ = __webpack_require__(12);
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
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (user) {
        var _this = this;
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
        template: __webpack_require__(162),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__global__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 99:
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

/***/ })

},[193]);
//# sourceMappingURL=main.bundle.js.map