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
    "revision": "afd4e87b221987c738e2a0300cdcfff9"
  },
  {
    "url": "assets/css/0.styles.ffb504cc.css",
    "revision": "07f30b84b2d60df15c95bc689786eb43"
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
    "url": "assets/js/1.c9dccf82.js",
    "revision": "5b3686d991bea332d6a221374ab45f4d"
  },
  {
    "url": "assets/js/10.5c332fc0.js",
    "revision": "eface51d6262f0122c14728b6cefa6d1"
  },
  {
    "url": "assets/js/11.9e09d74e.js",
    "revision": "e943893b7a1dc88a074cad9000315597"
  },
  {
    "url": "assets/js/12.a6b2a896.js",
    "revision": "a7a7ffd2071a1299d1c10abdadcbd03a"
  },
  {
    "url": "assets/js/13.c099488d.js",
    "revision": "b0c3c3572f138e88481e19aca41581c1"
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
    "url": "assets/js/65.ff25f42e.js",
    "revision": "800926e57e67166ff85f2a2f38b7db6d"
  },
  {
    "url": "assets/js/66.bedd84a9.js",
    "revision": "d2c8f669e41eef9c1d87e1a827abd165"
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
    "url": "assets/js/7.5ce0128c.js",
    "revision": "1e62f942e1ce7c0dd51fb35561f31708"
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
    "url": "assets/js/8.688e025e.js",
    "revision": "065475b1d7c89bb494845e2e976c2ba5"
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
    "url": "assets/js/89.3b3b99bb.js",
    "revision": "6f9087545e7123c4101daa1428bce797"
  },
  {
    "url": "assets/js/9.fced964f.js",
    "revision": "e9ee4e1d494c77b12f397d097c27da00"
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
    "url": "assets/js/app.d2243eaa.js",
    "revision": "580bc74e155177c08734b4527f0a73db"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "b5411490ebf6eb62eb2ed15fde453774"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "d3b8ca146cb2e1902f6863a910e3bf80"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "f0233c4a7041a36b66f44a60516b04ce"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "ac2ff660ccfe0fc1af62f1117fe1678c"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "f8c5ba965ea5c13fa7566ff751dd86e2"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "7ce10d62068fad93484abc1e653704d8"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "425a8f606b38426cfcc61bd7dcb202a9"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "24828025d0076a9a0ad0f88dd6cefaa8"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "c6ee7a3f770fda8c5fc68f9e07a4e6a9"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "fb187da21a1c021f366cdc36b15a03d1"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "fea3b0bb4ca451c420e840a33c6f14b9"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "482c5fe939bcad882615715cbeb6425a"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "d5d018a127626a01255083c76e454be8"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "ab974cce8474f7d172c3f0ee7de86960"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "0547665542c0a1b076a8e9c81f454f3d"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "d2c32d574de7a25903208921ac4968d6"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "7ec0c60b0b9f250344aa2fb36f5c2464"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "966132c497c0d180b5b5d1d971a43dda"
  },
  {
    "url": "blog/template.html",
    "revision": "0e12dbb968c43bdc3a2c308e6cd02f56"
  },
  {
    "url": "blog/test.html",
    "revision": "eb7faeb55a52d0b52fff6f470b50b7de"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "64b9a60f2cef5c6efb41acde7c3ebbc9"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "79990a1a3af1ef42ab6b985987a8d45f"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "bd89cfdf0bdcd9916837d150f6737181"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "85cca2d5e3ec6e6e13fa8c0ac2c66516"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "07ad126244d296aa1e2759c2d2b3bfc7"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "12a7db006c680db1bb4768bf4709e648"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "a26141d39cd19f93315423e2e42ffeb8"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "ac7f94e634cee956345059d05afb46b6"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "6b25d58cdab1911f3a643fe4435ec16f"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "669c6bfc09529fd133de6494fbb52457"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "2a96e41db63438a688ae673d6aecb20d"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "1f6b4c6f9346ef52491aa33218603092"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "8fe127bad4638a1eb82aefce3c756256"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "4d2817a832268ad2700d03c0eb0bb5b4"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "f64d39402fc98509af5e8149d4467193"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "51bc4792751570ba39b2efc9f96e6db3"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "45bfda7ed47ef904a4abc33e0bc51257"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "a970ed8b0aa638c1f43add0bd38dbf4e"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "9610224bcc36d84cb53932d7cf7e01e3"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "cf6f8d773f75970e2e2200dc0938bc83"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "77fc4a4e3d13477afc172907684f364f"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "b769910d8112b2f4711fa6a9e0cbee8a"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "a457843bef1fcfac19d2eae59c54cf3c"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "b70e2ca2c69a8131c0ce9ea62e615a47"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "30f94b276656b4b9109f9b2371a8c3dc"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "0fc1a87b8a8c01ade46b918035a393ac"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "2b84a57e66300b86b14365081a06d1bd"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "edbd1c86a8c1f6522f9b36cea33d8833"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "f09c64a2643d80cda0e6d1ac7f75828d"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "c9e79a33ebebaa49407d46efde94362e"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "63d73a629f421d5576d5562663b2d37c"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "ae38a26b11a93a4c78b6e4a6e642100d"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "04043c0eec0bbacf4da394ff48e8daa3"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "c3a453df0e0da8caa65019c3a5ca724e"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "53551afe3839eb12a50c86fa6acb4a6f"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "ddddd5c58c44c089adba375023d751b1"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "1f275cc1bb7eda7b38971972a2bdb339"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "fb092d5e0c88c6db7f89a7f762d167f0"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "9cffd316e48a91fa3e9218c2eb4e05f6"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "3218d9555aa047bf657c13b9b18ae4dd"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "132e87b68c532bd223d4c8428c48ead8"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "feb418dc9452a6305dfc5d08c002850f"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "f2c6278664b1f73661e4ce7abce2d8ba"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "de6cb8dbc02ddded51320bc31497c66d"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "2acadecefcc20cf8d43fa2f6141e1578"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "3ae1614a38126f822c432dcd11c48671"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "0f71a3b54858699256e7ccc96b48d331"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "e1f2a5e6e6ca0226a85abf0450a79186"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "626da9571272929eb92466d575e55574"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "73710b6db40b39bacdaee69b836aab96"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "c2f66e6129db74173f25167189cd07aa"
  },
  {
    "url": "cn/introduction.html",
    "revision": "baddcca1dfe3e415ff493ce027b141f7"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "755d5bd52d935c88eb5aeafc1ae8e9cc"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "c6b9ab33f15e1296ff3b5ac0974766ed"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "deff62de38e9a6ff786dd4ddc19bab98"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "61246d099531c293ec2e4fcfa1f16812"
  },
  {
    "url": "examples/example.html",
    "revision": "d73d06b99f6ed56039963ad953c901e4"
  },
  {
    "url": "examples/project.html",
    "revision": "b51d25e84977ae0b644438febbc031d0"
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
    "revision": "cd1b30669443213bfe78fbb2cf6e4eba"
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
    "revision": "912f6b05488d384fa40108b108e65550"
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
