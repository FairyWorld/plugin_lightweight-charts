"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"TimeMark",title:"Interface: TimeMark",sidebar_label:"TimeMark",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/TimeMark",id:"api/interfaces/TimeMark",title:"Interface: TimeMark",description:"Represents a tick mark on the horizontal (time) scale.",source:"@site/docs/api/interfaces/TimeMark.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TimeMark",permalink:"/lightweight-charts/docs/next/api/interfaces/TimeMark",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TimeMark",title:"Interface: TimeMark",sidebar_label:"TimeMark",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"needAlignCoordinate",id:"needaligncoordinate",level:3},{value:"coord",id:"coord",level:3},{value:"label",id:"label",level:3},{value:"weight",id:"weight",level:3}],u={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a tick mark on the horizontal (time) scale."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"needaligncoordinate"},"needAlignCoordinate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"needAlignCoordinate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Does time mark need to be aligned"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"coord"},"coord"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"coord"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Coordinate for the time mark"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"label"},"label"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"label"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Display label for the time mark"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"weight"},"weight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"weight"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#tickmarkweightvalue"},(0,a.kt)("inlineCode",{parentName:"a"},"TickMarkWeightValue"))),(0,a.kt)("p",null,"Weight of the time mark"))}d.isMDXComponent=!0}}]);