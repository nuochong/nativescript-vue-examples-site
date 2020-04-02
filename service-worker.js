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
    "revision": "1549666c407e56273d572a8b2c37d8e0"
  },
  {
    "url": "assets/css/0.styles.bd8ff972.css",
    "revision": "67a226b0823d2a6366b5133680bae4cb"
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
    "url": "assets/js/10.9f95fccb.js",
    "revision": "d59489d125707f56f8c24a3b33c75166"
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
    "url": "assets/js/21.4f99aebf.js",
    "revision": "9474df69185ca05363985f05e235beb9"
  },
  {
    "url": "assets/js/22.3063e1df.js",
    "revision": "6268372369244c2226f9d663afbc68b1"
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
    "url": "assets/js/27.f64f7312.js",
    "revision": "29f817d761fb8a74a776fec5d697cfe9"
  },
  {
    "url": "assets/js/28.638eff99.js",
    "revision": "415e1cdc5b530f78d5ab2cc690910016"
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
    "url": "assets/js/30.b5764a51.js",
    "revision": "ebac28e086092e9c007bf523034eaddc"
  },
  {
    "url": "assets/js/31.91905da1.js",
    "revision": "958fb0b779cc5b2d9bb4b6defac3516a"
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
    "url": "assets/js/37.3befba11.js",
    "revision": "ef31344d71841c38d94873b6a5565838"
  },
  {
    "url": "assets/js/38.6b9ddaca.js",
    "revision": "b000c8670a3a7907a56642c579dd50b5"
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
    "url": "assets/js/44.a622b2db.js",
    "revision": "8cf17b1da6d6248645074be003602d8e"
  },
  {
    "url": "assets/js/45.da1b7628.js",
    "revision": "be64d95c627c2aefc1f101a1b3a4d542"
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
    "url": "assets/js/63.61de2bfa.js",
    "revision": "5ae41a792e841ea84289fb290e9063da"
  },
  {
    "url": "assets/js/64.491cd848.js",
    "revision": "31e7895d53e7759670ead415e6a21fb2"
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
    "url": "assets/js/9.3f85c022.js",
    "revision": "647dae5e05a9d5e5a37e964b57aaf5b5"
  },
  {
    "url": "assets/js/90.14be85d2.js",
    "revision": "902aa15a1670a4c84e31aaf427657e3f"
  },
  {
    "url": "assets/js/91.7bea401e.js",
    "revision": "8b9efcd46cd7cc5b5c463dcfe52c22fc"
  },
  {
    "url": "assets/js/92.911897f8.js",
    "revision": "fd2cb1c7c8ff09b874623d468fd8bff5"
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
    "url": "assets/js/95.e6c20432.js",
    "revision": "d00fd5e4ed4a3ee467220c6b4e927ff4"
  },
  {
    "url": "assets/js/96.83fc7131.js",
    "revision": "e8c6b7f75742af50f0c18ffbc777dacd"
  },
  {
    "url": "assets/js/97.6b3a5a2e.js",
    "revision": "248542575b24bea22b38c6c5646a32eb"
  },
  {
    "url": "assets/js/98.38f0d5f3.js",
    "revision": "a967a13896a6c353c6a7e092b87952f7"
  },
  {
    "url": "assets/js/99.addd4c36.js",
    "revision": "eb33f2c9ae7343d7e67075eb96a5b8a6"
  },
  {
    "url": "assets/js/app.34222a7b.js",
    "revision": "b4216431e5e6228033fb8f09718e3e59"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "17e6a4246e80bedc3e8abd9155c29182"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "7f951c9f32f0f172293247fcbb73cfab"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "f89979fbb04f2fe2a03709c8d13c15b6"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "55d894167266c3849b7048f9a763411b"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "bdc5895d89b937d2627a50fe8e3365d1"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "c8a2678209c66159217f0417a8faf3d9"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "23cad310d61e2f51adfe30e598e7b5c7"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "b0aa4edd7785dd24b734091960d145d6"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "3b13a0cbd752f8b026c2850e232d2fe8"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "09128cc8c385b405e8f104469d3f1920"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "8eb95e6ef0ac2f689ee46e80656f9fdb"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "cd3e20323a398e2b69e4b725049ac223"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "46475c5c8dca8ab7c2e241b841d0c3f9"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "5f96642fdeb4b85ff667b333e26c3302"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "d9243a23bd161308dace3facaeb2407d"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "debb7c08334b8e32d6fcd089ae0bb056"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "c9a5310dde9aefcc798dd347146ac910"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "18128c61763129274805e0825c321053"
  },
  {
    "url": "blog/template.html",
    "revision": "ccb8564bba7da3b7ca1f0b136352f967"
  },
  {
    "url": "blog/test.html",
    "revision": "d509f6d783d96862cc88199708274441"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "9c209e7ab1ae41c2a7c23857f2dfbabb"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "b1f4f629fd7e663da73d1952bfb0eddf"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "9df211f5741aaf1db87508868603a90d"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "19e05fb5dd8f7e0c82e127921d17fdf9"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "3332de9a1f30b8a30ed81a6c10b448f6"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "ab876ebe99189d2714e21ea89cda338a"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "eb099167a4a04c56ed5f039b8b1adbda"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "48fef530b69f0538442999f1b8eba369"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "ab56156f67840b854ba0b2a2a2147438"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "26db3e77c2da6dcec7a85d2faac3f55a"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "4dfe181d4d7a44fbfe86923d7b805c39"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "5b504e69f6ebc044a0b919382241512e"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "252b19d791a1da1a8dd399224a8ebf32"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "bdff7b51f7e77ffd6579c03984faa553"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "4e44c4598bc84252cab2705003d3443e"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "13b7fe6be5c1bdde3909e77fdae50a9b"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "2ebf38b8c137a4f2a2a8eef7c2677058"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "93a9899eae7bca4812af8c196f4cf74d"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "31206c9c3c5687b516c8a31b3b9b2964"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "b41a8cc8db21d430f73ea623e77bc691"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "157bbc1bb2e1f09404773f30115226ad"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "a500fe72ba2a2b0f17025bb6c325dc24"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "ee44c72223608cdcc699036d49da4936"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "dc27467c98531057110725bb065e046c"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "68bb0611b3b4e0c246a3e998b592281d"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "83ddfa9ee0a756b536c725ee2e785289"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "48a10d260dc5e1ceae2a38ce8421d166"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "9dfb7ce48d74238dde979c07c0768164"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "e469c76b3ebc1d4f6a3c16ec9cb8ff04"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "3e0cac1f3597476ca4fe08f31902f8f4"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "dc6c3a5a9b53e4e765fca008ac75f401"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "e581fec579dd7b3bd891be7f0aa364e8"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "5a1cece75e9e71f6ba833323de06f247"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "7f7a2d157beacdc738ab4854db8f42e6"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "d79acba7168ca16b0d32265bc823a57d"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "8b152c0970fd464fdec24cc579202616"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "773a67d726180053d1d576c8cb1ce75b"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "b58f4341f1551f231ed514b6c78513ce"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "c869d22fefed7191e03edb61ddf9de30"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "618319fab6d221b6536fbbed0d3d44b6"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "09fd3226ca3ccaff8d8ff54dd263ebf6"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "6d597b583ba9fe0bbdcf99f85b571043"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "9f127b7fd014ae4f503022a356e57103"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "d15c15897bf8b1b0cf147b380ccc814d"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "05f57ece0645af549c565e4467067c5d"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "104899a0479592c11db4d446e1238735"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "78a0ed65955d645471d519b3b430bddf"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "dd51af10eb8277a7fa33158814d03806"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "e34aee609d559f3f40cd5f3cb2b704a9"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "e039bf7142797816e0a46d9a60d87acb"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "037f794ef2add7abb62d126e02a01349"
  },
  {
    "url": "cn/introduction.html",
    "revision": "12b45d343027e440f4d314e168e92e81"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "56390fdde2021576b57cc73ab133a894"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "e545322807a25ea0044788102560292e"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "2f296c1a3cca143bbf9f42a7a0348638"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "2dc95a81790a370b1d8948d2acd693f5"
  },
  {
    "url": "examples/example.html",
    "revision": "d1bcc58a454e098de492fe38993ebfcf"
  },
  {
    "url": "examples/project.html",
    "revision": "e9f45645124a3039116743b46592d700"
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
    "revision": "aa2d6127b4a0483843d9067fc4cc467e"
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
    "revision": "8ec82c98b8ddcfaa50f4fe1f570b36d7"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-zh.html",
    "revision": "d2310f0f881eadf0f105116db309d22c"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend.html",
    "revision": "8387513d677f20e4ae32f36c41204d52"
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
