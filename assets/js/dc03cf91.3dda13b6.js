"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20342"],{53:function(e,r,n){n.r(r),n.d(r,{default:()=>o,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"api/interfaces/IHorzScaleBehavior","title":"Interface: IHorzScaleBehavior\\\\<HorzScaleItem\\\\>","description":"Class interface for Horizontal scale behavior","source":"@site/versioned_docs/version-5.0/api/interfaces/IHorzScaleBehavior.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/IHorzScaleBehavior","permalink":"/lightweight-charts/docs/api/interfaces/IHorzScaleBehavior","draft":false,"unlisted":false,"tags":[],"version":"5.0","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),i=n("85893"),t=n("50065");let a={pagination_next:null,pagination_prev:null},c="Interface: IHorzScaleBehavior<HorzScaleItem>",l={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"options()",id:"options",level:3},{value:"Returns",id:"returns",level:4},{value:"setOptions()",id:"setoptions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"preprocessData()",id:"preprocessdata",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"convertHorzItemToInternal()",id:"converthorzitemtointernal",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"[species]",id:"species",level:5},{value:"createConverterToInternalObj()",id:"createconvertertointernalobj",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"key()",id:"key",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"cacheKey()",id:"cachekey",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"updateFormatter()",id:"updateformatter",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"formatHorzItem()",id:"formathorzitem",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-8",level:4},{value:"formatTickmark()",id:"formattickmark",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"maxTickMarkWeight()",id:"maxtickmarkweight",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"fillWeightsForPoints()",id:"fillweightsforpoints",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-11",level:4},{value:"shouldResetTickmarkLabels()?",id:"shouldresettickmarklabels",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-12",level:4}];function d(e){let r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"interface-ihorzscalebehaviorhorzscaleitem",children:"Interface: IHorzScaleBehavior<HorzScaleItem>"})}),"\n",(0,i.jsx)(r.p,{children:"Class interface for Horizontal scale behavior"}),"\n",(0,i.jsx)(r.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"HorzScaleItem"})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.h3,{id:"options",children:"options()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"options"}),"(): ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsImpl",children:(0,i.jsx)(r.code,{children:"ChartOptionsImpl"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Structure describing options of the chart."}),"\n",(0,i.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsImpl",children:(0,i.jsx)(r.code,{children:"ChartOptionsImpl"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"ChartOptionsBase"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"setoptions",children:"setOptions()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"setOptions"}),"(",(0,i.jsx)(r.code,{children:"options"}),"): ",(0,i.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Set the chart options. Note that this is different to ",(0,i.jsx)(r.code,{children:"applyOptions"})," since the provided options will overwrite the current options\ninstead of merging with the current options."]}),"\n",(0,i.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"options"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/ChartOptionsImpl",children:(0,i.jsx)(r.code,{children:"ChartOptionsImpl"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"Chart options to be set"}),"\n",(0,i.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"void"})}),"\n",(0,i.jsx)(r.p,{children:"void"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"preprocessdata",children:"preprocessData()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"preprocessData"}),"(",(0,i.jsx)(r.code,{children:"data"}),"): ",(0,i.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Method to preprocess the data."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"data"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/DataItem",children:(0,i.jsx)(r.code,{children:"DataItem"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/DataItem",children:(0,i.jsx)(r.code,{children:"DataItem"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">[]"]}),"\n",(0,i.jsx)(r.p,{children:"Data items for the series"}),"\n",(0,i.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"void"})}),"\n",(0,i.jsx)(r.p,{children:"void"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"converthorzitemtointernal",children:"convertHorzItemToInternal()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"convertHorzItemToInternal"}),"(",(0,i.jsx)(r.code,{children:"item"}),"): ",(0,i.jsx)(r.code,{children:"object"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Convert horizontal scale item into an internal horizontal scale item."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"item"}),": ",(0,i.jsx)(r.code,{children:"HorzScaleItem"})]}),"\n",(0,i.jsx)(r.p,{children:"item to be converted"}),"\n",(0,i.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"object"})}),"\n",(0,i.jsx)(r.p,{children:"InternalHorzScaleItem"}),"\n",(0,i.jsx)(r.h5,{id:"species",children:"[species]"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"[species]"}),": ",(0,i.jsx)(r.code,{children:'"InternalHorzScaleItem"'})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"The 'name' or species of the nominal."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"createconvertertointernalobj",children:"createConverterToInternalObj()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"createConverterToInternalObj"}),"(",(0,i.jsx)(r.code,{children:"data"}),"): ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/HorzScaleItemConverterToInternalObj",children:(0,i.jsx)(r.code,{children:"HorzScaleItemConverterToInternalObj"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Creates and returns a converter for changing series data into internal horizontal scale items."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"data"}),": (",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/AreaData",children:(0,i.jsx)(r.code,{children:"AreaData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/WhitespaceData",children:(0,i.jsx)(r.code,{children:"WhitespaceData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/BarData",children:(0,i.jsx)(r.code,{children:"BarData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/CandlestickData",children:(0,i.jsx)(r.code,{children:"CandlestickData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/BaselineData",children:(0,i.jsx)(r.code,{children:"BaselineData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/LineData",children:(0,i.jsx)(r.code,{children:"LineData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/HistogramData",children:(0,i.jsx)(r.code,{children:"HistogramData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/CustomData",children:(0,i.jsx)(r.code,{children:"CustomData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),"> | ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/CustomSeriesWhitespaceData",children:(0,i.jsx)(r.code,{children:"CustomSeriesWhitespaceData"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">)[]"]}),"\n",(0,i.jsx)(r.p,{children:"series data"}),"\n",(0,i.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/HorzScaleItemConverterToInternalObj",children:(0,i.jsx)(r.code,{children:"HorzScaleItemConverterToInternalObj"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"HorzScaleItemConverterToInternalObj"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"key",children:"key()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"key"}),"(",(0,i.jsx)(r.code,{children:"internalItem"}),"): ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/InternalHorzScaleItemKey",children:(0,i.jsx)(r.code,{children:"InternalHorzScaleItemKey"})})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns the key for the specified horizontal scale item."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"internalItem"}),": ",(0,i.jsx)(r.code,{children:"HorzScaleItem"})," | ",(0,i.jsx)(r.code,{children:"object"})]}),"\n",(0,i.jsx)(r.p,{children:"horizontal scale item for which the key should be returned"}),"\n",(0,i.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/InternalHorzScaleItemKey",children:(0,i.jsx)(r.code,{children:"InternalHorzScaleItemKey"})})}),"\n",(0,i.jsx)(r.p,{children:"InternalHorzScaleItemKey"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"cachekey",children:"cacheKey()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"cacheKey"}),"(",(0,i.jsx)(r.code,{children:"internalItem"}),"): ",(0,i.jsx)(r.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns the cache key for the specified horizontal scale item."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"internalItem"})]}),"\n",(0,i.jsx)(r.p,{children:"horizontal scale item for which the cache key should be returned"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"internalItem.[species]"}),": ",(0,i.jsx)(r.code,{children:'"InternalHorzScaleItem"'})]}),"\n",(0,i.jsx)(r.p,{children:"The 'name' or species of the nominal."}),"\n",(0,i.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"number"})}),"\n",(0,i.jsx)(r.p,{children:"number"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"updateformatter",children:"updateFormatter()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"updateFormatter"}),"(",(0,i.jsx)(r.code,{children:"options"}),"): ",(0,i.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Update the formatter with the localization options."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"options"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions",children:(0,i.jsx)(r.code,{children:"LocalizationOptions"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"Localization options"}),"\n",(0,i.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"void"})}),"\n",(0,i.jsx)(r.p,{children:"void"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"formathorzitem",children:"formatHorzItem()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"formatHorzItem"}),"(",(0,i.jsx)(r.code,{children:"item"}),"): ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Format the horizontal scale item into a display string."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"item"})]}),"\n",(0,i.jsx)(r.p,{children:"horizontal scale item to be formatted as a string"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"item.[species]"}),": ",(0,i.jsx)(r.code,{children:'"InternalHorzScaleItem"'})]}),"\n",(0,i.jsx)(r.p,{children:"The 'name' or species of the nominal."}),"\n",(0,i.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"string"})}),"\n",(0,i.jsx)(r.p,{children:"string"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"formattickmark",children:"formatTickmark()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"formatTickmark"}),"(",(0,i.jsx)(r.code,{children:"item"}),", ",(0,i.jsx)(r.code,{children:"localizationOptions"}),"): ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Format the horizontal scale tickmark into a display string."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"item"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/TickMark",children:(0,i.jsx)(r.code,{children:"TickMark"})})]}),"\n",(0,i.jsx)(r.p,{children:"tickmark item"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"localizationOptions"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/LocalizationOptions",children:(0,i.jsx)(r.code,{children:"LocalizationOptions"})}),"<",(0,i.jsx)(r.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,i.jsx)(r.p,{children:"Localization options"}),"\n",(0,i.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"string"})}),"\n",(0,i.jsx)(r.p,{children:"string"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"maxtickmarkweight",children:"maxTickMarkWeight()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"maxTickMarkWeight"}),"(",(0,i.jsx)(r.code,{children:"marks"}),"): ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/TickMarkWeightValue",children:(0,i.jsx)(r.code,{children:"TickMarkWeightValue"})})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Returns the maximum tickmark weight value for the specified tickmarks on the time scale."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"marks"}),": ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/TimeMark",children:(0,i.jsx)(r.code,{children:"TimeMark"})}),"[]"]}),"\n",(0,i.jsx)(r.p,{children:"Timescale tick marks"}),"\n",(0,i.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/TickMarkWeightValue",children:(0,i.jsx)(r.code,{children:"TickMarkWeightValue"})})}),"\n",(0,i.jsx)(r.p,{children:"TickMarkWeightValue"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"fillweightsforpoints",children:"fillWeightsForPoints()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"fillWeightsForPoints"}),"(",(0,i.jsx)(r.code,{children:"sortedTimePoints"}),", ",(0,i.jsx)(r.code,{children:"startIndex"}),"): ",(0,i.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Fill the weights for the sorted time scale points."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"sortedTimePoints"}),": readonly ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/type-aliases/Mutable",children:(0,i.jsx)(r.code,{children:"Mutable"})})," <",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/TimeScalePoint",children:(0,i.jsx)(r.code,{children:"TimeScalePoint"})}),">[]"]}),"\n",(0,i.jsx)(r.p,{children:"sorted time scale points"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"startIndex"}),": ",(0,i.jsx)(r.code,{children:"number"})]}),"\n",(0,i.jsx)(r.p,{children:"starting index"}),"\n",(0,i.jsx)(r.h4,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"void"})}),"\n",(0,i.jsx)(r.p,{children:"void"}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"shouldresettickmarklabels",children:"shouldResetTickmarkLabels()?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"shouldResetTickmarkLabels"}),"(",(0,i.jsx)(r.code,{children:"tickMarks"}),"): ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"If returns true, then the tick mark formatter will be called for all the visible\ntick marks even if the formatter has previously been called for a specific tick mark.\nThis allows you to change the formatting on all the tick marks."}),"\n",(0,i.jsx)(r.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,i.jsxs)(r.p,{children:["\u2022 ",(0,i.jsx)(r.strong,{children:"tickMarks"}),": readonly ",(0,i.jsx)(r.a,{href:"/lightweight-charts/docs/api/interfaces/TickMark",children:(0,i.jsx)(r.code,{children:"TickMark"})}),"[]"]}),"\n",(0,i.jsx)(r.p,{children:"array of tick marks"}),"\n",(0,i.jsx)(r.h4,{id:"returns-12",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"boolean"})}),"\n",(0,i.jsx)(r.p,{children:"boolean"})]})}function o(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var s=n(67294);let i={},t=s.createContext(i);function a(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);