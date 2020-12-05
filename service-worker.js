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
    "revision": "521c1798f5aba60b040805cb20c65f6f"
  },
  {
    "url": "assets/css/0.styles.1707833f.css",
    "revision": "7636c6161d0b983c80056c2b53e605d9"
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
    "url": "assets/js/1.2ee72ac7.js",
    "revision": "55c4639f9d0466adb37ce07f23681c0f"
  },
  {
    "url": "assets/js/10.8b7aa78d.js",
    "revision": "addacede2f23d71cd41d13ad62823120"
  },
  {
    "url": "assets/js/100.e078b246.js",
    "revision": "7dd20731464d6216e94320f17c995129"
  },
  {
    "url": "assets/js/101.cf19ba35.js",
    "revision": "fa8de6f2cf3e99a90a550d258b541a60"
  },
  {
    "url": "assets/js/102.450d3240.js",
    "revision": "5ca408a8fad0b810d337e18e3e665910"
  },
  {
    "url": "assets/js/11.1fb024e3.js",
    "revision": "2bfd1d141e7505a338442414a6197ef6"
  },
  {
    "url": "assets/js/12.8241bb75.js",
    "revision": "9ce3310ecf4429766bc1c9635f572947"
  },
  {
    "url": "assets/js/13.1a9044bb.js",
    "revision": "9e60db4eaed079914f817dde947e194d"
  },
  {
    "url": "assets/js/14.dacd1f7b.js",
    "revision": "169b0eb5532085fd4ffd8978388f2c14"
  },
  {
    "url": "assets/js/15.b537c350.js",
    "revision": "8e04f108378f686ee7bd0e1cdefda704"
  },
  {
    "url": "assets/js/16.728d1ea8.js",
    "revision": "c55c3e754c5e7dbedf5a8fca90efad6e"
  },
  {
    "url": "assets/js/17.5748e21b.js",
    "revision": "dcf1420c7b047bd124edcec7bf17c1e7"
  },
  {
    "url": "assets/js/18.f83fc2d8.js",
    "revision": "12f7886e4ee2bdb725d8de4604f5f7bc"
  },
  {
    "url": "assets/js/19.f3b204b3.js",
    "revision": "ef9ff81e73e61363f1e1a71b28787867"
  },
  {
    "url": "assets/js/2.758fdfb9.js",
    "revision": "df7360e2ce60b57bdaf27aeef5621f05"
  },
  {
    "url": "assets/js/20.580d5d20.js",
    "revision": "690e1cce0a077e7de906ea8091a3dca1"
  },
  {
    "url": "assets/js/21.325fdf14.js",
    "revision": "990326dbd9172e072b75116dbcf49d05"
  },
  {
    "url": "assets/js/22.82c65830.js",
    "revision": "b984d66005ebf1a91e528a8b75deb824"
  },
  {
    "url": "assets/js/23.05f9d8c9.js",
    "revision": "65c42f0bce8cc33c93f2b27b055d6169"
  },
  {
    "url": "assets/js/24.4f2700f3.js",
    "revision": "8a7ac199f2dbbaed71f343ec5f92fbf8"
  },
  {
    "url": "assets/js/25.365b5d23.js",
    "revision": "ff541525e7fff6beeef32663e0f6fea7"
  },
  {
    "url": "assets/js/26.1688108b.js",
    "revision": "4651840fb0713203656811e08319028d"
  },
  {
    "url": "assets/js/27.814fdb8c.js",
    "revision": "1fcef406cffc02eaba5d57ee114b7e8d"
  },
  {
    "url": "assets/js/28.c94d95f0.js",
    "revision": "4c14c0c9e9addb9f576a31ec30c94384"
  },
  {
    "url": "assets/js/29.cbcff657.js",
    "revision": "60fbc1e14b3a9b6ba601da97c6d37ea5"
  },
  {
    "url": "assets/js/3.63485e53.js",
    "revision": "aa2f5cd3e0d27060b4f2f44c20f8c036"
  },
  {
    "url": "assets/js/30.ec38b169.js",
    "revision": "6bb6f417a1ebe2bac0e470ec636650a3"
  },
  {
    "url": "assets/js/31.7d911545.js",
    "revision": "5680ab3cf4d566b3485036532415658a"
  },
  {
    "url": "assets/js/32.bf52b892.js",
    "revision": "647111cfb809a9256278365132d8b257"
  },
  {
    "url": "assets/js/33.5ba7330c.js",
    "revision": "73b668dfd1e07bdabe4dc3a6fb3a8333"
  },
  {
    "url": "assets/js/34.19f8ed76.js",
    "revision": "074f837eddc36dc8547e5e03fcf74b33"
  },
  {
    "url": "assets/js/35.45b10128.js",
    "revision": "5cd512ac4a475b36d2292a913f4d21e3"
  },
  {
    "url": "assets/js/36.b562d4fd.js",
    "revision": "80ca5d8f29f74580987263540a8a9768"
  },
  {
    "url": "assets/js/37.88b56e94.js",
    "revision": "284ed78090a1950b15afaf241fc553a3"
  },
  {
    "url": "assets/js/38.183d6599.js",
    "revision": "a6c2145b9e0c7e331528bacdacb03815"
  },
  {
    "url": "assets/js/39.41190393.js",
    "revision": "e8f7f1784214165b992973c83ec841c9"
  },
  {
    "url": "assets/js/4.ee72f80f.js",
    "revision": "90055df49981254242db53c1de338c55"
  },
  {
    "url": "assets/js/40.092e7fa1.js",
    "revision": "8133538e43c92d07e04896c5e34f4563"
  },
  {
    "url": "assets/js/41.6f75bb6f.js",
    "revision": "fc378e585c3c3ff0613bebc9808efc9c"
  },
  {
    "url": "assets/js/42.7e3b4221.js",
    "revision": "a1d53b7edce78fc06265e61170b852d6"
  },
  {
    "url": "assets/js/43.dc87d057.js",
    "revision": "25056e5ea0af2088146aa1115d3060e7"
  },
  {
    "url": "assets/js/44.b3b1807c.js",
    "revision": "8a93c44fc6ddbb1a8b288a265c93d46e"
  },
  {
    "url": "assets/js/45.b65b24c8.js",
    "revision": "33832d82f06e42a0b733ecaf9322d3b5"
  },
  {
    "url": "assets/js/46.c9144f67.js",
    "revision": "5940b0e5660a6115162e18968a76e127"
  },
  {
    "url": "assets/js/47.ffc832a7.js",
    "revision": "a1dccdd66230daa33ca8d4562af610dc"
  },
  {
    "url": "assets/js/48.c474af86.js",
    "revision": "c0dfd29237d42edd9a5d1e025405b9f2"
  },
  {
    "url": "assets/js/49.343f3e48.js",
    "revision": "af850a9b39233b1536c0ea0767963065"
  },
  {
    "url": "assets/js/50.e44e4ea3.js",
    "revision": "d546581bc21b459d87c29b3e1d8b0cc0"
  },
  {
    "url": "assets/js/51.b212b030.js",
    "revision": "7bf8af26449e9332059b14b48996f0a1"
  },
  {
    "url": "assets/js/52.3d8b3d00.js",
    "revision": "42691483bff000325b3fa17226078899"
  },
  {
    "url": "assets/js/53.a046fef6.js",
    "revision": "13f4163347195e4467443ad848c81e84"
  },
  {
    "url": "assets/js/54.85a2cfe4.js",
    "revision": "6c08238fad0de722a9bc4014ea40e0dc"
  },
  {
    "url": "assets/js/55.3e1b4a48.js",
    "revision": "b65986d4ab567bbda20c55072b05fad3"
  },
  {
    "url": "assets/js/56.4ad0610b.js",
    "revision": "b7b64add3104feaa5bc5a0e5abf66941"
  },
  {
    "url": "assets/js/57.e9829dad.js",
    "revision": "4ac50281ac7f5155f3ffac65cfe5cc9a"
  },
  {
    "url": "assets/js/58.f6752e0b.js",
    "revision": "ce45eb635713944bdab2ecb1898e1f22"
  },
  {
    "url": "assets/js/59.07ff7b7f.js",
    "revision": "6d0ffab802a5f765c26e03670122d966"
  },
  {
    "url": "assets/js/60.dee3bd16.js",
    "revision": "89794be0f0e2f176421acb3287896ab9"
  },
  {
    "url": "assets/js/61.51e856f8.js",
    "revision": "023703c6effbe737f1468a0843ecdcc4"
  },
  {
    "url": "assets/js/62.1f47dd99.js",
    "revision": "8fe1138e4216d6220ae10ce8dc5446b8"
  },
  {
    "url": "assets/js/63.2b6301fc.js",
    "revision": "86ead4eb7f7bf1b4aac60bf05de219b3"
  },
  {
    "url": "assets/js/64.5e636c30.js",
    "revision": "e6410195a4bb60dca075e69ac935a1b9"
  },
  {
    "url": "assets/js/65.b9d5a48b.js",
    "revision": "9f651af6bb5064ca96e158170106a660"
  },
  {
    "url": "assets/js/66.0089b53d.js",
    "revision": "86851246b79247989341907bbcca87f8"
  },
  {
    "url": "assets/js/67.7906c653.js",
    "revision": "28f1355738971098e6eb43e8a16f090e"
  },
  {
    "url": "assets/js/68.8ca56934.js",
    "revision": "7c47e4ea8bd3b34d7f0bdabd021cfce4"
  },
  {
    "url": "assets/js/69.f67c0d82.js",
    "revision": "493b84b0003ce02c5aa343e01a0cdc04"
  },
  {
    "url": "assets/js/7.7d754c08.js",
    "revision": "95d991f7980c015d30a09dd4d094a6e7"
  },
  {
    "url": "assets/js/70.856c1671.js",
    "revision": "deb54c5c55c227d7ded0670a9dd2fe2c"
  },
  {
    "url": "assets/js/71.a0626c11.js",
    "revision": "d5c0430c566b64048765aa70fcedcea8"
  },
  {
    "url": "assets/js/72.7fec6743.js",
    "revision": "ec0190ba811c6fd69de589171959fb54"
  },
  {
    "url": "assets/js/73.82a39fef.js",
    "revision": "3bdcf4aef28a294bb3a2a0cf9542a4ab"
  },
  {
    "url": "assets/js/74.ada6c9fb.js",
    "revision": "dfa5929acbbc7fef70d56cf5aa96b4fd"
  },
  {
    "url": "assets/js/75.d88b1eee.js",
    "revision": "b4984c1e15cd9a1d140baba83010a5da"
  },
  {
    "url": "assets/js/76.90a15616.js",
    "revision": "79b07288fd4625b0018f3d7455e77eaf"
  },
  {
    "url": "assets/js/77.06a4ad9c.js",
    "revision": "9bbbbaf95010d207d29cacbcd95af0df"
  },
  {
    "url": "assets/js/78.01d35aa1.js",
    "revision": "163e37f0542e4111bd3b62eaaeaa045f"
  },
  {
    "url": "assets/js/79.9ce9ff4d.js",
    "revision": "7401d7dc04dfeac3bea4ade5bb08f6ed"
  },
  {
    "url": "assets/js/8.d7274519.js",
    "revision": "64ba89b547c489f6343589a7907e6b0c"
  },
  {
    "url": "assets/js/80.3a217101.js",
    "revision": "e67f6e2ec550fe1f20f7dd7d1c4fba0a"
  },
  {
    "url": "assets/js/81.979a1147.js",
    "revision": "8b983ee21f02000197fca22923db673e"
  },
  {
    "url": "assets/js/82.f7145e23.js",
    "revision": "f6e121046dd2eceda9bda1f410c6c0e2"
  },
  {
    "url": "assets/js/83.139f70a1.js",
    "revision": "14eb18e27eecdfec832a1d0484fc9d89"
  },
  {
    "url": "assets/js/84.7cbd7e9b.js",
    "revision": "e3a0ee7ed3372dd56757e118b67747a4"
  },
  {
    "url": "assets/js/85.530df1ac.js",
    "revision": "63f156f7c0760ef177bb90f06b53e682"
  },
  {
    "url": "assets/js/86.39f6b5e3.js",
    "revision": "07c1f623dc33f498ec9605e460a0e5e7"
  },
  {
    "url": "assets/js/87.9306925f.js",
    "revision": "4db8b7d643ec981443fd681a78304d2e"
  },
  {
    "url": "assets/js/88.bd29cfa8.js",
    "revision": "9eb75b414d897ca250d387cceea451f0"
  },
  {
    "url": "assets/js/89.a90aa97c.js",
    "revision": "27b1ca31183693d787201b68feb290f0"
  },
  {
    "url": "assets/js/9.17a149b9.js",
    "revision": "a3266e5f50483a6327ec805f000665b6"
  },
  {
    "url": "assets/js/90.de104bd7.js",
    "revision": "40573c473d426c6a6959ea8cb5e8fb11"
  },
  {
    "url": "assets/js/91.e5b084cc.js",
    "revision": "12338d012f6f9ab3b56dd28a758e6679"
  },
  {
    "url": "assets/js/92.388c0cdb.js",
    "revision": "9d492846a3e2d675edf5c2f625f03568"
  },
  {
    "url": "assets/js/93.aad02ccd.js",
    "revision": "18f9ab6136ba152df08d516507ff6d09"
  },
  {
    "url": "assets/js/94.a33ad1da.js",
    "revision": "913cf6ea6b5edc3d7acd1d1bd5d79eb1"
  },
  {
    "url": "assets/js/95.9a8566ab.js",
    "revision": "90e6296ea9f956328096096dd787e2f4"
  },
  {
    "url": "assets/js/96.7196fa8e.js",
    "revision": "eb20e7476f4fca6d148c8904d56c5423"
  },
  {
    "url": "assets/js/97.e1157379.js",
    "revision": "5bd92e5553f3a0474d0b2627673402af"
  },
  {
    "url": "assets/js/98.fdf5a6dc.js",
    "revision": "db796ccd5a7432eb0c44a1bd8838bd33"
  },
  {
    "url": "assets/js/99.7c67dc8b.js",
    "revision": "2ab367080b96a2c686ffcb1fc19556ab"
  },
  {
    "url": "assets/js/app.821997c7.js",
    "revision": "10e0c84ac33d2619606d4511a02593f2"
  },
  {
    "url": "assets/js/vendors~docsearch.62e5c8ab.js",
    "revision": "286552307e000ce7ae5a5027123d9a97"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "ea6ce74ce2b755024601ca8d86f1a179"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "98461797f41d1ac66dde7ec47b99d5ad"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "57c71ad417638d6ef450c91b111bcfde"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "baa255330faf0524c98d11a3ec0bd27b"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "c7ba2629f6cbca33d6df997b3430985a"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "3ac53bc2e15f0b74a619f57b94ab1c8f"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "984822730da34e7e78c4eb5fcd6f798b"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "33a2dfa54845f92528b9542b6920dc26"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "d8a15c8da6f61bfdbf34529e8196c5b0"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "17f440cfd7cf472bb73a08c4c4477717"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "49e16805230b4fd9395961adce306b22"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "9100cfac6ca5efb2579563fd54d9de2f"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "4f2f4dd7f788bbbde2dcbc14c86f4497"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "4962124cbd3f2abb86d60ccd9d23c1c5"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "85191833d8040559e6e99c674023b44e"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "a505fad1e7e3e547f063803a281e96a0"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "36d98134a17ad4be86baf853f5e9cb5c"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "f82b6a64512408498e3f8f0d616c4a10"
  },
  {
    "url": "blog/template.html",
    "revision": "0ac5d2e9a7290c6ac87722f1dedce026"
  },
  {
    "url": "blog/test.html",
    "revision": "78e8140e15f7961131e286241dec59bc"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "bcbf62628558b1bbd16c4ef7e679d919"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "176d82f5b65911727412286e7ec6bd2c"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "e92cf92d8ed5e437aeb2e58b4d3dec31"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "8ac44470311072a1d94c025098f00190"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "b9852172cf598ef551a2a6a32ca87c99"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "54b45bd7bdd7365987b9764850822b53"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "226cff1a33566f00c88555eaccc71686"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "8f15589cf54e0968284f6b907dc1e606"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "6a52bf57087a5aa8b486a7dba68fe28a"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "b2b75458fe1a91b3226e6d1617476901"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "e8fa8a180bb7cf4184199496e8e0d3fa"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "7d1edc4557d3c0786091adc1e9d657b1"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "87a2661d4fd24452bb69eec49f8f8cb3"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "37fc775f6f5a68c383ad15b1ab13030b"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "345d1369dd5aca056819b856847e3d03"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "8d80849d0b899093e84aa35ee46cdda2"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "7c090c8cfbcfa0ccd715409f197187ad"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "1c4258f5a2bd5acf47a645a7f40227e3"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "d35e03f054643196ba6e7f4ad1c76126"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "5b6500e238bac28406f7e79a0fbec9a3"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "857b6526d7903eb37348a7aac70c2642"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "bc3799f0cace20f60756bb4ea25a25ac"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "f9a9a82bfd9f8e126031f624d21741e7"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "f01cda14fc28f6db9f75d2e170b7880e"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "0cd28974395b444c330d00537a36d852"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "1960d17c65db4130d2895cfc20ac28a6"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "d10c0406a660d2ca8384fbbcf4844d65"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "cbea52138218bcffec50a7bd4ab60ddf"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "b88647ef6b415adb3a8d707890266807"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "b2b8e6a386856531ef4d1795f4e6a804"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "12e7aaf774f438659e5e26c694a85127"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "830828c461de57f9864331d53e019ca9"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "6868d1da60848940c2cc54a6277d770f"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "4d1406de072c9d9859286d3a2994322e"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "0a23ee5cf596fd7a8b25d415f09e5fce"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "abfa9fd05e61f4b0f4e278f01f89573b"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "ebda3b07efa7e271ad56850e0d16c16f"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "ce12ff66cb7133210cb7539373b38933"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "704a77ac0c6de5c4c908223a54d3d57c"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "f795a15de64551ed13b0e2efe21c25d8"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "946d6c4331f02f97477fe48c827f903a"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "58f58f4d006649ac576828aeab3f9831"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "3cd80d98882a15f57812c1b1c1a18dcc"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "c6da4ef6666a8de372dc73ee894508b0"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "3ab3f94f925527408c4c0007ce813d72"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "aac6e35674cef946a402e18877a4c7c5"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "e57175ea79b6741fcac85a3246f3758f"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "a606451d793a37cc72ece46cb008632c"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "e859d1ed1d9e7f4929dc0b7248c12942"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "92d39455cb7df049b3cd744b5525dca3"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "f3e5c2daaa67d9aa9efb80c38c179484"
  },
  {
    "url": "cn/introduction.html",
    "revision": "169fa36c734ba7d1828a016e21ee73ba"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "63c80dbb1c07d5708061c856cf022248"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "e63516ae6a31f580255f516b70014cc4"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "d8290e12a06f0653f2ace16f5b8d6800"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "6369b1b0abe071bb359c99ff79575030"
  },
  {
    "url": "examples/example.html",
    "revision": "4ca0c5c826608d0637a70ab42cfb8a5b"
  },
  {
    "url": "examples/project.html",
    "revision": "8700702c21e3b811e942b039a4fad207"
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
    "revision": "0e6eaba21bf18f011685caa502d34457"
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
    "revision": "4c88bf2a1e6b982c7c209123f8a4b41e"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-zh.html",
    "revision": "f84755bd491f82a378bd095a1096bb63"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend.html",
    "revision": "006c751173e1d4621b44d61f377f5988"
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
