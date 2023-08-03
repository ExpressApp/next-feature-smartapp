'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2149ce1dab23b0cf139eee9c1aafb63f",
"index.html": "fdd994766ee9233f0146d66ea858c88a",
"/": "fdd994766ee9233f0146d66ea858c88a",
"main.dart.js": "e3847dbbab756f974b67ebb036f6e421",
"bundle.js": "b28a59812ded0e639ac5db4087b9f796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "f0aac468ca67aacc4af622247350e466",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512-filled.png": "58974e29a1f3eea76cbbe73269285ea7",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4720194a4a8d6b882266cb62e3691e1b",
"bundle.js.LICENSE.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "6b6ddeea106f149d7c169b33fba78eb5",
"assets/NOTICES": "aff64fc79f7b5f830bc75fa8f974146a",
"assets/FontManifest.json": "657d6dee3fc737d2948cbb3bdda02630",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "82b734d4b24a1a22c4185fa42b25cd13",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/auth_application.png": "60b8e73b65101ca6134f2d3f19ab865c",
"assets/assets/images/not_found_favorite_doctors.png": "ac01c01906e0b6b17fa0437dee4da04e",
"assets/assets/images/empty_medcard.png": "5b59ad65a311b6c5e8893e71c6cb5826",
"assets/assets/images/login_page_background_bitmap.png": "9ba2329ed3153860235d84d15dbf44fa",
"assets/assets/images/wrong_login.png": "5c07104e738b5d691817436387973bf4",
"assets/assets/images/trash_account.png": "b667523ce78f1d871f5804d828436b22",
"assets/assets/images/empty_files.png": "e0e664913cec3016a6fe6f67b1c138c7",
"assets/assets/images/login_page_background_onboarding.png": "05ea302e242d82f628f56aff169abb2a",
"assets/assets/images/Map_k1.jpg": "3ea3cece787fa47d5d5a5820be81f7b8",
"assets/assets/images/Map_k1,%2520k2.jpg": "a7796cab4a0c5c094092dbf5d25d0cb4",
"assets/assets/images/Map_k2.jpg": "ad52d2cf82fe8361c424899176d1cebf",
"assets/assets/images/empty_indicator.png": "b1ce9e2dec3fd7db7757055fa5165bdf",
"assets/assets/images/Map_Norilsk.jpg": "1ac7bb2a6749f621f3529b0ff0d72c8e",
"assets/assets/images/empty_sales.png": "a86fb90c73a35a92b8e36f0320ea2276",
"assets/assets/images/Map_Sochy.jpg": "a7796cab4a0c5c094092dbf5d25d0cb4",
"assets/assets/images/update_app.png": "3ed50ebd348fb375339deea9afc2bf91",
"assets/assets/others/index": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/banners/index": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/ic_logo_launch.png": "c037fbbd4c6d57914154b31fee8f5b88",
"assets/assets/icons/settings/ic_delete_support_file.svg": "ca02ceb4b9e93cc8b6e4b6591d7ee5aa",
"assets/assets/icons/settings/ic_faceid_setting_outline.svg": "a90db191a35ac2e13fb9abfddba130cf",
"assets/assets/icons/settings/ic_password_outline.svg": "716a562f7c05826aa2c22f46ac699e3a",
"assets/assets/icons/settings/ic_agreement_outline.svg": "d287daa9eeee1d7ae33e78a2c1b97e5c",
"assets/assets/icons/settings/ic_exit_outline.svg": "cb84ab09eff162fc990b98fea1e23c48",
"assets/assets/icons/settings/ic_delete_profile.svg": "a7f4ea3549f4aa4ca43e928a8e2a66dd",
"assets/assets/icons/settings/ic_feedback_outline.svg": "d3029b27d4732552737e929faf85bfe5",
"assets/assets/icons/settings/ic_app_filled.png": "b6e14cc8cc42b033d711ef88070497dd",
"assets/assets/icons/settings/ic_fingerprint_setting_outline.svg": "86e5087625a312c0b9c1a8376c005dc6",
"assets/assets/icons/settings/ic_about_outline.svg": "d02beff035e0fae3f74adabd014a63b4",
"assets/assets/icons/settings/ic_pin_outline.svg": "c5cf766e9a850392f6594598398c1484",
"assets/assets/icons/calendar_hidden_button.svg": "7271d520b1cdd6c7fb80f12e31b420ad",
"assets/assets/icons/bottom_nav_bar/ic_image_outline.svg": "f2230a937825814e52b3a6cda60b5649",
"assets/assets/icons/bottom_nav_bar/ic_trash_outline.svg": "ac5568c3938997af6919ec852052eed9",
"assets/assets/icons/bottom_nav_bar/ic_media_outline.svg": "77ade41ca69f554049fb41f680a99faf",
"assets/assets/icons/bottom_nav_bar/ic_barcode_outline.svg": "73c39514980c296221bbc1edd534033d",
"assets/assets/icons/bottom_nav_bar/ic_menu_outline.svg": "d0ccdd0abde16b1245ffe4ca51250159",
"assets/assets/icons/bottom_nav_bar/ic_attach_outline.svg": "969ee44b811c13dc2c32f1ca1fe260ce",
"assets/assets/icons/bottom_nav_bar/ic_file_outline.svg": "84fb92a5f130f8e8d2cb7cfd5a1591e5",
"assets/assets/icons/bottom_nav_bar/ic_camera_files_outline.svg": "1565924478512cfdde6c4fab32e6f6d6",
"assets/assets/icons/ic_arrow_left_calendar.svg": "4b645f88a86bd1385fda2b3511adad10",
"assets/assets/icons/app_icon.png": "356d9305141052bd8cd3d5ff2d538a2d",
"assets/assets/icons/appointments/ic_delete_appointment.svg": "8e9db178b9da507d244d6fa0d3bbd1e6",
"assets/assets/icons/appointments/solid.svg": "1136f4b860cadce36c455126f5382677",
"assets/assets/icons/appointments/info.svg": "68878c5e48c34e99ad14805efae20971",
"assets/assets/icons/appointments/clock.svg": "7c5cfe888824424f847fd68b4ce8e885",
"assets/assets/icons/appointments/profile.svg": "8d0ca531a6f76024ef6f68782ce0479b",
"assets/assets/icons/calendar_show_button.svg": "2d8e14c08e59c2205b9b2a4ee0e4bac0",
"assets/assets/icons/ic_arrow_right_calendar.svg": "33f638598057553151b53fc49e17d83b",
"assets/assets/icons/menu_icons/ic_checklist_outline.svg": "a8411e61c972953eb54d42267f34d709",
"assets/assets/icons/menu_icons/ic_medcard_outline.svg": "70878c592e6271317fb20920929fa2d4",
"assets/assets/icons/menu_icons/ic_appointment_filled.svg": "f2fac5a085033fd35fe224c097f7c418",
"assets/assets/icons/menu_icons/ic_home_outline.svg": "8ac147ac015f5e88c7faa043bd70ef94",
"assets/assets/icons/menu_icons/ic_setting_filled.svg": "e9ba6ca1fe51427ee76bf971d1030e6c",
"assets/assets/icons/menu_icons/ic_medcard_filled.svg": "192b828aa5ce552e04bbefcbd08f6294",
"assets/assets/icons/menu_icons/ic_checklist_filled.svg": "344a375ffe9b52ae75b00cc3a2fe1382",
"assets/assets/icons/menu_icons/ic_setting_outline.svg": "f7057589db3635f3a56a399d43c2bfad",
"assets/assets/icons/menu_icons/ic_appointment_outline.svg": "d291545c0775e871a6ede78f514bd842",
"assets/assets/icons/menu_icons/ic_home_filled.svg": "caee7c7a75d1aa78630bd3fbccfe24a6",
"assets/assets/icons/menu_icons/ic_health_filled.svg": "7e49d9d340794f78094b5de84925fed4",
"assets/assets/icons/menu_icons/ic_clinic_outline.svg": "d3b5e599bca096a63c35a5e3f9075195",
"assets/assets/icons/menu_icons/ic_clinic_filled.svg": "0924f8835ee1d6020ae022666998bd55",
"assets/assets/icons/menu_icons/ic_health_outline.svg": "da1269a40faff7dea4eece40b0ff402a",
"assets/assets/icons/app_bar/app_bar_back_icon.svg": "741c71032c0a6c5c2fd691d8882edfec",
"assets/assets/icons/app_bar/ic_logo_filled.png": "12789068e586602f4aa842b8f0fe738b",
"assets/assets/icons/app_bar/search_icon.svg": "838ecbec007ddeda1370e16611724768",
"assets/assets/icons/app_bar/ic_heart_favorite_outlined.svg": "7766984dc57ba3d32b7b60a20325956d",
"assets/assets/icons/app_bar/ic_check_filters.svg": "658157d727d1559d6434fbe6ffab8d5d",
"assets/assets/icons/app_bar/close_page_icon.svg": "370c1b032d5652062a5d60d53693a7e0",
"assets/assets/icons/app_bar/close_search.svg": "83f676fc91f909982c51dcee0a7f7213",
"assets/assets/icons/app_bar/unauth_support.svg": "a3e04fe82e35c6781b491358723674c0",
"assets/assets/icons/app_bar/ic_heart_favorite_filled.svg": "7e449c5de4c2e2e262c4b607655b2b7e",
"assets/assets/icons/app_bar/filters_icon.svg": "6c43ff411112c0c0e0d77f6ed14be377",
"assets/assets/icons/subscribe/ic_payment_clinic_normal_outline.svg": "5e675251c489449252a1c983781e2d8e",
"assets/assets/icons/subscribe/ic_payment_clinic_active_outline.svg": "401c9e382eb4240e960472867cdef143",
"assets/assets/icons/subscribe/ic_payment_card_active_outline.svg": "81cdef3c813725bfccdcb5cd094a1ac9",
"assets/assets/icons/subscribe/any_doctor.svg": "cfbc6dafebf9f21225373b43468650f6",
"assets/assets/icons/subscribe/ic_payment_card_normal_outline.svg": "844f9559fcd3ee52c0cc66c6319494fa",
"assets/assets/icons/subscribe/ic_close_tips_filled.svg": "37b9e1443e16e0582fb30380f4b48689",
"assets/assets/icons/subscribe/success_creating_appointment_icon.svg": "6cabf9c3ca97d10149c3b1d9537cdfd7",
"assets/assets/icons/subscribe/time_clock.svg": "ad1bcbb1ffafa6b7f2898aaf687d5098",
"assets/assets/icons/subscribe/favorite_doctors.svg": "12d215966a82af73f7be44492c00c00f",
"assets/assets/icons/subscribe/right_arrow_icon.svg": "5da8794b0b199d8d282e7f85c27205e0",
"assets/assets/icons/subscribe/all_doctors.svg": "3a0a30c435b399cf319a9074a052f561",
"assets/assets/icons/clinics/ic_doc_oval-1.svg": "d3dd6888a1fc31171eb44d9f9b766265",
"assets/assets/icons/clinics/ic_doc_oval-3.svg": "933db45b634fe4569183559813731093",
"assets/assets/icons/clinics/ic_adress_outline.svg": "bb76f4a808fb26b7e33ed25b18d82584",
"assets/assets/icons/clinics/ic_doc_oval-2.svg": "1a39e2d6b27a1f16bbaa27ca71972cfc",
"assets/assets/icons/clinics/ic_time_outline.svg": "c68e27b34a97ea49b48f0660c0df43e9",
"assets/assets/icons/clinics/ic_pin_small.svg": "fba7539f03785e1e52ba0ca635772b54",
"assets/assets/icons/clinics/ic_stok_star_red.svg": "ada43b01cb22d450006587c536dbf16f",
"assets/assets/icons/clinics/majesticons_rubel-circle.svg": "565ceee007d01e348536d34042495a9e",
"assets/assets/icons/clinics/ic_contacts_outline.svg": "3d99575cdb6fada579280557ee3c0beb",
"assets/assets/icons/clinics/ic_pin_large.svg": "e4e75ef812cd9e2807f446d1826ba547",
"assets/assets/icons/clinics/ic_stok_star.svg": "4fabc7e8580312075eda7ce640eb3427",
"assets/assets/icons/clinics/ic_doc_oval.svg": "6571d0af00d43b258ee16aea8ee816f7",
"assets/assets/icons/clinics/ic_attention_circle.svg": "7ebd0f597216112433b898239015a985",
"assets/assets/icons/clinics/ic_ruble.svg": "bc948d6487e2b1d39f4189a48c55a2ee",
"assets/assets/icons/profile/checked_icon.svg": "2d9748e150d7c6b808bc417e8ec8a9b7",
"assets/assets/icons/profile/profile_icon_without_photo.svg": "ad5f0c0415cfeef39f31938f1c5545ab",
"assets/assets/icons/small_app_logo.png": "2587708a2e08e30c56368c86a932b5d9",
"assets/assets/icons/main_page/ic_main_button_four@1x.png": "8910fe0bf84d80e97e0d459ebcc95937",
"assets/assets/icons/main_page/ic_main_button_two@1x.png": "bedc71a2514ed9c18a7e7ae4cf504d2b",
"assets/assets/icons/main_page/ic_main_button_three@2x.png": "ef74876fa8f11962c435bbcc5e59d5fa",
"assets/assets/icons/main_page/ic_main_button_one@1x.png": "a0cb31f2c09c2255ab5583fc0f17c676",
"assets/assets/icons/main_page/ic_main_button_five@2x.png": "944ef6a830211f6e60abecd59bb4f073",
"assets/assets/icons/main_page/ic_main_button_one@2x.png": "5a269ef5888291b598c99daaffd3389e",
"assets/assets/icons/main_page/ic_main_stathoscope.png": "b87d58531cbb9b0d190b687ff578e31d",
"assets/assets/icons/main_page/ic_main_button_three@1x.png": "97f6fb8901c5b93f90664fd64aeb620c",
"assets/assets/icons/main_page/ic_main_button_two@2x.png": "b973edbf39dc5c394e5915810a0f3645",
"assets/assets/icons/main_page/ic_main_button_four@2x.png": "a5f25659ae8765207b8c9a0995038130",
"assets/assets/icons/ic_feedback_navbar_outline.png": "7077cbb931165e07eb862d2c503e5597",
"assets/assets/icons/medcard/ic_docx_outline.svg": "ba94853a3ae5055cce8205d2728461dc",
"assets/assets/icons/medcard/ic_pdf_outline.svg": "abcfcf3bb31e64dea48db56fbede07a9",
"assets/assets/icons/medcard/ic_rtf_outline.svg": "5c087339d3e344f2fb6960b5042bc913",
"assets/assets/icons/medcard/ic_txt_outline.svg": "f90b1fe7ca5496390b648474f094952e",
"assets/assets/icons/medcard/ic_img_outline.svg": "7fd579816edc13adc476a3ec04cc1d05",
"assets/assets/icons/medcard/ic_doc_outline.svg": "d5125c1b24b038a3776d99526ff20476",
"assets/assets/icons/app_logo.png": "41a5ee8edaf126a2cd6e750474316cd5",
"assets/assets/icons/small_app_logo.svg": "03530a023f376abd52e619fee5bac8f8",
"assets/assets/icons/login/trailing_password_icon.svg": "a3b17195831b8b4c707f81d177d41488",
"assets/assets/icons/login/show_password_symbols.svg": "e3be982c7d00711af2cc21bee08e1946",
"assets/assets/icons/login/ic_faceid_setting_outline.svg": "a90db191a35ac2e13fb9abfddba130cf",
"assets/assets/icons/login/not_show_password_symbols.svg": "b329b4d6a4294454bd791caef4e8494a",
"assets/assets/icons/login/ic_fingerprint_pass.svg": "e9b84fb376d10dbd7fa8ccc339258f4e",
"assets/assets/icons/login/button_del.svg": "c02c4324bae27231a94d34e7ce76a1c5",
"assets/assets/icons/login/trailing_password_disabled.svg": "444cf47b7d2e56d02a32673584e7c25a",
"assets/assets/icons/services/functional.svg": "1b3dd1c770f6d91b7e6d07932452db3f",
"assets/assets/icons/services/rentgen.svg": "99e4e6fd0b8768ac6e691eac4a117b37",
"assets/assets/icons/services/uzi.svg": "8f95a0900ad91d532ae127d961f0d961",
"assets/assets/icons/services/mrt.svg": "612991a0fc0be0e1acfd8644500013ad",
"assets/assets/icons/services/endoscopy.svg": "d2b8e1f421ed823863f59a2ab65d17ae",
"assets/assets/icons/services/computer_tomography.svg": "ce27b1ad35f63cb704862872ef2fcaad",
"assets/assets/icons/services/consultation.svg": "c9722ac91c4c45b0a325c82d663a684b",
"assets/assets/icons/services/cosmetology.svg": "e03ce700b3cc0a54e2c896fd3f8be9bd",
"assets/assets/icons/services/telemed.svg": "792c4ca656898952ad17a104d41bb9ce",
"assets/assets/icons/services/favorites.svg": "12d215966a82af73f7be44492c00c00f",
"assets/assets/icons/services/laboratory.svg": "84184ecb4b8a0b95f84d3dbd1333a0aa",
"assets/assets/icons/services/gynecology.svg": "bdd26198c6dde6d4a1f51948f134c6f5",
"assets/assets/icons/services/dantist.svg": "f065814286b10cb12436e397b7a90cc1",
"assets/assets/icons/services/procedures.svg": "00415686e09d1a0e7e3454246e32700c",
"assets/assets/icons/services/other.svg": "e605201c65c97a87b00ca6c230157fcd",
"assets/assets/icons/services/lfk.svg": "1ce4b354fd5c2201bf06cd4dfb0ecfc9",
"assets/assets/avatars/index": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/muller/Fontfabric-Muller-Bold.ttf": "3116907154a25e7a3bb61c951b1683dc",
"assets/assets/fonts/muller/Fontfabric-Muller-Medium.ttf": "f855b5eeba7546997a3cd789dc658cc9",
"assets/assets/fonts/muller/Fontfabric-Muller-Light.ttf": "dc63431a62ac96f979bb5cacacbf8d79",
"assets/assets/fonts/muller/Fontfabric-Muller-Regular.ttf": "a33aa4c709160489344886a56000adcd",
"assets/assets/fonts/aquawax_pro/AquawaxPro-Bold.otf": "14780b459ec17336d63120a45b18552a",
"assets/assets/fonts/aquawax_pro/AquawaxPro-Regular.otf": "0762656445876d401db50546ea29a06c",
"assets/assets/fonts/aquawax_pro/AquawaxPro-Medium.otf": "2a05dd61cbbb5065214913987a858f4d",
"assets/assets/fonts/aquawax_pro/AquawaxPro-Light.otf": "f4e7b97ee2c9700228e2521864c57159",
"assets/assets/animations/check_white.json": "a45aaf3aef2dd3a46620b19ee79141be",
"assets/assets/animations/loader.json": "3440978fdd4a6bf423281982d111499f",
"assets/assets/animations/loader_white.json": "42726e47b6e4bc036f840ad0061751bc",
"assets/assets/animations/onboarding_animation.json": "753cef757553626cecba58b25db4a0ca",
"assets/assets/animations/favorite_doctor_button.json": "189c57360220e4f237bfd145f02f97ee",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
