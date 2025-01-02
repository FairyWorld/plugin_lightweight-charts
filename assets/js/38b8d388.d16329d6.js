"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28787],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),c=o,f=g["".concat(p,".").concat(c)]||g[c]||y[c]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"api/interfaces/LayoutOptions",id:"api/interfaces/LayoutOptions",title:"Interface: LayoutOptions",description:"Represents layout options",source:"@site/docs/api/interfaces/LayoutOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LayoutOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},u=[{value:"Properties",id:"properties",level:2},{value:"background",id:"background",level:3},{value:"textColor",id:"textcolor",level:3},{value:"fontSize",id:"fontsize",level:3},{value:"fontFamily",id:"fontfamily",level:3},{value:"attributionLogo",id:"attributionlogo",level:3}],s={toc:u},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Represents layout options"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"background"},"background"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"background"),": ",(0,o.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#background"},(0,o.yg)("inlineCode",{parentName:"a"},"Background"))),(0,o.yg)("p",null,"Chart and scales background color."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"{ type: ColorType.Solid, color: '#FFFFFF' }")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"textcolor"},"textColor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"textColor"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Color of text on the scales."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"'#191919'")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"fontsize"},"fontSize"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"fontSize"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,"Font size of text on scales in pixels."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"12")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"fontfamily"},"fontFamily"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"fontFamily"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"Font family of text on the scales."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"attributionlogo"},"attributionLogo"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"attributionLogo"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Display the TradingView attribution logo on the main chart pane."),(0,o.yg)("p",null,'The licence for library specifies that you add the "attribution notice"\nfrom the NOTICE file to your code and a link to ',(0,o.yg)("a",{parentName:"p",href:"https://www.tradingview.com/"},"https://www.tradingview.com/")," to\nthe page of your website or mobile application that is available to your users.\nUsing this attribution logo is sufficient for meeting this linking requirement.\nHowever, if you already fulfill this requirement then you can disable this\nattribution logo."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.yg)("p",null,"true"))}y.isMDXComponent=!0}}]);