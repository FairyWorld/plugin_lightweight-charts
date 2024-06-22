var w=Object.defineProperty;var g=(f,t,a)=>t in f?w(f,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[t]=a;var m=(f,t,a)=>(g(f,typeof t!="symbol"?t+"":t,a),a);import{D as v,P as D}from"./lightweight-charts.production-48a3bf4f.js";import{m as T}from"./sample-data-c7d89ab8.js";const k={...v,colors:[{line:"rgb(41, 98, 255)",area:"rgba(41, 98, 255, 0.2)"},{line:"rgb(225, 87, 90)",area:"rgba(225, 87, 90, 0.2)"},{line:"rgb(242, 142, 44)",area:"rgba(242, 142, 44, 0.2)"},{line:"rgb(164, 89, 209)",area:"rgba(164, 89, 209, 0.2)"},{line:"rgb(27, 156, 133)",area:"rgba(27, 156, 133, 0.2)"}],lineWidth:2};function B(f){let t=0;return f.map(a=>{const e=t+a;return t=e,e})}class L{constructor(){m(this,"_data",null);m(this,"_options",null)}draw(t,a){t.useBitmapCoordinateSpace(e=>this._drawImpl(e,a))}update(t,a){this._data=t,this._options=a}_drawImpl(t,a){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const e=this._options,i=this._data.bars.map(n=>({x:n.x,ys:B(n.originalData.values).map(u=>a(u)??0)})),d=a(0)??0,p=this._createLinePaths(i,this._data.visibleRange,t,d*t.verticalPixelRatio),s=this._createAreas(p),h=e.colors.length;s.forEach((n,u)=>{t.context.fillStyle=e.colors[u%h].area,t.context.fill(n)}),t.context.lineWidth=e.lineWidth*t.verticalPixelRatio,t.context.lineJoin="round",p.forEach((n,u)=>{u!=0&&(t.context.beginPath(),t.context.strokeStyle=e.colors[(u-1)%h].line,t.context.stroke(n.path))})}_createLinePaths(t,a,e,i){const{horizontalPixelRatio:d,verticalPixelRatio:p}=e,s=[],h=[];let n=!0;for(let r=a.from;r<a.to;r++){const x=t[r];let o=0;x.ys.forEach((P,y)=>{if(y%2!==0)return;const l=x.x*d,c=P*p;n?(s[o]={path:new Path2D,first:{x:l,y:c},last:{x:l,y:c}},s[o].path.moveTo(l,c)):(s[o].path.lineTo(l,c),s[o].last.x=l,s[o].last.y=c),o+=1}),n=!1}n=!0;for(let r=a.to-1;r>=a.from;r--){const x=t[r];let o=0;x.ys.forEach((P,y)=>{if(y%2===0)return;const l=x.x*d,c=P*p;n?(h[o]={path:new Path2D,first:{x:l,y:c},last:{x:l,y:c}},h[o].path.moveTo(l,c)):(h[o].path.lineTo(l,c),h[o].last.x=l,h[o].last.y=c),o+=1}),n=!1}const u={path:new Path2D,first:{x:s[0].last.x,y:i},last:{x:s[0].first.x,y:i}};u.path.moveTo(s[0].last.x,i),u.path.lineTo(s[0].first.x,i);const _=[u];for(let r=0;r<s.length;r++)_.push(s[r]),r<h.length&&_.push(h[r]);return _}_createAreas(t){const a=[];for(let e=1;e<t.length;e++){const i=new Path2D(t[e-1].path);i.lineTo(t[e].first.x,t[e].first.y),i.addPath(t[e].path),i.lineTo(t[e-1].first.x,t[e-1].first.y),i.closePath(),a.push(i)}return a}}class A{constructor(){m(this,"_renderer");this._renderer=new L}priceValueBuilder(t){return[0,t.values.reduce((a,e)=>a+e,0)]}isWhitespace(t){var a;return!((a=t.values)!=null&&a.length)}renderer(){return this._renderer}update(t,a){this._renderer.update(t,a)}defaultOptions(){return k}}const b=window.chart=D("chart",{autoSize:!0,rightPriceScale:{scaleMargins:{top:.05,bottom:.05}}}),C=new A,E=b.addCustomSeries(C,{}),I=T(5,200,2);E.setData(I);b.timeScale().fitContent();
