"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"TickMarkType",title:"Enumeration: TickMarkType",sidebar_label:"TickMarkType",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/enums/TickMarkType",id:"version-3.8/api/enums/TickMarkType",title:"Enumeration: TickMarkType",description:"Represents the type of a tick mark on the time axis.",source:"@site/versioned_docs/version-3.8/api/enums/TickMarkType.md",sourceDirName:"api/enums",slug:"/api/enums/TickMarkType",permalink:"/lightweight-charts/docs/3.8/api/enums/TickMarkType",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"TickMarkType",title:"Enumeration: TickMarkType",sidebar_label:"TickMarkType",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Year",id:"year",level:3},{value:"Month",id:"month",level:3},{value:"DayOfMonth",id:"dayofmonth",level:3},{value:"Time",id:"time",level:3},{value:"TimeWithSeconds",id:"timewithseconds",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents the type of a tick mark on the time axis."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"year"},"Year"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Year")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,"The start of the year (e.g. it's the first tick mark in a year)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"month"},"Month"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Month")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"The start of the month (e.g. it's the first tick mark in a month)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dayofmonth"},"DayOfMonth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"DayOfMonth")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"2")),(0,i.kt)("p",null,"A day of the month."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"time"},"Time"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Time")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"3")),(0,i.kt)("p",null,"A time without seconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"timewithseconds"},"TimeWithSeconds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"TimeWithSeconds")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"4")),(0,i.kt)("p",null,"A time with seconds."))}m.isMDXComponent=!0}}]);