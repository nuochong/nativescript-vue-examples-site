(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{387:function(t,a,v){"use strict";v.r(a);var e=v(3),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"vue-开发人员选择-nativescript-的技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-开发人员选择-nativescript-的技巧"}},[t._v("#")]),t._v(" Vue 开发人员选择 NativeScript 的技巧")]),t._v(" "),v("Meta"),t._v(" "),v("p",[t._v("一段时间以来，我一直是 NativeScript 的“休闲”爱好者。当它最初问世时，我对此很感兴趣，但从未真正有时间深入了解该平台。直到去年下半年，当我有一个客户想要构建演示时，我才能够真正获得有关 NativeScript 的经验。我也很幸运能够使用 NativeScript-Vue。我已经使用 Vue 已有一段时间了，并且爱上了它的简单性。对我来说，这是两全其美。我在使用 NativeScript 的实践经验的同时必须使用 Vue。")]),t._v(" "),v("p",[t._v("总的来说，这是一次了不起的经历。但是，在此过程中，我遇到了一些让我感到惊讶的事情，并且我想为其他希望利用他们的 Vue 经验与 NativeScript 一起工作的人分享一些技巧。我还要补充一点，我在使用 Apache Cordova 和 Ionic 的混合移动应用程序方面拥有很多年的经验。那次经历也使我的期望更加色彩缤纷，并在此过程中带来了一些惊喜。")]),t._v(" "),v("h4",{attrs:{id:"外挂程式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#外挂程式"}},[t._v("#")]),t._v(" 外挂程式")]),t._v(" "),v("p",[t._v("Apache Cordova 项目做得很好的一件事就是定义了一组“核心”插件，这些插件可以与该项目的最新版本一起使用。这些插件包括相当常见的需求，例如相机，位置等。")]),t._v(" "),v("p",[t._v("当我刚开始从事 NativeScript-Vue 项目时，我惊讶地发现摄像头的支持并不那么稳定。需要明确的是，这可能只是我个人的看法，但是我在使用相机时经历了非常艰难的时光，我只是认为它“可以正常工作”。最终有些沮丧，所以我把沮丧变成了一篇博客文章：在 NativeScript Vue App 中使用相机。例如，我遇到了多个文档问题（我相信所有问题现在都已解决）。尽管这是在处理开源项目时遇到的一个相当普遍的问题（我们是人类，我们的自由时间有限，文档往往遭受最多的苦难），但我的期望来自科尔多瓦背景是更好的支持。")]),t._v(" "),v("p",[t._v("话虽这么说…我克服了。我一起工作。当我遇到文档问题时，我将其列为问题。展望未来，我知道 NativeScript 本身比 Cordova 更加“实用”，并且不对某些插件进行任何假设。")]),t._v(" "),v("p",[t._v("所有这些听起来似乎有些吓人，但这完全不是一个坏情况。主要我需要知道在哪里看。该 NativeScript 市场有超过一千插件选项。")]),t._v(" "),v("p",[t._v("NativeScript 市场")]),t._v(" "),v("p",[t._v("这里有很棒的搜索体验，并记下插件的列出方式：")]),t._v(" "),v("p",[t._v("插件详细信息")]),t._v(" "),v("p",[t._v("那里的那一行图标可让您快速了解该插件支持什么以及可以在其中使用什么 JavaScript 库。")]),t._v(" "),v("p",[t._v("如果所有这些图标都不太合理，请不要担心。如果将鼠标悬停在它们上面，则会得到一个很好的工具提示，告诉您它们的确切含义。从左到右，您有：")]),t._v(" "),v("ul",[v("li",[t._v("Android 支持。")]),t._v(" "),v("li",[t._v("iOS 支持。")]),t._v(" "),v("li",[t._v("Webpack 支持。")]),t._v(" "),v("li",[t._v("演示支持（即插件存储库中有演示）。")]),t._v(" "),v("li",[t._v("许可证信息。")]),t._v(" "),v("li",[t._v("“ N4”图标表示支持的最低 NativeScript 版本。")]),t._v(" "),v("li",[t._v("然后，“ N6”图标代表当前支持的 NativeScript 版本。")]),t._v(" "),v("li",[t._v("TypeScript 图标表示可以进行键入。")]),t._v(" "),v("li",[t._v("接下来的两个图标分别表示对 Angular 和 Vue 的支持。")]),t._v(" "),v("li",[t._v("右第二是代表 Travis CI 支持的图标，最后是…")]),t._v(" "),v("li",[t._v("最后一个图标表示这是受欢迎的插件。")])]),t._v(" "),v("p",[t._v("还记得我说过科尔多瓦有一套他们始终确保能正常工作的插件吗？轮到我们的 NativeScript 具有类似的“已验证”插件。（您可以在上面的屏幕快照中看到 Image Picker 插件已验证。）")]),t._v(" "),v("p",[t._v("会检查经过验证的插件是否符合多个不同的条件，包括演示示例。实际上，插件必须通过十多个不同的要求。NativeScript 的人们已经写下了这些规则以及它们背后的思想。（作为一名开发人员，我非常感激。不仅告诉我“我必须做 X”，还告诉我为什么）。")]),t._v(" "),v("p",[t._v("这就是市场，但您也可以在以下位置找到 NativeScript 插件：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.nsplugins.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("NativeScript 插件"),v("OutboundLink")],1),t._v("（"),v("a",{attrs:{href:"https://www.nsplugins.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.nsplugins.com"),v("OutboundLink")],1),t._v("）")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://plugins.nativescript.rocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugins.NativeScript.Rocks"),v("OutboundLink")],1),t._v("（"),v("a",{attrs:{href:"https://plugins.nativescript.rocks",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://plugins.nativescript.rocks"),v("OutboundLink")],1),t._v("）")])]),t._v(" "),v("h4",{attrs:{id:"路由器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由器"}},[t._v("#")]),t._v(" 路由器")]),t._v(" "),v("p",[t._v("这是又短又甜的。Vue 路由器不起作用。有一个简单的手动解决方案。而已。😀 有关更多信息，我有两篇文章可以帮助您：")]),t._v(" "),v("ul",[v("li",[t._v("使用 NativeScript-Vue 入门：第 1 集")]),t._v(" "),v("li",[t._v("使用 NativeScript-Vue 入门：第二集")])]),t._v(" "),v("h4",{attrs:{id:"javascript"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),v("p",[t._v("这真的很令人惊讶。一旦我弄清楚了，它就完全有意义了，但是起初确实让我感到惊讶。")]),t._v(" "),v("p",[t._v("好消息是，您当然可以在 NativeScript 应用程序中编写 JavaScript。坏消息是您不能编写所有惯用的 JavaScript。")]),t._v(" "),v("p",[t._v("JavaScript，但不是您所知道的…")]),t._v(" "),v("p",[t._v("那有什么不同呢？JavaScript 语法（编写代码的核心方式）可以正常工作。您想在代码中使用花哨的时髦箭头功能，继续！")]),t._v(" "),v("p",[t._v("但是功能（特定于浏览器的功能）将无法正常使用，例如"),v("code",[t._v("LocalStorage")]),t._v("和"),v("code",[t._v("IndexedDB")]),t._v("。")]),t._v(" "),v("p",[t._v("我想这有点像当您从客户端代码移至 Node 时。当然，您不能"),v("code",[t._v("IndexedDB")]),t._v("在 Node 中使用，因为那是一种浏览器技术。但是对我来说，这不是立即显而易见的。")]),t._v(" "),v("p",[t._v("通常，您不必担心，因为通常有一种可以反映您需求的解决方案。使用"),v("code",[t._v("LocalStorage")]),t._v("和"),v("code",[t._v("IndexedDB")]),t._v("作为示例，您可以在 NativeScript 应用程序中找到用于客户端存储的多种解决方案。")]),t._v(" "),v("h4",{attrs:{id:"用户界面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户界面"}},[t._v("#")]),t._v(" 用户界面")]),t._v(" "),v("p",[t._v("好的，是的，这是很大的一个。您可以将 NativeScript 的发展大致描述为：编写一些 JavaScript（您已经知道）并将其与新的 UI 语言（您不知道）结合起来。如果您看一下 NativeScript-Vue 的介绍，这里有一些不错的地方：")]),t._v(" "),v("p",[t._v("有什么收获")]),t._v(" "),v("p",[t._v("这里有两个项目。首先涉及学习 NativeScript CLI。那不是问题。我在工作中使用了大量的 CLI 工具。老实说，我无法跟踪所有信息及其工作方式，因此通常我会从"),v("code",[t._v("somecli -?")]),t._v("或 s"),v("code",[t._v("omecli -h")]),t._v("或开始，"),v("code",[t._v("somecli -wtf")]),t._v("直到再次弄清楚。")]),t._v(" "),v("p",[t._v("第二部分虽然有点笨拙。使用 NativeScript 意味着放弃 HTML 并切换到新语法。不太可怕：")]),t._v(" "),v("div",{staticClass:"language-xml extra-class"},[v("pre",{pre:!0,attrs:{class:"language-xml"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("StackLayout")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("text")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello World"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("StackLayout")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),v("p",[t._v("我敢打赌，只要阅读一下，您就能猜出会发生什么。但是您绝对不能低估这里您需要做的“心理转变”。如果您已经了解 Vue，那就太好了，您将有机会学习 NativeScript-Vue。但是一定要给您足够的时间来熟悉 UI 组件。")]),t._v(" "),v("p",[t._v("与 HTML 一样，您将使组件侧重于布局，而组件则侧重于元素（例如表单字段）。像 HTML 一样，您将拥有大量的选择和样式设置功能。")]),t._v(" "),v("p",[t._v("只是不要低估这个学习曲线。这里有一些提示可供考虑：")]),t._v(" "),v("p",[t._v("使用 NativeScript Playground 和相应的本机 Preview 应用程序。这可能很明显，但是请不要忘记，当在大型应用程序中工作并碰到 UI 砖墙时，您只需创建一个新的 Playground 应用程序即可专门测试 UI 内容。使您的代码在那里工作，然后将其带回您的应用程序。附带说明一下，它在 JavaScript 方面也适用。我经常使用 CodePen 自己快速在 Vue 中构建内容，然后将代码迁移到我的 NativeScript 应用程序中。")]),t._v(" "),v("p",[t._v("接下来，查看“ "),v("a",{attrs:{href:"https://www.nslayouts.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习 NativeScript 布局"),v("OutboundLink")],1),t._v("”。这是一个在线工具，可带您了解 UI 布局部分的一些基础知识：")]),t._v(" "),v("p",[t._v("了解 NS 布局")]),t._v(" "),v("p",[t._v("另一个很棒的工具是"),v("a",{attrs:{href:"https://www.nativescriptthemebuilder.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NativeScript Theme Builder"),v("OutboundLink")],1),t._v("，它为您提供了一个在线设计器，可以为您的应用程序设置主题。")]),t._v(" "),v("p",[t._v("主题生成器")]),t._v(" "),v("h4",{attrs:{id:"练习，练习，练习！"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#练习，练习，练习！"}},[t._v("#")]),t._v(" 练习，练习，练习！")]),t._v(" "),v("p",[t._v("希望以上技巧能帮助您为使用 NativeScript 做准备。最重要的是，您可以做的最好的事情就是练习，而 NativeScript Playground 非常适合这样做。")]),t._v(" "),v("p",[t._v("我很想听听您在学习 NativeScript 时遇到的“打 ic”-请在下面发表评论！")]),t._v(" "),v("Vssue",{attrs:{title:"tips-for-vue-developers-picking-up-nativescript"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);