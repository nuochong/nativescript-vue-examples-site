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
    "revision": "33689b72637754f5a5cfd37943a3f327"
  },
  {
    "url": "assets/css/0.styles.e8338f9e.css",
    "revision": "7779e4f497b35ae99e34106e9c0812d7"
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
    "url": "assets/js/12.d4ea1e91.js",
    "revision": "38f9c2aee5e788a3b595119bff89b070"
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
    "url": "assets/js/17.e7de0a8c.js",
    "revision": "71f2741d26ce37970f57375f2e6790f1"
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
    "url": "assets/js/24.6314b55b.js",
    "revision": "d10b2934d7111d46a1e1c07c73ca4a84"
  },
  {
    "url": "assets/js/25.06b62b61.js",
    "revision": "1d3f4543ef6a9f7651bedfd293334914"
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
    "url": "assets/js/29.037f47f5.js",
    "revision": "31b1472275e386550579fa61aca1c7be"
  },
  {
    "url": "assets/js/3.dc102add.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
  },
  {
    "url": "assets/js/30.b7663414.js",
    "revision": "ebac28e086092e9c007bf523034eaddc"
  },
  {
    "url": "assets/js/31.e37bca1f.js",
    "revision": "00f84748ce2f5a482e99bb0d376911b0"
  },
  {
    "url": "assets/js/32.e486b85b.js",
    "revision": "91b88c01dea500f569459419ef835ed2"
  },
  {
    "url": "assets/js/33.179218ff.js",
    "revision": "a0d38b0959f6b4d8daa3bac1b5ccba40"
  },
  {
    "url": "assets/js/34.cb6d224f.js",
    "revision": "09c20d0cdba2cfad1c67baa0472198cb"
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
    "url": "assets/js/43.707844a7.js",
    "revision": "10809514a00c19f2f172207003d16b9b"
  },
  {
    "url": "assets/js/44.b8f1225d.js",
    "revision": "8cf17b1da6d6248645074be003602d8e"
  },
  {
    "url": "assets/js/45.38920c49.js",
    "revision": "3d0924f88acd076e853d3256ad0229e6"
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
    "url": "assets/js/56.be3c2ba2.js",
    "revision": "958d77163ecfa262097ed1e0faf0e338"
  },
  {
    "url": "assets/js/57.604b92ac.js",
    "revision": "753fd5cc9bc43939edcd0b793ce8407c"
  },
  {
    "url": "assets/js/58.461280a8.js",
    "revision": "74ea1ae14d8428f4757b49dbf99996b8"
  },
  {
    "url": "assets/js/59.334cb2f4.js",
    "revision": "d6dd293d32cbcb884dfcc58a5d94f837"
  },
  {
    "url": "assets/js/60.53deed2b.js",
    "revision": "1fee7fc737f9e1f2c900da86147927f8"
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
    "url": "assets/js/63.1ac46155.js",
    "revision": "e8b46076fd3f3f22a4b5df791fdde407"
  },
  {
    "url": "assets/js/64.7cbf0e67.js",
    "revision": "8694bbe7ed41ba4bc31a2b489c4ef3f8"
  },
  {
    "url": "assets/js/65.51956134.js",
    "revision": "cc88eaaf29c35de1448d854d8c5aa6a8"
  },
  {
    "url": "assets/js/66.72b03510.js",
    "revision": "a4b6d6aed1c9f1b2ee4ba21f92480952"
  },
  {
    "url": "assets/js/67.489e24f3.js",
    "revision": "04dfa49fc38c9a7cfdffb87946ca8b76"
  },
  {
    "url": "assets/js/68.a0216481.js",
    "revision": "1d8eafe6d03d636740a274c5b1491083"
  },
  {
    "url": "assets/js/69.ce241d13.js",
    "revision": "3b4347082630334b1702cf4d6d4215af"
  },
  {
    "url": "assets/js/7.9155efb8.js",
    "revision": "1e1a8e55c07ddad4bb380ed6ea49988b"
  },
  {
    "url": "assets/js/70.ca821fdd.js",
    "revision": "8c21935e8806049deec0ad1ca6b6c3c4"
  },
  {
    "url": "assets/js/71.e4486956.js",
    "revision": "f75790748da945545171d5b983175e83"
  },
  {
    "url": "assets/js/72.ead4f255.js",
    "revision": "f7fff5f2b50e18297b77c759ee7ab005"
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
    "url": "assets/js/9.7e9f28f2.js",
    "revision": "d17a643bf72c9deb527b7ae39bd0a613"
  },
  {
    "url": "assets/js/90.8307e4e4.js",
    "revision": "902aa15a1670a4c84e31aaf427657e3f"
  },
  {
    "url": "assets/js/91.5fe2d943.js",
    "revision": "5153e243e9c4f190a8d119a6557f90c6"
  },
  {
    "url": "assets/js/92.07766ca6.js",
    "revision": "18379ca06b26ee251a9002d7994e8ff1"
  },
  {
    "url": "assets/js/93.7e1dee85.js",
    "revision": "5779bdaf4b090495bfb1f7f946f188fd"
  },
  {
    "url": "assets/js/94.e7287039.js",
    "revision": "95e1f4d893081104eaaaa820af9f2b4a"
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
    "url": "assets/js/app.4021dfd4.js",
    "revision": "9a15735dbbdbf61656eba9bf9c4af09b"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "e4fe8e3251835c5c20ea0ce28e8fdf4a"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "49703c56c3b3383a86d98d4367fa4de7"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "2e4eb28955716faa2cc50c57fffb8084"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "bf6ad36819671cefa842645c092ee6a1"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "6fe3284a82ef496ce5a790ce2c3b67cf"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "18bcafce7fa3791fae56d9a42dee3016"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "aa19bdf1b0fd823c669d5b1358012918"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "2c91b8f7028eddd6635447ffa2dd007c"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "bbc9d03d77a244d37e253a0c5c005cdd"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "719c41d14f58a72b92ffd67b306e9908"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "4079923c88fe30b1a0efd33f0118ddfb"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "0dc4f8e0b2effef20ce8899acd419fd2"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "26b06ec2e9c96d5659ddafe58356909f"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "4640ca65ab4e462805ccae97f892a4fe"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "6d981249665620c61d6477853ca929b6"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "63e354848feadda5bc2e0c9c77708f2c"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "9449367806671acb92ec4c0e39fc6cbb"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "76a3bcd511d27d6a92261e0f2c546f93"
  },
  {
    "url": "blog/template.html",
    "revision": "2258bdd85d7b8b75f28131b954cf871a"
  },
  {
    "url": "blog/test.html",
    "revision": "ec7830f58a7a84aa7075ad47b285147e"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "2ff8edb4c8401bd280910f2669c5479c"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "c39fa121732fcdfb40847bee40c8644b"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "b4fa895cae0f2a69a16a55cb5b8e5272"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "06490ab156e0efbd2744fae50c51ff69"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "cb96c412e80e932087b7c23d18207f8b"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "5f1e2b26efdc62fda2b22ccb6ad5f0bf"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "67bbc7e8dfaa215251a0d16673761a1c"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "c07b613903d5bea2518ce040578bbd6f"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "85aeef44b0a1909c4084059ebef4fd50"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "a8118493a42ba76bfeeba666219ac0b0"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "8e303edf5ac1ecc6b6cb715a2967f6e2"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "3db923cc6c4375817a3748a8ca52f862"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "7f94b8b9a544ecc4ded77c9e0d9e8d42"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "304bdee2806443de8d380148405ada8a"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "5382e72b16a3f53960c2e3df1ce5a004"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "1e085c89508c79a30bcfad4425da4e01"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "c9ca4ef696e28bfe687e80a1ad4a173b"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "08401472f8f96df97e4297a7c0b4d268"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "050462de6a291fd4cc83133f55c58805"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "38866c400eb1eedc7415c2a75fca5ceb"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "7daa50ecd3cdeed9640203916fedb08c"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "5d1eab9f511925b3e1eefcd6d1aa8ecd"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "032347ab1d2cd13647a47ae817543074"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "7aeffc8294abd38f282a62658f9aaff8"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "1e93008f4cc63650f44bf511c6470be8"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "527e9e243725a218917c6578588db81a"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "e6eb1c0f45bc84743ccafffabd81ca42"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "95f04b006e66b701929ede03dafd2924"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "a73494fab3ad94ba62e8726a3d3a498d"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "61c907641ca3742d3c881f542f615032"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "c787880bc10cdae17f239179567c932e"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "313f5953f700913fb3dc456a074456d8"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "e9c62c7dff0ea27b8fd82da483653269"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "2ab8156f41d29efc8952f6d8c06db516"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "c78ac490cc41292fabda60d5a197ae26"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "e1c8096484ee786342762f7291100f49"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "f22f4c8e2c06ed148f9b4822da88e4e9"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "4dbe1c536a0036056c60726dc9ce74c2"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "672017f7809e8cc01a0ee0c9e845a7ff"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "f42bdd321144f31fa7a7375d8452016f"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "6a9da74f5eb0ec201a3a2905a595ef23"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "807d405d122e3f19e440f84a3fccd52a"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "06db393ce1215aa8eb6a3554482ee440"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "de0a15b206580b1328e6cd0dfa35fb1f"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "236c7f0e298a429f1aa21cbf870ffda7"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "b049bc257cd4a0a3990d59d31392db04"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "a2c97bac39fba6680a942c779f677da8"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "b409e5e4474bd39f406bb1414266c0d2"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "bf2538a3c1a4319a14c4ebb3c4c5a8fd"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "25f8295fd520cd540f3f2570a41f1505"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "47b22dceecbf049406e733cc30c59477"
  },
  {
    "url": "cn/introduction.html",
    "revision": "21509421419c0054b3cd72875de813bf"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "cf8142a5a39e9a0e6a413726bd2baf73"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "b8db85a81577e09de6cc985ada8fee05"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "f143142d32d3651484a364fbb3e451ac"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "afaf63b0f91849c136635e56372ccb8c"
  },
  {
    "url": "examples/example.html",
    "revision": "a77b710a0712930445d8adc4314f6e02"
  },
  {
    "url": "examples/project.html",
    "revision": "a0ef1f3993217186f06e8761e313e4a3"
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
    "revision": "8d8a62a2c50ef9b4a9ec376264f0252c"
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
    "revision": "e99ba150e98727d1c71217ccc00bc11b"
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
