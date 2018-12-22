"use strict"
define("boat-reservation/app",["exports","boat-reservation/resolver","ember-load-initializers","boat-reservation/config/environment"],function(e,t,a,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,a.default)(r,i.default.modulePrefix)
var n=r
e.default=n}),define("boat-reservation/helpers/app-version",["exports","boat-reservation/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.default.APP.version,n=i.versionOnly||i.hideSha,o=i.shaOnly||i.hideVersion,l=null
return n&&(i.showExtended&&(l=r.match(a.versionExtendedRegExp)),l||(l=r.match(a.versionRegExp))),o&&(l=r.match(a.shaRegExp)),l?l[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=void 0
var r=Ember.Helper.helper(i)
e.default=r}),define("boat-reservation/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("boat-reservation/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("boat-reservation/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","boat-reservation/config/environment"],function(e,t,a){var i,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(i=a.default.APP.name,r=a.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(i,r)}
e.default=n}),define("boat-reservation/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("boat-reservation/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"ember-data",initialize:t.default}
e.default=i}),define("boat-reservation/initializers/export-application-global",["exports","boat-reservation/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var i,r=t.default.exportApplicationGlobal
i="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),a[i]||(a[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var i={name:"export-application-global",initialize:a}
e.default=i}),define("boat-reservation/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("boat-reservation/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("boat-reservation/router",["exports","boat-reservation/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){})
var i=a
e.default=i}),define("boat-reservation/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("boat-reservation/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"SD/si9yd",block:'{"symbols":[],"statements":[[0,"Finaly it works\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"boat-reservation/templates/application.hbs"}})
e.default=t}),define("boat-reservation/config/environment",[],function(){try{var e="boat-reservation/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("boat-reservation/app").default.create({name:"boat-reservation",version:"1.0.0+df54e635"})
