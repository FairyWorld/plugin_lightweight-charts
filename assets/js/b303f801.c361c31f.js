"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22394],{15680:(e,n,l)=>{l.d(n,{xA:()=>s,yg:()=>d});var a=l(96540);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function o(e,n){if(null==e)return{};var l,a,t=function(e,n){if(null==e)return{};var l,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var g=a.createContext({}),p=function(e){var n=a.useContext(g),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},s=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var l=e.components,t=e.mdxType,i=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=p(l),m=t,d=y["".concat(g,".").concat(m)]||y[m]||u[m]||i;return l?a.createElement(d,r(r({ref:n},s),{},{components:l})):a.createElement(d,r({ref:n},s))}));function d(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=l.length,r=new Array(i);r[0]=m;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[y]="string"==typeof e?e:t,r[1]=o;for(var p=2;p<i;p++)r[p]=l[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},49192:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=l(58168),t=(l(96540),l(15680));const i={id:"HorzScaleOptions",title:"Interface: HorzScaleOptions",sidebar_label:"HorzScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},r=void 0,o={unversionedId:"api/interfaces/HorzScaleOptions",id:"version-4.1/api/interfaces/HorzScaleOptions",title:"Interface: HorzScaleOptions",description:"Options for the time scale; the horizontal scale at the bottom of the chart that displays the time of data.",source:"@site/versioned_docs/version-4.1/api/interfaces/HorzScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HorzScaleOptions",permalink:"/lightweight-charts/docs/4.1/api/interfaces/HorzScaleOptions",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"HorzScaleOptions",title:"Interface: HorzScaleOptions",sidebar_label:"HorzScaleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},g={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"rightOffset",id:"rightoffset",level:3},{value:"barSpacing",id:"barspacing",level:3},{value:"minBarSpacing",id:"minbarspacing",level:3},{value:"fixLeftEdge",id:"fixleftedge",level:3},{value:"fixRightEdge",id:"fixrightedge",level:3},{value:"lockVisibleTimeRangeOnResize",id:"lockvisibletimerangeonresize",level:3},{value:"rightBarStaysOnScroll",id:"rightbarstaysonscroll",level:3},{value:"borderVisible",id:"bordervisible",level:3},{value:"borderColor",id:"bordercolor",level:3},{value:"visible",id:"visible",level:3},{value:"timeVisible",id:"timevisible",level:3},{value:"secondsVisible",id:"secondsvisible",level:3},{value:"shiftVisibleRangeOnNewBar",id:"shiftvisiblerangeonnewbar",level:3},{value:"allowShiftVisibleRangeOnWhitespaceReplacement",id:"allowshiftvisiblerangeonwhitespacereplacement",level:3},{value:"ticksVisible",id:"ticksvisible",level:3},{value:"tickMarkMaxCharacterLength",id:"tickmarkmaxcharacterlength",level:3},{value:"uniformDistribution",id:"uniformdistribution",level:3},{value:"minimumHeight",id:"minimumheight",level:3},{value:"allowBoldLabels",id:"allowboldlabels",level:3}],s={toc:p},y="wrapper";function u(e){let{components:n,...l}=e;return(0,t.yg)(y,(0,a.A)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Options for the time scale; the horizontal scale at the bottom of the chart that displays the time of data."),(0,t.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"HorzScaleOptions"))),(0,t.yg)("p",{parentName:"li"},"\u21b3 ",(0,t.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/TimeScaleOptions"},(0,t.yg)("inlineCode",{parentName:"a"},"TimeScaleOptions"))))),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"rightoffset"},"rightOffset"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"rightOffset"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"The margin space in bars from the right side of the chart."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"0")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"barspacing"},"barSpacing"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"barSpacing"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"The space between bars in pixels."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"6")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"minbarspacing"},"minBarSpacing"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"minBarSpacing"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"The minimum space between bars in pixels."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"0.5")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"fixleftedge"},"fixLeftEdge"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"fixLeftEdge"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Prevent scrolling to the left of the first bar."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"fixrightedge"},"fixRightEdge"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"fixRightEdge"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Prevent scrolling to the right of the most recent bar."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"lockvisibletimerangeonresize"},"lockVisibleTimeRangeOnResize"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"lockVisibleTimeRangeOnResize"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Prevent changing the visible time range during chart resizing."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"rightbarstaysonscroll"},"rightBarStaysOnScroll"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"rightBarStaysOnScroll"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Prevent the hovered bar from moving when scrolling."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"bordervisible"},"borderVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"borderVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Show the time scale border."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"bordercolor"},"borderColor"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"borderColor"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"string")),(0,t.yg)("p",null,"The time scale border color."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"'#2B2B43'")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"visible"},"visible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"visible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Show the time scale."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"timevisible"},"timeVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"timeVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Show the time, not just the date, in the time scale and vertical crosshair label."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"secondsvisible"},"secondsVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"secondsVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Show seconds in the time scale and vertical crosshair label in ",(0,t.yg)("inlineCode",{parentName:"p"},"hh:mm:ss")," format for intraday data."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"shiftvisiblerangeonnewbar"},"shiftVisibleRangeOnNewBar"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"shiftVisibleRangeOnNewBar"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Shift the visible range to the right (into the future) by the number of new bars when new data is added."),(0,t.yg)("p",null,"Note that this only applies when the last bar is visible."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"true")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"allowshiftvisiblerangeonwhitespacereplacement"},"allowShiftVisibleRangeOnWhitespaceReplacement"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"allowShiftVisibleRangeOnWhitespaceReplacement"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Allow the visible range to be shifted to the right when a new bar is added which\nis replacing an existing whitespace time point on the chart."),(0,t.yg)("p",null,"Note that this only applies when the last bar is visible & ",(0,t.yg)("inlineCode",{parentName:"p"},"shiftVisibleRangeOnNewBar")," is enabled."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"ticksvisible"},"ticksVisible"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"ticksVisible"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Draw small vertical line on time axis labels."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"false")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"tickmarkmaxcharacterlength"},"tickMarkMaxCharacterLength"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,t.yg)("strong",{parentName:"p"},"tickMarkMaxCharacterLength"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"Maximum tick mark label length. Used to override the default 8 character maximum length."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"undefined")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"uniformdistribution"},"uniformDistribution"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"uniformDistribution"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Changes horizontal scale marks generation.\nWith this flag equal to ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),", marks of the same weight are either all drawn or none are drawn at all."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"minimumheight"},"minimumHeight"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"minimumHeight"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"number")),(0,t.yg)("p",null,"Define a minimum height for the time scale.\nNote: This value will be exceeded if the\ntime scale needs more space to display it's contents."),(0,t.yg)("p",null,"Setting a minimum height could be useful for ensuring that\nmultiple charts positioned in a horizontal stack each have\nan identical time scale height, or for plugins which\nrequire a bit more space within the time scale pane."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,"0"),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"allowboldlabels"},"allowBoldLabels"),(0,t.yg)("p",null,"\u2022 ",(0,t.yg)("strong",{parentName:"p"},"allowBoldLabels"),": ",(0,t.yg)("inlineCode",{parentName:"p"},"boolean")),(0,t.yg)("p",null,"Allow major time scale labels to be rendered in a bolder font weight."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,t.yg)("p",null,"true"))}u.isMDXComponent=!0}}]);