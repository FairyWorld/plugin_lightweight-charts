"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3552],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=s(t),y=a,d=c["".concat(p,".").concat(y)]||c[y]||u[y]||r;return t?l.createElement(d,i(i({ref:n},g),{},{components:t})):l.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},95027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=t(58168),a=(t(96540),t(15680));const r={id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/PriceScaleOptions",id:"api/interfaces/PriceScaleOptions",title:"Interface: PriceScaleOptions",description:"Structure that describes price scale options",source:"@site/docs/api/interfaces/PriceScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceScaleOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PriceScaleOptions",title:"Interface: PriceScaleOptions",sidebar_label:"PriceScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"autoScale",id:"autoscale",level:3},{value:"mode",id:"mode",level:3},{value:"invertScale",id:"invertscale",level:3},{value:"alignLabels",id:"alignlabels",level:3},{value:"scaleMargins",id:"scalemargins",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"textColor",id:"textcolor",level:3},{value:"entireTextOnly",id:"entiretextonly",level:3},{value:"visible",id:"visible",level:3},{value:"ticksVisible",id:"ticksvisible",level:3},{value:"minimumWidth",id:"minimumwidth",level:3}],g={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,l.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Structure that describes price scale options"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"autoscale"},"autoScale"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"autoScale"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Autoscaling is a feature that automatically adjusts a price scale to fit the visible range of data.\nNote that overlay price scales are always auto-scaled."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"mode"},"mode"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"mode"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/PriceScaleMode"},(0,a.yg)("inlineCode",{parentName:"a"},"PriceScaleMode"))),(0,a.yg)("p",null,"Price scale mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/PriceScaleMode#normal"},"Normal")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"invertscale"},"invertScale"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"invertScale"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Invert the price scale, so that a upwards trend is shown as a downwards trend and vice versa.\nAffects both the price scale and the data on the chart."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"alignlabels"},"alignLabels"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"alignLabels"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Align price scale labels to prevent them from overlapping."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"scalemargins"},"scaleMargins"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"scaleMargins"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleMargins"},(0,a.yg)("inlineCode",{parentName:"a"},"PriceScaleMargins"))),(0,a.yg)("p",null,"Price scale margins."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"{ bottom: 0.1, top: 0.2 }")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"chart.priceScale('right').applyOptions({\n    scaleMargins: {\n        top: 0.8,\n        bottom: 0,\n    },\n});\n")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"bordervisible"},"borderVisible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"borderVisible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Set true to draw a border between the price scale and the chart area."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"bordercolor"},"borderColor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"borderColor"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Price scale border color."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"textcolor"},"textColor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"textColor"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Price scale text color.\nIf not provided ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions#textcolor"},"textColor")," is used."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"undefined")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"entiretextonly"},"entireTextOnly"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"entireTextOnly"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Show top and bottom corner labels only if entire text is visible."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"visible"},"visible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"visible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Indicates if this price scale visible. Ignored by overlay price scales."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")," for the right price scale and ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," for the left"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"ticksvisible"},"ticksVisible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"ticksVisible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Draw small horizontal line on price axis labels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"minimumwidth"},"minimumWidth"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"minimumWidth"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Define a minimum width for the price scale.\nNote: This value will be exceeded if the\nprice scale needs more space to display it's contents."),(0,a.yg)("p",null,"Setting a minimum width could be useful for ensuring that\nmultiple charts positioned in a vertical stack each have\nan identical price scale width, or for plugins which\nrequire a bit more space within the price scale pane."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,"0"))}u.isMDXComponent=!0}}]);