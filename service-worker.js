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
    "revision": "bf3abffd12953e536c773beb8129e450"
  },
  {
    "url": "assets/css/0.styles.ca1297bc.css",
    "revision": "592e056fe84d82e13f9cfdfb97f14033"
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
    "url": "assets/js/11.f211f172.js",
    "revision": "53acda711460fab57e2bac114862b1f2"
  },
  {
    "url": "assets/js/12.8241bb75.js",
    "revision": "9ce3310ecf4429766bc1c9635f572947"
  },
  {
    "url": "assets/js/13.f2106ffe.js",
    "revision": "75fde811c28371e11ba21049b3ea34a6"
  },
  {
    "url": "assets/js/14.d58bbbd1.js",
    "revision": "33257fa82f9fd3bf06fb64e83417730d"
  },
  {
    "url": "assets/js/15.b537c350.js",
    "revision": "8e04f108378f686ee7bd0e1cdefda704"
  },
  {
    "url": "assets/js/16.6c503765.js",
    "revision": "3cc68ad2a7c80d2ba3f07d1fb3220190"
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
    "url": "assets/js/20.ecb7f63a.js",
    "revision": "98af801c4caf62f3e62996799a665d56"
  },
  {
    "url": "assets/js/21.3a6fb957.js",
    "revision": "1b120ee2e9a442dc88d82283d1697704"
  },
  {
    "url": "assets/js/22.902996de.js",
    "revision": "9816f93dd289713c013c35ac4dac203d"
  },
  {
    "url": "assets/js/23.a023ffe1.js",
    "revision": "af30db24c9dc7e0cd106f42afe1e7ccf"
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
    "url": "assets/js/3.5a7b6175.js",
    "revision": "f0c39364767b0afcc70051b812389fef"
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
    "url": "assets/js/32.031b8218.js",
    "revision": "6f0626ae75660f21e968b08b9be10cdc"
  },
  {
    "url": "assets/js/33.3c8ae2cd.js",
    "revision": "8fb7fcb57bca10e328926d708a13534f"
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
    "url": "assets/js/39.d13bda84.js",
    "revision": "01ae619ab51bf704e8aa098576956323"
  },
  {
    "url": "assets/js/4.3f50a02f.js",
    "revision": "12817058e3f068b71bc5f8ed087c0fa5"
  },
  {
    "url": "assets/js/40.5263f2d3.js",
    "revision": "5af622f105db72316422085ddaf6e6d1"
  },
  {
    "url": "assets/js/41.6f75bb6f.js",
    "revision": "fc378e585c3c3ff0613bebc9808efc9c"
  },
  {
    "url": "assets/js/42.ce5d09bd.js",
    "revision": "08ec029d799a95041e4b6d435491e30b"
  },
  {
    "url": "assets/js/43.7b5f7e12.js",
    "revision": "91f1831e11397499649b1b000d7576ff"
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
    "url": "assets/js/47.c7d187c5.js",
    "revision": "3ad76648289cb821d653a198188c7454"
  },
  {
    "url": "assets/js/48.3685e019.js",
    "revision": "6a58515cf9f5aa27e4258eee99fa9043"
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
    "url": "assets/js/73.83487f3f.js",
    "revision": "cc85398c471579ec7cb46a3232c973f8"
  },
  {
    "url": "assets/js/74.8f0a9085.js",
    "revision": "a773db82ab0480fbc59f0d8e5b8697f4"
  },
  {
    "url": "assets/js/75.a558d65d.js",
    "revision": "24f488884f7236673e124dcb2f1f31bf"
  },
  {
    "url": "assets/js/76.d2819249.js",
    "revision": "4c239fd07e2b05e81afdeed7ebfed3c7"
  },
  {
    "url": "assets/js/77.a106452c.js",
    "revision": "de44264eb2fdaa81ab674ebcceef3ac7"
  },
  {
    "url": "assets/js/78.b570ecff.js",
    "revision": "b8f16b1796949ed57f02a61458c50465"
  },
  {
    "url": "assets/js/79.9ce9ff4d.js",
    "revision": "7401d7dc04dfeac3bea4ade5bb08f6ed"
  },
  {
    "url": "assets/js/8.bc6e28c0.js",
    "revision": "620cf604717c38083271ec0322f92913"
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
    "url": "assets/js/85.c3a90586.js",
    "revision": "b7795c4d563651772df7c10e88cbe64b"
  },
  {
    "url": "assets/js/86.b6c6cd19.js",
    "revision": "bfab074d939cd5d46031eb78ecccd653"
  },
  {
    "url": "assets/js/87.e6dcfbf9.js",
    "revision": "0aab35915846fac712450fbb6b6e58aa"
  },
  {
    "url": "assets/js/88.67e6117f.js",
    "revision": "6c6ec3eef74828997cb09b3c47d30a24"
  },
  {
    "url": "assets/js/89.f77a0746.js",
    "revision": "22d78644217e54aa85b702d65bf4176a"
  },
  {
    "url": "assets/js/9.34b8a5e4.js",
    "revision": "9c51d108607dec3fcdf881e874c21f40"
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
    "url": "assets/js/92.f2e8eef1.js",
    "revision": "7aa35ec6a8572a404611babf2ab1b153"
  },
  {
    "url": "assets/js/93.35568f6d.js",
    "revision": "d02c6cdc76de683ef8eac48560a869ed"
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
    "url": "assets/js/app.77081b16.js",
    "revision": "980ffdd578b7fad8182f9853ca9f47fb"
  },
  {
    "url": "assets/js/vendors~docsearch.62e5c8ab.js",
    "revision": "286552307e000ce7ae5a5027123d9a97"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "b3fb6211e7905acb78f25ac36a60f542"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "57764bd3de1a1e07550d57e2b1773f4e"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "28c1351fa04b7dbcd2cef50d02944ca1"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "bbeefee0d4044b031b1c5900dff42232"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "af9f572307615666fc4ad17f24b282e2"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "79ff668228ff8d9cd977dea898cf509c"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "7d3eb3ce3280108a9d7c06eee9cb2cd5"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "eedad3e4c09ff45a7fb19c9fc427a200"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "9a49a774559e3f51d26519bc4a34d60b"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "8e0305050c2dd893dfcb661f74ae9152"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "b94e0c4831806d8538faa7134ce16528"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "36d405990b2977946b3c4932ab677da6"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "85c2278958b9af1cf132a12f4e0ad259"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "1df68814a735a61066d44f00f4b54d3e"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "f34098811cc2c12c76aa86ace234f127"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "310b261e47a1837ab8a7f792a74002ff"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "eeb829de78cc91bb0a1c2b33c9fead68"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "913d9fb9031818f894f1c531abdbf961"
  },
  {
    "url": "blog/template.html",
    "revision": "2cf267dd40d5dd89096695754bd90d2d"
  },
  {
    "url": "blog/test.html",
    "revision": "cd251fb30a6abd18ceef4df2eada57b8"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "ae1da150ab01a0a72034a9ec54443a10"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "efb1ac14da54f7d06023f623999d25e9"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "054ccf377895da1ada5c3746e226197f"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "fe303e1de6333dd529ec77c5063869f0"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "d54cc7377d3ad88edf062ba2d3c88b3f"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "c974736d3d9bac043a3478731fd91b07"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "59cb623ce7c6c090ea8170d8267d7541"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "aa036a279c612299a82a5762c23e9788"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "2dab18e82306f71e01939f70d6bb5710"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "c826cf24eba670d710664eeb2cb19acb"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "a06ef805fcc004b6d0c08fff3659bdf6"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "66bb36b54c057afa73aefd25fafc66ab"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "745cd6b549660939e86eec4c9a1365e2"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "16b058d0d31b785558302b19e93e2f5f"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "d00a429b5ff1b7b19169b0edca5082d6"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "ef2af3c1bba330eb23dbea83ae72af3e"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "aeddef91e1586565723fe51b2bd6d28b"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "3d0eee7c0579b4064485fadae86ab725"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "858e15faa9b92ca52a2c46cab06e6669"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "7ac179aab01ded4bab185b549ed2c5eb"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "ccdaa1d4c14dcaed5b102eda10ee7d32"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "b5dd4fa81505045f94d1dcafd785464c"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "31a5ce9ed716a27486c01d9c8624f875"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "ee83adcc7551eb27ab66b6fb032ee800"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "d42fe3d355d7aaecc3219f86a00ee72f"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "e4cbde65132c187f57eddc257a276d86"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "9ab54aaa1d3454a25e5db11326caea3d"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "cfbd5fcbafbaf99f5c9efb653c8a9666"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "5727426b3c9c3deabc5512a664465769"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "0bab881bcb19e431bbf158b85614376c"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "1cbebde220cb344dacd915fd85bef6f3"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "aab4b05ba49ccf49f1fd9708fe270cc2"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "30300ace242ed95881adda2a6829d432"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "e88abba9f90a5d74001794d7d5cb1df5"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "1ed8c18d3a4ac73db03b9852dc79f931"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "a1c1658b9fe5f864a205714394da2602"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "6b89304140c7eedc443e5bbf05c78a57"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "829631ea128ceff226712b0c7c9ed851"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "beb4eaee99bae3a98e6c54fd1a90d113"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "370e32a7c907267bf4c7845ed7fdf7ad"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "ca9061753096c1a58f3baf9f8710f0ed"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "d19f62ef445a5cd50d7d0e8fe6766278"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "3126c79d16a4f1a99818d83a24b8450c"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "c66bac8e778828385c98a1bca44a8cc6"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "7ee3dee51e4a62c6f8b8fd505d4dfc72"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "7bcb9f2705f3923f3ae13f269bff815c"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "5f160485551ba01aba5d44fba542b2be"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "04d85d6a18f76fbef85be9ccf4f8803c"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "713407786395a630547bdf9b69701713"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "87a2784b3a83a88b1bea7cbc82b9d0ac"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "efcee27f24f3d0058f0da9848b6119bd"
  },
  {
    "url": "cn/introduction.html",
    "revision": "8404e5d941b26e3230f22df35d640779"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "2700743db2fe155c1a8b8f5e4688e332"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "bef5c6e981484ca6c918890b91559848"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "c03b261efa2b57de27d96e357ccef62e"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "e0aa199d13e8a35a483c3466f2f52906"
  },
  {
    "url": "examples/example.html",
    "revision": "718dc3966a428fcbfb1461a73cb22d7a"
  },
  {
    "url": "examples/project.html",
    "revision": "fb0446b7bddbb6dfa1d422edf2a20ebb"
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
    "revision": "e040172c93a806fdec4f8f16fcf16ab7"
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
    "revision": "8d769df3e6dd279bcc7dfd4722a385ca"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend-video/nativescript-vue-extend-video-zh.html",
    "revision": "d3fb9e1a56d0f781572258ca77ad7a4f"
  },
  {
    "url": "tools/nativescript-vue-extend/nativescript-vue-extend.html",
    "revision": "dcc78d9be611dec35df69be106d0c93d"
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
