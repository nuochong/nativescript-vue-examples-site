(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{408:function(t,e,n){},415:function(t,e,n){"use strict";n.r(e);n(83);var i={props:{autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#3eaf7c"},loop:{type:Boolean,default:!1},lang:{type:String,default:"zh-cn"},screenshot:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},contextmenu:{type:Array},logo:{type:String},video:{type:Object}},data:function(){return{dp:null,DPlayer:{}}},mounted:function(){this.DPlayer=n(407),this.init()},methods:{init:function(){var t=this,e=this.dp=new this.DPlayer({element:this.$el,autoplay:this.autoplay,theme:this.theme,loop:this.loop,lang:this.lang,screenshot:this.screenshot,hotkey:this.hotkey,preload:this.preload,contextmenu:this.contextmenu,logo:this.logo,video:{pic:this.video.pic,defaultQuality:this.video.defaultQuality,quality:[{url:this.video.quality[0].url,name:this.video.quality[0].name}],thumbnails:this.video.thumbnails,type:this.video.type}});e.on("play",(function(){t.$emit("play")})),e.on("quality_start",(function(){t.$emit("quality_start"),e.on("play")})),e.on("pause",(function(){t.$emit("pause")})),e.on("canplay",(function(){t.$emit("canplay")})),e.on("playing",(function(){t.$emit("playing")})),e.on("ended",(function(){t.$emit("ended")})),e.on("error",(function(){t.$emit("error")}))}}},a=n(14),o=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dplayer"})}),[],!1,null,"a638e4ae",null);e.default=o.exports},445:function(t,e,n){t.exports=n.p+"assets/img/logo.79bf1e5d.png"},446:function(t,e,n){"use strict";n(408)},465:function(t,e,n){"use strict";n.r(e);var i=n(415),a=n(445),o=n.n(a),l={name:"MePlayer",props:{url:{type:String,default:"http://static.smartisanos.cn/common/video/t1-ui.mp4",require:!0},pic:{type:String,default:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",require:!0}},data:function(){return{video:{quality:[{name:"360P",url:"http://static.smartisanos.cn/common/video/t1-ui.mp4"},{name:"720P",url:"http://static.smartisanos.cn/common/video/t1-ui.mp4"}],pic:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",defaultQuality:0,thumbnails:o.a,type:"normal"},lang:"zh-cn",logo:o.a,autoplay:!1,player:null,contextmenu:[{text:"nativescript-vue-examples",link:"http://luzhaoyang.com"},{text:"nativescript-vue-examples",link:"http://luzhaoyang.com"}]}},components:{"d-player":i.default},created:function(){this.video.quality[0].url=this.url},methods:{play:function(){}},mounted:function(){}},s=(n(446),n(14)),u=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player-container"},[e("d-player",{ref:"player",attrs:{logo:this.logo,lang:this.lang,video:this.video,contextmenu:this.contextmenu},on:{play:this.play}})],1)}),[],!1,null,"281382f2",null);e.default=u.exports}}]);