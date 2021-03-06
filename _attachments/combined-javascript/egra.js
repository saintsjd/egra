/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
/*
This appraoch allows colors to be stored as constants
*/var blue, first_click_color, red, second_click_color, yellow;
blue = "#5E87B0";
yellow = "#F7C942";
first_click_color = yellow;
second_click_color = blue;
red = "red";
$("head").append("  <style>    .toggle-grid-with-timer .ui-checkbox span.show{      color: black;    }    .toggle-grid-with-timer .ui-checkbox span{      color: lightgray;    }    .toggle-grid-with-timer .ui-btn-active{      background-image: none;    }    .toggle-grid-with-timer .ui-checkbox .last-attempted{      outline: 5px solid " + yellow + ";      outline-offset: -10px;    }    .toggle-grid-with-timer .ui-btn-icon-notext{      margin-left: 20px;      vertical-align: middle;    }    .red {      color: " + red + ";      background-color: " + red + ";    }    #InitialSound .ui-controlgroup-label{      font-size: x-large;    }    #Phonemes legend{      font-size: x-large;    }      </style>  ");/*
  mustache.js — Logic-less templates in JavaScript

  See http://mustache.github.com/ for more info.
*/

var Mustache = function() {
  var Renderer = function() {};

  Renderer.prototype = {
    otag: "{{",
    ctag: "}}",
    pragmas: {},
    buffer: [],
    pragmas_implemented: {
      "IMPLICIT-ITERATOR": true
    },
    context: {},

    render: function(template, context, partials, in_recursion) {
      // reset buffer & set context
      if(!in_recursion) {
        this.context = context;
        this.buffer = []; // TODO: make this non-lazy
      }

      // fail fast
      if(!this.includes("", template)) {
        if(in_recursion) {
          return template;
        } else {
          this.send(template);
          return;
        }
      }

      template = this.render_pragmas(template);
      var html = this.render_section(template, context, partials);
      if(in_recursion) {
        return this.render_tags(html, context, partials, in_recursion);
      }

      this.render_tags(html, context, partials, in_recursion);
    },

    /*
      Sends parsed lines
    */
    send: function(line) {
      if(line != "") {
        this.buffer.push(line);
      }
    },

    /*
      Looks for %PRAGMAS
    */
    render_pragmas: function(template) {
      // no pragmas
      if(!this.includes("%", template)) {
        return template;
      }

      var that = this;
      var regex = new RegExp(this.otag + "%([\\w-]+) ?([\\w]+=[\\w]+)?" +
            this.ctag);
      return template.replace(regex, function(match, pragma, options) {
        if(!that.pragmas_implemented[pragma]) {
          throw({message: 
            "This implementation of mustache doesn't understand the '" +
            pragma + "' pragma"});
        }
        that.pragmas[pragma] = {};
        if(options) {
          var opts = options.split("=");
          that.pragmas[pragma][opts[0]] = opts[1];
        }
        return "";
        // ignore unknown pragmas silently
      });
    },

    /*
      Tries to find a partial in the curent scope and render it
    */
    render_partial: function(name, context, partials) {
      name = this.trim(name);
      if(!partials || partials[name] === undefined) {
        throw({message: "unknown_partial '" + name + "'"});
      }
      if(typeof(context[name]) != "object") {
        return this.render(partials[name], context, partials, true);
      }
      return this.render(partials[name], context[name], partials, true);
    },

    /*
      Renders inverted (^) and normal (#) sections
    */
    render_section: function(template, context, partials) {
      if(!this.includes("#", template) && !this.includes("^", template)) {
        return template;
      }

      var that = this;
      // CSW - Added "+?" so it finds the tighest bound, not the widest
      var regex = new RegExp(this.otag + "(\\^|\\#)\\s*(.+)\\s*" + this.ctag +
              "\n*([\\s\\S]+?)" + this.otag + "\\/\\s*\\2\\s*" + this.ctag +
              "\\s*", "mg");

      // for each {{#foo}}{{/foo}} section do...
      return template.replace(regex, function(match, type, name, content) {
        var value = that.find(name, context);
        if(type == "^") { // inverted section
          if(!value || that.is_array(value) && value.length === 0) {
            // false or empty list, render it
            return that.render(content, context, partials, true);
          } else {
            return "";
          }
        } else if(type == "#") { // normal section
          if(that.is_array(value)) { // Enumerable, Let's loop!
            return that.map(value, function(row) {
              return that.render(content, that.create_context(row),
                partials, true);
            }).join("");
          } else if(that.is_object(value)) { // Object, Use it as subcontext!
            return that.render(content, that.create_context(value),
              partials, true);
          } else if(typeof value === "function") {
            // higher order section
            return value.call(context, content, function(text) {
              return that.render(text, context, partials, true);
            });
          } else if(value) { // boolean section
            return that.render(content, context, partials, true);
          } else {
            return "";
          }
        }
      });
    },

    /*
      Replace {{foo}} and friends with values from our view
    */
    render_tags: function(template, context, partials, in_recursion) {
      // tit for tat
      var that = this;

      var new_regex = function() {
        return new RegExp(that.otag + "(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?" +
          that.ctag + "+", "g");
      };

      var regex = new_regex();
      var tag_replace_callback = function(match, operator, name) {
        switch(operator) {
        case "!": // ignore comments
          return "";
        case "=": // set new delimiters, rebuild the replace regexp
          that.set_delimiters(name);
          regex = new_regex();
          return "";
        case ">": // render partial
          return that.render_partial(name, context, partials);
        case "{": // the triple mustache is unescaped
          return that.find(name, context);
        default: // escape the value
          return that.escape(that.find(name, context));
        }
      };
      var lines = template.split("\n");
      for(var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(regex, tag_replace_callback, this);
        if(!in_recursion) {
          this.send(lines[i]);
        }
      }

      if(in_recursion) {
        return lines.join("\n");
      }
    },

    set_delimiters: function(delimiters) {
      var dels = delimiters.split(" ");
      this.otag = this.escape_regex(dels[0]);
      this.ctag = this.escape_regex(dels[1]);
    },

    escape_regex: function(text) {
      // thank you Simon Willison
      if(!arguments.callee.sRE) {
        var specials = [
          '/', '.', '*', '+', '?', '|',
          '(', ')', '[', ']', '{', '}', '\\'
        ];
        arguments.callee.sRE = new RegExp(
          '(\\' + specials.join('|\\') + ')', 'g'
        );
      }
      return text.replace(arguments.callee.sRE, '\\$1');
    },

    /*
      find `name` in current `context`. That is find me a value
      from the view object
    */
    find: function(name, context) {
      name = this.trim(name);

      // Checks whether a value is thruthy or false or 0
      function is_kinda_truthy(bool) {
        return bool === false || bool === 0 || bool;
      }

      var value;
      if(is_kinda_truthy(context[name])) {
        value = context[name];
      } else if(is_kinda_truthy(this.context[name])) {
        value = this.context[name];
      }

      if(typeof value === "function") {
        return value.apply(context);
      }
      if(value !== undefined) {
        return value;
      }
      // silently ignore unkown variables
      return "";
    },

    // Utility methods

    /* includes tag */
    includes: function(needle, haystack) {
      return haystack.indexOf(this.otag + needle) != -1;
    },

    /*
      Does away with nasty characters
    */
    escape: function(s) {
      s = String(s === null ? "" : s);
      return s.replace(/&(?!\w+;)|["'<>\\]/g, function(s) {
        switch(s) {
        case "&": return "&amp;";
        case "\\": return "\\\\";
        case '"': return '&quot;';
        case "'": return '&#39;';
        case "<": return "&lt;";
        case ">": return "&gt;";
        default: return s;
        }
      });
    },

    // by @langalex, support for arrays of strings
    create_context: function(_context) {
      if(this.is_object(_context)) {
        return _context;
      } else {
        var iterator = ".";
        if(this.pragmas["IMPLICIT-ITERATOR"]) {
          iterator = this.pragmas["IMPLICIT-ITERATOR"].iterator;
        }
        var ctx = {};
        ctx[iterator] = _context;
        return ctx;
      }
    },

    is_object: function(a) {
      return a && typeof a == "object";
    },

    is_array: function(a) {
      return Object.prototype.toString.call(a) === '[object Array]';
    },

    /*
      Gets rid of leading and trailing whitespace
    */
    trim: function(s) {
      return s.replace(/^\s*|\s*$/g, "");
    },

    /*
      Why, why, why? Because IE. Cry, cry cry.
    */
    map: function(array, fn) {
      if (typeof array.map == "function") {
        return array.map(fn);
      } else {
        var r = [];
        var l = array.length;
        for(var i = 0; i < l; i++) {
          r.push(fn(array[i]));
        }
        return r;
      }
    }
  };

  return({
    name: "mustache.js",
    version: "0.3.1-dev",

    /*
      Turns a template and view into HTML
    */
    to_html: function(template, view, partials, send_fun) {
      var renderer = new Renderer();
      if(send_fun) {
        renderer.send = send_fun;
      }
      renderer.render(template, view, partials);
      if(!send_fun) {
        return renderer.buffer.join("\n");
      }
    }
  });
}();
// lib/handlebars/parser.js
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"param":27,"STRING":28,"hashSegments":29,"hashSegment":30,"ID":31,"EQUALS":32,"pathSegments":33,"SEP":34,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",31:"ID",32:"EQUALS",34:"SEP"},
productions_: [0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[26,1],[29,2],[29,1],[30,3],[30,3],[21,1],[33,3],[33,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1] 
break;
case 2: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]) 
break;
case 3: this.$ = new yy.ProgramNode($$[$0]) 
break;
case 4: this.$ = new yy.ProgramNode([]) 
break;
case 5: this.$ = [$$[$0]] 
break;
case 6: $$[$0-1].push($$[$0]); this.$ = $$[$0-1] 
break;
case 7: this.$ = new yy.InverseNode($$[$0-2], $$[$0-1], $$[$0]) 
break;
case 8: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0]) 
break;
case 9: this.$ = $$[$0] 
break;
case 10: this.$ = $$[$0] 
break;
case 11: this.$ = new yy.ContentNode($$[$0]) 
break;
case 12: this.$ = new yy.CommentNode($$[$0]) 
break;
case 13: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 14: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 15: this.$ = $$[$0-1] 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true) 
break;
case 18: this.$ = new yy.PartialNode($$[$0-1]) 
break;
case 19: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]) 
break;
case 20: 
break;
case 21: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]] 
break;
case 22: this.$ = [[$$[$0-1]].concat($$[$0]), null] 
break;
case 23: this.$ = [[$$[$0-1]], $$[$0]] 
break;
case 24: this.$ = [[$$[$0]], null] 
break;
case 25: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 26: this.$ = [$$[$0]] 
break;
case 27: this.$ = $$[$0] 
break;
case 28: this.$ = new yy.StringNode($$[$0]) 
break;
case 29: this.$ = new yy.HashNode($$[$0]) 
break;
case 30: $$[$0-1].push($$[$0]); this.$ = $$[$0-1] 
break;
case 31: this.$ = [$$[$0]] 
break;
case 32: this.$ = [$$[$0-2], $$[$0]] 
break;
case 33: this.$ = [$$[$0-2], new yy.StringNode($$[$0])] 
break;
case 34: this.$ = new yy.IdNode($$[$0]) 
break;
case 35: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 36: this.$ = [$$[$0]] 
break;
}
},
table: [{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,31:[1,25],33:24},{17:26,21:23,31:[1,25],33:24},{17:27,21:23,31:[1,25],33:24},{17:28,21:23,31:[1,25],33:24},{21:29,31:[1,25],33:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,31:[1,25],33:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,34],28:[2,34],31:[2,34],34:[1,44]},{18:[2,36],28:[2,36],31:[2,36],34:[2,36]},{18:[1,45]},{18:[1,46]},{18:[1,47]},{18:[1,48],21:49,31:[1,25],33:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:50,31:[1,25],33:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:51,27:52,28:[1,41],29:39,30:42,31:[1,43],33:24},{18:[2,23]},{18:[2,26],28:[2,26],31:[2,26]},{18:[2,29],30:53,31:[1,54]},{18:[2,27],28:[2,27],31:[2,27]},{18:[2,28],28:[2,28],31:[2,28]},{18:[2,31],31:[2,31]},{18:[2,36],28:[2,36],31:[2,36],32:[1,55],34:[2,36]},{31:[1,56]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,57]},{18:[1,58]},{18:[2,21]},{18:[2,25],28:[2,25],31:[2,25]},{18:[2,30],31:[2,30]},{32:[1,55]},{21:59,28:[1,60],31:[1,25],33:24},{18:[2,35],28:[2,35],31:[2,35],34:[2,35]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,32],31:[2,32]},{18:[2,33],31:[2,33]}],
defaultActions: {16:[2,1],37:[2,23],51:[2,21]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }
            
            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column,
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match.length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: this.begin("mu"); if (yy_.yytext) return 14; 
break;
case 1: return 14; 
break;
case 2: return 24; 
break;
case 3: return 16; 
break;
case 4: return 20; 
break;
case 5: return 19; 
break;
case 6: return 19; 
break;
case 7: return 23; 
break;
case 8: return 23; 
break;
case 9: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.begin("INITIAL"); return 15; 
break;
case 10: return 22; 
break;
case 11: return 32; 
break;
case 12: return 31; 
break;
case 13: return 31; 
break;
case 14: return 34; 
break;
case 15: /*ignore whitespace*/ 
break;
case 16: this.begin("INITIAL"); return 18; 
break;
case 17: this.begin("INITIAL"); return 18; 
break;
case 18: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 28; 
break;
case 19: return 31; 
break;
case 20: return 'INVALID'; 
break;
case 21: return 5; 
break;
}
};
lexer.rules = [/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{!.*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^[a-zA-Z0-9_]+(?=[=} /.])/,/^./,/^$/];
lexer.conditions = {"mu":{"rules":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"inclusive":false},"INITIAL":{"rules":[0,1,21],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = handlebars;
exports.parse = function () { return handlebars.parse.apply(handlebars, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
};
// lib/handlebars/base.js
var Handlebars = {};

Handlebars.Parser = handlebars;

Handlebars.parse = function(string) {
  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(string);
};

Handlebars.print = function(ast) {
  return new Handlebars.PrintVisitor().accept(ast);
};

Handlebars.Runtime = {};

Handlebars.Runtime.compile = function(string) {
  var ast = Handlebars.parse(string);

  return function(context, helpers, partials) {
    helpers  = helpers || Handlebars.helpers;
    partials = partials || Handlebars.partials;

    var internalContext = new Handlebars.Context(context, helpers, partials);
    var runtime = new Handlebars.Runtime(internalContext);
    runtime.accept(ast);
    return runtime.buffer;
  };
};

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('blockHelperMissing', function(context, fn, inverse) {
  inverse = inverse || function() {};

  var ret = "";
  var type = Object.prototype.toString.call(context);

  if(type === "[object Function]") {
    context = context();
  }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + fn(context[i]);
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  } else {
    return fn(context);
  }
}, function(context, fn) {
  return fn(context);
});

Handlebars.registerHelper('each', function(context, fn, inverse) {
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + fn(context[i]);
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, fn, inverse) {
  if(!context || context == []) {
    return inverse(this);
  } else {
    return fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, fn, inverse) {
  return Handlebars.helpers['if'].call(this, context, inverse, fn);
});

Handlebars.registerHelper('with', function(context, fn) {
  return fn(context);
});

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  // override in the host environment
  log: function(level, str) {}
};

Handlebars.log = function(level, str) { Handlebars.logger.log(level, str); };
;
// lib/handlebars/ast.js
(function() {

  Handlebars.AST = {};

  Handlebars.AST.ProgramNode = function(statements, inverse) {
    this.type = "program";
    this.statements = statements;
    if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
  };

  Handlebars.AST.MustacheNode = function(params, hash, unescaped) {
    this.type = "mustache";
    this.id = params[0];
    this.params = params.slice(1);
    this.hash = hash;
    this.escaped = !unescaped;
  };

  Handlebars.AST.PartialNode = function(id, context) {
    this.type    = "partial";

    // TODO: disallow complex IDs

    this.id      = id;
    this.context = context;
  };

  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  Handlebars.AST.BlockNode = function(mustache, program, close) {
    verifyMatch(mustache.id, close);
    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
  };

  Handlebars.AST.InverseNode = function(mustache, program, close) {
    verifyMatch(mustache.id, close);
    this.type = "inverse";
    this.mustache = mustache;
    this.program  = program;
  };

  Handlebars.AST.ContentNode = function(string) {
    this.type = "content";
    this.string = string;
  };

  Handlebars.AST.HashNode = function(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  };

  Handlebars.AST.IdNode = function(parts) {
    this.type = "ID";
    this.original = parts.join("/");

    var dig = [], depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i];

      if(part === "..") { depth++; }
      else if(part === "." || part === "this") { continue; }
      else { dig.push(part); }
    }

    this.parts    = dig;
    this.depth    = depth;
    this.isSimple = (dig.length === 1) && (depth === 0);
  };

  Handlebars.AST.StringNode = function(string) {
    this.type = "STRING";
    this.string = string;
  };

  Handlebars.AST.CommentNode = function(comment) {
    this.type = "comment";
    this.comment = comment;
  };

})();;
// lib/handlebars/visitor.js

Handlebars.Visitor = function() {};

Handlebars.Visitor.prototype = {
  accept: function(object) {
    return this[object.type](object);
  }
};;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  this.message = message;
};

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "<": "&lt;",
    ">": "&gt;"
  };

  var badChars = /&(?!\w+;)|[<>]/g;
  var possible = /[&<>]/

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;"
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/vm.js
Handlebars.Compiler = function() {};
Handlebars.JavaScriptCompiler = function() {};

