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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c9e79a6448f0e205f9d42774ab65a6f2"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f6b83664.css",
    "revision": "e0a7da072f821dd2428797e33897aec1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.62e26f44.js",
    "revision": "c4774515ce9f6b5e95fa18ad8f67ef55"
  },
  {
    "url": "assets/js/10.1f8e435c.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.04d5551e.js",
    "revision": "a9f8173d5cf0baef60fa34c75aad6a88"
  },
  {
    "url": "assets/js/14.69b33200.js",
    "revision": "77d17475c9b8ad304bb72c47f020c9d3"
  },
  {
    "url": "assets/js/15.36ece724.js",
    "revision": "6f480fc48aefdf2339b48b2f409d751f"
  },
  {
    "url": "assets/js/16.385bdaa8.js",
    "revision": "0e6a4cf7495dc25ccbe19d6aaf3a4e44"
  },
  {
    "url": "assets/js/17.f7498c42.js",
    "revision": "d3bc6a0493fa1730ed403006773654dd"
  },
  {
    "url": "assets/js/18.cb523fb8.js",
    "revision": "0ed5a987aaee77829015b68b22056680"
  },
  {
    "url": "assets/js/19.88c44e1c.js",
    "revision": "7d39b97edb606c113074cf9c9d2140b6"
  },
  {
    "url": "assets/js/2.6714ab6b.js",
    "revision": "d13ed92ec8c18eedb898c47c79bb7d66"
  },
  {
    "url": "assets/js/20.85580ecd.js",
    "revision": "f9633b4709fc51ef202ef916157786a0"
  },
  {
    "url": "assets/js/21.e4c216b9.js",
    "revision": "daa666228de399dc049969950fa3ed85"
  },
  {
    "url": "assets/js/22.2fbc1182.js",
    "revision": "cddb52eaa1d7c425cb22d4dc210d7c7e"
  },
  {
    "url": "assets/js/23.d2f0dc37.js",
    "revision": "ea9812a5d3e5eae92a593d87a09ce8fb"
  },
  {
    "url": "assets/js/24.bd9f3436.js",
    "revision": "ead5652a6bf19f8a36d033ab5fb74b17"
  },
  {
    "url": "assets/js/25.a73de08e.js",
    "revision": "f190e5225e33ff12dbe582937a572177"
  },
  {
    "url": "assets/js/26.ae6958f0.js",
    "revision": "832b34210ab4eea94602d0f81ef82dca"
  },
  {
    "url": "assets/js/27.41d532f9.js",
    "revision": "d15f2e9a4421cdf362f812c3c24c5475"
  },
  {
    "url": "assets/js/28.43d514d7.js",
    "revision": "cf90743245097d1a116d9e8d1b630671"
  },
  {
    "url": "assets/js/29.eb2d1bc4.js",
    "revision": "cd80ec4e383e48862fba0b203f20b699"
  },
  {
    "url": "assets/js/3.c3b4eec0.js",
    "revision": "87b233894e1bb4a6d3d9e727cc12f175"
  },
  {
    "url": "assets/js/30.22d593af.js",
    "revision": "63429c8fc09d4243e40532a264b9753a"
  },
  {
    "url": "assets/js/31.aec1a0e4.js",
    "revision": "9ee51c9e1459dc5e04df4691921f9b1a"
  },
  {
    "url": "assets/js/32.97e48cb1.js",
    "revision": "536a4bf767a484ae993a85ddff1afabd"
  },
  {
    "url": "assets/js/33.2bc96b27.js",
    "revision": "fc587e96c7c3c349308daddc24c056c1"
  },
  {
    "url": "assets/js/34.8e727aa3.js",
    "revision": "cf7b06daf9d1fb154149bc858a9f1e26"
  },
  {
    "url": "assets/js/35.0f031742.js",
    "revision": "6c19abaac2a60ee423b776d0db78c614"
  },
  {
    "url": "assets/js/36.09f06272.js",
    "revision": "b0d61d8c3c08eb281a94012d69ce89c8"
  },
  {
    "url": "assets/js/37.9fff549f.js",
    "revision": "82ae98dc08e131120269563c9ba23528"
  },
  {
    "url": "assets/js/38.01c22c70.js",
    "revision": "46c332faa3c67cbf7fe03f9ae133a31a"
  },
  {
    "url": "assets/js/39.6bffff60.js",
    "revision": "50c6dc54ad036eb3a7355eb362f3a50c"
  },
  {
    "url": "assets/js/4.69e4e1b9.js",
    "revision": "a965f61bc470d41a373b05febaf5a171"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.54ee6721.js",
    "revision": "c13e9d331da581ab2624595d36d35f9b"
  },
  {
    "url": "assets/js/6.2d83eac6.js",
    "revision": "49bc18da6c9f9bc787b5957f9be5bba0"
  },
  {
    "url": "assets/js/7.b1995e33.js",
    "revision": "5d64159f04f02cd4146ef66cfef63ade"
  },
  {
    "url": "assets/js/8.330203a9.js",
    "revision": "c643042a4a37c03548b344819b1e90a9"
  },
  {
    "url": "assets/js/9.1a9c7768.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.ebf741c8.js",
    "revision": "393dac947fb78348243c796725a6be7b"
  },
  {
    "url": "assets/js/vendors~docsearch.ad1b6247.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c0ab11c52bd6fc83972074abeca2b900"
  },
  {
    "url": "design/index.html",
    "revision": "2a1d79d8b189f74d0c2fdf16bde950f3"
  },
  {
    "url": "index.html",
    "revision": "9a8c727e93da0b0f1fa7b90a3f014ff0"
  },
  {
    "url": "intro/index.html",
    "revision": "f3dc40f8077e6bbe1dd2206341620942"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "90fa900cf4419eca1a438dfadf6434ad"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a554e77d37f1947e961d2eb60115f364"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "38d43355244671c27ed871bad4b81edd"
  },
  {
    "url": "software/index.html",
    "revision": "b1e088ce3ff8a3b75d9f62e11ffabe1c"
  },
  {
    "url": "test/index.html",
    "revision": "9663974e6fdf4d482e1829f4b7024a13"
  },
  {
    "url": "use cases/index.html",
    "revision": "5878a3b8b0adb87a5c5ac292eadf5df2"
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
