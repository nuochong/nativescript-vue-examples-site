(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{384:function(t,e,n){"use strict";var r=n(123),o=n(8),a=n(15),i=n(23),u=n(124),c=n(125);r("match",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),s=String(this);if(!i.global)return c(i,s);var l=i.unicode;i.lastIndex=0;for(var d,f=[],h=0;null!==(d=c(i,s));){var g=String(d[0]);f[h]=g,""===g&&(i.lastIndex=u(s,a(i.lastIndex),l)),h++}return 0===h?null:f}]}))},385:function(t,e,n){var r=n(7),o=n(4),a=n(84),i=n(213),u=n(11).f,c=n(61).f,s=n(121),l=n(122),d=n(211),f=n(13),h=n(3),g=n(43).set,p=n(209),v=n(5)("match"),y=o.RegExp,m=y.prototype,w=/a/g,b=/a/g,x=new y(w)!==w,D=d.UNSUPPORTED_Y;if(r&&a("RegExp",!x||D||h((function(){return b[v]=!1,y(w)!=w||y(b)==b||"/a/i"!=y(w,"i")})))){for(var S=function(t,e){var n,r=this instanceof S,o=s(t),a=void 0===e;if(!r&&o&&t.constructor===S&&a)return t;x?o&&!a&&(t=t.source):t instanceof S&&(a&&(e=l.call(t)),t=t.source),D&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var u=i(x?new y(t,e):y(t,e),r?this:m,S);return D&&n&&g(u,{sticky:n}),u},E=function(t){t in S||u(S,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},O=c(y),k=0;O.length>k;)E(O[k++]);m.constructor=S,S.prototype=m,f(o,"RegExp",S)}p("RegExp")},448:function(module,exports,__webpack_require__){"use strict";var timeago=function(){var o={second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2592e6,year:31536e6},obj={ago:function(t,e){var n,r=Math.round,a=" ago",i=function(t,n){return void 0===e?n+" "+t+(n>1?"s":"")+a:n+t.substring(0,1)},u=Date.now()-new Date(t).getTime();for(var c in u<0&&(u*=-1,a=" from now"),o){if(r(u)<o[c])return i(n||"m",r(u/(o[n]||1)));n=c}return i(c,r(u/o[c]))},today:function(){var t=new Date,e=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),n=new Array("January","February","March","April","May","June","July","August","September","October","November","December");return e[t.getDay()]+", "+n[t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()},timefriendly:function(s){var t=s.match(/(\d).([a-z]*?)s?$/);return t[1]*eval(o[t[2]])},mintoread:function(t,e,n){return(Math.round(t.split(" ").length/(n||200))||"< 1")+(e||" min to read")}};return obj};module.exports&&(module.exports=timeago())},449:function(t,e,n){var r={"./zh-CN.js":[454,101]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=449,t.exports=o},552:function(t,e,n){"use strict";n.r(e);n(59),n(86),n(58),n(9),n(385),n(26),n(119),n(384),n(42),n(60);var r=n(448),o={name:"TimeProvider",props:{type:{type:String,required:!0},date:{type:[Date,String],default:function(){return new Date}},content:String,lang:String},data:function(){return{result:null}},created:function(){var t=this,e=this.content||(this.date instanceof Date?this.date:new Date(this.date));n(449)("./".concat(this.lang||this.$lang,".js")).then((function(n){t.result=t.translate(t.handle(e),n.default)})).catch((function(){t.result=t.handle(e)}))},methods:{translate:function(t,e){return Object.keys(e).forEach((function(n){var r=new RegExp(n,"i");t.match(r)&&(t=t.replace(n,e[n]))})),t},handle:function(t){return"mintoread"===this.type?r[this.type](t,null,100):r[this.type](t)}},render:function(){return this.$scopedSlots.default({time:this.result})}},a=n(14),i=Object(a.a)(o,void 0,void 0,!1,null,null,null);e.default=i.exports}}]);