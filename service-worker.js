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
    "revision": "00749333f00dad52dd56f3d1a5f2c453"
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
    "url": "assets/js/24.1363061d.js",
    "revision": "d10b2934d7111d46a1e1c07c73ca4a84"
  },
  {
    "url": "assets/js/25.9e3856a3.js",
    "revision": "1d3f4543ef6a9f7651bedfd293334914"
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
    "url": "assets/js/44.f6fb3f9c.js",
    "revision": "c7c84c4a88c9e654ed926df0cb6ac390"
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
    "url": "assets/js/53.930256aa.js",
    "revision": "a59f2cd3750cadf9882d0286c74ed411"
  },
  {
    "url": "assets/js/54.fd348066.js",
    "revision": "d556de7907dbb28c438a826e2ceee3d7"
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
    "url": "assets/js/62.5e4ef87a.js",
    "revision": "100e4aaadb91e1db67d328997bf316c2"
  },
  {
    "url": "assets/js/63.61de2bfa.js",
    "revision": "5ae41a792e841ea84289fb290e9063da"
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
    "url": "assets/js/87.070b612a.js",
    "revision": "4d18a978e75c41612799eada43abd740"
  },
  {
    "url": "assets/js/88.674ff5fd.js",
    "revision": "65c53977358392fc59ab3a90e6e29ec9"
  },
  {
    "url": "assets/js/89.1c1bc435.js",
    "revision": "57fa5f9131b6770cd0287147a9262b95"
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
    "url": "assets/js/app.e2924906.js",
    "revision": "224d4a9d7c0cda0ec177ad0f04489a38"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "85a79ac4228c3b1f7cc8039b4ef79f17"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "c8673bf7940267ea438e3bf00bac6fc2"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "b57143c04f5387d2c0718ea389cb9a64"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "7ea3c754efeee7a2620805867fa06870"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "2551e0aa80a6073eabedbb38e97e76ea"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "8832d9c7738cb562041e3632d7faa700"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "e8a5c79f007dbc077c7c2d4bd7ad94e9"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "78217ccc13e18062a9a8621f265731db"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "0f1f38cc9079e34bf0454965a4665ca4"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "056bcc51835d1f78c1f1cce90b685729"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "7a4d01990b6e2138a0c59ded44ce69fe"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "fde056c9d3cc6794426725114a3956af"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "85740e9db7910007fdcb27ea1ce9016e"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "e2dc44c63ab1c91e7e3ce0281fe0426f"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "fd4219da6c4be1b748f3bd43a9ef1809"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "7ab8f0a9662f38b8d2f1f16e7142c790"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "4bdf2f739ae5b78b3ce076b9839713a3"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "09985585813e95e59722930c0571d944"
  },
  {
    "url": "blog/template.html",
    "revision": "c221591fdd31c03f515c5ca50e84a072"
  },
  {
    "url": "blog/test.html",
    "revision": "394a08e8cbc4f65684a99e5b36967b1d"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "6160e827d3c30801745cf3e27979a431"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "32b3743ff019b3434abe4e6e834b91fe"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "8abe7d2addb113aecab258e6915786af"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "11e795d1278094e00fdd815617057372"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "37bcf7a10afb964160e64be59bd4dfdc"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "4fd01c54beb2477c3979f3280ea33406"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "39ddd7e6df3dd73d49ce07d106fc8425"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "933600d18b5ce6ad15ead339cfafc5a5"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "ede22f5b666291918f95e3c37ea54c29"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "aa666d36b25aa0b97c07c3ecaee8e85a"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "729a97b301fa98e1f90abc98f207ed90"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "55937647af05323f41e5b6113978842f"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "84050c9ed6414753ac052c756d77b529"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "d0cf6a2521140ed155d9661064c8d61c"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "eb20f262b5368a0299a29d8f3edfe6bd"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "e38589bafdef9e3f89cbc72e0bf6c85e"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "e349b38dbb63451e5abf88e806f8f8b3"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "20f8bf222a67c0a85f5ce183e647d88b"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "deccf1be6c1527193ccae5ac24ed0170"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "4ba975e0e86edb2a6345644b64d14e30"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "f2ecf12bbab0735da95a1d2ca50c57b3"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "e4914532b76deff201b732c60a2bb0d4"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "913ddb572efda22f7ebf396b7e3fb8ad"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "134f9452b976444ec82ca452f433fe0b"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "950be795ac91898055a4d0a561e96950"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "ce0057904e433cbef72f5ebbb741df89"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "3a9b79ba97474ab92411ca7f5c51a4cd"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "ff313884f0b38e272df4e7c50c4224f1"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "63072c0103a436c22c7cc553f84a4266"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "fe140d34178d464aca24074f33016a21"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "1007fdd4d25e5ddc24b75f4aea887b3a"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "c4bb4dc509e2f936db92a99e5983c355"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "3118cfd025e75745d31cb90e9410d8b4"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "82b97b296aea5258d5dce9eef1a5110e"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "3c0006dc7ee512d0164b47c5989c254d"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "e2aa554d4db5ce88538a0ba2c374c259"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "2240d2b4d2f7121682fc665dd7d9ba26"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "a5703d5c61d563d6a3cc48154b8cdbcb"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "7141b84451b2858c7af2d3fc4ff9d5a8"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "e8beb0ffc86c46556b109e6445875adf"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "a63cc17d6bc47f3b983ec3458268d412"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "d97a6073f9df1b76004eaaa388158b1d"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "4e4ffd6dbbab221974a3583e8562a8f1"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "6802c60c886043a02b561acd5283718b"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "b70e980a6e7b781db99b4c7161c06b96"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "6f2b7fd9ff3bee7441320a36987b33a4"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "f28cce26a7a56b265220723c3186e16a"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "a27c502cc207fc424d38893c6999b34f"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "00a9b655dc5d0d431dbfbfb3a844ef5e"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "77e2ebc22ae72e3e4e69e3f0cfb65928"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "d0d87f53fcdfc334f0eb297cbb29c686"
  },
  {
    "url": "cn/introduction.html",
    "revision": "838c7c8e64b0252488ddf64426816a7e"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "c7bf20be9df8f8ca18b240562697f8d5"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "e60ce2f22bb000a0d5fe54b42d917262"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "e8313c4a12f590a02dd09f5a0fa2e68d"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "c5f0a64b4d94947ff17b7e289e7f6748"
  },
  {
    "url": "examples/example.html",
    "revision": "618eb4745e6f24d56e878a1fa9137578"
  },
  {
    "url": "examples/project.html",
    "revision": "40c9781ea1f75a2db20ad5e42ff44c15"
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
    "revision": "d85e374b8fbdc1bb68f92a248b6dfce4"
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
    "revision": "391eb68d8a91f4a3bfa8d56106928c4a"
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