(function(Compiler, JavaScriptCompiler) {
  Compiler.OPCODE_MAP = {
    appendContent: 1,
    getContext: 2,
    lookupWithHelpers: 3,
    lookup: 4,
    append: 5,
    invokeMustache: 6,
    appendEscaped: 7,
    pushString: 8,
    truthyOrFallback: 9,
    functionOrFallback: 10,
    invokeProgram: 11,
    invokePartial: 12,
    push: 13,
    invokeInverse: 14,
    assignToHash: 15
  };

  Compiler.MULTI_PARAM_OPCODES = {
    appendContent: 1,
    getContext: 1,
    lookupWithHelpers: 1,
    lookup: 1,
    invokeMustache: 2,
    pushString: 1,
    truthyOrFallback: 1,
    functionOrFallback: 1,
    invokeProgram: 2,
    invokePartial: 1,
    push: 1,
    invokeInverse: 1,
    assignToHash: 1
  };

  Compiler.DISASSEMBLE_MAP = {};

  for(var prop in Compiler.OPCODE_MAP) {
    var value = Compiler.OPCODE_MAP[prop];
    Compiler.DISASSEMBLE_MAP[value] = prop;
  }

  Compiler.multiParamSize = function(code) {
    return Compiler.MULTI_PARAM_OPCODES[Compiler.DISASSEMBLE_MAP[code]];
  };

  Compiler.prototype = {
    disassemble: function() {
      var opcodes = this.opcodes, opcode, nextCode;
      var out = [], str, name, value;

      for(var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if(opcode === 'DECLARE') {
          name = opcodes[++i];
          value = opcodes[++i];
          out.push("DECLARE " + name + " = " + value);
        } else {
          str = Compiler.DISASSEMBLE_MAP[opcode];

          var extraParams = Compiler.multiParamSize(opcode);
          var codes = [];

          for(var j=0; j<extraParams; j++) {
            nextCode = opcodes[++i];

            if(typeof nextCode === "string") {
              nextCode = "\"" + nextCode.replace("\n", "\\n") + "\"";
            }

            codes.push(nextCode);
          }

          str = str + " " + codes.join(" ");

          out.push(str);
        }
      }

      return out.join("\n");
    },

    guid: 0,

    compile: function(program) {
      this.children = [];
      this.depths = {list: []};
      return this.program(program);
    },

    accept: function(node) {
      return this[node.type](node);
    },

    program: function(program) {
      var statements = program.statements, statement;
      this.opcodes = [];

      for(var i=0, l=statements.length; i<l; i++) {
        statement = statements[i];
        this[statement.type](statement);
      }

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new Compiler().compile(program);
      var guid = this.guid++;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache;
      var depth, child, inverse, inverseGuid;

      var params = this.setupStackForMustache(mustache);

      var programGuid = this.compileProgram(block.program);

      if(block.program.inverse) {
        inverseGuid = this.compileProgram(block.program.inverse);
        this.declare('inverse', inverseGuid);
      }

      this.opcode('invokeProgram', programGuid, params.length);
      this.declare('inverse', null);
      this.opcode('append');
    },

    inverse: function(block) {
      this.ID(block.mustache.id);
      var programGuid = this.compileProgram(block.program);

      this.opcode('invokeInverse', programGuid);
      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('push', '{}');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        this.accept(val);
        this.opcode('assignToHash', pair[0]);
      }
    },

    partial: function(partial) {
      var id = partial.id;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'context');
      }

      this.opcode('invokePartial', id.original);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var params = this.setupStackForMustache(mustache);

      this.opcode('invokeMustache', params.length, mustache.id.original);

      if(mustache.escaped) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);

      this.opcode('getContext', id.depth);

      this.opcode('lookupWithHelpers', id.parts[0] || null);

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    comment: function() {},

    // HELPERS
    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];
        this[param.type](param);
      }
    },

    opcode: function(name, val1, val2) {
      this.opcodes.push(Compiler.OPCODE_MAP[name]);
      if(val1 !== undefined) { this.opcodes.push(val1); }
      if(val2 !== undefined) { this.opcodes.push(val2); }
    },

    declare: function(name, value) {
      this.opcodes.push('DECLARE');
      this.opcodes.push(name);
      this.opcodes.push(value);
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    setupStackForMustache: function(mustache) {
      var params = mustache.params;

      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      } else {
        this.opcode('push', '{}');
      }

      this.ID(mustache.id);

      return params;
    }
  };

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name, type) {
      if(JavaScriptCompiler.RESERVED_WORDS[name]) {
        return parent + "['" + name + "']";
      } else {
        return parent + "." + name;
      }
    },

    appendToBuffer: function(string) {
      return "buffer = buffer + " + string + ";";
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },
    // END PUBLIC API

    compile: function(environment, data) {
      this.environment = environment;
      this.data = data;

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = {list: []};

      this.compileChildren(environment, data);

      Handlebars.log(Handlebars.logger.DEBUG, environment.disassemble() + "\n\n");

      var opcodes = environment.opcodes, opcode, name, declareName, declareVal;

      this.i = 0;

      for(l=opcodes.length; this.i<l; this.i++) {
        opcode = this.nextOpcode(0);

        if(opcode[0] === 'DECLARE') {
          this.i = this.i + 2;
          this[opcode[1]] = opcode[2];
        } else {
          this.i = this.i + opcode[1].length;
          this[opcode[0]].apply(this, opcode[1]);
        }
      }

      return this.createFunction();
    },

    nextOpcode: function(n) {
      var opcodes = this.environment.opcodes, opcode = opcodes[this.i + n], name, val;
      var extraParams, codes;

      if(opcode === 'DECLARE') {
        name = opcodes[this.i + 1];
        val  = opcodes[this.i + 2];
        return ['DECLARE', name, val];
      } else {
        name = Compiler.DISASSEMBLE_MAP[opcode];

        extraParams = Compiler.multiParamSize(opcode);
        codes = [];

        for(var j=0; j<extraParams; j++) {
          codes.push(opcodes[this.i + j + 1 + n]);
        }

        return [name, codes];
      }
    },

    eat: function(opcode) {
      this.i = this.i + opcode.length;
    },

    preamble: function() {
      var out = [];
      out.push("var buffer = " + this.initializeBuffer() + ", currentContext = context");

      var copies = "helpers = helpers || Handlebars.helpers;";
      if(this.environment.usePartial) { copies = copies + " partials = partials || Handlebars.partials;"; }
      out.push(copies);

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunction: function() {
      var container = {
        escapeExpression: Handlebars.Utils.escapeExpression,
        invokePartial: Handlebars.VM.invokePartial,
        programs: [],
        program: function(i, helpers, partials, data) {
          var programWrapper = this.programs[i];
          if(data) {
            return Handlebars.VM.program(this.children[i], helpers, partials, data);
          } else if(programWrapper) {
            return programWrapper;
          } else {
            programWrapper = this.programs[i] = Handlebars.VM.program(this.children[i], helpers, partials);
            return programWrapper;
          }
        },
        programWithDepth: Handlebars.VM.programWithDepth,
        noop: Handlebars.VM.noop
      };
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[0] = this.source[0] + ", " + locals.join(", ");
      }

      this.source[0] = this.source[0] + ";";

      this.source.push("return buffer;");

      var params = ["Handlebars", "context", "helpers", "partials"];

      if(this.data) { params.push("data"); }

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }


      if(params.length === 4 && !this.environment.usePartial) { params.pop(); }

      params.push(this.source.join("\n"));

      var fn = Function.apply(this, params);
      fn.displayName = "Handlebars.js";

      Handlebars.log(Handlebars.logger.DEBUG, fn.toString() + "\n\n");

      container.render = fn;

      container.children = this.environment.children;

      return function(context, helpers, partials, data, $depth) {
        try {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(Handlebars);
          return container.render.apply(container, args);
        } catch(e) {
          throw e;
        }
      };
    },

    appendContent: function(content) {
      this.source.push(this.appendToBuffer(this.quotedString(content)));
    },

    append: function() {
      var local = this.popStack();
      this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
    },

    appendEscaped: function() {
      var opcode = this.nextOpcode(1), extra = "";

      if(opcode[0] === 'appendContent') {
        extra = " + " + this.quotedString(opcode[1][0]);
        this.eat(opcode);
      }

      this.source.push(this.appendToBuffer("this.escapeExpression(" + this.popStack() + ")" + extra));
    },

    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;

        if(depth === 0) {
          this.source.push("currentContext = context;");
        } else {
          this.source.push("currentContext = depth" + depth + ";");
        }
      }
    },

    lookupWithHelpers: function(name) {
      if(name) {
        var topStack = this.nextStack();

        var toPush =  "if('" + name + "' in helpers) { " + topStack +
                      " = " + this.nameLookup('helpers', name, 'helper') +
                      "; } else { " + topStack + " = " +
                      this.nameLookup('currentContext', name, 'context') +
                      "; }";

        this.source.push(toPush);
      } else {
        this.pushStack("currentContext");
      }
    },

    lookup: function(name) {
      var topStack = this.topStack();
      this.source.push(topStack + " = " + this.nameLookup(topStack, name, 'context') + ";");
    },

    pushString: function(string) {
      this.pushStack(this.quotedString(string));
    },

    push: function(name) {
      this.pushStack(name);
    },

    invokeMustache: function(paramSize, original) {
      this.populateParams(paramSize, this.quotedString(original), "{}", null, function(nextStack, helperMissingString, id) {
        this.source.push("else if(" + id + "=== undefined) { " + nextStack + " = helpers.helperMissing.call(" + helperMissingString + "); }");
        this.source.push("else { " + nextStack + " = " + id + "; }");
      });
    },

    invokeProgram: function(guid, paramSize) {
      var inverse = this.programExpression(this.inverse);
      var mainProgram = this.programExpression(guid);

      this.populateParams(paramSize, null, mainProgram, inverse, function(nextStack, helperMissingString, id) {
        this.source.push("else { " + nextStack + " = helpers.blockHelperMissing.call(" + helperMissingString + "); }");
      });
    },

    populateParams: function(paramSize, helperId, program, inverse, fn) {
      var id = this.popStack(), nextStack;
      var params = [];

      var hash = this.popStack();

      for(var i=0; i<paramSize; i++) {
        var param = this.popStack();
        params.push(param);
      }

      this.register('tmp1', program);
      this.source.push('tmp1.hash = ' + hash + ';');

      if(inverse) {
        this.source.push('tmp1.fn = tmp1;');
        this.source.push('tmp1.inverse = ' + inverse + ';');
      }

      if(this.data) {
        this.source.push('tmp1.data = data;');
      }

      params.push('tmp1');

      // TODO: This is legacy behavior. Deprecate and remove.
      if(inverse) {
        params.push(inverse);
      }

      this.populateCall(params, id, helperId || id, fn);
    },

    populateCall: function(params, id, helperId, fn) {
      var paramString = ["context"].concat(params).join(", ");
      var helperMissingString = ["context"].concat(helperId).concat(params).join(", ");

      nextStack = this.nextStack();

      this.source.push("if(typeof " + id + " === 'function') { " + nextStack + " = " + id + ".call(" + paramString + "); }");
      fn.call(this, nextStack, helperMissingString, id);
    },

    invokeInverse: function(guid) {
      var program = this.programExpression(guid);

      var blockMissingParams = ["context", this.topStack(), "this.noop", program];
      this.pushStack("helpers.blockHelperMissing.call(" + blockMissingParams.join(", ") + ")");
    },

    invokePartial: function(context) {
      this.pushStack("this.invokePartial(" + this.nameLookup('partials', context, 'partial') + ", '" + context + "', " + this.popStack() + ", helpers, partials);");
    },

    assignToHash: function(key) {
      var value = this.popStack();
      var hash = this.topStack();

      this.source.push(hash + "['" + key + "'] = " + value + ";");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, data) {
      var children = environment.children, child, compiler;
      var compiled = [];

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        compiled[i] = compiler.compile(child, data);
      }

      environment.rawChildren = children;
      environment.children = compiled;
    },

    programExpression: function(guid) {
      if(guid == null) { return "this.noop"; }

      var programParams = [guid, "helpers", "partials"];

      var depths = this.environment.rawChildren[guid].depths.list;

      if(this.data) { programParams.push("data"); }

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("context"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      if(!this.environment.usePartial) {
        if(programParams[3]) {
          programParams[2] = "null";
        } else {
          programParams.pop();
        }
      }

      if(depths.length === 0) {
        return "this.program(" + programParams.join(", ") + ")";
      } else {
        programParams[0] = "this.children[" + guid + "]";
        return "this.programWithDepth(" + programParams.join(", ") + ")";
      }
    },

    register: function(name, val) {
      this.useRegister(name);
      this.source.push(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStack: function(item) {
      this.source.push(this.nextStack() + " = " + item + ";");
      return "stack" + this.stackSlot;
    },

    nextStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return "stack" + this.stackSlot;
    },

    popStack: function() {
      return "stack" + this.stackSlot--;
    },

    topStack: function() {
      return "stack" + this.stackSlot;
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r') + '"';
    }
  };

  var reservedWords = ("break case catch continue default delete do else finally " +
                       "for function if in instanceof new return switch this throw " + 
                       "try typeof var void while with null true false").split(" ");

  compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

})(Handlebars.Compiler, Handlebars.JavaScriptCompiler);

Handlebars.VM = {
  programWithDepth: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(context, helpers, partials, data) {
      args[0] = helpers || args[0];
      args[1] = partials || args[1];
      args[2] = data || args[2];
      return fn.apply(this, [context].concat(args));
    };
  },
  program: function(fn, helpers, partials, data) {
    return function(context, h2, p2, d2) {
      return fn(context, h2 || helpers, p2 || partials, d2 || data);
    };
  },
  noop: function() { return ""; },
  compile: function(string, data) {
    var ast = Handlebars.parse(string);
    var environment = new Handlebars.Compiler().compile(ast);
    return new Handlebars.JavaScriptCompiler().compile(environment, data);
  },
  invokePartial: function(partial, name, context, helpers, partials) {
    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, helpers, partials);
    } else {
      partials[name] = Handlebars.VM.compile(partial);
      return partials[name](context, helpers, partials);
    }
  }
};

Handlebars.compile = Handlebars.VM.compile;;
/*
Copyright (c) 2010 Ryan Schuft (ryan.schuft@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
  This code is based in part on the work done in Ruby to support
  infection as part of Ruby on Rails in the ActiveSupport's Inflector
  and Inflections classes.  It was initally ported to Javascript by
  Ryan Schuft (ryan.schuft@gmail.com) in 2007.

  The code is available at http://code.google.com/p/inflection-js/

  The basic usage is:
    1. Include this script on your web page.
    2. Call functions on any String object in Javascript

  Currently implemented functions:

    String.pluralize(plural) == String
      renders a singular English language noun into its plural form
      normal results can be overridden by passing in an alternative

    String.singularize(singular) == String
      renders a plural English language noun into its singular form
      normal results can be overridden by passing in an alterative

    String.camelize(lowFirstLetter) == String
      renders a lower case underscored word into camel case
      the first letter of the result will be upper case unless you pass true
      also translates "/" into "::" (underscore does the opposite)

    String.underscore() == String
      renders a camel cased word into words seperated by underscores
      also translates "::" back into "/" (camelize does the opposite)

    String.humanize(lowFirstLetter) == String
      renders a lower case and underscored word into human readable form
      defaults to making the first letter capitalized unless you pass true

    String.capitalize() == String
      renders all characters to lower case and then makes the first upper

    String.dasherize() == String
      renders all underbars and spaces as dashes

    String.titleize() == String
      renders words into title casing (as for book titles)

    String.demodulize() == String
      renders class names that are prepended by modules into just the class

    String.tableize() == String
      renders camel cased singular words into their underscored plural form

    String.classify() == String
      renders an underscored plural word into its camel cased singular form

    String.foreign_key(dropIdUbar) == String
      renders a class name (camel cased singular noun) into a foreign key
      defaults to seperating the class from the id with an underbar unless
      you pass true

    String.ordinalize() == String
      renders all numbers found in the string into their sequence like "22nd"
*/

/*
  This sets up a container for some constants in its own namespace
  We use the window (if available) to enable dynamic loading of this script
  Window won't necessarily exist for non-browsers.
*/
if (window && !window.InflectionJS)
{
    window.InflectionJS = null;
}

