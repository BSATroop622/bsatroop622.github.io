(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/9aa":function(e,t,a){var r=a("NykK"),i=a("ExA7");e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"5zhl":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),o=a("9eSz"),s=a.n(o);a("IpnI");function l(){return i.a.createElement(n.StaticQuery,{query:"3395093952",render:function(e){return i.a.createElement("span",null,i.a.createElement(s.a,{fluid:e.image1.childImageSharp.fluid,style:{maxWidth:"150px",width:"150px",display:"inline-block","vertical-align":"middle"}}))}})}},"6nK8":function(e,t,a){var r=a("dVn5"),i=a("fo6e"),n=a("dt0z"),o=a("9NmV");e.exports=function(e,t,a){return e=n(e),void 0===(t=a?void 0:t)?i(e)?o(e):r(e):e.match(t)||[]}},"8Eqz":function(e,t,a){e.exports={activeNav:"Header-module--activeNav--25noA",mainNav:"Header-module--main-nav--2C0n8",container:"Header-module--container--18k5R"}},"9NmV":function(e,t){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+a+"]",i="\\d+",n="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",s="[^\\ud800-\\udfff"+a+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+o+"|"+s+")",f="(?:"+u+"|"+s+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,d].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[n,l,d].join("|")+")"+g,h=RegExp([u+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,u,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,u+c,"$"].join("|")+")",u+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,m].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},"9eSz":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),o=r(a("XEEL")),s=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,x=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),x.set(e,t)),function(){a.unobserve(e),x.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+o+s+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(A,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),A=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:o,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));A.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,x=e.itemProp,S=e.loading,L=e.draggable,z=m||h;if(!z)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,l.default)({opacity:O?1:0,transition:j?"opacity "+v+"ms":"none"},s),k="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&C,s,f),H={title:t,alt:this.state.isVisible?"":a,style:V,className:p,itemProp:x},P=this.state.isHydrated?g(z):z[0];if(m)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&C)}),P.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:H,imageVariants:z,generateSources:w}),P.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:H,imageVariants:z,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(A,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:z}))}}));if(h){var U=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete U.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},k&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:k,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},j&&C)}),P.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:H,imageVariants:z,generateSources:w}),P.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:H,imageVariants:z,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(A,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:S},P,{imageVariants:z}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}O.propTypes={resolutions:j,sizes:T,fixed:k(u.default.oneOfType([j,u.default.arrayOf(j)])),fluid:k(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=O;t.default=C},AP2z:function(e,t,a){var r=a("nmnc"),i=Object.prototype,n=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=n.call(e,s),a=e[s];try{e[s]=void 0;var r=!0}catch(l){}var i=o.call(e);return r&&(t?e[s]=a:delete e[s]),i}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},IpnI:function(e,t){var a={siteTitle:"BSA Troop 622",siteTitleShort:"BSA Troop 622",siteTitleAlt:"BSA Troop 622",siteLogo:"/logos/logo-1024.png",siteUrl:"https://gatsby-markdown-blog-starter.netlify.com",pathPrefix:"",siteDescription:"A BSA troop in Bothell, WA.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-161211056-1",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"BSA Troop 622",userEmail:"youremail@gmail.com",userTwitter:"gatsbyjs",userGitHub:"gatsbyjs",userLocation:"North Pole, Earth",userAvatar:"https://i.ibb.co/WPz9CNk/avatar.jpg",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",copyright:"Copyright © 2020. All rights reserved.",themeColor:"#c62828",backgroundColor:"red"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),e.exports=a},JwsL:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("S5Rk"),o=a.n(n);a("IpnI");t.a=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:o.a.container}))}},KfNM:function(e,t){var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},Kz5y:function(e,t,a){var r=a("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,n=r||i||Function("return this")();e.exports=n},N1om:function(e,t,a){var r=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=r},NykK:function(e,t,a){var r=a("nmnc"),i=a("AP2z"),n=a("KfNM"),o=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?i(e):n(e)}},S5Rk:function(e,t,a){e.exports={container:"Footer-module--container--3Dvn1",copyright:"Footer-module--copyright--2uglW"}},TKrE:function(e,t,a){var r=a("qRkn"),i=a("dt0z"),n=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=i(e))&&e.replace(n,r).replace(o,"")}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},Z0cm:function(e,t){var a=Array.isArray;e.exports=a},asDA:function(e,t){e.exports=function(e,t,a,r){var i=-1,n=null==e?0:e.length;for(r&&n&&(a=e[++i]);++i<n;)a=t(a,e[i],i,e);return a}},dVn5:function(e,t){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},dt0z:function(e,t,a){var r=a("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var a=-1,r=null==e?0:e.length,i=Array(r);++a<r;)i[a]=t(e[a],a,e);return i}},fo6e:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},nmnc:function(e,t,a){var r=a("Kz5y").Symbol;e.exports=r},qRkn:function(e,t,a){var r=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},rY4l:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),o=(a("IpnI"),a("N1om"),a("8Eqz")),s=a.n(o),l=a("5zhl");t.a=function(){return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("ul",{className:s.a.mainNav},i.a.createElement("li",null," ",i.a.createElement(l.a,null)),i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/",activeClassName:s.a.activeNav},"Home")),i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/annual",activeClassName:s.a.activeNav},"Events")),i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/join",activeClassName:s.a.activeNav},"Join")),i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/blog",activeClassName:s.a.activeNav},"News")),i.a.createElement("li",null,i.a.createElement(n.Link,{to:"/troopwebhost",activeClassName:s.a.activeNav},"Members"))),i.a.createElement("br",null)))}},sgoq:function(e,t,a){var r=a("asDA"),i=a("TKrE"),n=a("6nK8"),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(n(i(t).replace(o,"")),e,"")}}},zoYe:function(e,t,a){var r=a("nmnc"),i=a("eUgh"),n=a("Z0cm"),o=a("/9aa"),s=r?r.prototype:void 0,l=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(n(t))return i(t,e)+"";if(o(t))return l?l.call(t):"";var a=t+"";return"0"==a&&1/t==-1/0?"-0":a}}}]);
//# sourceMappingURL=0ec77abf4fd3b5e20c5a22879eac6a0676c024ca-2afd31398edfd1203379.js.map