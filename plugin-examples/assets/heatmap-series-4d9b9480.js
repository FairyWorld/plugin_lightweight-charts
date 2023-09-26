var m=Object.defineProperty;var p=(a,t,i)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var d=(a,t,i)=>(p(a,typeof t!="symbol"?t+"":t,i),i);import{T as _}from"./lightweight-charts.production-2ffc2f95.js";import{f as x}from"./full-width-c985ee69.js";import{a as b}from"./positions-0a54307c.js";const B={..._,lastValueVisible:!1,priceLineVisible:!1,cellShader:a=>{const t=Math.min(Math.max(0,a),100);return`rgba(0, ${100+t*1.55}, ${0+t}, ${.2+t*.8})`},cellBorderWidth:1,cellBorderColor:"transparent"};class W{constructor(){d(this,"_data",null);d(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(l=>this._drawImpl(l,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const l=this._options,u=this._data.bars.map(o=>({x:o.x,cells:o.originalData.cells.map(r=>({amount:r.amount,low:i(r.low),high:i(r.high)}))})),e=this._data.barSpacing>l.cellBorderWidth*3;t.context.save();for(let o=this._data.visibleRange.from;o<this._data.visibleRange.to;o++){const r=u[o],n=x(r.x,this._data.barSpacing/2,t.horizontalPixelRatio),s=e?l.cellBorderWidth*t.horizontalPixelRatio:0,h=e?l.cellBorderWidth*t.verticalPixelRatio:0;for(const f of r.cells){const c=b(f.low,f.high,t.verticalPixelRatio);t.context.fillStyle=l.cellShader(f.amount),t.context.fillRect(n.position+s,c.position+h,n.length-s*2,c.length-1-h*2),e&&l.cellBorderWidth&&l.cellBorderColor!=="transparent"&&(t.context.beginPath(),t.context.rect(n.position+s/2,c.position+h/2,n.length-s,c.length-1-h),t.context.strokeStyle=l.cellBorderColor,t.context.lineWidth=s,t.context.stroke())}}t.context.restore()}}class P{constructor(){d(this,"_renderer");this._renderer=new W}priceValueBuilder(t){if(t.cells.length<1)return[NaN];let i=1/0,l=-1/0;t.cells.forEach(e=>{e.low<i&&(i=e.low),e.high>l&&(l=e.high)});const u=i+(l-i)/2;return[i,l,u]}isWhitespace(t){return t.cells===void 0||t.cells.length<1}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return B}}export{P as H};
