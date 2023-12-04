const empower = "Empower"
const assets = [
	"/",
  "./ask-desk.html",
	"./buy-products.html",
	"./index.html",
	"./login.html",
	"./post-services.html",
	"./seek-services.html",
	"./sell-products.html",
	"./news.html",
	"./signup.html",
	"./profile.html",
	"./styles/askDesk.css",
	"./styles/buyProducts.css",
	"./styles/index.css",
	"./styles/profile.css",
	"./styles/sellProducts.css",
	"./styles/signup.css",
	"./styles/womenInNews.css",
	"./js/ask-desk.js",
	"./js/buy-products.js",
	"./js/index.js",
	"./js/login.js",
	"./js/post-services.js",
	"./js/profile.js",
	"./js/seek-services.js",
	"./js/sell-products.js",
	"./js/signup.js",
	"./js/sos.js",
	"./js/womenInNews.js",
	"./images/preloader.gif",
	"./images/pragati-logo.jpg",
	"./images/NewCapture.jpg",
	"./images/nav-logo.jpg",
	"./images/nav-logo-woman.jpg",
	"./images/login-bg-new.jpg",
	"./images/home4.jpg",
	"./images/home3.jpg",
	"./images/home2.jpg",
	"./images/home.jpg",
	"./images/handicraft.jpg",
	"./images/Capture2.PNG",
	"./images/askhome.jpg",
	"./images/pwa-images/nav-logo-woman_72x72.jpg",
	"./images/pwa-images/nav-logo-woman_96x96.jpg",
	"./images/pwa-images/nav-logo-woman_128x128.jpg",
	"./images/pwa-images/nav-logo-woman_144x144.jpg",
	"./images/pwa-images/nav-logo-woman_152x152.jpg",
	"./images/pwa-images/nav-logo-woman_192x192.jpg",
	"./images/pwa-images/nav-logo-woman_384x384.jpg",
	"./images/pwa-images/nav-logo-woman_512x512.jpg",
	"./images/favicon/android-chrome-192x192.jpg",
	"./images/favicon/android-chrome-512x512.jpg",
	"./images/favicon/apple-touch-icon.jpg",
	"./images/favicon/favicon-16x16.jpg",
	"./images/favicon/favicon-32x32.jpg",
	"./images/favicon/favicon.ico"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(empower
  ).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
