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
    "revision": "76f61b2c90330ebf56befc7029b19cc7"
  },
  {
    "url": "assets/css/0.styles.2a222345.css",
    "revision": "9334008b13c34b87210331613f7fa42f"
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
    "url": "assets/js/3.46699782.js",
    "revision": "1113c5780a6f271ced5ab6ad1785dd78"
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
    "url": "assets/js/43.d8022c5d.js",
    "revision": "315873ade21a66e09c4f023eb8040447"
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
    "url": "assets/js/55.73419b0a.js",
    "revision": "dcb451d2f2e19649e12a75e9eb378107"
  },
  {
    "url": "assets/js/56.84fd8e67.js",
    "revision": "2d5dc54f95e2b584d07c3e705599f2ff"
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
    "url": "assets/js/65.0ded6326.js",
    "revision": "cc88eaaf29c35de1448d854d8c5aa6a8"
  },
  {
    "url": "assets/js/66.a72c4e88.js",
    "revision": "a4b6d6aed1c9f1b2ee4ba21f92480952"
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
    "url": "assets/js/75.f652518b.js",
    "revision": "4e6f56fff209bee5e4364f59c7ab0f5f"
  },
  {
    "url": "assets/js/76.60e7a9bf.js",
    "revision": "b4df831a769ac8d410e403c5228a378d"
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
    "url": "assets/js/87.9d1a5b87.js",
    "revision": "8263dd91fed42216da1b7327cdc3965e"
  },
  {
    "url": "assets/js/88.674ff5fd.js",
    "revision": "65c53977358392fc59ab3a90e6e29ec9"
  },
  {
    "url": "assets/js/89.3b3b99bb.js",
    "revision": "6f9087545e7123c4101daa1428bce797"
  },
  {
    "url": "assets/js/9.0eac70a7.js",
    "revision": "800a90e08dc6b4c3870d9e13bb017e52"
  },
  {
    "url": "assets/js/90.262db968.js",
    "revision": "1b36398d4a5ea92c7f023e33cdced325"
  },
  {
    "url": "assets/js/91.00d61b46.js",
    "revision": "5153e243e9c4f190a8d119a6557f90c6"
  },
  {
    "url": "assets/js/92.1177cc41.js",
    "revision": "987163eb883f4b739b292b0ca952fa88"
  },
  {
    "url": "assets/js/93.1afa4b7d.js",
    "revision": "296c766bd8f3f949f4123b0a87d647b4"
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
    "url": "assets/js/app.97e0d469.js",
    "revision": "8e7814ff6e74043f0de6a27df170d47b"
  },
  {
    "url": "assets/js/vendors~docsearch.e31874a1.js",
    "revision": "21cc22616b4f45b58738adc3280a4de3"
  },
  {
    "url": "blog/adding-objective-c-code-to-a-nativescript-app.html",
    "revision": "d97af1972544dbc63980ec1f18b39ee7"
  },
  {
    "url": "blog/automatic-nativescript-app-deployments-with-fastlane.html",
    "revision": "afafcd18782bac8d4431c0bd45fcb66e"
  },
  {
    "url": "blog/building-responsive-apps-with-nativescript.html",
    "revision": "d7197d0e6f6a36985f65d88081b11de9"
  },
  {
    "url": "blog/client-side-storage-in-nativescript-applications.html",
    "revision": "635cd936f2ec9f688ab22e63b959e47a"
  },
  {
    "url": "blog/dependency-versions-in-nativescript-playground.html",
    "revision": "bf0c457caa2bf941b693b1b62cb76a5e"
  },
  {
    "url": "blog/detecting-shakes-in-nativescript.html",
    "revision": "af3b616fb4f96fd23b5c2b49fd49b8ad"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-one.html",
    "revision": "3e3eafdda0af4086e526503df3df6f55"
  },
  {
    "url": "blog/getting-your-route-on-with-nativescript-vue-episode-two.html",
    "revision": "aaa4b0ce125dccc10cbe0c538149add7"
  },
  {
    "url": "blog/how-to-convince-management-to-use-nativescript-for-mobile-app-development.html",
    "revision": "28b467f169581398757496b89997004f"
  },
  {
    "url": "blog/language-detection-with-nativescript-and-azure-cognitive-services.html",
    "revision": "d7047f5e4c740807fac3ad69b3a016ab"
  },
  {
    "url": "blog/listview-radlistview-and-repeater-why-do-i-need-three.html",
    "revision": "41213d9d52b3e790086c9dc49a21a0ca"
  },
  {
    "url": "blog/managing-component-state-in-nativescript-listview.html",
    "revision": "7bc305d55ef1e20ee8e9384ebb86fa66"
  },
  {
    "url": "blog/migrating-cli-hooks-to-nativescript-6.0.html",
    "revision": "e46e7557fa5586038169a04b2ec9bde8"
  },
  {
    "url": "blog/migrating-nativescript-plugins-to-androidx.html",
    "revision": "a9d562e95ccc609aee28f7813cf3489e"
  },
  {
    "url": "blog/nativescript-6.0-application-migration.html",
    "revision": "f89c072391640f81c5e5fba9edb46921"
  },
  {
    "url": "blog/nativescript-now-supports-angular-8.html",
    "revision": "eccf2b3781d958f6eab0ad4ea2cd7a7a"
  },
  {
    "url": "blog/offloading-tasks-to-worker-threads-with-nativescript.html",
    "revision": "0399ec7f49225369d8a132bff43e5968"
  },
  {
    "url": "blog/tabs-and-bottomnavigation-nativescripts-two-new-components.html",
    "revision": "57daf9000dafb7ad6743b90cfe99f1d8"
  },
  {
    "url": "blog/template.html",
    "revision": "3b63aed7a398d1a1094232a5d4ae84a1"
  },
  {
    "url": "blog/test.html",
    "revision": "f032f0371a97415bf4855db14dc0096f"
  },
  {
    "url": "blog/the-new-ios-runtime-powered-by-v8.html",
    "revision": "ca212c4ada8029eaf855c0ac7cde213c"
  },
  {
    "url": "blog/tips-for-vue-developers-picking-up-nativescript.html",
    "revision": "8e345051103e165b37e71464f4869ddd"
  },
  {
    "url": "blog/updates-in-the-nativescript-cli-6.0-bundle-workflow-webpack-only-and-hmr-by-default.html",
    "revision": "946b802552d8d5859fab78a9ace9b05c"
  },
  {
    "url": "blog/what-the-apple-supreme-court-decision-means-for-developers.html",
    "revision": "9a35c36c1cc5b2ed5b4c5f928b278674"
  },
  {
    "url": "blog/whats-new-with-nativescript-dev-appium.html",
    "revision": "825c14e3fbe99b5188ae25b790a7adaa"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application-now-with-cats.html",
    "revision": "95398a2299a6f5d9832157f8085675d6"
  },
  {
    "url": "blog/working-with-vuex-in-your-nativescript-vue-application.html",
    "revision": "cfa0f055cf394fd207d6ce3999c36fbc"
  },
  {
    "url": "cn/elements/action-bar/action-bar.html",
    "revision": "2530c948d223cb350dd0e2ce60ba3df1"
  },
  {
    "url": "cn/elements/action-bar/action-item.html",
    "revision": "d889fba9e0e8df9164dbb4d41d7edb61"
  },
  {
    "url": "cn/elements/action-bar/navigation-button.html",
    "revision": "4b55f0161333a153d5cdb4145c58e1a2"
  },
  {
    "url": "cn/elements/components/activity-indicator.html",
    "revision": "8876269e713b9227ae9c4efd260675c3"
  },
  {
    "url": "cn/elements/components/bottom-navigation.html",
    "revision": "be4e438fbde4c48aa4d5082361398f7d"
  },
  {
    "url": "cn/elements/components/button.html",
    "revision": "822440af455984f9223ae7751848a988"
  },
  {
    "url": "cn/elements/components/date-picker.html",
    "revision": "32154abfb34739b9d5af952d4f73e884"
  },
  {
    "url": "cn/elements/components/frame.html",
    "revision": "4d824c8940315e66b1ef9a8e03f1f90d"
  },
  {
    "url": "cn/elements/components/html-view.html",
    "revision": "bfd8fec700cd2dc0999b1f935ad47e0e"
  },
  {
    "url": "cn/elements/components/image.html",
    "revision": "6b78b03db9f9859b122e4fa5c9154571"
  },
  {
    "url": "cn/elements/components/label.html",
    "revision": "002db2df81f5ec35896dbec6421fb9e9"
  },
  {
    "url": "cn/elements/components/list-picker.html",
    "revision": "6483453beda694cb92f2ff8de32ae804"
  },
  {
    "url": "cn/elements/components/list-view.html",
    "revision": "b4bdc0bd516ebd7212482ae3ab41ffa0"
  },
  {
    "url": "cn/elements/components/page.html",
    "revision": "c89a459f001c25b18c8ef085b933bf75"
  },
  {
    "url": "cn/elements/components/progress.html",
    "revision": "f230600e380291628c376b8367cb82a5"
  },
  {
    "url": "cn/elements/components/scroll-view.html",
    "revision": "2264c3aaae6776e177d9e3e1ea9619c3"
  },
  {
    "url": "cn/elements/components/search-bar.html",
    "revision": "f0675875b3ae91d0acdfa33851a59ed9"
  },
  {
    "url": "cn/elements/components/segmented-bar.html",
    "revision": "effa2e74d5a743d8d9e71e847f2c0887"
  },
  {
    "url": "cn/elements/components/slider.html",
    "revision": "21cfe7bc4ec0455ffd65414e7cac5417"
  },
  {
    "url": "cn/elements/components/switch.html",
    "revision": "1a73aa835418ba768db6326e6ed387e2"
  },
  {
    "url": "cn/elements/components/tab-view.html",
    "revision": "69c0254452a3395548d85f79d6e4b862"
  },
  {
    "url": "cn/elements/components/tabs.html",
    "revision": "a22ec9028a16512b3b197d5e877c31f5"
  },
  {
    "url": "cn/elements/components/text-field.html",
    "revision": "ad29fbd00d09633f4827926129d733d4"
  },
  {
    "url": "cn/elements/components/text-view.html",
    "revision": "dd552ed3f07b67fbe2fbd879e0435dcc"
  },
  {
    "url": "cn/elements/components/time-picker.html",
    "revision": "e1764ef62d0cf327052c08e74b04cfe5"
  },
  {
    "url": "cn/elements/components/web-view.html",
    "revision": "952f8f08659715bc004548e905e8dd95"
  },
  {
    "url": "cn/elements/dialogs/action.html",
    "revision": "d60c9b8ca3536a66fbe3bbbb00e2edd1"
  },
  {
    "url": "cn/elements/dialogs/alert.html",
    "revision": "ce28298dc841cb49ec9bbc74b2927484"
  },
  {
    "url": "cn/elements/dialogs/confirm.html",
    "revision": "869328cdc9f506d38a04e26944c083cb"
  },
  {
    "url": "cn/elements/dialogs/login.html",
    "revision": "89d9c8c0206bc4783ed5130146b7c7b2"
  },
  {
    "url": "cn/elements/dialogs/prompt.html",
    "revision": "7c525fc3ec1ca96dc3fe064677215080"
  },
  {
    "url": "cn/elements/layouts/absolute-layout.html",
    "revision": "e6638355991b1309a64d0b4bc65eb1dc"
  },
  {
    "url": "cn/elements/layouts/dock-layout.html",
    "revision": "914e5b5f3941617032c68e5d27b03e5a"
  },
  {
    "url": "cn/elements/layouts/flexbox-layout.html",
    "revision": "b40d2b4350ec9eb7c139a8de3320cd1f"
  },
  {
    "url": "cn/elements/layouts/grid-layout.html",
    "revision": "30d9bb6f534ef296ddde1757af1de621"
  },
  {
    "url": "cn/elements/layouts/stack-layout.html",
    "revision": "a505ab8c660d50a9184cba7084193faa"
  },
  {
    "url": "cn/elements/layouts/wrap-layout.html",
    "revision": "e1493a56aef10290683dfe44a97cd872"
  },
  {
    "url": "cn/getting-started/1-quick-start.html",
    "revision": "7769659683f8ef659f0ba603ad930849"
  },
  {
    "url": "cn/getting-started/2-playground-tutorial.html",
    "revision": "00861560d515587840c74be0cb9d3b2a"
  },
  {
    "url": "cn/getting-started/3-installation.html",
    "revision": "6c8a6d213c6cb18bd8afdea5277e495c"
  },
  {
    "url": "cn/getting-started/4-upgrade-guide.html",
    "revision": "8d419a0e54065a51359f20e2ed72c658"
  },
  {
    "url": "cn/getting-started/5-vue-devtools.html",
    "revision": "b3cadca5607a45599744029679ac6fa4"
  },
  {
    "url": "cn/getting-started/6-nativescript-plugins.html",
    "revision": "64c1b6904aa3e1fd3cb54df4fd7ed35c"
  },
  {
    "url": "cn/getting-started/7-vue-plugins.html",
    "revision": "c2fd40740365b1d1d47b1d09df6700bc"
  },
  {
    "url": "cn/introduction.html",
    "revision": "cf6f8e53e90e1861de528d94cae9280b"
  },
  {
    "url": "cn/routing/manual-routing.html",
    "revision": "576a6cef9f3e8e17bdf26c921ab3f9ca"
  },
  {
    "url": "cn/routing/vue-router.html",
    "revision": "1b4a05d690d1b85c8fe42f594f2d2b9f"
  },
  {
    "url": "cn/utilities/v-template.html",
    "revision": "dd54ff8917e3115637531855c94fe786"
  },
  {
    "url": "cn/utilities/v-view.html",
    "revision": "b650f2a20facaaac9c2ee83e68ff35f6"
  },
  {
    "url": "examples/example.html",
    "revision": "d0c59e6061eed79c9cd0c476cca6ec3b"
  },
  {
    "url": "examples/project.html",
    "revision": "e01d412208591ca3a962cc30cac3dd73"
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
    "revision": "41a06da6f91c6931fb053ece74ae989d"
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
    "revision": "6203b069b8e0423abe1636414acf47e5"
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
