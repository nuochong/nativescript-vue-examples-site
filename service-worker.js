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
    "revision": "409d60340c068a11789f1da258f3c07b"
  },
  {
    "url": "assets/css/0.styles.f434e73d.css",
    "revision": "16c133c2e7aa98d7883f9f5a89afc9a2"
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
    "url": "assets/js/10.079725ff.js",
    "revision": "d59489d125707f56f8c24a3b33c75166"
  },
  {
    "url": "assets/js/11.080e788b.js",
    "revision": "d8826c400236304f62a63ee9e9e7853b"
  },
  {
    "url": "assets/js/12.059eaff4.js",
    "revision": "ce89c8baf7e9a40b02067251376aa34b"
  },
  {
    "url": "assets/js/13.ea7c12a1.js",
    "revision": "e08f0ae6a4964a5e80779826ee516c38"
  },
  {
    "url": "assets/js/14.42e7a251.js",
    "revision": "596797c0f28ae4a3411af34532edee98"
  },
  {
    "url": "assets/js/15.127b10b4.js",
    "revision": "47e144b63e2e64b0f146c51eb4d0b728"
  },
  {
    "url": "assets/js/16.24de4722.js",
    "revision": "5dca3a4773f622f05cbad9b29f89a0ac"
  },
  {
    "url": "assets/js/17.f34cf96f.js",
    "revision": "df00e01244b0ac85aac67868bde9e713"
  },
  {
    "url": "assets/js/18.2cd49eb5.js",
    "revision": "5affd7cb73ce56f13fb94a2b4e06481e"
  },
  {
    "url": "assets/js/19.d5e22da8.js",
    "revision": "faef58c3e21cb51333355132ccd78fa4"
  },
  {
    "url": "assets/js/2.acfadc59.js",
    "revision": "4b92700a8e25884561d18ba6f60542f1"
  },
  {
    "url": "assets/js/20.9477e50c.js",
    "revision": "474aced70612ffa98cdd5d647a12c2d8"
  },
  {
    "url": "assets/js/21.0c1bbec7.js",
    "revision": "fbf1b7ece3afd9370c3ea442e8794cd7"
  },
  {
    "url": "assets/js/22.5756c26b.js",
    "revision": "0650aefeb369dea85796471e1a1a38d7"
  },
  {
    "url": "assets/js/23.08c1ea86.js",
    "revision": "1fbe78ad60721746cd118fc49df8355f"
  },
  {
    "url": "assets/js/24.58abe60c.js",
    "revision": "9dd65629dc330fffa4f3445ef45efe10"
  },
  {
    "url": "assets/js/25.fc16ca44.js",
    "revision": "14407d48b7b68f8716527559194575d2"
  },
  {
    "url": "assets/js/26.bfb9cf5f.js",
    "revision": "d26db94373c4e694581c2be375e5ac01"
  },
  {
    "url": "assets/js/27.fe4984b2.js",
    "revision": "c7c09bfd92d3457a226cf2e6ed9c4e14"
  },
  {
    "url": "assets/js/28.c89171c0.js",
    "revision": "84b2783ca371f210774623ec678ac93e"
  },
  {
    "url": "assets/js/29.5e87a99b.js",
    "revision": "f28da8be4fca96185e386660c1738714"
  },
  {
    "url": "assets/js/3.dc102add.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
  },
  {
    "url": "assets/js/30.8281ba72.js",
    "revision": "849b273d1c64600bb72d1779b0011ddc"
  },
  {
    "url": "assets/js/31.e37bca1f.js",
    "revision": "00f84748ce2f5a482e99bb0d376911b0"
  },
  {
    "url": "assets/js/32.67620748.js",
    "revision": "4e7266883b00c6a15a5f28106b48417a"
  },
  {
    "url": "assets/js/33.179218ff.js",
    "revision": "a0d38b0959f6b4d8daa3bac1b5ccba40"
  },
  {
    "url": "assets/js/34.3f8417f6.js",
    "revision": "9dcbb7f025deb3887a921b4bb163bdbd"
  },
  {
    "url": "assets/js/35.4f2b8d10.js",
    "revision": "153dcc86af23e01ea9caa541ba7b1bcd"
  },
  {
    "url": "assets/js/36.cfbb8352.js",
    "revision": "3d3f7a2aaeab9fa173842f5c7e35f65b"
  },
  {
    "url": "assets/js/37.8e6e64c0.js",
    "revision": "96cc75e7e1330bc5dac4ae74dfd6522a"
  },
  {
    "url": "assets/js/38.f662bf20.js",
    "revision": "100e2172d8f6e49abce2f9c438781732"
  },
  {
    "url": "assets/js/39.a821b4a8.js",
    "revision": "b58fca02e421727eb15a902942c6c8b1"
  },
  {
    "url": "assets/js/4.2ae09b08.js",
    "revision": "9b3ee11cfe03d73d239e351fb85531c3"
  },
  {
    "url": "assets/js/40.a3f3c61d.js",
    "revision": "ceaacb9ac7ddd8a8ede618f105672b76"
  },
  {
    "url": "assets/js/41.e8b737df.js",
    "revision": "7abf4413f298a279bc95e5c6319a4367"
  },
  {
    "url": "assets/js/42.caeff3a3.js",
    "revision": "3e495b2fe5b52fd0e1216d68aaabeedc"
  },
  {
    "url": "assets/js/43.0f910e9f.js",
    "revision": "de1f4a8f06766050581074abb7938db5"
  },
  {
    "url": "assets/js/44.2705ad05.js",
    "revision": "c7c84c4a88c9e654ed926df0cb6ac390"
  },
  {
    "url": "assets/js/45.4629121d.js",
    "revision": "be64d95c627c2aefc1f101a1b3a4d542"
  },
  {
    "url": "assets/js/46.ea421031.js",
    "revision": "6d26730527a49c76dee1d8b2b87d10b9"
  },
  {
    "url": "assets/js/47.34a886b6.js",
    "revision": "7cf65334523e6a541c660437f818165e"
  },
  {
    "url": "assets/js/48.15aa9b76.js",
    "revision": "f6c283294ec75060f3e32cf83c91ea4c"
  },
  {
    "url": "assets/js/49.a5890196.js",
    "revision": "cca6f09343fbe3dcce6123493a1c76b0"
  },
  {
    "url": "assets/js/50.ec583823.js",
    "revision": "b400a350bc2e1041df3ed0ddd278724d"
  },
  {
    "url": "assets/js/51.97a2d66f.js",
    "revision": "5914d742891a3fc6c5bc5f901e06cb46"
  },
  {
    "url": "assets/js/52.d9b7c3f6.js",
    "revision": "07609854b460e3fd7a3d75d2fe9d3eb2"
  },
  {
    "url": "assets/js/53.560f604c.js",
    "revision": "26e8ba8c015a5861625186049c35fc5e"
  },
  {
    "url": "assets/js/54.879e2d6f.js",
    "revision": "c1cb51890706cecfe66db4720da43a28"
  },
  {
    "url": "assets/js/55.ddb17e87.js",
    "revision": "895c3bb3b77e1a0de0c28c28cebea3f5"
  },
  {
    "url": "assets/js/56.bf632ad7.js",
    "revision": "bf819938a2350e67384d31c0496b269f"
  },
  {
    "url": "assets/js/57.11dece70.js",
    "revision": "a0c544c87308cf2260aed41f394090b6"
  },
  {
    "url": "assets/js/58.461280a8.js",
    "revision": "74ea1ae14d8428f4757b49dbf99996b8"
  },
  {
    "url": "assets/js/59.009e347b.js",
    "revision": "acc49d673e8187128de6a63ef3f94059"
  },
  {
    "url": "assets/js/60.93d14d52.js",
    "revision": "d047b68eebe6bf8d78305e742c37fdd8"
  },
  {
    "url": "assets/js/61.62cd3c25.js",
    "revision": "1feca96aa97b7590838c40fd078dcdfa"
  },
  {
    "url": "assets/js/62.34ea15cc.js",
    "revision": "a861d1f51f8c551c2c4dc3084ed9b3b4"
  },
  {
    "url": "assets/js/63.5a0de8d9.js",
    "revision": "cbc165e06d5ecc389f1546f741f3fa05"
  },
  {
    "url": "assets/js/64.1de23fe5.js",
    "revision": "a7d3a3c6da80c06f72ec9ccdefb6bdee"
  },
  {
    "url": "assets/js/65.33edf110.js",
    "revision": "800926e57e67166ff85f2a2f38b7db6d"
  },
  {
    "url": "assets/js/66.2cb5afb5.js",
    "revision": "d2c8f669e41eef9c1d87e1a827abd165"
  },
  {
    "url": "assets/js/67.489e24f3.js",
    "revision": "04dfa49fc38c9a7cfdffb87946ca8b76"
  },
  {
    "url": "assets/js/68.6e07ed39.js",
    "revision": "8d6f49ab154e24ec748de5148eeb4f70"
  },
  {
    "url": "assets/js/69.c3a1668c.js",
    "revision": "4d9725f4739a789b0718b6a454653f80"
  },
  {
    "url": "assets/js/7.9155efb8.js",
    "revision": "1e1a8e55c07ddad4bb380ed6ea49988b"
  },
  {
    "url": "assets/js/70.89864567.js",
    "revision": "03f53c5605fd058925be7aac48e39d38"
  },
  {
    "url": "assets/js/71.22054680.js",
    "revision": "bdd1e6c8ea19526141447878ce4bdca5"
  },
  {
    "url": "assets/js/72.52ed41eb.js",
    "revision": "b9abf86fa1809abf50e6deba4f0af929"
  },
  {
    "url": "assets/js/73.982ea02f.js",
    "revision": "682695ac925a0b6bf7f02ef39bd0c28f"
  },
  {
    "url": "assets/js/74.d5ec8351.js",
    "revision": "66b9a4c65cef4c174924d613b68bd03b"
  },
  {
    "url": "assets/js/75.58640528.js",
    "revision": "797fad9934c195d1a2d689a11e0db02d"
  },
  {
    "url": "assets/js/76.4ec80e10.js",
    "revision": "9d2a8f4d97e55c051f8e17e8c383339a"
  },
  {
    "url": "assets/js/77.3b4f8e2e.js",
    "revision": "f2a89d9774fc12f8a3f738886a74bb40"
  },
  {
    "url": "assets/js/78.b7ba7487.js",
    "revision": "0da439dd943efda94dd27ebfb3593f2b"
  },
  {
    "url": "assets/js/79.be1693c6.js",
    "revision": "c7f60df57cc2e63b051e44cd108eb5ed"
  },
  {
    "url": "assets/js/8.e0119cea.js",
    "revision": "6fc8de46ccd10846bec973f8ced4f22b"
  },
  {
    "url": "assets/js/80.270f7d4e.js",
    "revision": "cf48d958404feed38802243117d95594"
  },
  {
    "url": "assets/js/81.43033907.js",
    "revision": "8a5aab55ee7e182b7dba2e34cbd4fb2d"
  },
  {
    "url": "assets/js/82.c9715076.js",
    "revision": "7d75108ee2d4ce0e25c42a8ec70a522c"
  },
  {
    "url": "assets/js/83.2febf7ec.js",
    "revision": "af154314f49f608ac0cf482e470ad522"
  },
  {
    "url": "assets/js/84.23dd64d7.js",
    "revision": "b1f8938d1875fe37ffa2f988ce2aa7d2"
  },
  {
    "url": "assets/js/85.ddc992f4.js",
    "revision": "bc06d1847bbb79bd8d5ca575e42ae79a"
  },
  {
    "url": "assets/js/86.3810eeaf.js",
    "revision": "80b46351aa8d209151eed42bfa4ebcc0"
  },
  {
    "url": "assets/js/87.28fadcc3.js",
    "revision": "6e2b96be49fcc194a1195865eec7c479"
  },
  {
    "url": "assets/js/88.105ba031.js",
    "revision": "f78895bd69516096b27606a436060044"
  },
  {
    "url": "assets/js/89.08f298f6.js",
    "revision": "52922c72b5dbe7f35e53bf92fa3bfb13"
  },
  {
    "url": "assets/js/9.c2419ae2.js",
    "revision": "32cc537fd10f14afe623b7ed00af9e0a"
  },
  {
    "url": "assets/js/90.2a5baa7d.js",
    "revision": "8bb733c32740837e260d1c00b28ee3fa"
  },
  {
    "url": "assets/js/91.e85b4c14.js",
    "revision": "d4464d6de3dee38171e42c8a56434692"
  },
  {
    "url": "assets/js/92.07766ca6.js",
    "revision": "18379ca06b26ee251a9002d7994e8ff1"
  },
  {
    "url": "assets/js/93.08a59c6d.js",
    "revision": "5ac312f669381cbdc631cb3ad681012b"
  },
  {
    "url": "assets/js/94.29e23c0e.js",
    "revision": "9bb59221e001dc2b4178a6cc2be3ef3f"
  },
  {
    "url": "assets/js/95.4f1b53ce.js",
    "revision": "16f33f8ca26b8bd4dbbb201b2b1c7fb7"
  },
  {
    "url": "assets/js/96.bf98a8a2.js",
    "revision": "d41682eff0f78c339d3acf6e00c10898"
  },
  {
    "url": "assets/js/97.6de7388e.js",
    "revision": "68a50553c73f991d77ef6e9d091eb948"
  },
  {
    "url": "assets/js/98.913e6e8b.js",
    "revision": "4f95926a0e1f1191e77f67f321134807"
  },
  {
    "url": "assets/js/app.b521f084.js",
    "revision": "7e511ac592fbd4dc9e9d03919dc22c76"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "55fa8c36e42d88e94af3fc2d6754404e"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "25207e12f90c93b621efefa46f830dd5"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "560391e7acfa4513325ca7ec55fba152"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "ca384396be0bba252432ba721a36a7bf"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "6a4aa551af1ced6f023105e09a9be8e1"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "ecbd49fbc6171b10b21749cd8fa3ac83"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "7d80fb45634e538f9d85555ecfb032da"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "7eaf7ebd14a18a6f3962787beaf1e01b"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "2aabdca131b48ad4472634eba3ec17f5"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "02adf630ca564e71e5e4c7fa20366ea0"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "0a3f17dc96144807f35fd4f4c37cfe00"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "b1acfad2610efea2ef58c8c7ddaf1c45"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "b28530638f050d1fd8998d1833a40c8a"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "ae0c20ec527b005d99dc296c04dd3213"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "2273a6118ab22d9acd5a9a1c6e71613c"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "4cbc05035cfadeba887cadbf3b8796aa"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "49bdff92c19784e9df573f1cf48d1976"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "cfdbb4ef2eca5a98c7837af9f2bae814"
  },
  {
    "url": "blog/template.html",
    "revision": "3e166715dd23fb1543534c48bfd30ab6"
  },
  {
    "url": "blog/test.html",
    "revision": "3112b5740db816e0301ce09715e00e08"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "67119b0e3302d07a2c46920751ec0781"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "03bc0dc32772908bd1e574c5cde3ada3"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "9a5ab105aec24323580859c78c100641"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "31f55234b89ac4eba59a4252861f8eb2"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "30fd85efee50e0797b7f9498744fd54f"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "a5578a967576ec5491b5b6ea8dccf386"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "95e1efe061ca2cb735a98cf7a696a71b"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "9f55692cafe25eb9b88f93ad6f7ef62d"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "e2b453169e8980276ee15334ef3c7dd9"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "4802b04695f7d31ae8ebe2f3a9c2ce98"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "63dd269fc2a710039e3578aa4614f7f7"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "c1805052378799707cd4c1ff8599e5ba"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "510d605a6842b8376164c8b7adbe6cc3"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "7048c223808c381c0760e8a2e4cf1151"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "ab45358d8d985372c0bcca8b6fd08d5f"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "7c75a6d873e27d65d4efb89111fdcc77"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "53b236d4a858450f957c19f891bdab37"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "f48245ebbd7fa9ae4ee4ef8f7374fb16"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "9947b3fecf3db43303484b18658b326d"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "40c1ade24b5a60aad25bf5f2dd6546e4"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "de9a4701596732387ee5a9f5647d036e"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "aafce8f9579f6e07383a0077691f828d"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "ab6573f78aa1996f210fa4dfbb0dfcf1"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "874cbd0d90819650cec978320189c6e8"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "2721ead6d7b06b8ec8bfc6831a6b3b24"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "cec82148875fc007accf3a7ab8fdeea8"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "e79bc53dc0ca26ebf631de6aa42fcee1"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "106e4f5f1659cfa14940bf45ee3dac0d"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "2d85734e3268687c956dedb07100f3f9"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "a8813972e379d0238f667fee0f1005de"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "3ad7d5bdecc004a8ce63d7ab5185f535"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "06e700dae177fd8d505d33746ee6c18d"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "134c38e48338d54d2c0a3fd5f4d351aa"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "a42c9b9f8997903cad273916c4afb05e"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "aa3c46d4d048e0807289196bc818b1a8"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "14f391792a10f0254ce8cde3f8b1cce6"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "cb33327c0483c7ca7eb72a883722678a"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "e8189b2244672a3d4a2d79d81df75782"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "52846fa174309c061a3a8fdde0f596a2"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "28daa1051ee5a07e8a38daeca6a1e6ad"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "cf6de540d78d0bb41b0bbb91e7ac29b3"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "5f7d3a2a52508aff126ddbec051d22bf"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "f3b353274f5638cbd5370112902d1bda"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "b1624b49f44093eca77917440260e390"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "c85e83e37b7cdc5dd4d253ba9a3f8005"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "3a4e70c0c3cb7ac7ca2400506731241e"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "c1d7153486d44b5042162b7b3b935a1b"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "757f23e427da650835d55dce738b710e"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "295e2c0517b603c34eb01203804e1ab6"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "c84768eef7d090abc631d944c0e3244a"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "767218b6f19f616d39e5452c0ce4867a"
  },
  {
    "url": "cn/introduction.html",
    "revision": "284c2e73d10c5c04d611ae7dfd14ad6b"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "724450c0d98ca8af8d775e8848d11610"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "a2a73a186523948a11578c838d718027"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "12522f3e4c01b7eb8a02e690c1350d25"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "af77d365e3a5d79e545250d77347788f"
  },
  {
    "url": "examples/example.html",
    "revision": "bcc6fb63ec1ab6c283a564f195ca5ec2"
  },
  {
    "url": "examples/project.html",
    "revision": "653b34fd58205fc2115953559df7bae2"
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
    "revision": "13ef207442502b0dfc49f9af848d2733"
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
    "revision": "b4d96e0ef0a95cbb821b2acd05f8cd36"
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
