'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b508caa49b63bc2e344f4488347d1ac2",
"splash/img/logo.png": "86ae79faa5f9a750ebbf497f34d5c9db",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "8cd905555254ed08272d477ba6f6a9bf",
"index.html": "c80ee638be6a940733c03de621cfcc89",
"/": "c80ee638be6a940733c03de621cfcc89",
"firebase-messaging-sw.js": "4ed6cf555f6f00f8830267563a5aa0b0",
"main.dart.js": "3b26b49894d120c9e1e3304c2e2dd8fe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2f948097abbcc94e90c04bb395a76d86",
"assets/AssetManifest.json": "5fac4c9375410b66f4cfa9f2a9a45e4f",
"assets/NOTICES": "5a2b7b2756c252e61321b704f88d2137",
"assets/FontManifest.json": "38faba27b1b87c8f47ba7dbca5e2165f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/anim/anim_question.json": "e67880623c997347ff4f1161f328a592",
"assets/assets/anim/loading.json": "a8bf4f5702414667eb7a9b529646f799",
"assets/assets/anim/success.json": "cec729f359886c82cdfc71c705279c4a",
"assets/assets/anim/card_holder.json": "2c8a4931643162b15e9634299fb770f5",
"assets/assets/anim/incoming_call.json": "64fca43d72e7af0b0387d853a2034df5",
"assets/assets/anim/send_anim.json": "b5c9335d84546a131f41e33fea60bb0f",
"assets/assets/anim/test.json": "572ee8751db539b7577142e778bc8a84",
"assets/assets/anim/default_avatar.json": "126e64e31fe95d105f589769a14f8bd6",
"assets/assets/anim/anim_incoming_call.json": "64fca43d72e7af0b0387d853a2034df5",
"assets/assets/anim/sound_anim.json": "0be0295c868e10074ef0b04a023aa7ea",
"assets/assets/anim/video_call.json": "eb295504fcd912f79cee5169b5549541",
"assets/assets/images/default_avatar.png": "bc6cb19d74412b64fd5731b5578c29ee",
"assets/assets/images/video%25202.png": "18108b772d7d690700ec60caa129dda9",
"assets/assets/images/user.webp": "5341321660a628d29e3617d09c15bd59",
"assets/assets/images/logo.png": "c063a31b006d17c2335d061148bd445d",
"assets/assets/images/img_no_jobs.png": "1eda0e0ab2f96ab0ed773deb4a1838d1",
"assets/assets/images/banner%25202.png": "b58a97c0fa714967a408a358cd8c93be",
"assets/assets/images/image4.jpg": "434b38274221e47478d1bb312ab7411b",
"assets/assets/images/banner%25201.png": "c5afb82c64e3f83c7070ba134aee871c",
"assets/assets/images/image5.jpg": "56f7293c485c5a562f0a00efd712c949",
"assets/assets/images/disk.png": "1de129bbe51e2b50633cfb5d043c0e93",
"assets/assets/images/image1.jpg": "e81b23bd169f33c4db64688935e4896b",
"assets/assets/images/image2.jpg": "8b0f9d42f70649d002a28d18dd45c91f",
"assets/assets/images/image3.jpg": "7f700ce008bcebe43793abfd203ce541",
"assets/assets/user/user3.png": "903014ee8a266158216a25c7c9409e15",
"assets/assets/user/user2.png": "e464773a4992c22c40dc90d2e44ddbdb",
"assets/assets/user/user1.png": "23dc7c37653b35ff1ac76dc4a9ba5fa1",
"assets/assets/user/user4.png": "87b16eeccc793495bc56ffc966001f13",
"assets/assets/lang/en.json": "ab17683f72d7e6a4def9a6c8ca2c1c26",
"assets/assets/lang/da.json": "5b76b0eef9af8a2300673e0553f609f9",
"assets/assets/lang/es.json": "5b76b0eef9af8a2300673e0553f609f9",
"assets/assets/icons/ic_trash.png": "48cf30df89eee68e5d16b6b7e14ac6e1",
"assets/assets/icons/bitcoin.png": "778418b9c65b0a6e1fed1854fba6037a",
"assets/assets/icons/ic_notification.png": "5ed536eff0fa8e0ed93b590646938e93",
"assets/assets/icons/ic_like.png": "56eaea9cbe57efaf4f961c638c40fdec",
"assets/assets/icons/master-card.png": "b57dac5163fd617224adcb30a9e12552",
"assets/assets/icons/ic_explore.png": "5fbea8f16cf03ff1b5d940703dee907d",
"assets/assets/icons/ic_home.png": "3182014358c7d5b742f4055acde4689e",
"assets/assets/icons/ic_ggl.png": "6c1540a99b71d6e2f030c40abaf825b7",
"assets/assets/icons/ic_exploreactive.png": "c14d3c22b9ec6cd62b5a6e252525e1a5",
"assets/assets/icons/visa.png": "702694c5e1f9f3ff6a590f82406d0b54",
"assets/assets/icons/ethereum.png": "54e3a1c67c7f347bf8ffa71e046c6c52",
"assets/assets/icons/ic_appicon.png": "a50eee0ebdb04210ed23c66740d6f714",
"assets/assets/icons/ic_profile.png": "70126ffcbcf63feb6fb043214354e34c",
"assets/assets/icons/ic_insta.png": "b4d02a294b71ad817e02208728dcdd56",
"assets/assets/icons/ic_comment.png": "d48d2b2dc1de09ab64fae4a40adff15f",
"assets/assets/icons/heart_fill.png": "95383497eb99faa79c1be4b69df52f49",
"assets/assets/icons/jcb-payment.png": "7355392743b9b9b6772f6d55958b6134",
"assets/assets/icons/ic_profileactive.png": "0ef2b99e5dcda476625565f34dcc9cf4",
"assets/assets/icons/ic_views.png": "f9bd9042c1d218c0656b4468481e5a7a",
"assets/assets/icons/heart.png": "e04f2ec0f5f01ffdb197cab1fb4ef2c9",
"assets/assets/icons/ic_star.png": "d92a7af611063bc9d5bf7073a8cfdd6a",
"assets/assets/icons/ic_fb.png": "089ba8d8429c71c19518bc4957f017cb",
"assets/assets/icons/ic_launcher.png": "d0c64f4d3eb917adf19854fdd71ae514",
"assets/assets/icons/ic_homeactive.png": "533da9f178d1bcef46b95bb9e067d18d",
"assets/assets/icons/ic_play.png": "3e183c4dcbed32de5fc7659dd7a012c4",
"assets/assets/icons/ic_verified.png": "fbf67ef297b1b124853f81b37ab225d7",
"assets/assets/icons/ic_notificationactive.png": "cb094e8ebab04582d43f715ee76e7985",
"assets/assets/icons/ic_twt.png": "31aba3d9e076b9688e8c5b355326336b",
"assets/assets/icons/play.png": "ad13b7f71f12296a6b1e668e6eba063d",
"assets/assets/icons/close.png": "c2721f4d1ea134070e75ba607a113f98",
"assets/assets/fonts/Allura-Regular.ttf": "4c367dea91c4c574c0839a91ea5978e2",
"assets/assets/fonts/AtkinsonHyperlegible-Regular.ttf": "fddc5cdae4c83375f5533d16d29613de",
"assets/assets/fonts/AtkinsonHyperlegible-Bold.ttf": "7b1ba8889f85c3dab6525fb9423080a0",
"assets/assets/fonts/AtkinsonHyperlegible-BoldItalic.ttf": "76c2a0e11b06231dcf8a4bfd59928aa6",
"assets/assets/fonts/AtkinsonHyperlegible-Italic.ttf": "53f916cf10dd0192172e0231389ea3c0",
"assets/assets/thumbnails/lol/Layer%2520978.png": "d34f697762adb8590f935d21748bc6e5",
"assets/assets/thumbnails/lol/Layer%2520979.png": "39a880b27a9410f5ccee96595523bbc2",
"assets/assets/thumbnails/lol/Layer%2520981.png": "fb690b0f25a9364ea4ebf7637a9e359c",
"assets/assets/thumbnails/lol/Layer%2520980.png": "1c3dea8a9c15526d27aa7ade2ee9a44f",
"assets/assets/thumbnails/food/Layer%2520783.png": "6182fe451d2ef4f0907fafbd80e953c8",
"assets/assets/thumbnails/food/Layer%2520784.png": "8ebc493a6eb378f307ea58665db88584",
"assets/assets/thumbnails/food/Layer%2520785.png": "509d8e1f8acff0fbb933d67e273e7148",
"assets/assets/thumbnails/food/Layer%2520787.png": "d2c0a8a9e82f8863b0844ffda0f94b59",
"assets/assets/thumbnails/food/Layer%2520786.png": "6d8c78bb74c6fc3cd6e8234651e26656",
"assets/assets/thumbnails/food/Layer%2520788.png": "39dd5e6426373a9a6ab0542d0ecda3f5",
"assets/assets/thumbnails/dance/Layer%2520953.png": "0c9114a740d8f832f17bed0541347910",
"assets/assets/thumbnails/dance/Layer%2520952.png": "b4d95e54439717c012fff72a84887552",
"assets/assets/thumbnails/dance/Layer%2520951.png": "5c8a6d17fe69eac0f55cfddfdcb3fe24",
"assets/assets/thumbnails/dance/Layer%2520954.png": "c103073c8b517cd5998057029cc80885",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
