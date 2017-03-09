webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(298)},298:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=t(299),a=n(o),r=t(301),u=n(r),i=t(371),l=n(i),s=t(388),f=n(s),c=t(407),d=n(c);t(411),a.default.module("app",[u.default,l.default,f.default]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",d.default)},371:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(372),u=(n(r),t(380)),i=n(u),l=t(386),s=n(l),f=a.default.module("app.common",[i.default,s.default]).name;exports.default=f},372:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),u=n(r),i=t(373),l=n(i),s=a.default.module("navbar",[u.default]).component("navbar",l.default).name;exports.default=s},373:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(374),a=n(o),r=t(375),u=n(r);t(376);var i={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=i},374:function(e,exports){e.exports='<nav class="navbar">\n  <div class="logo">\n    <h1><a ui-sref="home">{{ $ctrl.name }}</a></h1>\n  </div>\n  <div class="nav-links">\n    <span><a ui-sref="about">Contact Reva</a></span>\n  </div>\n</nav>\n'},375:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="navbar"};exports.default=n},376:function(e,exports,t){var n=t(377);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},377:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%;font:62.5% Roboto,sans-serif}.navbar{height:6.5rem;background-color:#0277bd;padding:1rem}.navbar .logo,.navbar .nav-links{display:inline-block}.navbar .logo{color:#f5f5f5;margin-right:50%}.navbar .nav-links span{color:#f5f5f5;font-size:1.6rem}",""])},380:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),u=n(r),i=t(381),l=n(i),s=a.default.module("hero",[u.default]).component("hero",l.default).name;exports.default=s},381:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(382),a=n(o),r=t(383),u=n(r);t(384);var i={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=i},382:function(e,exports){e.exports='<section class="hero">\n  <div>\n    <h1>Reva Web Application Demo</h1>\n    <h2>Exciting Features Coming Soon</h2>\n  </div>\n</section>\n'},383:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="hero"};exports.default=n},384:function(e,exports,t){var n=t(385);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},385:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%;font:62.5% Roboto,sans-serif}.hero{background-color:#fff;height:60rem;padding:3rem;text-align:center;font-size:20px}.hero .h2{color:#f5f5f5;font-size:10px}",""])},386:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(387),u=n(r),i=a.default.module("user",[]).factory("User",u.default).name;exports.default=i},387:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){var e={},t=function(){return e},n=function(){return e.isSignedIn};return{getUser:t,isSignedIn:n}};exports.default=t},388:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(389),u=n(r),i=t(395),l=(n(i),t(401)),s=n(l),f=a.default.module("app.components",[u.default,s.default]).name;exports.default=f},389:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),u=n(r),i=t(390),l=n(i),s=a.default.module("home",[u.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home"})}]).component("home",l.default).name;exports.default=s},390:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(391),a=n(o),r=t(392),u=n(r);t(393);var i={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=i},391:function(e,exports){e.exports="<navbar></navbar>\n<header>\n  <hero></hero>\n</header>\n<main>\n  <workprocess></workprocess>\n  <div>\n    <!-- <h1>Found in {{ $ctrl.name }}.html</h1> -->\n  </div>\n</main>\n"},392:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="home"};exports.default=n},393:function(e,exports,t){var n=t(394);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},394:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".home{color:red}",""])},395:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),u=n(r),i=t(396),l=n(i),s=a.default.module("about",[u.default]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",component:"about"})}]).component("about",l.default).name;exports.default=s},396:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(397),a=n(o),r=t(398),u=n(r);t(399);var i={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=i},397:function(e,exports){e.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},398:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="about"};exports.default=n},399:function(e,exports,t){var n=t(400);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},400:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".about{color:red}",""])},401:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),u=n(r),i=t(402),l=n(i),s=a.default.module("workprocess",[u.default]).component("workprocess",l.default).name;exports.default=s},402:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(403),a=n(o),r=t(404),u=n(r);t(405);var i={restrict:"E",bindings:{},template:a.default,controller:u.default};exports.default=i},403:function(e,exports){e.exports='<div style="text-align: center">\n  <h1>Allelula</h1>\n  <h1>{{ $ctrl.name }}</h1>\n  <h4>{{cat}}</h4>\n  <h5>{{tempString}}</h5>\n</div>\n'},404:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="workprocess"};exports.default=n},405:function(e,exports,t){var n=t(406);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},406:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".workprocess{color:red}",""])},407:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(408),a=n(o);t(409);var r={template:a.default,restrict:"E"};exports.default=r},408:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <div ui-view></div>\n</div>\n'},409:function(e,exports,t){var n=t(410);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},410:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{font:62.5% Roboto,sans-serif}.app,body{height:100%}.app{background-color:#37474f}",""])}});
//# sourceMappingURL=app.bundle.js.map