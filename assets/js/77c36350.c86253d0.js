"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={id:"LocalizationOptions",title:"Interface: LocalizationOptions",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/LocalizationOptions",id:"api/interfaces/LocalizationOptions",title:"Interface: LocalizationOptions",description:"Represents options for formatting dates, times, and prices according to a locale.",source:"@site/docs/api/interfaces/LocalizationOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LocalizationOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LocalizationOptions",title:"Interface: LocalizationOptions",sidebar_label:"LocalizationOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"locale",id:"locale",level:3},{value:"priceFormatter",id:"priceformatter",level:3},{value:"percentageFormatter",id:"percentageformatter",level:3},{value:"timeFormatter",id:"timeformatter",level:3},{value:"dateFormat",id:"dateformat",level:3}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents options for formatting dates, times, and prices according to a locale."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"locale"},"locale"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"locale"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Current locale used to format dates. Uses the browser's language settings by default."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"navigator.language")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"priceformatter"},"priceFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"priceFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#priceformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the price scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in price formats."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"See"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceFormatCustom"},"PriceFormatCustom")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"percentageformatter"},"percentageFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"percentageFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#percentageformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"PercentageFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the percentage scale tick marks, labels and crosshair labels. Can be used for cases that can't be covered with built-in percentage format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timeformatter"},"timeFormatter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"timeFormatter"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#timeformatterfn"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeFormatterFn"))),(0,r.kt)("p",null,"Override formatting of the time scale crosshair label."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dateformat"},"dateFormat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"dateFormat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Date formatting string."),(0,r.kt)("p",null,"Can contain ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"yy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MMMM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MMM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," literals which will be replaced with corresponding date's value."),(0,r.kt)("p",null,"Ignored if ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},"timeFormatter")," has been specified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"'dd MMM \\'yy'")))}d.isMDXComponent=!0}}]);