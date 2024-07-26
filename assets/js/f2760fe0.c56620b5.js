"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87313],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=n.createContext({}),s=function(e){var a=n.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=s(e.components);return n.createElement(g.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,c=d["".concat(g,".").concat(m)]||d[m]||y[m]||i;return t?n.createElement(c,l(l({ref:a},o),{},{components:t})):n.createElement(c,l({ref:a},o))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var p={};for(var g in a)hasOwnProperty.call(a,g)&&(p[g]=a[g]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98442:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const i={id:"ISeriesApi",title:"Interface: ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>",sidebar_label:"ISeriesApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/ISeriesApi",id:"api/interfaces/ISeriesApi",title:"Interface: ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>",description:"Represents the interface for interacting with series.",source:"@site/docs/api/interfaces/ISeriesApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesApi",permalink:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ISeriesApi",title:"Interface: ISeriesApi<TSeriesType, HorzScaleItem, TData, TOptions, TPartialOptions>",sidebar_label:"ISeriesApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},g={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"priceFormatter",id:"priceformatter",level:3},{value:"Returns",id:"returns",level:4},{value:"priceToCoordinate",id:"pricetocoordinate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"coordinateToPrice",id:"coordinatetoprice",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"barsInLogicalRange",id:"barsinlogicalrange",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"applyOptions",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-5",level:4},{value:"priceScale",id:"pricescale",level:3},{value:"Returns",id:"returns-6",level:4},{value:"setData",id:"setdata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"dataByIndex",id:"databyindex",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4},{value:"data",id:"data",level:3},{value:"Returns",id:"returns-10",level:4},{value:"subscribeDataChanged",id:"subscribedatachanged",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-11",level:4},{value:"unsubscribeDataChanged",id:"unsubscribedatachanged",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"setMarkers",id:"setmarkers",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-13",level:4},{value:"markers",id:"markers",level:3},{value:"Returns",id:"returns-14",level:4},{value:"createPriceLine",id:"createpriceline",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-15",level:4},{value:"removePriceLine",id:"removepriceline",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-16",level:4},{value:"seriesType",id:"seriestype",level:3},{value:"Returns",id:"returns-17",level:4},{value:"attachPrimitive",id:"attachprimitive",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-18",level:4},{value:"detachPrimitive",id:"detachprimitive",level:3},{value:"Parameters",id:"parameters-13",level:4},{value:"Returns",id:"returns-19",level:4}],o={toc:s},d="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Represents the interface for interacting with series."),(0,r.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TSeriesType")),(0,r.yg)("td",{parentName:"tr",align:"left"},"extends ",(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#seriestype"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesType")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#time"},(0,r.yg)("inlineCode",{parentName:"a"},"Time")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TData")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesDataItemTypeMap"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem"),">","[",(0,r.yg)("inlineCode",{parentName:"td"},"TSeriesType"),"]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsMap"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),"[",(0,r.yg)("inlineCode",{parentName:"td"},"TSeriesType"),"]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TPartialOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesPartialOptionsMap"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesPartialOptionsMap")),"[",(0,r.yg)("inlineCode",{parentName:"td"},"TSeriesType"),"]")))),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"priceformatter"},"priceFormatter"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"priceFormatter"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceFormatter"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceFormatter"))),(0,r.yg)("p",null,"Returns current price formatter"),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceFormatter"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceFormatter"))),(0,r.yg)("p",null,"Interface to the price formatter object that can be used to format prices in the same way as the chart does"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"pricetocoordinate"},"priceToCoordinate"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"priceToCoordinate"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"price"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"Converts specified series price to pixel coordinate according to the series price scale"),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"price")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Input price to be converted")))),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#coordinate"},(0,r.yg)("inlineCode",{parentName:"a"},"Coordinate"))),(0,r.yg)("p",null,"Pixel coordinate of the price level on the chart"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"coordinatetoprice"},"coordinateToPrice"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"coordinateToPrice"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"coordinate"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#barprice"},(0,r.yg)("inlineCode",{parentName:"a"},"BarPrice"))),(0,r.yg)("p",null,"Converts specified coordinate to price value according to the series price scale"),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"coordinate")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Input coordinate to be converted")))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#barprice"},(0,r.yg)("inlineCode",{parentName:"a"},"BarPrice"))),(0,r.yg)("p",null,"Price value of the coordinate on the chart"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"barsinlogicalrange"},"barsInLogicalRange"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"barsInLogicalRange"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"range"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarsInfo"},(0,r.yg)("inlineCode",{parentName:"a"},"BarsInfo")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,r.yg)("p",null,"Returns bars information for the series in the provided ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/time-scale#logical-range"},"logical range")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),", if no series data has been found in the requested range.\nThis method can be used, for instance, to implement downloading historical data while scrolling to prevent a user from seeing empty space."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Getting bars info for current visible range"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const barsInfo = series.barsInLogicalRange(chart.timeScale().getVisibleLogicalRange());\nconsole.log(barsInfo);\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Implementing downloading historical data while scrolling"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {\n    const barsInfo = series.barsInLogicalRange(newVisibleLogicalRange);\n    // if there less than 50 bars to the left of the visible area\n    if (barsInfo !== null && barsInfo.barsBefore < 50) {\n        // try to load additional historical data and prepend it to the series data\n    }\n}\n\nchart.timeScale().subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);\n")),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"range")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/Range"},(0,r.yg)("inlineCode",{parentName:"a"},"Range")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"number"),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The ",(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/time-scale#logical-range"},"logical range")," to retrieve info for.")))),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarsInfo"},(0,r.yg)("inlineCode",{parentName:"a"},"BarsInfo")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,r.yg)("p",null,"The bars info for the given logical range."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"applyoptions"},"applyOptions"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"applyOptions"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Applies new options to the existing series\nYou can set options initially when you create series or use the ",(0,r.yg)("inlineCode",{parentName:"p"},"applyOptions")," method of the series to change the existing options.\nNote that you can only pass options you want to change."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TPartialOptions")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"options"},"options"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"options"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"TOptions"),">"),(0,r.yg)("p",null,"Returns currently applied options"),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,r.yg)("inlineCode",{parentName:"p"},"TOptions"),">"),(0,r.yg)("p",null,"Full set of currently applied options, including defaults"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"pricescale"},"priceScale"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"priceScale"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceScaleApi"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,r.yg)("p",null,"Returns interface of the price scale the series is currently attached"),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceScaleApi"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,r.yg)("p",null,"IPriceScaleApi object to control the price scale"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setdata"},"setData"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setData"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Sets or replaces series data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Setting data to a line series"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"lineSeries.setData([\n    { time: '2018-12-12', value: 24.11 },\n    { time: '2018-12-13', value: 31.74 },\n]);\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Setting data to a bars (or candlestick) series"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"barSeries.setData([\n    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },\n    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },\n]);\n")),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"data")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TData"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Ordered (earlier time point goes first) array of data items. Old data is fully replaced with the new one.")))),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"update"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"bar"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Adds new data item to the existing set (or updates the latest item if times of the passed/latest items are equal)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Updating line series data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"lineSeries.update({\n    time: '2018-12-12',\n    value: 24.11,\n});\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("p",null,"Updating bar (or candlestick) series data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"barSeries.update({\n    time: '2018-12-19',\n    open: 141.77,\n    high: 170.39,\n    low: 120.25,\n    close: 145.72,\n});\n")),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"bar")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"TData")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A single data item to be added. Time of the new item must be greater or equal to the latest existing time point. If the new item's time is equal to the last existing item's time, then the existing item is replaced with the new one.")))),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"databyindex"},"dataByIndex"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"dataByIndex"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"logicalIndex"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"mismatchDirection?"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"TData")),(0,r.yg)("p",null,"Returns a bar data by provided logical index."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const originalData = series.dataByIndex(10, LightweightCharts.MismatchDirection.NearestLeft);\n")),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"logicalIndex")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Logical index")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"mismatchDirection?")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/enums/MismatchDirection"},(0,r.yg)("inlineCode",{parentName:"a"},"MismatchDirection"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Search direction if no data found at provided logical index.")))),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TData")),(0,r.yg)("p",null,"Original data item provided via setData or update methods."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"data"},"data"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"data"),"(): readonly ",(0,r.yg)("inlineCode",{parentName:"p"},"TData"),"[]"),(0,r.yg)("p",null,"Returns all the bar data for the series."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const originalData = series.data();\n")),(0,r.yg)("h4",{id:"returns-10"},"Returns"),(0,r.yg)("p",null,"readonly ",(0,r.yg)("inlineCode",{parentName:"p"},"TData"),"[]"),(0,r.yg)("p",null,"Original data items provided via setData or update methods."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"subscribedatachanged"},"subscribeDataChanged"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribeDataChanged"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Subscribe to the data changed event. This event is fired whenever the ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"setData")," method is evoked\non the series."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"function myHandler() {\n    const data = series.data();\n    console.log(`The data has changed. New Data length: ${data.length}`);\n}\n\nseries.subscribeDataChanged(myHandler);\n")),(0,r.yg)("h4",{id:"parameters-7"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#datachangedhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"DataChangedHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Handler to be called on a data changed event.")))),(0,r.yg)("h4",{id:"returns-11"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribedatachanged"},"unsubscribeDataChanged"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribeDataChanged"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"handler"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Unsubscribe a handler that was previously subscribed using ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#subscribedatachanged"},"subscribeDataChanged"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"chart.unsubscribeDataChanged(myHandler);\n")),(0,r.yg)("h4",{id:"parameters-8"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"handler")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#datachangedhandler"},(0,r.yg)("inlineCode",{parentName:"a"},"DataChangedHandler"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Previously subscribed handler")))),(0,r.yg)("h4",{id:"returns-12"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"setmarkers"},"setMarkers"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"setMarkers"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Allows to set/replace all existing series markers with new ones."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"series.setMarkers([\n    {\n        time: '2019-04-09',\n        position: 'aboveBar',\n        color: 'black',\n        shape: 'arrowDown',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'red',\n        shape: 'arrowUp',\n        id: 'id3',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'orange',\n        shape: 'arrowUp',\n        id: 'id4',\n        text: 'example',\n        size: 2,\n    },\n]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.hoveredObjectId);\n});\n\nchart.subscribeClick(param => {\n    console.log(param.hoveredObjectId);\n});\n")),(0,r.yg)("h4",{id:"parameters-9"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"data")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/SeriesMarker"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem"),">","[]"),(0,r.yg)("td",{parentName:"tr",align:"left"},"An array of series markers. This array should be sorted by time. Several markers with same time are allowed.")))),(0,r.yg)("h4",{id:"returns-13"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"markers"},"markers"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"markers"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesMarker"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">","[]"),(0,r.yg)("p",null,"Returns an array of series markers."),(0,r.yg)("h4",{id:"returns-14"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesMarker"},(0,r.yg)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,r.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">","[]"),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"createpriceline"},"createPriceLine"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"createPriceLine"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceLine"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,r.yg)("p",null,"Creates a new price line"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const priceLine = series.createPriceLine({\n    price: 80.0,\n    color: 'green',\n    lineWidth: 2,\n    lineStyle: LightweightCharts.LineStyle.Dotted,\n    axisLabelVisible: true,\n    title: 'P/L 500',\n});\n")),(0,r.yg)("h4",{id:"parameters-10"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"options")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#createpricelineoptions"},(0,r.yg)("inlineCode",{parentName:"a"},"CreatePriceLineOptions"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Any subset of options, however ",(0,r.yg)("inlineCode",{parentName:"td"},"price")," is required.")))),(0,r.yg)("h4",{id:"returns-15"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IPriceLine"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"removepriceline"},"removePriceLine"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"removePriceLine"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"line"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Removes the price line that was created before."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"const priceLine = series.createPriceLine({ price: 80.0 });\nseries.removePriceLine(priceLine);\n")),(0,r.yg)("h4",{id:"parameters-11"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"line")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/interfaces/IPriceLine"},(0,r.yg)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"A line to remove.")))),(0,r.yg)("h4",{id:"returns-16"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"seriestype"},"seriesType"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"seriesType"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"TSeriesType")),(0,r.yg)("p",null,"Return current series type."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'const lineSeries = chart.addLineSeries();\nconsole.log(lineSeries.seriesType()); // "Line"\n\nconst candlestickSeries = chart.addCandlestickSeries();\nconsole.log(candlestickSeries.seriesType()); // "Candlestick"\n')),(0,r.yg)("h4",{id:"returns-17"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TSeriesType")),(0,r.yg)("p",null,"Type of the series."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"attachprimitive"},"attachPrimitive"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"attachPrimitive"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"primitive"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Attaches additional drawing primitive to the series"),(0,r.yg)("h4",{id:"parameters-12"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#iseriesprimitive"},(0,r.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitive")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem"),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"any implementation of ISeriesPrimitive interface")))),(0,r.yg)("h4",{id:"returns-18"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"detachprimitive"},"detachPrimitive"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"detachPrimitive"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"primitive"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,"Detaches additional drawing primitive from the series"),(0,r.yg)("h4",{id:"parameters-13"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"primitive")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#iseriesprimitive"},(0,r.yg)("inlineCode",{parentName:"a"},"ISeriesPrimitive")),"<",(0,r.yg)("inlineCode",{parentName:"td"},"HorzScaleItem"),">"),(0,r.yg)("td",{parentName:"tr",align:"left"},"implementation of ISeriesPrimitive interface attached before Does nothing if specified primitive was not attached")))),(0,r.yg)("h4",{id:"returns-19"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")))}y.isMDXComponent=!0}}]);