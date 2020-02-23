/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ac3f60f60f3def99a958e5531c9def8a"
  },
  {
    "url": "assets/css/0.styles.f3cdf5ca.css",
    "revision": "dd6795dae53196dcd234d2b39579d9ea"
  },
  {
    "url": "assets/img/logo.79bf1e5d.png",
    "revision": "79bf1e5d5d999e1853e232f5c1fbe0aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6d6ab02d.js",
    "revision": "5e08c08f3e4aefad1e6a5067be67b6cf"
  },
  {
    "url": "assets/js/10.9f95fccb.js",
    "revision": "d59489d125707f56f8c24a3b33c75166"
  },
  {
    "url": "assets/js/11.9e09d74e.js",
    "revision": "e943893b7a1dc88a074cad9000315597"
  },
  {
    "url": "assets/js/12.cfd739e3.js",
    "revision": "ce89c8baf7e9a40b02067251376aa34b"
  },
  {
    "url": "assets/js/13.93269dc0.js",
    "revision": "e08f0ae6a4964a5e80779826ee516c38"
  },
  {
    "url": "assets/js/14.3f2d8894.js",
    "revision": "1c8f5790184a41567c7acaa56482407c"
  },
  {
    "url": "assets/js/15.127b10b4.js",
    "revision": "47e144b63e2e64b0f146c51eb4d0b728"
  },
  {
    "url": "assets/js/16.52f60d60.js",
    "revision": "5dca3a4773f622f05cbad9b29f89a0ac"
  },
  {
    "url": "assets/js/17.cab82d63.js",
    "revision": "697ede569f2bcf2ebef068435bce3e8f"
  },
  {
    "url": "assets/js/18.17a335eb.js",
    "revision": "c3e61cd3ee46255af39ffb942cb5f87a"
  },
  {
    "url": "assets/js/19.93da1820.js",
    "revision": "faef58c3e21cb51333355132ccd78fa4"
  },
  {
    "url": "assets/js/2.acfadc59.js",
    "revision": "4b92700a8e25884561d18ba6f60542f1"
  },
  {
    "url": "assets/js/20.c61ed7c0.js",
    "revision": "474aced70612ffa98cdd5d647a12c2d8"
  },
  {
    "url": "assets/js/21.ece46f76.js",
    "revision": "fbf1b7ece3afd9370c3ea442e8794cd7"
  },
  {
    "url": "assets/js/22.06ff84da.js",
    "revision": "0650aefeb369dea85796471e1a1a38d7"
  },
  {
    "url": "assets/js/23.f5126b3e.js",
    "revision": "1fbe78ad60721746cd118fc49df8355f"
  },
  {
    "url": "assets/js/24.dd0cb0c0.js",
    "revision": "9dd65629dc330fffa4f3445ef45efe10"
  },
  {
    "url": "assets/js/25.edbfc9c5.js",
    "revision": "14407d48b7b68f8716527559194575d2"
  },
  {
    "url": "assets/js/26.42a4f4e6.js",
    "revision": "0c023d0c7dc25147558782b3b7f70415"
  },
  {
    "url": "assets/js/27.ddf2f02a.js",
    "revision": "c7c09bfd92d3457a226cf2e6ed9c4e14"
  },
  {
    "url": "assets/js/28.709fa9a1.js",
    "revision": "84b2783ca371f210774623ec678ac93e"
  },
  {
    "url": "assets/js/29.e5afa56c.js",
    "revision": "f28da8be4fca96185e386660c1738714"
  },
  {
    "url": "assets/js/3.46699782.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
  },
  {
    "url": "assets/js/30.580db640.js",
    "revision": "849b273d1c64600bb72d1779b0011ddc"
  },
  {
    "url": "assets/js/31.a3b7af6c.js",
    "revision": "00f84748ce2f5a482e99bb0d376911b0"
  },
  {
    "url": "assets/js/32.df68cbd1.js",
    "revision": "4e7266883b00c6a15a5f28106b48417a"
  },
  {
    "url": "assets/js/33.46d8e768.js",
    "revision": "a0d38b0959f6b4d8daa3bac1b5ccba40"
  },
  {
    "url": "assets/js/34.efd417f8.js",
    "revision": "9dcbb7f025deb3887a921b4bb163bdbd"
  },
  {
    "url": "assets/js/35.efe5b523.js",
    "revision": "153dcc86af23e01ea9caa541ba7b1bcd"
  },
  {
    "url": "assets/js/36.40445d37.js",
    "revision": "3d3f7a2aaeab9fa173842f5c7e35f65b"
  },
  {
    "url": "assets/js/37.fe15b166.js",
    "revision": "96cc75e7e1330bc5dac4ae74dfd6522a"
  },
  {
    "url": "assets/js/38.9ec6832c.js",
    "revision": "100e2172d8f6e49abce2f9c438781732"
  },
  {
    "url": "assets/js/39.f18915e6.js",
    "revision": "b58fca02e421727eb15a902942c6c8b1"
  },
  {
    "url": "assets/js/4.bf9032e5.js",
    "revision": "9b3ee11cfe03d73d239e351fb85531c3"
  },
  {
    "url": "assets/js/40.4ddf2daa.js",
    "revision": "ceaacb9ac7ddd8a8ede618f105672b76"
  },
  {
    "url": "assets/js/41.9b798800.js",
    "revision": "7abf4413f298a279bc95e5c6319a4367"
  },
  {
    "url": "assets/js/42.85f7b82f.js",
    "revision": "3e495b2fe5b52fd0e1216d68aaabeedc"
  },
  {
    "url": "assets/js/43.a8f00bda.js",
    "revision": "10809514a00c19f2f172207003d16b9b"
  },
  {
    "url": "assets/js/44.a622b2db.js",
    "revision": "8cf17b1da6d6248645074be003602d8e"
  },
  {
    "url": "assets/js/45.6871f652.js",
    "revision": "3d0924f88acd076e853d3256ad0229e6"
  },
  {
    "url": "assets/js/46.fc2c4efa.js",
    "revision": "6d26730527a49c76dee1d8b2b87d10b9"
  },
  {
    "url": "assets/js/47.744e3b24.js",
    "revision": "7cf65334523e6a541c660437f818165e"
  },
  {
    "url": "assets/js/48.ef8a504e.js",
    "revision": "f6c283294ec75060f3e32cf83c91ea4c"
  },
  {
    "url": "assets/js/49.7a2f97b6.js",
    "revision": "cca6f09343fbe3dcce6123493a1c76b0"
  },
  {
    "url": "assets/js/50.55d461f3.js",
    "revision": "b400a350bc2e1041df3ed0ddd278724d"
  },
  {
    "url": "assets/js/51.aca9f5fd.js",
    "revision": "5914d742891a3fc6c5bc5f901e06cb46"
  },
  {
    "url": "assets/js/52.bac4ab8a.js",
    "revision": "07609854b460e3fd7a3d75d2fe9d3eb2"
  },
  {
    "url": "assets/js/53.587a7f29.js",
    "revision": "26e8ba8c015a5861625186049c35fc5e"
  },
  {
    "url": "assets/js/54.499056a1.js",
    "revision": "c1cb51890706cecfe66db4720da43a28"
  },
  {
    "url": "assets/js/55.7b65804d.js",
    "revision": "895c3bb3b77e1a0de0c28c28cebea3f5"
  },
  {
    "url": "assets/js/56.6f011bd0.js",
    "revision": "bf819938a2350e67384d31c0496b269f"
  },
  {
    "url": "assets/js/57.e286d6ee.js",
    "revision": "a0c544c87308cf2260aed41f394090b6"
  },
  {
    "url": "assets/js/58.578e7e69.js",
    "revision": "74ea1ae14d8428f4757b49dbf99996b8"
  },
  {
    "url": "assets/js/59.14063555.js",
    "revision": "acc49d673e8187128de6a63ef3f94059"
  },
  {
    "url": "assets/js/60.345279e1.js",
    "revision": "d047b68eebe6bf8d78305e742c37fdd8"
  },
  {
    "url": "assets/js/61.6b051706.js",
    "revision": "1feca96aa97b7590838c40fd078dcdfa"
  },
  {
    "url": "assets/js/62.daa04753.js",
    "revision": "a861d1f51f8c551c2c4dc3084ed9b3b4"
  },
  {
    "url": "assets/js/63.ad951f3d.js",
    "revision": "e8b46076fd3f3f22a4b5df791fdde407"
  },
  {
    "url": "assets/js/64.04b33609.js",
    "revision": "8694bbe7ed41ba4bc31a2b489c4ef3f8"
  },
  {
    "url": "assets/js/65.0ded6326.js",
    "revision": "cc88eaaf29c35de1448d854d8c5aa6a8"
  },
  {
    "url": "assets/js/66.a72c4e88.js",
    "revision": "a4b6d6aed1c9f1b2ee4ba21f92480952"
  },
  {
    "url": "assets/js/67.288d74c2.js",
    "revision": "04dfa49fc38c9a7cfdffb87946ca8b76"
  },
  {
    "url": "assets/js/68.faf46580.js",
    "revision": "8d6f49ab154e24ec748de5148eeb4f70"
  },
  {
    "url": "assets/js/69.a8880db0.js",
    "revision": "4d9725f4739a789b0718b6a454653f80"
  },
  {
    "url": "assets/js/7.b116b6c9.js",
    "revision": "a0a621a647cb4f962a0d650978ab74a8"
  },
  {
    "url": "assets/js/70.b4eac6b9.js",
    "revision": "03f53c5605fd058925be7aac48e39d38"
  },
  {
    "url": "assets/js/71.e4286075.js",
    "revision": "bdd1e6c8ea19526141447878ce4bdca5"
  },
  {
    "url": "assets/js/72.7bd8a4bb.js",
    "revision": "b9abf86fa1809abf50e6deba4f0af929"
  },
  {
    "url": "assets/js/73.d7321f93.js",
    "revision": "682695ac925a0b6bf7f02ef39bd0c28f"
  },
  {
    "url": "assets/js/74.4d061fe3.js",
    "revision": "66b9a4c65cef4c174924d613b68bd03b"
  },
  {
    "url": "assets/js/75.4f9b6d2d.js",
    "revision": "797fad9934c195d1a2d689a11e0db02d"
  },
  {
    "url": "assets/js/76.b03f871f.js",
    "revision": "9d2a8f4d97e55c051f8e17e8c383339a"
  },
  {
    "url": "assets/js/77.e4388378.js",
    "revision": "f2a89d9774fc12f8a3f738886a74bb40"
  },
  {
    "url": "assets/js/78.ec81b42e.js",
    "revision": "0da439dd943efda94dd27ebfb3593f2b"
  },
  {
    "url": "assets/js/79.89348746.js",
    "revision": "c7f60df57cc2e63b051e44cd108eb5ed"
  },
  {
    "url": "assets/js/8.bb97f031.js",
    "revision": "6fc8de46ccd10846bec973f8ced4f22b"
  },
  {
    "url": "assets/js/80.424e1d7c.js",
    "revision": "cf48d958404feed38802243117d95594"
  },
  {
    "url": "assets/js/81.89df361d.js",
    "revision": "8a5aab55ee7e182b7dba2e34cbd4fb2d"
  },
  {
    "url": "assets/js/82.a5f660f9.js",
    "revision": "7d75108ee2d4ce0e25c42a8ec70a522c"
  },
  {
    "url": "assets/js/83.658f20ba.js",
    "revision": "af154314f49f608ac0cf482e470ad522"
  },
  {
    "url": "assets/js/84.43d61508.js",
    "revision": "7a099dfabdd03b611d8669f24dc406da"
  },
  {
    "url": "assets/js/85.09243455.js",
    "revision": "bc06d1847bbb79bd8d5ca575e42ae79a"
  },
  {
    "url": "assets/js/86.c9643910.js",
    "revision": "80b46351aa8d209151eed42bfa4ebcc0"
  },
  {
    "url": "assets/js/87.52062a32.js",
    "revision": "6e2b96be49fcc194a1195865eec7c479"
  },
  {
    "url": "assets/js/88.e50773c3.js",
    "revision": "f78895bd69516096b27606a436060044"
  },
  {
    "url": "assets/js/89.06bb58d2.js",
    "revision": "def559106f9d8f78245d0f784c46520f"
  },
  {
    "url": "assets/js/9.b032577a.js",
    "revision": "32cc537fd10f14afe623b7ed00af9e0a"
  },
  {
    "url": "assets/js/90.76e453b3.js",
    "revision": "ec2eee934aba6625fbbd71bf01966d14"
  },
  {
    "url": "assets/js/91.51154ca8.js",
    "revision": "d4464d6de3dee38171e42c8a56434692"
  },
  {
    "url": "assets/js/92.51b32238.js",
    "revision": "18379ca06b26ee251a9002d7994e8ff1"
  },
  {
    "url": "assets/js/93.799aa274.js",
    "revision": "5ac312f669381cbdc631cb3ad681012b"
  },
  {
    "url": "assets/js/94.e197194d.js",
    "revision": "9bb59221e001dc2b4178a6cc2be3ef3f"
  },
  {
    "url": "assets/js/95.ccd46102.js",
    "revision": "16f33f8ca26b8bd4dbbb201b2b1c7fb7"
  },
  {
    "url": "assets/js/96.62cf534d.js",
    "revision": "d41682eff0f78c339d3acf6e00c10898"
  },
  {
    "url": "assets/js/97.a5314fbc.js",
    "revision": "68a50553c73f991d77ef6e9d091eb948"
  },
  {
    "url": "assets/js/98.60303794.js",
    "revision": "dfe957aaf4e0129b1de4ee1c74b729a1"
  },
  {
    "url": "assets/js/app.e6608575.js",
    "revision": "335bbc8968f8b1c89aa184fb22c254e4"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "1b9e09fcd3cc84b39d1b44a0ffcb7780"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "fe60856d4b20a742125f746ab1f95ca1"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "bb4ad3094d2efaf4c5c36b4582d8735a"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "998b202188c577430bf4c0c6ba9f8cd1"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "0a0051d4d9e83d4c28155e45b6eae7ef"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "c9f45206a8bde27de3f89093c5feaf1b"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "36377d5b14947b6698b6fac96649b04e"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "32699b5bdd4a5c615cc7d93dd7182010"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "734e20734f2b0231ae665e4cb692b664"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "1efd7185455ef8474a7e60bcf37b0008"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "d8fb6439a9b7f07cb2e353997c3c027a"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "5a9a27e8d8f6e0249b3d02e2f4ba6bbc"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "7a465b8363870237bc7309a4dc134b42"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "152869d0021b2e56b3a230b9cdd02cdd"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "ad7a9eab53578f69163747f4c69e3a35"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "458b67a123cbcd23d7f89c84c7ad3457"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "267ff2aa48fd88d04f9f6f84ba3d5b35"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "477f71aeb385fd16b635e58a0039da8a"
  },
  {
    "url": "blog/template.html",
    "revision": "4e7344e50416d50f6ed034134c5a8355"
  },
  {
    "url": "blog/test.html",
    "revision": "079614fa0a6892f43c54b4a3dfdd88b1"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "ae2c472fa5b28d476e7a68fd8e4d5a9c"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "b911553442e657d2dc906a30dc86350a"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "be0c56df7b139ef1890032dbae1fd435"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "8a0738c61129a1863e68a28d1c142bb1"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "0111f53f97a81f86bf349df292e8451a"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "6ecd90e99b6c8a261fa9271ec3e2fe98"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "5e3c187b9b6680451d99cec202f1d340"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "3b0dc5a4c8b7fb99ba7966f34cadff6a"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "a29c80133ce2d8060595f70e6955baca"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "ee13b7288623ba29b24a7b4c8c0c602d"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "24e906548cd8c9178a48dc1c26f08481"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "ae191be6cdec445ac7818b82cf955e70"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "ff826d74d426dbf18598d5fed2326344"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "68f850048135a427ae9c2f52c3f05662"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "705637d7fe70784ca8171b7a75c1e5f6"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "e5b04a56019a56cb61e462bb34986616"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "7e464f34cf3122e70a33dec0e89a3395"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "a824612aa1f679008d3bb21de90b61c8"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "054bf2588768ad4734f54f4f861f88e8"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "f73c6a569f5e7f8fe73c01f947bf0f13"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "5d8b721ff63e3d5bfa3cf67a3069bfbf"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "e2aabe663e8b214f6ddee32792702c9a"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "424038f4298077a37e65d0a41ef6284d"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "dddd9908993ff918a22966cf7d4cde57"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "8634b4ae5cb03451c45a0d8a44523578"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "b24bcbf16ef44e8b4472d5aab8d15211"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "dab93cd8a1994bf83c2e5e98c9036bcf"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "f70813d9e6db2089c9ccc042d622ccac"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "11dd06f8931ab70b69c91c4a5592ed1a"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "79c4b4528f7e422413a24ba56fca125d"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "c57c41891aade1377add3f0582dccad1"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "1145e8958923329500e59ae930f66965"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "5f1bc61a4a74c5faf2016f7ebe2ae357"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "62d791b1846f9658cd77035edd7c3de8"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "22e1eeea4789e768e70420bf0c6a30d9"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "c2e581a7bcc5a0fa3725ecb8611997e3"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "34d8835cfc75c54ceb6d5135cbe03b57"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "744c03e1b67b416d6886644b69d9b447"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "62b6539d140b54c28851d457a583077d"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "e794935dff674cd8deee6f6ba4cc13c5"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "fe1cd249fbff9421c6e6fb1794fcb1f5"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "ca95fc0ea28f8ac0e42f64fcf4da4eec"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "271468dd5da38294279b267b0b716e74"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "313ba29bbcdd1de4c1da8d3ae814f925"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "7b99c2066c5fd8af610936fb81c6e258"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "7eeb7d3aec4102820f0d18c9808ab233"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "7bdd738a3031899b5c9e62bc671237d5"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "900bd35482655bbafa57ed596988b042"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "1fba93fe55fdf358195442827480269e"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "1e04aaab81d44521034f93126511a357"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "9f74327760d12f5f731e282afd716064"
  },
  {
    "url": "cn/introduction.html",
    "revision": "f24f85631ce9733621083825a340039b"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "e0a46291331fdc157fe5cb871bb7766e"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "1c328651b6781fb9524b3ba6be1f5c87"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "4d2882435f827f25bec3ef4f5cf851b0"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "150a263a46b48dc1163a1cf7b09fe654"
  },
  {
    "url": "examples/example.html",
    "revision": "9b2162cb2f214c6993510c3fe4a8531f"
  },
  {
    "url": "examples/project.html",
    "revision": "f4d11d0a604ea476c95ce89ef193cbc7"
  },
  {
    "url": "img/blog/adding-objective-c-code-to-a-nativescript-app/drag-js.gif",
    "revision": "55c95baebd3974e39e4163523f429756"
  },
  {
    "url": "img/blog/adding-objective-c-code-to-a-nativescript-app/drag-native.gif",
    "revision": "201be3cbafa01bf74a07c430be8ec62d"
  },
  {
    "url": "img/blog/fastlane_lanes.png",
    "revision": "bbc21ad298c1bcbafced7b823dfbce48"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/app-performance.png",
    "revision": "cd51adbc8b323047247d24132aad98da"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/code-android-api.png",
    "revision": "f31476cd77427dce2148a3e31a3176cd"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/code-ios-api.png",
    "revision": "1c19a4332dd1348a993e72efb1255fc2"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/frameworks4686672a7b776b26a649ff04000922f2.png",
    "revision": "4bef0cfa5ae2c22edf69cb7b687804a1"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/multiple-devices9f85672a7b776b26a649ff04000922f2.png",
    "revision": "8f565fc4c37b749c6448f29d684a06b2"
  },
  {
    "url": "img/blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development/pnp.png",
    "revision": "246089cc08139a6407f9e4fbd94cf948"
  },
  {
    "url": "img/blog/nativescript-azure-text-analytics.gif",
    "revision": "2b89dc782690db7d9641103a53495a63"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "1d004e6c2dfd86f3b1ec9bc8e54ae888"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "fa9152718da19976fdcce0d553c59ef7"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "ce6ae0fdc53e02663f93f42cf3a59625"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "e2c6e64a18a52e19886c59af633ca62f"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "57134910c0fb9a4d30dd998ba1c4ebbf"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "0280d5fb23885fabacf83eeca4b69258"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "be5ecd22282de1977e0e21d1bb3d3f5a"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "57134910c0fb9a4d30dd998ba1c4ebbf"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "e4dedb2e57e4fb891b791dd5fedabd55"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "e5db8367b855a9c3835e09cad553da20"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "b70b29f9e4bd249d0edb202dead40a8f"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "636b9cf9bdd10da8a6c809a9b296d070"
  },
  {
    "url": "index.html",
    "revision": "f6f9b0d8d97a6c19ae49c3ea7cb7f24f"
  },
  {
    "url": "logo.png",
    "revision": "79bf1e5d5d999e1853e232f5c1fbe0aa"
  },
  {
    "url": "screenshots/ns-playground/active-task-dialog.jpg",
    "revision": "1ab5dabb42d72c1571399782ac684776"
  },
  {
    "url": "screenshots/ns-playground/added-tasks.jpg",
    "revision": "6e5314a1dcd34cfb0dfeaffc880c05af"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks-2.jpg",
    "revision": "91960dc728632327f57c8a19a4bcad4f"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks-dialog.jpg",
    "revision": "e70db2dced06bc7b2ba853d6a442beae"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks-moved-to-active.jpg",
    "revision": "23208603dbfc265a874d5295d49e8091"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks-styled.jpg",
    "revision": "b5a44dd423bb24d9234a8e10871367b7"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks-unstyled.jpg",
    "revision": "9d38464e30398cecf4829fbb058416d4"
  },
  {
    "url": "screenshots/ns-playground/completed-tasks.jpg",
    "revision": "a805105a1b3bce3a422b449833e91163"
  },
  {
    "url": "screenshots/ns-playground/input-field.jpg",
    "revision": "5f6dbbc216e93c9c2dbca1b6e5c43fc4"
  },
  {
    "url": "screenshots/ns-playground/playground-component-search.gif",
    "revision": "562aafde1d7c1ca36c3342a526a53e57"
  },
  {
    "url": "screenshots/ns-playground/playground-drag-and-drop.gif",
    "revision": "8fd24d13c9e9d194f92197927b0ad133"
  },
  {
    "url": "screenshots/ns-playground/playground-home.png",
    "revision": "2f238a9b37aee54c61a5fa9676f69a55"
  },
  {
    "url": "screenshots/ns-playground/playground-layout.png",
    "revision": "68bd4d9524af8d80cf6d4f5e0c358d8c"
  },
  {
    "url": "screenshots/ns-playground/playground-preview.gif",
    "revision": "8b559f69a45795a8866e700df37473da"
  },
  {
    "url": "screenshots/ns-playground/styled-button.jpg",
    "revision": "5635c7315632821f8b99832b19587fb7"
  },
  {
    "url": "screenshots/ns-playground/styled-input.jpg",
    "revision": "2e786f03838c87ae3c91f4869439cef7"
  },
  {
    "url": "screenshots/ns-playground/styled-list-view-added-tasks.jpg",
    "revision": "5abe71207c0154af04e39afac6c2336a"
  },
  {
    "url": "screenshots/ns-playground/styled-list-view-no-separator.jpg",
    "revision": "ad75f78feffdfa73dccd64255c900f4c"
  },
  {
    "url": "screenshots/ns-playground/styled-tabs.jpg",
    "revision": "f414957e6b3f0c8b823e51c21696ae95"
  },
  {
    "url": "screenshots/ns-playground/two-tabs-start.jpg",
    "revision": "1dc8de750ff543f6a93489351fd84b0a"
  },
  {
    "url": "screenshots/ns-playground/two-tabs-tab-1.jpg",
    "revision": "43d82985a73ea9ebae7bf3819589c4ad"
  },
  {
    "url": "screenshots/ns-playground/two-tabs-tab-2.jpg",
    "revision": "e932eb006ab809944438ddf9720d5f49"
  },
  {
    "url": "screenshots/old-new-folder-structure.png",
    "revision": "4d1bc672b3db708c255d51c0b21ebbe0"
  },
  {
    "url": "tools/nativescript-vue-extend.html",
    "revision": "fb06d6b1f445d4bbe85bd9610573f20a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
