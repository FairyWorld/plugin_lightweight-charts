var x=Object.defineProperty;var d=(a,t,i)=>t in a?x(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var n=(a,t,i)=>d(a,typeof t!="symbol"?t+"":t,i);import{L as m,K as w}from"./lightweight-charts.production-DS1dzDO5.js";import{g as f}from"./sample-data-x_8-FZm1.js";class T{constructor(t,i,e,o,s){n(this,"_p1");n(this,"_p2");n(this,"_text1");n(this,"_text2");n(this,"_options");this._p1=t,this._p2=i,this._text1=e,this._text2=o,this._options=s}draw(t){t.useBitmapCoordinateSpace(i=>{if(this._p1.x===null||this._p1.y===null||this._p2.x===null||this._p2.y===null)return;const e=i.context,o=Math.round(this._p1.x*i.horizontalPixelRatio),s=Math.round(this._p1.y*i.verticalPixelRatio),r=Math.round(this._p2.x*i.horizontalPixelRatio),h=Math.round(this._p2.y*i.verticalPixelRatio);e.lineWidth=this._options.width,e.strokeStyle=this._options.lineColor,e.beginPath(),e.moveTo(o,s),e.lineTo(r,h),e.stroke(),this._options.showLabels&&(this._drawTextLabel(i,this._text1,o,s,!0),this._drawTextLabel(i,this._text2,r,h,!1))})}_drawTextLabel(t,i,e,o,s){t.context.font="24px Arial",t.context.beginPath();const r=5*t.horizontalPixelRatio,h=t.context.measureText(i),p=s?h.width+r*4:0;t.context.fillStyle=this._options.labelBackgroundColor,t.context.roundRect(e+r-p,o-24,h.width+r*2,24+r,5),t.context.fill(),t.context.beginPath(),t.context.fillStyle=this._options.labelTextColor,t.context.fillText(i,e+r*2-p,o)}}class P{constructor(t){n(this,"_source");n(this,"_p1",{x:null,y:null});n(this,"_p2",{x:null,y:null});this._source=t}update(){const t=this._source._series,i=t.priceToCoordinate(this._source._p1.price),e=t.priceToCoordinate(this._source._p2.price),o=this._source._chart.timeScale(),s=o.timeToCoordinate(this._source._p1.time),r=o.timeToCoordinate(this._source._p2.time);this._p1={x:s,y:i},this._p2={x:r,y:e}}renderer(){return new T(this._p1,this._p2,""+this._source._p1.price.toFixed(1),""+this._source._p2.price.toFixed(1),this._source._options)}}const b={lineColor:"rgb(0, 0, 0)",width:6,showLabels:!0,labelBackgroundColor:"rgba(255, 255, 255, 0.85)",labelTextColor:"rgb(0, 0, 0)"};class S{constructor(t,i,e,o,s){n(this,"_chart");n(this,"_series");n(this,"_p1");n(this,"_p2");n(this,"_paneViews");n(this,"_options");n(this,"_minPrice");n(this,"_maxPrice");this._chart=t,this._series=i,this._p1=e,this._p2=o,this._minPrice=Math.min(this._p1.price,this._p2.price),this._maxPrice=Math.max(this._p1.price,this._p2.price),this._options={...b,...s},this._paneViews=[new P(this)]}autoscaleInfo(t,i){const e=this._pointIndex(this._p1),o=this._pointIndex(this._p2);return e===null||o===null||i<e||t>o?null:{priceRange:{minValue:this._minPrice,maxValue:this._maxPrice}}}updateAllViews(){this._paneViews.forEach(t=>t.update())}paneViews(){return this._paneViews}_pointIndex(t){const i=this._chart.timeScale().timeToCoordinate(t.time);return i===null?null:this._chart.timeScale().coordinateToLogical(i)}}const u=window.chart=m("chart",{autoSize:!0}),_=u.addSeries(w),l=f();_.setData(l);const c=l.length,g={time:l[c-50].time,price:l[c-50].value*.9},y={time:l[c-5].time,price:l[c-5].value*1.1},L=new S(u,_,g,y);_.attachPrimitive(L);
