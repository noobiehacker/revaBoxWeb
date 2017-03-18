webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(298)},298:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=t(299),a=n(o),r=t(301),i=n(r),u=t(371),s=n(u),l=t(388),c=n(l),f=t(448),d=n(f),p=t(452),v=n(p);t(473),a.default.module("app",[i.default,s.default,c.default,v.default]).config(["$locationProvider",function(e){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",d.default)},371:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(372),i=(n(r),t(380)),u=(n(i),t(386)),s=n(u),l=a.default.module("app.common",[s.default]).name;exports.default=l},372:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),i=n(r),u=t(373),s=n(u),l=a.default.module("navbar",[i.default]).component("navbar",s.default).name;exports.default=l},373:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(374),a=n(o),r=t(375),i=n(r);t(376);var u={restrict:"E",bindings:{},template:a.default,controller:i.default};exports.default=u},374:function(e,exports){e.exports='<nav class="navbar">\n  <div class="logo">\n    <h1><a ui-sref="home">{{ $ctrl.name }}</a></h1>\n  </div>\n  <div class="nav-links">\n    <span><a ui-sref="about">Contact Reva</a></span>\n  </div>\n</nav>\n'},375:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="navbar"};exports.default=n},376:function(e,exports,t){var n=t(377);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},377:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%}.navbar{height:6.5rem;background-color:#0277bd;padding:1rem}.navbar .logo,.navbar .nav-links{display:inline-block}.navbar .logo{color:#f5f5f5;margin-right:50%}.navbar .nav-links span{color:#f5f5f5;font-size:1.6rem}",""])},380:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),i=n(r),u=t(381),s=n(u),l=a.default.module("hero",[i.default]).component("hero",s.default).name;exports.default=l},381:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(382),a=n(o),r=t(383),i=n(r);t(384);var u={restrict:"E",bindings:{},template:a.default,controller:i.default};exports.default=u},382:function(e,exports){e.exports='<section class="hero">\n  <h2>{{ $ctrl.name}}</h2>\n</section>\n'},383:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="hero"};exports.default=n},384:function(e,exports,t){var n=t(385);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},385:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%}.hero{background-color:#fff;height:15rem;padding:3rem;text-align:center;font-size:20px}.hero .h2{color:#f5f5f5;font-size:10px}.hero .h4{color:#f5f5f5;font-size:30px;text-align:center}",""])},386:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(387),i=n(r),u=a.default.module("user",[]).factory("User",i.default).name;exports.default=u},387:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){var e={},t=function(){return e},n=function(){return e.isSignedIn};return{getUser:t,isSignedIn:n}};exports.default=t},388:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(389),i=n(r),u=t(395),s=(n(u),t(401)),l=n(s),c=a.default.module("app.components",[i.default,l.default]).name;exports.default=c},389:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),i=n(r),u=t(390),s=n(u),l=a.default.module("home",[i.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",component:"home"})}]).component("home",s.default).name;exports.default=l},390:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(391),a=n(o),r=t(392),i=n(r);t(393);var u={restrict:"E",bindings:{},template:a.default,controller:i.default};exports.default=u},391:function(e,exports){e.exports="<main>\n  <h1>Reva Web Application Demo</h1>\n  <workprocess></workprocess>\n</main>\n"},392:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="home"};exports.default=n},393:function(e,exports,t){var n=t(394);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},394:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".home{font-size:15px}.home,h1{text-align:center}h1{color:#fff;font-size:20px}",""])},395:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),i=n(r),u=t(396),s=n(u),l=a.default.module("about",[i.default]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",component:"about"})}]).component("about",s.default).name;exports.default=l},396:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(397),a=n(o),r=t(398),i=n(r);t(399);var u={restrict:"E",bindings:{},template:a.default,controller:i.default};exports.default=u},397:function(e,exports){e.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},398:function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function e(){t(this,e),this.name="about"};exports.default=n},399:function(e,exports,t){var n=t(400);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},400:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".about{color:red}",""])},401:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),a=n(o),r=t(301),i=n(r),u=t(402),s=n(u),l=a.default.module("workprocess",[i.default]).component("workprocess",s.default).name;exports.default=l},402:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(403),a=n(o),r=t(404),i=n(r);t(446);var u={restrict:"E",bindings:{name:"@"},template:a.default,controller:i.default};exports.default=u},403:function(e,exports){e.exports='<section class="workprocess">\n  <div class="row">\n    <div class="col-sm-2"></div>\n    <div class="col-sm-4"><h2>{{$ctrl.topName}}</h2>\n      <select ng-model="category" ng-change="$ctrl.updateSelectedCategory(category)">\n        <option ng-repeat="cat in $ctrl.category"\n                value="{{cat}}">\n                {{cat}}\n        </option>\n      </select>\n    </div>\n\n    <div class="col-sm-4"><h2>{{$ctrl.bottomName}}</h2>\n      <select ng-model="subcategory">\n        <option ng-repeat="subCat in $ctrl.getSubCategoryDropDown()"\n              value="subCat.value">\n              {{subCat}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div class="center">\n    <button type="button" class="btn btn-primary">Search</button>\n  </div>\n\n</section>\n'},404:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=t(405),i=n(r),u=function(){function e(){o(this,e),this.serverUrl="http://localhost:5000",this.tempString="A temporary string",this.category=[],this.subcategoryMap=new Map,this.topName="Category",this.bottomName="Sub-Category",this.selectedCategory,this.http=i.default,this.getDataFromService()}return a(e,[{key:"getSubCategory",value:function(e){var t=this.category.findIndex(function(t){return t==e}),n=t<0||void 0==this.selectedCategory||this.selectedCategory!=this.category[t]||!this.subcategoryMap.has(this.selectedCategory);return n?[]:this.selectedCategory==this.category[t]?this.subcategoryMap.get(this.selectedCategory):void 0}},{key:"getDataFromService",value:function(){var e=["Engineering","Finance","HR"],t=["Invoice","POD"];this.category=e,this.subcategoryMap.set("Finance",t),this.getCategoryFromServer()}},{key:"getCategoryFromServer",value:function(){var e=this.serverUrl+"/category",t=function(e){n=e.data,console.log(e),$log.info(e)},n=this.http.get(e,t)}},{key:"getSubCategoryFromServer",value:function(e){}},{key:"getSubCategoryDropDown",value:function(){return this.getSubCategory(this.selectedCategory)}},{key:"updateSelectedCategory",value:function(e){this.selectedCategory=e}}]),e}();exports.default=u},429:function(e,exports){},446:function(e,exports,t){var n=t(447);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},447:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,".workprocess{font-size:15px;padding-bottom:20px}h2{color:#0277bd;font-size:25px}h2,select{vertical-align:text-top}.center{padding-top:35px;text-align:center}",""])},448:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(449),a=n(o);t(450);var r={template:a.default,restrict:"E"};exports.default=r},449:function(e,exports){e.exports='<div class="outer">\n  <div class="middle">\n    <div class="inner">\n      <div class="app">\n        <div ui-view></div>\n      </div>\n    </div>\n  </div>\n</div>\n'},450:function(e,exports,t){var n=t(451);"string"==typeof n&&(n=[[e.id,n,""]]);t(379)(n,{});n.locals&&(e.exports=n.locals)},451:function(e,exports,t){exports=e.exports=t(378)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,".app,body{height:100%}.app{background-color:#1f3a93;padding-top:10px}.outer{display:table;position:absolute;height:100%;width:100%}.middle{display:table-cell;vertical-align:middle}.inner{margin-left:auto;margin-right:auto;width:60%}",""])}});
//# sourceMappingURL=app.bundle.js.map