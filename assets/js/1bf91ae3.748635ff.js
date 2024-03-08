"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9295],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var i=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(t),m=n,d=h["".concat(s,".").concat(m)]||h[m]||g[m]||r;return t?i.createElement(d,o(o({ref:a},p),{},{components:t})):i.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[h]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7279:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(58168),n=(t(96540),t(15680));const r={sidebar_position:1},o="Series types",l={unversionedId:"series-types",id:"version-4.0/series-types",title:"Series types",description:"In this article you can read a brief overview of all supported series types.",source:"@site/versioned_docs/version-4.0/series-types.md",sourceDirName:".",slug:"/series-types",permalink:"/lightweight-charts/docs/4.0/series-types",draft:!1,tags:[],version:"4.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/lightweight-charts/docs/4.0/"},next:{title:"Price scale",permalink:"/lightweight-charts/docs/4.0/price-scale"}},s={},c=[{value:"A series customizations",id:"a-series-customizations",level:2},{value:"Area",id:"area",level:2},{value:"Bar",id:"bar",level:2},{value:"Baseline",id:"baseline",level:2},{value:"Candlestick",id:"candlestick",level:2},{value:"Histogram",id:"histogram",level:2},{value:"Line",id:"line",level:2}],p={toc:c},h="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(h,(0,i.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"series-types"},"Series types"),(0,n.yg)("p",null,"In this article you can read a brief overview of all supported series types."),(0,n.yg)("h2",{id:"a-series-customizations"},"A series customizations"),(0,n.yg)("p",null,"Any type of series can be customized and the set of available options that you can apply depends on a type of a series (see docs for each series type below)."),(0,n.yg)("p",null,"If you'd like to change any option of a series, you could do this in different ways:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can specify the default options while creating a series:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// change default top & bottom colors of an area series in creating time\nconst series = chart.addAreaSeries({\n    topColor: 'red',\n    bottomColor: 'green',\n});\n")),(0,n.yg)("p",{parentName:"li"},"Note that every method to create a series has an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"options")," parameter.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi#applyoptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi.applyOptions"))," method to apply other options on the fly:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-js"},"// updating candlestick series options on the fly\ncandlestickSeries.applyOptions({\n    upColor: 'red',\n    downColor: 'blue',\n});\n")))),(0,n.yg)("h2",{id:"area"},"Area"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addareaseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addAreaSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SingleValueData"},(0,n.yg)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/AreaStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaStyleOptions")))),(0,n.yg)("p",null,"An area chart is basically a colored area between the line connecting all data points and ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/time-scale"},"the time scale"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst areaSeries = chart.addAreaSeries({ lineColor: LINE_LINE_COLOR, topColor: AREA_TOP_COLOR, bottomColor: AREA_BOTTOM_COLOR });\n\nconst data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nareaSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"bar"},"Bar"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addbarseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addBarSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/BarStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BarStyleOptions")))),(0,n.yg)("p",null,"A bar chart shows price movements in the form of bars."),(0,n.yg)("p",null,"Vertical line length of a bar is limited by the highest and lowest price values.\nOpen & Close values are represented by tick marks, on the left & right hand side of the bar respectively:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst barSeries = chart.addBarSeries({ upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR });\n\nconst data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];\n\nbarSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"baseline"},"Baseline"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addbaselineseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addBaselineSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SingleValueData"},(0,n.yg)("inlineCode",{parentName:"a"},"SingleValueData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/BaselineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineStyleOptions")))),(0,n.yg)("p",null,"A baseline is basically two colored areas (top and bottom) between the line connecting all data points and ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BaselineStyleOptions#basevalue"},"the base value line"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst baselineSeries = chart.addBaselineSeries({ baseValue: { type: 'price', price: 25 }, topLineColor: BASELINE_TOP_LINE_COLOR, topFillColor1: BASELINE_TOP_FILL_COLOR1, topFillColor2: BASELINE_TOP_FILL_COLOR2, bottomLineColor: BASELINE_BOTTOM_LINE_COLOR, bottomFillColor1: BASELINE_BOTTOM_FILL_COLOR1, bottomFillColor2: BASELINE_BOTTOM_FILL_COLOR2 });\n\nconst data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nbaselineSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"candlestick"},"Candlestick"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addcandlestickseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addCandlestickSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/CandlestickStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickStyleOptions")))),(0,n.yg)("p",null,"A candlestick chart shows price movements in the form of candlesticks.\nOn the candlestick chart, open & close values form a solid body of a candle while wicks show high & low values for a candlestick's time interval:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst candlestickSeries = chart.addCandlestickSeries({ upColor: BAR_UP_COLOR, downColor: BAR_DOWN_COLOR, borderVisible: false, wickUpColor: BAR_UP_COLOR, wickDownColor: BAR_DOWN_COLOR });\n\nconst data = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 }, { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 }, { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 }, { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 }, { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 }, { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 }, { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 }, { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 }, { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 }, { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];\n\ncandlestickSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"histogram"},"Histogram"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addhistogramseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addHistogramSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/HistogramStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramStyleOptions")))),(0,n.yg)("p",null,"A histogram series is a graphical representation of the value distribution.\nHistogram creates intervals (columns) and counts how many values fall into each column:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst histogramSeries = chart.addHistogramSeries({ color: HISTOGRAM_COLOR });\n\nconst data = [{ value: 1, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922, color: 'red' }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722, color: 'red' }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922, color: 'red' }];\n\nhistogramSeries.setData(data);\n\nchart.timeScale().fitContent();\n")),(0,n.yg)("h2",{id:"line"},"Line"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Method to create"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/IChartApi#addlineseries"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.addLineSeries"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Data format"),": ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData"))," or ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Style options"),": a mix of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsCommon"},(0,n.yg)("inlineCode",{parentName:"a"},"SeriesOptionsCommon"))," and ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/4.0/api/interfaces/LineStyleOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"LineStyleOptions")))),(0,n.yg)("p",null,"A line chart is a type of chart that displays information as series of the data points connected by straight line segments:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:"chart replaceThemeConstants",chart:!0,replaceThemeConstants:!0},"const chartOptions = { layout: { textColor: CHART_TEXT_COLOR, background: { type: 'solid', color: CHART_BACKGROUND_COLOR } } };\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst lineSeries = chart.addLineSeries({ color: LINE_LINE_COLOR });\n\nconst data = [{ value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }];\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n")))}g.isMDXComponent=!0}}]);