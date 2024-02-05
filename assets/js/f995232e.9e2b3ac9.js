"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8888],{95788:(e,r,t)=>{t.d(r,{Iu:()=>s,yg:()=>d});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,d=u["".concat(c,".").concat(f)]||u[f]||g[f]||i;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56812:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(45072),a=(t(11504),t(95788));const i={id:"PriceScaleMargins",title:"Interface: PriceScaleMargins",sidebar_label:"PriceScaleMargins",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,l={unversionedId:"api/interfaces/PriceScaleMargins",id:"api/interfaces/PriceScaleMargins",title:"Interface: PriceScaleMargins",description:"Defines margins of the price scale.",source:"@site/docs/api/interfaces/PriceScaleMargins.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceScaleMargins",permalink:"/lightweight-charts/docs/next/api/interfaces/PriceScaleMargins",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PriceScaleMargins",title:"Interface: PriceScaleMargins",sidebar_label:"PriceScaleMargins",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},p=[{value:"Properties",id:"properties",level:2},{value:"top",id:"top",level:3},{value:"bottom",id:"bottom",level:3}],s={toc:p},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Defines margins of the price scale."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"top"},"top"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"top"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Top margin in percentages. Must be greater or equal to 0 and less than 1."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"bottom"},"bottom"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"bottom"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Bottom margin in percentages. Must be greater or equal to 0 and less than 1."))}g.isMDXComponent=!0}}]);