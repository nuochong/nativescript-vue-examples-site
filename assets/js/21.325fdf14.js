(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{474:function(a,e,t){"use strict";t.r(e);var s=t(14),_=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"快速通道自动部署-nativescript-应用程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速通道自动部署-nativescript-应用程序"}},[a._v("#")]),a._v(" 快速通道自动部署 NativeScript 应用程序")]),a._v(" "),t("Meta"),a._v(" "),t("p",[a._v("如果我不得不指出 NativeScript 开发人员原本令人兴奋的生活中最不愉快的一项任务，我会说：部署！哦，我怎么看不起他们…")]),a._v(" "),t("p",[a._v("从 Apple 的配置文件简介到日新月异的 Google Play 控制台，部署应用程序总是让人感到无聊，麻烦，并且可能浪费时间来为出色的应用程序开发出色的功能。在项目的整个生命周期中，一个应用程序可以在测试版本，测试版，错误修复和新功能之间部署数十次（如果不是数百次！）。如果有一种方法可以使部署自动进行，这样我们就可以在需要时将最新版本的应用程序交付我们的队友和用户，这不是很好吗？好吧…感谢 fastlane。")]),a._v(" "),t("p",[a._v("fastlane 是一种工具，可以自动执行 iOS 和 Android 应用程序的部署和发布。通过正确的配置，它可以用于自动化 NativeScript 部署。正如您从本文的长度可以看到的那样，设置它并非易事…但是，如果您的项目持续时间足够长，则可以节省大量时间。")]),a._v(" "),t("p",[a._v("我们将逐步介绍配置 fastlane 所需的步骤，并解释每个步骤，以便您了解如何针对项目进行调整。本文是经过数小时实验的结果，直到我达到了对我的项目有意义的配置，并且对在开发团队中管理机密性的关注程度很高。同样，请随时根据您的项目和组织进行调整。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("免责声明：在本文中，我们将假定您已经为 iOS 和 Android 确定了部署。我们没有展示如何部署应用程序，而是展示了如何自动化这些部署。")])]),a._v(" "),t("p",[a._v("作为一个例子，我们将创建一个 FASTLANE 配置称为 HubbyChef 一个示范项目。")]),a._v(" "),t("h4",{attrs:{id:"入门-fastlane"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门-fastlane"}},[a._v("#")]),a._v(" 入门 FASTLANE")]),a._v(" "),t("p",[a._v("我们将从安装 fastlane 开始，可以使用以下命令完成该操作：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("brew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" fastlane\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("有关更多安装选项和故障排除的信息，请参阅 fastlane 文档。")])]),a._v(" "),t("p",[a._v("我们无法使用 fastlane 命令 fastlane init 来开始使用，因为 NativeScript 项目文件夹结构与“常规”本机应用程序不同。相反，我们将手动创建和编辑配置文件。")]),a._v(" "),t("h4",{attrs:{id:"快速档案-fastlane-fastfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速档案-fastlane-fastfile"}},[a._v("#")]),a._v(" 快速档案（fastlane/Fastfile）")]),a._v(" "),t("p",[a._v("创建文件夹"),t("code",[a._v("fastlane/")]),a._v("和其中的文件"),t("code",[a._v("Fastfile")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" fastlane\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" fastlane/Fastfile\n")])])]),t("p",[a._v("该"),t("code",[a._v("Fastfile")]),a._v("是主 FASTLANE 配置文件。这是我们添加车道的地方。您可以将泳道视为一组任务。车道包括动作和其他车道。您也可以在平台下对车道进行分组。")]),a._v(" "),t("p",[a._v("让我们看看如何通过为我们的顶部结构创建所有东西"),t("code",[a._v("Fastfile")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fastlane_version '2.131.0'\n\ndesc 'test lane'\nlane :test do\n  print \"TEST SUCCESSFUL!\"\nend\n\nplatform :ios do\n\n desc 'Fetch certificates and provisioning profiles'\n lane :certificates do\n end\n\n desc 'Build the iOS application.'\n lane :build do\n end\n\n desc 'Ship to Testflight.'\n lane :beta do\n end\n\nend\n\nplatform :android do\n\n desc 'Build the Android application.'\n lane :build do\n end\n\n desc 'Ship to Playstore Alpha track.'\n lane :alpha do\n end\n\nend\n")])])]),t("p",[a._v("第一行（"),t("code",[a._v("fastlane_version '<x>'")]),a._v("）将确保您的队友没有使用过时的快车道版本。然后，我们创建了一个测试车道 test，只是为了查看 fastlane 是否正常工作。您可以使用命令进行测试"),t("code",[a._v("fastlane test")]),a._v("。结果应该"),t("code",[a._v("TEST SUCCESSFUL!")]),a._v("在控制台中打印出来。")]),a._v(" "),t("p",[a._v("然后，我们添加了两个平台："),t("code",[a._v("ios")]),a._v("和"),t("code",[a._v("android")]),a._v("。对于 ios 平台，我们将有车道 "),t("code",[a._v("certificates")]),a._v("，"),t("code",[a._v("build")]),a._v("和"),t("code",[a._v("beta")]),a._v("。对于"),t("code",[a._v("android")]),a._v("，车道 "),t("code",[a._v("build")]),a._v("和"),t("code",[a._v("alpha")]),a._v("。"),t("code",[a._v("desc")]),a._v("每个通道上方的 s 描述了它们将要执行的操作。稍后我们将调用这些通道有"),t("code",[a._v("fastlane <platform> <lane>")]),a._v("，例如"),t("code",[a._v("fastlane ios build")]),a._v("。")]),a._v(" "),t("p",[a._v("运行"),t("code",[a._v("fastlane lanes")]),a._v("将显示所有可用车道的摘要：")]),a._v(" "),t("p",[a._v("快车道结果")]),a._v(" "),t("p",[a._v("fastlane_lanes.png")]),a._v(" "),t("h4",{attrs:{id:"应用档案-fastlane-appfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用档案-fastlane-appfile"}},[a._v("#")]),a._v(" 应用档案（./fastlane/Appfile）")]),a._v(" "),t("p",[a._v("创建"),t("code",[a._v("Appfile")]),a._v("内部"),t("code",[a._v("fastlane")]),a._v("文件夹。该文件将存储有关该应用程序的信息，如下所示：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('app_identifier "dev.tiagoalves.hubbychef"\napple_id "tralves@tiagoalves.dev"\nteam_id "xxxxxxxxx"\n')])])]),t("h4",{attrs:{id:"env-default-env-default"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env-default-env-default"}},[a._v("#")]),a._v(" .env.default（./.env.default）")]),a._v(" "),t("p",[a._v("将密码和 API 密钥之类的机密直接存储在 fastlane 配置文件中是不安全的，因为这些文件是项目的一部分，应将其与代码一起推送到版本控制中。相反，我们将使用 dotenv 所有敏感信息并将其存储在"),t("code",[a._v(".env.default")]),a._v("文件中。只是不要忘记"),t("code",[a._v(".gitignore")]),a._v("它。")]),a._v(" "),t("p",[a._v("该文件包含一组键值条目，例如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('MATCH_PASSWORD="xxxxxxxxx"\n')])])]),t("p",[a._v("我们可以在"),t("code",[a._v("Fastfilewith")]),a._v("中使用此值"),t("code",[a._v('ENV["MATCH_PASSWORD"]')]),a._v("，但有时动作只会在后台使用这些值。")]),a._v(" "),t("h4",{attrs:{id:"的-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#的-ios"}},[a._v("#")]),a._v(" 的 iOS")]),a._v(" "),t("p",[a._v("现在，我们将从最难的部分开始构建 iOS 配置：代码签名。")]),a._v(" "),t("h4",{attrs:{id:"代码签名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码签名"}},[a._v("#")]),a._v(" 代码签名")]),a._v(" "),t("p",[a._v("请允许我继续并推荐该 match 方法。您可以在此处阅读有关此概念的所有信息，但总而言之，这 match 将为您提供帮助：")]),a._v(" "),t("ul",[t("li",[a._v("自动生成必要的证书和配置文件（无需访问 Apple 开发者帐户页面）；")]),a._v(" "),t("li",[a._v("将证书和配置文件存储在存储库（Git 或 Google 云存储）中。所有文件都将被加密作为附加的安全层；")]),a._v(" "),t("li",[a._v("易于设置，以在新计算机中部署或为新团队成员服务。"),t("code",[a._v("match")]),a._v("将负责在构建过程中安装所有内容；")]),a._v(" "),t("li",[a._v("与"),t("code",[a._v("fastlane")]),a._v("构建集成；")])]),a._v(" "),t("p",[a._v("您可以"),t("code",[a._v("match")]),a._v("在官方文档中阅读所有内容。在这里，我们将展示使其工作的基本步骤。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("提示：该"),t("code",[a._v("match")]),a._v("文档建议创建“一个新的共享 Apple Developer Portal 帐户，类似 "),t("a",{attrs:{href:"mailto:office@company.com"}},[a._v("office@company.com")]),a._v("”。这将使整个团队之间的共享访问变得更加容易。")])]),a._v(" "),t("h5",{attrs:{id:"_1-安装-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-match"}},[a._v("#")]),a._v(" 1）安装 match")]),a._v(" "),t("p",[a._v("运行命令：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("fastlane match init\n")])])]),t("p",[a._v("此命令将询问有关证书和配置文件的存储方法。我建议使用 GIT 并为证书创建一个新的私有存储库（例如"),t("code",[a._v("https://github.com/tralves/hubbychef-certs")]),a._v("）。该命令将创建文件"),t("code",[a._v("fastlane/Matchfile")]),a._v("。")]),a._v(" "),t("h5",{attrs:{id:"_2-配置-match"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-match"}},[a._v("#")]),a._v(" 2）配置 match")]),a._v(" "),t("p",[t("code",[a._v("fastlane/Matchfile")]),a._v("使用项目和 Apple 帐户信息编辑文件。这是我的"),t("code",[a._v("Matchfile")]),a._v("样子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git_url("https://github.com/tralves/hubbychef-certs")\n\nstorage_mode("git")\n\ntype("development") # The default type\n\napp_identifier("dev.tiagoalves.hubbychef")\nusername("tralves@tiagoalves.dev") # Your Apple Developer Portal username\n\nteam_id(\'xxxxxxxxxx\')\nteam_name(\'Tiago Alves\')\n')])])]),t("p",[a._v("将存储库加密密码添加到，"),t("code",[a._v(".env.default")]),a._v("这样您就不必在每次部署时都提供该密码。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('MATCH_PASSWORD="xxxxxxxxx"\n')])])]),t("h5",{attrs:{id:"_3-生成证书和配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-生成证书和配置文件"}},[a._v("#")]),a._v(" 3）生成证书和配置文件")]),a._v(" "),t("p",[a._v("现在，您可以使用生成新的证书和配置文件"),t("code",[a._v("match")]),a._v("。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("提示：在执行此步骤之前，请确保在计算机的“钥匙串访问”中删除该帐户的所有 Apple Developer 证书。"),t("code",[a._v("match")]),a._v("将创建并安装可能与现有证书冲突的新证书。")])]),a._v(" "),t("p",[a._v("为此，请运行：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("match development\nmatch appstore\n")])])]),t("p",[a._v("这将创建开发和分发证书及其各自的配置文件。它还会将它们安装在您的计算机上。如果一切顺利，您现在可以在 Xcode 中打开项目并使用新的配置文件。您还可以看到在先前创建的 GIT 存储库中提交的这些文件。像魔术！")]),a._v(" "),t("h5",{attrs:{id:"_4-配置-certificates-车道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置-certificates-车道"}},[a._v("#")]),a._v(" 4）配置 certificates 车道")]),a._v(" "),t("p",[a._v("现在，您可以配置"),t("code",[a._v("certificates")]),a._v(" 的车道在"),t("code",[a._v("Fastfile")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("desc 'Fetch certificates and provisioning profiles'\nlane :certificates do\n    match(type: 'development')\n    match(type: \"appstore\")\n    # match(type: \"adhoc\")\nend\n")])])]),t("p",[a._v("通过此通道，您可以使用安装所有证书"),t("code",[a._v("fastlane ios certificates")]),a._v("。")]),a._v(" "),t("h5",{attrs:{id:"建立步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立步骤"}},[a._v("#")]),a._v(" 建立步骤")]),a._v(" "),t("p",[a._v("有了所有证书和配置文件后，我们现在可以进行构建步骤了。在这里，我们将创建一个"),t("code",[a._v(".ipa")]),a._v("带有分发配置文件的签名，然后可以将其分发到 Testflight 或 App Store。这是我的"),t("code",[a._v("ios build")]),a._v(" 车道的样子：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('desc \'Build the iOS application.\'\nlane :build do\n    sh("tns", "prepare", "ios", "--release", "--clean", "--env.production")\n\n    match(type: "appstore")\n\n    build_app(\n      scheme: "HubbyChef",\n      workspace: \'./platforms/ios/HubbyChef.xcworkspace\',\n      export_method: "app-store"\n    )\nend\n')])])]),t("p",[a._v("此通道中的第一个操作运行命令"),t("code",[a._v("tns prepare ios --release --clean --env.production")]),a._v("，这是我们将在手动部署中键入的命令。")]),a._v(" "),t("p",[a._v("第二个操作，"),t("code",[a._v('match(type: "appstore")')]),a._v("确保已安装分发证书和配置文件，并将它们设置为在下一个操作中使用。")]),a._v(" "),t("p",[a._v("最后，该 build_app 动作会编译并签名"),t("code",[a._v(".ipa")]),a._v("。注意操作中的参数：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("scheme")]),a._v("：在 Xcode 顶部栏中显示的构建方案，通常是应用程序的名称： Xcode 方案")]),a._v(" "),t("li",[t("code",[a._v("workspace")]),a._v("：项目.xcworkspace 文件的路径；")]),a._v(" "),t("li",[t("code",[a._v("export_method")]),a._v("：导出存档的方法。在这种情况下，我们要"),t("code",[a._v("app-store")]),a._v("。"),t("br"),a._v("\n至此，我们可以"),t("code",[a._v(".ipa")]),a._v("使用以下命令生成签名：")])]),a._v(" "),t("p",[t("code",[a._v("fastlane ios build")]),t("br"),a._v("\n如果一切顺利，您应该"),t("code",[a._v(".ipa")]),a._v("在项目的根文件夹中看到。")]),a._v(" "),t("h5",{attrs:{id:"运送到-testflight"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运送到-testflight"}},[a._v("#")]),a._v(" 运送到 Testflight")]),a._v(" "),t("p",[a._v("最后一步是将其运送"),t("code",[a._v(".ipa")]),a._v("到 Testflight。看看"),t("code",[a._v("ios beta")]),a._v(" 车道：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('desc \'Ship to Testflight.\'\nlane :beta do\n    build\n\n    changelog_from_git_commits\n\n    upload_to_testflight(\n      beta_app_feedback_email: "tralves@tiagoalves.dev",\n      beta_app_description: "App for Hubbies trying to learn how to cook.",\n      demo_account_required: false,\n      distribute_external: true,\n      groups: ["beta testers"],\n      notify_external_testers: true,\n      beta_app_review_info: {\n        contact_email: "tralves@tiagoalves.dev",\n        contact_first_name: "Tiago",\n        contact_last_name: "Alves",\n        contact_phone: "+351 9xxxxxxxx",\n        demo_account_name: "",\n        demo_account_password: "",\n        notes: "<3 Thank you for reviewing!"\n      },\n    )\nend\n')])])]),t("p",[a._v("该车道通过调用启动"),t("code",[a._v("build")]),a._v(" 车道我们前面，所以我们总是有新鲜内置的应用程序发送给 Testflight 定义。")]),a._v(" "),t("p",[a._v("然后，我喜欢使用该动作 changelog_from_git_commits。默认情况下，此操作将捕获自上一个 GIT 标签以来的所有提交消息，并将它们用作将应用程序提交到 Testflight 时将使用的更改日志。这样，您的 Beta 测试人员将知道每个版本中的新增功能，并且您无需为此做任何事情（除非编写适当的提交消息…）。")]),a._v(" "),t("ol",[t("li",[a._v("上传到 testflight 的最后一个操作将是：")]),a._v(" "),t("li",[a._v("将其上传.ipa 到 App Store Connect；")]),a._v(" "),t("li",[a._v("将构建添加到 Testflight；")]),a._v(" "),t("li",[a._v("分配给所需的测试组（在这种情况下，为“ beta 测试人员”组）；")]),a._v(" "),t("li",[a._v("提交应用以供审核；")])]),a._v(" "),t("p",[a._v("如果您曾经手动执行此过程，则将使用表单域标识此操作中的参数，否则必须一遍又一遍地填写。使用此配置，您要做的就是：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fastlane ios beta\n")])])]),t("p",[a._v("您也可以使用 Fastlane 通过操作将应用程序提交到 App Store "),t("code",[a._v("upload_to_app_store")]),a._v("。您可以在这里阅读所有内容。我不会在本教程中创建该泳道，因为这不是我自己尝试的事情，因为我对此步骤拥有更多控制权。但是，它应该与 using 非常相似"),t("code",[a._v("upload_to_testflight")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"安卓系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安卓系统"}},[a._v("#")]),a._v(" 安卓系统")]),a._v(" "),t("p",[a._v("我们只有一半了！是时候创建 fastlane Android 配置了。")]),a._v(" "),t("h4",{attrs:{id:"代码签名-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码签名-2"}},[a._v("#")]),a._v(" 代码签名")]),a._v(" "),t("p",[a._v("您可能已经"),t("code",[a._v(".keystore")]),a._v("为您的项目准备了文件。如果没有，请参见此处如何创建一个。")]),a._v(" "),t("p",[a._v("我们将密钥库放入其中"),t("code",[a._v("certs/hubby-chef-prod.keystore")]),a._v("，并将其秘密添加到"),t("code",[a._v(".env.default")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('KEYSTORE_PASSWORD="xxxxxxxxxxxxx"\nKEYSTORE_ALIAS="dist"\nKEYSTORE_ALIAS_PASSWORD="xxxxxxxxxx"\n')])])]),t("h4",{attrs:{id:"建立步骤-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立步骤-2"}},[a._v("#")]),a._v(" 建立步骤")]),a._v(" "),t("p",[a._v("要构建 Android 应用，需要运行该命令的通道 tns 来创建签名的生产版本：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('desc \'Build the Android application.\'\n  lane :build do\n    sh("tns", "build", "android", "--release", "--clean", "--env.production",\n        "--key-store-path", "../certs/hubby-chef-prod.keystore",\n        "--key-store-password", ENV["KEYSTORE_PASSWORD"],\n        "--key-store-alias", ENV["KEYSTORE_ALIAS"],\n        "--key-store-alias-password", ENV["KEYSTORE_ALIAS_PASSWORD"]\n      )\nend\n')])])]),t("p",[a._v("我们完成了！现在"),t("code",[a._v("fastlane android build")]),a._v("，您可以运行，最后，您应该看到"),t("code",[a._v("app-release.apk")]),a._v("下方"),t("code",[a._v("platforms/android/app/build/outputs/apk/release/")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"运送至-play-商店-alpha-音轨"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运送至-play-商店-alpha-音轨"}},[a._v("#")]),a._v(" 运送至 Play 商店 Alpha 音轨")]),a._v(" "),t("p",[a._v("我们需要设置一个 Google Developers Service 帐户。为此，请按照以下步骤操作（或查看 fastlane 文档）：")]),a._v(" "),t("ul",[t("li",[a._v("打开 Goog​​le Play 控制台；")]),a._v(" "),t("li",[a._v("单击“设置”菜单项，然后单击“ API 访问”；")]),a._v(" "),t("li",[a._v("点击“创建服务帐户”按钮；")]),a._v(" "),t("li",[a._v("点击对话框中的“ Google Developers Console”链接，这将打开一个新的标签/窗口：")]),a._v(" "),t("li",[a._v("点击 Google Developers Console 顶部的“创建服务帐户”按钮；")]),a._v(" "),t("li",[a._v("提供服务帐户名称（例如"),t("code",[a._v("hubbychef-manager")]),a._v("）；")]),a._v(" "),t("li",[a._v("点击“创建”；")]),a._v(" "),t("li",[a._v("单击“选择角色”，然后选择“服务帐户”>“服务帐户用户”；")]),a._v(" "),t("li",[a._v("点击“继续”；")]),a._v(" "),t("li",[a._v("点击“创建密钥”；")]),a._v(" "),t("li",[a._v("选中“提供新的私钥”复选框；")]),a._v(" "),t("li",[a._v("确保选择“ JSON”作为“密钥类型”；")]),a._v(" "),t("li",[a._v("JSON 文件将被下载；")]),a._v(" "),t("li",[a._v("单击“授予访问权限”以获取新添加的服务帐户；")]),a._v(" "),t("li",[a._v("从“角色”下拉菜单中选择“发布管理器”（或“项目负责人”）；")]),a._v(" "),t("li",[a._v("点击“添加用户”关闭对话框；")])]),a._v(" "),t("p",[a._v("然后，将 JSON 文件内容复制到"),t("code",[a._v(".env.default")]),a._v("，如下所示：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('PLAYSTORE_JSON_KEY_DATA=\'\n{\n  "type": "service_account",\n  "project_id": "api-642090...",\n  "private_key_id": "11d039fd....",\n  "private_key": "-----BEGIN PRIVATE KEY-----\\nMI...",\n  "client_email": "hubbychef-manager@api-6420905...",\n  "client_id": "114219...",\n  "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n  "token_uri": "https://oauth2.googleapis.com/token",\n  "auth_provider_x509_cert_url": "https://www.googleapis...",\n  "client_x509_cert_url": "https://www.googleapis.com/..."\n}\n')])])]),t("p",[a._v("现在，我们可以在中创建车道"),t("code",[a._v("Fastfile")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("desc 'Ship to Playstore Alpha.'\n  lane :alpha do\n    build\n\n    changelog_from_git_commits\n\n    upload_to_play_store(\n      track: 'alpha',\n      track_promote_to: 'alpha',\n      json_key_data: ENV[\"PLAYSTORE_JSON_KEY_DATA\"],\n      apk: './platforms/android/app/build/outputs/apk/release/app-release.apk'\n    )\nend\n")])])]),t("p",[a._v("就像我们在 iOS 上所做的一样，我们从调用"),t("code",[a._v("build")]),a._v(" lane 开始。同样，我们将使用"),t("code",[a._v("changelog_from_git_commits")]),a._v("生成变更日志。")]),a._v(" "),t("p",[a._v("然后将构建版本发送给动作"),t("code",[a._v("upload_to_play_store")]),a._v("。在这里，我们将构建发送到“ Alpha”轨道，但是您可以将其发送到 Beta 或 Production。查看 upload_to_play_store 的文档以了解更多详细信息。")]),a._v(" "),t("h4",{attrs:{id:"工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[a._v("#")]),a._v(" 工作流程")]),a._v(" "),t("p",[a._v("请允许我用 fastlane 添加有关我的部署工作流的另一条注释。这些是我部署新版本的步骤：")]),a._v(" "),t("h5",{attrs:{id:"_1-增加中的版本package-json。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-增加中的版本package-json。"}},[a._v("#")]),a._v(" 1）增加中的版本"),t("code",[a._v("package.json")]),a._v("。")]),a._v(" "),t("p",[a._v("但是，增加版本存在问题：即使您只是部署到 Testflight，Apple 也会花数小时甚至数天的时间审查您的应用程序。我的替代方法是使用此 NativeScript 插件，该插件可让您在中添加"),t("code",[a._v("versionNumber")]),a._v("参数"),t("code",[a._v("package.json")]),a._v("。该编号将是 iOS 上的内部版本号。如果仅增加此值，则将立即批准您的应用进行测试。该插件还可以确保您"),t("code",[a._v("versionCode")]),a._v("在 Android 上获得增量。")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("警告：fastlane 操作 increment_build_number 不适用于 NativeScript 应用程序的生成流程。")])]),a._v(" "),t("h5",{attrs:{id:"_2-运行-fastlane-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行-fastlane-命令"}},[a._v("#")]),a._v(" 2）运行 fastlane 命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fastlane ios beta\nfastlane android alpha\n")])])]),t("h5",{attrs:{id:"_3-创建一个-git-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个-git-标签"}},[a._v("#")]),a._v(" 3）创建一个 git 标签")]),a._v(" "),t("p",[a._v("这样可以确保该操作"),t("code",[a._v("changelog_from_git_commits")]),a._v("仅在下次部署时捕获正确的提交。")]),a._v(" "),t("h4",{attrs:{id:"总而言之"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总而言之"}},[a._v("#")]),a._v(" 总而言之…")]),a._v(" "),t("p",[a._v("fastlane 是一个很棒的工具！在本文中，我们只是简单介绍了 fastlane 可以为您做什么。如果您想要附加到构建过程中，则可能需要采取一些措施。我说的是诸如集成自动测试，拍摄屏幕截图，bot /报告松弛，各种 CI 集成等内容。")]),a._v(" "),t("p",[a._v("我知道所有这些工作看起来都很艰巨，但这只是我弄清楚这个问题的时间的一小部分！这肯定会节省您的时间和耐心。部署将是一件轻而易举的事……您最终将需要更频繁地进行部署，从而使您的用户，队友，质量检查人员和老板更加快乐。请享用！")]),a._v(" "),t("Vssue",{attrs:{title:"automatic-nativescript-app-deployments-with-fastlane"}})],1)}),[],!1,null,null,null);e.default=_.exports}}]);