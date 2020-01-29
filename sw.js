self.addEventListener('install', (event) => {
    event.waitUntil(preCache())
});

async function preCache() {
    const cache = await caches.open('v1');
    return cache.addAll([
        './',
        './index.html',
        './src/css/styles.css',
        './src/js/index.js',
        './src/js/MediaPlayer/MediaPlayer.js',
        './src/js/MediaPlayer/plugins/AutoPlay.js',
        './src/js/MediaPlayer/plugins/AutoPause.js',
        './assets/Estamos preparando el futuro I PlatziConf México 2019 ( 360 X 640 ).mp4',
        './assets/logoPlatziVideo.png',
        './assets/maxresdefault.jpg'
    ])
}

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET') {
        return;
    }
    event.respondWith(cacheResponse(request));

    event.waitUntil(cacheUpDate(request))
})
async function cacheResponse(request) {
    const cache = await caches.open('v1');
    const response = await cache.match(request);
    return response || fetch(request);
}

async function cacheUpDate(request){
    const cache = await caches.open('v1');
    const response = await fetch(request);
    console.log('update cache: ',response)
    return cache.put(request, response)
}