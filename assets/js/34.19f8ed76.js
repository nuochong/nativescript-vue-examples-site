(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{485:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"迁移到-nativescript-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移到-nativescript-6-0"}},[t._v("#")]),t._v(" 迁移到 NativeScript 6.0")]),t._v(" "),a("Meta"),t._v(" "),a("p",[t._v("备受期待的 NativeScript 6.0 版本非常危险！此版本中的两个最大更改是对 AndroidX 的支持和捆绑（仅适用于 webpack）工作流程。两者都可能需要对现有项目进行更改。请关注此博客文章，以了解如何将应用程序代码迁移到 NativeScript 6.0。")]),t._v(" "),a("h4",{attrs:{id:"tns-迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tns-迁移"}},[t._v("#")]),t._v(" tns 迁移")]),t._v(" "),a("p",[a("code",[t._v("tns migrate")]),t._v("是一个新的 CLI 命令，旨在帮助 NativeScript 6.0 迁移过程。在现有项目中执行此命令将更新：")]),t._v(" "),a("ul",[a("li",[t._v("CLI 使用的构建配置文件（“ webpack.config.js”，“ karma.conf.js”，“ tsconfig.tns.json”）。")]),t._v(" "),a("li",[t._v("大多数插件依赖于版本，与 6.0 兼容。")])]),t._v(" "),a("p",[t._v("更新您的 NativeScript CLI 并在您的项目中执行迁移命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global nativescript@latest\ntns migrate\n")])])]),a("p",[t._v("然后，使用熟悉的命令运行该应用程序：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("tns run\n")])])]),a("p",[t._v("如果在开发工作流程中遇到问题，则可能需要更改应用程序代码以使其与 NativeScript 6.0 兼容。阅读本文的其余部分以了解操作方法。如果未提及您的问题，请在 Github 上打开一个问题。")]),t._v(" "),a("h4",{attrs:{id:"androidx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#androidx"}},[t._v("#")]),t._v(" AndroidX")]),t._v(" "),a("p",[t._v("NativeScript 6.0 支持 Android 扩展库（AndroidX）。不再支持 Android 支持库。依赖于支持库的任何应用程序和插件代码都必须开始使用 AndroidX。要了解如何迁移，请关注专门的博客文章。")]),t._v(" "),a("h4",{attrs:{id:"cli-挂钩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-挂钩"}},[t._v("#")]),t._v(" CLI 挂钩")]),t._v(" "),a("p",[t._v("NativeScript CLI 挂钩允许您自定义 CLI 命令的执行。它们被广泛用于 NativeScript 插件中。在版本 6.0 中更改了 hooks API。如果您的构建因以下错误而失败，则您可能正在使用过时的插件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Cannot "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" property X of undefined.\n")])])]),a("p",[t._v("要了解如何更新过时的挂钩，请参考本文。")]),t._v(" "),a("h4",{attrs:{id:"捆绑工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("在 6.0 版之前，NativeScript 用于支持两种构建应用程序的方式：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("tns build")]),t._v("-传统工作流，它将源代码目录（src /）的全部内容复制到已构建的应用程序中；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("tns build --bundle")]),t._v("-捆绑工作流程，它依赖于 webpack 将源代码目录（src /）捆绑为几个输出文件。")])])]),t._v(" "),a("p",[t._v("NativeScript 6.0 仅支持捆绑软件工作流程。更新项目时，您需要确保可以使用 webpack 构建它。NativeScript 团队付出了很多努力来缩小遗留工作流程和捆绑工作流程之间的差距。但是，这两种方法截然不同，它们的行为无法完全统一。在下面，您将发现它们之间最常见的区别，以及每个步骤的迁移步骤。")]),t._v(" "),a("h4",{attrs:{id:"静态资产必须手动加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资产必须手动加载"}},[t._v("#")]),t._v(" 静态资产必须手动加载")]),t._v(" "),a("h5",{attrs:{id:"项目类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目类型"}},[t._v("#")]),t._v(" 项目类型")]),t._v(" "),a("p",[t._v("所有")]),t._v(" "),a("h5",{attrs:{id:"代码样例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码样例"}},[t._v("#")]),t._v(" 代码样例")]),t._v(" "),a("p",[t._v("以下代码尝试加载本地文件-"),a("code",[t._v("/ assets/shipping.json")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CartService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShippingPrices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/assets/shipping.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"旧版工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版工作流程"}},[t._v("#")]),t._v(" 旧版工作流程")]),t._v(" "),a("p",[t._v("源目录中的所有文件都是已构建应用程序的一部分。这就是"),a("code",[t._v("/assets/shipping.json")]),t._v(" 文件将可用并成功加载的原因 。")]),t._v(" "),a("h6",{attrs:{id:"捆绑工作流程-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程-2"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("Webpack 只编译源代码中明确要求的文件或 webpack 插件包含的文件。使用默认设置时，"),a("code",[t._v("/ assets/shipping.json")]),t._v(" 将不会在生成的应用程序中，并且请求将失败。")]),t._v(" "),a("h5",{attrs:{id:"移民"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("配置"),a("code",[t._v("CopyWebpackPlugin")]),t._v("将静态资源从您的项目移至已构建的应用程序。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("env")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n…\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" glob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"assets/*.json"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" glob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fonts/**"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" glob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.jpg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" glob"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.png"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ignore"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" appResourcesFullPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/**")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"工作线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作线程"}},[t._v("#")]),t._v(" 工作线程")]),t._v(" "),a("h5",{attrs:{id:"项目类型-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目类型-2"}},[t._v("#")]),t._v(" 项目类型")]),t._v(" "),a("p",[t._v("所有")]),t._v(" "),a("h5",{attrs:{id:"移民-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民-2"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("您需要使用 nativescript-worker-loader 插件创建工作线程。确保使用下一个标签安装软件包：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nativescript-worker-loader@next --save-dev\n")])])]),a("p",[t._v("请参考文档以根据项目类型迁移代码。")]),t._v(" "),a("p",[t._v("模板和样式路径必须是相对的"),a("br"),t._v("\n项目类型"),a("br"),t._v("\n角度的")]),t._v(" "),a("p",[t._v("代码样例"),a("br"),t._v("\n请考虑位于"),a("code",[t._v("app / item / items.component.ts")]),t._v("中的以下代码，该代码使用绝对路径 templateUrl：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ns-items"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    templateUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app/item/items.component.html"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ItemsComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h5",{attrs:{id:"旧版工作流程-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版工作流程-2"}},[t._v("#")]),t._v(" 旧版工作流程")]),t._v(" "),a("p",[t._v("用于支持上述语法的旧式工作流程。")]),t._v(" "),a("h5",{attrs:{id:"捆绑工作流程-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程-3"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("捆绑软件工作流程不支持以上语法。的 templateUrl 和 styleUrls 路径相对于当前模块解决。")]),t._v(" "),a("h5",{attrs:{id:"移民-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民-3"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("将绝对路径转换为相对路径：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ns-items"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    templateUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./items.component.html"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ItemsComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("h4",{attrs:{id:"导出对象不能在-ts-项目中使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出对象不能在-ts-项目中使用"}},[t._v("#")]),t._v(" 导出对象不能在 TS 项目中使用")]),t._v(" "),a("h5",{attrs:{id:"项目类型-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目类型-3"}},[t._v("#")]),t._v(" 项目类型")]),t._v(" "),a("p",[t._v("打字稿")]),t._v(" "),a("h5",{attrs:{id:"代码样例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码样例-2"}},[t._v("#")]),t._v(" 代码样例")]),t._v(" "),a("p",[t._v("以下代码使用该"),a("code",[t._v("exports")]),t._v(" 对象导出函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onTap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hi there'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"旧版工作流程-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版工作流程-3"}},[t._v("#")]),t._v(" 旧版工作流程")]),t._v(" "),a("p",[t._v("用于支持上述语法的旧式工作流程。")]),t._v(" "),a("h5",{attrs:{id:"捆绑工作流程-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程-4"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("捆绑软件工作流程不支持以上语法。")]),t._v(" "),a("h5",{attrs:{id:"移民-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民-4"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("改用 export 关键字：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hi there'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h5",{attrs:{id:"专家提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专家提示"}},[t._v("#")]),t._v(" 专家提示")]),t._v(" "),a("p",[t._v("通过捆绑工作流程，您现在可以在所有类型的项目中使用 ES6 模块语法（导入和导出）。优先于 CommonJS（需求和导出），以帮助 webpack 消除捆绑中所有未使用的导出。")]),t._v(" "),a("h4",{attrs:{id:"dirname-和filename-的不同值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname-和filename-的不同值"}},[t._v("#")]),t._v(" "),a("strong",[t._v("dirname 和")]),t._v("filename 的不同值")]),t._v(" "),a("h5",{attrs:{id:"项目类型-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目类型-4"}},[t._v("#")]),t._v(" 项目类型")]),t._v(" "),a("p",[t._v("所有")]),t._v(" "),a("h5",{attrs:{id:"代码样例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码样例-3"}},[t._v("#")]),t._v(" 代码样例")]),t._v(" "),a("p",[t._v("考虑以下代码位于 app / nested-folder / test.ts 中：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__dirname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__filename'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"旧版工作流程-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版工作流程-4"}},[t._v("#")]),t._v(" 旧版工作流程")]),t._v(" "),a("p",[t._v("在旧版工作流程中，项目结构以前在构建的应用程序中保持不变。执行上面的代码将产生以下控制台输出：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativescript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ns5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" nested "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n__filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativescript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ns5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" nested "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" folder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"捆绑工作流程-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程-5"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("在捆绑工作流程中，已构建的应用程序打包在几个输出文件中。文件位置不保留。上面代码的输出将是：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativescript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ns6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" files "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n__filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"移民-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民-5"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("您可以使用"),a("code",[t._v("module.id")]),t._v("获取原始文件路径。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ./nested-folder/main-page.ts")]),t._v("\n")])])]),a("p",[t._v("但是，如果您要进行生产生产，"),a("code",[t._v("module.id")]),t._v("将是一个数字。要强制 webpack 继续使用文件 ID 作为模块 ID，请将"),a("code",[t._v("namedModules")]),t._v("优化属性设置为"),a("code",[t._v("true")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" env "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n…\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             namedModules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("__dirname")]),t._v("将指向包文件的绝对路径。使用"),a("code",[t._v("__dirname")]),t._v("和"),a("code",[t._v("module.id")]),t._v("您可以计算模块的原始绝对文件路径和目录。")]),t._v(" "),a("h4",{attrs:{id:"枚举值未内联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举值未内联"}},[t._v("#")]),t._v(" 枚举值未内联")]),t._v(" "),a("h5",{attrs:{id:"项目类型-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目类型-5"}},[t._v("#")]),t._v(" 项目类型")]),t._v(" "),a("p",[t._v("打字稿")]),t._v(" "),a("h5",{attrs:{id:"代码样例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码样例-4"}},[t._v("#")]),t._v(" 代码样例")]),t._v(" "),a("p",[t._v("以下代码声明一个枚举而不定义它，然后使用它：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" TestEnum "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Printing the second enum value: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TestEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h5",{attrs:{id:"旧版工作流程-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旧版工作流程-5"}},[t._v("#")]),t._v(" 旧版工作流程")]),t._v(" "),a("p",[t._v("支持以上语法。过去的工作流程曾经依靠 nativescript-dev-typescript 插件执行 TypeScript 编译。用于启动 TypeScript 编译器的插件- "),a("code",[t._v("tsc")]),t._v("。")]),t._v(" "),a("h5",{attrs:{id:"捆绑工作流程-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#捆绑工作流程-6"}},[t._v("#")]),t._v(" 捆绑工作流程")]),t._v(" "),a("p",[t._v("捆绑软件工作流程"),a("code",[t._v("ts-loader")]),t._v("在"),a("code",[t._v("transpileOnly")]),t._v("模式下使用。枚举值未内联。运行上面的代码将导致参考错误：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("ReferenceError: TestEnum is not defined\n")])])]),a("h5",{attrs:{id:"移民-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移民-6"}},[t._v("#")]),t._v(" 移民")]),t._v(" "),a("p",[t._v("您需要在"),a("code",[t._v("webpack.config.js")]),t._v("文件中修改几个设置。在“ ts-loader”的配置中，将“ transpileOnly”设置为“ false”。另外，请确保删除“ ForkTypeChecking”插件。")]),t._v(" "),a("Vssue",{attrs:{title:"nativescript-6.0-application-migration"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);