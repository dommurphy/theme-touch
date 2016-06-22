/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-placeholder-svg-svgasimg-touchevents-setclasses-testprop !*/
!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,i,s,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),m.push((r?"":"no-")+a.join("-"))}}function i(e){var n=y.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?y.className.baseVal=n:y.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){if("object"==typeof e)for(var t in e)C(e,t)&&f(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),r=Modernizr[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),i([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function d(e,t,o,r){var i,a,l,f,u="modernizr",d=s("div"),p=c();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=r?r[o]:u+(o+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=y.style.overflow,y.style.overflow="hidden",y.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),y.style.overflow=f,y.offsetHeight):d.parentNode.removeChild(d),!!a}function p(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(u(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];r--;)i.push("("+u(n[r])+":"+o+")");return i=i.join(" or "),d("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,i){function f(){c&&(delete T.style,delete T.modElem)}if(i=o(i,"undefined")?!1:i,!o(r,"undefined")){var u=p(e,r);if(!o(u,"undefined"))return u}for(var c,d,h,m,g,v=["modernizr","tspan"];!T.style;)c=!0,T.modElem=s(v.shift()),T.style=T.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],g=T.style[m],a(m,"-")&&(m=l(m)),T.style[m]!==t){if(i||o(r,"undefined"))return f(),"pfx"==n?m:!0;try{T.style[m]=r}catch(y){}if(T.style[m]!=g)return f(),"pfx"==n?m:!0}return f(),!1}var m=[],g=[],v={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=v,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var y=n.documentElement,w="svg"===y.nodeName.toLowerCase(),_=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];v._prefixes=_,Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var C;!function(){var e={}.hasOwnProperty;C=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),v._l={},v.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},v._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){v.addTest=f}),Modernizr.addTest("svgasimg",n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var S={elem:s("modernizr")};Modernizr._q.push(function(){delete S.elem});var T={style:S.elem.style};Modernizr._q.unshift(function(){delete T.style});var b=v.testStyles=d;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",_.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");b(o,function(e){t=9===e.offsetTop})}return t});v.testProp=function(e,n,o){return h([e],t,n,o)};r(),i(m),delete v.addTest,delete v.addAsyncTest;for(var x=0;x<Modernizr._q.length;x++)Modernizr._q[x]();e.Modernizr=Modernizr}(window,document);