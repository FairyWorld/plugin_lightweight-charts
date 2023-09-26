var p=Object.defineProperty;var w=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(w(a,typeof e!="symbol"?e+"":e,t),t);import{C as f,L as m,a as x}from"./lightweight-charts.production-2ffc2f95.js";import{a as b}from"./sample-data-c7d89ab8.js";import{P as S}from"./plugin-base-c80b73a8.js";class D{constructor(e){s(this,"_viewData");this._viewData=e}draw(e){const t=this._viewData.data;e.useBitmapCoordinateSpace(i=>{const r=i.context;r.save();try{const l=i.bitmapSize.height,o=i.horizontalPixelRatio*this._viewData.barWidth/2,u=-1*(o+1),g=i.bitmapSize.width;t.forEach(h=>{const n=h.x*i.horizontalPixelRatio;if(n<u)return;r.fillStyle=h.color||"rgba(0, 0, 0, 0)";const c=Math.max(0,Math.round(n-o)),_=Math.min(g,Math.round(n+o));r.fillRect(c,0,_-c,l)})}finally{r.restore()}})}}class y{constructor(e){s(this,"_source");s(this,"_data");this._source=e,this._data={data:[],barWidth:6,options:this._source._options}}update(){const e=this._source.chart.timeScale();this._data.data=this._source._backgroundColors.map(t=>({x:e.timeToCoordinate(t.time)??-100,color:t.color})),this._data.data.length>1?this._data.barWidth=this._data.data[1].x-this._data.data[0].x:this._data.barWidth=6}renderer(){return new D(this._data)}zOrder(){return"bottom"}}const C={};class v extends S{constructor(t,i={}){super();s(this,"_paneViews");s(this,"_seriesData",[]);s(this,"_backgroundColors",[]);s(this,"_options");s(this,"_highlighter");this._highlighter=t,this._options={...C,...i},this._paneViews=[new y(this)]}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}attached(t){super.attached(t),this.dataUpdated("full")}dataUpdated(t){this._backgroundColors=this.series.data().map(i=>({time:i.time,color:this._highlighter(i.time)})),this.requestUpdate()}}const V=window.chart=f("chart",{autoSize:!0}),d=V.addCandlestickSeries(),z=b();d.setData(z);function P(a){return m(a)?new Date(a*1e3):x(a)?new Date(a.year,a.month,a.day):new Date(a)}const W=a=>{const t=P(a).getDay();return t===0||t===6?"rgba(255, 152, 1, 0.08)":"rgba(41, 98, 255, 0.08)"},k=new v(W);d.attachPrimitive(k);
