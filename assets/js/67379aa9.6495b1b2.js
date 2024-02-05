"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6976],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>d});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(r),m=n,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(45072),n=(r(11504),r(95788));const i={id:"HistogramData",title:"Interface: HistogramData",sidebar_label:"HistogramData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/HistogramData",id:"version-3.8/api/interfaces/HistogramData",title:"Interface: HistogramData",description:"Structure describing a single item of data for histogram series",source:"@site/versioned_docs/version-3.8/api/interfaces/HistogramData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HistogramData",permalink:"/lightweight-charts/docs/3.8/api/interfaces/HistogramData",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"HistogramData",title:"Interface: HistogramData",sidebar_label:"HistogramData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"time",id:"time",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"value",id:"value",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],c={toc:s},g="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Structure describing a single item of data for histogram series"),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData"},(0,n.yg)("inlineCode",{parentName:"a"},"SingleValueData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"HistogramData"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"color"},"color"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"color"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"Optional color value for certain data item. If missed, color from options is used"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time"))),(0,n.yg)("p",null,"The time of the data."),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData"},"SingleValueData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData#time"},"time")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"value"},"value"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"value"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"Price value of the data."),(0,n.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData"},"SingleValueData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData#value"},"value")))}u.isMDXComponent=!0}}]);