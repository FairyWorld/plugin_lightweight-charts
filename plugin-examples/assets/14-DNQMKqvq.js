var f=Object.defineProperty;var U=(a,t,e)=>t in a?f(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var i=(a,t,e)=>U(a,typeof t!="symbol"?t+"":t,e);import{L as H,K as x}from"./lightweight-charts.production-DS1dzDO5.js";import{g as S}from"./sample-data-x_8-FZm1.js";const v=""+new URL("image-etYceiEU.svg",import.meta.url).href;class V{constructor(t,e){i(this,"_source");i(this,"_view");this._source=t,this._view=e}draw(t){t.useMediaCoordinateSpace(e=>{const r=e.context,s=this._view._placement;if(s){if(!this._source._imgElement)throw new Error("Image element missing.");r.globalAlpha=this._source._options.alpha??1,r.drawImage(this._source._imgElement,s.x,s.y,s.width,s.height)}})}}class q{constructor(t){i(this,"_source");i(this,"_placement",null);this._source=t}zOrder(){return"bottom"}update(){this._placement=this._determinePlacement()}renderer(){return new V(this._source,this)}_determinePlacement(){if(!this._source._chart)return null;const t=this._source._chart.priceScale("left").width(),e=this._source._chart.timeScale().width(),r=t,s=this._source._chart.chartElement().clientHeight-this._source._chart.timeScale().height(),n=Math.round(e/2)+r,g=Math.round(s/2)+0,c=this._source._options.padding??0;let h=e-2*c,o=s-2*c;this._source._options.maxHeight&&(o=Math.min(o,this._source._options.maxHeight)),this._source._options.maxWidth&&(h=Math.min(h,this._source._options.maxWidth));const p=h/this._source._imageWidth,w=o/this._source._imageHeight,_=Math.min(p,w),m=this._source._imageWidth*_,l=this._source._imageHeight*_,E=n-.5*m,W=g-.5*l;return{x:E,y:W,height:l,width:m}}}class I{constructor(t,e){i(this,"_paneViews");i(this,"_imgElement",null);i(this,"_imageUrl");i(this,"_options");i(this,"_imageHeight",0);i(this,"_imageWidth",0);i(this,"_chart",null);i(this,"_containerElement",null);i(this,"_requestUpdate");this._imageUrl=t,this._options=e,this._paneViews=[new q(this)]}attached({chart:t,requestUpdate:e}){this._chart=t,this._requestUpdate=e,this._containerElement=t.chartElement(),this._imgElement=new Image,this._imgElement.onload=()=>{var r,s;this._imageHeight=((r=this._imgElement)==null?void 0:r.naturalHeight)??1,this._imageWidth=((s=this._imgElement)==null?void 0:s.naturalWidth)??1,this._paneViews.forEach(n=>n.update()),this.requestUpdate()},this._imgElement.src=this._imageUrl}detached(){this._imgElement=null}requestUpdate(){this._requestUpdate&&this._requestUpdate()}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}}const u=document.querySelector("#chart");if(!u)throw new Error("Unable to located container div element");const M=window.chart=H(u,{autoSize:!0}),P=new I(v,{maxHeight:400,maxWidth:400,padding:50,alpha:.4}),d=M.addSeries(x),b=S();d.setData(b);d.attachPrimitive(P);
