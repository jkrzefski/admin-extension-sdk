"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9011],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return m}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=l,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?n.createElement(g,u(u({ref:a},o),{},{components:t})):n.createElement(g,u({ref:a},o))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,u=new Array(r);u[0]=p;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,u[1]=c;for(var s=2;s<r;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},137:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return p}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),u=["components"],c={},i="Context",s={unversionedId:"guide/api-reference/context",id:"guide/api-reference/context",isDocsHomePage:!1,title:"Context",description:"Language",source:"@site/docs/guide/2_api-reference/context.md",sourceDirName:"guide/2_api-reference",slug:"/guide/api-reference/context",permalink:"/admin-extension-sdk/docs/guide/api-reference/context",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Usage",permalink:"/admin-extension-sdk/docs/guide/getting-started/usage"},next:{title:"Location",permalink:"/admin-extension-sdk/docs/guide/api-reference/location"}},o=[{value:"Language",id:"language",children:[{value:"Get current language",id:"get-current-language",children:[{value:"Usage:",id:"usage",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Return value:",id:"return-value",children:[],level:4},{value:"Example value:",id:"example-value",children:[],level:4}],level:3},{value:"Subscribe on language changes",id:"subscribe-on-language-changes",children:[{value:"Usage:",id:"usage-1",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Callback value:",id:"callback-value",children:[],level:4},{value:"Example callback value:",id:"example-callback-value",children:[],level:4}],level:3}],level:2},{value:"Environment",id:"environment",children:[{value:"Get current environment",id:"get-current-environment",children:[{value:"Usage:",id:"usage-2",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Return value:",id:"return-value-1",children:[],level:4},{value:"Example value:",id:"example-value-1",children:[],level:4}],level:3}],level:2},{value:"Locale",id:"locale",children:[{value:"Get current locale",id:"get-current-locale",children:[{value:"Usage:",id:"usage-3",children:[],level:4},{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Return value:",id:"return-value-2",children:[],level:4},{value:"Example value:",id:"example-value-2",children:[],level:4}],level:3},{value:"Subscribe on locale changes",id:"subscribe-on-locale-changes",children:[{value:"Usage:",id:"usage-4",children:[],level:4},{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Callback value:",id:"callback-value-1",children:[],level:4},{value:"Example callback value:",id:"example-callback-value-1",children:[],level:4}],level:3}],level:2},{value:"Currency",id:"currency",children:[{value:"Get current currency",id:"get-current-currency",children:[{value:"Usage:",id:"usage-5",children:[],level:4},{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Return value:",id:"return-value-3",children:[],level:4},{value:"Example value:",id:"example-value-3",children:[],level:4}],level:3}],level:2},{value:"Shopware version",id:"shopware-version",children:[{value:"Get current Shopware version",id:"get-current-shopware-version",children:[{value:"Usage:",id:"usage-6",children:[],level:4},{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Return value:",id:"return-value-4",children:[],level:4},{value:"Example value:",id:"example-value-4",children:[],level:4}],level:3}],level:2},{value:"App information",id:"app-information",children:[{value:"Get app information",id:"get-app-information",children:[{value:"Usage:",id:"usage-7",children:[],level:4},{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Return value:",id:"return-value-5",children:[],level:4},{value:"Example value:",id:"example-value-5",children:[],level:4}],level:3}],level:2}],d={toc:o};function p(e){var a=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"context"},"Context"),(0,r.kt)("h2",{id:"language"},"Language"),(0,r.kt)("h3",{id:"get-current-language"},"Get current language"),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const language = await sw.context.getLanguage();\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{\n  languageId: string,\n  systemLanguageId: string\n}>\n")),(0,r.kt)("h4",{id:"example-value"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  languageId: '2fbb5fe2e29a4d70aa5854ce7ce3e20b',\n  systemLanguageId: '2fbb5fe2e29a4d70aa5854ce7ce3e20b'\n}\n")),(0,r.kt)("h3",{id:"subscribe-on-language-changes"},"Subscribe on language changes"),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"sw.context.subscribeLanguage(({ languageId, systemLanguageId }) => {\n  // do something with the callback data\n});\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callbackMethod")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Called every-time the language changes")))),(0,r.kt)("h4",{id:"callback-value"},"Callback value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  languageId: string,\n  systemLanguageId: string\n}\n")),(0,r.kt)("h4",{id:"example-callback-value"},"Example callback value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  languageId: '2fbb5fe2e29a4d70aa5854ce7ce3e20b',\n  systemLanguageId: '2fbb5fe2e29a4d70aa5854ce7ce3e20b'\n}\n")),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("h3",{id:"get-current-environment"},"Get current environment"),(0,r.kt)("h4",{id:"usage-2"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const environment = await sw.context.getEnvironment();\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value-1"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<'development' | 'production' | 'testing'>\n")),(0,r.kt)("h4",{id:"example-value-1"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"'development'\n")),(0,r.kt)("h2",{id:"locale"},"Locale"),(0,r.kt)("h3",{id:"get-current-locale"},"Get current locale"),(0,r.kt)("h4",{id:"usage-3"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const locale = await sw.context.getLocale();\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value-2"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{\n  locale: string,\n  fallbackLocale: string\n}>\n")),(0,r.kt)("h4",{id:"example-value-2"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  locale: 'de-DE',\n  fallbackLocale: 'en-GB'\n}\n")),(0,r.kt)("h3",{id:"subscribe-on-locale-changes"},"Subscribe on locale changes"),(0,r.kt)("h4",{id:"usage-4"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"sw.context.subscribeLocale(({ locale, fallbackLocale }) => {\n  // do something with the callback data\n});\n")),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callbackMethod")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Called every-time the locale changes")))),(0,r.kt)("h4",{id:"callback-value-1"},"Callback value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  locale: string,\n  fallbackLocale: string\n}\n")),(0,r.kt)("h4",{id:"example-callback-value-1"},"Example callback value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  locale: 'de-DE',\n  fallbackLocale: 'en-GB'\n}\n")),(0,r.kt)("h2",{id:"currency"},"Currency"),(0,r.kt)("h3",{id:"get-current-currency"},"Get current currency"),(0,r.kt)("h4",{id:"usage-5"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const currency = await sw.context.getCurrency();\n")),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value-3"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{\n  systemCurrencyId: string,\n  systemCurrencyISOCode: string\n}>\n")),(0,r.kt)("h4",{id:"example-value-3"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  systemCurrencyId: 'EUR',\n  systemCurrencyISOCode: 'b7d2554b0ce847cd82f3ac9bd1c0dfca'\n}\n")),(0,r.kt)("h2",{id:"shopware-version"},"Shopware version"),(0,r.kt)("h3",{id:"get-current-shopware-version"},"Get current Shopware version"),(0,r.kt)("h4",{id:"usage-6"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const shopwareVersion = await sw.context.getShopwareVersion();\n")),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value-4"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"string\n")),(0,r.kt)("h4",{id:"example-value-4"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"'6.4.0.0'\n")),(0,r.kt)("h2",{id:"app-information"},"App information"),(0,r.kt)("h3",{id:"get-app-information"},"Get app information"),(0,r.kt)("h4",{id:"usage-7"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { name, version, type } = await sw.context.getAppInformation();\n")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("p",null,"No parameters needed."),(0,r.kt)("h4",{id:"return-value-5"},"Return value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Promise<{ name: string ; version: string ; type: 'app' | 'plugin' }>\n")),(0,r.kt)("h4",{id:"example-value-5"},"Example value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  name: 'my-extension',\n  version: '1.2.3',\n  type: 'app'\n}\n")))}p.isMDXComponent=!0}}]);