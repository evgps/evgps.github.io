(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/RCX":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("9eSz"),s=a.n(n),o=a("dsy7");a("CZM1");function d(e){var t=e.image,a=e.video;Object(o.a)();var i=a?r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{type:"video/mp4",src:a})):r.a.createElement("div",{className:"browser__img"},r.a.createElement(s.a,{sizes:t}));return r.a.createElement("div",{className:"browser","data-aos":"fade-in"},r.a.createElement("span",{className:"browser__dots"}),i)}d.defaultProp={image:"",video:""}},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1vIY":function(e,t,a){},"5gvO":function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("dsy7");a("WDjL");t.a=function(e){var t=e.header,a=e.children;return Object(n.a)(),r.a.createElement("div",{className:"content section-padding--double bg-white"},r.a.createElement("div",{className:"grid-small"},r.a.createElement("h2",null,r.a.createElement("span",{"data-aos":"slice-up","data-aos-duration":"400"},t)),r.a.createElement("div",{"data-aos":"fade-in","data-aos-duration":"400","data-aos-delay":"100"},a)))}},"6i1Z":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=I([].concat(t.fluid))),t.fixed&&(t.fixed=I([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function I(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},_=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(x,(0,d.default)({src:t},r,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,i(a),s):s},x=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,I=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:O?1:0,transition:R?"opacity "+v+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,z={transitionDelay:v+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},R&&z,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:P,className:g,itemProp:E};if(p){var T=p,q=m(p);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),q.base64&&l.default.createElement(_,{ariaHidden:!0,src:q.base64,spreadProps:j,imageVariants:T,generateSources:k}),q.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:q.tracedSVG,spreadProps:j,imageVariants:T,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(T),l.default.createElement(x,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:I},q,{imageVariants:T}))}}))}if(h){var M=h,W=m(h),G=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&z)}),W.base64&&l.default.createElement(_,{ariaHidden:!0,src:W.base64,spreadProps:j,imageVariants:M,generateSources:k}),W.tracedSVG&&l.default.createElement(_,{ariaHidden:!0,src:W.tracedSVG,spreadProps:j,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(M),l.default.createElement(x,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:I},W,{imageVariants:M}))}}))}return null},t}(l.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:V,sizes:C,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=R;t.default=z},Bmby:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("EIPX"),s=(a("INYr"),a("tUrg"),a("BqI7")),o=a("Z/wt"),d=a("m7xX");a("lkGP");var l=function(e){var t,a,n=e.current,l=s.data.site,c=Object(i.useContext)(o.b),u=c.link,f=c.transitionElement,g=u,m=l.siteMetadata.projects,p=m.findIndex((function(e){return e.title===n})),h=function(e){var t=e.idx,a=m[t].title,i="/"+Object(d.a)(a)+"/";return r.a.createElement(g,{className:"pagination__link section-padding",to:i,transitionElement:f},r.a.createElement("span",{className:"pagination__text"},a))};return 0===p?(t=r.a.createElement(h,{idx:m.length-1}),a=r.a.createElement(h,{idx:p+1})):p===m.length-1?(t=r.a.createElement(h,{idx:p-1}),a=r.a.createElement(h,{idx:0})):(t=r.a.createElement(h,{idx:p-1}),a=r.a.createElement(h,{idx:p+1})),r.a.createElement("div",{className:"pagination"},t,a)},c=a("EYWl");a("6i1Z");function u(e){var t=e.title,a=e.description,s=e.pathname,o=e.image,d=e.video,u=e.children;return r.a.createElement(i.Fragment,null,r.a.createElement(c.a,{title:t,description:a,image:o,pathname:s}),r.a.createElement("article",null,r.a.createElement(n.a,{title:t,backgroundImage:o,backgroundVideo:d}),r.a.createElement("section",null,u),r.a.createElement(l,{current:t})))}u.defaultProps={description:"",video:null};t.a=u},BqI7:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"projects":[{"title":"Latency Modeling"},{"title":"MUSCO"},{"title":"Using Reinforcement Learning in the Algorithmic Trading"},{"title":"YOLACT Video"}]}}}}')},CZM1:function(e,t,a){},EIPX:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("QCKz");a("1vIY");function s(e){var t=Object(i.useRef)(null),a=Object(n.a)(t),s=e.backgroundImage||e.backgroundVideo?"mast--media bg-black":"mast bg-lightgrey",o=null;return e.backgroundVideo?o=r.a.createElement("div",{className:"absolute-vid"},r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{type:"video/mp4",src:e.backgroundVideo}))):e.backgroundImage&&(o=r.a.createElement("figure",{className:"absolute-bg",style:{backgroundImage:"url('"+e.backgroundImage+"')"}})),r.a.createElement("section",{className:s+" rellax",ref:t},o,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"mast__container",style:{opacity:a}},r.a.createElement("h1",{className:"mast__title",itemProp:"name headline"},e.title),e.date&&r.a.createElement("time",{className:"mast__date",dateTime:"",itemProp:"datePublished"},e.date))))}s.defaultProps={date:"",backgroundImage:null,backgroundVideo:null},t.a=s},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),c=a("0/R4"),u=a("s5qY"),f=a("s5qY"),g=!r.ActiveXObject&&"ActiveXObject"in r,m=o.getWeak,p=Object.isExtensible,h=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(c(e)){var t=m(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",b,v,l,!0,!0);f&&g&&(d((i=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,r){if(c(t)&&!p(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},WDjL:function(e,t,a){},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),c=a("aagx"),u=a("s5qY"),f=l(5),g=l(6),m=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(u(this,t)).has(e):a&&c(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}},lkGP:function(e,t,a){}}]);
//# sourceMappingURL=0027f3a5838f0eed7509b90ca8015248b5761557-1edc4199049cc28d9a03.js.map