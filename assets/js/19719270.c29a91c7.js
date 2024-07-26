"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92265],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,y=g["".concat(p,".").concat(d)]||g[d]||h[d]||r;return t?n.createElement(y,l(l({ref:a},c),{},{components:t})):n.createElement(y,l({ref:a},c))}));function y(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54862:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(58168),i=(t(96540),t(15680));const r={id:"ChartOptionsBase",title:"Interface: ChartOptionsBase",sidebar_label:"ChartOptionsBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/ChartOptionsBase",id:"version-4.1/api/interfaces/ChartOptionsBase",title:"Interface: ChartOptionsBase",description:"Represents common chart options",source:"@site/versioned_docs/version-4.1/api/interfaces/ChartOptionsBase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ChartOptionsBase",permalink:"/lightweight-charts/docs/4.1/api/interfaces/ChartOptionsBase",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"ChartOptionsBase",title:"Interface: ChartOptionsBase",sidebar_label:"ChartOptionsBase",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"autoSize",id:"autosize",level:3},{value:"watermark",id:"watermark",level:3},{value:"layout",id:"layout",level:3},{value:"leftPriceScale",id:"leftpricescale",level:3},{value:"rightPriceScale",id:"rightpricescale",level:3},{value:"overlayPriceScales",id:"overlaypricescales",level:3},{value:"timeScale",id:"timescale",level:3},{value:"crosshair",id:"crosshair",level:3},{value:"grid",id:"grid",level:3},{value:"handleScroll",id:"handlescroll",level:3},{value:"handleScale",id:"handlescale",level:3},{value:"kineticScroll",id:"kineticscroll",level:3},{value:"trackingMode",id:"trackingmode",level:3},{value:"localization",id:"localization",level:3}],c={toc:s},g="wrapper";function h(e){let{components:a,...t}=e;return(0,i.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents common chart options"),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"ChartOptionsBase"))),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/ChartOptionsImpl"},(0,i.yg)("inlineCode",{parentName:"a"},"ChartOptionsImpl"))))),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"width"},"width"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"width"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,"Width of the chart in pixels"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"height"},"height"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"height"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,"Height of the chart in pixels"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," (default) or none value provided, then a size of the widget will be calculated based its container's size."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"autosize"},"autoSize"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"autoSize"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,"Setting this flag to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," will make the chart watch the chart container's size and automatically resize the chart to fit its container whenever the size changes."),(0,i.yg)("p",null,"This feature requires ",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},(0,i.yg)("inlineCode",{parentName:"a"},"ResizeObserver"))," class to be available in the global scope.\nNote that calling code is responsible for providing a polyfill if required. If the global scope does not have ",(0,i.yg)("inlineCode",{parentName:"p"},"ResizeObserver"),", a warning will appear and the flag will be ignored."),(0,i.yg)("p",null,"Please pay attention that ",(0,i.yg)("inlineCode",{parentName:"p"},"autoSize")," option and explicit sizes options ",(0,i.yg)("inlineCode",{parentName:"p"},"width")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"height")," don't conflict with one another.\nIf you specify ",(0,i.yg)("inlineCode",{parentName:"p"},"autoSize")," flag, then ",(0,i.yg)("inlineCode",{parentName:"p"},"width")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"height")," options will be ignored unless ",(0,i.yg)("inlineCode",{parentName:"p"},"ResizeObserver")," has failed. If it fails then the values will be used as fallback."),(0,i.yg)("p",null,"The flag ",(0,i.yg)("inlineCode",{parentName:"p"},"autoSize")," could also be set with and unset with ",(0,i.yg)("inlineCode",{parentName:"p"},"applyOptions")," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(document.body, {\n    autoSize: true,\n});\n")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"watermark"},"watermark"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"watermark"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/WatermarkOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"WatermarkOptions"))),(0,i.yg)("p",null,"Watermark options."),(0,i.yg)("p",null,"A watermark is a background label that includes a brief description of the drawn data. Any text can be added to it."),(0,i.yg)("p",null,"Please make sure you enable it and set an appropriate font color and size to make your watermark visible in the background of the chart.\nWe recommend a semi-transparent color and a large font. Also note that watermark position can be aligned vertically and horizontally."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"layout"},"layout"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"layout"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LayoutOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"LayoutOptions"))),(0,i.yg)("p",null,"Layout options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"leftpricescale"},"leftPriceScale"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"leftPriceScale"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/PriceScaleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,i.yg)("p",null,"Left price scale options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"rightpricescale"},"rightPriceScale"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"rightPriceScale"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/PriceScaleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions"))),(0,i.yg)("p",null,"Right price scale options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"overlaypricescales"},"overlayPriceScales"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"overlayPriceScales"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#overlaypricescaleoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"OverlayPriceScaleOptions"))),(0,i.yg)("p",null,"Overlay price scale options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"timescale"},"timeScale"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"timeScale"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HorzScaleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HorzScaleOptions"))),(0,i.yg)("p",null,"Time scale options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"crosshair"},"crosshair"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"crosshair"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/CrosshairOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CrosshairOptions"))),(0,i.yg)("p",null,"The crosshair shows the intersection of the price and time scale values at any point on the chart."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"grid"},"grid"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"grid"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/GridOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"GridOptions"))),(0,i.yg)("p",null,"A grid is represented in the chart background as a vertical and horizontal lines drawn at the levels of visible marks of price and the time scales."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"handlescroll"},"handleScroll"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"handleScroll"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HandleScrollOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HandleScrollOptions"))),(0,i.yg)("p",null,"Scroll options, or a boolean flag that enables/disables scrolling"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"handlescale"},"handleScale"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"handleScale"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/HandleScaleOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HandleScaleOptions"))),(0,i.yg)("p",null,"Scale options, or a boolean flag that enables/disables scaling"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"kineticscroll"},"kineticScroll"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"kineticScroll"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/KineticScrollOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"KineticScrollOptions"))),(0,i.yg)("p",null,"Kinetic scroll options"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"trackingmode"},"trackingMode"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"trackingMode"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/TrackingModeOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"TrackingModeOptions"))),(0,i.yg)("p",null,"Represent options for the tracking mode's behavior."),(0,i.yg)("p",null,"Mobile users will not have the ability to see the values/dates like they do on desktop.\nTo see it, they should enter the tracking mode. The tracking mode will deactivate the scrolling\nand make it possible to check values and dates."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"localization"},"localization"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"localization"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/interfaces/LocalizationOptionsBase"},(0,i.yg)("inlineCode",{parentName:"a"},"LocalizationOptionsBase"))),(0,i.yg)("p",null,"Basic localization options"))}h.isMDXComponent=!0}}]);