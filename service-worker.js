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
    "revision": "d61b516ceaf4acf532bdba61ec1a40dd"
  },
  {
    "url": "assets/css/0.styles.d3796261.css",
    "revision": "86a80572d0b71129bf0c87ae02573803"
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
    "url": "assets/js/1.63435f27.js",
    "revision": "1edde1d38dfa6a270cb3dfcbf0cae81a"
  },
  {
    "url": "assets/js/10.7e439ddb.js",
    "revision": "7d667dd00f3f57e8a9cbca4c47d00a8a"
  },
  {
    "url": "assets/js/100.855d5bd8.js",
    "revision": "1ca9e209b7f5ff02d3c3e10c26371de7"
  },
  {
    "url": "assets/js/11.4fb6041f.js",
    "revision": "a8b6d4ddb3f43a242c6c17baa906e967"
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
    "url": "assets/js/16.aaea72cb.js",
    "revision": "7a18220b56b2678b7544e58e57526e5b"
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
    "url": "assets/js/19.e88265a0.js",
    "revision": "18aedd1678840e8eec4a0d924a6eeedd"
  },
  {
    "url": "assets/js/2.acfadc59.js",
    "revision": "4b92700a8e25884561d18ba6f60542f1"
  },
  {
    "url": "assets/js/20.25ede3a5.js",
    "revision": "39fdd9c0c919c8eb41dbb9aa889edf55"
  },
  {
    "url": "assets/js/21.ece46f76.js",
    "revision": "fbf1b7ece3afd9370c3ea442e8794cd7"
  },
  {
    "url": "assets/js/22.91382c21.js",
    "revision": "6c7114fb563fbf1a5340b41049e0107d"
  },
  {
    "url": "assets/js/23.f5126b3e.js",
    "revision": "1fbe78ad60721746cd118fc49df8355f"
  },
  {
    "url": "assets/js/24.acd3d5ae.js",
    "revision": "91fc4ea002505eb34e650a8fb53e98f4"
  },
  {
    "url": "assets/js/25.edbfc9c5.js",
    "revision": "14407d48b7b68f8716527559194575d2"
  },
  {
    "url": "assets/js/26.64881d9f.js",
    "revision": "a42be8762af014190e8be829d9bf6a02"
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
    "url": "assets/js/29.2ccb94dd.js",
    "revision": "20c0fddcbc878364a15e93468f49e53d"
  },
  {
    "url": "assets/js/3.7140f746.js",
    "revision": "de6509f630fae7daef7b467c9adbe1dd"
  },
  {
    "url": "assets/js/30.580db640.js",
    "revision": "849b273d1c64600bb72d1779b0011ddc"
  },
  {
    "url": "assets/js/31.fa6ab33d.js",
    "revision": "2e86528ed90d3402baf7814950a5aef2"
  },
  {
    "url": "assets/js/32.df68cbd1.js",
    "revision": "4e7266883b00c6a15a5f28106b48417a"
  },
  {
    "url": "assets/js/33.79174f14.js",
    "revision": "bc0c3f264f621377740becf1a510db80"
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
    "url": "assets/js/36.e49cb72b.js",
    "revision": "2e4ab3815dc0b4fcc8537fe8dc058410"
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
    "url": "assets/js/40.8fa5cc64.js",
    "revision": "7a41713183a1a2c55b1b0828460d2a05"
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
    "url": "assets/js/43.263b6269.js",
    "revision": "3721cf2ee6e8fd1c7b142999c166e9b7"
  },
  {
    "url": "assets/js/44.93e1fc11.js",
    "revision": "b5f202c8082595ef450d35c6e0c1c6e7"
  },
  {
    "url": "assets/js/45.1e2f95fa.js",
    "revision": "aa0400984802a9064a5e25a31210b45e"
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
    "url": "assets/js/50.0c332cbd.js",
    "revision": "fd201568036ca02431a7edb409754814"
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
    "url": "assets/js/60.a74c30b0.js",
    "revision": "715b1e6d2e754b3e7541c0bcbb7b966e"
  },
  {
    "url": "assets/js/61.1cb3d3e5.js",
    "revision": "aeaf8c6649c68adae07fffff3f1df6d2"
  },
  {
    "url": "assets/js/62.27976713.js",
    "revision": "ab9c4f3ba1d2fd71fe7fd1e78a189d45"
  },
  {
    "url": "assets/js/63.6d160394.js",
    "revision": "b09511dd2709e0a0fb5da817a9db65c7"
  },
  {
    "url": "assets/js/64.0d19e40b.js",
    "revision": "3f0cf0da20aeea3dad5ef742e3c3dd57"
  },
  {
    "url": "assets/js/65.0a769501.js",
    "revision": "9e67dc6d4e159b8566b2cd02f443792e"
  },
  {
    "url": "assets/js/66.85bfb6a2.js",
    "revision": "b56b1c2dc320b01e5e9ca9593bc33b9b"
  },
  {
    "url": "assets/js/67.146a3bdc.js",
    "revision": "f161fe17e58f3667db1e4bc8c31b9cda"
  },
  {
    "url": "assets/js/68.6c4beb26.js",
    "revision": "ddc81aa173c88142a5f2f616e844669a"
  },
  {
    "url": "assets/js/69.c23ed229.js",
    "revision": "3b6d824f54d78bf3f63925f5b260646b"
  },
  {
    "url": "assets/js/7.b116b6c9.js",
    "revision": "a0a621a647cb4f962a0d650978ab74a8"
  },
  {
    "url": "assets/js/70.c11c2cc0.js",
    "revision": "57e39e9b6e05315785a25d045288d47c"
  },
  {
    "url": "assets/js/71.dd9ab999.js",
    "revision": "ee36ae9c725d5de4647c1da635282c47"
  },
  {
    "url": "assets/js/72.c67cd77e.js",
    "revision": "f7fff5f2b50e18297b77c759ee7ab005"
  },
  {
    "url": "assets/js/73.32a0fe7c.js",
    "revision": "e3f0889de49e953234f2eb2feeb224b8"
  },
  {
    "url": "assets/js/74.a29dbb45.js",
    "revision": "6eed919db86fa2eeab24d5628d58c9c8"
  },
  {
    "url": "assets/js/75.b58f5f65.js",
    "revision": "64b09b88d9cf772a1eb6fdc22e583834"
  },
  {
    "url": "assets/js/76.b8d267d1.js",
    "revision": "1bfb513dd781c69251f1d3205128d82d"
  },
  {
    "url": "assets/js/77.cb36fd13.js",
    "revision": "4679d05582672e53a10a16aa01ce5267"
  },
  {
    "url": "assets/js/78.a77d63a9.js",
    "revision": "44c9bca5ce473fc3af774efa579d3e7d"
  },
  {
    "url": "assets/js/79.087d0dd2.js",
    "revision": "1bceba59806f728eaef1066d4f867ddf"
  },
  {
    "url": "assets/js/8.bb97f031.js",
    "revision": "6fc8de46ccd10846bec973f8ced4f22b"
  },
  {
    "url": "assets/js/80.f7e318d1.js",
    "revision": "81c169d18d65b169b48f8d4ba4797524"
  },
  {
    "url": "assets/js/81.9bb8d353.js",
    "revision": "d7004057ae45aa054f3af6af9aa8c335"
  },
  {
    "url": "assets/js/82.3e49d466.js",
    "revision": "5fe6585d26b8052c332eb48ea1514a9a"
  },
  {
    "url": "assets/js/83.46bf09f1.js",
    "revision": "edf780c114bcd0512b503adaa04cd78d"
  },
  {
    "url": "assets/js/84.43d61508.js",
    "revision": "7a099dfabdd03b611d8669f24dc406da"
  },
  {
    "url": "assets/js/85.8a9640af.js",
    "revision": "20ab86d647eae0f825b52e5ac93eca54"
  },
  {
    "url": "assets/js/86.1db0f404.js",
    "revision": "a8964596ce20afe75a0affb9c379a6b2"
  },
  {
    "url": "assets/js/87.4fe9d6fe.js",
    "revision": "d81c8091475606a31f3267d5f2373ec9"
  },
  {
    "url": "assets/js/88.f8f4bc3f.js",
    "revision": "f25f859c54d06ffba4ddb45be7b17f49"
  },
  {
    "url": "assets/js/89.1d451ed6.js",
    "revision": "9e63c81a52ca04bfd7a7adfed4fd380c"
  },
  {
    "url": "assets/js/9.ce99e163.js",
    "revision": "332dec7848edb3255318c68baa2834a2"
  },
  {
    "url": "assets/js/90.27bf5825.js",
    "revision": "a671d9a578d5aeb1b1b3695e5fd58896"
  },
  {
    "url": "assets/js/91.d6ae4050.js",
    "revision": "0f48ac2332eca2aa4d790742ef52ca30"
  },
  {
    "url": "assets/js/92.1177cc41.js",
    "revision": "987163eb883f4b739b292b0ca952fa88"
  },
  {
    "url": "assets/js/93.ff3f0424.js",
    "revision": "bd3080f089d5bf2f0509fe16d1c856a9"
  },
  {
    "url": "assets/js/94.f21afacf.js",
    "revision": "8f4d9a747ec45933cb711100d1167081"
  },
  {
    "url": "assets/js/95.c009459a.js",
    "revision": "5485282fe96766737e7ace43523a5ed4"
  },
  {
    "url": "assets/js/96.9c2f6dce.js",
    "revision": "11e124cc3057e1ea405cce2ecd574f52"
  },
  {
    "url": "assets/js/97.c0e297e9.js",
    "revision": "afd13ed05da75f0b1005ea79af8e2e8f"
  },
  {
    "url": "assets/js/98.f8dde429.js",
    "revision": "5009a3805b4e42648f6e282e7e0f315f"
  },
  {
    "url": "assets/js/99.931a4fbf.js",
    "revision": "1b2ac73dfc9fce53a8b9b55c03a5a627"
  },
  {
    "url": "assets/js/app.02d2d81b.js",
    "revision": "d06064f43910d760648dd39b7b84794f"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "0e290896a6a0e792dbd56ac4a58512ce"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "f7d815bcddf6fd889d23d5a25be4b22b"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "da72c01f18a171bbc66a4d4b59b7b5d5"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "e16f80c07febb2ef1ef9088ef4abdd27"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "1b1d0778d8b2abc94136edad872aef5e"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "87aa7ae0629007790aa4102adbdf4f1a"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "c76ebee65cc895d648d28d27e3b4ae4e"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "6fbd9adff90413d627f1fc75af892e11"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "43f1155a72a7c3f2c9b953ff66de920b"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "2e12fa94b70c50d084ee47fcfefa0593"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "a2313de51e6ae71424cb3856c7761a86"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "9178ec8a0a83ac0efa5d492738508779"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "4ba8b5bc99a8b3278d3a4341fdfc3037"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "03304ac77ce8bf756b04fa8ab714b3ce"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "c99667b704a9a2673758d522b2ad5f38"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "502902ff8705ff93289a8656f27f209e"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "01ae9105680a04f09c8c782f4396c2dd"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "def9e5ecf46b50040e55b2d28067a305"
  },
  {
    "url": "blog/template.html",
    "revision": "3fe2478d3bc44651d2f46219667801bd"
  },
  {
    "url": "blog/test.html",
    "revision": "ddebf3b9b4bad7ec576a34b92e5001b4"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "79bb37d7377acdc2b99e6f730c5a02b0"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "07c5397511215254f2015bfbb572f93c"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "dd3660b14cc6fcd3bc32550f9f77326d"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "e4719eae5b7c0a9bf12a263797bc9ea2"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "8881ef15d70cb3fad0d7ac6faea1b780"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "5902b135164996ea347b4eeade3e27e4"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "57a2b693338df286fc831289ac077dbb"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "bb077393a45221f0363ca746102b522f"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "7e3b042ea4ddacec3762f0e48254c6d0"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "9f1efe195f3d931bf9398ffacfb3b78f"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "adebf6db266eb02a3dce48014140086d"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "606836b2a3b18c1df0a91c0d156ed13d"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "e5133d5c2cc4b3c326bc9d98185f773b"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "693b0925182e63b52b20d1343b6dbaec"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "f3d85cb28bcfab06b576ed9397bca29a"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "3ce3bbfd8898f8850195fd564b90ccb2"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "bc6b972d281a94f02be1ba967ec4170c"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "2629c4d75e9e599f55deab7daf403aa6"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "4f320a9e1b6a5a8de1297565b25735db"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "3deb4ea46c94230aa2c331c6c6cae383"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "e59a86e22793a1b41617eb72b4d7c03b"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "b08ce347106a8a61d1fc1ca0d2c0d47d"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "dc250ada93b029f81584f703a876db85"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "2cb5b5cbf0d97e3dcdaee4256bc19d14"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "5e563bcd1e62a49b32c6c54ad21a2563"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "8fc289830abe2ef87e52aa2054ed9339"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "3b8471e8ddddecfd54f4a1ebcb85e674"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "dd79e08bbd208397427b4955ceabf45f"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "6afac0d250c0d4083007198e69adcab0"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "932ec7751de86210a9c583760b64cfe5"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "f87a75b4d09454c756c84a21d9b04067"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "8dce97f8288d99e9ab009f2a819561e8"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "9af5fd7c91095972dd9a7c1bdd442fea"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "ad036bd07423033c7b1b29d235c6098e"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "cab745bcc7f2904bd84603e772bad81d"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "63e8c1ace0d47b6b15573551da92aa54"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "22051e789169e1493f3ab98c877fdfc8"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "4ff44daeeaa54a5b66bb85f6e64a6401"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "7035444dc279ad3b3319b41e66e979d2"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "3e1467c12982a5b69e7e9c9b3f48bd69"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "aaa4e2ae3c56c9774fa9645971b004a0"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "bdb456025a5102a69b940187107ed50f"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "0de97b9e0bc3035d440df9192d37ddd7"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "6b8315d346c164aced25e279d15f3ce4"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "a83ce5499c2cff9ad61d506e5913bf8c"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "3cbbbf1692e04103c15962c23b38285d"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "9d1593626b970c028bdba74a0147e616"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "5f3975bf2403d69a313688a8ecec8951"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "db57fdd8633f895fbbd4db7a0b41528d"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "a43ce964b8de8b78a6eb36508da26a56"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "4979f323818360121a8eb70f2f36b706"
  },
  {
    "url": "cn/introduction.html",
    "revision": "e9dce1af679d3184fd154345b0ac48ce"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "b811970040333e8ca65ed1bdd027c469"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "d73115988f9ab1d82561e452060bf7d1"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "c898f3049ab6bda7d406cab28e5043cf"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "dd3ee4eb2f028436ab1e7fed83de8d79"
  },
  {
    "url": "examples/example.html",
    "revision": "5937de734da4d850d332a9eedb83746e"
  },
  {
    "url": "examples/project.html",
    "revision": "6132c6fbb59ad51d62c8c9a7b7ce4881"
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
    "revision": "629a62ca08b000a14164c1a29cd33c62"
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
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-en.html",
    "revision": "d517aa0161067ae95b889554aed78ab6"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-zh.html",
    "revision": "b97bab54c3ad963dd93696b62beaca02"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend.html",
    "revision": "d8a73f7f1e0a9055ef37e98b9a394cbc"
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
