(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{415:function(t,e,n){"use strict";n.r(e);n(83);var i={props:{autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#3eaf7c"},loop:{type:Boolean,default:!1},lang:{type:String,default:"zh-cn"},screenshot:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},contextmenu:{type:Array},logo:{type:String},video:{type:Object}},data:function(){return{dp:null,DPlayer:{}}},mounted:function(){this.DPlayer=n(404),this.init()},methods:{init:function(){var t=this,e=this.dp=new this.DPlayer({element:this.$el,autoplay:this.autoplay,theme:this.theme,loop:this.loop,lang:this.lang,screenshot:this.screenshot,hotkey:this.hotkey,preload:this.preload,contextmenu:this.contextmenu,logo:this.logo,video:{pic:this.video.pic,defaultQuality:this.video.defaultQuality,quality:[{url:this.video.quality[0].url,name:this.video.quality[0].name}],thumbnails:this.video.thumbnails,type:this.video.type}});e.on("play",(function(){t.$emit("play")})),e.on("quality_start",(function(){t.$emit("quality_start"),e.on("play")})),e.on("pause",(function(){t.$emit("pause")})),e.on("canplay",(function(){t.$emit("canplay")})),e.on("playing",(function(){t.$emit("playing")})),e.on("ended",(function(){t.$emit("ended")})),e.on("error",(function(){t.$emit("error")}))}}},o=n(14),a=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dplayer"})}),[],!1,null,"a638e4ae",null);e.default=a.exports}}]);