(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{469:function(e,t,a){"use strict";a.r(t);a(208),a(83),a(58);var n={props:{name:{type:String,default:"default"},isolated:{type:Boolean,default:!1},languages:Object},data:function(){return{selectedLanguage:Object.keys(this.languages)[0]}},computed:{root:function(){for(var e,t=this;e=t.$parent;)t=e;return t},localStorageKey:function(){return"vuepress-plugin-code-switcher@".concat(this.name)}},methods:{switchLanguage:function(e){if(this.isolated)return this.selectedLanguage=e;"undefined"!=typeof localStorage&&localStorage.setItem(this.localStorageKey,e),this.root.$emit("change",{name:this.name,value:e})}},created:function(){var e=this;if(!this.isolated){if("undefined"!=typeof localStorage){var t=localStorage.getItem(this.localStorageKey);t&&-1!==Object.keys(this.languages).indexOf(t)&&(this.selectedLanguage=t)}this.root.$on("change",(function(t){var a=t.name,n=t.value;a===e.name&&(e.selectedLanguage=n)}))}}},s=a(14),i=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"code-switcher"},[a("div",{staticClass:"tab-header"},[a("ul",e._l(e.languages,(function(t,n){return a("li",{key:n,class:{active:e.selectedLanguage===n},on:{click:function(t){return e.switchLanguage(n)}}},[e._v(" "+e._s(t)+"\n            ")])})),0)]),e._v(" "),e._l(e.languages,(function(t,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:n===e.selectedLanguage,expression:"shorthand === selectedLanguage"}],key:n,staticClass:"tab-content"},[e._t(n)],2)}))],2)}),[],!1,null,null,null);t.default=i.exports}}]);