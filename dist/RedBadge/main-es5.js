(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h1>ABOUT US</h1>\r\n  <br/>\r\n\r\n  <p>Here you can find your favorite games as well create reviews for them. You can even store your favorite games as well!\r\n  </p>\r\n  <br/>\r\n  <p>\r\n    We have a great selection of games to choose to review and add to your favorites. Do you see a game from our collection that you are passionate about or is from your childhood that creates a well of nostalgia in yourself? Leave a rating and give it comment for others to see!\r\n  </p>\r\n</div>\r\n<div>\r\n<img id=\"mario\" src=\"../../assets/imgs/luigiYoshiMario.jpg\" alt=\"undefined\" />\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-6 col-md-offset-3\">\r\n      <form [formGroup]=\"addGame\" (ngSubmit)=\"onCreatePost()\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"name\"\r\n            required\r\n            formControlName=\"name\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"genre\">Genre</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"genre\"\r\n            required\r\n            formControlName=\"genre\"\r\n          ></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"year\">Year</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"year\"\r\n            required\r\n            formControlName=\"year\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"publisher\">Publisher</label>\r\n          <textarea\r\n            class=\"form-control\"\r\n            id=\"publisher\"\r\n            required\r\n            formControlName=\"publisher\"\r\n          ></textarea>\r\n        </div>\r\n        <button\r\n       \r\n          class=\"btn btn-info btn-sm mr-1\"\r\n          type=\"submit\"\r\n          [disabled]=\"!addGame.valid\"\r\n          mat-dialog-close>\r\n          Add a Game\r\n        </button>\r\n        <button class=\"btn btn-info btn-sm mr-1\" mat-dialog-close>Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n <alert></alert>\r\n<router-outlet></router-outlet>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"slideshow\" class=\"carousel\">\r\n    <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide \" data-ride=\"carousel\">\r\n      <div class=\"carousel-inner\">\r\n         <div class=\"carousel-item active\" data-interval=\"6000\">\r\n        <img src=\"../../assets/imgs/1-video-game-wallpapers.jpg\" class=\"d-block w-100\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\" data-interval=\"6000\">\r\n        <img src=\"../../assets/imgs/2-video-game-wallpapers.jpg \"class=\"d-block w-100 \" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\" data-interval=\"6000\">\r\n        <img src=\"../../assets/imgs/3-video-game-wallpapers.jpg\" class=\"d-block w-100\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n      </div>\r\n    \r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-games/edit-games.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-games/edit-games.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Edit Games</h1>\r\n<div mat-dialog-content>\r\n    <form [formGroup]=\"EditGame\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field>\r\n            <mat-label>name</mat-label>\r\n            <input matInput formControlName=\"name\" type=\"text\" required />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Genre</mat-label>\r\n            <input matInput formControlName=\"genre\" type=\"text\" required />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Year</mat-label>\r\n            <input matInput formControlName=\"year\" type=\"text\" required />\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <mat-label>Publisher</mat-label>\r\n            <input matInput formControlName=\"publisher\" type=\"text\" required />\r\n        </mat-form-field>\r\n    </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n    <button mat-button [mat-dialog-close]=\"this.EditGame.value\" [disabled]=\"!EditGame.valid\">Update</button>\r\n</div>\r\n\r\n        \r\n    \r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>Favorite Games</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Genre</th>\n          <th scope=\"col\">Year</th>\n          <th scope=\"col\">Publisher</th>\n          <th scope=\"col\">User Options</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let game of gamesData\">\n          <td>{{game.id}}</td>\n          <td>{{game.name}}</td>\n          <td>{{game.genre}}</td>\n          <td>{{game.year}}</td>\n          <td>{{game.publisher}}</td>\n          <td style=\"display: flex\">\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"openFavUpdate(game)\">Edit</button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm ml-1\" (click)=\"deleteFavGame(game.id)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/games.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/games.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <h3>Games</h3>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">ID</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Genre</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Publisher</th>\r\n        <th scope=\"col\">User Options</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let game of gamesData\">\r\n        <td>{{game.id}}</td>\r\n        <td>{{game.name}}</td>\r\n        <td>{{game.genre}}</td>\r\n        <td>{{game.year}}</td>\r\n        <td>{{game.publisher}}</td>\r\n        <td style=\"display: flex\">\r\n          <button type=\"button\" class=\"btn btn-info btn-sm mr-1\" (click)=\"addToFavs(game)\">Add To Favorites</button>\r\n          <button *ngIf=\"isAdmin()\" type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"openUpdate(game)\">Edit</button>\r\n          <button *ngIf=\"isAdmin()\" type=\"button\" class=\"btn btn-danger btn-sm ml-1\" (click)=\"deleteGame(game.id)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button type=\"button\" class=\"btn btn-info btn-sm mr-1\" (click)=\"openAddGames(game)\">Add a Game</button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav\">\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row id=\"headerTopRow\">\r\n        <div id=\"mainTitle\">My Application</div>\r\n        <h4>Welcome{{User}}</h4>\r\n      </mat-toolbar-row>\r\n  \r\n      <mat-toolbar-row>\r\n        <div class=\"linkButtons\">\r\n          <button mat-stroked-button color=\"accent\" routerLink=\"/\">Home&nbsp;<mat-icon class=\"navIcon\">home</mat-icon>\r\n          </button>\r\n          <button mat-stroked-button color=\"accent\" routerLink=\"/about\">About&nbsp;<mat-icon class=\"navIcon\">sms\r\n            </mat-icon>\r\n          </button>\r\n          <button mat-stroked-button color=\"accent\" routerLink=\"/add\">Add Your Favorite Game&nbsp;<mat-icon class=\"navIcon\">whatshot\r\n            </mat-icon></button>\r\n          <button mat-stroked-button color=\"accent\" routerLink=\"/games\">Games&nbsp;<mat-icon class=\"navIcon\">\r\n              videogame_asset\r\n            </mat-icon></button>\r\n          <button id=\"signBtn\" mat-stroked-button color=\"accent\" routerLink=\"/login\">Login&nbsp;\r\n            <mat-icon>person\r\n            </mat-icon></button>\r\n          <button id=\"signBtn\" mat-stroked-button color=\"accent\" routerLink=\"/register\">Register&nbsp;\r\n            <mat-icon>person\r\n            </mat-icon></button>\r\n        </div>\r\n        <div>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin</a>\r\n     \r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-carousel></app-carousel>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"login\">\r\n<h2>Login</h2>\r\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"userName\">Username</label>\r\n        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\r\n        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        </div>\r\n    </div> \r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Login\r\n        </button>\r\n        <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n</form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\r\n    \r\n    <div class=\"navbar-nav\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Home</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/about\">About</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/games\">Games</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/favorites\">My Favorites</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/addGame\">Add a Game</a>\r\n        <a id=\"logout\" class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\r\n        <h3>Welcome {{currentUser.user.userName}}</h3>\r\n    </div>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"register\">\r\n<h2>Register</h2>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n        <label for=\"userName\">Username</label>\r\n        <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\r\n        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n            Register\r\n        </button>\r\n        <a routerLink=\"/login\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n</form>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/about/about.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  \r\n}\r\n#mario {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIFxyXG59XHJcbiNtYXJpbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/add-game/add-game.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/add-game/add-game.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n    \r\n}\r\n.row{\r\n    width: 210%;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n}\r\n.form-control{\r\n    width: 100%;\r\n    border: 1px solid;\r\n}\r\nbutton{\r\n    padding: 2px;\r\n    margin-left: 3px;\r\n    size: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWdhbWUvYWRkLWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVOzs7QUFHZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVOztBQUVkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkZC1nYW1lL2FkZC1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnJvd3tcclxuICAgIHdpZHRoOiAyMTAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBzaXplOiAxMHB4O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/add-game/add-game.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/add-game/add-game.component.ts ***!
          \************************************************/
        /*! exports provided: AddGameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGameComponent", function () { return AddGameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AddGameComponent = /** @class */ (function () {
                function AddGameComponent(dbService, fb) {
                    this.dbService = dbService;
                    this.fb = fb;
                    this.created = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.gamesData = [];
                }
                AddGameComponent.prototype.ngOnInit = function () {
                    this.getAllGames();
                    this.addGame = this.fb.group({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                        genre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                        year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                        publisher: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
                    });
                };
                AddGameComponent.prototype.getAllGames = function () {
                    var _this = this;
                    //Get saved list of students
                    this.dbService.getAllGames().subscribe(function (response) {
                        console.log(response);
                        _this.gamesData = response;
                    });
                };
                AddGameComponent.prototype.onCreatePost = function () {
                    // Send Http request
                    this.response = this.dbService.createGames(this.addGame.value);
                    this.response.subscribe(function (res) { return console.log(res); });
                    this.addGame.reset();
                    this.created.emit();
                    this.getAllGames();
                };
                return AddGameComponent;
            }());
            AddGameComponent.ctorParameters = function () { return [
                { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AddGameComponent.prototype, "created", void 0);
            AddGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-game.component.css */ "./src/app/add-game/add-game.component.css")).default]
                })
            ], AddGameComponent);
            /***/ 
        }),
        /***/ "./src/app/alert/alert.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/alert/alert.component.ts ***!
          \******************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return AlertComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
            var AlertComponent = /** @class */ (function () {
                function AlertComponent(alertService) {
                    this.alertService = alertService;
                }
                AlertComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.alertService.getAlert()
                        .subscribe(function (message) {
                        switch (message && message.type) {
                            case 'success':
                                message.cssClass = 'alert alert-success';
                                break;
                            case 'error':
                                message.cssClass = 'alert alert-danger';
                                break;
                        }
                        _this.message = message;
                    });
                };
                AlertComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return AlertComponent;
            }());
            AlertComponent.ctorParameters = function () { return [
                { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
            ]; };
            AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html")).default })
            ], AlertComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: appRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () { return appRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
            /* harmony import */ var _add_game_add_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-game/add-game.component */ "./src/app/add-game/add-game.component.ts");
            /* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
            /* harmony import */ var _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-games/edit-games.component */ "./src/app/edit-games/edit-games.component.ts");
            var routes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
                { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"] },
                { path: 'addGame', component: _add_game_add_game_component__WEBPACK_IMPORTED_MODULE_8__["AddGameComponent"] },
                { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"] },
                { path: 'edit', component: _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_10__["EditGamesComponent"] },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _add_game_add_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-game/add-game.component */ "./src/app/add-game/add-game.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
            /* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
            /* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
            /* harmony import */ var _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-games/edit-games.component */ "./src/app/edit-games/edit-games.component.ts");
            /* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            // import { RouterModule } from '@angular/router';
            // Material
            // const routes = [
            //   {path: '', component: HomeComponent},
            //   {path: 'about', component: AboutComponent},
            //   {path: 'add', component:AddGameComponent},
            //   {path: 'games', component:GamesComponent},
            //   {path: 'login', component: LoginComponent },
            //   {path: 'register', component: RegisterComponent  },
            //   // {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],data: { roles: [Role.Admin]} },
            //   {path: '**', redirectTo: '/' }
            // ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                        _games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                        _add_game_add_game_component__WEBPACK_IMPORTED_MODULE_5__["AddGameComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                        _alert_alert_component__WEBPACK_IMPORTED_MODULE_23__["AlertComponent"],
                        _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                        _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_24__["FavoritesComponent"],
                        _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_25__["EditGamesComponent"],
                        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_26__["CarouselComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_27__["NavbarComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["appRoutingModule"],
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/carousel/carousel.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/carousel/carousel.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/carousel/carousel.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/carousel/carousel.component.ts ***!
          \************************************************/
        /*! exports provided: CarouselComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () { return CarouselComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CarouselComponent = /** @class */ (function () {
                function CarouselComponent() {
                }
                CarouselComponent.prototype.ngOnInit = function () {
                };
                return CarouselComponent;
            }());
            CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-carousel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carousel/carousel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")).default]
                })
            ], CarouselComponent);
            /***/ 
        }),
        /***/ "./src/app/edit-games/edit-games.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/edit-games/edit-games.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZ2FtZXMvZWRpdC1nYW1lcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/edit-games/edit-games.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/edit-games/edit-games.component.ts ***!
          \****************************************************/
        /*! exports provided: EditGamesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGamesComponent", function () { return EditGamesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var EditGamesComponent = /** @class */ (function () {
                function EditGamesComponent(activatedRoute, router, formBuilder, databaseService, data) {
                    this.activatedRoute = activatedRoute;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.databaseService = databaseService;
                    this.data = data;
                    this.id = null;
                }
                EditGamesComponent.prototype.ngOnInit = function () {
                    console.log(this.data);
                    this.EditGame = this.formBuilder.group({
                        id: this.data.id,
                        name: this.data.name,
                        genre: this.data.genre,
                        year: this.data.year,
                        publisher: this.data.publisher
                    });
                };
                return EditGamesComponent;
            }());
            EditGamesComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], EditGamesComponent.prototype, "game", void 0);
            EditGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-games-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-games/edit-games.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-games.component.css */ "./src/app/edit-games/edit-games.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
            ], EditGamesComponent);
            /***/ 
        }),
        /***/ "./src/app/favorites/favorites.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/favorites/favorites.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/favorites/favorites.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/favorites/favorites.component.ts ***!
          \**************************************************/
        /*! exports provided: FavoritesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () { return FavoritesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-games/edit-games.component */ "./src/app/edit-games/edit-games.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var FavoritesComponent = /** @class */ (function () {
                function FavoritesComponent(DatabaseService, http, dialog) {
                    this.DatabaseService = DatabaseService;
                    this.http = http;
                    this.dialog = dialog;
                    this.toggle = false;
                    this.gamesData = [];
                }
                FavoritesComponent.prototype.ngOnInit = function () {
                    this.getAllFavGames();
                };
                FavoritesComponent.prototype.getAllFavGames = function () {
                    var _this = this;
                    //Get saved list of students
                    this.DatabaseService.getAllFavGames().subscribe(function (response) {
                        console.log(response);
                        _this.gamesData = response;
                    });
                };
                FavoritesComponent.prototype.deleteFavGame = function (game) {
                    var _this = this;
                    this.DatabaseService.deleteFavGame(game).subscribe(function (response) {
                        //Update list after delete is successful
                        console.log(response);
                        _this.getAllFavGames();
                    });
                };
                FavoritesComponent.prototype.openFavUpdate = function (game) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_4__["EditGamesComponent"], {
                        data: game
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        _this.response$ = _this.DatabaseService.updateFavGames(res.id, res);
                        _this.response$.subscribe(function (res) {
                            console.log(res);
                            _this.getAllFavGames();
                        });
                    });
                };
                return FavoritesComponent;
            }());
            FavoritesComponent.ctorParameters = function () { return [
                { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-favorites',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")).default]
                })
            ], FavoritesComponent);
            /***/ 
        }),
        /***/ "./src/app/games/games.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/games/games.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".deck{\r\n    display: inline-block;\r\n}\r\n\r\n.card {\r\n    box-shadow: 0 0.5em 1em rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 30vw;\r\n    text-align: center;\r\n}\r\n\r\n.card:hover{\r\n    box-shadow: 0.5em 0.5em 2em rgba(0,0,0,0.2);\r\n\r\n}\r\n\r\n.cardContainer {\r\n    padding: 1em 2em;\r\n}\r\n\r\n.isAdmin{\r\n    display: inherit;\r\n}\r\n\r\n.notAdmin{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQzs7QUFFL0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWNre1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDFlbSByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMC41ZW0gMC41ZW0gMmVtIHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcbn1cclxuXHJcbi5jYXJkQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbn1cclxuLmlzQWRtaW57XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcbi5ub3RBZG1pbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/games/games.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/games/games.component.ts ***!
          \******************************************/
        /*! exports provided: GamesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function () { return GamesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
            /* harmony import */ var _edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-games/edit-games.component */ "./src/app/edit-games/edit-games.component.ts");
            /* harmony import */ var _add_game_add_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-game/add-game.component */ "./src/app/add-game/add-game.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var GamesComponent = /** @class */ (function () {
                // modalRef: BsModalRef;
                function GamesComponent(DatabaseService, http, dialog) {
                    this.DatabaseService = DatabaseService;
                    this.http = http;
                    this.dialog = dialog;
                    this.toggle = false;
                    this.gamesData = [];
                }
                GamesComponent.prototype.ngOnInit = function () {
                    this.isAdmin();
                    this.getAllGames();
                };
                // postGames(): void {
                //   this.game$ = this.DatabaseService.getPizzasByUser()
                //   this.stuff = this.DatabaseService.getUser()
                //   this.stuff.subscribe(res => {
                //     this.stuff = res
                //   })
                // }
                GamesComponent.prototype.isAdmin = function () {
                    var user = sessionStorage.getItem("username");
                    if (user === "admin") {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                GamesComponent.prototype.setToggle = function () {
                    var setToggle = !this.toggle;
                };
                GamesComponent.prototype.getAllGames = function () {
                    var _this = this;
                    //Get saved list of students
                    this.DatabaseService.getAllGames().subscribe(function (response) {
                        console.log(response);
                        _this.gamesData = response;
                    });
                };
                GamesComponent.prototype.deleteGame = function (game) {
                    var _this = this;
                    this.DatabaseService.deleteGame(game).subscribe(function (response) {
                        //Update list after delete is successful
                        console.log(response);
                        _this.getAllGames();
                    });
                };
                GamesComponent.prototype.openUpdate = function (game) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_edit_games_edit_games_component__WEBPACK_IMPORTED_MODULE_4__["EditGamesComponent"], {
                        data: game
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        _this.response$ = _this.DatabaseService.updateGames(res.id, res);
                        _this.response$.subscribe(function (res) {
                            console.log(res);
                            _this.getAllGames();
                        });
                    });
                };
                GamesComponent.prototype.openAddGames = function (game) {
                    var _this = this;
                    var dialogRef = this.dialog.open(_add_game_add_game_component__WEBPACK_IMPORTED_MODULE_5__["AddGameComponent"], {
                        data: game
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        _this.getAllGames();
                    });
                };
                //add to favs
                GamesComponent.prototype.addToFavs = function (game) {
                    var _this = this;
                    console.log(game);
                    this.DatabaseService.addFavGame(game).subscribe(function (response) {
                        console.log(response);
                        _this.getAllGames();
                    });
                };
                return GamesComponent;
            }());
            GamesComponent.ctorParameters = function () { return [
                { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
            GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-games',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/games.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")).default]
                })
            ], GamesComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n#headerTopRow{\r\n    justify-content: center;\r\n}\r\n/* .linkButtons {\r\n    padding: .3em;\r\n} */\r\n.linkButtons a {\r\n    margin: .4em;\r\n}\r\n/* #signBtn {\r\n    margin-left: 52vw;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4jaGVhZGVyVG9wUm93e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLyogLmxpbmtCdXR0b25zIHtcclxuICAgIHBhZGRpbmc6IC4zZW07XHJcbn0gKi9cclxuLmxpbmtCdXR0b25zIGEge1xyXG4gICAgbWFyZ2luOiAuNGVtO1xyXG59XHJcbi8qICNzaWduQnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MnZ3O1xyXG59ICovXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(Auth) {
                    this.Auth = Auth;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    // this.showUser();
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/helpers/auth.guard.ts": 
        /*!***************************************!*\
          !*** ./src/app/helpers/auth.guard.ts ***!
          \***************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        // authorised so return true
                        return true;
                    }
                    // not logged in so redirect to login page with the return url
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/helpers/error.interceptor.ts": 
        /*!**********************************************!*\
          !*** ./src/app/helpers/error.interceptor.ts ***!
          \**********************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            // auto logout if 401 response returned from api
                            _this.authenticationService.logout();
                            location.reload(true);
                        }
                        var error = err.error.message || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/app/helpers/jwt.interceptor.ts": 
        /*!********************************************!*\
          !*** ./src/app/helpers/jwt.interceptor.ts ***!
          \********************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    // add authorization header with jwt token if available
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token) {
                        request = request.clone({
                            setHeaders: {
                                'Content-Type': 'application/json',
                                'Authorization': 'this.authenticationService.currentUser.token'
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(authenticationService, userService) {
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.users = [];
                    this.currentUser = this.authenticationService.currentUserValue;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.loadAllUsers();
                };
                HomeComponent.prototype.deleteUser = function (id) {
                    var _this = this;
                    this.userService.delete(id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                        .subscribe(function () { return _this.loadAllUsers(); });
                };
                HomeComponent.prototype.loadAllUsers = function () {
                    var _this = this;
                    this.userService.getAll()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                        .subscribe(function (users) { return _this.users = users; });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#login{\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%)\r\n\r\n}\r\n.form-control{\r\n    width: 100%;\r\n    text-align: left;\r\n    border: 1px solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEI7O0FBRUo7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
            /* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, route, router, authenticationService, alertService, databaseService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.alertService = alertService;
                    this.databaseService = databaseService;
                    this.loading = false;
                    this.submitted = false;
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // reset alerts on submit
                    this.alertService.clear();
                    // stop here if form is invalid
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.login(this.f.userName.value, this.f.password.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.databaseService.session(data.sessionToken);
                        _this.router.navigate([_this.returnUrl]);
                        console.log(data);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
                { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
                { type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default, styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default] })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navbar/navbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h3 {\r\n    padding-left: 2em;\r\n    padding-top: .3em;\r\n    align-content: center;\r\n    color: #f1f1f1;\r\n}\r\n#logout {\r\n    color: #f1f1f1f1;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAuM2VtO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuI2xvZ291dCB7XHJcbiAgICBjb2xvcjogI2YxZjFmMWYxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(router, authenticationService) {
                    var _this = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                }
                // user = this.currentUser.user.userName;
                NavbarComponent.prototype.ngOnInit = function () {
                };
                NavbarComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/login']);
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/register/register.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/register/register.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n#register{\r\n    margin: 0;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-right: -50%;\r\n    transform: translate(-50%, -50%)\r\n\r\n}\r\n.form-control{\r\n    width: 100%;\r\n    text-align: left;\r\n    border: 1px solid;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCOztBQUVKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3JlZ2lzdGVye1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG5cclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/register/register.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    // redirect to home if already logged in
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
                    });
                };
                Object.defineProperty(RegisterComponent.prototype, "f", {
                    // convenience getter for easy access to form fields
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    // reset alerts on submit
                    this.alertService.clear();
                    // stop here if form is invalid
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.userService.register(this.registerForm.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Registration successful', true);
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default, styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default] })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/services/alert.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/alert.service.ts ***!
          \*******************************************/
        /*! exports provided: AlertService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return AlertService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AlertService = /** @class */ (function () {
                function AlertService(router) {
                    var _this = this;
                    this.router = router;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.keepAfterRouteChange = false;
                    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
                    this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            if (_this.keepAfterRouteChange) {
                                // only keep for a single route change
                                _this.keepAfterRouteChange = false;
                            }
                            else {
                                // clear alert message
                                _this.clear();
                            }
                        }
                    });
                }
                AlertService.prototype.getAlert = function () {
                    return this.subject.asObservable();
                };
                AlertService.prototype.success = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'success', text: message });
                };
                AlertService.prototype.error = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'error', text: message });
                };
                AlertService.prototype.clear = function () {
                    // clear by calling subject.next() without parameters
                    this.subject.next();
                };
                return AlertService;
            }());
            AlertService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AlertService);
            /***/ 
        }),
        /***/ "./src/app/services/authentication.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/authentication.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
            var apiURL = 'http://localhost:3000';
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (userName, password) {
                    var _this = this;
                    return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["APIURL"] + "/auth/signin", { userName: userName, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        sessionStorage.setItem("username", user.user.userName);
                        _this.currentUserSubject.next(user);
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage and set current user to null
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/services/database.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/database.service.ts ***!
          \**********************************************/
        /*! exports provided: DatabaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function () { return DatabaseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
            var DatabaseService = /** @class */ (function () {
                function DatabaseService(http) {
                    this.http = http;
                    // HttpClient: any;
                    this.error = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    //   API URL
                    this.gamesURL = "http://" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["APIURL"] + "/games/";
                    //fav games URL
                    this.favsURL = "http://" + _environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["APIURL"] + "/favs/";
                }
                DatabaseService.prototype.session = function (token) {
                    sessionStorage.setItem('token', token);
                };
                // Http Options
                DatabaseService.prototype.httpOptions = function () {
                    if (sessionStorage.getItem('token')) {
                        return {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                                "Content-Type": "application/json",
                                "Authorization": sessionStorage.getItem('token')
                            })
                        };
                    }
                    else {
                        return {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                                "Content-Type": "application/json"
                            })
                        };
                    }
                };
                // Get games data
                DatabaseService.prototype.getAllGames = function () {
                    return this.http
                        .get(this.gamesURL, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                //Get Fav Games
                DatabaseService.prototype.getAllFavGames = function () {
                    return this.http
                        .get(this.favsURL, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                // getGames(id: number): Observable
                //   const url = `${this.gamesURL}${11}`;
                //   return this.http.get<Games>(url).pipe(
                //     tap(_ => console.log(`fetched game id=${11}`)),
                //     catchError(this.handleError)
                //   );
                // }
                DatabaseService.prototype.deleteGame = function (game) {
                    return this.http
                        .delete("" + this.gamesURL + game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DatabaseService.prototype.deleteFavGame = function (game) {
                    return this.http
                        .delete("" + this.gamesURL + game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                // // Add a New Game
                // addGames(newGame):any {
                //   return this.http
                //     .post<any>(this.gamesURL, newGame)
                //     .pipe(
                //       retry(2),
                //       catchError(this.handleError)
                //     )
                // }
                // Post new game
                DatabaseService.prototype.createAndStoreGame = function () {
                };
                DatabaseService.prototype.updateGames = function (id, game) {
                    console.log();
                    var url = "" + this.gamesURL + id;
                    return this.http
                        .put(url, game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                //fav games
                DatabaseService.prototype.updateFavGames = function (id, game) {
                    console.log();
                    var url = "" + this.favsURL + id;
                    return this.http
                        .put(url, game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                // Handle API errors
                DatabaseService.prototype.handleError = function (error) {
                    if (error.error instanceof ErrorEvent) {
                        // A client-side or network error occurred. Handle it accordingly.
                        console.error('An error occurred:', error.error.message);
                    }
                    else {
                        // The backend returned an unsuccessful response code.
                        // The response body may contain clues as to what went wrong,
                        console.error("Backend returned code " + error.status + ", " +
                            ("body was: " + error.error));
                    }
                    // return an observable with a user-facing error message
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
                };
                ;
                // // Add a New Game
                DatabaseService.prototype.createGames = function (game) {
                    return this.http
                        .post(this.gamesURL, game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                DatabaseService.prototype.addFavGame = function (game) {
                    return this.http
                        .post(this.favsURL, game, this.httpOptions())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                return DatabaseService;
            }());
            DatabaseService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root',
                })
            ], DatabaseService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
            var apiURL = 'http://localhost:3000';
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getAll = function () {
                    return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"] + "/auth");
                };
                UserService.prototype.register = function (user) {
                    return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"] + "/auth/signup", user);
                };
                UserService.prototype.delete = function (id) {
                    return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"] + "/auth/" + id);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.prod.ts": 
        /*!**********************************************!*\
          !*** ./src/environments/environment.prod.ts ***!
          \**********************************************/
        /*! exports provided: APIURL */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function () { return APIURL; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var APIURL = '';
            switch (window.location.hostname) {
                // this is the deployed angular application
                case 'https://redbadgeserver.herokuapp.com':
                    // this is the full url of your deployed API
                    APIURL = 'https://redbadgeserver.herokuapp.com';
                    break;
                default:
                    // this is the local host name of your API
                    APIURL = 'http://localhost:4200';
            }
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                apiURL: "http://localhost:3000"
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\ddluf\OneDrive\Desktop\Red Badge\Client\RedBadge\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map