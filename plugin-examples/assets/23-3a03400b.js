var E=Object.defineProperty;var y=(o,t,e)=>t in o?E(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var s=(o,t,e)=>(y(o,typeof t!="symbol"?t+"":t,e),e);import{o as w,C}from"./lightweight-charts.production-2ffc2f95.js";import{g as P}from"./sample-data-c7d89ab8.js";import{f as M,c as T}from"./time-58d70c6d.js";import{p as S}from"./positions-0a54307c.js";const z={title:"",followMode:"tracking",horizontalDeadzoneWidth:45,verticalDeadzoneHeight:100,verticalSpacing:20,topOffset:20};class L{constructor(t,e){s(this,"_chart");s(this,"_element");s(this,"_titleElement");s(this,"_priceElement");s(this,"_dateElement");s(this,"_timeElement");s(this,"_options");s(this,"_lastTooltipWidth",null);this._options={...z,...e},this._chart=t;const i=document.createElement("div");d(i,{display:"flex","flex-direction":"column","align-items":"center",position:"absolute",transform:"translate(calc(0px - 50%), 0px)",opacity:"0",left:"0%",top:"0","z-index":"100","background-color":"white","border-radius":"4px",padding:"5px 10px","font-family":"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif","font-size":"12px","font-weight":"400","box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.2)","line-height":"16px","pointer-events":"none",color:"#131722"});const n=document.createElement("div");d(n,{"font-size":"16px","line-height":"24px","font-weight":"590"}),r(n,this._options.title),i.appendChild(n);const a=document.createElement("div");d(a,{"font-size":"14px","line-height":"18px","font-weight":"590"}),r(a,""),i.appendChild(a);const h=document.createElement("div");d(h,{color:"#787B86"}),r(h,""),i.appendChild(h);const l=document.createElement("div");d(l,{color:"#787B86"}),r(l,""),i.appendChild(l),this._element=i,this._titleElement=n,this._priceElement=a,this._dateElement=h,this._timeElement=l;const m=this._chart.chartElement();m.appendChild(this._element);const u=m.parentElement;if(!u){console.error("Chart Element is not attached to the page.");return}const p=getComputedStyle(u).position;p!=="relative"&&p!=="absolute"&&console.error("Chart Element position is expected be `relative` or `absolute`.")}destroy(){this._chart&&this._element&&this._chart.chartElement().removeChild(this._element)}applyOptions(t){this._options={...this._options,...t}}options(){return this._options}updateTooltipContent(t){if(!this._element)return;const e=this._element.getBoundingClientRect();this._lastTooltipWidth=e.width,t.title!==void 0&&this._titleElement&&r(this._titleElement,t.title),r(this._priceElement,t.price),r(this._dateElement,t.date),r(this._timeElement,t.time)}updatePosition(t){if(!this._chart||!this._element||(this._element.style.opacity=t.visible?"1":"0",!t.visible))return;const e=this._calculateXPosition(t,this._chart),i=this._calculateYPosition(t);this._element.style.transform=`translate(${e}, ${i})`}_calculateXPosition(t,e){const i=t.paneX+e.priceScale("left").width(),n=this._lastTooltipWidth?Math.ceil(this._lastTooltipWidth/2):this._options.horizontalDeadzoneWidth;return`calc(${Math.min(Math.max(n,i),e.timeScale().width()-n)}px - 50%)`}_calculateYPosition(t){if(this._options.followMode=="top")return`${this._options.topOffset}px`;const e=t.paneY,i=e<=this._options.verticalSpacing+this._options.verticalDeadzoneHeight;return`calc(${e+(i?1:-1)*this._options.verticalSpacing}px${i?"":" - 100%"})`}}function r(o,t){!o||t===o.innerText||(o.innerText=t,o.style.display=t?"block":"none")}function d(o,t){for(const[e,i]of Object.entries(t))o.style.setProperty(e,i)}class O{constructor(t){s(this,"_data");this._data=t}draw(t){this._data.visible&&t.useBitmapCoordinateSpace(e=>{const i=e.context;i.save();const n=S(this._data.x,e.horizontalPixelRatio,1);i.fillStyle=this._data.color,i.fillRect(n.position,this._data.topMargin*e.verticalPixelRatio,n.length,e.bitmapSize.height),i.restore()})}}class V{constructor(t){s(this,"_data");this._data=t}update(t){this._data=t}renderer(){return new O(this._data)}zOrder(){return"bottom"}}const k={lineColor:"rgba(0, 0, 0, 0.2)",priceExtractor:o=>o.value!==void 0?o.value.toFixed(2):o.close!==void 0?o.close.toFixed(2):""};class B{constructor(t){s(this,"_options");s(this,"_tooltip");s(this,"_paneViews");s(this,"_data",{x:0,visible:!1,color:"rgba(0, 0, 0, 0.2)",topMargin:0});s(this,"_attachedParams");s(this,"_moveHandler",t=>this._onMouseMove(t));this._options={...k,...t},this._paneViews=[new V(this._data)]}attached(t){this._attachedParams=t,this._setCrosshairMode(),t.chart.subscribeCrosshairMove(this._moveHandler),this._createTooltipElement()}detached(){const t=this.chart();t&&t.unsubscribeCrosshairMove(this._moveHandler)}paneViews(){return this._paneViews}updateAllViews(){this._paneViews.forEach(t=>t.update(this._data))}setData(t){var e;this._data=t,this.updateAllViews(),(e=this._attachedParams)==null||e.requestUpdate()}currentColor(){return this._options.lineColor}chart(){var t;return(t=this._attachedParams)==null?void 0:t.chart}series(){var t;return(t=this._attachedParams)==null?void 0:t.series}applyOptions(t){this._options={...this._options,...t},this._tooltip&&this._tooltip.applyOptions({...this._options.tooltip})}_setCrosshairMode(){const t=this.chart();if(!t)throw new Error("Unable to change crosshair mode because the chart instance is undefined");t.applyOptions({crosshair:{mode:w.Magnet,vertLine:{visible:!1,labelVisible:!1},horzLine:{visible:!1,labelVisible:!1}}})}_hideTooltip(){this._tooltip&&(this._tooltip.updateTooltipContent({title:"",price:"",date:"",time:""}),this._tooltip.updatePosition({paneX:0,paneY:0,visible:!1}))}_hideCrosshair(){this._hideTooltip(),this.setData({x:0,visible:!1,color:this.currentColor(),topMargin:0})}_onMouseMove(t){var p,v;const e=this.chart(),i=this.series(),n=t.logical;if(!n||!e||!i){this._hideCrosshair();return}const a=t.seriesData.get(i);if(!a){this._hideCrosshair();return}const h=this._options.priceExtractor(a),l=e.timeScale().logicalToCoordinate(n),[m,u]=M(t.time?T(t.time):void 0);if(this._tooltip){const b=this._tooltip.options(),x=b.followMode=="top"?b.topOffset+10:0;this.setData({x:l??0,visible:l!==null,color:this.currentColor(),topMargin:x}),this._tooltip.updateTooltipContent({price:h,date:m,time:u}),this._tooltip.updatePosition({paneX:((p=t.point)==null?void 0:p.x)??0,paneY:((v=t.point)==null?void 0:v.y)??0,visible:!0})}}_createTooltipElement(){const t=this.chart();if(!t)throw new Error("Unable to create Tooltip element. Chart not attached");this._tooltip=new L(t,{...this._options.tooltip})}}const W=window.chart=C("chart",{autoSize:!0,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},timeScale:{borderVisible:!1},rightPriceScale:{borderVisible:!1}}),g=W.addAreaSeries({lineColor:"rgb(4,153,129)",topColor:"rgba(4,153,129, 0.4)",bottomColor:"rgba(4,153,129, 0)",priceLineVisible:!1});g.setData(P());const f=new B({lineColor:"rgba(0, 0, 0, 0.2)",tooltip:{followMode:"top"}});g.attachPrimitive(f);const c=document.querySelector("#tracking-button");c&&c.classList.add("grey");const _=document.querySelector("#top-button");c&&c.addEventListener("click",function(){c.classList.remove("grey"),_&&_.classList.add("grey"),f.applyOptions({tooltip:{followMode:"tracking"}})});_&&_.addEventListener("click",function(){_.classList.remove("grey"),c&&c.classList.add("grey"),f.applyOptions({tooltip:{followMode:"top"}})});
