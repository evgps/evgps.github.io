(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{HbP6:function(e,t,o){(function(n){var r,i,a;o("pIFo"),o("V+eJ"),o("xfY5"),o("LK8F"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("8+KV"),o("HAE/"),o("hHhE"),"undefined"!=typeof window&&window,i=[],void 0===(a="function"==typeof(r=function(){return function e(t,o){"use strict";var n=Object.create(e.prototype),r=0,i=0,a=0,s=0,l=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,u=!1;try{var m=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}catch(T){}var w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax");var v="string"==typeof t?document.querySelectorAll(t):[t];if(v.length>0){if(n.elems=v,n.options.wrapper&&!n.options.wrapper.nodeType){var x=document.querySelector(n.options.wrapper);if(!x)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=x}var h,b=function e(){for(var t=0;t<l.length;t++)n.elems[t].style.cssText=l[t].style;var o,r;l=[],i=window.innerHeight,s=window.innerWidth,o=s,r=n.options.breakpoints,h=o<r[0]?"xs":o>=r[0]&&o<r[1]?"sm":o>=r[1]&&o<r[2]?"md":"lg",y(),function(){for(var e=0;e<n.elems.length;e++){var t=g(n.elems[e]);l.push(t)}}(),L(),p&&(window.addEventListener("resize",e),p=!1,E())},g=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-xs-speed"),l=e.getAttribute("data-rellax-mobile-speed"),p=e.getAttribute("data-rellax-tablet-speed"),d=e.getAttribute("data-rellax-desktop-speed"),c=e.getAttribute("data-rellax-vertical-speed"),u=e.getAttribute("data-rellax-horizontal-speed"),m=e.getAttribute("data-rellax-vertical-scroll-axis"),w=e.getAttribute("data-rellax-horizontal-scroll-axis"),f=e.getAttribute("data-rellax-zindex")||0,v=e.getAttribute("data-rellax-min"),x=e.getAttribute("data-rellax-max"),b=e.getAttribute("data-rellax-min-x"),g=e.getAttribute("data-rellax-max-x"),y=e.getAttribute("data-rellax-min-y"),z=e.getAttribute("data-rellax-max-y"),E=!0;a||l||p||d?t={xs:a,sm:l,md:p,lg:d}:E=!1;var L=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(L=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var T=n.options.vertical&&(o||n.options.center)?L:0,O=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,S=T+e.getBoundingClientRect().top,Y=e.clientHeight||e.offsetHeight||e.scrollHeight,k=O+e.getBoundingClientRect().left,X=e.clientWidth||e.offsetWidth||e.scrollWidth,R=o||(T-S+i)/(Y+i),q=o||(O-k+s)/(X+s);n.options.center&&(q=.5,R=.5);var F=E&&null!==t[h]?Number(t[h]):r||n.options.speed,H=c||n.options.verticalSpeed,W=u||n.options.horizontalSpeed,j=m||n.options.verticalScrollAxis,C=w||n.options.horizontalScrollAxis,P=A(q,R,F,H,W),M=e.style.cssText,N="",B=/transform\s*:/i.exec(M);if(B){var J=B.index,K=M.slice(J),V=K.indexOf(";");N=V?" "+K.slice(11,V).replace(/\s/g,""):" "+K.slice(11).replace(/\s/g,"")}return{baseX:P.x,baseY:P.y,top:S,left:k,height:Y,width:X,speed:F,verticalSpeed:H,horizontalSpeed:W,verticalScrollAxis:j,horizontalScrollAxis:C,style:M,transform:N,zindex:f,min:v,max:x,minX:b,maxX:g,minY:y,maxY:z}},y=function(){var e=r,t=a;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==a||!n.options.horizontal)},A=function(e,t,o,r,i){var a={},s=(i||o)*(100*(1-e)),l=(r||o)*(100*(1-t));return a.x=n.options.round?Math.round(s):Math.round(100*s)/100,a.y=n.options.round?Math.round(l):Math.round(100*l)/100,a},z=function e(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",e),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",e),c=d(E)},E=function e(){y()&&!1===p?(L(),c=d(e)):(c=null,window.addEventListener("resize",z),window.addEventListener("orientationchange",z),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",z,!!u&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",z,!!u&&{passive:!0}))},L=function(){for(var e,t=0;t<n.elems.length;t++){var o=l[t].verticalScrollAxis.toLowerCase(),p=l[t].horizontalScrollAxis.toLowerCase(),d=-1!=o.indexOf("x")?r:0,c=-1!=o.indexOf("y")?r:0,u=-1!=p.indexOf("x")?a:0,m=(c+(-1!=p.indexOf("y")?a:0)-l[t].top+i)/(l[t].height+i),w=(d+u-l[t].left+s)/(l[t].width+s),v=(e=A(w,m,l[t].speed,l[t].verticalSpeed,l[t].horizontalSpeed)).y-l[t].baseY,x=e.x-l[t].baseX;null!==l[t].min&&(n.options.vertical&&!n.options.horizontal&&(v=v<=l[t].min?l[t].min:v),n.options.horizontal&&!n.options.vertical&&(x=x<=l[t].min?l[t].min:x)),null!=l[t].minY&&(v=v<=l[t].minY?l[t].minY:v),null!=l[t].minX&&(x=x<=l[t].minX?l[t].minX:x),null!==l[t].max&&(n.options.vertical&&!n.options.horizontal&&(v=v>=l[t].max?l[t].max:v),n.options.horizontal&&!n.options.vertical&&(x=x>=l[t].max?l[t].max:x)),null!=l[t].maxY&&(v=v>=l[t].maxY?l[t].maxY:v),null!=l[t].maxX&&(x=x>=l[t].maxX?l[t].maxX:x);var h=l[t].zindex,b="translate3d("+(n.options.horizontal?x:"0")+"px,"+(n.options.vertical?v:"0")+"px,"+h+"px) "+l[t].transform;n.elems[t].style[f]=b}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=l[e].style;p||(window.removeEventListener("resize",b),p=!0),w(c),c=null},b(),n.refresh=b,n}console.warn("Rellax: The elements you're trying to select don't exist.")}})?r.apply(t,i):r)||(e.exports=a)}).call(this,o("yLpj"))},QCKz:function(e,t,o){"use strict";var n=o("q1tI"),r=o("HbP6"),i=o.n(r);t.a=function(e){var t=Object(n.useState)(1),o=t[0],r=t[1],a=function(){var t=window.pageYOffset,o=e.current.offsetHeight/4,n=1-(t-o)/t*1.5;r(t>=o?n>0?n:0:1)};return Object(n.useEffect)((function(){new i.a(e.current,{speed:-4})}),[e]),Object(n.useEffect)((function(){return window.addEventListener("scroll",a),window.addEventListener("resize",a),function(){window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}})),o}}}]);
//# sourceMappingURL=c6cff7b013ac54156d349b64378eb99612e462a0-4b33161ff57698cbf0f4.js.map