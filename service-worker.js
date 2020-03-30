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
    "revision": "9263581a8dda6854bd0d882903e97d67"
  },
  {
    "url": "assets/css/0.styles.305e82bb.css",
    "revision": "881b9c3b0f4ec6ef19967c9e8933141f"
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
    "url": "assets/js/10.076b2b06.js",
    "revision": "8add4ec5ab8ef5689d4d8276dd23a5e3"
  },
  {
    "url": "assets/js/11.9e09d74e.js",
    "revision": "e943893b7a1dc88a074cad9000315597"
  },
  {
    "url": "assets/js/12.cff8ea01.js",
    "revision": "36f02b7a74e7d5fc5869d70178226981"
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
    "url": "assets/js/20.c61ed7c0.js",
    "revision": "474aced70612ffa98cdd5d647a12c2d8"
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
    "url": "assets/js/23.71da9bcc.js",
    "revision": "00c74b258dc132f1ae9743521a6574b1"
  },
  {
    "url": "assets/js/24.19586243.js",
    "revision": "2e35495ba52f41e9cadac66a62f89ffa"
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
    "url": "assets/js/29.e5afa56c.js",
    "revision": "f28da8be4fca96185e386660c1738714"
  },
  {
    "url": "assets/js/3.46699782.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
  },
  {
    "url": "assets/js/30.dcd6ed8e.js",
    "revision": "79f1795d558a9a7b47c58bbaac996df1"
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
    "url": "assets/js/4.f1309d73.js",
    "revision": "cfc519beb81dddccdfa579167c2933a8"
  },
  {
    "url": "assets/js/40.d4db9975.js",
    "revision": "7f53a7faf4ef5b45fa8e9c0eb18acbbe"
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
    "url": "assets/js/43.a38e33e3.js",
    "revision": "fc0dde87750fe30cf221dcae26ab1d20"
  },
  {
    "url": "assets/js/44.780db84c.js",
    "revision": "79e408d9c659db2781d723ee6a0ce73d"
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
    "url": "assets/js/50.74cd7f67.js",
    "revision": "bad95102e3de2abab0362a921c41d31e"
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
    "url": "assets/js/68.f605d5cf.js",
    "revision": "1d8eafe6d03d636740a274c5b1491083"
  },
  {
    "url": "assets/js/69.2c63f886.js",
    "revision": "3b4347082630334b1702cf4d6d4215af"
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
    "url": "assets/js/71.fb3b725f.js",
    "revision": "f75790748da945545171d5b983175e83"
  },
  {
    "url": "assets/js/72.7236949f.js",
    "revision": "fd97c759491d2b926dbe79bcafb813af"
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
    "url": "assets/js/9.ce99e163.js",
    "revision": "332dec7848edb3255318c68baa2834a2"
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
    "url": "assets/js/97.e07dad73.js",
    "revision": "e9d57ed99774ad46bcab6207c7d83d49"
  },
  {
    "url": "assets/js/98.60303794.js",
    "revision": "dfe957aaf4e0129b1de4ee1c74b729a1"
  },
  {
    "url": "assets/js/app.73936fff.js",
    "revision": "93251a0c9eb783a655fe7f99be86a4ea"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "20428e250f9dc2df80b4207da57296ef"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "1300089fdcbddf3494c4a8d5fab78d82"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "b69960a8372bc21fa9ff2fb73e3ad0b1"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "3966424fb01466afa1aa0cd584e22403"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "271986265b29309624ae99f55ae71cc6"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "88e52daa68cbde2681a5e32295dadb50"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "bd274ee791a7196927f9f1bd3a2b796d"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "727acf0222e1f108c81bc205e3f5937a"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "b6e4a0dcb8e908338045c63942a11878"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "cea6858ea12fea8de62970670fc16474"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "d6df41f9af5e1e99ca600b2ee6d33ac0"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "3f51c56873566dbca191d52113cbe637"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "f9b5a487f17391d681b419ac0726814e"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "5d537ab9d149bd8caaf4289d8567b5d5"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "c4f7ead3c8f1e6bee3776d42400dde3e"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "aad2843dc962b42760a63f98af05d96c"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "72fa5a3d2e74399f9543769abaa43521"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "c2644b98ab4d1f107c4877419963d521"
  },
  {
    "url": "blog/template.html",
    "revision": "3da5369f47b91c1dba53a66714d7cbbe"
  },
  {
    "url": "blog/test.html",
    "revision": "6716455ebb5a9a43980a8616beb2a5fa"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "7b79d9cba254cea9af84af99565728ae"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "91f93aa0b7b5b8a0ce49c6aaa80fe61e"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "1116ced8ae9dec32923df46ddf1b9bad"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "3f9b06c76fed4c7feb96493ff5423dbb"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "7d0eb60d3ba2ce568b54a38ef9a5becb"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "2f0cb142cc09cfc8c1c13d4d245d7663"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "bf05b0a9caafd0a2b4a84ce3d044bdf3"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "d28e1fc866589ddc9d0d33cec9ee90b5"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "daccae96c9101c6950ebc07da8a75980"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "0dac2c03f8c734f8200437e371e81dbf"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "4bb758e904c46c65af0b1f8f8bc3929f"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "8fac070bb493334ba4b378187405acb5"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "a1669f88249a8f866a4eef028a39f8d3"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "b52c73100b323d0a33144cb1d030afef"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "633a6aaf19db9ed8d1aba057641be7ed"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "9b0863512e32180c7d8fe0577e922005"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "e264ab4767ab71611f0a6fc8e638e60d"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "fd142eb3e785752d427d664f286f6db1"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "c13d45092a294e55b18ebb2150e903ef"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "dcdb721c7cd3abd85a4a5e7642f91247"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "95edd4048f7bde1af3db19eadfd63d3b"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "e7cb9cee7699eeafef6386470528558f"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "3b321811f0920baf1685e032397f6d69"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "6d4843cc85a2d6e3cf46772d358d50fe"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "b5c61d1de3cb03da7d3c1d25a18b74f8"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "145bb1cadd2c61f1f8bbc995fd295339"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "080ed8af3b0dcf735bc3900c692e9b62"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "0093571723d9a005ff8470be6556eb12"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "c6beee16a3705618cda71821303f5b95"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "eabe6a9595dba023b06f6d0e87ecbb8d"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "7645f00497da2ec95134cfcc67049d0f"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "63b207d53926fa739fcaa1d310dbfd30"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "8793b5ee14103ab5cf1deaa1c55a5af2"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "7ec7a6596072e04d4bc933c662f3ee7a"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "91e2cef32f218cb9d7f32291cee63a3e"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "f08722b79d74b0d039c836e8fa07cb36"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "621c1dd403fdff29fe5c3b527571e2ae"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "7eec21f7fb5f5f562d137a254ad34458"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "cd13611a6bfe37f353658a74b0813bde"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "d47ce9e5ec8ecaf0c5a9e1f6093466fc"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "1112c6332d67287a635c1a59b96f60b5"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "9cb0db6f000e91eb801789eb93927529"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "75f5c1d5c3d80cd48eb107ee8124e4e0"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "25a9ff1f30325720ee5a30cdbd121962"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "fd2f92a7f76b6dba7b1a23c8a60a70ef"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "4696852c77f2d9e917db775cf43c9a7a"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "64b01b6e3d90aab513b9c7ae2a37c927"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "a9604124a5833a35b8ffb60f4fdcf99d"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "a0f5abb29e11d7d6a153bf29d1eb45f5"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "35ead0613d17b8fd8d0301e751a70895"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "62ce1557a36f1187dc771d3bd8ebee57"
  },
  {
    "url": "cn/introduction.html",
    "revision": "8e906c099a1ac73fc7d93e2ab9e756ca"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "5396dce4a8a60ed7247b43402e73ece6"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "10318f173103569a3415fc13fda3d841"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "e27a743ec11abaa229fbcdf2b4ec389f"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "df57945e40253bde66e864639c117544"
  },
  {
    "url": "examples/example.html",
    "revision": "5a77a9725cb90ba2feb2aafcf04223c0"
  },
  {
    "url": "examples/project.html",
    "revision": "c82f95b39f13e5fadfc3785131201776"
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
    "revision": "800f35a5782eedadf84c0cf00d499218"
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
    "revision": "03337e3ffd9f4b2d43ffaccd6abd5361"
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
