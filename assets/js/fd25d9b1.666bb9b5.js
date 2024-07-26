"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53604],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),u=i,m=g["".concat(s,".").concat(u)]||g[u]||h[u]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(58168),i=(r(96540),r(15680));const a={},l="From v2 to v3",o={unversionedId:"migrations/from-v2-to-v3",id:"version-4.0/migrations/from-v2-to-v3",title:"From v2 to v3",description:"Lightweight Charts\u2122 library 3.0 announces the major improvements: supporting two price scales and improving the time scale API.",source:"@site/versioned_docs/version-4.0/migrations/from-v2-to-v3.md",sourceDirName:"migrations",slug:"/migrations/from-v2-to-v3",permalink:"/lightweight-charts/docs/4.0/migrations/from-v2-to-v3",draft:!1,tags:[],version:"4.0",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Working with time zones",permalink:"/lightweight-charts/docs/4.0/time-zones"},next:{title:"From v3 to v4",permalink:"/lightweight-charts/docs/4.0/migrations/from-v3-to-v4"}},s={},c=[{value:"Time Scale API",id:"time-scale-api",level:2},{value:"Two price scales",id:"two-price-scales",level:2},{value:"Default behavior",id:"default-behavior",level:3},{value:"Left price scale",id:"left-price-scale",level:3},{value:"No price scale",id:"no-price-scale",level:3},{value:"Creating overlay",id:"creating-overlay",level:3},{value:"Move price scale from right to left or vice versa",id:"move-price-scale-from-right-to-left-or-vice-versa",level:3}],p={toc:c},g="wrapper";function h(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"from-v2-to-v3"},"From v2 to v3"),(0,i.yg)("p",null,"Lightweight Charts\u2122 library 3.0 announces the major improvements: supporting two price scales and improving the time scale API.\nIn order of keep the API clear and consistent, we decided to allow breaking change of the API."),(0,i.yg)("p",null,"In this document you can find the migration guide from the previous version to 3.0."),(0,i.yg)("h2",{id:"time-scale-api"},"Time Scale API"),(0,i.yg)("p",null,"Previously, to handle changing visible time range you needed to use ",(0,i.yg)("inlineCode",{parentName:"p"},"subscribeVisibleTimeRangeChange")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"unsubscribeVisibleTimeRangeChange")," to subscribe and unsubscribe from visible range events.\nThese methods were available in the chart object  (e.g. you call it like ",(0,i.yg)("inlineCode",{parentName:"p"},"chart.subscribeVisibleTimeRangeChange(func)"),")."),(0,i.yg)("p",null,"In 3.0 in order to make API more consistent with the new API we decided to move these methods to ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/ITimeScaleApi"},"ITimeScaleApi"),"\n(along with the new subscription methods ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/ITimeScaleApi#subscribevisiblelogicalrangechange"},(0,i.yg)("inlineCode",{parentName:"a"},"ITimeScaleApi.subscribeVisibleLogicalRangeChange"))," and ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/ITimeScaleApi#unsubscribevisiblelogicalrangechange"},(0,i.yg)("inlineCode",{parentName:"a"},"ITimeScaleApi.unsubscribeVisibleLogicalRangeChange")),")."),(0,i.yg)("p",null,"So, to migrate your code to 3.0 you just need to replace:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"chart.subscribeVisibleTimeRangeChange")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"chart.timeScale().subscribeVisibleTimeRangeChange")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"chart.unsubscribeVisibleTimeRangeChange")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"chart.timeScale().unsubscribeVisibleTimeRangeChange"))),(0,i.yg)("h2",{id:"two-price-scales"},"Two price scales"),(0,i.yg)("p",null,"We understand disadvantages of breaking changes in the API, so we have not removed support of the current API at all, but have deprecated it, so the most common cases will continue to work."),(0,i.yg)("p",null,"You can refer to the new API ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/price-scale"},"here"),"."),(0,i.yg)("p",null,"Following are migration rules."),(0,i.yg)("h3",{id:"default-behavior"},"Default behavior"),(0,i.yg)("p",null,"Default behavior is not changed. If you do not specify price scale options, the chart will have the right price scale visible and all the series will assign to it."),(0,i.yg)("h3",{id:"left-price-scale"},"Left price scale"),(0,i.yg)("p",null,"If you need the price scale to be drawn on the left side, you should make the following changes.\ninstead of"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container, {\n    priceScale: {\n        position: 'left',\n    },\n});\n")),(0,i.yg)("p",null,"use"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container, {\n    rightPriceScale: {\n        visible: false,\n    },\n    leftPriceScale: {\n        visible: true,\n    },\n});\n")),(0,i.yg)("p",null,"then specify target price scale while creating a series:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const histSeries = chart.addHistogramSeries({\n    priceScaleId: 'left',\n});\n")),(0,i.yg)("p",null,"New version fully supports this case via the old API, however this support will be removed in the future releases."),(0,i.yg)("h3",{id:"no-price-scale"},"No price scale"),(0,i.yg)("p",null,"To create chart without any visible price scale, instead of"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container, {\n    priceScale: {\n        position: 'none',\n    },\n});\n")),(0,i.yg)("p",null,"use"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container, {\n    leftPriceScale: {\n        visible: false,\n    },\n    rightPriceScale: {\n        visible: false,\n    },\n});\n")),(0,i.yg)("p",null,"New version fully supports this case via the old API, however this support will be removed in the future releases."),(0,i.yg)("h3",{id:"creating-overlay"},"Creating overlay"),(0,i.yg)("p",null,"To create an overlay series, instead of"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const histogramSeries = chart.addHistogramSeries({\n    overlay: true,\n});\n")),(0,i.yg)("p",null,"use"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const histogramSeries = chart.addHistogramSeries({\n    // or any other _the same_ id for all overlay series\n    priceScaleId: '',\n});\n")),(0,i.yg)("p",null,"New version fully supports this case via the old API, however this support will be removed in the future releases."),(0,i.yg)("h3",{id:"move-price-scale-from-right-to-left-or-vice-versa"},"Move price scale from right to left or vice versa"),(0,i.yg)("p",null,"To do this, instead of"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container);\n\nconst mainSeries = chart.addLineSeries();\n\n// ...\n\nchart.applyOptions({\n    priceScale: {\n        position: 'left',\n    },\n});\n")),(0,i.yg)("p",null,"use"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"const chart = LightweightCharts.createChart(container);\n\nconst mainSeries = chart.addLineSeries();\n\n// ...\n\nchart.applyOptions({\n    leftPriceScale: {\n        visible: true,\n    },\n    rightPriceScale: {\n        visible: false,\n    },\n});\n\nmainSeries.applyOptions({\n    priceScaleId: 'left',\n});\n")),(0,i.yg)("p",null,"New version does not support this case via the old API, so, if you use it, you should migrate your code in order of keeping it working."))}h.isMDXComponent=!0}}]);