const CACHE_NAME = "fight-corona-rajchandra-me";

const urlsToCache = [
  "/index.html",
  "/js/ui/charts/line.js"
]

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    // console.log('INSIDE FETCH --->',event.request.url);
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;     // if valid response is found in cache return it
          } else {
            return fetch(event.request)     //fetch from internet
              .then(function(res) {
                return caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request.url, res.clone());    //save the response for future
                    return res;   // return the fetched data
                  })
              })
              .catch(function(err) {       // fallback mechanism
                return caches.open(CACHE_NAME)
                  .then(function(cache) {
                    return cache.match('/index.html');
                  });
              });
          }
        })
    );
  }); 