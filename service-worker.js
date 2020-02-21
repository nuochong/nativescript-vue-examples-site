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
    "revision": "bb1f3dfaab2e70734e0da7167f6cb43c"
  },
  {
    "url": "assets/css/0.styles.9ed08d78.css",
    "revision": "839784611f0dc172d5f36228f1cea63b"
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
    "url": "assets/js/12.dfee8eea.js",
    "revision": "38f9c2aee5e788a3b595119bff89b070"
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
    "url": "assets/js/17.4927fc45.js",
    "revision": "aaf3a702a3c58503991748db2480878a"
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
    "url": "assets/js/29.64496dd9.js",
    "revision": "31b1472275e386550579fa61aca1c7be"
  },
  {
    "url": "assets/js/3.46699782.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
  },
  {
    "url": "assets/js/30.b5764a51.js",
    "revision": "ebac28e086092e9c007bf523034eaddc"
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
    "url": "assets/js/43.bfd6e4b3.js",
    "revision": "de1f4a8f06766050581074abb7938db5"
  },
  {
    "url": "assets/js/44.93e1fc11.js",
    "revision": "b5f202c8082595ef450d35c6e0c1c6e7"
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
    "url": "assets/js/48.10499574.js",
    "revision": "c9c23fc766060eeb4cc6def91f5b2df6"
  },
  {
    "url": "assets/js/49.0f1d62ae.js",
    "revision": "ca88da9fad87b76fc295fdcf667b6802"
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
    "url": "assets/js/65.ff25f42e.js",
    "revision": "800926e57e67166ff85f2a2f38b7db6d"
  },
  {
    "url": "assets/js/66.1e89fab2.js",
    "revision": "3f6945f69e3901b818ee201971ed15ac"
  },
  {
    "url": "assets/js/67.2fdca980.js",
    "revision": "507ecec1ca4dc29e2c9abcbda30c20e1"
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
    "url": "assets/js/82.51d1ae90.js",
    "revision": "9fe3ff09c6db53c577076c9c5717dfe7"
  },
  {
    "url": "assets/js/83.076df85f.js",
    "revision": "c7fea33893c49c2c0d88600eb0d2f272"
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
    "url": "assets/js/89.3b3b99bb.js",
    "revision": "6f9087545e7123c4101daa1428bce797"
  },
  {
    "url": "assets/js/9.209b92f0.js",
    "revision": "d17a643bf72c9deb527b7ae39bd0a613"
  },
  {
    "url": "assets/js/90.43d78a2a.js",
    "revision": "8bb733c32740837e260d1c00b28ee3fa"
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
    "url": "assets/js/98.913e6e8b.js",
    "revision": "4f95926a0e1f1191e77f67f321134807"
  },
  {
    "url": "assets/js/app.50f8d2d7.js",
    "revision": "f5d1e60b01b24d9673e244aa51658b07"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "dd4cdd78950a259241f9bc70a8384980"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "3d2311dec433bfa1672add0c0931577a"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "f611a17b220fd1f3ec232b449616cd91"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "8823d5d86d735c51f8a22f5a45fbe126"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "21609cbf126754e7a86a8c9b4f992087"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "b85f37647136e5a6cad92293d309a386"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "2e3c6757aba55eaa60c8a0fbdca70154"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "14861be0b2e5a71dc6617a28b3692a75"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "c6e33f8bbc440d7af478b977682a0ed6"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "bb0e56a9bc1d0955cd4d30cc9b8017d0"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "945a4352fbce2bfd3c656c73d73459a4"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "cc59134e7aa2af1aef8851808f9b373c"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "7a5c3168052acb26dac5186bd4fe2934"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "a6c5e74228571bee8583e8f5f738817c"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "a881b2db76000a1eac37ff9ba5ee2e6b"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "1ea92251fe3b760e4ea8a23e0e09c39a"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "59decf9d8640a647a1085e2635cb4ae2"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "ac9dbcbc0ce2cd474474ef97b3c57f1f"
  },
  {
    "url": "blog/template.html",
    "revision": "fd03d425bf2150dbe8ff06b984492d20"
  },
  {
    "url": "blog/test.html",
    "revision": "de25a2527274d873eb328fb1142c1fd4"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "63f3cc1b2c80c903400bfc134963216f"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "c3697d22db4b5e75449fc4506760ca3b"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "65c0afb2f1fd66fc99364d313625cd06"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "f341c5f8f268e4f6c1f26c6f5b61cc42"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "d963cdbb499ba04bc806bf5d38c919d1"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "5ecba8c9e801d0f9436c468cce3ed151"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "5ed0b59cb325daebebcd7aff6f2f01df"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "0b5c536ca12f7a030e35e085e987a235"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "7c324514406073a9e938021c11048fe8"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "86dc00584d72d020b16449824fc702cc"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "eb8ea97b9a6ca9432e35412fcaa216e9"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "6d52b6b7a119bf819714fc327d76d37c"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "447fb3f067fedc04677717357113f6ba"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "9718638f93c790967ec5c9c0524bc04b"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "085de5c9fa68efa991fd8245b907da68"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "1e0648628b4eccd0ea1bf6cca06ac8b8"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "f9ce461c7ccd90cefff2f723853541ad"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "a9c5ff80a1467920e49cca6ee2e0b887"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "684ca741669b6cea8e595e9e55c7fbc9"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "010d38ed30f14ee805f2b0395ea18116"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "3be9039998af29ecf2d3424ab916bd9e"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "5f6decbd965cb52c786e45a2fc4b0917"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "cd66073bf7a5b3576455c2fcf73bae10"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "4420fb0a2b5c8a0f8f4fec70a0a61d3f"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "a6f207daff739710b137360e865a0bf2"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "42a716dbbb79869b8cb156e1767ead74"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "2df135d590df9a8d3a01de5d6f442d4c"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "2578b4be69a3a944b2d7cf542699c54d"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "037693c3725d2c3ede98610e985fbaef"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "7e9cc06aa8a2a1b504538d1b7e796f0a"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "03c8c4e48ab940d4dc8d47cfdce1ad55"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "04be9cf53fc820deedaf039c5e748ee6"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "7710c4ce48c68d0e23946c5751256534"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "6586a911733adc8f10610fa1466adafa"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "fe875cb52cd654752d928c0b39d28241"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "bc808585ae9cb027fc23229e5ae8e3a4"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "533cc96fe8b528ecab3341ed335613ad"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "e5f1cb2cc9dc6532f0376f279cdaec41"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "5230f64c6b0d2ceece710f9f6a1b5238"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "f84d34a18f821d3173aecae73b2e35d6"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "67b7e6ceaadcaf833c2ec77a0d63a664"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "3bacf3ad24053d585bd65e2109b4dd1a"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "255b72b5b32c5d0e0cc7edd2d7fa92cc"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "0b1fc16c5a5b47a33d791cb2006f0b3e"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "cc1b0fdbc9a4521c4d37bfe2856aaf4f"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "e346f0f8b84b061bc2e63cd840738bec"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "7a3a31535c6e8da6cfcc39281f5be838"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "9270b08c732e6b82ebb31b58953d9386"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "03922563d957b01d41494937b87c087e"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "2aada45b74176f454b8a3f1ab5979d93"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "d7891a49074cdf28656e7b1507fcc92e"
  },
  {
    "url": "cn/introduction.html",
    "revision": "ddc28c864490d52c3db4716b8b034cea"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "073d6133226df3c335b5d9d56e6bbd63"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "7a794521a2e613561381a570bf117555"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "532921fd53966d704279d40e49d62718"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "f4bb1e04599c1c6d9e4f42f8cee993e8"
  },
  {
    "url": "examples/example.html",
    "revision": "25bf53082c997698e93603e5c7fe6b61"
  },
  {
    "url": "examples/project.html",
    "revision": "c931d1470b1231a1c74d5e1aab36ece1"
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
    "revision": "8325a5b6a4ba0dfc9a95863d2d01077a"
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
    "revision": "7c3575b821b07607b30c5f394c5e7d86"
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
