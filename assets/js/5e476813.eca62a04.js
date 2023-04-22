"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"LocalizationOptions",title:"Interface: LocalizationOptions",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/LocalizationOptions",id:"version-3.8/api/interfaces/LocalizationOptions",title:"Interface: LocalizationOptions",description:"Represents options for formatting dates, times, and prices according to a locale.",source:"@site/versioned_docs/version-3.8/api/interfaces/LocalizationOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LocalizationOptions",permalink:"/lightweight-charts/docs/3.8/api/interfaces/LocalizationOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"LocalizationOptions",title:"Interface: LocalizationOptions",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"locale",id:"locale",level:3},{value:"priceFormatter",id:"priceformatter",level:3},{value:"timeFormatter",id:"timeformatter",level:3},{value:"dateFormat",id:"dateformat",level:3}],s={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents options for formatting dates, times, and prices according to a locale."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"locale"},"locale"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"locale"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Current locale used to format dates. Uses the browser's language settings by default."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"navigator.language")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"priceformatter"},"priceFormatter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"priceFormatter"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#priceformatterfn"},(0,a.kt)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,a.kt)("p",null,"Override formatting of the price scale crosshair label. Can be used for cases that can't be covered with built-in price formats."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/PriceFormatCustom"},"PriceFormatCustom")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"timeformatter"},"timeFormatter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"timeFormatter"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#timeformatterfn"},(0,a.kt)("inlineCode",{parentName:"a"},"TimeFormatterFn"))),(0,a.kt)("p",null,"Override formatting of the time scale crosshair label."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dateformat"},"dateFormat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"dateFormat"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Date formatting string."),(0,a.kt)("p",null,"Can contain ",(0,a.kt)("inlineCode",{parentName:"p"},"yyyy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"yy"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MMMM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MMM"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MM")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," literals which will be replaced with corresponding date's value."),(0,a.kt)("p",null,"Ignored if ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/LocalizationOptions#timeformatter"},"timeFormatter")," has been specified."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'dd MMM \\'yy'")))}m.isMDXComponent=!0}}]);