webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div profile-image>\n    <!-- <img src='/assets/images/headshot_portfolio.jpg'> -->\n</div>\n<h1>Hi, I'm Jing.</h1>\n<div class=\"profile-content\">\n<p>I'm a <strong>Master's of Information Management and Systems student</strong> at UC Berkeley's School of Information. I'm focusing on <strong>UX design</strong> because I enjoy anticipating people's needs. Whether by pouring someone a cup of tea or designing an intuitive user flow, I'm always looking for how I can use my skills to build a more organized and empathetic world.</p>\n<br>\n<p>Born in China, an early love of reading fueled by fiction from my local library brought me to appreciate the multitude of characters and views that literature offered. After double majoring in English lit and Chinese and graduating from UC Berkeley with highest honors, I began to become interested in design because it was a practical application of my ability to empathize.</p>\n<br>\n<p>When not designing digital applications, you'll find me baking cakes, playing with watercolor, or exploring cool spots in the East Bay. </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ndiv[profile-image] {\n  height: 250px;\n  width: 250px;\n  border-radius: 250px;\n  background: url(/assets/images/headshot_portfolio.jpg);\n  background-position: 64%;\n  background-size: 150%; }\n\ndiv.profile-content {\n  padding-left: 150px;\n  padding-right: 150px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<content>\n    <router-outlet></router-outlet>\n</content>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_item_portfolio_item_component__ = __webpack_require__("../../../../../src/app/portfolio-item/portfolio-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_item_detail_portfolio_item_detail_component__ = __webpack_require__("../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_7__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'portfolioItemDetailTemplate', component: __WEBPACK_IMPORTED_MODULE_9__portfolio_item_detail_portfolio_item_detail_component__["a" /* PortfolioItemDetailComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__portfolio_item_portfolio_item_component__["a" /* PortfolioItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_item_detail_portfolio_item_detail_component__["a" /* PortfolioItemDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div logo-header routerLink=\"/portfolio\" routerLinkActive=\"active\">\n  <div first-name>\n    <span>J</span><span first-name-fade>ing&nbsp;</span>\n  </div>\n  <div last-name>\n    <span>X</span><span last-name-fade>iong</span>\n  </div>\n</div>\n<!-- <div nav-menu> -->\n  <nav>\n    <a routerLink=\"/portfolio\" routerLinkActive=\"active\">\n      Portfolio\n    </a>\n    <a routerLink=\"/about\" routerLinkActive=\"active\">\n      About\n    </a>\n  </nav>\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 8vh;\n  min-height: 1vh;\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 3vh 5vw 3vh 5vw; }\n\ndiv[logo-header] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ndiv[logo-header] div[first-name] {\n    font-size: 32px; }\n\ndiv[logo-header] div[last-name] {\n    font-size: 32px; }\n\nnav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nnav a {\n    margin: 0 20px;\n    color: black;\n    text-decoration: none; }\n\nnav a.active {\n      border-bottom: 2px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstNameElement = this.elementRef.nativeElement.querySelector('[first-name-fade]');
        this.lastNameElement = this.elementRef.nativeElement.querySelector('[last-name-fade]');
        this.renderer.listen(window, "scroll", function () {
            _this.renderer.setStyle(_this.firstNameElement, 'opacity', 1 - (document.scrollingElement.scrollTop / 100));
            _this.renderer.setStyle(_this.firstNameElement, 'letter-spacing', -(document.scrollingElement.scrollTop / 8) + 'px');
            _this.renderer.setStyle(_this.lastNameElement, 'opacity', 1 - (document.scrollingElement.scrollTop / 100));
            _this.renderer.setStyle(_this.lastNameElement, 'letter-spacing', -(document.scrollingElement.scrollTop / 8) + 'px');
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'height', 'calc(8vh - ' + document.scrollingElement.scrollTop + 'px)');
            if (document.scrollingElement.scrollTop > 0) {
                _this.renderer.setStyle(_this.elementRef.nativeElement, 'box-shadow', 'black 0px 1px 8px -3px');
            }
            else {
                _this.renderer.setStyle(_this.elementRef.nativeElement, 'box-shadow', 'none');
            }
        });
        this.renderer.setStyle(this.elementRef.nativeElement, 'transition', 'height 300ms');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div text-intro style=\"background-color:#6D7993\">\n    <div text-intro-title>\n        Case Study: Cal Energy Corps\n    </div>\n    <div text-intro-body>Designing a comprehensive student internship website by integrating student, mentor, and donor perspectives.</div>\n\n</div>\n\n<!-- <div image-banner><img src=\"/assets/cec/cec_new_banner.png\"></div> -->\n\n<div text-section>\n    <div text-section-category>The problem</div>\n    <div text-section-title>Confusing Navigation</div>\n    <div text-section-body>In the spring of 2016, while working for the Berkeley Energy and Climate Institute, I took over management of the Cal Energy Corps program. It was a unique internship program that allowed undergraduate students to do cutting-edge research on energy and climate solutions in universities and nonprofits around the world. However, information about the program was buried beneath a confusing navigation bar on a general departmental website.</div>\n    <div text-section-image>\n        <img src='/assets/cec/CEC_original_screenshot.png'>\n        <div text-section-image-caption>A screenshot of the navigation on the departmental site. Users had to mouse carefully over many layers of dropdown menus.</div>\n    </div>\n    <div text-section-body>The program was facing financial difficulty in the face of system-wide budget cuts at the university, so getting the word out to prospective students and donors to highlight this exciting and impactful program was more important than ever. My department manager appointed me to lead the redesign effort. We had less than 5 months to create a brand-new website and I had a full-time, non-design workload to balance with this project. It was going to be a wild ride.</div>\n    <div text-section-image-with-text></div>\n</div>\n\n<div text-section style=\"background-color:#D5D5D5\">\n    <div text-section-category>The process</div>\n    <div text-section-title>Developing a New Architecture</div>\n    <div text-section-body>I was brought onto the project sometime after the ideation process, and a few key decisions about platform and theme had already been made. Nevertheless, I was able to quickly get up to speed on the project by working closely with the developer as soon as possible to fully understand the technology we were using and the opportunities and constraints we needed to work with.</div>\n    <div text-section-body>I imagined our website as a one-stop shop for students, faculty, and donors who were looking for more information about this program. To begin, I performed a content audit of the old site. I simplified by removing outdated information and reorganized the information we would need to move over.</div>\n    <div text-section-image>\n        <img src='/assets/cec/CECsitemap_before.png'>\n        <div text-section-image-caption>The previous sitemap on the institutional website. Shaded portions reflect the Cal Energy Corps-related pages. Users had to navigate through multiple layers of dropdown menus to get to specific information, and there was no obvious place for donors or hosts to go for information on the program.</div>\n    </div>\n    <div text-section-body>I grouped the information based on each type of user, and created a sitemap that reflected such organization.</div>\n    <div text-section-image>\n        <img src='/assets/cec/CECsitemap_after.png'>\n        <div text-section-image-caption>The sitemap I designed for the new website. While still student-facing, content for prospective donors and hosts is clearly highlighted.</div>\n    </div>\n    <div text-section-body>Based on the new sitemap, the developer was able to create a working prototype. </div>\n</div>\n<div text-section>\n    <div text-section-title>Fine-tuning</div>\n    <div text-section-body>However, we were on a time crunch and had to drop the blog functionality for the site’s go-live date. In addition, after conducting user testing, we realized that many pages, such as the About page, were too text-heavy; students were sometimes unable to find information even though it was on the page because it was difficult to locate. Similar problems existed for the Donate and Host pages.</div>\n    <div text-section-body>Consequently, I thought up some ways that we could present the text more interactively, and worked with the developer to incorporate these features.</div>\n    <div text-section-image>\n        <div image-comparison>\n            <div>\n                <img src='/assets/cec/cec_about_before.png'>\n                <div text-section-image-caption>The About page with a long block of text, making it difficult for users to skim and quickly identify the information they wanted.</div>\n            </div>\n            <div>\n                <img src='/assets/cec/cec_about_after.png'>\n                <div text-section-image-caption>Accordion implemented to create a more interactive experience in the FAQs while reducing the amount of text shown at once on the page.</div>\n            </div>\n        </div>\n    \n    </div>\n    <div text-section-body>Even after implementing interactive elements for the FAQ however, we realized that the content on the Donor and Host pages were still quite text-heavy. </div>\n        <div text-section-image>\n            <img src='/assets/cec/donate_page_before.png'>\n            <div text-section-image-caption>The Donate page with text only. With no visuals to complement the text, it was difficult for users to focus on the content. </div>\n        </div>\n    <div text-section-body>This was a problem, since we planned to ramp up fundraising efforts in the coming years, and the content needed to be more engaging. I suggested adding a hero image of the students we served in the program to bring a personal touch to these call-to-action pages.</div>\n        <div text-section-image>\n            <img src='/assets/cec/donate_page_after.png'>\n            <div text-section-image-caption>The Donate page with hero image, helping users focus on the students that the donations would help. Similar changes were implemented for the Host page.</div>\n        </div>\n\n</div>\n\n<div text-section style=\"background-color:#AA9DA5\">\n    <div text-section-category>The results</div>\n    <div text-section-title>Go-live and Further Improvements</div>\n    <div text-section-body>On September 27, 2016, we officially launched the website in conjunction with the annual symposium event.</div>\n    <div text-section-image>\n            <img src='/assets/cec/cec_new_banner.png'>\n            <div text-section-image-caption>The new website's landing page.</div>\n    </div>\n    <ul>\n        <li text-section-body>Since then, we had a successful 2017 application cycle supported by new site. No problems were reported by any users during the application process.</li>\n        <li text-section-body>We have also added a native blog feature that allows student participants to log in and blog during their internships. We are working on more ways to demonstrate the depth of the student experience on the site.</li>\n        <li text-section-body>A user survey will be conducted for the 2018 application cycle to gather feedback about user experience and possible improvements to the site.</li>\n        <li text-section-body>The site is still currently being used as the one-stop shop for all things related to the program, and remains one of the best assets for promoting the program to donors.</li>\n    </ul>\n</div>\n\n<div text-section>\n    <div text-section-category>Reflection</div>\n    <div text-section-title>Designing for Business Needs</div>\n    <div text-section-body>This project was a great exercise in design thinking for me and helped me to get my feet wet in thinking about the needs of a variety of users. There are a lot of things that I wish I could have done earlier, such as wireframing and more user testing, but I am glad to have the opportunity to carry some of these out since we are still refining and improving the site.</div>\n    <div text-section-body>One major challenge was getting enough high-quality content for the new website. Updating and revising the copy took a lot of time, but we were working with a hard deadline so we did what we could. Next time, if I’m able to, I would allot more time for content curation and refinement to better ensure that we have the time we need to craft truly great content for our users.</div>\n    <div text-section-body>Another challenge we faced was that we often felt constrained by the theme we implemented, as it sometimes made it hard to design pages tailored to the information that we wanted to present, and we often had to compromise and learn to work within the framework of what we had. This taught me that theme and platform selection is crucial to the success of the project, and that we ought to carefully research the technologies we want to implement, examining it in terms of the content we wanted to present.</div>\n    <div text-section-body>Through this project, I was able to lead a team of students and professional developers to create a useful tool, translating the Institute’s business needs into the product design. It was a great opportunity for me to grow as a digital designer and allowed me to understand the opportunities and challenges that come with working with a diverse team.</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\ndiv[text-intro] {\n  padding: 5%;\n  background-color: darkslategray;\n  color: white;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ndiv[text-intro] div[text-intro-title] {\n    font-weight: bold;\n    font-size: 3em;\n    margin: 3%; }\n\ndiv[text-intro] div[text-intro-body] {\n    width: 60%;\n    margin: 3%;\n    font-size: 1.5em; }\n\ndiv[text-intro] div[text-intro-disclaimer] {\n    font-style: italic;\n    font-size: 0.75em; }\n\ndiv[image-banner] {\n  height: 50vh;\n  background-color: gray; }\n\ndiv[text-section] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5%; }\n\ndiv[text-section] div[text-section-category] {\n    margin: 3%;\n    font-size: 1em;\n    text-transform: capitalize;\n    font-weight: bold; }\n\ndiv[text-section] div[text-section-title] {\n    font-weight: bold;\n    font-size: 2em;\n    text-transform: capitalize;\n    margin: 3%; }\n\ndiv[text-section] div[text-section-body] {\n    font-size: 1em;\n    margin: 3%; }\n\ndiv[text-section] div[text-section-image] {\n    margin: 3%;\n    text-align: center; }\n\ndiv[text-section] div[text-section-image] img {\n      max-width: 100%; }\n\ndiv[text-section] div[text-section-image] div[image-comparison] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n\ndiv[text-section] div[text-section-image] div[image-comparison] div {\n        margin-right: 20px; }\n\ndiv[text-section] div[text-section-image] div[image-comparison] img {\n        max-width: 100%; }\n\ndiv[text-section] div[text-section-image] div[image-placeholder] {\n      height: 300px;\n      background-color: gray; }\n\ndiv[text-section] div[text-section-image] div[text-section-image-caption] {\n      font-style: italic;\n      margin: 2%;\n      font-size: 0.75em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioItemDetailComponent = /** @class */ (function () {
    function PortfolioItemDetailComponent() {
    }
    PortfolioItemDetailComponent.prototype.ngOnInit = function () {
    };
    PortfolioItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio-item-detail',
            template: __webpack_require__("../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio-item-detail/portfolio-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioItemDetailComponent);
    return PortfolioItemDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio-item/portfolio-item.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div portfolio-item [style.background-color]=\"backgroundColor\">\n  <div left-box>\n    <div category>{{category}}</div>\n    <div title>{{title}}</div>\n    <div description>{{description}}</div>\n  </div>\n  <div right-box>\n    <img src=\"{{imgUrl}}\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio-item/portfolio-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[portfolio-item] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-height: 360px;\n  min-width: 300px;\n  margin: 5%; }\n  div[portfolio-item] div[left-box] {\n    width: 60%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 30px; }\n  div[portfolio-item] div[left-box] div[category] {\n      margin-bottom: 40px; }\n  div[portfolio-item] div[left-box] div[title] {\n      font-size: 3em;\n      margin-bottom: 10px; }\n  div[portfolio-item] div[left-box] div[description] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  div[portfolio-item] div[right-box] {\n    margin: 5%;\n    width: 40%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio-item/portfolio-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioItemComponent = /** @class */ (function () {
    function PortfolioItemComponent() {
        this.category = 'Category';
        this.title = 'Project title';
        this.description = 'This is a brief description of the project and what it means to you. Use this space to draw in the reader to click and learn more.';
        this.backgroundColor = 'gray';
    }
    PortfolioItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PortfolioItemComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PortfolioItemComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PortfolioItemComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PortfolioItemComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PortfolioItemComponent.prototype, "backgroundColor", void 0);
    PortfolioItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio-item',
            template: __webpack_require__("../../../../../src/app/portfolio-item/portfolio-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio-item/portfolio-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioItemComponent);
    return PortfolioItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<app-portfolio-item \n    [category]=\"'/UX Design /Case Study'\" \n    [title]=\"'Cal Energy Corps'\" \n    [description]=\"'Designing a comprehensive student internship website by integrating student, mentor, and donor perspectives.'\"\n    [imgUrl]=\"'/assets/beci/BECI-Logo_300px.png'\"\n    [backgroundColor]=\"'blanchedalmond'\"\n    [routerLink]=\"['/portfolioItemDetailTemplate']\"\n>\n</app-portfolio-item>\n<app-portfolio-item></app-portfolio-item>\n<app-portfolio-item></app-portfolio-item>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map