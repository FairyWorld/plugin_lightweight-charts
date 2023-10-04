"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,k=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=l,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(m,i(i({ref:t},k),{},{components:n})):r.createElement(m,i({ref:t},k))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={id:"CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",sidebar_label:"CandlestickStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,a={unversionedId:"api/interfaces/CandlestickStyleOptions",id:"version-4.0/api/interfaces/CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",description:"Represents style options for a candlestick series.",source:"@site/versioned_docs/version-4.0/api/interfaces/CandlestickStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CandlestickStyleOptions",permalink:"/lightweight-charts/docs/4.0/api/interfaces/CandlestickStyleOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"CandlestickStyleOptions",title:"Interface: CandlestickStyleOptions",sidebar_label:"CandlestickStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"upColor",id:"upcolor",level:3},{value:"downColor",id:"downcolor",level:3},{value:"wickVisible",id:"wickvisible",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"borderUpColor",id:"borderupcolor",level:3},{value:"borderDownColor",id:"borderdowncolor",level:3},{value:"wickColor",id:"wickcolor",level:3},{value:"wickUpColor",id:"wickupcolor",level:3},{value:"wickDownColor",id:"wickdowncolor",level:3}],k={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Represents style options for a candlestick series."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"upcolor"},"upColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"upColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Color of rising candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"downcolor"},"downColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"downColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Color of falling candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wickvisible"},"wickVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"wickVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable high and low prices candle wicks."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordervisible"},"borderVisible"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderVisible"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Enable candle borders."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"bordercolor"},"borderColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Border color."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#378658'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"borderupcolor"},"borderUpColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderUpColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Border color of rising candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"borderdowncolor"},"borderDownColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"borderDownColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Border color of falling candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#ef5350'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wickcolor"},"wickColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"wickColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Wick color."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#737375'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wickupcolor"},"wickUpColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"wickUpColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Wick color of rising candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#26a69a'")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wickdowncolor"},"wickDownColor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"wickDownColor"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Wick color of falling candles."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"'#ef5350'")))}c.isMDXComponent=!0}}]);