/*
  This sets up some constants for later use
  This should use the window namespace variable if available
*/
InflectionJS =
{
    /*
      This is a list of nouns that use the same form for both singular and plural.
      This list should remain entirely in lower case to correctly match Strings.
    */
    uncountable_words: [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    /*
      These rules translate from the singular form of a noun to its plural form.
    */
    plural_rules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    /*
      These rules translate from the plural form of a noun to its singular form.
    */
    singular_rules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    /*
      This is a list of words that should not be capitalized for title case
    */
    non_titlecased_words: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    /*
      These are regular expressions used for converting between String formats
    */
    id_suffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    space_or_underbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbar_prefix: new RegExp('^_'),
    
    /*
      This is a helper method that applies rules based replacement to a String
      Signature:
        InflectionJS.apply_rules(str, rules, skip, override) == String
      Arguments:
        str - String - String to modify and return based on the passed rules
        rules - Array: [RegExp, String] - Regexp to match paired with String to use for replacement
        skip - Array: [String] - Strings to skip if they match
        override - String (optional) - String to return as though this method succeeded (used to conform to APIs)
      Returns:
        String - passed String modified by passed rules
      Examples:
        InflectionJS.apply_rules("cows", InflectionJs.singular_rules) === 'cow'
    */
    apply_rules: function(str, rules, skip, override)
    {
        if (override)
        {
            str = override;
        }
        else
        {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore)
            {
                for (var x = 0; x < rules.length; x++)
                {
                    if (str.match(rules[x][0]))
                    {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    }
};

/*
  This lets us detect if an Array contains a given element
  Signature:
    Array.indexOf(item, fromIndex, compareFunc) == Integer
  Arguments:
    item - Object - object to locate in the Array
    fromIndex - Integer (optional) - starts checking from this position in the Array
    compareFunc - Function (optional) - function used to compare Array item vs passed item
  Returns:
    Integer - index position in the Array of the passed item
  Examples:
    ['hi','there'].indexOf("guys") === -1
    ['hi','there'].indexOf("hi") === 0
*/
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(item, fromIndex, compareFunc)
    {
        if (!fromIndex)
        {
            fromIndex = -1;
        }
        var index = -1;
        for (var i = fromIndex; i < this.length; i++)
        {
            if (this[i] === item || compareFunc && compareFunc(this[i], item))
            {
                index = i;
                break;
            }
        }
        return index;
    };
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._uncountable_words)
{
    String.prototype._uncountable_words = InflectionJS.uncountable_words;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._plural_rules)
{
    String.prototype._plural_rules = InflectionJS.plural_rules;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._singular_rules)
{
    String.prototype._singular_rules = InflectionJS.singular_rules;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._non_titlecased_words)
{
    String.prototype._non_titlecased_words = InflectionJS.non_titlecased_words;
}

/*
  This function adds plurilization support to every String object
    Signature:
      String.pluralize(plural) == String
    Arguments:
      plural - String (optional) - overrides normal output with said String
    Returns:
      String - singular English language nouns are returned in plural form
    Examples:
      "person".pluralize() == "people"
      "octopus".pluralize() == "octopi"
      "Hat".pluralize() == "Hats"
      "person".pluralize("guys") == "guys"
*/
if (!String.prototype.pluralize)
{
    String.prototype.pluralize = function(plural)
    {
        return InflectionJS.apply_rules(
            this,
            this._plural_rules,
            this._uncountable_words,
            plural
        );
    };
}

/*
  This function adds singularization support to every String object
    Signature:
      String.singularize(singular) == String
    Arguments:
      singular - String (optional) - overrides normal output with said String
    Returns:
      String - plural English language nouns are returned in singular form
    Examples:
      "people".singularize() == "person"
      "octopi".singularize() == "octopus"
      "Hats".singularize() == "Hat"
      "guys".singularize("person") == "person"
*/
if (!String.prototype.singularize)
{
    String.prototype.singularize = function(singular)
    {
        return InflectionJS.apply_rules(
            this,
            this._singular_rules,
            this._uncountable_words,
            singular
        );
    };
}

/*
  This function adds camelization support to every String object
    Signature:
      String.camelize(lowFirstLetter) == String
    Arguments:
      lowFirstLetter - boolean (optional) - default is to capitalize the first
        letter of the results... passing true will lowercase it
    Returns:
      String - lower case underscored words will be returned in camel case
        additionally '/' is translated to '::'
    Examples:
      "message_properties".camelize() == "MessageProperties"
      "message_properties".camelize(true) == "messageProperties"
*/
if (!String.prototype.camelize)
{
     String.prototype.camelize = function(lowFirstLetter)
     {
        var str = this.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');
        return str;
    };
}

/*
  This function adds underscore support to every String object
    Signature:
      String.underscore() == String
    Arguments:
      N/A
    Returns:
      String - camel cased words are returned as lower cased and underscored
        additionally '::' is translated to '/'
    Examples:
      "MessageProperties".camelize() == "message_properties"
      "messageProperties".underscore() == "message_properties"
*/
if (!String.prototype.underscore)
{
     String.prototype.underscore = function()
     {
        var str = this;
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(InflectionJS.uppercase, '_$1');
            str_path[i] = str_path[i].replace(InflectionJS.underbar_prefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    };
}

/*
  This function adds humanize support to every String object
    Signature:
      String.humanize(lowFirstLetter) == String
    Arguments:
      lowFirstLetter - boolean (optional) - default is to capitalize the first
        letter of the results... passing true will lowercase it
    Returns:
      String - lower case underscored words will be returned in humanized form
    Examples:
      "message_properties".humanize() == "Message properties"
      "message_properties".humanize(true) == "message properties"
*/
if (!String.prototype.humanize)
{
    String.prototype.humanize = function(lowFirstLetter)
    {
        var str = this.toLowerCase();
        str = str.replace(InflectionJS.id_suffix, '');
        str = str.replace(InflectionJS.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = str.capitalize();
        }
        return str;
    };
}

/*
  This function adds capitalization support to every String object
    Signature:
      String.capitalize() == String
    Arguments:
      N/A
    Returns:
      String - all characters will be lower case and the first will be upper
    Examples:
      "message_properties".capitalize() == "Message_properties"
      "message properties".capitalize() == "Message properties"
*/
if (!String.prototype.capitalize)
{
    String.prototype.capitalize = function()
    {
        var str = this.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    };
}

/*
  This function adds dasherization support to every String object
    Signature:
      String.dasherize() == String
    Arguments:
      N/A
    Returns:
      String - replaces all spaces or underbars with dashes
    Examples:
      "message_properties".capitalize() == "message-properties"
      "Message Properties".capitalize() == "Message-Properties"
*/
if (!String.prototype.dasherize)
{
    String.prototype.dasherize = function()
    {
        var str = this;
        str = str.replace(InflectionJS.space_or_underbar, '-');
        return str;
    };
}

/*
  This function adds titleize support to every String object
    Signature:
      String.titleize() == String
    Arguments:
      N/A
    Returns:
      String - capitalizes words as you would for a book title
    Examples:
      "message_properties".titleize() == "Message Properties"
      "message properties to keep".titleize() == "Message Properties to Keep"
*/
if (!String.prototype.titleize)
{
    String.prototype.titleize = function()
    {
        var str = this.toLowerCase();
        str = str.replace(InflectionJS.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this._non_titlecased_words.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = d[i].capitalize();
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    };
}

/*
  This function adds demodulize support to every String object
    Signature:
      String.demodulize() == String
    Arguments:
      N/A
    Returns:
      String - removes module names leaving only class names (Ruby style)
    Examples:
      "Message::Bus::Properties".demodulize() == "Properties"
*/
if (!String.prototype.demodulize)
{
    String.prototype.demodulize = function()
    {
        var str = this;
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    };
}

/*
  This function adds tableize support to every String object
    Signature:
      String.tableize() == String
    Arguments:
      N/A
    Returns:
      String - renders camel cased words into their underscored plural form
    Examples:
      "MessageBusProperty".tableize() == "message_bus_properties"
*/
if (!String.prototype.tableize)
{
    String.prototype.tableize = function()
    {
        var str = this;
        str = str.underscore().pluralize();
        return str;
    };
}

/*
  This function adds classification support to every String object
    Signature:
      String.classify() == String
    Arguments:
      N/A
    Returns:
      String - underscored plural nouns become the camel cased singular form
    Examples:
      "message_bus_properties".classify() == "MessageBusProperty"
*/
if (!String.prototype.classify)
{
    String.prototype.classify = function()
    {
        var str = this;
        str = str.camelize().singularize();
        return str;
    };
}

/*
  This function adds foreign key support to every String object
    Signature:
      String.foreign_key(dropIdUbar) == String
    Arguments:
      dropIdUbar - boolean (optional) - default is to seperate id with an
        underbar at the end of the class name, you can pass true to skip it
    Returns:
      String - camel cased singular class names become underscored with id
    Examples:
      "MessageBusProperty".foreign_key() == "message_bus_property_id"
      "MessageBusProperty".foreign_key(true) == "message_bus_propertyid"
*/
if (!String.prototype.foreign_key)
{
    String.prototype.foreign_key = function(dropIdUbar)
    {
        var str = this;
        str = str.demodulize().underscore() + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    };
}

/*
  This function adds ordinalize support to every String object
    Signature:
      String.ordinalize() == String
    Arguments:
      N/A
    Returns:
      String - renders all found numbers their sequence like "22nd"
    Examples:
      "the 1 pitch".ordinalize() == "the 1st pitch"
*/
if (!String.prototype.ordinalize)
{
    String.prototype.ordinalize = function()
    {
        var str = this;
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    };
}
// Underscore.js 1.1.6
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var p=this,C=p._,m={},i=Array.prototype,n=Object.prototype,f=i.slice,D=i.unshift,E=n.toString,l=n.hasOwnProperty,s=i.forEach,t=i.map,u=i.reduce,v=i.reduceRight,w=i.filter,x=i.every,y=i.some,o=i.indexOf,z=i.lastIndexOf;n=Array.isArray;var F=Object.keys,q=Function.prototype.bind,b=function(a){return new j(a)};typeof module!=="undefined"&&module.exports?(module.exports=b,b._=b):p._=b;b.VERSION="1.1.6";var h=b.each=b.forEach=function(a,c,d){if(a!=null)if(s&&a.forEach===s)a.forEach(c,d);else if(b.isNumber(a.length))for(var e=
0,k=a.length;e<k;e++){if(c.call(d,a[e],e,a)===m)break}else for(e in a)if(l.call(a,e)&&c.call(d,a[e],e,a)===m)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(c,b);h(a,function(a,g,G){e[e.length]=c.call(b,a,g,G)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var k=d!==void 0;a==null&&(a=[]);if(u&&a.reduce===u)return e&&(c=b.bind(c,e)),k?a.reduce(c,d):a.reduce(c);h(a,function(a,b,f){!k&&b===0?(d=a,k=!0):d=c.call(e,d,a,b,f)});if(!k)throw new TypeError("Reduce of empty array with no initial value");
return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(v&&a.reduceRight===v)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;A(a,function(a,g,f){if(c.call(b,a,g,f))return e=a,!0});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(c,b);h(a,function(a,g,f){c.call(b,a,g,f)&&(e[e.length]=a)});return e};
b.reject=function(a,c,b){var e=[];if(a==null)return e;h(a,function(a,g,f){c.call(b,a,g,f)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=!0;if(a==null)return e;if(x&&a.every===x)return a.every(c,b);h(a,function(a,g,f){if(!(e=e&&c.call(b,a,g,f)))return m});return e};var A=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=!1;if(a==null)return e;if(y&&a.some===y)return a.some(c,d);h(a,function(a,b,f){if(e=c.call(d,a,b,f))return m});return e};b.include=b.contains=function(a,c){var b=
!1;if(a==null)return b;if(o&&a.indexOf===o)return a.indexOf(c)!=-1;A(a,function(a){if(b=a===c)return!0});return b};b.invoke=function(a,c){var d=f.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,
c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};h(a,function(a,b,f){b=c?c.call(d,a,b,f):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,f){return{value:a,criteria:c.call(d,a,b,f)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=
function(a){if(!a)return[];if(a.toArray)return a.toArray();if(b.isArray(a))return a;if(b.isArguments(a))return f.call(a);return b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?f.call(a,0,b):a[0]};b.rest=b.tail=function(a,b,d){return f.call(a,b==null||d?1:b)};b.last=function(a){return a[a.length-1]};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a){return b.reduce(a,function(a,d){if(b.isArray(d))return a.concat(b.flatten(d));
a[a.length]=d;return a},[])};b.without=function(a){var c=f.call(arguments,1);return b.filter(a,function(a){return!b.include(c,a)})};b.uniq=b.unique=function(a,c){return b.reduce(a,function(a,e,f){if(0==f||(c===!0?b.last(a)!=e:!b.include(a,e)))a[a.length]=e;return a},[])};b.intersect=function(a){var c=f.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.zip=function(){for(var a=f.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),
e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(o&&a.indexOf===o)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);d=arguments[2]||1;for(var e=Math.max(Math.ceil((b-a)/
d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};b.bind=function(a,b){if(a.bind===q&&q)return q.apply(a,f.call(arguments,1));var d=f.call(arguments,2);return function(){return a.apply(b,d.concat(f.call(arguments)))}};b.bindAll=function(a){var c=f.call(arguments,1);c.length==0&&(c=b.functions(a));h(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return l.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=f.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(f.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};b.throttle=function(a,b){return B(a,b,!1)};b.debounce=function(a,b){return B(a,b,!0)};b.once=function(a){var b=!1,d;return function(){if(b)return d;b=!0;return d=a.apply(this,arguments)}};
b.wrap=function(a,b){return function(){var d=[a].concat(f.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=f.call(arguments);return function(){for(var b=f.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments)}};b.keys=F||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)l.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,
b.identity)};b.functions=b.methods=function(a){return b.filter(b.keys(a),function(c){return b.isFunction(a[c])}).sort()};b.extend=function(a){h(f.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){h(f.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,c){if(a===c)return!0;var d=typeof a;if(d!=
typeof c)return!1;if(a==c)return!0;if(!a&&c||a&&!c)return!1;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual)return a.isEqual(c);if(b.isDate(a)&&b.isDate(c))return a.getTime()===c.getTime();if(b.isNaN(a)&&b.isNaN(c))return!1;if(b.isRegExp(a)&&b.isRegExp(c))return a.source===c.source&&a.global===c.global&&a.ignoreCase===c.ignoreCase&&a.multiline===c.multiline;if(d!=="object")return!1;if(a.length&&a.length!==c.length)return!1;d=b.keys(a);var e=b.keys(c);if(d.length!=e.length)return!1;
for(var f in a)if(!(f in c)||!b.isEqual(a[f],c[f]))return!1;return!0};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(l.call(a,c))return!1;return!0};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=n||function(a){return E.call(a)==="[object Array]"};b.isArguments=function(a){return!(!a||!l.call(a,"callee"))};b.isFunction=function(a){return!(!a||!a.constructor||!a.call||!a.apply)};b.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};
b.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===!0||a===!1};b.isDate=function(a){return!(!a||!a.getTimezoneOffset||!a.setUTCFullYear)};b.isRegExp=function(a){return!(!a||!a.test||!a.exec||!(a.ignoreCase||a.ignoreCase===!1))};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.noConflict=function(){p._=C;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=
0;e<a;e++)b.call(d,e)};b.mixin=function(a){h(b.functions(a),function(c){H(c,b[c]=a[c])})};var I=0;b.uniqueId=function(a){var b=I++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||
null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return c?d(c):d};var j=function(a){this._wrapped=a};b.prototype=j.prototype;var r=function(a,c){return c?b(a).chain():a},H=function(a,c){j.prototype[a]=function(){var a=f.call(arguments);D.call(a,this._wrapped);return r(c.apply(b,a),this._chain)}};b.mixin(b);h(["pop","push","reverse","shift","sort",
"splice","unshift"],function(a){var b=i[a];j.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});h(["concat","join","slice"],function(a){var b=i[a];j.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});j.prototype.chain=function(){this._chain=!0;return this};j.prototype.value=function(){return this._wrapped}})();
 var Assessment;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
$.assessment = null;
$.couchDBDatabasePath = '/egra/';
Assessment = (function() {
  function Assessment(name) {
    this.name = name;
    this.urlPath = "Assessment." + this.name;
  }
  Assessment.prototype.changeName = function(newName) {
    var page, _i, _len, _ref, _results;
    this.name = newName;
    this.urlPath = "Assessment." + this.name;
    this.urlPathsForPages = [];
    _ref = this.pages;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      page.urlPath = this.urlPath + "." + page.pageId;
      _results.push(this.urlPathsForPages.push(page.urlPath));
    }
    return _results;
  };
  Assessment.prototype.setPages = function(pages) {
    var index, page, _len, _ref, _results;
    this.pages = pages;
    this.urlPathsForPages = [];
    _ref = this.pages;
    _results = [];
    for (index = 0, _len = _ref.length; index < _len; index++) {
      page = _ref[index];
      page.assessment = this;
      page.pageNumber = index;
      if (index !== 0) {
        page.previousPage = this.pages[index - 1].pageId;
      }
      if (this.pages.length !== index + 1) {
        page.nextPage = this.pages[index + 1].pageId;
      }
      page.urlScheme = this.urlScheme;
      page.urlPath = this.urlPath + "." + page.pageId;
      _results.push(this.urlPathsForPages.push(page.urlPath));
    }
    return _results;
  };
  Assessment.prototype.getPage = function(pageId) {
    var page, _i, _len, _ref;
    _ref = this.pages;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      if (page.pageId === pageId) {
        return page;
      }
    }
  };
  Assessment.prototype.insertPage = function(page, pageNumber) {
    this.pages.splice(pageNumber, 0, page);
    return this.setPages(this.pages);
  };
  Assessment.prototype.url = function() {
    return "" + this.urlScheme + "://" + this.urlPath;
  };
  Assessment.prototype.loginPage = function() {
    return $.assessment.pages[0];
  };
  Assessment.prototype.currentUser = function() {
    return this.loginPage().results().username;
  };
  Assessment.prototype.currentPassword = function() {
    return this.loginPage().results().password;
  };
  Assessment.prototype.hasUserAuthenticated = function() {
    var loginResults;
    loginResults = this.loginPage().results();
    return loginResults.username !== "" && loginResults.password !== "";
  };
  Assessment.prototype.results = function() {
    var page, results, _i, _len, _ref;
    results = {};
    _ref = this.pages;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      results[page.pageId] = page.results();
    }
    return results;
  };
  Assessment.prototype.saveResults = function(callback) {
    var results, url;
    results = this.results();
    url = $.couchDBDatabasePath;
    return $.ajax({
      url: url,
      async: true,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(results),
      error: function() {
        throw "Could not PUT to " + url;
      },
      complete: function() {
        if (callback != null) {
          return callback(results);
        }
      }
    });
  };
  Assessment.prototype.validate = function() {
    var page, pageResult, validationErrors, _i, _len, _ref;
    validationErrors = "";
    _ref = this.pages;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      pageResult = page.validate();
      if (pageResult !== true) {
        validationErrors += "'" + (page.name()) + "' page invalid: " + pageResult + " <br/>";
      }
    }
    if (validationErrors !== "") {
      return validationErrors;
    } else {
      return true;
    }
  };
  Assessment.prototype.toJSON = function() {
    return JSON.stringify({
      name: this.name,
      urlPathsForPages: this.urlPathsForPages
    });
  };
  Assessment.prototype.save = function() {
    switch (this.urlScheme) {
      case "localstorage":
        return this.saveToLocalStorage();
      default:
        throw "URL type not yet implemented: " + this.urlScheme;
    }
  };
  Assessment.prototype.saveToLocalStorage = function() {
    var page, _i, _len, _ref, _results;
    this.urlScheme = "localstorage";
    localStorage[this.urlPath] = this.toJSON();
    _ref = this.pages;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      _results.push(page.saveToLocalStorage());
    }
    return _results;
  };
  Assessment.prototype.saveToCouchDB = function(callback) {
    this.urlScheme = "http";
    if (this.urlPath[0] !== "/") {
      this.urlPath = $.couchDBDatabasePath + this.urlPath;
    }
    $.ajax({
      url: this.urlPath,
      async: true,
      type: 'PUT',
      dataType: 'json',
      data: this.toJSON(),
      success: __bind(function(result) {
        var page, _i, _len, _ref;
        this.revision = result.rev;
        _ref = this.pages;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          page = _ref[_i];
          page.saveToCouchDB();
        }
        return this.onReady(function() {
          return callback();
        });
      }, this),
      error: function() {
        throw "Could not PUT to " + this.urlPath;
      }
    });
    return this;
  };
  Assessment.prototype["delete"] = function() {
    if (this.urlScheme === "localstorage") {
      return this.deleteFromLocalStorage();
    }
  };
  Assessment.prototype.deleteFromLocalStorage = function() {
    var page, _i, _len, _ref;
    _ref = this.pages;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      page = _ref[_i];
      page.deleteFromLocalStorage();
    }
    return localStorage.removeItem(this.urlPath);
  };
  Assessment.prototype.deleteFromCouchDB = function() {
    var page, url, _i, _len, _ref;
    url = $.couchDBDatabasePath + this.urlPath + ("?rev=" + this.revision);
    if (this.pages) {
      _ref = this.pages;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        page.deleteFromCouchDB();
      }
    }
    return $.ajax({
      url: url,
      async: true,
      type: 'DELETE',
      error: function() {
        throw "Error deleting " + url;
      }
    });
  };
  Assessment.prototype.onReady = function(callback) {
    var checkIfLoading, maxTries, timesTried;
    maxTries = 10;
    timesTried = 0;
    checkIfLoading = __bind(function() {
      var page, _i, _len, _ref;
      timesTried++;
      if (this.loading) {
        if (timesTried >= maxTries) {
          throw "Timeout error while waiting for assessment: " + this.name;
        }
        setTimeout(checkIfLoading, 1000);
        return;
      }
      _ref = this.pages;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        if (page.loading) {
          if (timesTried >= maxTries) {
            throw "Timeout error while waiting for page: " + page.pageId;
          }
          setTimeout(checkIfLoading, 1000);
          return;
        }
      }
      return callback();
    }, this);
    return checkIfLoading();
  };
  Assessment.prototype.render = function(callback) {
    return this.onReady(__bind(function() {
      var i, page, result;
      $.assessment = this;
      $('div').live('pagebeforeshow', __bind(function(event, ui) {
        var page, _i, _len, _ref;
        _ref = this.pages;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          page = _ref[_i];
          if (page.pageId === $(event.currentTarget).attr('id')) {
            this.currentPage = page;
            return;
          }
        }
      }, this));
      result = (function() {
        var _len, _ref, _results;
        _ref = this.pages;
        _results = [];
        for (i = 0, _len = _ref.length; i < _len; i++) {
          page = _ref[i];
          _results.push(page.render());
        }
        return _results;
      }).call(this);
      result = result.join("");
      result += "        <div data-role='dialog' id='_infoPage'>          <div data-role='header'>	            <h1>Information</h1>          </div>          <div data-role='content'>	          </div><!-- /content -->        </div>      ";
      if (callback != null) {
        callback(result);
      }
      return result;
    }, this));
  };
  Assessment.prototype.flash = function() {
    $('.ui-content').toggleClass("red");
    return setTimeout("$('.ui-content').toggleClass('red')", 2000);
  };
  Assessment.prototype.toPaper = function(callback) {
    return this.onReady(__bind(function() {
      var i, page, result;
      result = (function() {
        var _len, _ref, _results;
        _ref = this.pages;
        _results = [];
        for (i = 0, _len = _ref.length; i < _len; i++) {
          page = _ref[i];
          _results.push(("<h1>" + (page.name()) + "</h1>") + page.toPaper());
        }
        return _results;
      }).call(this);
      result = result.join("<div class='page-break'><hr/></div>");
      if (callback != null) {
        callback(result);
      }
      return result;
    }, this));
  };
  Assessment.prototype.handleURLParameters = function() {
    var a, d, e, param, q, r, value, _ref;
    if (this.urlParams != null) {
      return;
    }
    this.urlParams = {};
    a = /\+/g;
    r = /([^&=]+)=?([^&]*)/g;
    d = function(s) {
      return decodeURIComponent(s.replace(a, " "));
    };
    q = window.location.search.substring(1);
    while ((e = r.exec(q))) {
      this.urlParams[d(e[1])] = d(e[2]);
    }
    _ref = this.urlParams;
    for (param in _ref) {
      value = _ref[param];
      $("input#" + param).val(value);
    }
    if (this.urlParams.newAssessment) {
      if (!($.assessment.currentPage.pageId === "DateTime" || $.assessment.currentPage.pageId === "Login")) {
        if (!($.assessment.currentPage.pageId === "DateTime" || $.assessment.currentPage.pageId === "Login")) {
          $.mobile.changePage("DateTime");
        }
        return document.location = document.location.href;
      }
    }
  };
  return Assessment;
})();
Assessment.load = function(url, callback) {
  var assessment, urlPath, urlScheme;
  try {
    urlScheme = url.substring(0, url.indexOf("://"));
    urlPath = url.substring(url.indexOf("://") + 3);
  } catch (error) {
    throw "Invalid url: " + url;
  }
  switch (urlScheme) {
    case "localstorage":
      assessment = Assessment.loadFromLocalStorage(urlPath);
      if (callback != null) {
        callback(assessment);
      }
      break;
    case "http":
      Assessment.loadFromHTTP(urlPath, function(result) {
        if (callback != null) {
          return callback(result);
        }
      });
      break;
    default:
      throw "URL type not yet implemented: " + urlScheme;
  }
  return assessment;
};
Assessment.loadFromLocalStorage = function(urlPath) {
  var assessment, assessmentObject, pages, _i, _len, _ref;
  assessmentObject = JSON.parse(localStorage[urlPath]);
  if (assessmentObject == null) {
    throw "Could not load localStorage['" + urlPath + "'], " + error;
  }
  assessment = new Assessment(assessmentObject.name);
  assessment.urlScheme = "localstorage";
  pages = [];
  _ref = assessmentObject.urlPathsForPages;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    urlPath = _ref[_i];
    pages.push(JQueryMobilePage.loadFromLocalStorage(urlPath));
  }
  assessment.setPages(pages);
  return assessment;
};
Assessment.loadFromHTTP = function(url, callback) {
  var assessment, baseUrl;
  assessment = null;
  baseUrl = url.substring(0, url.lastIndexOf("/") + 1);
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function(result) {
      var pages, urlPath, _i, _len, _ref;
      try {
        assessment = new Assessment(result.name);
        pages = [];
        _ref = result.urlPathsForPages;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          urlPath = _ref[_i];
          url = baseUrl + urlPath;
          JQueryMobilePage.loadFromHTTP({
            url: url,
            async: false
          }, __bind(function(result) {
            result.assessment = assessment;
            return pages.push(result);
          }, this));
        }
        assessment.setPages(pages);
        if (callback != null) {
          return callback(assessment);
        }
      } catch (error) {
        return console.log("Error in Assessment.loadFromHTTP:" + error);
      }
    },
    error: function() {
      throw "Failed to load: " + url;
    }
  });
  return assessment;
};var AssessmentPage, ConsentPage, DateTimePage, Dictation, Interview, JQueryLogin, JQueryMobilePage, PhonemePage, ResultsPage, SchoolPage, StudentInformationPage, TextPage, ToggleGridWithTimer, UntimedSubtest, UntimedSubtestLinked, footerMessage, hideListUntilSearchInterval;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
footerMessage = "Good effort, let's go onto the next page";
JQueryMobilePage = (function() {
  function JQueryMobilePage(options) {
    this.pageId = (options != null ? options.pageId : void 0) || "";
    this.pageType = (options != null ? options.pageType : void 0) || this.constructor.toString().match(/function +(.*?)\(/)[1];
  }
  JQueryMobilePage.prototype.render = function() {
    return Mustache.to_html(this._template(), this);
  };
  JQueryMobilePage.prototype.propertiesForSerialization = function() {
    return ["pageId", "pageType", "urlPath", "urlScheme"];
  };
  JQueryMobilePage.prototype.name = function() {
    return this.pageId.underscore().titleize();
  };
  JQueryMobilePage.prototype.toJSON = function() {
    var object, property, _i, _len, _ref;
    object = {};
    _ref = this.propertiesForSerialization();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      object[property] = this[property];
    }
    return object;
  };
  JQueryMobilePage.prototype.load = function(data) {
    var property, _i, _len, _ref, _results;
    _ref = this.propertiesForSerialization();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      _results.push(this[property] = data[property]);
    }
    return _results;
  };
  JQueryMobilePage.prototype.save = function() {
    switch (this.urlScheme) {
      case "localstorage":
        return this.saveToLocalStorage();
      default:
        throw "URL type not yet implemented: " + this.urlScheme;
    }
  };
  JQueryMobilePage.prototype.saveToLocalStorage = function() {
    if (this.urlPath == null) {
      throw "Can't save page '" + this.pageId + "' to localStorage: No urlPath!";
    }
    return localStorage[this.urlPath] = JSON.stringify(this);
  };
  JQueryMobilePage.prototype.saveToCouchDB = function(callback) {
    var url;
    this.loading = true;
    this.urlScheme = "http";
    this.urlPath = this.urlPath.substring(this.urlPath.indexOf("/") + 1);
    url = $.couchDBDatabasePath + this.urlPath;
    return $.ajax({
      url: url,
      async: true,
      type: 'PUT',
      dataType: 'json',
      data: JSON.stringify(this),
      success: __bind(function(result) {
        return this.revision = result.rev;
      }, this),
      error: function() {
        throw "Could not PUT to " + url;
      },
      complete: __bind(function() {
        this.loading = false;
        if (callback != null) {
          return callback();
        }
      }, this)
    });
  };
  JQueryMobilePage.prototype.deleteFromLocalStorage = function() {
    return localStorage.removeItem(this.urlPath);
  };
  JQueryMobilePage.prototype.deleteFromCouchDB = function() {
    var url;
    url = this.urlPath + ("?rev=" + this.revision);
    return $.ajax({
      url: url,
      type: 'DELETE',
      complete: function() {
        if (typeof callback !== "undefined" && callback !== null) {
          return callback();
        }
      },
      error: function() {
        throw "Error deleting " + url;
      }
    });
  };
  JQueryMobilePage.prototype._template = function() {
    return "<div data-role='page' id='{{{pageId}}'>  <div data-role='header'>    <a href='\#{{previousPage}}'>Back</a>    <h1>{{name}}</h1>  </div><!-- /header -->  <div data-role='content'>	    {{{controls}}}    {{{content}}}  </div><!-- /content -->  <div data-role='footer'>    {{footerMessage}}    <button href='\#{{nextPage}}'>Next</button>  </div><!-- /footer --></div><!-- /page -->";
  };
  JQueryMobilePage.prototype.toPaper = function() {
    return this.content;
  };
  return JQueryMobilePage;
})();
JQueryMobilePage.deserialize = function(pageObject) {
  var result;
  switch (pageObject.pageType) {
    case "ToggleGridWithTimer":
      return ToggleGridWithTimer.deserialize(pageObject);
    case "SchoolPage":
      return SchoolPage.deserialize(pageObject);
    case "StudentInformationPage":
      return StudentInformationPage.deserialize(pageObject);
    case "UntimedSubtest":
      return UntimedSubtest.deserialize(pageObject);
    case "UntimedSubtestLinked":
      return UntimedSubtestLinked.deserialize(pageObject);
    case "PhonemePage":
      return PhonemePage.deserialize(pageObject);
    default:
      result = new window[pageObject.pageType](pageObject);
      result.load(pageObject);
      return result;
  }
};
JQueryMobilePage.loadFromLocalStorage = function(urlPath) {
  var jqueryMobilePage;
  jqueryMobilePage = JQueryMobilePage.deserialize(JSON.parse(localStorage[urlPath]));
  jqueryMobilePage.urlScheme = "localstorage";
  return jqueryMobilePage;
};
JQueryMobilePage.loadFromHTTP = function(options, callback) {
  var urlPath;
  if (options.url == null) {
    throw "Must pass 'url' option to loadFromHTTP, received: " + options;
  }
  if (options.url.match(/http/)) {
    urlPath = options.url.substring(options.url.lastIndexOf("://") + 3);
  } else {
    urlPath = options.url;
  }
  $.extend(options, {
    type: 'GET',
    dataType: 'json',
    success: function(result) {
      var jqueryMobilePage;
      try {
        jqueryMobilePage = JQueryMobilePage.deserialize(result);
        jqueryMobilePage.urlPath = urlPath;
        jqueryMobilePage.urlScheme = "http";
        jqueryMobilePage.revision = result._rev;
        if (callback != null) {
          return callback(jqueryMobilePage);
        }
      } catch (error) {
        console.log("Error in JQueryMobilePage.loadFromHTTP: " + error);
        return console.log(result);
      }
    },
    error: function() {
      throw "Failed to load: " + urlPath;
    }
  });
  return $.ajax(options);
};
JQueryMobilePage.loadFromCouchDB = function(urlPath, callback) {
  return JQueryMobilePage.loadFromHTTP({
    url: $.couchDBDatabasePath + urlPath
  }, callback);
};
AssessmentPage = (function() {
  __extends(AssessmentPage, JQueryMobilePage);
  function AssessmentPage() {
    AssessmentPage.__super__.constructor.apply(this, arguments);
  }
  AssessmentPage.prototype.addTimer = function() {
    this.timer = new Timer();
    this.timer.setPage(this);
    return this.controls = "      <div class='controls' style='width: 100px;position:fixed;top:100px;right:5px;z-index:10'>        <div class='timer'>          " + (this.timer.render()) + "        </div>        <br/>        <br/>        <div class='message'>        </div>      </div>";
  };
  AssessmentPage.prototype.validate = function() {
    var inputElement, _i, _len, _ref;
    _ref = $("div#" + this.pageId + " form input");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      inputElement = _ref[_i];
      if ($(inputElement).val() === "") {
        return "'" + ($("label[for=" + inputElement.id + "]").html()) + "' is empty";
      }
    }
    return true;
  };
  AssessmentPage.prototype.results = function() {
    var objectData;
    objectData = {};
    $.each($("div#" + this.pageId + " form").serializeArray(), function() {
      var value;
      if (this.value != null) {
        value = this.value;
      } else {
        value = '';
      }
      if (objectData[this.name] != null) {
        if (!objectData[this.name].push) {
          objectData[this.name] = [objectData[this.name]];
        }
        return objectData[this.name].push(value);
      } else {
        return objectData[this.name] = value;
      }
    });
    return objectData;
  };
  return AssessmentPage;
})();
AssessmentPage.validateCurrentPageUpdateNextButton = function() {
  var passedValidation;
  if ($.assessment == null) {
    return;
  }
  passedValidation = $.assessment.currentPage.validate() === true;
  $('div.ui-footer button').toggleClass("passedValidation", passedValidation);
  return $('div.ui-footer div.ui-btn').toggleClass("ui-btn-up-b", passedValidation).toggleClass("ui-btn-up-c", !passedValidation);
};
setInterval(AssessmentPage.validateCurrentPageUpdateNextButton, 500);
$('div.ui-footer button').live('click', function(event, ui) {
  var button, validationResult;
  validationResult = $.assessment.currentPage.validate();
  if (validationResult === true) {
    button = $(event.currentTarget);
    return $.mobile.changePage(button.attr("href"));
  } else {
    $("#_infoPage div[data-role='content']").html("Please fix the following before proceeding:<br/>" + validationResult);
    return $.mobile.changePage("#_infoPage");
  }
});
JQueryLogin = (function() {
  __extends(JQueryLogin, AssessmentPage);
  function JQueryLogin() {
    JQueryLogin.__super__.constructor.call(this);
    this.randomIdForSubject = ("" + Math.random()).substring(2, 8);
    this.randomIdForSubject = this.randomIdForSubject.substr(0, 3) + "-" + this.randomIdForSubject.substr(3);
    this.content = "<form>  <div data-role='fieldcontain'>    <label for='username'>Username:</label>    <input type='text' name='username' id='username' value='' />    <label for='password'>Password:</label>    <input type='password' name='password' id='password' value='' />  </div></form>";
    $("div").live("pageshow", function() {
      $.assessment.handleURLParameters();
      if (!($.assessment.hasUserAuthenticated() || ($.assessment.currentPage.pageId === "Login"))) {
        return $.mobile.changePage("#Login");
      }
    });
  }
  JQueryLogin.prototype.user = function() {
    return this.results().username;
  };
  JQueryLogin.prototype.password = function() {
    return this.results().password;
  };
  JQueryLogin.prototype.results = function() {
    var results;
    results = JQueryLogin.__super__.results.call(this);
    results["randomIdForSubject"] = this.randomIdForSubject;
    return results;
  };
  return JQueryLogin;
})();
StudentInformationPage = (function() {
  __extends(StudentInformationPage, AssessmentPage);
  function StudentInformationPage() {
    StudentInformationPage.__super__.constructor.apply(this, arguments);
  }
  StudentInformationPage.prototype.propertiesForSerialization = function() {
    var properties;
    properties = StudentInformationPage.__super__.propertiesForSerialization.call(this);
    properties.push("radioButtons");
    return properties;
  };
  StudentInformationPage.prototype.validate = function() {
    if ($("#StudentInformation input:'radio':checked").length === 7) {
      return true;
    } else {
      return "All elements are required";
    }
  };
  return StudentInformationPage;
})();
StudentInformationPage.template = Handlebars.compile("  <form>    {{#radioButtons}}      <fieldset data-type='{{type}}' data-role='controlgroup'>        <legend>{{label}}</legend>        {{#options}}          <label for='{{.}}'>{{.}}</label>          <input type='radio' name='{{../name}}' value='{{.}}' id='{{.}}'></input>        {{/options}}      </fieldset>    {{/radioButtons}}  </form>");
StudentInformationPage.deserialize = function(pageObject) {
  var studentInformationPage;
  studentInformationPage = new StudentInformationPage();
  studentInformationPage.load(pageObject);
  studentInformationPage.content = StudentInformationPage.template(studentInformationPage);
  return studentInformationPage;
};
SchoolPage = (function() {
  __extends(SchoolPage, AssessmentPage);
  function SchoolPage(options) {
    SchoolPage.__super__.constructor.call(this, options);
    this.schools = options.schools;
    $("div#" + this.pageId + " li").live("mousedown", __bind(function(eventData) {
      var dataAttribute, selectedElement, _i, _len, _ref, _results;
      selectedElement = $(eventData.currentTarget);
      _ref = ["name", "province", "district", "schoolId"];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dataAttribute = _ref[_i];
        _results.push($("div#" + this.pageId + " form input#" + dataAttribute).val(selectedElement.attr("data-" + dataAttribute)));
      }
      return _results;
    }, this));
  }
  SchoolPage.prototype.propertiesForSerialization = function() {
    var properties, property, _i, _len, _ref;
    properties = SchoolPage.__super__.propertiesForSerialization.call(this);
    properties.push("schools");
    properties.push("selectNameText");
    _ref = ["name", "province", "district", "schoolId"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      property = _ref[_i];
      properties.push(property + "Text");
    }
    return properties;
  };
  SchoolPage.prototype._schoolTemplate = function() {
    var dataAttribute, inputElements, listAttributes, listElement, properties, _i, _j, _len, _len2;
    properties = ["name", "province", "district", "schoolId"];
    listAttributes = "";
    for (_i = 0, _len = properties.length; _i < _len; _i++) {
      dataAttribute = properties[_i];
      listAttributes += "data-" + dataAttribute + "='{{" + dataAttribute + "}}' ";
    }
    listElement = "<li " + listAttributes + ">{{district}} - {{province}} - {{name}}</li>";
    inputElements = "";
    for (_j = 0, _len2 = properties.length; _j < _len2; _j++) {
      dataAttribute = properties[_j];
      inputElements += "      <div data-role='fieldcontain'>        <label for='" + dataAttribute + "'>{{" + dataAttribute + "Text}}</label>        <input type='text' name='" + dataAttribute + "' id='" + dataAttribute + "'></input>      </div>      ";
    }
    return "    <div>      <h4>        {{selectSchoolText}}      </h4>    </div>    <ul style='display:none' data-filter='true' data-filter-placeholder='Search for school...' data-role='listview'>      {{#schools}}        " + listElement + "      {{/schools}}    </ul>    <br/>    <br/>    <form>      " + inputElements + "    </form>  ";
  };
  SchoolPage.prototype.validate = function() {
    var inputElement, _i, _len, _ref;
    _ref = $("div#" + this.pageId + " form div.ui-field-contain input");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      inputElement = _ref[_i];
      if ($(inputElement).val() === "") {
        return "'" + ($("label[for=" + inputElement.id + "]").html()) + "' is empty";
      }
    }
    return true;
  };
  return SchoolPage;
})();
SchoolPage.deserialize = function(pageObject) {
  var schoolPage;
  schoolPage = new SchoolPage(pageObject);
  schoolPage.load(pageObject);
  schoolPage.content = Mustache.to_html(schoolPage._schoolTemplate(), schoolPage);
  return schoolPage;
};
SchoolPage.hideListUntilSearch = function() {
  if ($("#School input[data-type='search']").val() !== "") {
    $("#School ul").show();
    return clearInterval(hideListUntilSearchInterval);
  }
};
hideListUntilSearchInterval = setInterval(SchoolPage.hideListUntilSearch, 500);
DateTimePage = (function() {
  __extends(DateTimePage, AssessmentPage);
  function DateTimePage() {
    DateTimePage.__super__.constructor.apply(this, arguments);
  }
  DateTimePage.prototype.load = function(data) {
    this.content = "<form>  <div data-role='fieldcontain'>    <label for='year'>Year:</label>    <input type='number' name='year' id='year' />  </div>  <div data-role='fieldcontain'>    <label for='month'>Month:</label>    <input type='text' name='month' id='month' />  </div>  <div data-role='fieldcontain'>    <label for='day'>Day:</label>    <input type='number' name='day' id='day' />  </div>  <div data-role='fieldcontain'>    <label for='time'>Time:</label>    <input type='text' name='time' id='time' />  </div></form>";
    DateTimePage.__super__.load.call(this, data);
    return $("div#" + this.pageId).live("pageshow", __bind(function() {
      var dateTime, minutes;
      dateTime = new Date();
      $("div#" + this.pageId + " #year").val(dateTime.getFullYear());
      $("div#" + this.pageId + " #month").val(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][dateTime.getMonth()]);
      $("div#" + this.pageId + " #day").val(dateTime.getDate());
      minutes = dateTime.getMinutes();
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      return $("div#" + this.pageId + " #time").val(dateTime.getHours() + ":" + minutes);
    }, this));
  };
  return DateTimePage;
})();
ResultsPage = (function() {
  __extends(ResultsPage, AssessmentPage);
  function ResultsPage(options) {
    ResultsPage.__super__.constructor.call(this, options);
    this.content = Handlebars.compile("      <div class='resultsMessage'>      </div>      <div data-role='collapsible' data-collapsed='true' class='results'>        <h3>Results</h3>        <pre>        </pre>      </div>      <div class='message'>        You have finished assessment <span class='randomIdForSubject'></span>. Thank the child with a small gift. Please write <span class='randomIdForSubject'></span> on the writing sample.      </div>      <div data-inline='true'>        <!-- TODO insert username/password into GET string so we don't have to retype -->        <!--        <a data-inline='true' data-role='button' rel='external' href='#DateTime?username=" + "&password=" + "'>Begin Another Assessment</a>        -->        <a data-inline='true' data-role='button' rel='external' href='" + document.location.pathname + "?newAssessment=true'>Begin Another Assessment</a>        <a data-inline='true' data-role='button' rel='external' href='" + $.couchDBDatabasePath + "/_all_docs'>Summary</a>      </div>    ");
  }
  ResultsPage.prototype.load = function(data) {
    ResultsPage.__super__.load.call(this, data);
    return $("div#" + this.pageId).live("pageshow", __bind(function() {
      var validationResult, _ref, _ref2;
      $("div#" + this.pageId + " div span[class='randomIdForSubject']").html((_ref = $.assessment.results()) != null ? (_ref2 = _ref.Login) != null ? _ref2.randomIdForSubject : void 0 : void 0);
      $("div#" + this.pageId + " div[data-role='header'] a").hide();
      $("div#" + this.pageId + " div[data-role='footer'] div").hide();
      validationResult = $.assessment.validate();
      if (validationResult === true) {
        $("div#" + this.pageId + " div[data-role='content'] div.resultsMessage").html("Results Validated");
        return $.assessment.saveResults(__bind(function(results) {
          $("div#" + this.pageId + " div[data-role='content'] div.resultsMessage").html("Results Saved");
          return $("div#" + this.pageId + " div[data-role='content'] div.results pre").html(JSON.stringify(results, null, 2));
        }, this));
      } else {
        return $("div#" + this.pageId + " div[data-role='content'] div.resultsMessage").html("Invalid results:<br/> " + validationResult + "<br/>You may start this assessment over again by selecting 'Being Another Assessment' below.");
      }
    }, this));
  };
  return ResultsPage;
})();
TextPage = (function() {
  __extends(TextPage, AssessmentPage);
  function TextPage() {
    TextPage.__super__.constructor.apply(this, arguments);
  }
  TextPage.prototype.propertiesForSerialization = function() {
    var properties;
    properties = TextPage.__super__.propertiesForSerialization.call(this);
    properties.push("content");
    return properties;
  };
  return TextPage;
})();
ConsentPage = (function() {
  __extends(ConsentPage, TextPage);
  function ConsentPage() {
    ConsentPage.__super__.constructor.apply(this, arguments);
  }
  ConsentPage.prototype.validate = function() {
    if ($("div#" + this.pageId + " input[@name='childConsents']:checked").val()) {
      return true;
    } else {
      return "You must answer the consent question";
    }
  };
  return ConsentPage;
})();
UntimedSubtest = (function() {
  __extends(UntimedSubtest, AssessmentPage);
  function UntimedSubtest(options) {
    var answer, index, question, questionName;
    this.questions = options.questions;
    UntimedSubtest.__super__.constructor.call(this, options);
    this.footerMessage = footerMessage;
    this.content = "<form>" + ((function() {
      var _len, _ref, _results;
      _ref = this.questions;
      _results = [];
      for (index = 0, _len = _ref.length; index < _len; index++) {
        question = _ref[index];
        questionName = this.pageId + "-question-" + index;
        _results.push(("      <div data-role='fieldcontain'>          <fieldset data-role='controlgroup' data-type='horizontal'>            <legend>" + question + "</legend>      ") + ((function() {
          var _i, _len2, _ref2, _results2;
          _ref2 = ["Correct", "Incorrect", "No response"];
          _results2 = [];
          for (_i = 0, _len2 = _ref2.length; _i < _len2; _i++) {
            answer = _ref2[_i];
            _results2.push("        <label for='" + questionName + "-" + answer + "'>" + answer + "</label>        <input type='radio' name='" + questionName + "' id='" + questionName + "-" + answer + "' value='" + answer + "' />        ");
          }
          return _results2;
        })()).join("") + "          </fieldset>      </div>      ");
      }
      return _results;
    }).call(this)).join("") + "</form>";
  }
  UntimedSubtest.prototype.propertiesForSerialization = function() {
    var properties;
    properties = UntimedSubtest.__super__.propertiesForSerialization.call(this);
    properties.push("questions");
    return properties;
  };
  UntimedSubtest.prototype.validate = function() {
    if (_.size(this.results()) === this.questions.length) {
      return true;
    } else {
      return "Only " + (_.size(this.results())) + " out of the " + this.questions.length + " questions were answered";
    }
  };
  return UntimedSubtest;
})();
UntimedSubtest.deserialize = function(pageObject) {
  var untimedSubtest;
  untimedSubtest = new UntimedSubtest(pageObject);
  untimedSubtest.load(pageObject);
  return untimedSubtest;
};
UntimedSubtestLinked = (function() {
  __extends(UntimedSubtestLinked, UntimedSubtest);
  function UntimedSubtestLinked(options) {
    var linkedPageName;
    this.linkedToPageId = options.linkedToPageId;
    this.questionIndices = options.questionIndices;
    this.footerMessage = footerMessage;
    UntimedSubtestLinked.__super__.constructor.call(this, options);
    linkedPageName = this.linkedToPageId.underscore().titleize();
    this.content += "<div id='" + this.pageId + "-not-enough-progress-message' style='display:hidden'>Not enough progress was made on " + linkedPageName + " to show questions from " + (this.name()) + ". Continue by pressing Next.</div>";
    $("#" + this.pageId).live('pageshow', __bind(function(eventData) {
      var attemptedOnLinkedPage, inputElement, _i, _len, _ref;
      attemptedOnLinkedPage = $.assessment.getPage(this.linkedToPageId).results().attempted;
      this.numberInputFieldsShown = 0;
      _ref = $("#" + this.pageId + " input[type='radio']");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        inputElement = _ref[_i];
        if (attemptedOnLinkedPage < this.questionIndices[inputElement.name.substr(inputElement.name.lastIndexOf("-") + 1)]) {
          $(inputElement).parents("div[data-role='fieldcontain']").hide();
        } else {
          $(inputElement).parents("div[data-role='fieldcontain']").show();
          this.numberInputFieldsShown++;
        }
      }
      return $("div#" + this.pageId + "-not-enough-progress-message").toggle(this.numberInputFieldsShown === 0);
    }, this));
  }
  UntimedSubtestLinked.prototype.propertiesForSerialization = function() {
    var properties;
    properties = UntimedSubtestLinked.__super__.propertiesForSerialization.call(this);
    properties = properties.concat(["questions", "linkedToPageId", "questionIndices"]);
    return properties;
  };
  UntimedSubtestLinked.prototype.validate = function() {
    var numberOfQuestionsAnswered, numberOfQuestionsShown;
    numberOfQuestionsShown = this.numberInputFieldsShown / 3;
    numberOfQuestionsAnswered = _.size(this.results());
    if (numberOfQuestionsAnswered === numberOfQuestionsShown) {
      return true;
    } else {
      return "Only " + numberOfQuestionsAnswered + " out of the " + numberOfQuestionsShown + " questions were answered";
    }
  };
  return UntimedSubtestLinked;
})();
UntimedSubtestLinked.deserialize = function(pageObject) {
  var untimedSubtest;
  untimedSubtest = new UntimedSubtestLinked(pageObject);
  untimedSubtest.load(pageObject);
  return untimedSubtest;
};
PhonemePage = (function() {
  __extends(PhonemePage, AssessmentPage);
  function PhonemePage(words) {
    var answer, index, item, phoneme, phonemeIndex, phonemeName, wordName;
    this.words = words;
    PhonemePage.__super__.constructor.call(this);
    this.subtestId = "phonemic-awareness";
    this.footerMessage = footerMessage;
    phonemeIndex = 1;
    this.content = ("<form id='" + this.subtestId + "'>") + ((function() {
      var _len, _ref, _results;
      _ref = this.words;
      _results = [];
      for (index = 0, _len = _ref.length; index < _len; index++) {
        item = _ref[index];
        wordName = this.subtestId + "-number-sound-" + (index + 1);
        _results.push(("      <div data-role='fieldcontain'>          <legend>" + item["word"] + " - " + item["number-of-sounds"] + "</legend>          <fieldset data-role='controlgroup' data-type='horizontal'>      ") + ((function() {
          var _i, _len2, _ref2, _results2;
          _ref2 = ["Correct", "Incorrect"];
          _results2 = [];
          for (_i = 0, _len2 = _ref2.length; _i < _len2; _i++) {
            answer = _ref2[_i];
            _results2.push("        <label for='" + wordName + "-" + answer + "'>" + answer + "</label>        <input type='radio' name='" + wordName + "' id='" + wordName + "-" + answer + "' value='" + answer + "' />        ");
          }
          return _results2;
        })()).join("") + "          </fieldset>          <fieldset data-role='controlgroup' data-type='horizontal'>      " + ((function() {
          var _i, _len2, _ref2, _results2;
          _ref2 = item["phonemes"];
          _results2 = [];
          for (_i = 0, _len2 = _ref2.length; _i < _len2; _i++) {
            phoneme = _ref2[_i];
            phonemeName = this.subtestId + "-phoneme-sound-" + phonemeIndex++;
            _results2.push("          <input type='checkbox' name='" + phonemeName + "' id='" + phonemeName + "' />          <label for='" + phonemeName + "'>" + phoneme + "</label>        ");
          }
          return _results2;
        }).call(this)).join("") + "          </fieldset>      </div>      <hr/>      ");
      }
      return _results;
    }).call(this)).join("") + "</form>";
  }
  PhonemePage.prototype.propertiesForSerialization = function() {
    var properties;
    properties = PhonemePage.__super__.propertiesForSerialization.call(this);
    properties.push("words");
    return properties;
  };
  PhonemePage.prototype.results = function() {
    var input, results, _i, _len, _ref;
    results = PhonemePage.__super__.results.call(this);
    _ref = $("form#" + this.subtestId + " input:checkbox");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      input = _ref[_i];
      results["" + input.name] = input.value !== "on";
    }
    return results;
  };
  PhonemePage.prototype.validate = function() {
    var index, item, results, _len, _ref;
    results = this.results();
    _ref = this.words;
    for (index = 0, _len = _ref.length; index < _len; index++) {
      item = _ref[index];
      if (results[this.subtestId + "-number-sound-" + (index + 1)] == null) {
        return "You must select Correct or Incorrect for item #" + (index + 1) + ": <b>" + item["word"] + "</b>";
      }
    }
    return true;
  };
  return PhonemePage;
})();
PhonemePage.deserialize = function(pageObject) {
  var page;
  page = new PhonemePage(pageObject.words);
  page.load(pageObject);
  return page;
};
ToggleGridWithTimer = (function() {
  __extends(ToggleGridWithTimer, AssessmentPage);
  function ToggleGridWithTimer(options) {
    var checkboxName, index, letter, result, _len, _ref;
    this.letters = options.letters;
    this.numberOfColumns = (options != null ? options.numberOfColumns : void 0) || 5;
    this.footerMessage = footerMessage;
    ToggleGridWithTimer.__super__.constructor.call(this, options);
    this.addTimer();
    result = "";
    _ref = this.letters;
    for (index = 0, _len = _ref.length; index < _len; index++) {
      letter = _ref[index];
      checkboxName = "checkbox_" + index;
      if (index % this.numberOfColumns === 0) {
        result += "<fieldset data-role='controlgroup' data-type='horizontal' data-role='fieldcontain'>";
      }
      result += "<input type='checkbox' name='" + checkboxName + "' id='" + checkboxName + "' class='custom' /><label for='" + checkboxName + "'>" + letter + "</label>";
      if ((index + 1) % this.numberOfColumns === 0 || index === this.letters.length - 1) {
        result += "</fieldset>";
      }
    }
    this.content = "      <div class='toggle-grid-with-timer' data-role='content'>	        <form>          " + result + "        </form>      </div>      ";
    $("#" + this.pageId + " label").live('mousedown', __bind(function(eventData) {
      if ($.assessment.currentPage.timer.hasStartedAndStopped()) {
        $("#" + this.pageId + " label").removeClass('last-attempted');
        return $(eventData.currentTarget).toggleClass('last-attempted');
      }
    }, this));
  }
  ToggleGridWithTimer.prototype.propertiesForSerialization = function() {
    var properties;
    properties = ToggleGridWithTimer.__super__.propertiesForSerialization.call(this);
    properties.push("letters");
    return properties;
  };
  ToggleGridWithTimer.prototype.results = function() {
    var checkbox, firstTenPercent, index, items, results, tenPercentOfItems, _len, _len2, _ref, _ref2;
    results = {};
    items = $("#" + this.pageId + " label");
    tenPercentOfItems = items.length / 10;
    firstTenPercent = items.slice(0, (tenPercentOfItems - 1 + 1) || 9e9);
    if (_.select(firstTenPercent, function(item) {
      return $(item).hasClass("ui-btn-active");
    }).length === tenPercentOfItems) {
      results.auto_stop = true;
      $(_.last(firstTenPercent)).toggleClass("last-attempted", true);
      this.timer.stop();
      $.assessment.flash();
    }
    if (!this.timer.hasStartedAndStopped()) {
      return false;
    }
    results.letters = new Array();
    results.time_remain = this.timer.seconds;
    _ref = $("#" + this.pageId + " label");
    for (index = 0, _len = _ref.length; index < _len; index++) {
      checkbox = _ref[index];
      results.letters[index] = false;
    }
    results.attempted = null;
    _ref2 = $("#" + this.pageId + " label");
    for (index = 0, _len2 = _ref2.length; index < _len2; index++) {
      checkbox = _ref2[index];
      checkbox = $(checkbox);
      if (!checkbox.hasClass("ui-btn-active")) {
        results.letters[index] = true;
      }
      if (checkbox.hasClass("last-attempted")) {
        results.attempted = index + 1;
        return results;
      } else {
        $("#" + this.pageId + " .controls .message").html("Select last letter attempted");
      }
    }
    return results;
  };
  ToggleGridWithTimer.prototype.validate = function() {
    var results;
    results = this.results();
    if (results.time_remain === 60) {
      return "The timer must be started";
    }
    if (this.timer.running) {
      return "The timer is still running";
    }
    if (results.time_remain === 0) {
      return true;
    } else if (results.attempted != null) {
      return true;
    } else {
      return "The last letter attempted has not been selected";
    }
  };
  return ToggleGridWithTimer;
})();
ToggleGridWithTimer.deserialize = function(pageObject) {
  var lettersPage;
  lettersPage = new ToggleGridWithTimer(pageObject);
  lettersPage.load(pageObject);
  return lettersPage;
};
Dictation = (function() {
  __extends(Dictation, AssessmentPage);
  function Dictation(options) {
    this.message = options.message;
    this.footerMessage = footerMessage;
    Dictation.__super__.constructor.call(this, options);
    this.content = "" + this.message + "<br/><input name='result' type='text'></input>";
  }
  Dictation.prototype.propertiesForSerialization = function() {
    var properties;
    properties = Dictation.__super__.propertiesForSerialization.call(this);
    properties.push("message");
    return properties;
  };
  Dictation.prototype.results = function() {
    var enteredData, numberOfSpaces, results;
    results = {};
    enteredData = $("div#" + this.pageId + " input[type=text]").val();
    if (enteredData.match(/boys/i)) {
      results["Wrote boys correctly"] = 2;
    } else {
      if (enteredData.match(/bo|oy|by/i)) {
        results["Wrote boys correctly"] = 1;
      }
    }
    if (enteredData.match(/bikes/i)) {
      results["Wrote bikes correctly"] = 2;
    } else {
      if (enteredData.match(/bi|ik|kes/i)) {
        results["Wrote bikes correctly"] = 1;
      }
    }
    numberOfSpaces = enteredData.split(" ").length - 1;
    if (numberOfSpaces >= 8) {
      results["Used appropriate spacing between words"] = 2;
    } else {
      if (numberOfSpaces > 3 && numberOfSpaces < 8) {
        results["Used appropriate spacing between words"] = 1;
      } else {
        results["Used appropriate spacing between words"] = 0;
      }
    }
    results["Used appropriate direction of text (left to right)"] = 2;
    if (enteredData.match(/The/)) {
      results["Used capital letter for the word 'The'"] = 2;
    } else {
      results["Used capital letter for the word 'The'"] = 0;
    }
    if (enteredData.match(/\. *$/)) {
      results["Used full stop (.) at end of sentence."] = 2;
    } else {
      results["Used full stop (.) at end of sentence."] = 0;
    }
    return results;
  };
  Dictation.prototype.validate = function() {
    return true;
  };
  return Dictation;
})();
Dictation.deserialize = function(pageObject) {
  var dictationPage;
  dictationPage = new Dictation(pageObject);
  dictationPage.load(pageObject);
  return dictationPage;
};
Interview = (function() {
  __extends(Interview, AssessmentPage);
  function Interview(options) {
    this.radioButtons = options.radioButtons;
    Interview.__super__.constructor.call(this, options);
    this.content = Interview.template(this);
  }
  Interview.prototype.propertiesForSerialization = function() {
    var properties;
    properties = Interview.__super__.propertiesForSerialization.call(this);
    properties.push("radioButtons");
    return properties;
  };
  Interview.prototype.validate = function() {
    return true;
  };
  return Interview;
})();
Interview.template = Handlebars.compile("  <form>    {{#radioButtons}}      <fieldset data-type='{{type}}' data-role='controlgroup'>        <legend>{{label}}</legend>        {{#options}}          <label for='{{.}}'>{{.}}</label>          <input type='radio' name='{{../name}}' value='{{.}}' id='{{.}}'></input>        {{/options}}      </fieldset>    {{/radioButtons}}  </form>");
Interview.deserialize = function(pageObject) {
  var interview;
  interview = new Interview(pageObject);
  interview.load(pageObject);
  interview.content = Interview.template(interview);
  return interview;
};var Scorer;
Scorer = (function() {
  function Scorer() {}
  Scorer.prototype.update = function() {
    var completed, element, wrong, _i, _len, _ref;
    completed = wrong = 0;
    _ref = $('.ui-page-active .ui-checkbox label.ui-btn');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      element = _ref[_i];
      element = $(element);
      if (element.is('.first_click')) {
        wrong++;
      }
      completed++;
      if (element.is('.second_click')) {
        break;
      }
    }
    $('#completed').html(completed);
    return $('#wrong').html(wrong);
  };
  Scorer.prototype.render = function() {
    this.id = "scorer";
    setInterval(this.update, 500);
    return Mustache.to_html(this._template(), this);
  };
  Scorer.prototype._template = function() {
    return "<div class='scorer'>  <small>  Completed:<span id='completed'></span>  Wrong:<span id='wrong'></span>  </small></div>";
  };
  return Scorer;
})();var Timer;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
if ($.assessment === void 0) {
  throw "No assessment loaded";
}
$("div.timer button").live('mousedown', function(eventData) {
  var buttonPressed;
  buttonPressed = eventData.target.innerHTML;
  return $.assessment.currentPage.timer[buttonPressed]();
});
Timer = (function() {
  function Timer() {
    this.elementLocation = null;
  }
  Timer.prototype.toJSON = function() {
    return JSON.stringify({
      seconds: this.seconds,
      elementLocation: this.elementLocation
    });
  };
  Timer.prototype.setPage = function(page) {
    this.page = page;
    return this.elementLocation = "div#" + page.pageId + " div.timer";
  };
  Timer.prototype.start = function() {
    var decrement;
    this.showLetters();
    if (this.running) {
      return;
    }
    this.running = true;
    this.tick_value = 1;
    decrement = __bind(function() {
      this.seconds -= this.tick_value;
      if (this.seconds === 0) {
        this.stop();
        $.assessment.flash();
      }
      return this.renderSeconds();
    }, this);
    return this.intervalId = setInterval(decrement, this.tick_value * 1000);
  };
  Timer.prototype.stop = function() {
    this.running = false;
    return clearInterval(this.intervalId);
  };
  Timer.prototype.hasStartedAndStopped = function() {
    return (this.seconds !== 60) && (this.running === false);
  };
  Timer.prototype.reset = function() {
    this.seconds = 60;
    return this.renderSeconds();
  };
  Timer.prototype.renderSeconds = function() {
    return $("" + this.elementLocation + " span.timer_seconds").html(this.seconds);
  };
  Timer.prototype.render = function() {
    this.id = "timer";
    this.seconds = 60;
    return Mustache.to_html(this._template(), this);
  };
  Timer.prototype.hideLetters = function() {
    return $("#" + this.page.pageId + " .ui-checkbox span").removeClass("show");
  };
  Timer.prototype.showLetters = function() {
    return $("#" + this.page.pageId + " .ui-checkbox span").addClass("show");
  };
  Timer.prototype._template = function() {
    return "<div class='timer'>  <span class='timer_seconds'>{{seconds}}</span>  <button>start</button>  <button>stop</button>  <button>reset</button></div>";
  };
  return Timer;
})();/*
Updated versions can be found at https://github.com/mikeymckay/google-spreadsheet-javascript
*/var GoogleSpreadsheet, GoogleUrl;
GoogleUrl = (function() {
  function GoogleUrl(sourceIdentifier) {
    this.sourceIdentifier = sourceIdentifier;
    if (this.sourceIdentifier.match(/http(s)*:/)) {
      this.url = this.sourceIdentifier;
      try {
        this.key = this.url.match(/key=(.*?)&/)[1];
      } catch (error) {
        this.key = this.url.match(/(cells|list)\/(.*?)\//)[2];
      }
    } else {
      this.key = this.sourceIdentifier;
    }
    this.jsonCellsUrl = "http://spreadsheets.google.com/feeds/cells/" + this.key + "/od6/public/basic?alt=json-in-script";
    this.jsonListUrl = "http://spreadsheets.google.com/feeds/list/" + this.key + "/od6/public/basic?alt=json-in-script";
    this.jsonUrl = this.jsonCellsUrl;
  }
  return GoogleUrl;
})();
GoogleSpreadsheet = (function() {
  function GoogleSpreadsheet() {}
  GoogleSpreadsheet.prototype.load = function(callback) {
    var intervalId, jsonUrl, safetyCounter, url, waitUntilLoaded;
    url = this.googleUrl.jsonCellsUrl + "&callback=GoogleSpreadsheet.callbackCells";
    $('body').append("<script src='" + url + "'/>");
    jsonUrl = this.jsonUrl;
    safetyCounter = 0;
    waitUntilLoaded = function() {
      var result;
      result = GoogleSpreadsheet.find({
        jsonUrl: jsonUrl
      });
      if (safetyCounter++ > 30 || ((result != null) && (result.data != null))) {
        clearInterval(intervalId);
        return callback(result);
      }
    };
    intervalId = setInterval(waitUntilLoaded, 200);
    if (typeof result != "undefined" && result !== null) {
      return result;
    }
  };
  GoogleSpreadsheet.prototype.url = function(url) {
    return this.googleUrl(new GoogleUrl(url));
  };
  GoogleSpreadsheet.prototype.googleUrl = function(googleUrl) {
    if (typeof googleUrl === "string") {
      throw "Invalid url, expecting object not string";
    }
    this.url = googleUrl.url;
    this.key = googleUrl.key;
    this.jsonUrl = googleUrl.jsonUrl;
    return this.googleUrl = googleUrl;
  };
  GoogleSpreadsheet.prototype.save = function() {
    return localStorage["GoogleSpreadsheet." + this.key] = JSON.stringify(this);
  };
  return GoogleSpreadsheet;
})();
GoogleSpreadsheet.bless = function(object) {
  var key, result, value;
  result = new GoogleSpreadsheet();
  for (key in object) {
    value = object[key];
    result[key] = value;
  }
  return result;
};
GoogleSpreadsheet.find = function(params) {
  var item, itemObject, key, value, _i, _len;
  try {
    for (item in localStorage) {
      if (item.match(/^GoogleSpreadsheet\./)) {
        itemObject = JSON.parse(localStorage[item]);
        for (key in params) {
          value = params[key];
          if (itemObject[key] === value) {
            return GoogleSpreadsheet.bless(itemObject);
          }
        }
      }
    }
  } catch (error) {
    for (_i = 0, _len = localStorage.length; _i < _len; _i++) {
      item = localStorage[_i];
      if (item.match(/^GoogleSpreadsheet\./)) {
        itemObject = JSON.parse(localStorage[item]);
        for (key in params) {
          value = params[key];
          if (itemObject[key] === value) {
            return GoogleSpreadsheet.bless(itemObject);
          }
        }
      }
    }
  }
  return null;
};
GoogleSpreadsheet.callbackCells = function(data) {
  var cell, googleSpreadsheet, googleUrl;
  googleUrl = new GoogleUrl(data.feed.id.$t);
  googleSpreadsheet = GoogleSpreadsheet.find({
    jsonUrl: googleUrl.jsonUrl
  });
  if (googleSpreadsheet === null) {
    googleSpreadsheet = new GoogleSpreadsheet();
    googleSpreadsheet.googleUrl(googleUrl);
  }
  googleSpreadsheet.data = (function() {
    var _i, _len, _ref, _results;
    _ref = data.feed.entry;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      cell = _ref[_i];
      _results.push(cell.content.$t);
    }
    return _results;
  })();
  googleSpreadsheet.save();
  return googleSpreadsheet;
};
/* TODO (Handle row based data)
GoogleSpreadsheet.callbackList = (data) ->*/var EarlyGradeReadingAssessment;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
$(document).bind("mobileinit", function() {
  return $.mobile.autoInitialize = false;
});
$(document).ready(function() {
  switch (document.location.search) {
    case "?deleteFromCouch=true":
      return EarlyGradeReadingAssessment.deleteFromCouch(function() {
        return document.location = "index.html?showMenu=true";
      });
    case "?loadFromTestDataSaveToCouch=true":
      return EarlyGradeReadingAssessment.loadFromTestDataSaveToCouch(function() {
        return document.location = "index.html?showMenu=true";
      });
    case "?showMenu=true":
      return EarlyGradeReadingAssessment.showMenu();
    case "?printout=true":
      return EarlyGradeReadingAssessment.print();
    default:
      return EarlyGradeReadingAssessment.loadFromCouch(document.location.search.substring(1));
  }
});
EarlyGradeReadingAssessment = (function() {
  function EarlyGradeReadingAssessment() {}
  return EarlyGradeReadingAssessment;
})();
EarlyGradeReadingAssessment.showMenu = function() {
  var url;
  url = "/egra/_all_docs";
  return $.ajax({
    url: url,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: __bind(function(result) {
      var couchDocument, documents;
      documents = (function() {
        var _i, _len, _ref, _results;
        _ref = result.rows;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          couchDocument = _ref[_i];
          _results.push("<a rel='external' href='/_utils/document.html?egra/" + couchDocument.id + "'>" + couchDocument.id + "</a>");
        }
        return _results;
      })();
      $("body").html("        <div data-role='page' id='menu'>          <div data-role='header'>            <h1>Admin Menu</h1>          </div><!-- /header -->          <div data-role='content'>	            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?Assessment.EGRA Prototype'>Load 'Assessment.EGRA Prototype' from Couch</a>            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?Assessment.The Gambia EGRA May 2011'>Load 'Assessment.The Gambia EGRA May 2011' from Couch</a>            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?Assessment.Test'>Load 'Assessment.Test' from Couch</a>            <!--            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?deleteFromCouch=true'>Delete all 'Assessment.EGRA' documents from Couch</a>            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?loadFromTestDataSaveToCouch=true'>Load from Test Data Save To Couch</a>            -->            <a data-ajax='false' data-role='button' href='" + document.location.pathname + "?printout=true'>Generate printout</a>            " + (documents.join("<br/>")) + "          </div><!-- /content -->          <div data-role='footer'>          </div><!-- /footer -->        </div><!-- /page -->      ");
      return $.mobile.initializePage();
    }, this),
    error: function() {
      throw "Could not GET " + url;
    }
  });
};
EarlyGradeReadingAssessment.print = function() {
  return Assessment.loadFromHTTP("/egra/Assessment.EGRA Prototype", function(assessment) {
    return assessment.toPaper(function(result) {
      var style;
      style = "        body{          font-family: Arial;        }        .page-break{          display: block;          page-break-before: always;        }        input{          height: 50px;            border: 1px        }      ";
      $("body").html(result);
      return $("link").remove();
    });
  });
};
EarlyGradeReadingAssessment.loadFromCouch = function(path) {
  return Assessment.loadFromHTTP("/egra/" + path, function(assessment) {
    return assessment.render(function(result) {
      $("body").html(result);
      return $.mobile.initializePage();
    });
  });
};
EarlyGradeReadingAssessment.loadTest = function() {
  return Assessment.loadFromHTTP("/egra/Assessment.Test", function(assessment) {
    return assessment.render(function(result) {
      $("body").html(result);
      return $.mobile.initializePage();
    });
  });
};
EarlyGradeReadingAssessment.deleteFromCouch = function(callback) {
  var url;
  url = "/egra/_all_docs";
  return $.ajax({
    url: url,
    async: true,
    type: 'GET',
    dataType: 'json',
    success: __bind(function(result) {
      var document, _i, _len, _ref, _results;
      _ref = result.rows;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        document = _ref[_i];
        _results.push(document.id.match(/Assessment.EGRA/) ? (url = "/egra/" + document.id + "?rev=" + document.value.rev, $.ajax({
          url: url,
          async: true,
          type: 'DELETE',
          error: function() {
            throw "Could not DELETE " + url;
          }
        })) : void 0);
      }
      return _results;
    }, this),
    error: function() {
      throw "Could not GET " + url;
    },
    complete: __bind(function() {
      if (callback != null) {
        return callback();
      }
    }, this)
  });
};
EarlyGradeReadingAssessment.loadFromTestDataSaveToCouch = function(callback) {
  return Assessment.loadFromHTTP("tests/testData/Assessment.TEST EGRA Prototype", function(assessment) {
    assessment.changeName("EGRA Prototype");
    return assessment.saveToCouchDB(callback);
  });
};
EarlyGradeReadingAssessment.createFromGoogle = function() {
  var assessment, instructions, letters, login;
  assessment = new Assessment("EGRA Prototype");
  login = new JQueryMobilePage();
  instructions = new InstructionsPage();
  letters = new LettersPage();
  login.pageId = "Login";
  login.header = "<h1>EGRA</h1>";
  login.content = (new JQueryLogin()).render();
  instructions.pageId = "Instructions";
  instructions.header = "<h1>EGRA</h1>";
  instructions.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdGJSZTY2MHU4VlJ3RnNtdnNDVjRjLVE&hl=en&output=html";
  instructions.updateFromGoogle();
  letters.pageId = "Letters";
  letters.header = "<h1>EGRA</h1>";
  letters.url = "https://spreadsheets.google.com/pub?key=0Ago31JQPZxZrdC1MeGVqd3FZbXM2RnNFREtoVVZFbmc&hl=en&output=html";
  letters.updateFromGoogle();
  assessment.setPages([login, instructions, letters]);
  return assessment;
};/*!
 * jQuery Mobile v1.0a3
 * http://jquerymobile.com/
 *
 * Copyright 2010, jQuery Project
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a,d){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var g=0,e;(e=b[g])!=null;g++)a(e).triggerHandler("remove");c(b)}}else{var f=a.fn.remove;a.fn.remove=function(b,g){return this.each(function(){if(!g)if(!b||a.filter(b,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return f.call(a(this),b,g)})}}a.widget=function(b,g,e){var i=b.split(".")[0],h;b=b.split(".")[1];h=i+"-"+b;if(!e){e=g;g=a.Widget}a.expr[":"][h]=function(k){return!!a.data(k,
b)};a[i]=a[i]||{};a[i][b]=function(k,j){arguments.length&&this._createWidget(k,j)};g=new g;g.options=a.extend(true,{},g.options);a[i][b].prototype=a.extend(true,g,{namespace:i,widgetName:b,widgetEventPrefix:a[i][b].prototype.widgetEventPrefix||b,widgetBaseClass:h},e);a.widget.bridge(b,a[i][b])};a.widget.bridge=function(b,g){a.fn[b]=function(e){var i=typeof e==="string",h=Array.prototype.slice.call(arguments,1),k=this;e=!i&&h.length?a.extend.apply(null,[true,e].concat(h)):e;if(i&&e.charAt(0)==="_")return k;
i?this.each(function(){var j=a.data(this,b);if(!j)throw"cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'";if(!a.isFunction(j[e]))throw"no such method '"+e+"' for "+b+" widget instance";var o=j[e].apply(j,h);if(o!==j&&o!==d){k=o;return false}}):this.each(function(){var j=a.data(this,b);j?j.option(e||{})._init():a.data(this,b,new g(e,this))});return k}};a.Widget=function(b,g){arguments.length&&this._createWidget(b,g)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",
options:{disabled:false},_createWidget:function(b,g){a.data(g,this.widgetName,this);this.element=a(g);this.options=a.extend(true,{},this.options,this._getCreateOptions(),b);var e=this;this.element.bind("remove."+this.widgetName,function(){e.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){var b={};if(a.metadata)b=a.metadata.get(element)[this.widgetName];return b},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(b,g){var e=b;if(arguments.length===0)return a.extend({},this.options);if(typeof b==="string"){if(g===d)return this.options[b];e={};e[b]=g}this._setOptions(e);return this},_setOptions:function(b){var g=this;a.each(b,function(e,i){g._setOption(e,i)});return this},_setOption:function(b,g){this.options[b]=g;if(b===
"disabled")this.widget()[g?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",g);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,g,e){var i=this.options[b];g=a.Event(g);g.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();e=e||{};if(g.originalEvent){b=a.event.props.length;for(var h;b;){h=a.event.props[--b];g[h]=g.originalEvent[h]}}this.element.trigger(g,
e);return!(a.isFunction(i)&&i.call(this.element[0],g,e)===false||g.isDefaultPrevented())}}})(jQuery);(function(a,d){a.widget("mobile.widget",{_getCreateOptions:function(){var c=this.element,f={};a.each(this.options,function(b){var g=c.data(b.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}));if(g!==d)f[b]=g});return f}})})(jQuery);
(function(a){function d(){var g=c.width(),e=[],i=[],h;f.removeClass("min-width-"+b.join("px min-width-")+"px max-width-"+b.join("px max-width-")+"px");a.each(b,function(k,j){g>=j&&e.push("min-width-"+j+"px");g<=j&&i.push("max-width-"+j+"px")});if(e.length)h=e.join(" ");if(i.length)h+=" "+i.join(" ");f.addClass(h)}var c=a(window),f=a("html"),b=[320,480,768,1024];a.mobile.media=function(){var g={},e=a("<div id='jquery-mediatest'>"),i=a("<body>").append(e);return function(h){if(!(h in g)){var k=document.createElement("style"),
j="@media "+h+" { #jquery-mediatest { position:absolute; } }";k.type="text/css";if(k.styleSheet)k.styleSheet.cssText=j;else k.appendChild(document.createTextNode(j));f.prepend(i).prepend(k);g[h]=e.css("position")==="absolute";i.add(k).remove()}return g[h]}}();a.mobile.addResolutionBreakpoints=function(g){if(a.type(g)==="array")b=b.concat(g);else b.push(g);b.sort(function(e,i){return e-i});d()};a(document).bind("mobileinit.htmlclass",function(){c.bind("orientationchange.htmlclass resize.htmlclass",
function(g){g.orientation&&f.removeClass("portrait landscape").addClass(g.orientation);d()})});a(function(){c.trigger("orientationchange.htmlclass")})})(jQuery);
(function(a,d){function c(h){var k=h.charAt(0).toUpperCase()+h.substr(1);h=(h+" "+g.join(k+" ")+k).split(" ");for(var j in h)if(b[j]!==d)return true}var f=a("<body>").prependTo("html"),b=f[0].style,g=["webkit","moz","o"],e=window.palmGetResource||window.PalmServiceBridge,i=window.blackberry;a.extend(a.support,{orientation:"orientation"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window,pushState:!!history.pushState,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!c("content"),
boxShadow:!!c("boxShadow")&&!i,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in f[0])&&!e,dynamicBaseTag:function(){var h=location.protocol+"//"+location.host+location.pathname+"ui-dir/",k=a("head base"),j=null,o="";if(k.length)o=k.attr("href");else k=j=a("<base>",{href:h}).appendTo("head");var p=a("<a href='testurl'></a>").prependTo(f)[0].href;k[0].href=o?o:location.pathname;j&&j.remove();return p.indexOf(h)===0}()});f.remove();a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")})(jQuery);
(function(a,d){a.each("touchstart touchmove touchend orientationchange tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,i){a.fn[i]=function(h){return h?this.bind(i,h):this.trigger(i)};a.attrFn[i]=true});var c=a.support.touch,f=c?"touchstart":"mousedown",b=c?"touchend":"mouseup",g=c?"touchmove":"mousemove";a.event.special.scrollstart={enabled:true,setup:function(){function e(j,o){h=o;var p=j.type;j.type=h?"scrollstart":"scrollstop";a.event.handle.call(i,j);j.type=
p}var i=this,h,k;a(i).bind("touchmove scroll",function(j){if(a.event.special.scrollstart.enabled){h||e(j,true);clearTimeout(k);k=setTimeout(function(){e(j,false)},50)}})}};a.event.special.tap={setup:function(){var e=this,i=a(e);i.bind("mousedown touchstart",function(h){function k(n){if(n.type=="scroll")j=true;else{n=n.type=="touchmove"?n.originalEvent.touches[0]:n;if(Math.abs(v[0]-n.pageX)>10||Math.abs(v[1]-n.pageY)>10)j=true}}if(h.which&&h.which!==1||i.data("prevEvent")&&i.data("prevEvent")!==h.type)return false;
i.data("prevEvent",h.type);setTimeout(function(){i.removeData("prevEvent")},800);var j=false,o=true,p=h.target,t=h.originalEvent,v=h.type=="touchstart"?[t.touches[0].pageX,t.touches[0].pageY]:[h.pageX,h.pageY],m,r;r=setTimeout(function(){if(o&&!j){m=h.type;h.type="taphold";a.event.handle.call(e,h);h.type=m}},750);a(window).one("scroll",k);i.bind("mousemove touchmove",k).one("mouseup touchend",function(n){i.unbind("mousemove touchmove",k);a(window).unbind("scroll",k);clearTimeout(r);o=false;if(!j&&
p==n.target){m=n.type;n.type="tap";a.event.handle.call(e,n);n.type=m}})})}};a.event.special.swipe={setup:function(){var e=a(this);e.bind(f,function(i){function h(p){if(j){var t=p.originalEvent.touches?p.originalEvent.touches[0]:p;o={time:(new Date).getTime(),coords:[t.pageX,t.pageY]};Math.abs(j.coords[0]-o.coords[0])>10&&p.preventDefault()}}var k=i.originalEvent.touches?i.originalEvent.touches[0]:i,j={time:(new Date).getTime(),coords:[k.pageX,k.pageY],origin:a(i.target)},o;e.bind(g,h).one(b,function(){e.unbind(g,
h);if(j&&o)if(o.time-j.time<1E3&&Math.abs(j.coords[0]-o.coords[0])>30&&Math.abs(j.coords[1]-o.coords[1])<75)j.origin.trigger("swipe").trigger(j.coords[0]>o.coords[0]?"swipeleft":"swiperight");j=o=d})})}};(function(e){function i(){var o=k();if(o!==j){j=o;h.trigger("orientationchange")}}var h=e(window),k,j;e.event.special.orientationchange={setup:function(){if(e.support.orientation)return false;j=k();h.bind("resize",i)},teardown:function(){if(e.support.orientation)return false;h.unbind("resize",i)},
add:function(o){var p=o.handler;o.handler=function(t){t.orientation=k();return p.apply(this,arguments)}}};k=function(){var o=document.documentElement;return o&&o.clientWidth/o.clientHeight<1.1?"portrait":"landscape"}})(jQuery);a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(e,i){a.event.special[e]={setup:function(){a(this).bind(i,a.noop)}}})})(jQuery);
(function(a,d,c){function f(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}var b="hashchange",g=document,e,i=a.event.special,h=g.documentMode,k="on"+b in d&&(h===c||h>7);a.fn[b]=function(j){return j?this.bind(b,j):this.trigger(b)};a.fn[b].delay=50;i[b]=a.extend(i[b],{setup:function(){if(k)return false;a(e.start)},teardown:function(){if(k)return false;a(e.stop)}});e=function(){function j(){var n=f(),u=r(t);if(n!==t){m(t=n,u);a(d).trigger(b)}else if(u!==t)location.href=location.href.replace(/#.*/,
"")+u;p=setTimeout(j,a.fn[b].delay)}var o={},p,t=f(),v=function(n){return n},m=v,r=v;o.start=function(){p||j()};o.stop=function(){p&&clearTimeout(p);p=c};a.browser.msie&&!k&&function(){var n,u;o.start=function(){if(!n){u=(u=a.fn[b].src)&&u+f();n=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){u||m(f());j()}).attr("src",u||"javascript:0").insertAfter("body")[0].contentWindow;g.onpropertychange=function(){try{if(event.propertyName==="title")n.document.title=g.title}catch(l){}}}};
o.stop=v;r=function(){return f(n.location.href)};m=function(l,s){var q=n.document,w=a.fn[b].domain;if(l!==s){q.title=g.title;q.open();w&&q.write('<script>document.domain="'+w+'"<\/script>');q.close();n.location.hash=l}}}();return o}()})(jQuery,this);
(function(a){a.widget("mobile.page",a.mobile.widget,{options:{backBtnText:"Back",addBackBtn:true,degradeInputs:{color:false,date:false,datetime:false,"datetime-local":false,email:false,month:false,number:false,range:"number",search:true,tel:false,time:false,url:false,week:false},keepNative:null},_create:function(){var d=this.element,c=this.options;this.keepNative="[data-role='none'], [data-role='nojs']"+(c.keepNative?", "+c.keepNative:"");if(this._trigger("beforeCreate")!==false){d.find("[data-role='page'], [data-role='content']").andSelf().each(function(){a(this).addClass("ui-"+
a(this).data("role"))});d.find("[data-role='nojs']").addClass("ui-nojs");d.find("[data-role]").andSelf().each(function(){var f=a(this),b=f.data("role"),g=f.data("theme");if(b==="header"||b==="footer"){f.addClass("ui-bar-"+(g||f.parent("[data-role=page]").data("theme")||"a"));f.attr("role",b==="header"?"banner":"contentinfo");g=f.children("a");var e=g.hasClass("ui-btn-left"),i=g.hasClass("ui-btn-right");if(!e)e=g.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length;i||g.eq(1).addClass("ui-btn-right");
c.addBackBtn&&b==="header"&&a(".ui-page").length>1&&d.data("url")!==a.mobile.path.stripHash(location.hash)&&!e&&f.data("backbtn")!==false&&a("<a href='#' class='ui-btn-left' data-rel='back' data-icon='arrow-l'>"+c.backBtnText+"</a>").prependTo(f);f.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({tabindex:"0",role:"heading","aria-level":"1"})}else if(b==="content"){g&&f.addClass("ui-body-"+g);f.attr("role","main")}else if(b==="page")f.addClass("ui-body-"+(g||"c"));switch(b){case "header":case "footer":case "page":case "content":f.addClass("ui-"+
b);break;case "collapsible":case "fieldcontain":case "navbar":case "listview":case "dialog":f[b]()}});this._enhanceControls();d.find("[data-role='button'], .ui-bar > a, .ui-header > a, .ui-footer > a").not(".ui-btn").not(this.keepNative).buttonMarkup();d.find("[data-role='controlgroup']").controlgroup();d.find("a:not(.ui-btn):not(.ui-link-inherit)").not(this.keepNative).addClass("ui-link");d.fixHeaderFooter()}},_enhanceControls:function(){var d=this.options;this.element.find("input").not(this.keepNative).each(function(){var b=
this.getAttribute("type"),g=d.degradeInputs[b]||"text";d.degradeInputs[b]&&a(this).replaceWith(a("<div>").html(a(this).clone()).html().replace(/type="([a-zA-Z]+)"/,"type="+g+" data-type='$1'"))});var c=this.element.find("input, textarea, select, button"),f=c.not(this.keepNative);c=c.filter("input[type=text]");c.length&&typeof c[0].autocorrect!=="undefined"&&c.each(function(){this.setAttribute("autocorrect","off");this.setAttribute("autocomplete","off")});f.filter("[type='radio'], [type='checkbox']").checkboxradio();
f.filter("button, [type='button'], [type='submit'], [type='reset'], [type='image']").button();f.filter("input, textarea").not("[type='radio'], [type='checkbox'], [type='button'], [type='submit'], [type='reset'], [type='image'], [type='hidden']").textinput();f.filter("input, select").filter("[data-role='slider'], [data-type='range']").slider();f.filter("select:not([data-role='slider'])").selectmenu()}})})(jQuery);
(function(a,d,c){a.extend(a.mobile,{subPageUrlKey:"ui-page",nonHistorySelectors:"dialog",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",ajaxEnabled:true,hashListeningEnabled:true,ajaxLinksEnabled:true,ajaxFormsEnabled:true,defaultTransition:"slide",loadingMessage:"loading",metaViewportContent:"width=device-width, minimum-scale=1, maximum-scale=1",gradeA:function(){return a.support.mediaquery},autoInitialize:true,keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,
COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a(d.document).trigger("mobileinit");if(a.mobile.gradeA()){var f=a(d),b=a("html"),g=a("head"),e=a.mobile.loadingMessage?a("<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1>"+
a.mobile.loadingMessage+"</h1></div>"):c;b.addClass("ui-mobile ui-mobile-rendering");a.mobile.metaViewportContent&&a("<meta>",{name:"viewport",content:a.mobile.metaViewportContent}).prependTo(g);a.extend(a.mobile,{pageLoading:function(i){if(i)b.removeClass("ui-loading");else{if(a.mobile.loadingMessage){i=a("."+a.mobile.activeBtnClass).first();e.appendTo(a.mobile.pageContainer).css({top:a.support.scrollTop&&a(d).scrollTop()+a(d).height()/2||i.length&&i.offset().top||100})}b.addClass("ui-loading")}},
silentScroll:function(i){i=i||0;a.event.special.scrollstart.enabled=false;setTimeout(function(){d.scrollTo(0,i);a(document).trigger("silentscroll",{x:0,y:i})},20);setTimeout(function(){a.event.special.scrollstart.enabled=true},150)},initializePage:function(){var i=a("[data-role='page']");i.add("[data-role='dialog']").each(function(){a(this).attr("data-url",a(this).attr("id"))});a.mobile.firstPage=i.first();a.mobile.pageContainer=i.first().parent().addClass("ui-mobile-viewport");a.mobile.pageLoading();
!a.mobile.hashListeningEnabled||!a.mobile.path.stripHash(location.hash)?a.mobile.changePage(a.mobile.firstPage,false,true,false,true):f.trigger("hashchange",[true])}});a.mobile.autoInitialize&&a(a.mobile.initializePage);f.load(a.mobile.silentScroll)}})(jQuery,this);
(function(a,d){function c(l){if(i&&(!i.closest(".ui-page-active").length||l))i.removeClass(a.mobile.activeBtnClass);i=null}var f=a(window),b=a("html"),g=a("head"),e={get:function(l){if(l==d)l=location.hash;return e.stripHash(l).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath:function(l){var s="&"+a.mobile.subPageUrlKey;return l&&l.split(s)[0].split(t)[0]},set:function(l){location.hash=l},origin:"",setOrigin:function(){e.origin=e.get(location.protocol+"//"+location.host+location.pathname)},makeAbsolute:function(l){return e.get()+
l},clean:function(l){return l.replace(location.protocol+"//"+location.host,"")},stripHash:function(l){return l.replace(/^#/,"")},isExternal:function(l){return e.hasProtocol(e.clean(l))},hasProtocol:function(l){return/^(:?\w+:)/.test(l)},isRelative:function(l){return/^[^\/|#]/.test(l)&&!e.hasProtocol(l)},isEmbeddedPage:function(l){return/^#/.test(l)}},i=null,h={stack:[],activeIndex:0,getActive:function(){return h.stack[h.activeIndex]},getPrev:function(){return h.stack[h.activeIndex-1]},getNext:function(){return h.stack[h.activeIndex+
1]},addNew:function(l,s){h.getNext()&&h.clearForward();h.stack.push({url:l,transition:s});h.activeIndex=h.stack.length-1},clearForward:function(){h.stack=h.stack.slice(0,h.activeIndex+1)},ignoreNextHashChange:true},k="[tabindex],a,button:visible,select:visible,input",j=null,o=[],p=false,t="&ui-state=dialog",v=g.children("base"),m=location.protocol+"//"+location.host,r=e.get(m+location.pathname),n=r;if(v.length){var u=v.attr("href");if(u)n=u.search(/^[^:/]+:\/\/[^/]+\/?/)==-1?u.charAt(0)=="/"?m+u:
r+u:u;n+=n.charAt(n.length-1)=="/"?" ":"/"}base=a.support.dynamicBaseTag?{element:v.length?v:a("<base>",{href:n}).prependTo(g),set:function(l){base.element.attr("href",n+e.get(l))},reset:function(){base.element.attr("href",n)}}:d;e.setOrigin();a.fn.animationComplete=function(l){if(a.support.cssTransitions)return a(this).one("webkitAnimationEnd",l);else setTimeout(l,0)};a.mobile.updateHash=e.set;a.mobile.path=e;a.mobile.base=base;a.mobile.urlstack=h.stack;a.mobile.urlHistory=h;a.mobile.changePage=
function(l,s,q,w,z){function F(){function A(){if(w!==false&&x){h.ignoreNextHashChange=false;e.set(x)}!I&&!K&&h.addNew(x,s);c();a.mobile.silentScroll(l.data("lastScroll"));var G=l,P=G.find(".ui-title:eq(0)");P.length?P.focus():G.find(k).eq(0).focus();y&&y.data("page")._trigger("hide",null,{nextPage:l});l.data("page")._trigger("show",null,{prevPage:y||a("")});a.mobile.activePage=l;L!=null&&L.remove();b.removeClass("ui-mobile-rendering");p=false;o.length>0&&a.mobile.changePage.apply(a.mobile,o.pop())}
function B(G){a.mobile.pageContainer.addClass(G);D.push(G)}a.mobile.silentScroll();var M=f.scrollTop(),J=["flip"],D=[];if(x.indexOf("&"+a.mobile.subPageUrlKey)>-1)l=a("[data-url='"+x+"']");if(y){y.data("lastScroll",M);y.data("page")._trigger("beforehide",{nextPage:l})}l.data("page")._trigger("beforeshow",{prevPage:y||a("")});if(s&&s!=="none"){a.mobile.pageLoading(true);a.inArray(s,J)>=0&&B("ui-mobile-viewport-perspective");B("ui-mobile-viewport-transitioning");if(y)y.addClass(s+" out "+(q?"reverse":
""));l.addClass(a.mobile.activePageClass+" "+s+" in "+(q?"reverse":""));l.animationComplete(function(){y.add(l).removeClass("out in reverse "+s);y&&y.removeClass(a.mobile.activePageClass);A();a.mobile.pageContainer.removeClass(D.join(" "));D=[]})}else{a.mobile.pageLoading(true);y&&y.removeClass(a.mobile.activePageClass);l.addClass(a.mobile.activePageClass);A()}}function Q(){if(j||l.data("role")=="dialog"){x=h.getActive().url+t;if(j){l.attr("data-role",j);j=null}}l.page()}var E=a.type(l)==="array",
H=a.type(l)==="object",y=E?l[0]:a.mobile.activePage;l=E?l[1]:l;var x=fileUrl=a.type(l)==="string"?e.stripHash(l):"",C=d,N="get",R=false,L=null,O=h.getActive(),I=false,K=false;if(!(O&&h.stack.length>1&&O.url===x&&!E&&!H))if(p)o.unshift(arguments);else{p=true;if(z){a.each(h.stack,function(A){if(this.url==x){urlIndex=A;I=A<h.activeIndex;K=!I;h.activeIndex=A}});if(I){q=true;s=s||O.transition}else if(K)s=s||h.getActive().transition}if(H&&l.url){x=l.url;C=l.data;N=l.type;R=true;if(C&&N=="get"){if(a.type(C)==
"object")C=a.param(C);x+="?"+C;C=d}}base&&base.reset();a(window.document.activeElement).add("input:focus, textarea:focus, select:focus").blur();if(x){l=a("[data-url='"+x+"']");fileUrl=e.getFilePath(x)}else{E=l.attr("data-url");H=e.getFilePath(E);if(E!=H)fileUrl=H}if(s===d)s=a.mobile.defaultTransition;if(l.length&&!R){fileUrl&&base&&base.set(fileUrl);Q();F()}else{if(l.length)L=l;a.mobile.pageLoading();a.ajax({url:fileUrl,type:N,data:C,success:function(A){var B=/ data-url="(.*)"/.test(A)&&RegExp.$1;
if(B){base&&base.set(B);x=fileUrl=e.getFilePath(B)}else base&&base.set(fileUrl);B=a("<div></div>");B.get(0).innerHTML=A;l=B.find('[data-role="page"], [data-role="dialog"]').first();if(!a.support.dynamicBaseTag){var M=e.get(fileUrl);l.find("[src],link[href]").each(function(){var J=a(this).is("[href]")?"href":"src",D=a(this).attr(J);D.replace(location.protocol+"//"+location.host+location.pathname,"");/^(\w+:|#|\/)/.test(D)||a(this).attr(J,M+D)})}l.attr("data-url",fileUrl).appendTo(a.mobile.pageContainer);
Q();setTimeout(function(){F()},0)},error:function(){a.mobile.pageLoading(true);c(true);base&&base.set(e.get());a("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>Error Loading Page</h1></div>").css({display:"block",opacity:0.96,top:a(window).scrollTop()+100}).appendTo(a.mobile.pageContainer).delay(800).fadeOut(400,function(){a(this).remove()})}})}}};a("form[data-ajax!='false']").live("submit",function(l){if(a.mobile.ajaxEnabled&&a.mobile.ajaxFormsEnabled){var s=a(this).attr("method"),
q=e.clean(a(this).attr("action"));if(!e.isExternal(q)){if(e.isRelative(q))q=e.makeAbsolute(q);a.mobile.changePage({url:q,type:s,data:a(this).serialize()},d,d,true);l.preventDefault()}}});a("a").live("click",function(l){var s=a(this),q=s.attr("href")||"#";q=e.clean(q);var w=s.is("[rel='external']"),z=e.isEmbeddedPage(q);w=e.isExternal(q)||w&&!z;z=s.is("[target]");var F=s.is("[data-ajax='false']");if(s.is("[data-rel='back']")){window.history.back();return false}if(q==="#")return false;i=s.closest(".ui-btn").addClass(a.mobile.activeBtnClass);
if(w||F||z||!a.mobile.ajaxEnabled||!a.mobile.ajaxLinksEnabled){c(true);if(z)window.open(q);else if(F)return;else location.href=q}else{w=s.data("transition");z=(z=s.data("direction"))&&z=="reverse"||s.data("back");j=s.attr("data-rel");if(e.isRelative(q))q=e.makeAbsolute(q);q=e.stripHash(q);a.mobile.changePage(q,w,z)}l.preventDefault()});f.bind("hashchange",function(){var l=e.stripHash(location.hash),s=a.mobile.urlHistory.stack.length===0?false:d;if(!a.mobile.hashListeningEnabled||!h.ignoreNextHashChange||
h.stack.length>1&&l.indexOf(t)>-1&&!a.mobile.activePage.is(".ui-dialog")){if(!h.ignoreNextHashChange)h.ignoreNextHashChange=true}else l?a.mobile.changePage(l,s,d,false,true):a.mobile.changePage(a.mobile.firstPage,s,true,false,true)})})(jQuery);
(function(a,d){a.fn.fixHeaderFooter=function(){if(!a.support.scrollTop)return this;return this.each(function(){var c=a(this);c.data("fullscreen")&&c.addClass("ui-page-fullscreen");c.find('.ui-header[data-position="fixed"]').addClass("ui-header-fixed ui-fixed-inline fade");c.find('.ui-footer[data-position="fixed"]').addClass("ui-footer-fixed ui-fixed-inline fade")})};a.fixedToolbars=function(){function c(){if(!e&&g=="overlay"){i||a.fixedToolbars.hide(true);a.fixedToolbars.startShowTimer()}}function f(m){var r=
0;if(m){var n=m.offsetParent,u=document.body;for(r=m.offsetTop;m&&m!=u;){r+=m.scrollTop||0;if(m==n){r+=n.offsetTop;n=m.offsetParent}m=m.parentNode}}return r}function b(m){var r=a(window).scrollTop(),n=f(m[0]),u=m.css("top")=="auto"?0:parseFloat(m.css("top")),l=window.innerHeight,s=m.outerHeight(),q=m.parents(".ui-page:not(.ui-page-fullscreen)").length;if(m.is(".ui-header-fixed")){u=r-n+u;if(u<n)u=0;return m.css("top",q?u:r)}else{u=r+l-s-(n-u);return m.css("top",q?u:r+l-s)}}if(a.support.scrollTop){var g=
"inline",e=false,i,h,k=a.support.touch,j=k?"touchstart":"mousedown",o=k?"touchend":"mouseup",p=null,t=false,v=true;a(function(){a(document).bind(j,function(m){if(v)a(m.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length||(p=g)}).bind(o,function(m){if(v)if(!a(m.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length)if(!t){a.fixedToolbars.toggle(p);p=null}}).bind("scrollstart",function(m){if(!a(m.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length){t=
true;if(p==null)p=g;if(e=(m=p=="overlay")||!!i){a.fixedToolbars.clearShowTimer();m&&a.fixedToolbars.hide(true)}}}).bind("scrollstop",function(m){if(!a(m.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length){t=false;if(e){e=false;a.fixedToolbars.startShowTimer()}p=null}}).bind("silentscroll",c);a(window).bind("resize",c)});a(".ui-page").live("pagebeforeshow",function(m){m=a(m.target).find('[data-role="footer"]:not(.ui-sticky-footer)');var r=m.data("id");
h=null;if(r){h=a('.ui-footer[data-id="'+r+'"].ui-sticky-footer');if(h.length==0){h=m;m=h.clone();h.addClass("ui-sticky-footer").before(m)}m.addClass("ui-footer-duplicate");h.appendTo(a.pageContainer).css("top",0);b(h)}});a(".ui-page").live("pageshow",function(m){h&&h.length&&h.appendTo(m.target).css("top",0);a.fixedToolbars.show(true,this)});return{show:function(m,r){a.fixedToolbars.clearShowTimer();g="overlay";return(r?a(r):a.mobile.activePage?a.mobile.activePage:a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function(){var n=
a(this),u=a(window).scrollTop(),l=f(n[0]),s=window.innerHeight,q=n.outerHeight();u=n.is(".ui-header-fixed")&&u<=l+q||n.is(".ui-footer-fixed")&&l<=u+s;n.addClass("ui-fixed-overlay").removeClass("ui-fixed-inline");!u&&!m&&n.animationComplete(function(){n.removeClass("in")}).addClass("in");b(n)})},hide:function(m){g="inline";return(a.mobile.activePage?a.mobile.activePage:a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function(){var r=a(this),
n=r.css("top");n=n=="auto"?0:parseFloat(n);r.addClass("ui-fixed-inline").removeClass("ui-fixed-overlay");if(n<0||r.is(".ui-header-fixed")&&n!=0)if(m)r.css("top",0);else r.css("top")!=="auto"&&parseFloat(r.css("top"))!==0&&r.animationComplete(function(){r.removeClass("out reverse");r.css("top",0)}).addClass("out reverse")})},startShowTimer:function(){a.fixedToolbars.clearShowTimer();var m=a.makeArray(arguments);i=setTimeout(function(){i=d;a.fixedToolbars.show.apply(null,m)},100)},clearShowTimer:function(){i&&
clearTimeout(i);i=d},toggle:function(m){if(m)g=m;return g=="overlay"?a.fixedToolbars.hide():a.fixedToolbars.show()},setTouchToggleEnabled:function(m){v=m}}}}()})(jQuery);
(function(a,d){a.widget("mobile.checkboxradio",a.mobile.widget,{options:{theme:null},_create:function(){var c=this,f=this.element,b=f.closest("form,fieldset,[data-role='page']").find("label[for='"+f.attr("id")+"']"),g=f.attr("type"),e="ui-icon-"+g+"-off";if(!(g!="checkbox"&&g!="radio")){if(!this.options.theme)this.options.theme=this.element.data("theme");b.buttonMarkup({theme:this.options.theme,icon:this.element.parents("[data-type='horizontal']").length?d:e,shadow:false});f.add(b).wrapAll("<div class='ui-"+
g+"'></div>");b.bind({mouseover:function(){if(a(this).parent().is(".ui-disabled"))return false},touchmove:function(i){i=i.originalEvent.touches[0];if(b.data("movestart")){if(Math.abs(b.data("movestart")[0]-i.pageX)>10||Math.abs(abel.data("movestart")[1]-i.pageY)>10)b.data("moved",true)}else b.data("movestart",[parseFloat(i.pageX),parseFloat(i.pageY)])},"touchend mouseup":function(i){b.removeData("movestart");if(b.data("etype")&&b.data("etype")!==i.type||b.data("moved")){b.removeData("etype").removeData("moved");
b.data("moved")&&b.removeData("moved");return false}b.data("etype",i.type);c._cacheVals();f.attr("checked",g==="radio"&&true||!f.is(":checked"));c._updateAll();i.preventDefault()},click:false});f.bind({mousedown:function(){this._cacheVals()},click:function(){c._updateAll()},focus:function(){b.addClass("ui-focus")},blur:function(){b.removeClass("ui-focus")}});this.refresh()}},_cacheVals:function(){this._getInputSet().each(function(){a(this).data("cacheVal",a(this).is(":checked"))})},_getInputSet:function(){return this.element.closest("form,fieldset,[data-role='page']").find("input[name='"+
this.element.attr("name")+"'][type='"+this.element.attr("type")+"']")},_updateAll:function(){this._getInputSet().each(function(){var c=a(this).data("cacheVal");if(c&&c!==a(this).is(":checked")||a(this).is("[type='checkbox']"))a(this).trigger("change")}).checkboxradio("refresh")},refresh:function(){var c=this.element,f=c.closest("form,fieldset,[data-role='page']").find("label[for='"+c.attr("id")+"']"),b=c.attr("type"),g=f.find(".ui-icon"),e="ui-icon-"+b+"-on";b="ui-icon-"+b+"-off";if(c[0].checked){f.addClass("ui-btn-active");
g.addClass(e);g.removeClass(b)}else{f.removeClass("ui-btn-active");g.removeClass(e);g.addClass(b)}c.is(":disabled")?this.disable():this.enable()},disable:function(){this.element.attr("disabled",true).parent().addClass("ui-disabled")},enable:function(){this.element.attr("disabled",false).parent().removeClass("ui-disabled")}})})(jQuery);
(function(a){a.widget("mobile.textinput",a.mobile.widget,{options:{theme:null},_create:function(){var d=this.element,c=this.options,f=c.theme;if(!f){f=this.element.closest("[class*='ui-bar-'],[class*='ui-body-']");f=f.length?/ui-(bar|body)-([a-z])/.exec(f.attr("class"))[2]:"c"}f=" ui-body-"+f;a("label[for="+d.attr("id")+"]").addClass("ui-input-text");d.addClass("ui-input-text ui-body-"+c.theme);var b=d;if(d.is('[type="search"],[data-type="search"]')){b=d.wrap('<div class="ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield'+
f+'"></div>').parent();var g=a('<a href="#" class="ui-input-clear" title="clear text">clear text</a>').tap(function(h){d.val("").focus();d.trigger("change");g.addClass("ui-input-clear-hidden");h.preventDefault()}).appendTo(b).buttonMarkup({icon:"delete",iconpos:"notext",corners:true,shadow:true});c=function(){d.val()==""?g.addClass("ui-input-clear-hidden"):g.removeClass("ui-input-clear-hidden")};c();d.keyup(c)}else d.addClass("ui-corner-all ui-shadow-inset"+f);d.focus(function(){b.addClass("ui-focus")}).blur(function(){b.removeClass("ui-focus")});
if(d.is("textarea")){var e=function(){var h=d[0].scrollHeight;d[0].clientHeight<h&&d.css({height:h+15})},i;d.keyup(function(){clearTimeout(i);i=setTimeout(e,100)})}},disable:function(){(this.element.attr("disabled",true).is('[type="search"],[data-type="search"]')?this.element.parent():this.element).addClass("ui-disabled")},enable:function(){(this.element.attr("disabled",false).is('[type="search"],[data-type="search"]')?this.element.parent():this.element).removeClass("ui-disabled")}})})(jQuery);
(function(a){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme:null,disabled:false,icon:"arrow-d",iconpos:"right",inline:null,corners:true,shadow:true,iconshadow:true,menuPageTheme:"b",overlayTheme:"a",hidePlaceholderMenuItems:true,closeText:"Close",nativeMenu:false},_create:function(){var d=this,c=this.options,f=this.element.wrap("<div class='ui-select'>"),b=f.attr("id"),g=a("label[for="+b+"]").addClass("ui-select"),e=(d.options.nativeMenu?a("<div/>"):a("<a>",{href:"#",role:"button",id:k,
"aria-haspopup":"true","aria-owns":j})).text(a(f[0].options.item(f[0].selectedIndex)).text()).insertBefore(f).buttonMarkup({theme:c.theme,icon:c.icon,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c.shadow,iconshadow:c.iconshadow}),i=d.isMultiple=f[0].multiple;c.nativeMenu&&window.opera&&window.opera.version&&f.addClass("ui-select-nativeonly");if(!c.nativeMenu){var h=f.find("option"),k=b+"-button",j=b+"-menu",o=f.closest(".ui-page"),p=/ui-btn-up-([a-z])/.exec(e.attr("class"))[1],t=a("<div data-role='dialog' data-theme='"+
c.menuPageTheme+"'><div data-role='header'><div class='ui-title'>"+g.text()+"</div></div><div data-role='content'></div></div>").appendTo(a.mobile.pageContainer).page(),v=t.find(".ui-content"),m=t.find(".ui-header a"),r=a("<div>",{"class":"ui-selectmenu-screen ui-screen-hidden"}).appendTo(o),n=a("<div>",{"class":"ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all pop ui-body-"+c.overlayTheme}).insertAfter(r),u=a("<ul>",{"class":"ui-selectmenu-list",id:j,role:"listbox","aria-labelledby":k,
"data-theme":p}).appendTo(n);p=a("<div>",{"class":"ui-header ui-bar-"+p}).prependTo(n);var l=a("<h1>",{"class":"ui-title"}).appendTo(p),s=a("<a>",{"data-iconpos":"notext","data-icon":"delete",text:c.closeText,href:"#","class":"ui-btn-left"}).appendTo(p).buttonMarkup()}if(i)d.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(e);c.disabled&&this.disable();f.change(function(){d.refresh()});a.extend(d,{select:f,optionElems:h,selectID:b,label:g,buttonId:k,menuId:j,
thisPage:o,button:e,menuPage:t,menuPageContent:v,screen:r,listbox:n,list:u,menuType:void 0,header:p,headerClose:s,headerTitle:l,placeholder:""});if(c.nativeMenu){f.appendTo(e).bind("touchstart mousedown",function(){e.addClass(a.mobile.activeBtnClass)}).bind("focus mouseover",function(){e.trigger("mouseover")}).bind("touchmove",function(){e.removeClass(a.mobile.activeBtnClass)}).bind("change blur mouseout",function(){e.trigger("mouseout").removeClass(a.mobile.activeBtnClass)});e.attr("tabindex","-1")}else{d.refresh();
f.attr("tabindex","-1").focus(function(){a(this).blur();e.focus()});e.bind("touchstart",function(q){a(this).data("startTouches",a.extend({},q.originalEvent.touches[0]))}).bind(a.support.touch?"touchend":"mouseup",function(q){a(this).data("moved")?a(this).removeData("moved"):d.open();q.preventDefault()}).bind("touchmove",function(q){q=q.originalEvent.touches[0];var w=a(this).data("startTouches"),z=Math.abs(q.pageY-w.pageY);if(Math.abs(q.pageX-w.pageX)>10||z>10)a(this).data("moved",true)});u.delegate("li:not(.ui-disabled, .ui-li-divider)",
"click",function(q){if(a(q.target).is("a")){var w=u.find("li:not(.ui-li-divider)").index(this);w=d.optionElems.eq(w)[0];w.selected=i?!w.selected:true;i&&a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",w.selected).toggleClass("ui-icon-checkbox-off",!w.selected);f.trigger("change");i||d.close();q.preventDefault()}});r.add(s).add(m).bind("click",function(q){d.close();q.preventDefault();a.contains(m[0],q.target)&&q.stopImmediatePropagation()})}},_buildList:function(){var d=this,c=this.options,
f=this.placeholder,b=[],g=[],e=d.isMultiple?"checkbox-off":"false";d.list.empty().filter(".ui-listview").listview("destroy");d.select.find("option").each(function(){var i=a(this),h=i.parent(),k=i.text(),j="<a href='#'>"+k+"</a>",o=[],p=[];if(h.is("optgroup")){h=h.attr("label");if(a.inArray(h,b)===-1){g.push("<li data-role='list-divider'>"+h+"</li>");b.push(h)}}if(!this.getAttribute("value")||k.length==0||i.data("placeholder")){c.hidePlaceholderMenuItems&&o.push("ui-selectmenu-placeholder");f=d.placeholder=
k}if(this.disabled){o.push("ui-disabled");p.push("aria-disabled='true'")}g.push("<li data-icon='"+e+"' class='"+o.join(" ")+"' "+p.join(" ")+">"+j+"</li>")});d.list.html(g.join(" "));this.isMultiple||this.headerClose.hide();!this.isMultiple&&!f.length?this.header.hide():this.headerTitle.text(this.placeholder);d.list.listview()},refresh:function(d){var c=this,f=this.element,b=this.isMultiple,g=this.optionElems=f.find("option"),e=g.filter(":selected"),i=e.map(function(){return g.index(this)}).get();
if(!c.options.nativeMenu&&(d||f[0].options.length>c.list.find("li").length))c._buildList();c.button.find(".ui-btn-text").text(function(){if(!b)return e.text();return e.length?e.map(function(){return a(this).text()}).get().join(", "):c.placeholder});if(b)c.buttonCount[e.length>1?"show":"hide"]().text(e.length);c.options.nativeMenu||c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",false).each(function(h){if(a.inArray(h,i)>-1){h=a(this).addClass(a.mobile.activeBtnClass);
h.find("a").attr("aria-selected",true);b&&h.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on")}})},open:function(){function d(){c.list.find(".ui-btn-active").focus()}if(!(this.options.disabled||this.options.nativeMenu)){var c=this,f=c.list.outerHeight(),b=c.list.outerWidth(),g=a(window).scrollTop(),e=c.button.offset().top,i=window.innerHeight,h=c.list.parents(".ui-dialog").length;c.button.addClass(a.mobile.activeBtnClass);if(h||f>i-80||!a.support.scrollTop){g==0&&
e>i&&c.thisPage.one("pagehide",function(){a(this).data("lastScroll",e)});c.menuPage.one("pageshow",function(){a(window).one("silentscroll",function(){d()})});c.menuType="page";c.menuPageContent.append(c.list);a.mobile.changePage(c.menuPage,"pop",false,true)}else{c.menuType="overlay";c.screen.height(a(document).height()).removeClass("ui-screen-hidden");h=e-g;var k=g+i-e,j=f/2;f=h>f/2&&k>f/2?e+c.button.outerHeight()/2-j:h>k?g+i-f-30:g+30;b=c.button.offset().left+c.button.outerWidth()/2-b/2;c.listbox.append(c.list).removeClass("ui-selectmenu-hidden").css({top:f,
left:b}).addClass("in");d()}setTimeout(function(){c.isOpen=true},400)}},close:function(){function d(){setTimeout(function(){c.button.focus();c.button.removeClass(a.mobile.activeBtnClass)},40);c.listbox.removeAttr("style").append(c.list)}if(!(this.options.disabled||!this.isOpen||this.options.nativeMenu)){var c=this;if(c.menuType=="page"){a.mobile.changePage([c.menuPage,c.thisPage],"pop",true,false);c.menuPage.one("pagehide",d)}else{c.screen.addClass("ui-screen-hidden");c.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in");
d()}this.isOpen=false}},disable:function(){this.element.attr("disabled",true);this.button.addClass("ui-disabled").attr("aria-disabled",true);return this._setOption("disabled",true)},enable:function(){this.element.attr("disabled",false);this.button.removeClass("ui-disabled").attr("aria-disabled",false);return this._setOption("disabled",false)}})})(jQuery);
(function(a){a.fn.buttonMarkup=function(c){return this.each(function(){var f=a(this),b=a.extend({},a.fn.buttonMarkup.defaults,f.data(),c),g,e="ui-btn-inner",i;d&&d();if(!b.theme){g=f.closest("[class*='ui-bar-'],[class*='ui-body-']");b.theme=g.length?/ui-(bar|body)-([a-z])/.exec(g.attr("class"))[2]:"c"}g="ui-btn ui-btn-up-"+b.theme;if(b.inline)g+=" ui-btn-inline";if(b.icon){b.icon="ui-icon-"+b.icon;b.iconpos=b.iconpos||"left";i="ui-icon "+b.icon;if(b.shadow)i+=" ui-icon-shadow"}if(b.iconpos){g+=" ui-btn-icon-"+
b.iconpos;b.iconpos=="notext"&&!f.attr("title")&&f.attr("title",f.text())}if(b.corners){g+=" ui-btn-corner-all";e+=" ui-btn-corner-all"}if(b.shadow)g+=" ui-shadow";f.attr("data-theme",b.theme).addClass(g);b=("<D class='"+e+"'><D class='ui-btn-text'></D>"+(b.icon?"<span class='"+i+"'></span>":"")+"</D>").replace(/D/g,b.wrapperEls);f.wrapInner(b)})};a.fn.buttonMarkup.defaults={corners:true,shadow:true,iconshadow:true,wrapperEls:"span"};var d=function(){a(".ui-btn:not(.ui-disabled)").live({"touchstart mousedown":function(){var c=
a(this).attr("data-theme");a(this).removeClass("ui-btn-up-"+c).addClass("ui-btn-down-"+c)},"touchmove touchend mouseup":function(){var c=a(this).attr("data-theme");a(this).removeClass("ui-btn-down-"+c).addClass("ui-btn-up-"+c)},"mouseover focus":function(){var c=a(this).attr("data-theme");a(this).removeClass("ui-btn-up-"+c).addClass("ui-btn-hover-"+c)},"mouseout blur":function(){var c=a(this).attr("data-theme");a(this).removeClass("ui-btn-hover-"+c).addClass("ui-btn-up-"+c)}});d=null}})(jQuery);
(function(a){a.widget("mobile.button",a.mobile.widget,{options:{theme:null,icon:null,iconpos:null,inline:null,corners:true,shadow:true,iconshadow:true},_create:function(){var d=this.element,c=this.options;this.button=a("<div></div>").text(d.text()||d.val()).buttonMarkup({theme:c.theme,icon:c.icon,iconpos:c.iconpos,inline:c.inline,corners:c.corners,shadow:c.shadow,iconshadow:c.iconshadow}).insertBefore(d).append(d.addClass("ui-btn-hidden"));d.attr("type")!=="reset"&&d.click(function(){var f=a("<input>",
{type:"hidden",name:d.attr("name"),value:d.attr("value")}).insertBefore(d);a(document).submit(function(){f.remove()})})},enable:function(){this.element.attr("disabled",false);this.button.removeClass("ui-disabled").attr("aria-disabled",false);return this._setOption("disabled",false)},disable:function(){this.element.attr("disabled",true);this.button.addClass("ui-disabled").attr("aria-disabled",true);return this._setOption("disabled",true)}})})(jQuery);
(function(a){a.widget("mobile.slider",a.mobile.widget,{options:{theme:null,trackTheme:null,disabled:false},_create:function(){var d=this,c=this.element,f=c.parents("[class*=ui-bar-],[class*=ui-body-]").eq(0);f=f.length?f.attr("class").match(/ui-(bar|body)-([a-z])/)[2]:"c";var b=this.options.theme?this.options.theme:f,g=this.options.trackTheme?this.options.trackTheme:f,e=c[0].nodeName.toLowerCase();f=e=="select"?"ui-slider-switch":"";var i=c.attr("id"),h=i+"-label";i=a("[for="+i+"]").attr("id",h);
var k=function(){return e=="input"?parseFloat(c.val()):c[0].selectedIndex},j=e=="input"?parseFloat(c.attr("min")):0,o=e=="input"?parseFloat(c.attr("max")):c.find("option").length-1,p=window.parseFloat(c.attr("step")||1),t=a('<div class="ui-slider '+f+" ui-btn-down-"+g+' ui-btn-corner-all" role="application"></div>'),v=a('<a href="#" class="ui-slider-handle"></a>').appendTo(t).buttonMarkup({corners:true,theme:b,shadow:true}).attr({role:"slider","aria-valuemin":j,"aria-valuemax":o,"aria-valuenow":k(),
"aria-valuetext":k(),title:k(),"aria-labelledby":h});a.extend(this,{slider:t,handle:v,dragging:false,beforeStart:null});if(e=="select"){t.wrapInner('<div class="ui-slider-inneroffset"></div>');c.find("option");c.find("option").each(function(m){var r=m==0?"b":"a",n=m==0?"right":"left";m=m==0?" ui-btn-down-"+g:" ui-btn-active";a('<div class="ui-slider-labelbg ui-slider-labelbg-'+r+m+" ui-btn-corner-"+n+'"></div>').prependTo(t);a('<span class="ui-slider-label ui-slider-label-'+r+m+" ui-btn-corner-"+
n+'" role="img">'+a(this).text()+"</span>").prependTo(v)})}i.addClass("ui-slider");c.addClass(e=="input"?"ui-slider-input":"ui-slider-switch").change(function(){d.refresh(k(),true)}).keyup(function(){d.refresh(k(),true,true)}).blur(function(){d.refresh(k(),true)});a(document).bind("touchmove mousemove",function(m){if(d.dragging){d.refresh(m);return false}});t.bind("touchstart mousedown",function(m){d.dragging=true;if(e==="select")d.beforeStart=c[0].selectedIndex;d.refresh(m);return false});t.add(document).bind("touchend mouseup",
function(){if(d.dragging){d.dragging=false;if(e==="select"){if(d.beforeStart===c[0].selectedIndex)d.refresh(d.beforeStart===0?1:0);var m=k();m=Math.round(m/(o-j)*100);v.addClass("ui-slider-handle-snapping").css("left",m+"%").animationComplete(function(){v.removeClass("ui-slider-handle-snapping")})}return false}});t.insertAfter(c);this.handle.bind("touchstart mousedown",function(){a(this).focus()});this.handle.bind("keydown",function(m){var r=k();if(!d.options.disabled){switch(m.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:m.preventDefault();
if(!d._keySliding){d._keySliding=true;a(this).addClass("ui-state-active")}}switch(m.keyCode){case a.mobile.keyCode.HOME:d.refresh(j);break;case a.mobile.keyCode.END:d.refresh(o);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:d.refresh(r+p);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:d.refresh(r-p)}}}).keyup(function(){if(d._keySliding){d._keySliding=false;a(this).removeClass("ui-state-active")}});this.refresh()},
refresh:function(d,c,f){if(!this.options.disabled){var b=this.element,g=b[0].nodeName.toLowerCase(),e=g==="input"?parseFloat(b.attr("min")):0,i=g==="input"?parseFloat(b.attr("max")):b.find("option").length-1;if(typeof d==="object"){d=d.originalEvent.touches?d.originalEvent.touches[0]:d;if(!this.dragging||d.pageX<this.slider.offset().left-8||d.pageX>this.slider.offset().left+this.slider.width()+8)return;d=Math.round((d.pageX-this.slider.offset().left)/this.slider.width()*100)}else{if(d==null)d=g===
"input"?parseFloat(b.val()):b[0].selectedIndex;d=(parseFloat(d)-e)/(i-e)*100}if(!isNaN(d)){if(d<0)d=0;if(d>100)d=100;var h=Math.round(d/100*(i-e))+e;if(h<e)h=e;if(h>i)h=i;this.handle.css("left",d+"%");this.handle.attr({"aria-valuenow":g==="input"?h:b.find("option").eq(h).attr("value"),"aria-valuetext":g==="input"?h:b.find("option").eq(h).text(),title:h});if(g==="select")h===0?this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b"):this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a");
if(!f){if(g==="input")b.val(h);else b[0].selectedIndex=h;c||b.trigger("change")}}}},enable:function(){this.element.attr("disabled",false);this.slider.removeClass("ui-disabled").attr("aria-disabled",false);return this._setOption("disabled",false)},disable:function(){this.element.attr("disabled",true);this.slider.addClass("ui-disabled").attr("aria-disabled",true);return this._setOption("disabled",true)}})})(jQuery);
(function(a){a.widget("mobile.collapsible",a.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:false,heading:">:header,>legend",theme:null,iconTheme:"d"},_create:function(){var d=this.element,c=this.options,f=d.addClass("ui-collapsible-contain"),b=d.find(c.heading).eq(0),g=f.wrapInner('<div class="ui-collapsible-content"></div>').find(".ui-collapsible-content");d=d.closest('[data-role="collapsible-set"]').addClass("ui-collapsible-set");
if(b.is("legend")){b=a('<div role="heading">'+b.html()+"</div>").insertBefore(b);b.next().remove()}b.insertBefore(g);b.addClass("ui-collapsible-heading").append('<span class="ui-collapsible-heading-status"></span>').wrapInner('<a href="#" class="ui-collapsible-heading-toggle"></a>').find("a:eq(0)").buttonMarkup({shadow:!!!d.length,corners:false,iconPos:"left",icon:"plus",theme:c.theme}).find(".ui-icon").removeAttr("class").buttonMarkup({shadow:true,corners:true,iconPos:"notext",icon:"plus",theme:c.iconTheme});
if(d.length)f.data("collapsible-last")&&b.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom");else b.find("a:eq(0)").addClass("ui-corner-all").find(".ui-btn-inner").addClass("ui-corner-all");f.bind("collapse",function(e){if(!e.isDefaultPrevented()){e.preventDefault();b.addClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(c.expandCueText);b.find(".ui-icon").removeClass("ui-icon-minus").addClass("ui-icon-plus");g.addClass("ui-collapsible-content-collapsed").attr("aria-hidden",
true);f.data("collapsible-last")&&b.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom")}}).bind("expand",function(e){if(!e.isDefaultPrevented()){e.preventDefault();b.removeClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(c.collapseCueText);b.find(".ui-icon").removeClass("ui-icon-plus").addClass("ui-icon-minus");g.removeClass("ui-collapsible-content-collapsed").attr("aria-hidden",false);f.data("collapsible-last")&&b.find("a:eq(0), .ui-btn-inner").removeClass("ui-corner-bottom")}}).trigger(c.collapsed?
"collapse":"expand");if(d.length&&!d.data("collapsiblebound")){d.data("collapsiblebound",true).bind("expand",function(e){a(this).find(".ui-collapsible-contain").not(a(e.target).closest(".ui-collapsible-contain")).not("> .ui-collapsible-contain .ui-collapsible-contain").trigger("collapse")});d=d.find("[data-role=collapsible]");d.first().find("a:eq(0)").addClass("ui-corner-top").find(".ui-btn-inner").addClass("ui-corner-top");d.last().data("collapsible-last",true)}b.bind(a.support.touch?"touchstart":
"click",function(){b.is(".ui-collapsible-heading-collapsed")?f.trigger("expand"):f.trigger("collapse");return false})}})})(jQuery);
(function(a){a.fn.controlgroup=function(d){return this.each(function(){function c(e){e.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(g[0]).end().filter(":last").addClass(g[1]).addClass("ui-controlgroup-last")}var f=a.extend({direction:a(this).data("type")||"vertical",shadow:false},d),b=a(this).find(">legend"),g=f.direction=="horizontal"?["ui-corner-left","ui-corner-right"]:["ui-corner-top","ui-corner-bottom"];a(this).find("input:eq(0)").attr("type");if(b.length){a(this).wrapInner('<div class="ui-controlgroup-controls"></div>');
a('<div role="heading" class="ui-controlgroup-label">'+b.html()+"</div>").insertBefore(a(this).children(0));b.remove()}a(this).addClass("ui-corner-all ui-controlgroup ui-controlgroup-"+f.direction);c(a(this).find(".ui-btn"));c(a(this).find(".ui-btn-inner"));f.shadow&&a(this).addClass("ui-shadow")})}})(jQuery);(function(a){a.fn.fieldcontain=function(){return this.addClass("ui-field-contain ui-body ui-br")}})(jQuery);
(function(a){a.widget("mobile.listview",a.mobile.widget,{options:{theme:"c",countTheme:"c",headerTheme:"b",dividerTheme:"b",splitIcon:"arrow-r",splitTheme:"b",inset:false},_create:function(){var d=this.element,c=this.options;d.addClass("ui-listview").attr("role","listbox");c.inset&&d.addClass("ui-listview-inset ui-corner-all ui-shadow");d.delegate(".ui-li","focusin",function(){a(this).attr("tabindex","0")});this._itemApply(d,d);this.refresh(true);d.keydown(function(f){var b=a(f.target),g=b.closest("li");
switch(f.keyCode){case 38:f=g.prev();if(f.length){b.blur().attr("tabindex","-1");f.find("a").first().focus()}return false;case 40:f=g.next();if(f.length){b.blur().attr("tabindex","-1");f.find("a").first().focus()}return false;case 39:f=g.find("a.ui-li-link-alt");if(f.length){b.blur();f.first().focus()}return false;case 37:f=g.find("a.ui-link-inherit");if(f.length){b.blur();f.first().focus()}return false;case 13:case 32:b.trigger("click");return false}});d.delegate("li","click",function(f){if(!a(f.target).closest("a").length){a(this).find("a").first().trigger("click");
return false}})},_itemApply:function(d,c){c.find(".ui-li-count").addClass("ui-btn-up-"+(d.data("counttheme")||this.options.countTheme)+" ui-btn-corner-all");c.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading");c.find("p, dl").addClass("ui-li-desc");c.find("li").find("img:eq(0)").addClass("ui-li-thumb").each(function(){a(this).closest("li").addClass(a(this).is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")});var f=c.find(".ui-li-aside");f.length&&f.each(function(b,g){a(g).prependTo(a(g).parent())});
a.support.cssPseudoElement||a.nodeName(c[0],"ol")},_removeCorners:function(d){d.add(d.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb")).removeClass("ui-corner-top ui-corner-bottom ui-corner-br ui-corner-bl ui-corner-tr ui-corner-tl")},refresh:function(d){this._createSubPages();var c=this.options,f=this.element,b=this,g=f.data("dividertheme")||c.dividerTheme,e=f.children("li"),i=a.support.cssPseudoElement||!a.nodeName(f[0],"ol")?0:1;i&&f.find(".ui-li-dec").remove();e.attr({role:"option",tabindex:"-1"});
e.first().attr("tabindex","0");e.each(function(h){var k=a(this),j="ui-li";if(!(!d&&k.hasClass("ui-li"))){var o=k.data("theme")||c.theme,p=k.find("a");if(p.length){var t=k.data("icon");k.buttonMarkup({wrapperEls:"div",shadow:false,corners:false,iconpos:"right",icon:p.length>1||t===false?false:t||"arrow-r",theme:o});p.first().addClass("ui-link-inherit");if(p.length>1){j+=" ui-li-has-alt";p=p.last();t=f.data("splittheme")||p.data("theme")||c.splitTheme;p.appendTo(k).attr("title",p.text()).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:false,
corners:false,theme:o,icon:false,iconpos:false}).find(".ui-btn-inner").append(a("<span>").buttonMarkup({shadow:true,corners:true,theme:t,iconpos:"notext",icon:f.data("spliticon")||p.data("icon")||c.splitIcon}))}}else if(k.data("role")==="list-divider"){j+=" ui-li-divider ui-btn ui-bar-"+g;k.attr("role","heading");if(i)i=1}else j+=" ui-li-static ui-btn-up-"+o;if(c.inset){if(h===0){j+=" ui-corner-top";k.add(k.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-tr").end().find(".ui-li-thumb").addClass("ui-corner-tl");
k.next().next().length&&b._removeCorners(k.next())}if(h===e.length-1){j+=" ui-corner-bottom";k.add(k.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").addClass("ui-corner-bl");k.prev().prev().length&&b._removeCorners(k.prev())}}i&&j.indexOf("ui-li-divider")<0&&k.find(".ui-link-inherit").first().addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+i++ +". </span>");k.addClass(j);d||b._itemApply(f,k)}})},_idStringEscape:function(d){return d.replace(/[^a-zA-Z0-9]/g,
"-")},_createSubPages:function(){var d=this.element,c=d.closest(".ui-page"),f=c.data("url"),b=this.options,g=this,e=c.find("[data-role='footer']").data("id");a(d.find("ul, ol").toArray().reverse()).each(function(i){var h=a(this),k=h.parent(),j=a.trim(k.contents()[0].nodeValue)||k.find("a:first").text();i=f+"&"+a.mobile.subPageUrlKey+"="+g._idStringEscape(j+" "+i);var o=h.data("theme")||b.theme,p=h.data("counttheme")||d.data("counttheme")||b.countTheme;h.wrap("<div data-role='page'><div data-role='content'></div></div>").parent().before("<div data-role='header' data-theme='"+
b.headerTheme+"'><div class='ui-title'>"+j+"</div></div>").after(e?a("<div>",{"data-role":"footer","data-id":e,"class":"ui-footer-duplicate"}):"").parent().attr({"data-url":i,"data-theme":o,"data-count-theme":p}).appendTo(a.mobile.pageContainer).page();h=k.find("a:first");h.length||(h=a("<a></a>").html(j).prependTo(k.empty()));h.attr("href","#"+i)}).listview()}})})(jQuery);
(function(a){a.mobile.listview.prototype.options.filter=false;a("[data-role='listview']").live("listviewcreate",function(){var d=a(this);if(d.data("listview").options.filter){var c=a("<form>",{"class":"ui-listview-filter ui-bar-c",role:"search"});a("<input>",{placeholder:"Filter results...","data-type":"search"}).bind("keyup change",function(){var f=this.value.toLowerCase();d.children().show();f&&d.children().filter(function(){return a(this).text().toLowerCase().indexOf(f)===-1}).hide()}).appendTo(c).textinput();
c.insertBefore(d)}})})(jQuery);
(function(a){a.widget("mobile.dialog",a.mobile.widget,{options:{},_create:function(){this.element.attr("role","dialog").addClass("ui-page ui-dialog ui-body-a").find("[data-role=header]").addClass("ui-corner-top ui-overlay-shadow").prepend('<a href="#" data-icon="delete" data-rel="back" data-iconpos="notext">Close</a>').end().find('.ui-content:not([class*="ui-body-"])').addClass("ui-body-c").end().find(".ui-content,[data-role=footer]").last().addClass("ui-corner-bottom ui-overlay-shadow");this.element.bind("click submit",
function(d){d=d.type=="click"?a(d.target).closest("a"):a(d.target).closest("form");d.length&&!d.data("transition")&&d.attr("data-transition",a.mobile.urlHistory.getActive().transition).attr("data-direction","reverse")})},close:function(){window.history.back()}})})(jQuery);
(function(a,d){a.widget("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null},_create:function(){var c=this.element,f=c.find("a"),b=f.filter("[data-icon]").length?this.options.iconpos:d;c.addClass("ui-navbar").attr("role","navigation").find("ul").grid({grid:this.options.grid});b||c.addClass("ui-navbar-noicons");f.buttonMarkup({corners:false,shadow:false,iconpos:b});c.delegate("a","click",function(){f.removeClass("ui-btn-active");a(this).addClass("ui-btn-active")})}})})(jQuery);
(function(a){a.fn.grid=function(d){return this.each(function(){var c=a.extend({grid:null},d),f=a(this).children(),b={a:2,b:3,c:4,d:5};c=c.grid;if(!c)if(f.length<=5)for(var g in b){if(b[g]==f.length)c=g}else c="a";b=b[c];a(this).addClass("ui-grid-"+c);f.filter(":nth-child("+b+"n+1)").addClass("ui-block-a");f.filter(":nth-child("+b+"n+2)").addClass("ui-block-b");b>2&&f.filter(":nth-child(3n+3)").addClass("ui-block-c");b>3&&f.filter(":nth-child(4n+4)").addClass("ui-block-d");b>4&&f.filter(":nth-child(5n+5)").addClass("ui-block-e")})}})(jQuery);
