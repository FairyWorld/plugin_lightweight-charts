"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28322"],{22330:function(e,t,r){r.r(t),r.d(t,{default:()=>u,example:()=>d,frontMatter:()=>l,assets:()=>c,metadata:()=>i,toc:()=>o,contentTitle:()=>h});var i=JSON.parse('{"id":"intro","title":"Getting started","description":"Requirements","source":"@site/versioned_docs/version-5.0/intro.mdx","sourceDirName":".","slug":"/","permalink":"/lightweight-charts/docs/","draft":false,"unlisted":false,"tags":[],"version":"5.0","sidebarPosition":0,"frontMatter":{"slug":"/","id":"intro","sidebar_position":0},"sidebar":"docsSidebar","next":{"title":"Series types","permalink":"/lightweight-charts/docs/series-types"}}'),a=r("85893"),n=r("50065"),s=r("30353");let l={slug:"/",id:"intro",sidebar_position:0},h="Getting started",c={},d=`const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };
const chart = createChart(document.getElementById('container'), chartOptions);
const areaSeries = chart.addSeries(AreaSeries, {
    lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR,
    bottomColor: AREA_BOTTOM_COLOR,
});
areaSeries.setData([
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
]);

const candlestickSeries = chart.addSeries(CandlestickSeries, {
    upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false,
    wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR,
});
candlestickSeries.setData([
    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
]);

chart.timeScale().fitContent();`,o=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Build variants",id:"build-variants",level:3},{value:"License and attribution",id:"license-and-attribution",level:2},{value:"Creating a chart",id:"creating-a-chart",level:2},{value:"Creating a series",id:"creating-a-series",level:2},{value:"Setting and updating a data",id:"setting-and-updating-a-data",level:2},{value:"Setting the data to a series",id:"setting-the-data-to-a-series",level:3},{value:"Updating the data in a series",id:"updating-the-data-in-a-series",level:3}];function g(e){let t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.p,{children:["Lightweight Charts\u2122 is ",(0,a.jsx)(t.em,{children:"a client-side"})," library that is not designed to work on the server side, for example, with Node.js."]}),"\n",(0,a.jsxs)(t.p,{children:["The library code targets the ",(0,a.jsxs)(t.a,{href:"https://262.ecma-international.org/11.0/",children:[(0,a.jsx)(t.em,{children:"ES2020"})," language specification"]}),".\nTherefore, the browsers you work with should support this language revision. Consider the following ",(0,a.jsx)(t.a,{href:"https://compat-table.github.io/compat-table/es2016plus/",children:"table"})," to ensure the browser compatibility."]}),"\n",(0,a.jsxs)(t.p,{children:["To support previous revisions, you can set up a transpilation process for the ",(0,a.jsx)(t.code,{children:"lightweight-charts"})," package in your build system using tools such as Babel.\nIf you encounter any issues, open a ",(0,a.jsx)(t.a,{href:"https://github.com/tradingview/lightweight-charts/issues",children:"GitHub issue"})," with detailed information, and we will investigate potential solutions."]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["To set up the library, install the ",(0,a.jsx)(t.a,{href:"https://www.npmjs.com/package/lightweight-charts",children:(0,a.jsx)(t.code,{children:"lightweight-charts"})})," npm package:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"npm install --save lightweight-charts\n"})}),"\n",(0,a.jsx)(t.p,{children:"The package includes TypeScript declarations, enabling seamless integration within TypeScript projects."}),"\n",(0,a.jsx)(t.h3,{id:"build-variants",children:"Build variants"}),"\n",(0,a.jsx)(t.p,{children:"The library ships with the following build variants:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Dependencies included"}),(0,a.jsx)(t.th,{children:"Mode"}),(0,a.jsx)(t.th,{children:"ES module"}),(0,a.jsxs)(t.th,{children:["IIFE (",(0,a.jsx)(t.code,{children:"window.LightweightCharts"}),")"]})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"PROD"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.production.mjs"})}),(0,a.jsx)(t.td,{children:"N/A"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"No"}),(0,a.jsx)(t.td,{children:"DEV"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.development.mjs"})}),(0,a.jsx)(t.td,{children:"N/A"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Yes (standalone)"}),(0,a.jsx)(t.td,{children:"PROD"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.standalone.production.mjs"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.standalone.production.js"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Yes (standalone)"}),(0,a.jsx)(t.td,{children:"DEV"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.standalone.development.mjs"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"lightweight-charts.standalone.development.js"})})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"license-and-attribution",children:"License and attribution"}),"\n",(0,a.jsxs)(t.p,{children:["The Lightweight Charts\u2122 license ",(0,a.jsx)(t.strong,{children:"requires"})," specifying TradingView as the product creator.\nYou should add the following attributes to a public page of your website or mobile application:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Attribution notice from the ",(0,a.jsx)(t.a,{href:"https://github.com/tradingview/lightweight-charts/blob/master/NOTICE",children:(0,a.jsx)(t.code,{children:"NOTICE"})})," file"]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.a,{href:"https://www.tradingview.com",children:"https://www.tradingview.com"})," link"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-chart",children:"Creating a chart"}),"\n",(0,a.jsx)(t.p,{children:"As a first step, import the library to your file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To create a chart, use the ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/functions/createChart",children:(0,a.jsx)(t.code,{children:"createChart"})})," function. You can call the function multiple times to create as many charts as needed:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { createChart } from 'lightweight-charts';\n\n// ...\nconst firstChart = createChart(document.getElementById('firstContainer'));\nconst secondChart = createChart(document.getElementById('secondContainer'));\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As a result, ",(0,a.jsx)(t.code,{children:"createChart"})," returns an ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/IChartApi",children:(0,a.jsx)(t.code,{children:"IChartApi"})})," object that allows you to interact with the created chart."]}),"\n",(0,a.jsx)(t.h2,{id:"creating-a-series",children:"Creating a series"}),"\n",(0,a.jsx)(t.p,{children:"When the chart is created, you can display data on it."}),"\n",(0,a.jsxs)(t.p,{children:["The basic primitive to display data is a ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi",children:"series"}),".\nThe library supports the following series types:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Area"}),"\n",(0,a.jsx)(t.li,{children:"Bar"}),"\n",(0,a.jsx)(t.li,{children:"Baseline"}),"\n",(0,a.jsx)(t.li,{children:"Candlestick"}),"\n",(0,a.jsx)(t.li,{children:"Histogram"}),"\n",(0,a.jsx)(t.li,{children:"Line"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["To create a series, use the ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/IChartApi#addseries",children:(0,a.jsx)(t.code,{children:"addSeries"})})," method from ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/IChartApi",children:(0,a.jsx)(t.code,{children:"IChartApi"})}),".\nAs a parameter, specify a ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/series-types",children:"series type"})," you would like to create:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { AreaSeries, BarSeries, BaselineSeries, createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addSeries(AreaSeries);\nconst barSeries = chart.addSeries(BarSeries);\nconst baselineSeries = chart.addSeries(BaselineSeries);\n// ...\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that a series ",(0,a.jsx)(t.strong,{children:"cannot be transferred"})," from one type to another one, since different series types require different data and options types."]}),"\n",(0,a.jsx)(t.h2,{id:"setting-and-updating-a-data",children:"Setting and updating a data"}),"\n",(0,a.jsx)(t.p,{children:"When the series is created, you can populate it with data.\nNote that the API calls remain the same regardless of the series type, although the data format may vary."}),"\n",(0,a.jsx)(t.h3,{id:"setting-the-data-to-a-series",children:"Setting the data to a series"}),"\n",(0,a.jsxs)(t.p,{children:["To set the data to a series, you should call the ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#setdata",children:(0,a.jsx)(t.code,{children:"ISeriesApi.setData"})})," method:"]}),"\n","\n",(0,a.jsx)(s.ZP,{className:"language-js",replaceThemeConstants:!0,chart:!0,children:d}),"\n",(0,a.jsxs)(t.p,{children:["You can also use ",(0,a.jsx)(t.code,{children:"setData"})," to replace all data items."]}),"\n",(0,a.jsx)(t.h3,{id:"updating-the-data-in-a-series",children:"Updating the data in a series"}),"\n",(0,a.jsxs)(t.p,{children:["If your data is updated, for example in real-time, you may also need to refresh the chart accordingly.\nTo do this, call the ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#update",children:(0,a.jsx)(t.code,{children:"ISeriesApi.update"})})," method that allows you to update the last data item or add a new one."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { AreaSeries, CandlestickSeries, createChart } from 'lightweight-charts';\n\nconst chart = createChart(container);\n\nconst areaSeries = chart.addSeries(AreaSeries);\nareaSeries.setData([\n    // Other data items\n    { time: '2018-12-31', value: 22.67 },\n]);\n\nconst candlestickSeries = chart.addSeries(CandlestickSeries);\ncandlestickSeries.setData([\n    // Other data items\n    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },\n]);\n\n// ...\n\n// Update the most recent bar\nareaSeries.update({ time: '2018-12-31', value: 25 });\ncandlestickSeries.update({ time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 112 });\n\n// Creating the new bar\nareaSeries.update({ time: '2019-01-01', value: 20 });\ncandlestickSeries.update({ time: '2019-01-01', open: 112, high: 112, low: 100, close: 101 });\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We do not recommend calling ",(0,a.jsx)(t.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#setdata",children:(0,a.jsx)(t.code,{children:"ISeriesApi.setData"})})," to update the chart, as this method replaces all series data and can significantly affect the performance."]})]})}function u(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},30353:function(e,t,r){r.d(t,{ZP:()=>x});var i=r("85893"),a=r("67294"),n=r("31705"),s=r("44634"),l=r("79207"),h=r("57378"),c=r("6646");function d(e,t,r){e.addEventListener("resize",()=>{let e=t.getBoundingClientRect();r(e.width,e.height)},!0)}let o={3.8:async e=>{let t=await r.e("70967").then(r.bind(r,51083));return{module:t,createChart:(r,i)=>{let a=t.createChart(r,i);return d(e,r,a.resize.bind(a)),a},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},"4.0":async e=>{let t=await r.e("98966").then(r.bind(r,11413));return{module:t,createChart:(r,i)=>{let a=t.createChart(r,i);return d(e,r,a.resize.bind(a)),a},createChartEx:void 0,createYieldCurveChart:void 0,createOptionsChart:void 0}},4.1:async e=>{let t=await r.e("85998").then(r.bind(r,1860));return{module:t,createChart:(r,i)=>{let a=t.createChart(r,i);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,i,a)=>{let n=t.createChartEx(r,i,a);return d(e,r,n.resize.bind(n)),n},createYieldCurveChart:void 0,createOptionsChart:void 0}},4.2:async e=>{let t=await r.e("15373").then(r.bind(r,15757));return{module:t,createChart:(r,i)=>{let a=t.createChart(r,i);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,i,a)=>{let n=t.createChartEx(r,i,a);return d(e,r,n.resize.bind(n)),n},createYieldCurveChart:void 0,createOptionsChart:void 0}},"5.0":async e=>{let t=await r.e("11191").then(r.bind(r,96473));return{module:t,createChart:(r,i)=>{let a=t.createChart(r,i);return d(e,r,a.resize.bind(a)),a},createChartEx:(r,i,a)=>{let n=t.createChartEx(r,i,a);return d(e,r,n.resize.bind(n)),n},createYieldCurveChart:(r,i)=>{let a=t.createYieldCurveChart(r,i);return d(e,r,a.resize.bind(a)),a},createOptionsChart:(r,i)=>{let a=t.createOptionsChart(r,i);return d(e,r,a.resize.bind(a)),a}}},current:async()=>{let e=await r.e("22433").then(r.bind(r,3768));return{module:e,createChart:(t,r)=>{let i=e.createChart(t,r);return d(window,t,i.resize.bind(i)),i},createChartEx:(t,r,i)=>{let a=e.createChartEx(t,r,i);return d(window,t,a.resize.bind(a)),a},createYieldCurveChart:(t,r)=>{let i=e.createYieldCurveChart(t,r);return d(window,t,i.resize.bind(i)),i},createOptionsChart:(t,r)=>{let i=e.createOptionsChart(t,r);return d(window,t,i.resize.bind(i)),i}}}},g={iframe:"iframe_R_Fr"};function u(e){let{script:t,iframeStyle:r}=e,{preferredVersion:n}=(0,h.J)(),s=c&&c.length>0?c["0"]:"",l=n?.name??s??"current",d=`
		<style>
			html,
			body,
			#container {
				width: 100%;
				height: 100%;
				overflow: hidden;
				margin: 0;
			}
		</style>
		<div id="container"></div>
		<script>
			window.run = () => {
				${t}
			};
		</script>
	`,u=a.useRef(null);return a.useEffect(()=>{let e=u.current,t=e?.contentWindow,r=e?.contentDocument;if(null===e||!t||!r)return;let i=async()=>{try{let{module:e,createChart:r,createChartEx:i,createYieldCurveChart:a,createOptionsChart:n}=await o[l](t);Object.assign(t,e),t.createChart=r,t.createChartEx=i,t.createYieldCurveChart=a,t.createOptionsChart=n,"current"===l&&(t.LineSeries=e.LineSeries,t.AreaSeries=e.AreaSeries,t.CandlestickSeries=e.CandlestickSeries,t.BarSeries=e.BarSeries,t.HistogramSeries=e.HistogramSeries),t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)i();else{let t=()=>{i(),e.removeEventListener("load",t)};e.addEventListener("load",t)}},[d]),(0,i.jsx)("iframe",{ref:u,srcDoc:d,className:g.iframe,style:r},t)}var p=r("98159");let C=()=>`${Math.random().toString(36).slice(2,11)}`,O=Object.keys(p.l.DARK),x=e=>{let{chart:t,replaceThemeConstants:r,hideableCode:h,chartOnly:c,chartOnTop:d=!1,iframeStyle:o,replaceTabs:x=!0,codeUsage:j,...m}=e,{children:w}=e,{colorMode:L}=(0,l.I)(),_=function(){let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>t(C()),[]),e}();if(r&&"string"==typeof w&&(w=function(e,t){let r=t?p.l.DARK:p.l.LIGHT,i=e;for(let e of O)i=i.replace(RegExp(e,"g"),`'${r[e]}'`);return i}(w,"dark"===L)),x&&"string"==typeof w&&(w=w.replace(/\t/g,"    ")),w=w.replace(RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||h){let e=!c&&(0,i.jsx)(n.Z,{...m,children:w}),r=t&&(0,i.jsx)(s.Z,{fallback:(0,i.jsx)("div",{className:g.iframe,children:"\xa0"}),children:()=>(0,i.jsx)(u,{script:w,iframeStyle:o})}),a=h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{id:_,type:"checkbox",className:"toggle-hidden-lines"}),(0,i.jsx)("label",{className:"toggle-label",htmlFor:_,children:"Show all code"})]});return d?(0,i.jsxs)(i.Fragment,{children:[r,j,a,e]}):(0,i.jsxs)(i.Fragment,{children:[j,a,e,r]})}return(0,i.jsx)(n.Z,{...m,children:w})}},98159:function(e,t,r){r.d(t,{l:function(){return i}});let i={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6646:function(e){e.exports=JSON.parse('["5.0","4.2","4.1","4.0","3.8"]')}}]);