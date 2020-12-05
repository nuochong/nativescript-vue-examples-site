(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{540:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("插件的工作方式与 "),s("a",{attrs:{href:"https://docs.nativescript.org/plugins/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("任何其他NativeScript应用程序一样"),s("OutboundLink")],1),t._v("，但您可能想知道UI插件如何与Vue一起使用。")]),t._v(" "),s("p",[t._v("UI插件的工作方式几乎与您在Angular应用程序中使用NativeScript UI插件的方式相同。")]),t._v(" "),s("h2",{attrs:{id:"示例用法-nativescript-gradient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例用法-nativescript-gradient"}},[t._v("#")]),t._v(" 示例用法： nativescript-gradient")]),t._v(" "),s("p",[t._v("我们来看看如何使用 "),s("a",{attrs:{href:"https://github.com/EddyVerbruggen/nativescript-gradient",target:"_blank",rel:"noopener noreferrer"}},[t._v("nativescript-gradient"),s("OutboundLink")],1),t._v("。您还可以在 "),s("a",{attrs:{href:"https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("listview sample"),s("OutboundLink")],1),t._v("示例中查看其用法。")]),t._v(" "),s("h3",{attrs:{id:"使用nativescript-cli安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用nativescript-cli安装插件"}},[t._v("#")]),t._v(" 使用NativeScript CLI安装插件")]),t._v(" "),s("p",[s("a",{attrs:{href:"/en/docs/getting-started/installation"}},[t._v("在为NativeScript开发设置好你的系统")]),t._v("之后，运行以下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save nativescript-gradient\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("注意：")]),t._v(" 如果您的插件无法立即生效，则可能需要通过删除平台文件夹来清理项目：")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf platforms\n")])])]),s("h3",{attrs:{id:"在您的应用中注册插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在您的应用中注册插件"}},[t._v("#")]),t._v(" 在您的应用中注册插件")]),t._v(" "),s("p",[t._v("打开您的应用程序条目文件（类似于 "),s("code",[t._v("app.js")]),t._v(" 或 "),s("code",[t._v("main.js")]),t._v("）并在顶部添加以下行：")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gradient'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nativescript-gradient'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gradient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这需要在 "),s("code",[t._v("Vue")]),t._v(" 实例中注册插件。 "),s("code",[t._v("registerElement")]),t._v(" 函数将 "),s("code",[t._v("<Element>")]),t._v(" 的名称作为第一个参数，并将返回插件的函数作为第二个参数。按照在代码中应该调用的方式提供元素名称。提供与npm包名称完全相同的插件名称。")]),t._v(" "),s("h3",{attrs:{id:"在您的应用中使用该插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在您的应用中使用该插件"}},[t._v("#")]),t._v(" 在您的应用中使用该插件")]),t._v(" "),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Gradient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("direction")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("to right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colors")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#FF0077, red, #FF00FF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Best gradient."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("horizontalAlignment")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n         "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);