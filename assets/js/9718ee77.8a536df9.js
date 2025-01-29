"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19126"],{50690:function(e,i,s){s.r(i),s.d(i,{default:()=>o,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>h});var t=JSON.parse('{"id":"api/interfaces/IPaneApi","title":"Interface: IPaneApi\\\\<HorzScaleItem\\\\>","description":"Represents the interface for interacting with a pane in a lightweight chart.","source":"@site/versioned_docs/version-5.0/api/interfaces/IPaneApi.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/IPaneApi","permalink":"/lightweight-charts/docs/api/interfaces/IPaneApi","draft":false,"unlisted":false,"tags":[],"version":"5.0","frontMatter":{"pagination_next":null,"pagination_prev":null},"sidebar":"typedocSidebar"}'),r=s("85893"),n=s("50065");let a={pagination_next:null,pagination_prev:null},h="Interface: IPaneApi<HorzScaleItem>",c={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"getHeight()",id:"getheight",level:3},{value:"Returns",id:"returns",level:4},{value:"setHeight()",id:"setheight",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"moveTo()",id:"moveto",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"paneIndex()",id:"paneindex",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getSeries()",id:"getseries",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getHTMLElement()",id:"gethtmlelement",level:3},{value:"Returns",id:"returns-5",level:4},{value:"attachPrimitive()",id:"attachprimitive",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"detachPrimitive()",id:"detachprimitive",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4}];function d(e){let i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"interface-ipaneapihorzscaleitem",children:"Interface: IPaneApi<HorzScaleItem>"})}),"\n",(0,r.jsx)(i.p,{children:"Represents the interface for interacting with a pane in a lightweight chart."}),"\n",(0,r.jsx)(i.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"HorzScaleItem"})]}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.h3,{id:"getheight",children:"getHeight()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"getHeight"}),"(): ",(0,r.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Retrieves the height of the pane in pixels."}),"\n",(0,r.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"number"})}),"\n",(0,r.jsx)(i.p,{children:"The height of the pane in pixels."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"setheight",children:"setHeight()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"setHeight"}),"(",(0,r.jsx)(i.code,{children:"height"}),"): ",(0,r.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Sets the height of the pane."}),"\n",(0,r.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"height"}),": ",(0,r.jsx)(i.code,{children:"number"})]}),"\n",(0,r.jsx)(i.p,{children:"The number of pixels to set as the height of the pane."}),"\n",(0,r.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"void"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"moveto",children:"moveTo()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"moveTo"}),"(",(0,r.jsx)(i.code,{children:"paneIndex"}),"): ",(0,r.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Moves the pane to a new position."}),"\n",(0,r.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"paneIndex"}),": ",(0,r.jsx)(i.code,{children:"number"})]}),"\n",(0,r.jsx)(i.p,{children:"The target index of the pane. Should be a number between 0 and the total number of panes - 1."}),"\n",(0,r.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"void"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"paneindex",children:"paneIndex()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"paneIndex"}),"(): ",(0,r.jsx)(i.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Retrieves the index of the pane."}),"\n",(0,r.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"number"})}),"\n",(0,r.jsx)(i.p,{children:"The index of the pane. It is a number between 0 and the total number of panes - 1."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"getseries",children:"getSeries()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"getSeries"}),"(): ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi",children:(0,r.jsx)(i.code,{children:"ISeriesApi"})}),"<keyof ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap",children:(0,r.jsx)(i.code,{children:"SeriesOptionsMap"})}),", ",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),", ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/AreaData",children:(0,r.jsx)(i.code,{children:"AreaData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/WhitespaceData",children:(0,r.jsx)(i.code,{children:"WhitespaceData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BarData",children:(0,r.jsx)(i.code,{children:"BarData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CandlestickData",children:(0,r.jsx)(i.code,{children:"CandlestickData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BaselineData",children:(0,r.jsx)(i.code,{children:"BaselineData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LineData",children:(0,r.jsx)(i.code,{children:"LineData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HistogramData",children:(0,r.jsx)(i.code,{children:"HistogramData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomData",children:(0,r.jsx)(i.code,{children:"CustomData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomSeriesWhitespaceData",children:(0,r.jsx)(i.code,{children:"CustomSeriesWhitespaceData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),">, ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/CustomSeriesOptions",children:(0,r.jsx)(i.code,{children:"CustomSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/AreaSeriesOptions",children:(0,r.jsx)(i.code,{children:"AreaSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/BarSeriesOptions",children:(0,r.jsx)(i.code,{children:"BarSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/CandlestickSeriesOptions",children:(0,r.jsx)(i.code,{children:"CandlestickSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/BaselineSeriesOptions",children:(0,r.jsx)(i.code,{children:"BaselineSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/LineSeriesOptions",children:(0,r.jsx)(i.code,{children:"LineSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/HistogramSeriesOptions",children:(0,r.jsx)(i.code,{children:"HistogramSeriesOptions"})}),", ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions",children:(0,r.jsx)(i.code,{children:"AreaStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BarStyleOptions",children:(0,r.jsx)(i.code,{children:"BarStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CandlestickStyleOptions",children:(0,r.jsx)(i.code,{children:"CandlestickStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions",children:(0,r.jsx)(i.code,{children:"BaselineStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions",children:(0,r.jsx)(i.code,{children:"LineStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HistogramStyleOptions",children:(0,r.jsx)(i.code,{children:"HistogramStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomStyleOptions",children:(0,r.jsx)(i.code,{children:"CustomStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),">>[]"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Retrieves the array of series for the current pane."}),"\n",(0,r.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/ISeriesApi",children:(0,r.jsx)(i.code,{children:"ISeriesApi"})}),"<keyof ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap",children:(0,r.jsx)(i.code,{children:"SeriesOptionsMap"})}),", ",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),", ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/AreaData",children:(0,r.jsx)(i.code,{children:"AreaData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/WhitespaceData",children:(0,r.jsx)(i.code,{children:"WhitespaceData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BarData",children:(0,r.jsx)(i.code,{children:"BarData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CandlestickData",children:(0,r.jsx)(i.code,{children:"CandlestickData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BaselineData",children:(0,r.jsx)(i.code,{children:"BaselineData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LineData",children:(0,r.jsx)(i.code,{children:"LineData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HistogramData",children:(0,r.jsx)(i.code,{children:"HistogramData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomData",children:(0,r.jsx)(i.code,{children:"CustomData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomSeriesWhitespaceData",children:(0,r.jsx)(i.code,{children:"CustomSeriesWhitespaceData"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),">, ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/CustomSeriesOptions",children:(0,r.jsx)(i.code,{children:"CustomSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/AreaSeriesOptions",children:(0,r.jsx)(i.code,{children:"AreaSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/BarSeriesOptions",children:(0,r.jsx)(i.code,{children:"BarSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/CandlestickSeriesOptions",children:(0,r.jsx)(i.code,{children:"CandlestickSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/BaselineSeriesOptions",children:(0,r.jsx)(i.code,{children:"BaselineSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/LineSeriesOptions",children:(0,r.jsx)(i.code,{children:"LineSeriesOptions"})})," | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/HistogramSeriesOptions",children:(0,r.jsx)(i.code,{children:"HistogramSeriesOptions"})}),", ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions",children:(0,r.jsx)(i.code,{children:"AreaStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BarStyleOptions",children:(0,r.jsx)(i.code,{children:"BarStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CandlestickStyleOptions",children:(0,r.jsx)(i.code,{children:"CandlestickStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions",children:(0,r.jsx)(i.code,{children:"BaselineStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions",children:(0,r.jsx)(i.code,{children:"LineStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/HistogramStyleOptions",children:(0,r.jsx)(i.code,{children:"HistogramStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),"> | ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/DeepPartial",children:(0,r.jsx)(i.code,{children:"DeepPartial"})})," <",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/CustomStyleOptions",children:(0,r.jsx)(i.code,{children:"CustomStyleOptions"})})," & ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/interfaces/SeriesOptionsCommon",children:(0,r.jsx)(i.code,{children:"SeriesOptionsCommon"})}),">>[]"]}),"\n",(0,r.jsx)(i.p,{children:"An array of series."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"gethtmlelement",children:"getHTMLElement()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"getHTMLElement"}),"(): ",(0,r.jsx)(i.code,{children:"HTMLElement"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Retrieves the HTML element of the pane."}),"\n",(0,r.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"HTMLElement"})}),"\n",(0,r.jsx)(i.p,{children:"The HTML element of the pane."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"attachprimitive",children:"attachPrimitive()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"attachPrimitive"}),"(",(0,r.jsx)(i.code,{children:"primitive"}),"): ",(0,r.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Attaches additional drawing primitive to the pane"}),"\n",(0,r.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"primitive"}),": ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/IPanePrimitive",children:(0,r.jsx)(i.code,{children:"IPanePrimitive"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,r.jsx)(i.p,{children:"any implementation of IPanePrimitive interface"}),"\n",(0,r.jsx)(i.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"void"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"detachprimitive",children:"detachPrimitive()"}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"detachPrimitive"}),"(",(0,r.jsx)(i.code,{children:"primitive"}),"): ",(0,r.jsx)(i.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Detaches additional drawing primitive from the pane"}),"\n",(0,r.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["\u2022 ",(0,r.jsx)(i.strong,{children:"primitive"}),": ",(0,r.jsx)(i.a,{href:"/lightweight-charts/docs/api/type-aliases/IPanePrimitive",children:(0,r.jsx)(i.code,{children:"IPanePrimitive"})}),"<",(0,r.jsx)(i.code,{children:"HorzScaleItem"}),">"]}),"\n",(0,r.jsx)(i.p,{children:"implementation of IPanePrimitive interface attached before\nDoes nothing if specified primitive was not attached"}),"\n",(0,r.jsx)(i.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"void"})})]})}function o(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,i,s){s.d(i,{Z:function(){return h},a:function(){return a}});var t=s(67294);let r={},n=t.createContext(r);function a(e){let i=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);