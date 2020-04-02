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
    "revision": "7e34839ced65aaaf9a8984dcb68d2644"
  },
  {
    "url": "assets/css/0.styles.f85117fc.css",
    "revision": "6b02c456ab9ae86b01a200eb7c1a2478"
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
    "url": "assets/js/12.dfee8eea.js",
    "revision": "38f9c2aee5e788a3b595119bff89b070"
  },
  {
    "url": "assets/js/13.cbb510f5.js",
    "revision": "668c27c58b29f85403c48dca792f9cf6"
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
    "url": "assets/js/17.4927fc45.js",
    "revision": "aaf3a702a3c58503991748db2480878a"
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
    "url": "assets/js/28.c15238a9.js",
    "revision": "f2903f148fcba498b93a91b2bcd27291"
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
    "url": "assets/js/32.2b832109.js",
    "revision": "1c6b1edd714be098e687320ddf55d84f"
  },
  {
    "url": "assets/js/33.79174f14.js",
    "revision": "bc0c3f264f621377740becf1a510db80"
  },
  {
    "url": "assets/js/34.898db0d6.js",
    "revision": "09c20d0cdba2cfad1c67baa0472198cb"
  },
  {
    "url": "assets/js/35.7aac3f22.js",
    "revision": "dbd283e435677bd9f739c4ddce9874ac"
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
    "url": "assets/js/38.e6af7e7b.js",
    "revision": "f46104f274147d4438014a8eda38e7ee"
  },
  {
    "url": "assets/js/39.ee23e243.js",
    "revision": "49ded1aa399b5c28f7269acb6893db61"
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
    "url": "assets/js/41.a4c3c27c.js",
    "revision": "08bd85ceb0efb8081ebfc9dfc482bfb9"
  },
  {
    "url": "assets/js/42.042cc2ff.js",
    "revision": "89e35cc016c344f0bc043da48fd2ba03"
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
    "url": "assets/js/60.63fc5f33.js",
    "revision": "f248cb23698eb05b7f0a6a10d279d5c4"
  },
  {
    "url": "assets/js/61.a46e8a36.js",
    "revision": "2f9c18a80348075c2e7b75c327459825"
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
    "url": "assets/js/80.cb83c169.js",
    "revision": "0991271cb885caa742bf80be70a8847b"
  },
  {
    "url": "assets/js/81.dc11640e.js",
    "revision": "92b6eac7252ac16b794e74e9cc96005b"
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
    "url": "assets/js/85.fd1ba8d7.js",
    "revision": "818bc2ef30f51b3cd8332311c456d7b7"
  },
  {
    "url": "assets/js/86.02f3ebb0.js",
    "revision": "fff0c038ae5d7d3634f15bfeb6f3c275"
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
    "url": "assets/js/9.0a6c54e8.js",
    "revision": "f0c2d50fffe99aca748f707f83f6590f"
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
    "url": "assets/js/92.5cbae067.js",
    "revision": "04bd2b58d2ed4bcb4de101d139e88095"
  },
  {
    "url": "assets/js/93.b2f4b731.js",
    "revision": "1cec3832a68968cce0e2200e62d5e8c3"
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
    "url": "assets/js/96.62cf534d.js",
    "revision": "d41682eff0f78c339d3acf6e00c10898"
  },
  {
    "url": "assets/js/97.65ac4e2b.js",
    "revision": "64fde28004a9a31b530952b91c185fcb"
  },
  {
    "url": "assets/js/98.960c258a.js",
    "revision": "5c357dbc039bad85c7875d73507b3ea6"
  },
  {
    "url": "assets/js/99.addd4c36.js",
    "revision": "eb33f2c9ae7343d7e67075eb96a5b8a6"
  },
  {
    "url": "assets/js/app.6b4b2972.js",
    "revision": "13505f99acbf8d9d7f9f33f09c10f774"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "6d8b8405f8434bdf9882e7340eadd969"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "464a629b8d651f179787ecdb98381160"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "e24cfe25eee93f74988e14d847ab4579"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "0db54bf4d561e1248a99ecf6cd285246"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "e0eaf3b12131d8a310f3963903972660"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "4fd2d88f57bdb4e0f38d1cd544afe2d9"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "a8cab74fa668825e5a5b602de0de74c8"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "28a518835862c0d0e394e0f0549f0e00"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "eb7f13d8235d21d7551705f509ed6534"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "bb8744bf9223f5120c0755033257e14f"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "013c5a7193c1eeb771996472850ce562"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "421b294f068d24e92a43136258a0ac30"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "845e8435f4843a375900e55bde48b8fd"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "1a1256835d7c781586b6bd5ef734b310"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "32368a018315455c806538beecd18cc3"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "3e99007dff2849be13c53bff30acbe62"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "ce26b1b52de1d1fbf65555a6fc407cc6"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "344ca985c0912b35ac1ef75be9f207d4"
  },
  {
    "url": "blog/template.html",
    "revision": "6f8ab82a1c1eabcc8dd89be69739b60e"
  },
  {
    "url": "blog/test.html",
    "revision": "d308e50290af54e423c5cad9385eb77c"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "f19a8ad66e6b8f25716092443aec3b13"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "4698e9b48255b72f7454d4729cc9441d"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "b1729e989d6f733427359c3ae1f3b85d"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "971edc8c17f6cdfa73c5e3627ebe73e9"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "d271491e4e828aa61d559050480023e2"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "37406d2a45f2fd317125fdc5ea581dfa"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "163f3a308e9933d0e14181510bedfb01"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "f129f755f7e15aa461c3cc094423b4a8"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "d794b1badb6a4e0662b82f4193e11579"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "6a0d27dc43768ae144507b55865535ea"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "44b3f7aac2d64d957e7e3a13dbe74155"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "10185b1fd35f48bc7ab89887f954f9d0"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "32380bf19d8c831a1568e5c3ba2ef859"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "d33841f27c3bfce48cb2e1c3ef3c576d"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "63c29f29bae1e0658725f0400b563dc2"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "f16be866262b5a00b9336f1d065eb878"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "38d32fe8886111ccbc0153e41cd0d88f"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "c05e80d239253d9a0e35b4679459ca31"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "67796b0ae58e614ae3a08fc9e19aa80e"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "dc9906fe9068744e4df3f6560149320d"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "d08eb8762ee4d2420a8f18484237380e"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "e5365e4e7b85385db864cf021a160606"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "a95e8deefea9a4be2af1608f96fbd5b2"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "87567f6b3c9526e625c1e03b9331a5a4"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "ba83ce5e583e237df180f3e478a99ed4"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "f124057b1226754a768b280cd73d2e24"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "fae6800b8bede36fc3137a1ee77a7b82"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "8ba9375444fe92b6063377a0aa5507b2"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "69e156573b978db28bfc73751b8f78f2"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "d9ff2ba4c5c45d836001f3741dc6acb8"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "c72451c295bce7fe9f777ee56f881e15"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "a942cc23d2ed04aec0b54a40146d0180"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "b0485c3525492b8a47be415bea7f766d"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "60bda9216b10c8d7f417fb5e404abd04"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "e67f2cce8baac7579ce8efc614aa7dfd"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "5fe0a97ffd19bd73b7bea10b5d34db4c"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "53b539f330b6cf77d2c4374a2ab82535"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "eff39b04edfe553cc867b53636cf272d"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "411ce2579f2f165d0558ac29419bd820"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "8e4ea99869cdb8c707154fc3695108a2"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "73392d175bfc82a70292144cdba28711"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "17993de6b4e3f7b87de3fcd60f7eca25"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "970e523775446de7bcfe84b15b37f02f"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "b4f160071d6b84b41c0eb9973e2d0b89"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "3302bae8ba7d1fab1d56bac79767376f"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "e7ede4cfc218fa4fba7f4ba101b6495e"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "8e5d863614e7d38b9b7b7b44fea955ed"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "51f4c8d5da817843783fba28f79e43fc"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "1ec5138fb3e4a2ceec4c4c3c0860abc9"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "488c29b99696124772d976b872acebe2"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "f04baa3e4b9c27d5d5a695a76b63575b"
  },
  {
    "url": "cn/introduction.html",
    "revision": "9957fb4e3430eaffc6859e1799c0d7f0"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "82d4316149df600d7c116901c94353b0"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "d5611fec36b7ddd6ef37cd105788b2fd"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "98fce5b14f221472545c5c13e333d670"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "ff7b94cff3a3e428b45aac374889a2bc"
  },
  {
    "url": "examples/example.html",
    "revision": "75e29c6e980300e4da88204c8ae20d11"
  },
  {
    "url": "examples/project.html",
    "revision": "5be0bdde975c349d62717ff3d92ab708"
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
    "revision": "111bc5496abb8892e21cae46401eb19e"
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
    "revision": "95cdf477a1de0ca87b21318f99297970"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-zh.html",
    "revision": "6b79a78e52d7a5061ae12aa2b71a3d92"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend.html",
    "revision": "231aff1f474638ccf171db8e6efa9182"
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
