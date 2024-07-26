"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16895],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,g=u["".concat(s,".").concat(c)]||u[c]||y[c]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),l=(n(96540),n(15680));const i={id:"LineStyle",title:"Enumeration: LineStyle",sidebar_label:"LineStyle",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,o={unversionedId:"api/enums/LineStyle",id:"version-3.8/api/enums/LineStyle",title:"Enumeration: LineStyle",description:"Represents the possible line styles.",source:"@site/versioned_docs/version-3.8/api/enums/LineStyle.md",sourceDirName:"api/enums",slug:"/api/enums/LineStyle",permalink:"/lightweight-charts/docs/3.8/api/enums/LineStyle",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"LineStyle",title:"Enumeration: LineStyle",sidebar_label:"LineStyle",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Solid",id:"solid",level:3},{value:"Dotted",id:"dotted",level:3},{value:"Dashed",id:"dashed",level:3},{value:"LargeDashed",id:"largedashed",level:3},{value:"SparseDotted",id:"sparsedotted",level:3}],d={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Represents the possible line styles."),(0,l.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,l.yg)("h3",{id:"solid"},"Solid"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"Solid")," = ",(0,l.yg)("inlineCode",{parentName:"p"},"0")),(0,l.yg)("p",null,"A solid line."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"dotted"},"Dotted"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"Dotted")," = ",(0,l.yg)("inlineCode",{parentName:"p"},"1")),(0,l.yg)("p",null,"A dotted line."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"dashed"},"Dashed"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"Dashed")," = ",(0,l.yg)("inlineCode",{parentName:"p"},"2")),(0,l.yg)("p",null,"A dashed line."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"largedashed"},"LargeDashed"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"LargeDashed")," = ",(0,l.yg)("inlineCode",{parentName:"p"},"3")),(0,l.yg)("p",null,"A dashed line with bigger dashes."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"sparsedotted"},"SparseDotted"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("strong",{parentName:"p"},"SparseDotted")," = ",(0,l.yg)("inlineCode",{parentName:"p"},"4")),(0,l.yg)("p",null,"A dottled line with more space between dots."))}y.isMDXComponent=!0}}]);